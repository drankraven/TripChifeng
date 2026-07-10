const routeDays = [
  {
    day: 1,
    date: "第 1 天 · 住通辽",
    title: "昌图 → 大青沟 → 通辽市区",
    totalDrive: "331.6 km / 约 5.1 h / 过路费约 ¥13",
    stay: "住通辽市科尔沁区",
    pace: "强度：中等。上午完成最长一段，下午进城后只安排轻松城市活动。",
    dayNote: "建议 06:30 前出发。大青沟至少留 3 小时；如果到通辽晚于 16:30，不追博物馆，直接改为西拉木伦公园和晚餐。",
    legs: [
      { route: "昌图县 → 大青沟北门", time: "212 km · 约 3 h 10 min" },
      { route: "大青沟 → 通辽市区", time: "约 120 km · 约 1 h 55 min" },
    ],
    timeline: [
      { time: "06:30", what: "昌图出发", where: "县城加满油后上路", detail: "早餐可打包，避免第一天刚出发就占用游玩时间。", nav: [124.086628, 42.779333, "昌图县"] },
      { time: "09:45", what: "抵达大青沟北门", where: "科左后旗甘旗卡镇", detail: "先去游客中心确认当天开放区域、观光车和漂流情况。", nav: [122.194557, 42.783025, "大青沟"] },
      { time: "10:00", what: "大青沟核心游览", where: "原始森林步道 + 三岔口", detail: "推荐把时间留给森林沟谷和步道。漂流、骑马、滑草只选一项，避免把 3 小时全部消耗在排队项目上。" },
      { time: "12:40", what: "景区简餐或自备午餐", where: "游客中心附近", detail: "景区餐饮选择有限，车上提前备水、面包、水果和应急零食。" },
      { time: "13:30", what: "前往通辽市区", where: "约 120 km", detail: "下午以到店和城市休闲为主，不再安排重体力景点。" },
      { time: "15:30", what: "入住通辽酒店", where: "博物馆 / 西拉木伦公园一带", detail: "酒店停车后再步行或短途打车，减少晚高峰找车位。" },
      { time: "16:15", what: "通辽市区二选一", where: "通辽市博物馆或西拉木伦公园", detail: "到馆时间早且当天开放就看博物馆；否则逛西拉木伦公园、买牛肉干，体验更从容。", nav: [122.272302, 43.625372, "通辽市博物馆"] },
      { time: "18:30", what: "通辽晚餐", where: "科尔沁区", detail: "推荐清真烧烤、牛肉干和蒙餐。D2 很长，晚餐后尽早休息。" },
    ],
    meals: "早餐昌图打包；午餐大青沟简餐；晚餐通辽可选大宅门清真烧烤或老庄烧烤。",
    hotel: "首选通辽郁锦香酒店（4.8，博物馆旁）；稳妥连锁选全季酒店通辽大润发店（4.7）。",
    fuel: "昌图满油出发。入住通辽后补至满箱，为 D2 的 473 km 长途日做准备。",
    stops: ["大青沟", "通辽市博物馆", "西拉木伦公园", "通辽蒙餐 / 烧烤"],
  },
  {
    day: 2,
    date: "第 2 天 · 住林东",
    title: "通辽 → 哈神加游乐场 → 扎鲁特山地草原 → 林东",
    totalDrive: "473.4 km / 约 5.9 h / 过路费约 ¥118",
    stay: "住巴林左旗林东镇",
    pace: "强度：全程最高。早出发、少停靠，下午 14:30 前必须离开草原。",
    dayNote: "亲子同行可保留哈神加 60–90 分钟；纯成人旅行建议缩短游乐场，把时间留给山地草原。草原天气变化快，防晒外套都要带。",
    legs: [
      { route: "通辽 → 哈神加游乐场", time: "231.7 km · 约 2 h 40 min" },
      { route: "哈神加 → 扎鲁特山地草原", time: "9.7 km · 约 10 min" },
      { route: "扎鲁特山地草原 → 辽上京 / 林东", time: "239 km · 约 3 h" },
    ],
    timeline: [
      { time: "06:45", what: "早餐、退房、确认满油", where: "通辽市区", detail: "D2 不建议赖床。检查胎压、玻璃水和备胎，车上备足饮水。" },
      { time: "07:15", what: "前往扎鲁特旗", where: "G304 方向", detail: "经过鲁北镇时看油量；不足半箱就进城补油，不依赖景区周边小站。" },
      { time: "10:00", what: "哈神加游乐场", where: "G304 国道 767 号", detail: "适合亲子和轻娱乐，控制在 60–90 分钟。当天营业项目以现场为准。", nav: [120.457977, 44.935677, "哈神加游乐场"] },
      { time: "11:20", what: "扎鲁特旗军马场山地草原", where: "455 县道附近", detail: "先午餐，再安排观景、骑马或越野项目。自驾车不要擅自驶入未开放草场。", nav: [120.374862, 44.94443, "扎鲁特旗军马场山地草原旅游区"] },
      { time: "14:20", what: "集合离场", where: "山地草原停车场", detail: "最晚 14:30 发车，后半程约 3 小时。遇雨雾或牛羊上路要主动降速。" },
      { time: "17:30", what: "抵达林东镇", where: "辽上京博物馆附近", detail: "先入住、补油，再吃晚餐。晚上不再安排辽上京，留到次日精神最好时参观。", nav: [119.381905, 43.959975, "辽上京博物馆"] },
      { time: "18:30", what: "林东晚餐", where: "契丹大街一带", detail: "推荐蒙都 43°9 羊火锅；想吃东北口味可选艾家屯铁锅炖。" },
    ],
    meals: "早餐通辽；午餐草原景区或自备；晚餐林东羊火锅 / 铁锅炖。",
    hotel: "首选西拉沐沦酒店（5.0）；连锁备选全季酒店赤峰林东政府店（4.7）；联仕酒店政务新区店（4.8）也较稳。",
    fuel: "通辽满油出发；鲁北镇看油量决定是否补油；到林东后再次加满。",
    stops: ["哈神加游乐场", "扎鲁特山地草原", "鲁北镇补给窗口", "林东镇"],
  },
  {
    day: 3,
    date: "第 3 天 · 住赤峰",
    title: "辽上京 → 召庙 / 真寂之寺 → 赤峰市区",
    totalDrive: "281.2 km / 约 3.3 h / 过路费约 ¥100",
    stay: "住赤峰红山区或松山区",
    pace: "强度：舒适。以辽文化为主线，下午顺路南下赤峰。",
    dayNote: "辽上京博物馆与赤峰多家博物馆通常周一闭馆，出发前要查当天公告。召庙和真寂之寺属于同一景区，不需要拆成两个导航点。",
    legs: [
      { route: "辽上京博物馆 → 辽上京遗址", time: "镇内短途 · 约 10 min" },
      { route: "辽上京遗址 → 召庙", time: "23.3 km · 约 35 min" },
      { route: "召庙 → 赤峰市区", time: "约 260 km · 约 2 h 45 min" },
    ],
    timeline: [
      { time: "08:00", what: "林东早餐、退房", where: "酒店附近", detail: "行李放车上，先把辽上京最重要的室内展览看完。" },
      { time: "09:00", what: "辽上京博物馆", where: "富河路附近", detail: "建议 1.5 小时，先建立辽代都城、器物和契丹生活的背景。", nav: [119.381905, 43.959975, "辽上京博物馆"] },
      { time: "10:40", what: "辽上京国家考古遗址公园", where: "林东镇", detail: "户外遗址适合 60 分钟。没有讲解时重点看皇城、城墙和南北塔的空间关系。", nav: [119.397117, 43.965137, "辽上京国家考古遗址公园"] },
      { time: "11:45", what: "林东午餐", where: "契丹大街", detail: "控制在 45 分钟，避免下午进赤峰遇到晚高峰。" },
      { time: "12:30", what: "前往召庙", where: "林东镇南约 14 km", detail: "实际导航约 23 km。景区以真寂之寺辽代石窟、寺庙和山体景观为核心。" },
      { time: "13:10", what: "召庙 + 真寂之寺", where: "巴林左旗召庙景区", detail: "推荐 1.5 小时。石窟内光线较暗，不使用闪光灯，台阶路段注意脚下。", nav: [119.368994, 43.849598, "召庙"] },
      { time: "14:40", what: "前往赤峰", where: "高速为主", detail: "约 2 小时 45 分。中途服务区休息一次，不赶时间。" },
      { time: "17:30", what: "入住赤峰酒店", where: "红山体育中心 / 万达附近", detail: "到店后先补油，为 D4 的沙漠线路准备。" },
      { time: "18:30", what: "赤峰晚餐 + 城市夜游", where: "红山区", detail: "羊火锅或对夹。体力允许可去红山公园看城市暮色，不必勉强爬完整条山线。", nav: [118.979451, 42.297212, "红山公园"] },
    ],
    meals: "早餐林东；午餐林东；晚餐赤峰推荐 43°9 羊火锅，对夹作为小吃体验。",
    hotel: "首选全季酒店赤峰红山体育中心店（4.7，停车和次日出城方便）；想住万达附近可选希元酒店（4.8）。",
    fuel: "林东满油后南下；赤峰入住当晚补满。",
    stops: ["辽上京博物馆", "辽上京遗址", "召庙", "真寂之寺", "赤峰市区"],
  },
  {
    day: 4,
    date: "第 4 天 · 住奈曼",
    title: "赤峰市区 → 响水荷花池 → 宝古图沙漠 → 奈曼",
    totalDrive: "387.5 km / 约 5.9 h / 过路费约 ¥34",
    stay: "住奈曼旗大沁他拉镇",
    pace: "强度：偏高。城市博物馆、荷花池和沙漠日落串成一条东行线。",
    dayNote: "响水荷花池有明显季节性，通常盛夏最值得。非花期或天气不好可直接跳过，D4 会立刻轻松约 1.5 小时。沙漠不要开普通轿车进入深沙。",
    legs: [
      { route: "赤峰 → 响水荷花池", time: "124.4 km · 约 1 h 45 min" },
      { route: "响水荷花池 → 宝古图沙漠", time: "133.6 km · 约 2 h 10 min" },
      { route: "宝古图沙漠 → 奈曼旗", time: "40.9 km · 约 45 min" },
    ],
    timeline: [
      { time: "08:15", what: "赤峰早餐、退房", where: "酒店周边", detail: "行李装车后去辽代历史文化博物馆。遇周一闭馆，改为红山公园或城市早餐慢游。" },
      { time: "09:00", what: "辽代历史文化博物馆", where: "红山区钢铁西街", detail: "建议 75–90 分钟，用赤峰的辽文化展览补全前一天的遗址体验。", nav: [118.90494, 42.238074, "辽代历史文化博物馆"] },
      { time: "10:30", what: "前往响水荷花池", where: "翁牛特旗", detail: "沿途餐饮稀疏，建议在乌丹镇或公路沿线正规餐馆解决午餐。" },
      { time: "12:20", what: "午餐 + 响水荷花池", where: "翁牛特旗", detail: "花期游览约 60 分钟；非花期拍照停留 20–30 分钟即可，不要硬凑时长。", nav: [119.297556, 43.087498, "响水荷花池"] },
      { time: "13:40", what: "前往宝古图沙漠", where: "奈曼旗白音他拉苏木", detail: "后段以普通公路为主，注意区间测速和牲畜横穿。" },
      { time: "16:00", what: "宝古图沙漠", where: "游客中心与开放项目区", detail: "把核心时间放在 16:00 后，光线更柔和。越野、滑沙、骑骆驼按兴趣选 1–2 项，普通轿车停正规停车场。", nav: [120.632095, 43.171149, "宝古图沙漠旅游区"] },
      { time: "18:30", what: "前往奈曼旗县城", where: "约 41 km", detail: "日落结束后立即离场，避免在沙漠支路摸黑找路。" },
      { time: "19:20", what: "入住奈曼 + 晚餐", where: "奈曼王府附近", detail: "晚上只吃饭休息。D5 仍有 381 km，不安排夜间娱乐。" },
    ],
    meals: "早餐赤峰；午餐乌丹镇或沿途正规餐馆；晚餐奈曼县城，优先饺子、面食或简单火锅。",
    hotel: "首选麗枫酒店通辽奈曼旗火车站奈曼王府店（5.0）；稳妥连锁选全季酒店奈曼王府店（4.7）或汉庭振兴大街店（4.7）。",
    fuel: "赤峰满油出发；奈曼到店后补满。宝古图景区周边不作为主要加油点。",
    stops: ["辽代历史文化博物馆", "响水荷花池", "宝古图沙漠", "奈曼旗"],
  },
  {
    day: 5,
    date: "第 5 天 · 返回昌图",
    title: "奈曼王府 → 库伦三大寺 → 安代博物馆 → 昌图",
    totalDrive: "380.9 km / 约 5.8 h / 过路费约 ¥53",
    stay: "终点昌图县",
    pace: "强度：偏高但可控。上午奈曼、下午库伦，19:30 左右回到昌图。",
    dayNote: "D5 的关键是 16:00 左右离开库伦。奈曼王府和库伦三大寺都不要无限延长；安代博物馆若临时闭馆，就把时间留给返程。",
    legs: [
      { route: "奈曼王府 → 库伦三大寺", time: "144.2 km · 约 2 h 20 min" },
      { route: "库伦三大寺 → 安代博物馆", time: "镇内约 3 km" },
      { route: "库伦 → 昌图县", time: "约 237 km · 约 3 h 25 min" },
    ],
    timeline: [
      { time: "07:45", what: "退房、装车", where: "奈曼旗", detail: "车辆已在前一晚加满，早餐在酒店或王府附近解决。" },
      { time: "08:00", what: "奈曼王府", where: "王府街 1666 号", detail: "建议 1.5 小时，重点看清代蒙古王府格局和王府博物馆。", nav: [120.650148, 42.848286, "奈曼王府"] },
      { time: "09:35", what: "前往库伦旗", where: "约 144 km", detail: "大部分为普通公路，控制车速，不抢超车。" },
      { time: "12:00", what: "库伦午餐", where: "三大寺附近", detail: "推荐荞佳香库伦饸饹面；想吃更快可选馅饼。午餐控制在 40 分钟。" },
      { time: "12:50", what: "库伦三大寺", where: "库伦镇中心街", detail: "兴源寺、福缘寺、象教寺集中游览，建议 2 小时。尊重宗教场所礼仪，殿内摄影先看提示。", nav: [121.776924, 42.731487, "库伦三大寺"] },
      { time: "15:05", what: "中国安代博物馆", where: "杏坛路与安达大街附近", detail: "建议 45–60 分钟，了解安代舞和库伦地区民俗。", nav: [121.806879, 42.731774, "中国安代博物馆"] },
      { time: "16:05", what: "返程昌图", where: "约 237 km", detail: "中途服务区休息一次。若当天景区延误，优先压缩博物馆，不压缩返程安全时间。" },
      { time: "19:30", what: "抵达昌图", where: "环线完成", detail: "全程约 1,855 km，完整覆盖草原、沙漠、辽文化、寺庙和城市体验。", nav: [124.086628, 42.779333, "昌图县"] },
    ],
    meals: "早餐奈曼；午餐库伦饸饹面 / 馅饼；晚餐回昌图后解决。",
    hotel: "当天不住宿。若 16:30 仍未离开库伦，建议放弃夜赶，临时住库伦或甘旗卡。",
    fuel: "奈曼满油出发；库伦按余量选择补油，确保返程至少留四分之一箱余量。",
    stops: ["奈曼王府", "库伦三大寺", "中国安代博物馆", "昌图县"],
  },
];

const fuelPlan = [
  { day: "D1", legs: "昌图满油 → 通辽补满", rule: "331.6 km。第一天不需要途中专门找油站；抵达通辽后补满，避免 D2 早晨排队。" },
  { day: "D2", legs: "通辽满油 → 鲁北看油量 → 林东补满", rule: "473.4 km，是全程最长驾驶日。进入草原前余量低于半箱，就在鲁北镇补油。" },
  { day: "D3", legs: "林东满油 → 赤峰补满", rule: "281.2 km。赤峰到店当晚补油，D4 早晨直接出城。" },
  { day: "D4", legs: "赤峰满油 → 奈曼补满", rule: "387.5 km。不要把宝古图景区周边小站当作唯一补给。" },
  { day: "D5", legs: "奈曼满油 → 库伦可选补油 → 昌图", rule: "380.9 km。库伦离开时至少保留半箱更安心。" },
];

const points = [
  { name: "昌图县 · 起终点", days: [1, 5], lat: 42.779333, lng: 124.086628, kind: "terminal", detail: "5 天环线起点和终点。" },
  { name: "大青沟", days: [1], lat: 42.783025, lng: 122.194557, kind: "spot", detail: "国家级自然保护区，森林沟谷是核心。" },
  { name: "通辽市区", days: [1, 2], lat: 43.625372, lng: 122.272302, kind: "city", detail: "博物馆、西拉木伦公园、住宿和补油。" },
  { name: "哈神加游乐场", days: [2], lat: 44.935677, lng: 120.457977, kind: "spot", detail: "亲子型游乐场，建议控制在 60–90 分钟。" },
  { name: "扎鲁特山地草原", days: [2], lat: 44.94443, lng: 120.374862, kind: "spot", detail: "军马场山地草原，全天最重要的自然景点。" },
  { name: "辽上京 / 林东", days: [2, 3], lat: 43.965137, lng: 119.397117, kind: "spot", detail: "博物馆与国家考古遗址公园。" },
  { name: "召庙 · 真寂之寺", days: [3], lat: 43.849598, lng: 119.368994, kind: "spot", detail: "真寂之寺位于召庙景区内。" },
  { name: "赤峰市区", days: [3, 4], lat: 42.238074, lng: 118.90494, kind: "city", detail: "辽代历史文化博物馆、红山公园与餐饮住宿。" },
  { name: "响水荷花池", days: [4], lat: 43.087498, lng: 119.297556, kind: "seasonal", detail: "季节性较强，非花期可缩短或跳过。" },
  { name: "宝古图沙漠", days: [4], lat: 43.171149, lng: 120.632095, kind: "spot", detail: "建议下午到达，安排沙漠项目和日落。" },
  { name: "奈曼王府 / 奈曼旗", days: [4, 5], lat: 42.848286, lng: 120.650148, kind: "spot", detail: "D4 住宿，D5 早晨游王府。" },
  { name: "库伦三大寺", days: [5], lat: 42.731487, lng: 121.776924, kind: "spot", detail: "三寺集中游览，安代博物馆在镇内。" },
];

const colors = { 1: "#0f766e", 2: "#b4532a", 3: "#2f5f8f", 4: "#b88918", 5: "#7c3f74" };

const pois = [
  { name: "通辽郁锦香酒店 · 4.8", kind: "hotel", lat: 43.626112, lng: 122.271488, day: 1, detail: "建国路北段，紧邻博物馆。D1 首选。" },
  { name: "全季酒店(通辽大润发店) · 4.7", kind: "hotel", lat: 43.622798, lng: 122.270561, day: 1, detail: "连锁标准稳定，停车和餐饮便利。" },
  { name: "西拉沐沦酒店 · 5.0", kind: "hotel", lat: 43.962917, lng: 119.372293, day: 2, detail: "林东镇高评分住宿，适合 D2 长途后休息。" },
  { name: "全季酒店(赤峰林东政府店) · 4.7", kind: "hotel", lat: 43.963341, lng: 119.37166, day: 2, detail: "连锁备选，靠近次日辽上京线路。" },
  { name: "全季酒店(赤峰红山体育中心店) · 4.7", kind: "hotel", lat: 42.231857, lng: 118.90896, day: 3, detail: "停车方便，D4 东向出城较顺。" },
  { name: "希元酒店(红山万达店) · 4.8", kind: "hotel", lat: 42.248026, lng: 118.913148, day: 3, detail: "适合想住商圈、晚餐选择更多的旅客。" },
  { name: "麗枫酒店(奈曼王府店) · 5.0", kind: "hotel", lat: 42.845548, lng: 120.659649, day: 4, detail: "D4 首选，第二天去奈曼王府方便。" },
  { name: "全季酒店(奈曼王府店) · 4.7", kind: "hotel", lat: 42.844799, lng: 120.648244, day: 4, detail: "距离王府近，连锁备选。" },

  { name: "大宅门清真烧烤二部 · 4.4", kind: "food", lat: 43.624552, lng: 122.275547, day: 1, detail: "通辽晚餐，清真烧烤，人均约 ¥73。" },
  { name: "老庄烧烤 · 4.4", kind: "food", lat: 43.62307, lng: 122.273464, day: 1, detail: "通辽地方烧烤，人均约 ¥70。" },
  { name: "蒙都 43°9 羊火锅(林东店) · 4.6", kind: "food", lat: 43.96383, lng: 119.379369, day: 2, detail: "林东晚餐首选，人均约 ¥84。" },
  { name: "艾家屯音乐主题铁锅炖 · 4.4", kind: "food", lat: 43.960554, lng: 119.376072, day: 2, detail: "东北口味备选，人均约 ¥53。" },
  { name: "43度9羊火锅(首地红山郡店) · 4.7", kind: "food", lat: 42.234287, lng: 118.911629, day: 3, detail: "赤峰晚餐，人均约 ¥95。" },
  { name: "李發財重庆串串火锅 · 4.3", kind: "food", lat: 42.846903, lng: 120.647921, day: 4, detail: "奈曼晚餐备选，人均约 ¥59。" },
  { name: "荞佳香库伦饸饹面 · 4.1", kind: "food", lat: 42.729288, lng: 121.775964, day: 5, detail: "D5 快速午餐，人均约 ¥19。" },

  { name: "中国石油通辽第六加油站 · 4.7", kind: "fuel", lat: 43.621586, lng: 122.254729, day: 1, detail: "D1 到通辽后补满，D2 满油出发。" },
  { name: "中国石油赤峰左旗契丹加油站 · 4.4", kind: "fuel", lat: 43.968559, lng: 119.377384, day: 2, detail: "林东镇内，D2 到店后补满。" },
  { name: "中国石油赤峰松山宝山桥加油站 · 4.5", kind: "fuel", lat: 42.238438, lng: 118.884256, day: 3, detail: "赤峰市区补油锚点，D4 出发前确认满油。" },
  { name: "中国石油奈曼第四加油站 · 4.6", kind: "fuel", lat: 42.843829, lng: 120.639622, day: 4, detail: "奈曼县城内，D4 到店后补满。" },
];

const poiColors = {
  fuel: { bg: "#d97706", icon: "油", label: "加油站" },
  hotel: { bg: "#2563eb", icon: "住", label: "酒店" },
  food: { bg: "#dc2626", icon: "食", label: "餐饮" },
};

function amapMarkerUrl(lng, lat, name) {
  const params = new URLSearchParams({
    position: `${lng},${lat}`,
    name,
    src: "TripChifeng",
    coordinate: "gaode",
    callnative: "1",
  });
  return `https://uri.amap.com/marker?${params}`;
}

function navLink(nav) {
  if (!nav) return "";
  const [lng, lat, name] = nav;
  return `<a class="nav-link" href="${amapMarkerUrl(lng, lat, name)}" target="_blank" rel="noreferrer">高德导航</a>`;
}

function renderItinerary() {
  const container = document.querySelector("#itinerary");
  container.innerHTML = routeDays
    .map(
      (item) => `
        <article class="timeline-card" data-day="${item.day}">
          <div class="day-badge">D${item.day}<span class="day-date">${item.date}</span></div>
          <div>
            <h3>${item.title}</h3>
            <div class="timeline-meta">${item.totalDrive} · ${item.stay}</div>
            <div class="weather-badge">${item.pace}</div>
            <p class="weather-tip">${item.dayNote}</p>
            <div class="legs">
              <p class="legs-title">分段驾驶</p>
              <ul>${item.legs.map((leg) => `<li><span class="leg-route">${leg.route}</span><span class="leg-time">${leg.time}</span></li>`).join("")}</ul>
            </div>
            <div class="timeline-hours">
              ${item.timeline
                .map(
                  (entry) => `
                    <div class="hour-entry">
                      <span class="hour-time">${entry.time}</span>
                      <div class="hour-body">
                        <span class="hour-what">${entry.what}<span class="hour-where"> · ${entry.where}</span>${navLink(entry.nav)}</span>
                        <div class="hour-detail">${entry.detail.replace(/\n/g, "<br>")}</div>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="detail-grid">
              <div><strong>就餐</strong><span>${item.meals}</span></div>
              <div><strong>住宿</strong><span>${item.hotel}</span></div>
              <div><strong>油车补给</strong><span>${item.fuel}</span></div>
            </div>
            <ul class="stop-list">${item.stops.map((stop) => `<li>${stop}</li>`).join("")}</ul>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFuelPlan() {
  const container = document.querySelector("#fuel-plan");
  container.innerHTML = fuelPlan
    .map((item) => `<article class="charge-card"><strong>${item.day}</strong><h3>${item.legs}</h3><p>${item.rule}</p></article>`)
    .join("");
}

let routeMap = null;
let routeLayerGroup = null;
let markerGroup = null;
let poiGroup = null;
let activeDay = "all";
let activePoiKinds = new Set(["fuel", "hotel", "food"]);

function setMapStatus(message, visible = true) {
  const status = document.getElementById("map-status");
  if (!status) return;
  status.textContent = message;
  status.hidden = !visible;
}

function initLeafletMap() {
  const element = document.getElementById("leaflet-map");
  if (!element || typeof L === "undefined") {
    if (element) element.innerHTML = '<div class="map-fallback">地图组件加载失败，请检查网络后刷新。</div>';
    return;
  }

  routeMap = L.map("leaflet-map", { attributionControl: false, zoomControl: true }).setView([43.45, 121.2], 6);
  routeMap.zoomControl.setPosition("bottomright");

  let tileErrors = 0;
  const tileLayer = L.tileLayer(
    "https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=22813193061716c4d729ab41f125de23",
    { maxZoom: 18, minZoom: 4 },
  );
  tileLayer.on("loading", () => setMapStatus("星图云底图加载中…"));
  tileLayer.on("load", () => setMapStatus("", false));
  tileLayer.on("tileerror", () => {
    tileErrors += 1;
    if (tileErrors >= 6) setMapStatus("星图云底图暂未加载，但高德路线与景点仍可查看。请稍后刷新。", true);
  });
  tileLayer.addTo(routeMap);

  drawMap("all");
}

function makeRouteIcon(background, label, size = 28) {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background:${background};color:#fff;width:${size}px;height:${size}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${size < 28 ? "11px" : "13px"};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)">${label}</div>`,
    iconSize: [size + 6, size + 6],
    iconAnchor: [(size + 6) / 2, (size + 6) / 2],
    popupAnchor: [0, -((size + 6) / 2)],
  });
}

function makePoiIcon(kind) {
  const config = poiColors[kind];
  return L.divIcon({
    className: "custom-div-icon poi-icon",
    html: `<div style="background:${config.bg};color:#fff;width:24px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:850;border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,0.28)">${config.icon}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -15],
  });
}

function dayRouteCoordinates(day) {
  const geometry = window.routeGeometry || {};
  if (day === "all") return Object.values(geometry).flatMap((route) => route.coordinates || []);
  return geometry[Number(day)]?.coordinates || [];
}

function drawRoutes(day) {
  routeLayerGroup = L.layerGroup().addTo(routeMap);
  const geometry = window.routeGeometry || {};
  const days = day === "all" ? Object.keys(geometry) : [String(day)];
  days.forEach((dayNumber) => {
    const route = geometry[dayNumber];
    if (!route?.coordinates?.length) return;
    L.polyline(route.coordinates, {
      color: colors[Number(dayNumber)] || colors[1],
      weight: day === "all" ? 5 : 6,
      opacity: 0.9,
      lineJoin: "round",
      lineCap: "round",
    })
      .bindPopup(`<strong>D${dayNumber} 高德实测路线</strong><br>${route.distanceKm} km · 约 ${route.durationHours} h · 过路费约 ¥${route.tolls}`)
      .addTo(routeLayerGroup);
  });
}

function drawRoutePoints(day) {
  markerGroup = L.layerGroup().addTo(routeMap);
  const visiblePoints = day === "all" ? points : points.filter((point) => point.days.includes(Number(day)));
  visiblePoints.forEach((point, index) => {
    const pointDay = day === "all" ? point.days[0] : Number(day);
    const label = point.kind === "terminal" ? "环" : String(index + 1);
    const navigation = amapMarkerUrl(point.lng, point.lat, point.name);
    L.marker([point.lat, point.lng], { icon: makeRouteIcon(colors[pointDay] || colors[1], label) })
      .bindPopup(`<strong>${point.name}</strong><br><small>${point.detail}</small><br><a href="${navigation}" target="_blank" rel="noreferrer">高德导航</a>`)
      .addTo(markerGroup);
  });
}

function drawPois(day) {
  poiGroup = L.layerGroup().addTo(routeMap);
  const visiblePois = pois.filter((poi) => activePoiKinds.has(poi.kind) && (day === "all" || poi.day === Number(day)));
  visiblePois.forEach((poi) => {
    const navigation = amapMarkerUrl(poi.lng, poi.lat, poi.name);
    L.marker([poi.lat, poi.lng], { icon: makePoiIcon(poi.kind) })
      .bindPopup(`<strong>${poiColors[poi.kind].label} · ${poi.name}</strong><br><small>${poi.detail}</small><br><a href="${navigation}" target="_blank" rel="noreferrer">高德导航</a>`)
      .addTo(poiGroup);
  });
}

function fitMap(day) {
  const routeCoordinates = dayRouteCoordinates(day);
  const pointCoordinates = (day === "all" ? points : points.filter((point) => point.days.includes(Number(day)))).map((point) => [point.lat, point.lng]);
  const boundsPoints = [...routeCoordinates, ...pointCoordinates];
  if (boundsPoints.length) routeMap.fitBounds(L.latLngBounds(boundsPoints).pad(day === "all" ? 0.08 : 0.16));
}

function drawMap(day) {
  if (!routeMap) return;
  activeDay = day;
  if (routeLayerGroup) routeMap.removeLayer(routeLayerGroup);
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  drawRoutes(day);
  drawRoutePoints(day);
  drawPois(day);
  fitMap(day);
}

function togglePoiKind(kind) {
  if (activePoiKinds.has(kind)) activePoiKinds.delete(kind);
  else activePoiKinds.add(kind);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  drawPois(activeDay);
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawMap(button.dataset.day);
    });
  });

  document.querySelectorAll(".poi-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-off");
      togglePoiKind(button.dataset.kind);
    });
  });
}

renderItinerary();
renderFuelPlan();
bindFilters();
initLeafletMap();
