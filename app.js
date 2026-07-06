const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化 — 经棚补能 — 达里诺尔湖落日",
    totalDrive: "约 254 km / 4.25 h",
    stay: "达里诺尔宾馆（北岸）或贡格尔河民宿（达来诺日镇）",
    weather: "小雨转多云 · 28℃/17℃ · <3级 · 🌂→☁️",
    weatherTip: "早小雨，石窟防滑。午后转多云适合长途。17℃ 早晚凉。",
    timeline: [
      { time: "07:30", what: "早餐", where: "林东镇", detail: "早起。对夹/奶茶/蒙餐" },
      { time: "08:00", what: "自驾 林东 → 真寂之寺", where: "南 14 km", detail: "约 25 min。⚠️ 小雨路面湿滑慢行" },
      { time: "08:30", what: "游真寂之寺·召庙石窟", where: "AAAA 景区 · ¥30 · 08:00-17:00", detail: "辽代石窟（全国独一份）：中窟释迦牟尼卧佛、南北窟、清代善福寺。112 尊佛像。约 1.25 h" },
      { time: "09:50", what: "返回林东", where: "14 km / 25 min", detail: "" },
      { time: "10:15", what: "游辽上京博物馆", where: "林东镇 · ¥10 · 09:00-12:00", detail: "6 展厅：辽代历史/瓷器/壁画/丧葬。上午场至 12:00。约 1.5 h" },
      { time: "11:45", what: "午餐", where: "林东镇", detail: "对夹、蒙餐、锅茶。约 1 h" },
      { time: "12:45", what: "游辽上京遗址公园", where: "林东镇（紧邻博物馆）", detail: "北塔/南塔/皇城遗址，户外步行。约 1 h" },
      { time: "13:50", what: "自驾 林东 → 经棚（直达）", where: "G303 → G305 经林西", detail: "约 160 km / 2.5 h。午后转多云，驾驶舒适" },
      { time: "16:25", what: "经棚补能", where: "经棚镇", detail: "⭐ 快充至满电（达里湖无桩！）。补水 + 零食。约 35 min" },
      { time: "17:00", what: "【达达线北段】经棚 → 达里诺尔湖", where: "经贡格尔草原 · 达达线起点", detail: "约 80 km / 1.5 h。贡格尔草原铺开，今天先'预览'达达线" },
      { time: "18:30", what: "达里诺尔湖 · 傍晚游湖 + 日落", where: "南岸 ¥120 / 找牧民野路 ¥20", detail: "7 月日落约 19:30。风车阵 + 湖面 + 草原三层叠景，绝佳！约 1 h" },
      { time: "19:30", what: "晚餐 + 住宿", where: "达来诺日镇 / 达里湖北岸", detail: "全鱼宴晚餐。🏨 住宿选择见下" }
    ],
    meals: "午餐 林东镇（对夹/蒙餐）；晚餐 达里湖边/达来诺日镇（全鱼宴·华子鱼）。",
    hotel: "⚠️ 达里湖周边没有星级酒店，以下为高德 POI 实际结果：\n• 🥇 达里湖南岸碧海银滩度假中心 — 南岸景区旁100m（最近湖）\n• 🥈 达里湖君悦酒店 — 达日罕苏木达日罕街3号\n• 💡 若以上不满足品质要求：当晚赶回经棚住（80km/1.5h），但 D2 要从经棚重复开 80km 到达里湖",
    charging: "经棚补满！达里湖周边无充电桩（达来诺日镇有新装 3 台但未确认运营）。今晚尽量省电。",
    stops: ["真寂之寺", "辽上京博物馆", "辽上京遗址公园", "经棚(⭐补满电)", "贡格尔草原", "达里诺尔湖落日"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达里湖日出 → 达达线精简 → 石林快览 → 热阿线黄岗梁 → 经棚",
    totalDrive: "约 225 km / 4.5 h 驾驶",
    stay: "住经棚镇（15:20 到，比原来早近 1h）",
    weather: "小雨转多云 · 27℃/18℃ · <3级 · 🌂→☁️",
    weatherTip: "⭐ 核心改动：精简停靠→达达线只停2站、石林只玩一园区45min、热阿线黄岗梁是今天收尾高潮。达里湖日出（7月约 04:50）看完直接出发，充分利用晨光。达来诺日服务区 G16 中段有 5 个蒙马快充！",
    timeline: [
      { time: "05:00", what: "达里湖日出 🌅", where: "南岸牧民野路 ¥20/北岸 ¥120", detail: "7月日出约 04:50。晨光中湖面+风车阵绝美，天然闹钟不费力。看完日出直接早餐出发。约 1 h" },
      { time: "06:00", what: "早餐", where: "达来诺日镇 / 湖边", detail: "简易早餐。喝碗奶茶暖身。约 30 min" },
      { time: "06:45", what: "出发 → 上达达线", where: "达里湖 → 达来诺日服务区方向", detail: "住在湖边的最大好处：上路就是达达线！约 30 km / 40 min 到达来诺日服务区" },
      { time: "07:25", what: "达来诺日服务区（充电+休整）", where: "G16 达来诺日服务区", detail: "⭐ 顺路充电！5 个蒙马快充桩。喝水/上洗手间。停 20 min" },
      { time: "07:45", what: "【达达线精华】继续北上", where: "白音敖包方向", detail: "贡格尔草原铺开——晨光中的草原最温柔。沿途不下车，开窗吹风，感受\"中国版66号公路\"" },
      { time: "08:30", what: "📍 白音敖包·沙地云杉（唯一深度停靠）", where: "达达线约 60 km 处", detail: "世界唯一的沙地云杉林。有停车场+卫生间+商店。晨间光线穿透杉林绝佳。停 30 min" },
      { time: "09:20", what: "达达线后半段（羊群+弯道+S弯穿过）", where: "白音敖包 → 巴彦查干 → 石林", detail: "约 55 km / 1 h。这段弯道多、牛羊多，放慢车速享受。📍 风车阵（距石林约 15 km，快停拍照 15 min）" },
      { time: "10:35", what: "抵达阿斯哈图石林区域", where: "克什克腾石阵", detail: "稍作休整，喝水、上洗手间" },
      { time: "10:45", what: "游石林·一园区精华（精简版）", where: "AAAAA · ¥160 · 8:30-18:00", detail: "⚡ 只看一园区：月亮城堡→擎天柱→冰长城，45 min 足够看精华。不用赶三个园区——草原石林看多了容易审美疲劳。约 45 min" },
      { time: "11:30", what: "午餐", where: "石林门口/巴彦查干苏木", detail: "手把肉/蒙古包子简餐。约 45 min" },
      { time: "12:15", what: "【热阿线南下】石林 → 黄岗梁", where: "热阿线（\"小独库\"）", detail: "约 60 km / 1.5 h（含停）。📍 路经白桦林（石林南门约 20 km，快停 10 min 拍照）。海拔下降，植被从草原→白桦林→针叶林递变" },
      { time: "13:45", what: "📍 黄岗梁山顶平台 ⭐（今天高潮）", where: "黄岗梁国家森林公园·免费", detail: "海拔 2029m，大兴安岭最高峰！360° 林海全景，今天所有风景的压轴。停 40 min——拍照、看林海、深呼吸。这里不用赶，因为离经棚只剩 40 km" },
      { time: "14:25", what: "热阿线最后一段 → 经棚", where: "黄岗梁 → 热水塘 → 经棚", detail: "约 40 km / 55 min。经过热水塘（不停），直接到经棚" },
      { time: "15:20", what: "⭐ 抵达经棚！充电+入住", where: "经棚镇", detail: "比原来 16:15 早了近 1 小时！有充足时间 check-in、充电、洗澡休息。下午 3 点半，还可以小逛经棚镇" },
      { time: "18:00", what: "晚餐", where: "经棚镇", detail: "蒙餐/铁锅炖/莜面。白天看风景，晚上好好吃。" }
    ],
    meals: "早餐 达里湖边/达来诺日镇（简餐·奶茶）；午餐 石林门口（手把肉/蒙古包子·简餐）；晚餐 经棚镇（蒙餐/铁锅炖）。",
    hotel: "住经棚镇（15:20 到！高德真实评分）：\n⭐ 星季酒店 4.9分 | 丽景酒店 4.7分 | 格林豪泰智选 4.6分 | 汉庭 4.5分 | 育龙宾馆 4.6分 | 吉雅民宿 4.5分\n充沛时间选酒店，充电休息两不误。",
    charging: "达来诺日服务区 G16 中段补一次电（5 个蒙马快充）；晚上经棚补满（10 个充电桩）。全程 225 km。",
    stops: ["达里湖日出🌅", "达来诺日服务区(⭐充电)", "白音敖包(达达线)", "石林·一园区45min", "黄岗梁山顶⭐(今天高潮)", "经棚(15:20到·🏨品质+⚡补能)"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "经棚闲逛 → 乌丹午餐 → 赤峰 · 辽代博物馆 + 红山落日",
    totalDrive: "约 280 km / 4 h",
    stay: "住赤峰市区（红山区）",
    weather: "小雨转晴 ☀️ · 30℃/19℃ · <3级 · 🌂→☀️",
    weatherTip: "⭐ 四天最好天气！D2 已经玩完精华，D3 从从容容——经棚早市→乌丹午餐→赤峰博物馆→红山落日。一条直线南下，彻底轻松。",
    timeline: [
      { time: "08:30", what: "经棚早市逛逛 + 早餐", where: "经棚镇", detail: "D2 睡够了，D3 不用赶。逛逛经棚早市买点奶豆腐/牛肉干，吃个悠闲早餐。约 1 h" },
      { time: "09:30", what: "出发 → 南下赤峰", where: "G303 → G16 丹锡高速", detail: "经棚满电。丘陵→农田→城市，沿途风景从草原过渡。约 170 km / 2.5 h" },
      { time: "12:00", what: "午餐 · 翁牛特旗乌丹镇", where: "乌丹镇（约中途）", detail: "翁牛特旗旗府，赤峰到经棚的中点。蒙餐/东北菜，休息一下。约 1 h" },
      { time: "13:00", what: "继续出发 → 赤峰", where: "G16 丹锡高速", detail: "约 90 km / 1.5 h。午后晴空，一路向南" },
      { time: "14:30", what: "抵达赤峰 + 充电", where: "赤峰红山区", detail: "赤峰 24 个充电站随便选。入住后休整" },
      { time: "15:30", what: "游辽代历史文化博物馆", where: "红山区钢铁西街 · 免费 · AAA", detail: "赤峰博物馆南馆。2023 开放，43968㎡。辽文化展（上·下）+ 辽壁画 + 辽塔建筑。昨天看草原+石林，今天看千年辽文化——自然+人文完美衔接。约 1.5 h" },
      { time: "17:00", what: "游红山公园 + 赤峰落日", where: "红山区北环路 · 免费 · 05:30-21:00", detail: "赤峰城市地标！赭红色山体。登山俯瞰红山区+英金河全景。7 月日落约 19:30——如果体力好可以等日落，或者看完就先下去。约 1.5 h" },
      { time: "19:00", what: "赤峰晚餐 🍽️", where: "红山区美食街", detail: "⭐对夹（必吃！邱记对夹家常菜 3.6分 ¥28/人）+ 新奥敦奶茶馆 4.0分 + 涮羊肉。D1 辽上京→D2 草原石林→D3 赤峰城市，四天从古到今、从荒野到城市，完整。约 1 h" }
    ],
    meals: "早餐 经棚镇（蒙餐/早市小吃）；午餐 乌丹镇（翁牛特旗·蒙餐/东北菜）；晚餐 赤峰红山区（对夹+涮羊肉+蒙餐）。",
    hotel: "住赤峰红山区/松山区：汉庭/如家 ¥150-250，全季/亚朵 ¥250-400。推荐红山区（近博物馆+红山公园+美食街）。",
    charging: "经棚满电出发，280 km 直达赤峰。赤峰市区 24 个充电站（昆仑网电/特来电/星星/云快充），晚上补满即可。",
    stops: ["经棚早市", "乌丹午餐", "赤峰·辽代博物馆", "红山公园·落日", "赤峰美食街"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "赤峰 → 沈阳（中午抵达）",
    totalDrive: "约 280 km / 4 h",
    stay: "终点沈阳",
    weather: "小雨转阴 · 31℃/21℃ · <3级 · 🌂→☁️",
    weatherTip: "上午小雨不影响高速。中午到沈阳 31℃ 阴天，适合市内吃饭逛街。",
    timeline: [
      { time: "08:00", what: "早餐 + 退房", where: "赤峰市区", detail: "对夹+奶茶（最后一次！）。赤峰满电" },
      { time: "09:00", what: "自驾 赤峰 → 沈阳", where: "G45 大广高速", detail: "约 280 km / 4 h。经朝阳/阜新。中午到" },
      { time: "13:00", what: "抵达沈阳 🎉", where: "沈阳市区", detail: "老边饺子/李连贵熏肉大饼/西塔韩国街。约 1040 km 全程完成！" }
    ],
    meals: "早餐 赤峰（对夹）；午餐 沈阳（老边饺子/东北菜）。",
    hotel: "住沈阳。",
    charging: "赤峰满电 → 280 km 直达或途中服务区补一次。沈阳充电桩极密集。",
    stops: ["赤峰", "沈阳（中午到）"]
  }
];

const chargePlan = [
  { day: "D1", legs: "林东 → 经棚(补满) → 达里诺尔", rule: "经棚是唯一补能点。达里湖无桩。今晚省电。" },
  { day: "D2", legs: "达里诺尔 → 达达线 → 石林 → 热阿线 → 经棚", rule: "225 km 靠 D1 经棚满电。⭐达来诺日服务区 G16（距达里湖30km）有5个蒙马快充！达达线中途可补能。晚上经棚补满。" },
  { day: "D3", legs: "经棚 → 赤峰市区", rule: "280 km 直达。赤峰市区充电桩密集，晚上补满。" },
  { day: "D4", legs: "赤峰 → 沈阳", rule: "280 km 直达或服务区补一次。沈阳桩多。" }
];

const points = [
  { name: "巴林左旗·林东镇", day: 1, lat: 43.9639, lng: 119.3907, kind: "start" },
  { name: "真寂之寺·召庙", day: 1, lat: 43.88, lng: 119.32, kind: "spot" },
  { name: "克什克腾·经棚镇", day: 1, lat: 43.253, lng: 117.5, kind: "charge" },
  { name: "达里诺尔湖", day: 1, lat: 43.238, lng: 116.65, kind: "spot" },
  { name: "白音敖包·沙地云杉", day: 2, lat: 43.52, lng: 116.98, kind: "spot" },
  { name: "阿斯哈图石林", day: 2, lat: 44.07, lng: 117.45, kind: "spot" },
  { name: "黄岗梁森林公园", day: 2, lat: 43.55, lng: 117.4, kind: "spot" },
  { name: "赤峰·辽代历史博物馆", day: 3, lat: 42.26, lng: 118.95, kind: "spot" },
  { name: "赤峰·红山公园", day: 3, lat: 42.28, lng: 118.98, kind: "spot" },
  { name: "沈阳", day: 4, lat: 41.8057, lng: 123.4315, kind: "end" }
];

const colors = { 1: "#0f766e", 2: "#b4532a", 3: "#2f5f8f", 4: "#b88918" };

// --- POI Data: 高德 API v5 真实数据（types 参数搜索）---
const pois = [
  // ⚡ 充电桩（高德 types=011100 过滤充电站）
  { name: "蒙马超级快充(经棚服务区北区)", kind: "charge", lat: 43.2417, lng: 117.4858, day: 1, detail: "G16丹锡高速经棚服务区。D1快充首选。" },
  { name: "蒙马超级快充(克旗政府东停车场)", kind: "charge", lat: 43.2660, lng: 117.5476, day: 1, detail: "经棚市区。克什克腾旗人民政府东。D1/D2 备选。" },
  { name: "驴充充充电站(新世纪宾馆)", kind: "charge", lat: 43.2475, lng: 117.5362, day: 2, detail: "经棚镇应昌路新世纪宾馆。D2住宿旁充电。" },
  { name: "⭐ 达来诺日服务区充电站（G16·达达线）", kind: "charge", lat: 43.4222, lng: 116.8264, day: 2, detail: "G16达来诺日服务区，5个充电桩（蒙马快充）。D2达达线中段补能！距达里湖北约30km。" },
  { name: "昆仑网电(赤峰联通公司)", kind: "charge", lat: 42.2599, lng: 118.9324, day: 3, detail: "钢铁街与芳草路交叉口。D3赤峰补能。" },
  { name: "星星充电(赤峰博物馆站)", kind: "charge", lat: 42.2474, lng: 118.9012, day: 3, detail: "赤峰博物馆旁。D3备选。" },
  { name: "特来电(赤峰桥北长联石油)", kind: "charge", lat: 42.3019, lng: 118.9462, day: 3, detail: "赤锡路55号。D3备选。" },
  // 🏨 酒店（高德 types=100000 + show_fields=business）
  { name: "⭐ 星季酒店 · 4.9分", kind: "hotel", lat: 43.2500, lng: 117.5355, day: 2, detail: "经棚镇三特旅业二楼。4.9分！D2品质首选。" },
  { name: "丽景酒店 · 4.7分", kind: "hotel", lat: 43.2501, lng: 117.5354, day: 2, detail: "经棚镇和谐家园南门。4.7分。D2备选。" },
  { name: "格林豪泰智选 · 4.6分", kind: "hotel", lat: 43.2529, lng: 117.5387, day: 2, detail: "经棚镇应昌路与贡格尔街交叉口。4.6分。连锁品质。" },
  { name: "汉庭酒店(经棚店) · 4.5分", kind: "hotel", lat: 43.2525, lng: 117.5387, day: 2, detail: "应昌路与经五街交叉口。连锁标准，充电旁。" },
  { name: "育龙宾馆 · 4.6分", kind: "hotel", lat: 43.2459, lng: 117.5285, day: 2, detail: "赛汗街与经锡路交叉口。4.6分。D2实惠之选。" },
  { name: "吉雅民宿 · 4.5分", kind: "hotel", lat: 43.2466, lng: 117.5343, day: 2, detail: "达尔罕街中医蒙医医院西。4.5分。D2特色民宿。" },
  { name: "达里湖南岸碧海银滩度假中心", kind: "hotel", lat: 43.2388, lng: 116.7125, day: 1, detail: "达里湖南岸景区旁100m。D1住宿首选（近湖）。" },
  { name: "达里湖君悦酒店", kind: "hotel", lat: 43.2393, lng: 116.7504, day: 1, detail: "达日罕苏木达日罕街3号。D1备选。" },
  // 🍽️ 餐饮（高德 types=050000）
  { name: "蒙都43°9羊火锅(林东店)", kind: "food", lat: 43.962, lng: 119.392, day: 1, detail: "林东镇。蒙餐火锅。D1午餐推荐。" },
  { name: "天骄把肉城(林东)", kind: "food", lat: 43.964, lng: 119.390, day: 1, detail: "林东镇。正宗手把肉。D1午餐备选。" },
  { name: "新奥敦奶茶馆 · 4.0分", kind: "food", lat: 42.258, lng: 118.955, day: 3, detail: "赤峰红山区。蒙式奶茶馆。¥29/人。D3早餐/午餐。" },
  { name: "邱记对夹家常菜 · 3.6分", kind: "food", lat: 42.259, lng: 118.954, day: 3, detail: "赤峰红山区。对夹（赤峰头牌！）¥28/人。D3必吃。" }
];

const poiColors = {
  charge: { bg: "#e8983e", icon: "⚡", label: "充电桩" },
  hotel: { bg: "#3b82f6", icon: "🏨", label: "酒店" },
  food: { bg: "#ef4444", icon: "🍽️", label: "餐饮" }
};

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
            ${item.weather ? `<div class="weather-badge">🌤 ${item.weather}</div>` : ""}
            ${item.weatherTip ? `<p class="weather-tip">${item.weatherTip}</p>` : ""}
            <div class="timeline-hours">
              ${item.timeline
                .map(
                  (t) => `
                    <div class="hour-entry">
                      <span class="hour-time">${t.time}</span>
                      <div class="hour-body">
                        <span class="hour-what">${t.what}<span class="hour-where"> · ${t.where}</span></span>
                        <div class="hour-detail">${t.detail.replace(/\n/g, "<br>")}</div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
            <div class="detail-grid">
              <div><strong>就餐</strong><span>${item.meals}</span></div>
              <div><strong>住宿</strong><span>${item.hotel}</span></div>
              <div><strong>补能</strong><span>${item.charging}</span></div>
            </div>
            <ul class="stop-list">
              ${item.stops.map((stop) => `<li>${stop}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCharging() {
  const container = document.querySelector("#charging");
  container.innerHTML = chargePlan
    .map(
      (item) => `
        <article class="charge-card"><strong>${item.day}</strong><h3>${item.legs}</h3><p>${item.rule}</p></article>
      `
    )
    .join("");
}

// --- Leaflet Map ---
let routeMap = null, routeLayer = null, markerGroup = null, poiGroup = null;
let activeDay = "all", activePoiKinds = new Set(["charge", "hotel", "food"]);

function initLeafletMap() {
  const el = typeof document !== "undefined" && document.getElementById ? document.getElementById("leaflet-map") : null;
  if (!el || typeof L === "undefined") return;
  routeMap = L.map("leaflet-map", { attributionControl: false, zoomControl: true }).setView([42.8, 118.5], 7);
  L.tileLayer("https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=22813193061716c4d729ab41f125de23", { maxZoom: 18, minZoom: 4 }).addTo(routeMap);
  routeMap.zoomControl.setPosition("bottomright");
  drawAll();
}

function makeRouteIcon(bg, label, size) {
  return L.divIcon({ className: "custom-div-icon", html: `<div style="background:${bg};color:#fff;width:${size}px;height:${size}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${size < 28 ? "11px" : "14px"};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)">${label}</div>`, iconSize: [size + 6, size + 6], iconAnchor: [(size + 6) / 2, (size + 6) / 2], popupAnchor: [0, -((size + 6) / 2)] });
}

function makePoiIcon(kind) {
  const pc = poiColors[kind]; if (!pc) return makeRouteIcon("#888", "?", 20);
  return L.divIcon({ className: "custom-div-icon poi-icon", html: `<div style="background:${pc.bg};color:#fff;width:22px;height:22px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:13px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.25)">${pc.icon}</div>`, iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -14] });
}

function drawAll() {
  if (!routeMap) return;
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (routeLayer) routeMap.removeLayer(routeLayer);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  markerGroup = L.layerGroup().addTo(routeMap);
  poiGroup = L.layerGroup().addTo(routeMap);
  const latlngs = points.map(p => [p.lat, p.lng]);
  routeLayer = L.polyline(latlngs, { color: "#0f766e", weight: 5, opacity: 0.85 }).addTo(routeMap);
  points.forEach((p, i) => {
    const isC = p.kind === "charge", c = colors[p.day] || "#0f766e";
    L.marker([p.lat, p.lng], { icon: makeRouteIcon(isC ? "#b88918" : c, isC ? "电" : String(i + 1), isC ? 24 : 30) }).bindPopup(`<strong>${p.name}</strong>`).addTo(markerGroup);
  });
  // Draw filtered POIs
  const filteredPois = pois.filter(p => activePoiKinds.has(p.kind) && (activeDay === "all" || p.day === Number(activeDay)));
  filteredPois.forEach(p => {
    L.marker([p.lat, p.lng], { icon: makePoiIcon(p.kind) }).bindPopup(`<strong>${poiColors[p.kind].icon} ${p.name}</strong><br><small>${p.detail}</small>`).addTo(poiGroup);
  });
  routeMap.fitBounds(L.latLngBounds(latlngs).pad(0.15));
}

function filterMap(day) {
  activeDay = day;
  if (!routeMap) return;
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (routeLayer) routeMap.removeLayer(routeLayer);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  const f = day === "all" ? points : points.filter(p => p.day === Number(day));
  if (!f.length) return;
  markerGroup = L.layerGroup().addTo(routeMap);
  poiGroup = L.layerGroup().addTo(routeMap);
  const ll = f.map(p => [p.lat, p.lng]);
  routeLayer = L.polyline(ll, { color: colors[Number(day)] || "#0f766e", weight: 5, opacity: 0.85 }).addTo(routeMap);
  f.forEach(p => {
    const i = points.indexOf(p), isC = p.kind === "charge", c = colors[p.day] || "#0f766e";
    L.marker([p.lat, p.lng], { icon: makeRouteIcon(isC ? "#b88918" : c, isC ? "电" : String(i + 1), isC ? 24 : 30) }).bindPopup(`<strong>${p.name}</strong>`).addTo(markerGroup);
  });
  const filteredPois = pois.filter(p => activePoiKinds.has(p.kind) && (activeDay === "all" || p.day === Number(activeDay)));
  filteredPois.forEach(p => {
    L.marker([p.lat, p.lng], { icon: makePoiIcon(p.kind) }).bindPopup(`<strong>${poiColors[p.kind].icon} ${p.name}</strong><br><small>${p.detail}</small>`).addTo(poiGroup);
  });
  routeMap.fitBounds(L.latLngBounds(ll).pad(0.25));
}

function togglePoiKind(kind) {
  if (activePoiKinds.has(kind)) activePoiKinds.delete(kind); else activePoiKinds.add(kind);
  if (routeMap) { if (poiGroup) routeMap.removeLayer(poiGroup); poiGroup = L.layerGroup().addTo(routeMap);
    const filteredPois = pois.filter(p => activePoiKinds.has(p.kind) && (activeDay === "all" || p.day === Number(activeDay)));
    filteredPois.forEach(p => { L.marker([p.lat, p.lng], { icon: makePoiIcon(p.kind) }).bindPopup(`<strong>${poiColors[p.kind].icon} ${p.name}</strong><br><small>${p.detail}</small>`).addTo(poiGroup); });
  }
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(x => x.classList.remove("is-active"));
    b.classList.add("is-active");
    filterMap(b.dataset.day);
  }));
  document.querySelectorAll(".poi-toggle").forEach(b => b.addEventListener("click", () => {
    b.classList.toggle("is-off");
    togglePoiKind(b.dataset.kind);
  }));
}

renderItinerary();
renderCharging();
if (typeof L !== "undefined") { initLeafletMap(); bindFilters(); }
else { const el = typeof document !== "undefined" && document.getElementById ? document.getElementById("leaflet-map") : null; if (el) el.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);padding:30px;">🗺️ 地图加载中…</div>`; }
