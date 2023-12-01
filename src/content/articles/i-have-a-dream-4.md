---
title: I Have a Dream - Fourth
pubDate: 2023-01-02
author: Brandon Gubitosa
image:
  url: https://www.plural.sh/blog/content/images/size/w1384/2023/10/Continuous-Deployment-2.png
desc: Kubernetes API serves as the interface to interact with a K8 cluster. If deprecated APIs are still active in the cluster disruptions may occur.
authorPhoto: https://www.plural.sh/blog/content/images/size/w320/2022/10/profile_pic_1.jpeg
tags: ["computer","programming","internet","skill","Kubernetes","Challenges"]
---

Although Kubernetes provides official documentation to examine deprecated or removed APIs, identifying the resources in your cluster that utilize these APIs can be quite challenging.

On top of that, Kubernetes abides by a stringent API versioning protocol, resulting in multiple deprecations of v1beta1 and v2beta1 APIs across several releases. Their policy states that Beta API versions are mandated to receive support for a minimum of 9 months or 3 releases (whichever is longer) after deprecation, after which they may be subject to removal.

In cases where APIs that have been deprecated are still actively employed by workloads, tools, or other components interfacing with the cluster, disruptions may occur. Hence, it is imperative for users and administrators to conduct a thorough assessment of their cluster to identify any APIs in use slated for removal, and subsequently migrate the affected components to leverage the appropriate new API version.

Merely listing your Kubernetes resources using kubectl commands may yield inaccurate API version information, as explained in this issue.
Plural CD is an end-to-end solution for managing Kubernetes clusters and application deployment. Plural offers users a managed Cluster API provisioner to consistently set up managed and custom Kubernetes control planes across top infrastructure providers.

Additionally, Plural provides a robust deployment pipeline system, empowering users to effortlessly deploy their services to these clusters. Plural acts as a Single Pane of Glass for managing application deployment across environments.

With Plural CD you can effortlessly detect deprecated Kubernetes APIs used in your code repositories and helm releases minimizing the effect deprecated APIs can have on your ecosystem.
Features:

Rapidly create new Kubernetes environments across any cloud without ever having to write code
Managed, zero downtime upgrades with cluster API reconciliation loops, don’t worry about sloppy and fragile terraform rollouts
Dynamically add and remove nodes to your cluster node topology as you like
Use scaffolds to create functional gitops deployments in a flash
First-class support for cdk8s.io to provide a robust Kubernetes authoring experience with unit testability and package management
Integrated secret management
A single, scalable user interface where your org can deploy and monitor everything fast.
