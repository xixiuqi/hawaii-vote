# 夏威夷选点投票

12/5–12/13 茂宜 + 大岛行程的选点投票页面。6 个人用同一个公开网址打开，不用登录，就能对 25 个地方选想去程度、打 1–5 星、单独留言。结果页实时汇总，每天傍晚由 Claude 做一轮取舍，写明理由。

## 结构

```
docs/                     # GitHub Pages 发布的就是这个文件夹
  index.html              # 投票页 + 结果页
  config.js               # 填 Apps Script 网址
  plan.json               # 每日取舍结果（Claude 每天更新）
apps-script/Code.gs       # Google 表格后端：存投票、留言
data/votes.json           # 每天 17:30 自动备份的投票快照
plans/                    # 每轮取舍的存档
DAILY_ROUND.md            # 每日取舍任务的说明
.github/workflows/snapshot-votes.yml   # 每天把投票拷进 data/votes.json
```

## 上线步骤

### 1. 建投票表（Google Sheets + Apps Script，约 5 分钟）

1. 新建一个 Google 表格，名字随意，比如「夏威夷投票」。
2. 菜单 **扩展程序 → Apps Script**，删掉默认代码，把 `apps-script/Code.gs` 整段粘进去，点保存。
3. 右上角 **部署 → 新建部署**，点齿轮选 **Web 应用**：
   - 执行身份：**我**
   - 谁可以访问：**任何人**
4. 按提示授权。看到"Google 尚未验证此应用"时，点 **高级 → 转至…（不安全）**，这是你自己的脚本。
5. 复制 **Web 应用网址**（以 `/exec` 结尾），粘到 `docs/config.js` 里 `apiUrl: ""` 的引号中间，保存。

### 2. 建 GitHub 仓库并上传（约 3 分钟）

1. 登录 github.com，右上角 **+ → New repository**。
   - Repository name：`hawaii-vote`
   - 选 **Public**（免费账号的 Pages 需要公开仓库）
   - 其他都不勾，点 **Create repository**。
2. 在新仓库页面点 **uploading an existing file**。
3. 打开电脑上的 `hawaii-vote` 文件夹，**全选里面的所有东西**（docs、apps-script、data、plans、.github、README.md 等），拖进网页的上传框。
   - Windows 资源管理器默认可能不显示 `.github` 文件夹：在「查看 → 显示 → 隐藏的项目」打开即可。没传也不影响网页，只是没有每日自动备份。
4. 页面最下面点 **Commit changes**。

### 3. 打开 GitHub Pages（1 分钟）

1. 仓库 **Settings → Pages**。
2. **Source** 选 **Deploy from a branch**，Branch 选 **main**，文件夹选 **/docs**，点 **Save**。
3. 等 1–2 分钟刷新，页面顶部会出现网址：`https://<你的用户名>.github.io/hawaii-vote/`

### 4. 测一下

打开网址，填名字，选两个地方，底部显示「已保存」，切到「看结果」能看到自己，就成功了。Google 表格的 `votes` 页里也会多一行。然后把网址发到群里。

## 每日取舍

- 每天 17:30（太平洋时间）`snapshot-votes.yml` 把投票拷进 `data/votes.json`。
- 17:50 Claude 的定时任务按 `DAILY_ROUND.md` 读投票、做取舍，更新 `docs/plan.json` 并推送，网站自动刷新。这一步需要 Claude 能推送到你的仓库：在 claude.ai 的连接器设置里连上 GitHub，并把 `hawaii-vote` 仓库授权给它。

## 改内容

- 地点、价格、链接：改 `docs/index.html` 里的 `PLACES` 数组，编号不要改，已经投过的票按编号对应。
- 改了 `apps-script/Code.gs` 后，要在 Apps Script 里 **部署 → 管理部署 → 编辑 → 版本选「新版本」→ 部署**，网址不变。

## 注意

- 没有登录，谁拿到网址都能投票，也能看到所有人的名字和留言。只在群里发。
- 每台设备有自己的投票身份。换手机后填同一个名字，页面会提示「载入我之前的投票」。
- 投票表还没接上时，页面也能用：选完点「复制报号」，贴到群里。
