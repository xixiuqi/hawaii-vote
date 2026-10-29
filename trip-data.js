// Trip data for trip.html and scripts/build-routes.mjs.
// Source: 夏威夷之旅行程指南 (updated 2026-10-28). Confirmation codes, booking numbers
// and host names are deliberately left out because this site is public.
window.TRIP = {
  title: "夏威夷 6 人行程",
  start: "2026-12-05",
  end: "2026-12-13",
  updated: "2026-10-29",

  islands: {
    maui: { name: "茂宜 Maui", short: "茂宜" },
    big:  { name: "大岛 Hawaiʻi", short: "大岛" }
  },

  // type: sight | food | stay | airport | shop | town
  stops: {
    // ---------- Maui ----------
    ogg: { name: "卡胡卢伊机场 OGG", island: "maui", type: "airport", ll: [20.89861, -156.43056], wiki: "Kahului Airport",
      desc: "茂宜主机场。12/5 落地后在这里取车，12/8 下午还车后飞大岛。", maps: "Kahului Airport" },
    tinroof: { name: "Tin Roof", island: "maui", type: "food", ll: [20.88503, -156.45372],
      desc: "Kahului 的本地小店，12/5 落地后的午餐。", maps: "Tin Roof Maui 360 Papa Pl Kahului" },
    costco: { name: "Costco Kahului", island: "maui", type: "shop", ll: [20.88766, -156.44817],
      desc: "12/5 午饭后采购，补早餐、饮料和山上要带的干粮。", maps: "Costco Kahului 540 Haleakala Hwy" },
    koa: { name: "Koa Resort（茂宜住处）", island: "maui", type: "stay", ll: [20.76157, -156.45786], wiki: "Kihei, Hawaii",
      desc: "Vrbo 两房：2 房 3 床 1 卫，住 6 人，12/5–12/8。", price: "$946.12（含税）", status: "已订",
      maps: "Koa Resort 811 S Kihei Rd Kihei" },
    kam3: { name: "Kam III 海滩", en: "Kamaole Beach Park III", island: "maui", type: "sight", ll: [20.71350, -156.44550],
      desc: "Kihei 的沙滩公园，离住处约 10 分钟车程。12/5 傍晚看日落；12/8 清晨可选看日出和海龟。", price: "免费",
      links: [["Kam III 介绍", "https://www.themauiexpert.com/kamaole-beach-park-iii-kihei-maui"]], maps: "Kamaole Beach Park III Kihei" },
    smfc: { name: "South Maui Fish Co", island: "maui", type: "food", ll: [20.73529, -156.45359],
      desc: "Kihei 的 poke 店，12/5 晚餐。", maps: "South Maui Fish Company Kihei" },
    hookipa: { name: "Hoʻokipa 海龟海滩", en: "Hoʻokipa Beach Park", island: "maui", type: "sight", ll: [20.93442, -156.35585],
      desc: "早上和傍晚常有海龟上岸休息。在岸边围栏外看，保持距离。12/6 上山前第一站。", price: "免费",
      links: [["Go Hawaii 介绍", "https://www.gohawaii.com/islands/maui/things-to-do/beaches/hookipa-beach-park-maui"]], maps: "Hookipa Beach Park" },
    baldwin: { name: "Baldwin Beach", island: "maui", type: "sight", ll: [20.91331, -156.39238],
      desc: "Paia 旁边的长沙滩，12/6 去 Haleakalā 前顺路停一下。", price: "免费", maps: "Baldwin Beach Park Paia" },
    paiafish: { name: "Paia Fish Market", island: "maui", type: "food", ll: [20.91586, -156.38130],
      desc: "Paia 的鱼餐厅，在备选餐厅清单里。", maps: "Paia Fish Market" },
    hosmer: { name: "Hosmer Grove", island: "maui", type: "sight", ll: [20.76851, -156.23766], wiki: "Haleakalā National Park",
      desc: "Haleakalā 公园入口附近的林间小步道，盘山观景的第一站。", maps: "Hosmer Grove Haleakala" },
    leleiwi: { name: "Leleiwi 观景台", island: "maui", type: "sight", ll: [20.74433, -156.22838], wiki: "Haleakalā National Park",
      desc: "盘山途中的观景台，能看到火山口东侧。", maps: "Leleiwi Overlook" },
    kalahaku: { name: "Kalahaku 观景台", island: "maui", type: "sight", ll: [20.73690, -156.23393], wiki: "Haleakalā National Park",
      desc: "盘山途中的观景台，离山顶已经不远。", maps: "Kalahaku Overlook" },
    summit: { name: "Haleakalā 山顶（Pā Kaʻōao）", island: "maui", type: "sight", ll: [20.71511, -156.24981], wiki: "Haleakalā", star: true,
      desc: "山路弯很多，开慢点。在游客中心停车，步行约 800 米、15 分钟到山顶。Sliding Sands 火山口步道也从这里出发。本次好评第一的山顶云海和 5:45 PM 日落都在这里。园内没有餐饮，自带干粮，带保暖衣服。看日落不用预约，日出才要。",
      price: "门票 $30/车", links: [["NPS 火山口徒步", "https://www.nps.gov/thingstodo/moderate-hike-into-into-haleakala-crater.htm"], ["NPS 山顶须知", "https://www.nps.gov/hale/planyourvisit/sunrise.htm"]],
      maps: "Haleakala Visitor Center" },
    kalama: { name: "冲浪课 Maui Waveriders", en: "Kalama Park（The Cove）", island: "maui", type: "sight", ll: [20.72963, -156.45098],
      desc: "集合点 2021 S Kihei Rd，离 Koa Resort 约 5 分钟车程，在 Kalama Park 新手沙滩上课。2 小时课，目标约最早的班（7:00 或 7:30，有 6:00 就约 6:00）。含防晒衣、礁鞋、潜水服，不含接送。电话 +1 808-875-4761。",
      price: "半私人 $109.95/人，私人 $157.07/人", status: "未订",
      links: [["课程介绍", "https://thehawaiivacationguide.com/activities/surf-lessons-with-maui-wave-riders-kihei/"]], maps: "2021 S Kihei Rd Kihei" },
    eden: { name: "瀑布速降 Rappel Maui", en: "Garden of Eden", island: "maui", type: "sight", ll: [20.86899, -156.18001],
      desc: "8:00 AM 开始，约 3 小时，在 Garden of Eden。周日不营业；体重 70–250 磅，10 岁以上。和冲浪最早的班时间冲突，一个人早上只能二选一。",
      price: "$240.84/人（含税）", status: "未订",
      links: [["rappelmaui.com", "https://www.rappelmaui.com"], ["行程介绍", "https://www.to-hawaii.com/activities/maui/rappel-maui-waterfalls-and-rainforest-cliffs"]],
      maps: "Garden of Eden Arboretum Maui" },
    wailea: { name: "Sea Scooter 浮潜（Wailea）", en: "Wailea Beach", island: "maui", type: "sight", ll: [20.68256, -156.44311], wiki: "Wailea, Hawaii",
      desc: "My Splash Snorkeling，1.5 小时，和海龟同游。茂宜浮潜和海龟是本次好评项目。",
      price: "$149/人", status: "未订",
      links: [["行程页", "https://www.greetwell.com/us/f206/wailea-beach-sea-scooter-snorkeling-guided-tour"]], maps: "Wailea Beach" },
    iao: { name: "ʻĪao Valley", island: "maui", type: "sight", ll: [20.88059, -156.54712], wiki: "Iao Valley",
      desc: "12/8 去机场途中。需要预约，和黑沙滩同一个系统，约 11/8 开放 12/8 的票。", status: "需预约",
      links: [["官方预约", "https://gostateparks.hawaii.gov/iao-valley/about"]], maps: "Iao Valley State Monument" },
    monkeypod: { name: "Monkeypod Wailea", island: "maui", type: "food", ll: [20.68852, -156.43108],
      desc: "Wailea 的餐厅，在备选清单里，建议预约不排队。", maps: "Monkeypod Kitchen Wailea" },

    // ---------- Big Island ----------
    koaap: { name: "科纳机场 KOA", island: "big", type: "airport", ll: [19.73889, -156.04556], wiki: "Kona International Airport",
      desc: "12/8 4:23 PM 落地后取车；12/13 3:30–4:00 PM 到这里还车，4:47 PM 起飞回旧金山。", maps: "Kona International Airport" },
    waimea: { name: "Waimea 小镇", island: "big", type: "town", ll: [20.02170, -155.66859], wiki: "Waimea, Hawaii County, Hawaii",
      desc: "大岛北边的牧场小镇。新版行程不再绕这里，想逛可以找空来，从 Hilo 约 1 小时。", maps: "Waimea Hawaii" },
    hilo_stay: { name: "Hilo 住处（Airbnb）", island: "big", type: "stay", ll: [19.70556, -155.08583], approx: true,
      desc: "整套 4 床，12/8–12/13。地图上是大致位置。房源上写的是 1 位客人，6 人入住要把人数改成 6，或者跟房东确认。",
      price: "$870.16", status: "已订已付", maps: "Hilo Hawaii" },
    kvc: { name: "火山国家公园 · Crater Rim", en: "Kīlauea Visitor Center", island: "big", type: "sight", ll: [19.42958, -155.25706], wiki: "Hawaiʻi Volcanoes National Park", star: true,
      desc: "12/9 上午的起点。沿 Crater Rim 看基拉韦厄火山口。", price: "门票 $30/车",
      links: [["NPS 行前须知", "https://www.nps.gov/havo/planyourvisit/index.htm"]], maps: "Kilauea Visitor Center" },
    kiki: { name: "Kīlauea Iki", island: "big", type: "sight", ll: [19.41661, -155.24290], wiki: "Kīlauea Iki",
      desc: "从观景台往下看凝固的熔岩湖。", links: [["NPS 行前须知", "https://www.nps.gov/havo/planyourvisit/index.htm"]], maps: "Kilauea Iki Overlook" },
    thurston: { name: "Thurston 熔岩管", en: "Nāhuku", island: "big", type: "sight", ll: [19.41452, -155.23727],
      desc: "可以走进去的熔岩管，离 Kīlauea Iki 很近。", links: [["NPS 行前须知", "https://www.nps.gov/havo/planyourvisit/index.htm"]], maps: "Thurston Lava Tube" },
    holei: { name: "Chain of Craters 路尽头", island: "big", type: "sight", ll: [19.29452, -155.09793], wiki: "Chain of Craters Road",
      desc: "沿火山口链公路一路下到海边，路上会经过多个火山口和大片熔岩地。回程原路返回。", maps: "Chain of Craters Road end" },
    kulakai: { name: "Kula Kai 熔岩洞（备选）", island: "big", type: "sight", ll: [19.10778, -155.76722], approx: true,
      desc: "原计划 12/9 的熔岩洞，在 Ocean View，离公园约 1 小时、离 Hilo 约 2 小时。新版换成离 Hilo 近的 Kazumura，这个留作备选。约 2 小时，电话订 (808) 929-9725。",
      price: "$95/人", status: "备选",
      links: [["Hawaii Magazine 介绍", "https://www.hawaiimagazine.com/you-can-traverse-through-lava-tubes-on-this-guide-tour/"]],
      maps: "Kula Kai Caverns Ocean View" },
    kazumura: { name: "Kazumura 熔岩洞", island: "big", type: "sight", ll: [19.59600, -155.06400], approx: true, wiki: "Kazumura Cave",
      desc: "世界上最长的熔岩管之一，在 Puna 区，Hilo 和火山公园之间，回 Hilo 顺路。导览按预约，时长从 1 小时到几小时不等。地图上是大致位置，集合点约好时间后告诉你。电话 (808) 967-7208。",
      price: "$60 现金 / $65 刷卡（以电话为准）", status: "未订",
      links: [["Kazumura Cave（维基百科）", "https://en.wikipedia.org/wiki/Kazumura_Cave"], ["showcaves 介绍", "https://showcaves.com/english/usa/caves/Kazumura.html"]],
      maps: "Kazumura Cave tours Kurtistown" },
    punaluu: { name: "Punaluʻu 黑沙滩", island: "big", type: "sight", ll: [19.13611, -155.50444], wiki: "Punaluʻu Beach",
      desc: "大岛有名的黑沙滩，常有绿海龟上岸休息，在岸上看，保持距离、别碰。不用预约，12/11 从 Kona 绕南边回 Hilo 顺路。",
      price: "免费", links: [["Go Hawaii 介绍", "https://www.gohawaii.com/es/islands/hawaii-big-island/regions/kau/punaluu-black-sand-beach"]],
      maps: "Punaluu Black Sand Beach" },
    akaka: { name: "ʻAkaka Falls", island: "big", type: "sight", ll: [19.85472, -155.15356], wiki: "ʻAkaka Falls State Park",
      desc: "Hilo 北边的瀑布州立公园，一圈步道不长。", links: [["州立公园官网", "https://dlnr.hawaii.gov/dsp/parks/hawaii/akaka-falls-state-park/"]], maps: "Akaka Falls State Park" },
    htbg: { name: "夏威夷热带植物园", en: "Hawaii Tropical Bioreserve & Garden", island: "big", type: "sight", ll: [19.80838, -155.09370],
      desc: "Onomea 海湾旁的热带植物园，从 Akaka Falls 回 Hilo 顺路。", links: [["植物园介绍", "https://www.hawaii-guide.com/big-island/sights/hawaii_tropical_botanical_garden"]],
      maps: "Hawaii Tropical Bioreserve and Garden" },
    suisan: { name: "Suisan 鱼市", island: "big", type: "food", ll: [19.72396, -155.07020],
      desc: "Hilo 的 poke，尽量中午前去。", maps: "Suisan Fish Market Hilo" },
    hilotown: { name: "Hilo 小镇", island: "big", type: "town", ll: [19.72514, -155.08855], wiki: "Hilo, Hawaii",
      desc: "下午在市区和海边随便逛。", links: [["Go Hawaii：Hilo 市区", "https://www.gohawaii.com/islands/hawaii-big-island/regions/hilo/downtown-hilo"]], maps: "Downtown Hilo" },
    moon: { name: "Moon and Turtle", island: "big", type: "food", ll: [19.72542, -155.08715],
      desc: "Hilo 市区的餐厅，在备选清单里。电话 808-961-0599。", maps: "Moon and Turtle Hilo" },
    greenwell: { name: "Greenwell Farms 咖啡园", island: "big", type: "sight", ll: [19.51124, -155.92200], wiki: "Kona coffee",
      desc: "Kona 咖啡园，大岛咖啡园保留在 12/11。", links: [["农场参观", "https://www.greenwellfarms.com/kona-farm-tours-a/259.htm"]], maps: "Greenwell Farms Kealakekua" },
    puho: { name: "Puʻuhonua o Hōnaunau + Two Step", island: "big", type: "sight", ll: [19.42194, -155.91028], wiki: "Puʻuhonua o Hōnaunau National Historical Park",
      desc: "国家历史公园，旁边就是 Two Step 浮潜点。12/11 11:00 AM–2:00 PM。", links: [["NPS 介绍", "https://www.nps.gov/places/puuhonuaohonaunau.htm"]],
      maps: "Puuhonua o Honaunau National Historical Park" },
    manta: { name: "Iruka 魔鬼鱼夜潜", en: "Honokōhau Harbor", island: "big", type: "sight", ll: [19.67139, -156.02639], wiki: "Manta ray night dive",
      desc: "可选，跟冲浪一样：想下水的去浮潜，不想下水的可以买 ride-along 上船看，或者在 Kona 等。Honokōhau 港集合，10–1 月 5:30 PM 签到，全程 2–2.5 小时，3 岁以上可参加；没看到魔鬼鱼可以免费再约一次。",
      price: "约 $125/人", links: [["Iruka 行程评价", "https://hawaiiactivities.com/en/hawaii/big_island/a/167715/reviews"]],
      maps: "Honokohau Harbor Kailua-Kona" },
    cook: { name: "Captain Cook 浮潜", en: "Kealakekua Bay", island: "big", type: "sight", ll: [19.48110, -155.93320], wiki: "Kealakekua Bay",
      desc: "本次好评：珊瑚很棒。可选；去法三选一：步道、kayak 或 boat tour，待定。纪念碑这边开车到不了。",
      links: [["Go Hawaii：Kealakekua Bay", "https://www.gohawaii.com/islands/hawaii-big-island/regions/kona/kealakekua-bay"]], maps: "Kealakekua Bay" },
    mkvis: { name: "Mauna Kea 游客中心 · 日落和星空", en: "Maunakea Visitor Information Station", island: "big", type: "sight", ll: [19.76139, -155.45611], wiki: "Onizuka Center for International Astronomy",
      desc: "全球知名天文台所在的山。不用上山顶，游客中心（约 2,800 米）就够：傍晚看日落，天黑后看星星、银河。普通租车走普通路就能开到游客中心。山顶不去：要四驱、必须是老司机，租车合同也不允许，还有高反。晴天晚上约 6–10 点有免费公众观星，可能临时取消。",
      links: [["游客中心观星", "https://hilo.hawaii.edu/maunakea/visitor-information/stargazing"]], maps: "Maunakea Visitor Information Station" }
  },

  // Each item: t = time, fixed = ★ confirmed time, s = stop id, x = text, opt = optional.
  // route: driving segments (arrays of stop ids); optRoute: optional dashed segments.
  days: [
    { id: "d1", date: "12/5", dow: "周六", island: "maui", title: "抵达茂宜",
      items: [
        { t: "12:03 PM", fixed: true, s: "ogg", x: "落地 OGG，取行李约 12:30" },
        { t: "2:00 PM", fixed: true, s: "ogg", x: "Kahului 取车（Alamo Mini Van）" },
        { t: "2:30 PM", s: "tinroof", x: "Tin Roof 午餐" },
        { t: "3:30 PM", s: "costco", x: "Costco 采购" },
        { t: "4:30 PM", s: "koa", x: "Koa Resort 入住" },
        { t: "5:45 PM", s: "kam3", x: "Kam III 看日落" },
        { t: "6:30 PM", s: "smfc", x: "Kihei 晚餐：South Maui Fish Co poke" },
        { t: "8:00 PM", s: "koa", x: "休息" }
      ],
      route: [["ogg", "tinroof", "costco", "koa", "kam3", "smfc", "koa"]],
      flight: { from: "SFO", to: "ogg", label: "AS979 · 8:25 AM–12:03 PM" } },

    { id: "d2", date: "12/6", dow: "周日", island: "maui", title: "Haleakalā 火山自驾日", sub: "全程最长的一天，看日落云海",
      items: [
        { t: "7:30 AM", s: "koa", x: "出发" },
        { t: "8:15 AM", s: "hookipa", x: "Hoʻokipa 看海龟（这次行程唯一一次专门去岸上看海龟）" },
        { t: "9:00 AM", s: "baldwin", x: "Baldwin Beach（Paia）" },
        { t: "10:00 AM", s: "hosmer", x: "开始盘山，第一站 Hosmer Grove" },
        { t: "11:00 AM–1:00 PM", s: "leleiwi", x: "各观景点：Leleiwi 观景台" },
        { t: "", s: "kalahaku", x: "Kalahaku 观景台" },
        { t: "", s: "summit", x: "Pā Kaʻōao 停车，步行约 800 米、15 分钟到山顶" },
        { t: "1:00–4:00 PM", s: "summit", x: "山顶区 + Sliding Sands 火山口徒步（可选；园内无餐饮，自带干粮）", opt: true },
        { t: "5:45 PM", fixed: true, s: "summit", x: "山顶日落 + 云海，然后跟着车队慢慢下山" },
        { t: "8:00 PM", s: "koa", x: "回住处" }
      ],
      tips: ["山路弯很多，不适合新手司机，开慢点、开小心（浦妮）。看日落比看日出好开：上山时天还亮，下山有很多车跟着走。", "公园门票 $30/车自付；带保暖衣服，山顶天黑后很冷。"],
      route: [["koa", "hookipa", "baldwin", "hosmer", "leleiwi", "kalahaku", "summit", "koa"]] },

    { id: "d3", date: "12/7", dow: "周一", island: "maui", title: "轻松日：冲浪或速降", sub: "上午二选一，下午不排，倒时差",
      choose: true,
      items: [
        { s: "kalama", x: "冲浪课：约最早的班，2 小时，约 8:00–9:30 结束。夏威夷后花园同事：茂宜冲浪很好" },
        { s: "eden", x: "瀑布速降：8:00 AM，约 3 小时（只给不冲浪的人）" },
        { s: "kam3", x: "下午不排：Kihei / Wailea 海滩休息，傍晚想看可以再去 Kam III 看日落" }
      ],
      tips: ["冲浪最早班（约 7:00–9:30）和速降（8:00–11:00）时间冲突，一个人早上只能二选一。", "已删：Waiʻānapanapa 黑沙滩 + Hana。从 Kihei 单程 2 小时多，还要提前预约；夏威夷后花园同事说 Road to Hana 很一般；黑沙滩和海龟改在大岛 12/11 顺路看 Punaluʻu。"],
      optRoute: [["koa", "kalama"], ["koa", "eden"]] },

    { id: "d4", date: "12/8", dow: "周二", island: "both", title: "茂宜 → 大岛",
      items: [
        { t: "9:00–10:30 AM", s: "wailea", x: "Wailea Sea Scooter 浮潜，跟海龟同游（夏威夷后花园同事：茂宜浮潜和海龟好）" },
        { t: "11:00 AM–12:30 PM", s: "iao", x: "ʻĪao Valley（去机场途中）" },
        { t: "2:00 PM", fixed: true, s: "ogg", x: "Kahului 还车" },
        { t: "3:47 PM", fixed: true, s: "ogg", x: "AS1250 飞往 Kona，4:23 PM 落地" },
        { t: "4:30 PM", fixed: true, s: "koaap", x: "Kona 取车（Budget Mini Van）" },
        { t: "约 4:45 PM", s: "koaap", x: "走 Saddle Road 直接开去 Hilo，不绕 Waimea" },
        { t: "约 7:15 PM", s: "hilo_stay", x: "到 Hilo Airbnb 入住，晚饭在 Hilo 吃" }
      ],
      tips: ["已删：Kam III 日出海龟。同一个上午已经有 Sea Scooter 跟海龟游泳，再早起看海龟重复，也累。"],
      route: [["koa", "wailea", "iao", "ogg"], ["koaap", "hilo_stay"]],
      warn: ["Kona 机场到 Hilo 开车约 2.5 小时，后半程天黑。坐了飞机又开夜路，换人开、别赶。"],
      flight: { from: "ogg", to: "koaap", label: "AS1250 · 3:47–4:23 PM" } },

    { id: "d5", date: "12/9", dow: "周三", island: "big", title: "火山国家公园 + 熔岩洞", sub: "开车从 6 小时减到 2 小时，留出给火山的弹性",
      items: [
        { t: "7:30 AM", s: "hilo_stay", x: "出发" },
        { t: "8:30 AM", s: "kvc", x: "Volcanoes NP：Crater Rim（门口 $30/车）" },
        { t: "", s: "kiki", x: "Kīlauea Iki" },
        { t: "", s: "thurston", x: "Thurston 熔岩管" },
        { t: "", s: "holei", x: "可选：Chain of Craters 公路下到海边，往返约 2 小时", opt: true },
        { t: "约 2:00 PM", s: "kazumura", x: "Kazumura 熔岩洞（在回 Hilo 的路上，电话约时间）" },
        { t: "约 5:00 PM", s: "hilo_stay", x: "回 Hilo" }
      ],
      tips: ["火山喷发：Kīlauea 现在是一段一段地喷，每次喷泉一般不到 12 小时，两次之间通常隔两周以上（浦妮也提醒过）。12 月初看 USGS HVO 的下一次预报窗口；如果落在 12/9–12/11，就把火山这天挪到窗口里，和 12/10 或 12/11 对调（12/12 订了魔鬼鱼，不动）。住 Hilo 到公园只要 45 分钟，喷的时候可以临时赶过去。", "只想看看火山口、不执着于看喷发，就按原计划走，不用改。", "熔岩洞改成 Kazumura：原来的 Kula Kai 在 Ocean View，从公园过去再回 Hilo 要多开约 4 小时。Kula Kai 留作备选。"],
      route: [["hilo_stay", "kvc", "kiki", "thurston", "kazumura", "hilo_stay"]],
      optRoute: [["thurston", "holei"]] },

    { id: "d6", date: "12/10", dow: "周四", island: "big", title: "Hilo + Mauna Kea 日落星空", sub: "白天轻松逛 Hilo，傍晚上 Mauna Kea 游客中心",
      items: [
        { t: "8:00 AM", s: "hilo_stay", x: "出发" },
        { t: "8:45–10:00 AM", s: "akaka", x: "Akaka Falls" },
        { t: "10:15–11:45 AM", s: "htbg", x: "Hawaii Tropical Bioreserve Garden" },
        { t: "12:00 PM", s: "suisan", x: "Suisan poke（尽量中午前）" },
        { t: "下午", s: "hilotown", x: "Hilo 小镇逛一会儿，回住处歇一下，带上厚外套" },
        { t: "约 4:15 PM", s: "hilo_stay", x: "出发上 Mauna Kea 游客中心（单程约 1 小时）" },
        { t: "约 5:45 PM", s: "mkvis", x: "游客中心看日落，天黑后看星星、银河（浦妮推荐：不用上山顶，游客中心就挺好）" },
        { t: "约 9:00 PM", s: "hilo_stay", x: "回 Hilo" }
      ],
      tips: ["游客中心海拔约 2,800 米（9,200 英尺），普通租车走普通路就能开到；租车合同不允许开过游客中心往山顶走。只到游客中心，不上山顶：山顶要四驱、必须是老司机。到了先歇 30 分钟，头疼恶心就早点下山；多喝水。", "晴天晚上约 6–10 点有免费公众观星，天气不好会临时取消，当天早上和傍晚各看一次状态。天黑后只有 0–5 °C，带厚外套。", "和茂宜 Haleakalā 不重复：那边看日落云海，这边看星空。", "火山喷发的话，这天可以和 12/9 对调，Mauna Kea 跟着这天走。"],
      route: [["hilo_stay", "akaka", "htbg", "suisan", "hilotown", "hilo_stay"], ["hilo_stay", "mkvis", "hilo_stay"]] },

    { id: "d7", date: "12/11", dow: "周五", island: "big", title: "Kona 一日 + 黑沙滩", sub: "绕岛南边回 Hilo，傍晚就到，不开夜路",
      items: [
        { t: "7:30 AM", s: "hilo_stay", x: "出发，走 Saddle Road 去 Kona" },
        { t: "约 9:45 AM", s: "greenwell", x: "Greenwell Farms 咖啡园，免费导览，最后一场约 2 点，所以放上午" },
        { t: "10:45 AM–1:30 PM", s: "puho", x: "Puʻuhonua o Hōnaunau + Two Step 浮潜，然后午餐" },
        { t: "", s: "cook", x: "可选：Captain Cook 浮潜（夏威夷后花园同事：好，珊瑚棒）；trail / kayak / boat tour 待定", opt: true },
        { t: "约 3:00 PM", s: "punaluu", x: "Punaluʻu 黑沙滩，常有海龟上岸（代替茂宜的 Waiʻānapanapa）" },
        { t: "约 5:15 PM", s: "hilo_stay", x: "经火山公园那条路回 Hilo" }
      ],
      tips: ["想去 Captain Cook 的话，Puʻuhonua 那段就要缩短，或者干脆把 Two Step 换成 Captain Cook。"],
      route: [["hilo_stay", "greenwell", "puho", "punaluu", "hilo_stay"]] },

    { id: "d8", date: "12/12", dow: "周六", island: "big", title: "补觉 + 魔鬼鱼夜潜", sub: "上午不排，下午去 Kona，傍晚看魔鬼鱼",
      items: [
        { t: "上午", s: "hilotown", x: "无固定安排：补觉，Hilo 轻松逛，早点吃午饭" },
        { t: "约 1:30 PM", s: "hilo_stay", x: "走 Saddle Road 去 Kona（约 2 小时）" },
        { t: "约 3:30 PM", s: "manta", x: "Kona 镇上逛逛，4:30 左右早点吃晚饭" },
        { t: "5:30–8:00 PM", s: "manta", x: "可选：Iruka 魔鬼鱼夜潜，Honokōhau 港签到（浦妮：很好，不要删）。跟冲浪一样，想去的下水，不想下水的上船看（ride-along）或在 Kona 等", opt: true },
        { t: "约 10:00 PM", s: "hilo_stay", x: "走 Saddle Road 回 Hilo" }
      ],
      tips: ["魔鬼鱼要提前订，订的时候说清楚几个人下水、几个人 ride-along。开船前两个工作日下午 3 点后取消要付全款：12/12 周六的团，截止是 12/10 周四 3 PM。", "没人想去魔鬼鱼的话，这天就是全天休息。", "12/13 上午本来就是慢上午，晚回来一点没关系。"],
      warn: ["晚上 8 点从 Kona 开回 Hilo 约 2 小时，Saddle Road 全程天黑、山上有雾。下水的人会累，让没下水的人开车。"],
      route: [["hilo_stay", "manta", "hilo_stay"]] },

    { id: "d9", date: "12/13", dow: "周日", island: "big", title: "返程",
      items: [
        { t: "上午", s: "hilo_stay", x: "慢上午，吃完午餐再出发" },
        { t: "3:30–4:00 PM", fixed: true, s: "koaap", x: "到机场还车（不要卡 4:30 的预约时间）" },
        { t: "4:47 PM", fixed: true, s: "koaap", x: "AS404 起飞，11:59 PM 到 SFO" }
      ],
      route: [["hilo_stay", "koaap"]],
      warn: ["Hilo 到 Kona 机场开车约 2 小时 35 分，3:30 到机场要 1:00 PM 前出发，午饭最好早点吃，或者到 Kona 再吃。"],
      flight: { from: "koaap", to: "SFO", label: "AS404 · 4:47–11:59 PM" } }
  ],

  changes: {
    version: "2026-10-29",
    by: "根据浦妮和夏威夷后花园同事的建议",
    items: [
      { x: "加回 Iruka 魔鬼鱼夜潜，做成可选（跟冲浪一样），放在最轻松的 12/12：上午补觉，下午去 Kona，傍晚 5:30 在 Honokōhau 港签到，晚上 10 点左右回 Hilo。", day: "d8" },
      { x: "Mauna Kea 游客中心日落星空从 12/12 挪到 12/10 傍晚：12/10 白天本来就轻松，两个晚归的晚上也不再连着。", day: "d6" },
      { x: "删掉 12/7 的 Waiʻānapanapa 黑沙滩和 Hana：单程 2 小时多、要预约；同事说 Road to Hana 很一般；两个岛都有黑沙滩和海龟。", day: "d3" },
      { x: "12/7 改成轻松日：上午冲浪或速降二选一，下午海滩休息倒时差。", day: "d3" },
      { x: "删掉 12/8 清晨的 Kam III 日出海龟：同一个上午已经有 Sea Scooter 跟海龟游泳。", day: "d4" },
      { x: "12/8 从 Kona 机场直接走 Saddle Road 去 Hilo，不绕 Waimea，少开约 35 分钟。", day: "d4" },
      { x: "12/9 熔岩洞从 Kula Kai 换成 Kazumura，Chain of Craters 改成可选：当天开车从约 6 小时 20 分降到约 2 小时，给火山喷发留弹性。", day: "d5" },
      { x: "12/11 绕岛南边，顺路看 Punaluʻu 黑沙滩和海龟，代替茂宜的黑沙滩。", day: "d7" },
      { x: "傍晚去 Mauna Kea 游客中心看日落和星空，不上山顶：不用四驱，高反风险小，和 Haleakalā 的云海不重复。", day: "d6" },
      { x: "12/6 下山提醒：山路弯多，开慢点，跟着车队走。", day: "d2" }
    ]
  },

  flights: [
    { no: "AS979", date: "12/5", time: "8:25 AM – 12:03 PM", route: "SFO → OGG（Kahului，茂宜）" },
    { no: "AS1250", date: "12/8", time: "3:47 PM – 4:23 PM", route: "OGG → KOA（Kona，大岛）" },
    { no: "AS404", date: "12/13", time: "4:47 PM – 11:59 PM", route: "KOA → SFO" }
  ],
  flightNote: "阿拉斯加航空 Saver 票：免费随身行李（1 件随身 + 1 件个人物品），托运 $35/段，座位另付，不可退改。6 人同行程、同班机，机票均已订。",

  bookings: [
    { item: "大岛住宿 · Airbnb（整套，4 床）", state: "paid", label: "已订已付", info: "$870.16；12/8 入住（4 PM）；12/7 4 PM（房源当地时间）前免费取消", stop: "hilo_stay" },
    { item: "茂宜住宿 · Koa Resort（Vrbo，两房）", state: "ok", label: "已订", info: "$946.12（含税）；2 房 3 床 1 卫，住 6 人；11/5 前免费取消，11/21 前部分退款", stop: "koa" },
    { item: "茂宜租车 · Alamo Mini Van（7 座）", state: "ok", label: "已订 · 先订后付", info: "约 $197；12/5 2:00 PM Kahului 取 → 12/8 2:00 PM 还；无限里程，含第二驾驶员；免费取消", stop: "ogg" },
    { item: "大岛租车 · Budget Mini Van（7 座）", state: "ok", label: "已订 · 先订后付", info: "约 $267；12/8 4:30 PM Kona 取 → 12/13 4:30 PM 还；无限里程，含第二驾驶员，含 $10 coupon；免费取消", stop: "koaap" },
    { item: "Costco 茂宜套餐", state: "cancel", label: "待取消", info: "12/1 前取消，全额退款 $1,152.20" },
    { item: "Costco 大岛套餐", state: "cancel", label: "待取消", info: "12/4 前取消，全额退款 $1,839.16" }
  ],
  bookingNote: "租车是 Costco Travel「先订后付」报价，到店付款以实际为准。两个 Costco 套餐取消后共退回 $2,991.36。",

  activities: [
    { name: "Maui Waveriders 冲浪课", price: "半私人 $109.95/人；私人 $157.07/人（2 小时）", when: "12/7 早上，约 3 人", state: "未订", stop: "kalama" },
    { name: "Rappel Maui 瀑布速降", price: "$240.84/人（含税）", when: "12/7 8:00 AM，3 小时", state: "未订", stop: "eden" },
    { name: "Sea Scooter（My Splash Snorkeling）", price: "$149/人", when: "12/8 上午，1.5 小时", state: "未订", stop: "wailea" },
    { name: "Kazumura 熔岩洞（替代 Kula Kai）", price: "$60 现金 / $65 刷卡", when: "12/9 下午，回 Hilo 路上", state: "未订", stop: "kazumura" },
    { name: "Iruka 魔鬼鱼夜潜（可选，跟冲浪一样）", price: "约 $125/人下水；不下水的可以 ride-along 上船看", when: "12/12 傍晚 5:30 Honokōhau 港签到，2–2.5 小时", state: "未订", stop: "manta" },
    { name: "Sliding Sands 火山口徒步", price: "免费", when: "12/6", state: "可选，无需预约", stop: "summit" },
    { name: "Mauna Kea 游客中心日落 + 观星", price: "免费", when: "12/10 傍晚", state: "可选", stop: "mkvis" }
  ],

  // Dated to-dos derived from the guide. date = last day to act (or window opening).
  todos: [
    { date: "2026-11-05", x: "Koa Resort 免费取消截止", stop: "koa" },
    { date: "2026-11-08", x: "ʻĪao Valley：约 11/8 开放 12/8 的票", stop: "iao", urgent: true },
    { date: "2026-11-21", x: "Koa Resort 部分退款截止", stop: "koa" },
    { date: "2026-12-01", x: "取消 Costco 茂宜套餐（全额退 $1,152.20）" },
    { date: "2026-12-04", x: "取消 Costco 大岛套餐（全额退 $1,839.16）" },
    { date: "2026-12-04", x: "Hilo Airbnb 把人数改成 6 人，或跟房东确认", stop: "hilo_stay" },
    { date: "2026-12-01", x: "看 USGS HVO 的 Kīlauea 喷发预报窗口，决定 12/9 和 12/10 要不要对调" },
    { date: "2026-12-04", x: "订 Sea Scooter、Kazumura 熔岩洞；12/7 冲浪 / 速降、12/12 魔鬼鱼夜潜按参加人数订" },
    { date: "2026-12-10", x: "Iruka 魔鬼鱼（如果订）：12/10 周四 3 PM 后取消要付全款", stop: "manta" }
  ],

  budget: {
    rows: [
      ["住宿 + 租车（Koa $946.12 + Airbnb $870.16 + Alamo $197 + Budget $267）", "$2,280.28", "$380.05"],
      ["固定付费活动（Sea Scooter $149 + 洞穴 $95，6 人）", "$1,464.00", "$244.00"],
      ["12/7 按人另算：冲浪半私人 $109.95 / 私人 $157.07（约 3 人）；速降 $240.84（仅非冲浪者）", "—", "按参加人数"],
      ["12/12 按人另算：Iruka 魔鬼鱼夜潜约 $125/人（下水），ride-along 更便宜", "—", "按参加人数"],
      ["公园门票（Haleakalā + Volcanoes 等）", "$310.00", "$51.67"],
      ["餐饮（估算）", "—", "约 $640"],
      ["杂费（估算）", "—", "约 $240"]
    ],
    totals: [
      ["人均（不含机票、不含 12/7 和 12/12 自选）", "$1,555.72"],
      ["人均（含机票 $522.15，不含 12/7 和 12/12 自选）", "$2,077.87"]
    ],
    note: "活动、餐饮、杂费为估算；租车为先订后付报价，到店以实际为准。12/7 自选另算：例如参加冲浪半私人，人均 +$109.95；参加速降，人均 +$240.84。12/12 魔鬼鱼下水约 +$125。取消两个 Costco 套餐共退回 $2,991.36（茂宜 12/1 前、大岛 12/4 前全退），和新方案住宿 + 车 $2,280.28 相比省 $711.08。"
  },

  notes: [
    { hot: true, title: "12/13 还车时间", x: "还车预约是 4:30 PM，飞机 4:47 PM 起飞，只隔 17 分钟。建议 3:30–4:00 就到机场还车再办登机，早还不扣钱。" },
    { title: "12/8 Kona 取车", x: "4:23 PM 落地，取车预约 4:30 PM。预约时间只是起始时间，车会留着，下飞机走到柜台晚一点没关系。" },
    { title: "Hilo Airbnb 人数", x: "房源上写的是 1 位客人，6 人入住需要把人数改成 6，或者跟房东确认。" },
    { title: "退改截止", x: "Koa Resort 11/5 前免费退；Hilo Airbnb 12/7 4 PM 前免费退；Costco 茂宜套餐 12/1 前、大岛套餐 12/4 前全退；Iruka 魔鬼鱼（如果订）12/10 周四 3 PM 后取消付全款。" },
    { title: "行程约束", x: "一天最多两个景点（可稍紧）；约早上 7 点出发、晚上 8 点休息；晚餐人均 $50 以内。" },
    { title: "租车", x: "6 人必须坐 7 座车；Mauna Kea 山顶（要四驱、必须老司机）、Waipio Valley 谷底租车禁行，不去。Mauna Kea 只到游客中心，普通路、普通车就行。" },
    { title: "价格时效", x: "价格为 2026/10/27 查询结果，到店 / 结账以实际为准。" }
  ],

  restaurants: [
    { name: "South Maui Fish Co", stop: "smfc" },
    { name: "Monkeypod Wailea（建议预约）", stop: "monkeypod" },
    { name: "Paia Fish Market", stop: "paiafish" },
    { name: "Tin Roof", stop: "tinroof" },
    { name: "Moon and Turtle（Hilo）", stop: "moon" },
    { name: "Suisan（Hilo）", stop: "suisan" },
    { name: "Randy's Huli Chicken" }
  ],
  restaurantNote: "晚餐人均上限 $50。餐厅来自中文 Google 评论、Dealmoon 和视频共识。"
};
