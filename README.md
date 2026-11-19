# OmniBox 极客副业订阅 98 项完整迁移包

本仓库严格按 `https://jikefuye.cn/tvbox.json` 的顺序生成 **98 个独立 JavaScript 入口**。每个脚本头部保留原 `key / api / ext`，详见 [SOURCE-MAP.md](SOURCE-MAP.md) 与 [manifest.json](manifest.json)。

## 导入

1. 把本目录全部上传到一个 GitHub 仓库。
2. 全局替换脚本中的 `YOUR_GITHUB_USER/OmniBox-Jikefuye-98` 为你的用户名和仓库名。
3. OmniBox 后台 → 爬虫管理 → GitHub 导入，填写仓库地址。
4. 导入后先配置后台 → **网盘授权**，再测试网盘源。

## Cookie / Token

Cookie 不应写入仓库。夸克、UC、百度、115、天翼、阿里、迅雷、123 等授权在 OmniBox 后台的“网盘授权”中保存；脚本通过 `OmniBox.getDriveFileList / getDriveVideoPlayInfo` 使用这些授权。

## 迁移原则

- 原订阅的 98 个入口一个不少。
- 能直接对应的使用同站实现。
- 原 Guard 中依赖 Android/ARM 私有实现的条目，使用同类别、可运行的 OmniBox 实现，并在脚本头部标记 `@compatibility-source`。
- 配置中心和我的网盘均保留，不再删除。
