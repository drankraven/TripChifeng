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
    hotel: "⚠️ 达里湖周边没有星级酒店，以下为最佳选择：\n• 🥇 贡格尔河民宿（4.9 分/32评，2025 开业，¥150-250）— 达来诺日镇，口碑极好\n• 🥈 达里诺尔宾馆（4.0 分/144评，北岸，最正规，¥200-350）\n• 💡 若以上不满足品质要求：当晚赶回经棚住（80km/1.5h），但 D2 要从经棚重复开 80km 到达里湖",
    charging: "经棚补满！达里湖周边无充电桩（达来诺日镇有新装 3 台但未确认运营）。今晚尽量省电。",
    stops: ["真寂之寺", "辽上京博物馆", "辽上京遗址公园", "经棚(⭐补满电)", "贡格尔草原", "达里诺尔湖落日"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达里诺尔湖 → 达达线全程 → 阿斯哈图石林 → 热阿线黄岗梁 → 经棚",
    totalDrive: "约 225 km / 5 h 驾驶（含停车）",
    stay: "住经棚镇（品质酒店 + 补能，不绕热水塘）",
    weather: "小雨转多云 · 27℃/18℃ · <3级 · 🌂→☁️",
    weatherTip: "早小雨，湖面灰蒙。11 点后转阴——阴天柔光拍草原反而不刺眼。D2 不再绕热水塘（省 28 km 回头路），石林→热阿线→黄岗梁→经棚一条线。",
    timeline: [
      { time: "07:30", what: "早餐 + 出发", where: "达来诺日镇 / 达里湖边", detail: "简易早餐。出发即上达达线——这是住在达里湖的最大好处！" },
      { time: "08:00", what: "【达达线·精华段】达里诺尔 → 白音敖包 → 巴彦查干 → 阿斯哈图石林", where: "达达线全线 S105 北段", detail: "约 135 km / 4 h（含多停）。今天才是真正的达达线公路旅行。\n\n📍 停：① 08:40 白音敖包沙地云杉（距起点 60 km，停车场+卫生间+商店，停 30 min）② 10:00 巴彦查干弯道群（S弯+牛羊群，停 20 min）③ 11:00 风车阵（数十座风机列阵，停 15 min）" },
      { time: "12:00", what: "午餐", where: "石林门口 / 巴彦查干苏木", detail: "简餐：手把肉/蒙古包子。约 45 min" },
      { time: "12:45", what: "游阿斯哈图石林", where: "克什克腾石阵 · ¥160 · 8:30-18:00", detail: "一园区精华：月亮城堡+擎天柱+冰长城。约 1.5 h" },
      { time: "14:15", what: "【热阿线南下】石林 → 黄岗梁 → 经棚", where: "热阿线 → 经棚方向", detail: "约 90 km / 2 h（含停）。📍① 石林南门白桦林（20 km，停 15 min）② 黄岗梁山顶平台（距石林 50 km，360° 林海全景，免费，停 25 min）③ 经热水塘方向→经棚（距黄岗梁 40 km）。💡 不泡温泉、不宿热水塘，直接回经棚——优质酒店+满格充电等着你" },
      { time: "16:15", what: "经棚补能 + 入住", where: "经棚镇", detail: "⭐ 快充至满电（明天直下赤峰 280 km！）。酒店 check-in" },
      { time: "18:00", what: "晚餐 + 休整", where: "经棚镇", detail: "蒙餐/铁锅炖/莜面。无需赶路——明天只是直线南下赤峰" }
    ],
    meals: "早餐 达里湖边（简餐）；午餐 石林（手把肉/简餐）；晚餐 经棚镇。",
    hotel: "住经棚镇（品质选择丰富：克什克腾宾馆/商务酒店 ¥150-300，比达里湖和热水塘好很多）。补能方便。",
    charging: "达里湖出发电够用；经棚 D2 晚上补满。全程 225 km。",
    stops: ["白音敖包(达达线)", "弯道/风车阵(达达线)", "阿斯哈图石林", "黄岗梁山顶(热阿线)", "经棚(🏨品质住宿+⚡补能)"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "经棚 → 赤峰市区 · 辽代历史文化博物馆 + 红山公园",
    totalDrive: "约 280 km / 4 h",
    stay: "住赤峰市区（红山区）",
    weather: "小雨转晴 ☀️ · 30℃/19℃ · <3级 · 🌂→☀️",
    weatherTip: "⭐ 四天中最好的一天！上午雨后放晴，4 小时高速风景好。下午到赤峰晴天逛博物馆+红山公园。不再绕热水塘/黄岗梁——今天就是一条直线南下。",
    timeline: [
      { time: "08:30", what: "早餐 + 退房", where: "经棚镇", detail: "不用赶！今天只有 280 km 高速。早餐吃好再走" },
      { time: "09:30", what: "自驾 经棚 → 赤峰市区", where: "G303 → G16 丹锡高速", detail: "约 280 km / 3.5-4 h。限速 100-120。不用中途停——经棚满电直接撑到赤峰" },
      { time: "13:30", what: "抵达赤峰 + 午餐", where: "赤峰市区", detail: "中午到！比原来 15:30 早 2 小时。对夹（赤峰头牌！）+ 蒙餐。约 1 h" },
      { time: "14:30", what: "游辽代历史文化博物馆", where: "红山区钢铁西街 · 免费 · AAA", detail: "赤峰博物馆南馆。2023 年开放，43968㎡。辽时期历史文化展（上·下）+ 辽壁画 + 辽塔建筑。约 1.5 h" },
      { time: "16:00", what: "游红山公园 + 赤峰全景", where: "红山区北环路 · 免费 · 05:30-21:00", detail: "赤峰城市地标！赭红色山体——城市因此得名。登山俯瞰红山区+英金河。7 月日落 19:30。约 1.5 h" },
      { time: "17:30", what: "自由探索", where: "赤峰市区", detail: "逛街/休息。红山区或松山区夜市" },
      { time: "19:00", what: "晚餐", where: "赤峰市区", detail: "涮羊肉/蒙餐/对夹（最后补一口！）。推荐红山区美食街" }
    ],
    meals: "午餐 赤峰市区（对夹/蒙餐）；晚餐 赤峰市区（涮羊肉/蒙餐）。",
    hotel: "住赤峰红山区/松山区：汉庭/如家 ¥150-250，全季/亚朵 ¥250-400。推荐红山区（近博物馆+红山公园）。",
    charging: "经棚满电出发，280 km 直达赤峰。赤峰市区充电桩密集（国网/特来电/星星），晚上补满。",
    stops: ["辽代历史文化博物馆", "红山公园·赤峰全景", "赤峰市区"]
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
  { day: "D2", legs: "达里诺尔 → 达达线 → 石林 → 热阿线 → 经棚", rule: "225 km 靠 D1 经棚满电。达来诺日镇 3 台桩备选。晚上经棚补满。" },
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

// --- POI Data: 充电桩 · 酒店 · 餐饮 ---
const pois = [
  // ⚡ 充电桩
  { name: "经棚镇充电站（国网/特来电/星星）", kind: "charge", lat: 43.254, lng: 117.502, day: 1, detail: "经棚镇核心补能点。D1/D2 必充。多个运营商，快充桩充足。" },
  { name: "达来诺日镇充电桩（3台·未确认）", kind: "charge", lat: 43.235, lng: 116.725, day: 1, detail: "达来诺日镇新装3台充电桩，运营状态待确认，不可依赖。" },
  { name: "赤峰市区充电站密集区", kind: "charge", lat: 42.262, lng: 118.957, day: 3, detail: "红山区/松山区充电桩密集，国网+特来电+星星。D3 晚上补满。" },
  { name: "G45 牛营子服务区（国网）", kind: "charge", lat: 42.15, lng: 119.28, day: 4, detail: "G45大广高速赤峰境内服务区，2024年投运。D4 途中补能首选。" },
  { name: "G45 茅荆坝服务区（国网）", kind: "charge", lat: 41.62, lng: 118.25, day: 4, detail: "河北承德段 K1000 处。南距双峰寺 53km。D4 备选补能点。" },
  // 🏨 酒店
  { name: "贡格尔河民宿 · 4.9分", kind: "hotel", lat: 43.232, lng: 116.718, day: 1, detail: "达来诺日镇西岗更嘎查。2025开业，32评 4.9分。¥150-250。D1 首选。" },
  { name: "达里湖朋悦快捷宾馆 · 3.9分", kind: "hotel", lat: 43.244, lng: 116.678, day: 1, detail: "达来诺日镇渔场商业街3号。23评 3.9分。近北岸景区。" },
  { name: "达里诺尔宾馆 · 4.0分", kind: "hotel", lat: 43.260, lng: 116.655, day: 1, detail: "北岸最正规酒店，144评 4.0分。¥200-350。D1 备选。" },
  { name: "克什克腾宾馆/商务酒店群", kind: "hotel", lat: 43.252, lng: 117.500, day: 2, detail: "经棚镇品质酒店选择丰富。¥150-300。D2 住宿，充电方便。" },
  { name: "赤峰红山区商务酒店群", kind: "hotel", lat: 42.260, lng: 118.955, day: 3, detail: "汉庭/如家 ¥150-250，全季/亚朵 ¥250-400。D3 住宿。" },
  // 🍽️ 餐饮
  { name: "林东镇蒙餐/对夹", kind: "food", lat: 43.964, lng: 119.390, day: 1, detail: "林东镇蒙餐馆：对夹、手把肉、锅茶、奶茶。D1 午餐。" },
  { name: "达来诺日镇全鱼宴", kind: "food", lat: 43.235, lng: 116.725, day: 1, detail: "达里湖华子鱼（瓦氏雅罗鱼），咸水湖特产。D1 晚餐。" },
  { name: "经棚镇蒙餐/铁锅炖/莜面", kind: "food", lat: 43.253, lng: 117.500, day: 2, detail: "经棚镇餐饮选择丰富。D2 晚餐。" },
  { name: "赤峰红山区美食街", kind: "food", lat: 42.258, lng: 118.958, day: 3, detail: "对夹（头牌！）+ 涮羊肉/蒙餐。D3 晚餐。" }
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
