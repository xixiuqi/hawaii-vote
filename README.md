# 夏威夷选点投票

12/5–12/13 茂宜 + 大岛行程的选点投票页面。6 个人打开同一个网址，不用登录，就能对 25 个地方选想去程度、打 1–5 星、单独留言。结果页实时汇总，每天傍晚由 Claude 做一轮取舍，写明理由。

网址：https://xixiuqi.github.io/hawaii-vote/

## 文件

```
index.html        投票页 + 结果页（GitHub Pages 直接发布仓库根目录）
config.js         Apps Script 网址
plan.json         每日取舍结果（Claude 每天更新）
apps-script.gs    Google 表格后端的代码备份
DAILY_ROUND.md    每日取舍任务的说明
.github/workflows/snapshot-votes.yml   每小时把投票同步进 data/votes.json
```

## 数据存在哪

- 投票和留言实时存在 Google 表格「夏威夷投票」的 `votes` 页，每人一行。
- 后端是 Apps Script 项目 `hawaii-vote-backend`（代码同 `apps-script.gs`），以 Web 应用部署，执行身份是你，任何人可访问。
- `snapshot-votes.yml` 每小时第 15 分钟把表格里的投票拷进 `data/votes.json`，有变化才提交，仓库历史里能看到每一轮改动。想马上同步，在 Actions 里手动运行 `Snapshot votes`。

## 每日取舍

每天 17:50（太平洋时间）Claude 的定时任务按 `DAILY_ROUND.md` 读 `data/votes.json`，按可行性、花费、好玩程度和时间安排做取舍，更新 `plan.json` 和 `plans/round-N.json` 并推送，网页「看结果」顶部会显示。Claude 推送需要在 claude.ai 的连接器设置里连上 GitHub，并授权 `hawaii-vote` 仓库。

## 改内容

- 地点、价格、链接：改 `index.html` 里的 `PLACES` 数组。编号不要改，已经投过的票按编号对应。
- 改了后端代码：在 Apps Script 里改好后，**部署 → 管理部署 → 编辑 → 版本选「新版本」→ 部署**，网址不变。

## 注意

- 没有登录，谁拿到网址都能投票，也能看到所有人的名字和留言。只在群里发。
- 每台设备有自己的投票身份。换手机后填同一个名字，页面会提示「载入我之前的投票」。
- 投票表连不上时，页面也能用：选完点「复制报号」，贴到群里。
