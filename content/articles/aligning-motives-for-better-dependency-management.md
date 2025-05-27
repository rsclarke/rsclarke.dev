---
title: Aligning Motives for Better Dependency Management
slug: aligning-motives-for-better-dependency-management
author: rsclarke
date: 2025-05-27
tags: [appsec]
description: "Aligning the motives of engineering and security teams is crucial for effective dependency management. By understanding both explicit and implicit motives, such as product delivery and vulnerability mitigation, organisations can design a process that balances innovation and security."
---

There’s an exciting new feature to build, a customer problem to solve, meanwhile security teams urge timely dependency updates to patch vulnerabilities.  This tug-of-war creates friction; engineering teams prioritise product while security focuses on safety. The root of this lies in explicit motives — what teams consciously aim to achieve — and implicit motives, the hidden drivers like fear of failure or need for approval.  Understanding these motives can help security and engineering teams collaborate on designing processes that align to both sides, ensuring software security without disrupting innovation.

## Understanding the Conflict
A pitch, a cycle, a sprint, an epic, 2 weeks from now or in 6 months time, regardless of how or the length of time it takes, engineering teams are driven by explicit motives to develop and deliver new features, meet product deadlines, enhance user experience, or drive business value.  Their success is often tied to feature release or user adoption. As a result, dependency updates are deprioritised, perhaps secondary to core responsibilities creating resistance to security tasks.

Security on the other hand, aim to ensure application security by mitigating vulnerabilities, including timely dependency updates. Success here is often tied to compliance and vulnerability management goals, a reduction of 10% for example.  The push for frequent updates may be perceived as disruptive to engineers and their feature focused goals.

Beneath these explicit goals are implicit motives;
- Engineers may resist updates fearing they will break the build or delay features.
- Security teams worry about the risk of data breaches through unpatched vulnerabilities, or seek approval from leadership for maintaining compliance.

The misalignment can cause resistance, deprioritised dependency updates, security pushing harder and tension growing.  To resolve this, a process for managing dependency updates must align with the motives of each to make it a shared win.

1. Align explicit motives of engineering and security teams with shared organisational goals.
2. Address the implicit motives such as fear of breaking builds or assurance that partial updates (e.g critical vulnerabilities) are progress.

## Designing a Motive-Aligned Process
### Align Explicit Motives
Typically an organisation, or at least within engineering teams, often have a particular focus or priority such as resiliency or quality.  The discussion on dependency management should be framed around a shared goal emphasising the benefits such that it is accepted at both leadership and ultimately the engineer working on that task.  If the task is not aligned with the organisation or teams current priorities and the shared goal has not been established, an engineer seeing the dependency update or vulnerability notification may struggle to see this as appropriate or the right thing to do.

Look for incentives — not money — to tie with dependency updates for engineering teams, these could be metrics regarding product quality, reliability or software delivery.  Similarly making them part of feature success, we built it, but also cleaned the shop floor.

Enable engineering to report how their contribution to dependency management explicitly moved the dial.

### Address Implicit Motives
Much harder to identify and address are implicit motives that influence behaviour, the actions, preferences or emotional responses we may have.  For example we may fear updating a dependency for breaking the build, or that we have not mitigated all vulnerable dependencies and worry about a potential data breach.  Teams may require autonomy, favour stability or feel isolated from security if there is already no collaboration.  As security teams, asserting control and strict update policies to influence the development lifecycle will most likely be met with resistance.  Engaging engineering teams to discuss their needs and developing a process that fits within the security team’s objectives will bring alignment that can be harnessed more productively.

Consider for example, a security team enables a software composition analysis tool, that immediately starts raising pull requests for dependency updates, or filing bug tickets.  The overwhelming backlog of tasks creates no motive.  However, using such automation that provides prioritised (be it risk, impact, reachability however seen fit), yet scheduled may suit the needs of a team requiring stability.  The security team can see progress towards compliance and engineering can appropriately allocate updates into planning and are seen as feature delivery.

## Components of an Aligned Process
The process needed for your organisation, or the model in which security is either embedded or consulted, will likely see a different design based on the shared goal and the needs of each team.  However, there are often some common components that can be incorporated to address the explicit and implicit motives.

### Dependency Identification and Risk Assessment
Use an automated software composition analysis tool to generate a Software Bill of Materials (SBoM).  Dependabot, Syft from Anchore, Semgrep, to name a few, each often integrate into a larger application security platform.  Identification of dependencies across your services, components, repositories, or however you care to slice your architecture, can help with knowing where change needs to be applied.  Such tools often can provide means of updating dependencies (discussed next), often aligning with engineers’ goal of stable software and performing updates to prevent feature delays.

Dependencies can be categorised by risk aligning with security’s goal of vulnerability management. Automation reduces fear of missing a vulnerability related to a dependency.  Cataloguing dependencies enables engineering and security teams to work together when critical vulnerabilities are identified to remediate across all services.

### Prioritisation and Scheduling
Updates should be scheduled strategically, whilst we can use automation to generate pull requests or bug tickets, their use should be limited to avoid noise. The maturity and performance of engineering teams (see [DORA](https://dora.dev)) will often dictate the strategy and evolve over time.  Some teams may be able to immediately respond to dependency updates or vulnerability alerts, others require a predictable schedule to satisfy stability.

Consider a service level agreement between security and engineering teams, with objectives around critical, moderate and minor vulnerabilities.  Yet how and when the resolution of vulnerabilities within dependencies should be discussed with engineering teams.  Consider immediate action for critical, schedule moderate within sprint cycles or cool down, and quarterly maintenance for minor vulnerabilities.  Notifications shouldn’t be pushed upon engineering as it becomes overwhelming and generates resistance, but appropriately schedule as and when needed by team.  The updates are seen as part of delivering reliable features during the sprint with an agreed allocated capacity to avoid disrupting such work.

Updates become manageable, respecting the engineers time to focus on feature delivery, whilst security sees progress towards compliance.

### Testing and Validation
Not all dependencies will follow semantic versioning and even then there’s no guarantee a breaking change hasn’t been introduced in a patch or minor release. The use of continuous integration and continuous delivery (CI/CD) pipelines to automate the testing of updates in pre-production environments and validation to confirm functionality enable engineers to ensure feature integrity and for security vulnerability fixes.  CI/CD pipelines with test suites can quickly identify breaking builds and broken integrations from dependency updates, over time comprehensive test suites reinforce confidence in change.

Supporting the engineering team in developing such pipelines and mechanisms is not only a win for security through quick remediation of critical vulnerabilities but enables improved lead time for features.

### Deployment and Monitoring
Whether automating deployments or manually, the need for control is given to engineering teams.  Automating deployments ensure consistency and reduce surprises.  Again, security teams supporting the automation effort have a clear signal when a dependency is update in production (or pre-production environment) and a vulnerability fixed.

By providing rollback mechanisms during deployment we can mitigate risks that might not have materialised in earlier stages of the pipeline.  The same mechanism could be applied for feature releases, improving failed deployment recovery time.

Observability for your service should identify whether the dependency update, vulnerability fix or change in general has failed.  A changelog not only serves as an understanding of contributing factors that may be affected with a failed deployment, helping engineering diagnose a problem, but also supports security’s goal for compliance providing clear evidence of when a given vulnerability was fixed and deployed.

### Feedback and Recognition
Celebrate the success, recognise and praise the efforts of teams involved, and adjust the process accordingly based on feedback.  Consider the dependency updates, vulnerabilities fixed and the process in sprint retrospectives.  This helps reinforce the shared goal and acknowledgement of the right thing to do.

When teams have visible metrics, progress becomes apparent. Security teams can recognise the efforts of engineering and observe vulnerabilities being managed over time aligning their objectives.

## Conclusion
Better dependency management and in turn improving software security can be achieved through aligning the motives of engineering and security teams.  A shared organisational goal and incentives to recognise dependency management and vulnerability management aligns the explicit motives.  Implicit motives should be acknowledged and addressed through the design of the process to meet the needs of both teams.  Most importantly are the communication and collaboration between engineering and security to ensure the process finds balance between developing and delivering new features, with compliance and vulnerability management goals.
