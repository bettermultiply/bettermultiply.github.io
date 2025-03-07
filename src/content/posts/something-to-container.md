---
title: containers
hidden: true
---

container is used to run applications in isolated user spaces ***in any cloud or non-cloud environment***, regardless of type or vendor. -> more rapidly developing and fielding software updates.

fully functional and portable. isolation makes its environment independent so that it will not disturb other environment.

although container bundling related configuration files, libraries and dependencies but sharing a common operating system kernel(OS)

there are two types of container OS and Application.

要深入了解 container 我们就决不能错过 OCI(Open Conatiner Initiative).

OCI 定义了 container image 格式和 runtime 的规范，几乎所有 container 生态里的主流参与者都遵循了这个标准

OCI 有两个标准 Iamge spec 和 Runtime spec.
他们之间的关系如下图所示：

Image Spec              Runtime Spec
|
config           | runtime config
layers           | rootfs
|                |     |               delete
|                |     |                  |
|         unpack |     |     create       |     start/stop/exec
Image (spec) ----|-> Bundle ---------> container  ------->  process
                 |
                 |

接下来分别介绍两种标准


借助 Image spec 能够更好地创建 用于 building, transporting, preparing a container to run 的可交互工具.(此处可交互应当理解为：任意工具的 Image 都可以被其它工具正常地使用)

一个 OCI Image 由：an image manifest, an image index(optional), a set of filesystem layers, a configuration 四部分组成

image manifest 包含了针对特定架构和 os 的 a configuration 和 set of layers for a single container image.(所有 layers 的 reference)

config 包含创建运行时(container)的时候需要的配置、layers的配置、image 的 metadata

layers 存储在 blobs 当中 用于组成最后的 rootfs ，第一层比较特殊 称为 base 其余所有层都只包含了对 base 的改变(称为 changeset)(所有层都有固定顺序，否则无法正确构建)

与 image manifest 不同，image index 包含了可以跨越各种架构和OS 的 a set of images. 它是更高层次的 manifest 指向特定的 image manifest.(适合一个或多个平台)(即在 index.json 文件内描述不同组合的 arch 和 OS 对应的 manifest，在没有 paltform 描述符的部分，可能指向了另一个包含manifests 索引信息的文件)


将 image 解压，我们一般可以看到里面的结构
├── blobs
│   └── sha256
│       ├── 4297f0*      (image.manifest)
│       ├── 7ea049       (image.config)
│       └── ......
├── index.json
├── manifest.json (不在标准内)
└── oci-layout

* take only the first 6 digits for clarity
其中 blobs 目录 包含了内容可寻址的 blob

oci-layout 作为 OCI Layout base 的标记，并提供当前正在使用的 image-version 的版本

index.json 见上方

manifest.json 声明了镜像的配置、tag 和包含的层级
