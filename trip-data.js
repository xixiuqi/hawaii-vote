// Trip data for trip.html and scripts/build-routes.mjs.
// Source: 夏威夷之旅行程指南 (updated 2026-10-28). Confirmation codes, booking numbers
// and host names are deliberately left out because this site is public.
window.TRIP = {
  title: "夏威夷 6 人行程",
  start: "2026-12-05",
  end: "2026-12-13",
  updated: "2026-10-28",

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
      desc: "在游客中心停车，步行约 800 米、15 分钟到山顶。Sliding Sands 火山口步道也从这里出发。本次好评第一的山顶云海和 5:45 PM 日落都在这里。园内没有餐饮，自带干粮，带保暖衣服。看日落不用预约，日出才要。",
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
    waian: { name: "Waiʻānapanapa 黑沙滩", island: "maui", type: "sight", ll: [20.78655, -156.00212], wiki: "Waiʻanapanapa State Park",
      desc: "必须提前预约。30 天窗口约 11/5–8 开放，目标 12/7 12:30–3:00 PM 时段，窗口一开就要订，不能等到前一天晚上。从 Kihei 开过去路很长。",
      price: "$5/人 + $10 停车", status: "需预约",
      links: [["州立公园官网", "https://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park"], ["预约 FAQ", "https://gostateparks.hawaii.gov/waianapanapa/faq"]],
      maps: "Waianapanapa State Park" },
    hana: { name: "Hana 小镇", island: "maui", type: "town", ll: [20.76710, -155.99075], wiki: "Hāna, Hawaii",
      desc: "黑沙滩顺带，评价一般，可去可不去。不走后段未铺装环线（租车禁行）。",
      links: [["Road to Hana 攻略", "https://thehawaiivacationguide.com/road-to-hana-guide/"]], maps: "Hana Maui" },
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
    waimea: { name: "Waimea（途中，可选晚餐）", island: "big", type: "town", ll: [20.02170, -155.66859], wiki: "Waimea, Hawaii County, Hawaii",
      desc: "从 Kona 去 Hilo 的路上，可以在这里吃晚饭；12/12 休息日也可以来逛。", maps: "Waimea Hawaii" },
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
    kulakai: { name: "Kula Kai 熔岩洞", island: "big", type: "sight", ll: [19.10778, -155.76722], approx: true,
      desc: "约 2 小时探洞。电话订位 (808) 929-9725，集合地点和大门密码订位时给，地图上是 Ocean View 的大致位置。备选 Kazumura Cave：$60 现金 / $65 刷卡，(808) 967-7208。",
      price: "$95/人", status: "未订",
      links: [["Hawaii Magazine 介绍", "https://www.hawaiimagazine.com/you-can-traverse-through-lava-tubes-on-this-guide-tour/"], ["备选 Kazumura Cave", "https://www.kazumuracave.com"]],
      maps: "Kula Kai Caverns Ocean View" },
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
    cook: { name: "Captain Cook 浮潜", en: "Kealakekua Bay", island: "big", type: "sight", ll: [19.48110, -155.93320], wiki: "Kealakekua Bay",
      desc: "本次好评：珊瑚很棒。可选；去法三选一：步道、kayak 或 boat tour，待定。纪念碑这边开车到不了。",
      links: [["Go Hawaii：Kealakekua Bay", "https://www.gohawaii.com/islands/hawaii-big-island/regions/kona/kealakekua-bay"]], maps: "Kealakekua Bay" },
    mkvis: { name: "Mauna Kea 观星", en: "Maunakea Visitor Information Station", island: "big", type: "sight", ll: [19.76139, -155.45611], wiki: "Onizuka Center for International Astronomy",
      desc: "可选。游客中心观星不需要四驱，海拔较低；上山顶需要四驱（租车禁行）且有高反风险，或者报四驱观星团。待定。",
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

    { id: "d2", date: "12/6", dow: "周日", island: "maui", title: "Haleakalā 火山自驾日", sub: "全程最长的一天",
      items: [
        { t: "7:30 AM", s: "koa", x: "出发" },
        { t: "8:15 AM", s: "hookipa", x: "Hoʻokipa 看海龟" },
        { t: "9:00 AM", s: "baldwin", x: "Baldwin Beach（Paia）" },
        { t: "10:00 AM", s: "hosmer", x: "开始盘山，第一站 Hosmer Grove" },
        { t: "11:00 AM–1:00 PM", s: "leleiwi", x: "各观景点：Leleiwi 观景台" },
        { t: "", s: "kalahaku", x: "Kalahaku 观景台" },
        { t: "", s: "summit", x: "Pā Kaʻōao 停车，步行约 800 米、15 分钟到山顶" },
        { t: "1:00–4:00 PM", s: "summit", x: "山顶区 + Sliding Sands 火山口徒步（可选；园内无餐饮，自带干粮）", opt: true },
        { t: "5:45 PM", fixed: true, s: "summit", x: "山顶日落，必看山顶云海，然后下山" },
        { t: "8:00 PM", s: "koa", x: "回住处" }
      ],
      tips: ["公园门票 $30/车自付", "带保暖衣服"],
      route: [["koa", "hookipa", "baldwin", "hosmer", "leleiwi", "kalahaku", "summit", "koa"]] },

    { id: "d3", date: "12/7", dow: "周一", island: "maui", title: "活动清单", sub: "不排固定时间，前一天晚上自选",
      choose: true,
      items: [
        { s: "kalama", x: "冲浪课：约最早的班，2 小时，约 8:00–9:30 结束" },
        { s: "eden", x: "瀑布速降：8:00 AM，约 3 小时（只给不冲浪的人）" },
        { s: "waian", x: "黑沙滩：目标 12:30–3:00 PM 时段，必须提前预约" },
        { s: "hana", x: "顺带 Hana 小镇（评价一般，可去可不去）", opt: true }
      ],
      tips: ["冲浪最早班（约 7:00–9:30）和速降（8:00–11:00）时间冲突，一个人早上只能二选一；黑沙滩在下午，和哪个都不撞。"],
      optRoute: [["koa", "kalama"], ["koa", "eden"], ["koa", "waian", "hana"]] },

    { id: "d4", date: "12/8", dow: "周二", island: "both", title: "茂宜 → 大岛",
      items: [
        { t: "6:00 AM", s: "kam3", x: "Kam III 日出海龟（可选，免费）", opt: true },
        { t: "9:00–10:30 AM", s: "wailea", x: "Wailea Sea Scooter 浮潜" },
        { t: "11:00 AM–12:30 PM", s: "iao", x: "ʻĪao Valley（去机场途中）" },
        { t: "2:00 PM", fixed: true, s: "ogg", x: "Kahului 还车" },
        { t: "3:47 PM", fixed: true, s: "ogg", x: "AS1250 飞往 Kona，4:23 PM 落地" },
        { t: "4:30 PM", fixed: true, s: "koaap", x: "Kona 取车（Budget Mini Van）" },
        { t: "5:00 PM", s: "waimea", x: "开车直奔 Hilo，趁天黑前；途中可选 Waimea 晚餐" },
        { t: "约 7:00 PM", s: "hilo_stay", x: "到 Hilo Airbnb 入住" }
      ],
      route: [["koa", "kam3", "wailea", "iao", "ogg"], ["koaap", "waimea", "hilo_stay"]],
      warn: ["按路线算，Kona 机场经 Waimea 到 Hilo 开车约 3 小时，4:45 PM 出发不吃饭也要将近 8 点到，路上会天黑。想早点到，可以不绕 Waimea，直接走 Saddle Road。"],
      flight: { from: "ogg", to: "koaap", label: "AS1250 · 3:47–4:23 PM" } },

    { id: "d5", date: "12/9", dow: "周三", island: "big", title: "火山国家公园 + 熔岩洞",
      items: [
        { t: "7:30 AM", s: "hilo_stay", x: "出发" },
        { t: "8:30 AM", s: "kvc", x: "Volcanoes NP：Crater Rim（门口 $30/车）" },
        { t: "", s: "kiki", x: "Kīlauea Iki" },
        { t: "", s: "thurston", x: "Thurston 熔岩管" },
        { t: "至 1:00 PM", s: "holei", x: "Chain of Craters 公路到海边" },
        { t: "2:00–4:00 PM", s: "kulakai", x: "Kula Kai Caverns 熔岩洞探洞" },
        { t: "约 5:30 PM", s: "hilo_stay", x: "回 Hilo" }
      ],
      route: [["hilo_stay", "kvc", "kiki", "thurston", "holei", "kulakai", "hilo_stay"]],
      warn: ["按路线算，Chain of Craters 路尽头到 Kula Kai 约 2 小时 25 分，1:00 PM 离开公园赶不上 2:00 的洞穴。可以少走 Chain of Craters 下半段，或者把洞穴约到 3:30 以后；回到 Hilo 大约 7:30 PM。"] },

    { id: "d6", date: "12/10", dow: "周四", island: "big", title: "Hilo",
      items: [
        { t: "8:00 AM", s: "hilo_stay", x: "出发" },
        { t: "8:45–10:00 AM", s: "akaka", x: "Akaka Falls" },
        { t: "10:15–11:45 AM", s: "htbg", x: "Hawaii Tropical Bioreserve Garden" },
        { t: "12:00 PM", s: "suisan", x: "Suisan poke（尽量中午前）" },
        { t: "下午", s: "hilotown", x: "Hilo 小镇" },
        { t: "约 5:00 PM", s: "hilo_stay", x: "回住处" }
      ],
      route: [["hilo_stay", "akaka", "htbg", "suisan", "hilotown", "hilo_stay"]] },

    { id: "d7", date: "12/11", dow: "周五", island: "big", title: "Kona 一日",
      items: [
        { t: "7:30 AM", s: "hilo_stay", x: "出发" },
        { t: "10:00 AM", s: "greenwell", x: "Greenwell Farms 咖啡" },
        { t: "11:00 AM–2:00 PM", s: "puho", x: "Puʻuhonua o Hōnaunau + Two Step 浮潜，然后午餐/晚餐" },
        { t: "", s: "cook", x: "可选：Captain Cook 浮潜（珊瑚棒）；去法 trail / kayak / boat tour 待定", opt: true },
        { t: "5:30 PM", s: "hilo_stay", x: "启程回 Hilo，约 8:00 PM 到" }
      ],
      route: [["hilo_stay", "greenwell", "puho", "hilo_stay"]] },

    { id: "d8", date: "12/12", dow: "周六", island: "big", title: "休息日",
      items: [
        { t: "白天", s: "hilotown", x: "无固定安排：Hilo / Waimea 轻松活动，8:00 PM 前休息" },
        { t: "晚上", s: "mkvis", x: "可选：Mauna Kea 观星（游客中心不需四驱；山顶需四驱、租车禁行，或报观星团，待定）", opt: true }
      ],
      optRoute: [["hilo_stay", "mkvis", "hilo_stay"]] },

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
    { name: "Kula Kai Caverns 熔岩洞", price: "$95/人", when: "12/9，2 小时", state: "未订", stop: "kulakai" },
    { name: "Sliding Sands 火山口徒步", price: "免费", when: "12/6", state: "可选，无需预约", stop: "summit" },
    { name: "Kam III 日出海龟", price: "免费", when: "12/8 清晨", state: "可选", stop: "kam3" }
  ],

  // Dated to-dos derived from the guide. date = last day to act (or window opening).
  todos: [
    { date: "2026-11-05", x: "Koa Resort 免费取消截止", stop: "koa" },
    { date: "2026-11-05", x: "Waiʻānapanapa 黑沙滩：约 11/5–8 开放 12/7 的票，一开就订 12:30–3:00 PM", stop: "waian", urgent: true },
    { date: "2026-11-08", x: "ʻĪao Valley：约 11/8 开放 12/8 的票", stop: "iao", urgent: true },
    { date: "2026-11-21", x: "Koa Resort 部分退款截止", stop: "koa" },
    { date: "2026-12-01", x: "取消 Costco 茂宜套餐（全额退 $1,152.20）" },
    { date: "2026-12-04", x: "取消 Costco 大岛套餐（全额退 $1,839.16）" },
    { date: "2026-12-04", x: "Hilo Airbnb 把人数改成 6 人，或跟房东确认", stop: "hilo_stay" },
    { date: "2026-12-04", x: "订 Sea Scooter、Kula Kai 熔岩洞；12/7 冲浪 / 速降按参加人数订" }
  ],

  budget: {
    rows: [
      ["住宿 + 租车（Koa $946.12 + Airbnb $870.16 + Alamo $197 + Budget $267）", "$2,280.28", "$380.05"],
      ["固定付费活动（Sea Scooter $149 + 洞穴 $95，6 人）", "$1,464.00", "$244.00"],
      ["12/7 按人另算：冲浪半私人 $109.95 / 私人 $157.07（约 3 人）；速降 $240.84（仅非冲浪者）", "—", "按参加人数"],
      ["公园门票（Haleakalā + Volcanoes 等）", "$310.00", "$51.67"],
      ["餐饮（估算）", "—", "约 $640"],
      ["杂费（估算）", "—", "约 $240"]
    ],
    totals: [
      ["人均（不含机票、不含 12/7 自选）", "$1,555.72"],
      ["人均（含机票 $522.15，不含 12/7 自选）", "$2,077.87"]
    ],
    note: "活动、餐饮、杂费为估算；租车为先订后付报价，到店以实际为准。12/7 自选另算：例如参加冲浪半私人，人均 +$109.95；参加速降，人均 +$240.84。取消两个 Costco 套餐共退回 $2,991.36（茂宜 12/1 前、大岛 12/4 前全退），和新方案住宿 + 车 $2,280.28 相比省 $711.08。"
  },

  notes: [
    { hot: true, title: "12/13 还车时间", x: "还车预约是 4:30 PM，飞机 4:47 PM 起飞，只隔 17 分钟。建议 3:30–4:00 就到机场还车再办登机，早还不扣钱。" },
    { title: "12/8 Kona 取车", x: "4:23 PM 落地，取车预约 4:30 PM。预约时间只是起始时间，车会留着，下飞机走到柜台晚一点没关系。" },
    { title: "Hilo Airbnb 人数", x: "房源上写的是 1 位客人，6 人入住需要把人数改成 6，或者跟房东确认。" },
    { title: "退改截止", x: "Koa Resort 11/5 前免费退；Hilo Airbnb 12/7 4 PM 前免费退；Costco 茂宜套餐 12/1 前、大岛套餐 12/4 前全退。" },
    { title: "行程约束", x: "一天最多两个景点（可稍紧）；约早上 7 点出发、晚上 8 点休息；晚餐人均 $50 以内。" },
    { title: "租车", x: "6 人必须坐 7 座车；Mauna Kea 山顶、Waipio Valley 谷底租车禁行，且不在行程内。" },
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
