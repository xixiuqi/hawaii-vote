# 夏威夷选点投票

12/5–12/13 茂宜 + 大岛行程的选点投票页面。大家用一个公开网址打开，不用登录，就能对 25 个地方选想去程度、打 1–5 星、单独留言。结果页会实时汇总，每天傍晚由 Claude 做一轮取舍，写明理由。

## 结构

```
site/                     # 发布到 GitHub Pages 的内容
  index.html              # 投票页 + 结果页
  config.js               # 填 Apps Script 网址
  plan.json               # 每日取舍结果（Claude 每天更新）
apps-script/Code.gs       # Google 表格后端：存投票、留言
data/votes.json           # 每天 17:30 自动备份的投票快照
plans/                    # 每轮取舍的存档
DAILY_ROUND.md            # 每日取舍任务的说明
.github/workflows/
  pages.yml               # 推送 site/ 后自动部署
  snapshot-votes.yml      # 每天把投票拷进 data/votes.json
```

## 上线步骤（大约 10 分钟）

### 1. 建投票表（Google Sheets + Apps Script）

1. 新建一个 Google 表格，名字随意，比如「夏威夷投票」。
2. 菜单 **扩展程序 → Apps Script**，把 `apps-script/Code.gs` 的内容整段粘进去，替换默认代码，保存。
3. 右上角 **部署 → 新建部署**，类型选 **Web 应用**：
   - 执行身份：**我**
   - 谁可以访问：**任何人**
4. 第一次会让你授权，按提示允许（会提示"未经验证的应用"，点"高级 → 继续"，这是你自己的脚本）。
5. 复制生成的 **Web 应用网址**（以 `/exec` 结尾）。

### 2. 填网址

打开 `site/config.js`，把网址粘到 `apiUrl: ""` 的引号里。

### 3. 推到 GitHub

```bash
cd hawaii-vote
git init -b main
git add .
git commit -m "Hawaii trip ballot"
gh repo create hawaii-vote --public --source . --push
```

没有装 `gh` 的话，先在 github.com 新建一个空仓库 `hawaii-vote`，再：

```bash
git remote add origin https://github.com/<你的用户名>/hawaii-vote.git
git push -u origin main
```

> 免费账号的 GitHub Pages 需要仓库是 public。页面上本来也没有私人信息，但仓库里的 `data/votes.json` 会包含大家的名字和留言。

### 4. 打开 Pages

仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
然后到 **Actions** 页手动跑一次 `Deploy site to GitHub Pages`（之后每次改 `site/` 会自动部署）。

网址是：`https://<你的用户名>.github.io/hawaii-vote/`

### 5. 测一下

打开网址，填名字，随便选两个，看到底部显示「已保存」，切到「看结果」能看到自己就对了。Google 表格的 `votes` 页里也会多一行。

## 每日取舍

- 每天 17:30（太平洋时间）`snapshot-votes.yml` 把投票拷进 `data/votes.json`。
- 17:50 Claude 的定时任务按 `DAILY_ROUND.md` 读投票、做取舍，更新 `site/plan.json` 并推送，网站自动刷新。
- 想马上跑一轮：Actions 里手动运行 `Snapshot votes`，再让 Claude 跑一次。

## 改内容

- 地点、价格、链接：改 `site/index.html` 里的 `PLACES` 数组，编号不要改，已经投过的票按编号对应。
- 改了 `apps-script/Code.gs` 后要在 Apps Script 里 **部署 → 管理部署 → 编辑 → 新版本**，网址不变。

## 注意

- 没有登录，谁拿到网址都能投票、看到所有人的名字和留言。只在群里发。
- 每台设备有自己的投票身份。换手机后填同一个名字，页面会提示「载入我之前的投票」。
- 网址没接上投票表时，页面仍能用：选完点「复制报号」，贴到群里。
