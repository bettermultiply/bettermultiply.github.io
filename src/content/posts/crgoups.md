---
title: cgroups
hidden: true
---
the resources be limited can also be monitored? how??
the resources are allocated among processes or groups of processes.

the usage of cgroups hierarchy?
we create the cgroup first and then move the process to the cgroup.(instead of create the process natural belongs to the cgroup?)
the "move" can be automatic through configuration and management tools.
In Linux, processes are created outside cgroups by default.

the kernel's cgroup interface is provided through a pseudo-filesystem called ***cgroupfs***

What is per-resources-type subsystems?
subsystem is a kernel component known as resource controller. can limit and account the resource, freeze and resume the execution of the process.

whenever meet the limit, the kernel will take actions to avoid going beyond the limit.

cgroup filesystem?

a hierarchy is defined by creating, removing, renaming subdirectories within the cgroups. -> the lower layers of the hierarchy can't exceed the limit of the higher layers(each).

