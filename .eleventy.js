var unified = require("unified");
var markdown = require("remark-parse");
var remark2rehype = require("remark-rehype");
var html = require("rehype-stringify");
var extract = require("remark-extract-frontmatter");
var frontmatter = require("remark-frontmatter");
var yaml = require("yaml").parse;
var toVfile = require("to-vfile");

var faLibrary = require("@fortawesome/fontawesome-svg-core").library;
var faDom = require("@fortawesome/fontawesome-svg-core").dom;
var faIcon = require("@fortawesome/fontawesome-svg-core").icon;

var faSolid = require("@fortawesome/free-solid-svg-icons").fas;
var faBrands = require("@fortawesome/free-brands-svg-icons").fab;
var faRegular = require("@fortawesome/free-regular-svg-icons").far;

var vFiles = {};

class Remark {
  constructor() {
    this.extension = "md";
    this.key = "md";
    this.read = false;
  }

  init() {}

  getData(inputPath) {
    if (vFiles[inputPath]) {
      return vFiles[inputPath].data;
    }

    let vfile = toVfile.readSync(inputPath);
    let tree = unified().use(markdown).use(frontmatter).use(extract, { yaml: yaml }).parse(vfile);
    vfile.tree = tree;
    vFiles[inputPath] = vfile;
    return vfile.data;
  }

  compile(str, inputPath) {
    return function (data) {
      let processor = unified().data(data).use(remark2rehype);
      let tree = processor.runSync(vFiles[inputPath].tree);
      return unified().use(html).stringify(tree).toString();
    };
  }
}

module.exports = function (eleventyConfig) {
  eleventyConfig.extensionMap.add(new Remark());

  eleventyConfig.addPassthroughCopy("site/assets");

  faLibrary.add(faRegular, faBrands, faSolid);

  eleventyConfig.addShortcode("fontawesomeCSS", function () {
    return faDom.css().toString();
  });

  eleventyConfig.addShortcode("fontawesomeIcon", function (prefix, iconName, ...classes) {
    return faIcon({ prefix: prefix, iconName: iconName }, { classes: classes }).html.toString();
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/typeface-ubuntu-mono/files/ubuntu-mono-latin-400.woff": "assets/ubuntu-mono-latin-400.woff",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/typeface-ubuntu-mono/files/ubuntu-mono-latin-400.woff2": "assets/ubuntu-mono-latin-400.woff2",
  });

  return {
    dir: {
      input: "site",
      output: "build/site",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: false,
  };
};
