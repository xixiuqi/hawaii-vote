# 夏威夷选点投票

12/5–12/13 茂宜 + 大岛行程的选点投票页面。6 个人打开同一个网址，不用登录，就能对 25 个地方选想去程度、打 1–5 星、单独留言。结果页实时汇总，每天傍晚由 Claude 做一轮取舍，写明理由。

网址：
- 选点投票：https://xixiuqi.github.io/hawaii-vote/
- 行程地图：https://xixiuqi.github.io/hawaii-vote/trip.html （可以直接跳到某天，比如 `trip.html#d2` 是 12/6）

## 文件

```
index.html        投票页 + 结果页（GitHub Pages 直接发布仓库根目录）
trip.html         行程地图：逐日路线、悬停预览、预订、预算、须知
trip-data.js      行程数据（地点、坐标、每天安排、预订、预算）——改行程只改这个文件
routes.json       每天的真实驾车路线，由 Build routes 自动生成
scripts/build-routes.mjs  用 OSRM 算路线的脚本
config.js         Apps Script 网址
plan.json         每日取舍结果（Claude 每天更新）
apps-script.gs    Google 表格后端的代码备份
DAILY_ROUND.md    每日取舍任务的说明
.github/workflows/snapshot-votes.yml   每小时把投票同步进 data/votes.json
.github/workflows/build-routes.yml     trip-data.js 改动后重算 routes.json
```

## 数据存在哪

- 投票和留言实时存在 Google 表格「夏威夷投票」的 `votes` 页，每人一行；行里还有每个地方的留言串（可标成 ⚠ 安全提醒）、改票记录和清空重投时间。
- 后端是 Apps Script 项目 `hawaii-vote-backend`（代码同 `apps-script.gs`），以 Web 应用部署，执行身份是你，任何人可访问。
- `snapshot-votes.yml` 每小时第 15 分钟把表格里的投票拷进 `data/votes.json`，有变化才提交，仓库历史里能看到每一轮改动。想马上同步，在 Actions 里手动运行 `Snapshot votes`。

## 每日取舍

每天 17:50（太平洋时间）Claude 的定时任务按 `DAILY_ROUND.md` 读 `data/votes.json`，按可行性、花费、好玩程度和时间安排做取舍，更新 `plan.json` 和 `plans/round-N.json` 并推送，网页「看结果」顶部会显示。Claude 推送需要在 claude.ai 的连接器设置里连上 GitHub，并授权 `hawaii-vote` 仓库。

## 改内容

- 行程：改 `trip-data.js`，推送后 `Build routes` 会自动重算路线和车程，网页 1–2 分钟后更新。仓库公开，不要往里写确认码、订单号。

- 地点、价格、链接：改 `index.html` 里的 `PLACES` 数组。编号不要改，已经投过的票按编号对应。
- 改了后端代码：在 Apps Script 里改好后，**部署 → 管理部署 → 编辑 → 版本选「新版本」→ 部署**，网址不变。

## 注意

- 没有登录，谁拿到网址都能投票，也能看到所有人的名字和留言。只在群里发。
- 每台设备有自己的投票身份。换手机后填同一个名字，页面会提示「载入我之前的投票」。
- 投过之后随时可以改：直接点选项就会保存。选择稳定 15 分钟以上再改，才会记成一次「改票」，出现在「看结果」的最新动态里；连着点几下只算一次。
- 「清空重投」清掉选择和改票记录、保留留言；「删除我的投票」整份删除，找不回来。
- 投票表连不上时，页面也能用：选完点「复制报号」，贴到群里。
