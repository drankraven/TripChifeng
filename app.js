const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化深度 — 真寂之寺 + 博物馆 + 遗址 → 经棚",
    totalDrive: "约 174 km / 2.75 h",
    stay: "住克什克腾旗经棚镇",
    weather: "小雨转多云 · 28℃/17℃ · <3级 · 🌂→☁️",
    weatherTip: "早有小雨，真寂之寺石窟注意防滑。午后转多云，适合长途驾驶。17℃ 早晚凉带外套。",
    timeline: [
      { time: "07:30", what: "早餐", where: "林东镇", detail: "早起。对夹/奶茶/蒙餐简餐" },
      { time: "08:00", what: "自驾 林东 → 真寂之寺", where: "巴林左旗南 14 km", detail: "约 14 km / 25 min。⚠️ 小雨路面湿滑，慢行" },
      { time: "08:30", what: "游真寂之寺·召庙石窟", where: "AAAA 景区，门票 ¥30，开放 08:00-17:00", detail: "辽代石窟群（全国独一份！）：中窟释迦牟尼卧佛（世界唯一头南脚北造型）、南北窟、清代善福寺。112 尊佛像。约 1.25 h。若 09:00 才开门则与遗址公园对调" },
      { time: "09:50", what: "自驾 真寂之寺 → 林东", where: "回头路 14 km", detail: "约 25 min" },
      { time: "10:15", what: "游辽上京博物馆", where: "林东镇，门票 ¥10", detail: "周二至周日 09:00-12:00 / 14:30-17:00。6 个展厅：辽代历史/瓷器/壁画/丧葬。约 1.5 h" },
      { time: "11:45", what: "午餐", where: "林东镇", detail: "对夹（赤峰头牌）、蒙餐、锅茶。约 1 h" },
      { time: "12:45", what: "游辽上京国家考古遗址公园", where: "林东镇（紧邻博物馆）", detail: "北塔 / 南塔 / 皇城遗址，露天步行。约 1 h。午后转多云 ☁️" },
      { time: "13:50", what: "自驾 林东 → 经棚", where: "G303 → G305（经林西方向）", detail: "约 160 km / 2.5 h。巴林草原风光，午后天气转好适合驾驶" },
      { time: "16:25", what: "经棚补能 + 入住", where: "经棚镇", detail: "⭐ 关键！快充至满电（明天 305 km 无桩！）。酒店 check-in，约 40 min" },
      { time: "17:30", what: "自由休整", where: "经棚镇", detail: "逛克什克腾博物馆（免费，17:00 前）或买明天路粮" },
      { time: "18:30", what: "晚餐", where: "经棚镇", detail: "蒙餐 / 铁锅炖 / 莜面窝窝。早睡——明天 06:30 出发！" }
    ],
    meals: "早餐 林东（对夹/奶茶）；午餐 林东镇（对夹/蒙餐）；晚餐 经棚镇（蒙餐/铁锅炖/莜面）。",
    hotel: "住经棚镇核心区，带停车场+近补能点。¥150-300。",
    charging: "⭐ 经棚补至满电！D2 全程 305 km 靠这管电。达来诺日镇有审批 3 台桩但不要赌。",
    stops: ["真寂之寺·召庙石窟", "辽上京博物馆", "辽上京遗址公园", "经棚镇(⭐补满电)"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达里诺尔湖 + 达达线全程 + 阿斯哈图石林 + 热阿线 → 热水塘温泉",
    totalDrive: "约 305 km / 5.5 h 驾驶",
    stay: "住热水塘温泉镇（泡汤过夜）",
    weather: "小雨转多云 · 27℃/18℃ · <3级 · 🌂→☁️",
    weatherTip: "早有小雨，达里诺尔湖面可能灰蒙，但 11:00 后转多云到阴——达达线在阴天反而柔光不刺眼！18℃ 草原偏凉，泡温泉正合适。",
    timeline: [
      { time: "06:30", what: "早餐 + 出发", where: "经棚镇", detail: "早出发！今天 305 km 是全程最长驾驶日。经棚满电出发" },
      { time: "07:00", what: "【达达线北段】经棚 → 贡格尔草原 → 达里诺尔湖南岸", where: "达达线起点段", detail: "约 80 km / 1.5 h。贡格尔草原在道路两侧铺开。⚠️ 小雨路面湿" },
      { time: "08:30", what: "游达里诺尔湖 · 南岸", where: "南岸曼陀山庄/观鸟/火山地貌，门票 ¥120", detail: "开放 8:00-18:00。中国第三大内陆湖，约 2.5 h。阴天湖面可能不如晴天蓝但火山岩柱+风车阵很有气势。💡 达来诺日镇达里湖度假中心有审批 3 台充电桩（2026.5）" },
      { time: "11:00", what: "午餐", where: "达里诺尔湖边", detail: "全鱼宴：烤华子鱼（必吃！外焦里嫩）。约 1 h。这时雨应该停了 ☁️" },
      { time: "12:00", what: "【达达线·精华段】达里诺尔 → 白音敖包 → 巴彦查干 → 阿斯哈图石林", where: "达达线全线 S105 北段", detail: "约 135 km / 3.5 h（含多停）。阴天柔光反而是拍摄草原的最佳光线！\n📍 必停：①12:40 白音敖包沙地云杉（距起点60km，停车场+卫生间，停30min）②14:00 巴彦查干弯道群（S弯+牛羊，停15min）③15:00 风车阵（数十座白色风机列阵，停15min）" },
      { time: "15:30", what: "游阿斯哈图石林", where: "克什克腾石阵·一园区，门票 ¥160", detail: "开放 8:30-18:00。月亮城堡+擎天柱+冰长城，约 1.5 h。阴天花岗岩石林更显冷峻" },
      { time: "17:00", what: "【热阿线·北段】石林 → 黄岗梁 → 热水塘", where: "热阿线盘山公路", detail: "约 90 km / 2 h。傍晚光线从云层透出，白桦林光影绝美。📍停：石林南门白桦林(15min)+黄岗梁山顶360°平台(20min,免费,风大！)+很黑村向日葵。→ 热水塘温泉镇（经棚西北 28 km）" },
      { time: "19:00", what: "入住 + 泡温泉 + 晚餐", where: "热水塘温泉镇", detail: "Check-in 温泉酒店。雨天泡温泉简直是天赐——18℃ 草原凉夜 + 温泉 = 完美！泡 1-1.5 h 后吃晚餐" }
    ],
    meals: "早餐 经棚；午餐 达里湖边（全鱼宴/烤华子鱼）；晚餐 热水塘温泉酒店。",
    hotel: "热水塘温泉酒店见底部推荐。距经棚 28 km 西北。旺季务必提前订！",
    charging: "经棚满电撑全程 305 km。达来诺日镇有审批 3 台桩（紧急备选）。热水塘慢充极少。",
    stops: ["贡格尔草原(达达线)", "达里诺尔湖·南岸", "白音敖包(达达线)", "风车阵(达达线)", "阿斯哈图石林", "热阿线·黄岗梁", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线黄岗梁 + 经棚 → 赤峰市区 · 辽代历史文化博物馆 + 红山公园",
    totalDrive: "约 310 km / 4.5 h",
    stay: "住赤峰市区（红山区）",
    weather: "小雨转晴 · 30℃/19℃ · <3级 · 🌂→☀️",
    weatherTip: "⭐ 四天中天气最好的一天！上午雨后放晴，黄岗梁林海在晴光下层次分明。到赤峰后晴天逛红山公园，30℃ 适合户外。",
    timeline: [
      { time: "08:00", what: "晨汤 + 早餐 + 退房", where: "热水塘温泉镇", detail: "早上再泡 20-30 min（反正温泉酒店付了钱）。退房出发" },
      { time: "09:00", what: "【热阿线·南段】热水塘 → 黄岗梁山顶 → 经棚", where: "热阿线", detail: "约 60 km / 1.5 h。早上去黄岗梁——晴光下的林海层次分明！山顶平台 360° 看大兴安岭余脉（免费）。停 30 min" },
      { time: "10:30", what: "经棚补能 + 早午餐", where: "经棚镇", detail: "⭐ 关键补能！快充至 85%-90%（到赤峰市区前无桩）。吃早午餐：莜面窝窝/手把肉/蒙餐。约 1 h" },
      { time: "11:30", what: "自驾 经棚 → 赤峰市区", where: "G303/G16 丹锡高速", detail: "约 250-280 km / 3.5-4 h。经棚南下 G303 → 接 G16 丹锡高速直达赤峰红山区。限速 100-120 km/h" },
      { time: "15:30", what: "游辽代历史文化博物馆", where: "赤峰市红山区钢铁西街，免费", detail: "又称赤峰博物馆南馆，AAA 景区。2023 年开放，43968㎡。专题：辽时期历史文化展（上·下）+ 辽壁画艺术精品展 + 辽塔建筑成就展。约 1.5 h。⚠️ 赤峰博物馆（老馆）目前在消防维修，去南馆！" },
      { time: "17:00", what: "游红山公园 + 看赤峰全景", where: "赤峰市红山区北环路，免费，05:30-21:00", detail: "赤峰地标——整座山呈赭红色，城市因此得名。登山顶看红山区全景+英金河，7 月日落约 19:30。约 1.5 h" },
      { time: "19:00", what: "晚餐", where: "赤峰市区", detail: "赤峰特色：对夹（赤峰头牌美食！全程没吃够的今晚补上）、涮羊肉、蒙餐。推荐红山区/松山区美食街" }
    ],
    meals: "早午餐 经棚镇（蒙餐/手把肉）；晚餐 赤峰市区（对夹/涮羊肉/蒙餐）。",
    hotel: "住赤峰市红山区或松山区：汉庭/如家 ¥150-250，全季/亚朵 ¥250-400。推荐红山区（靠近博物馆和红山公园）。",
    charging: "经棚补至 85%-90% 后，250 km 到赤峰完全够。赤峰市区充电桩密集（国网/特来电/星星充电），晚上补满为明天返沈阳做准备。",
    stops: ["热阿线·黄岗梁晨光", "经棚镇(⭐补能)", "辽代历史文化博物馆", "红山公园·赤峰全景"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "赤峰 → 沈阳（中午抵达）",
    totalDrive: "约 280 km / 4 h",
    stay: "终点沈阳，中午抵达",
    weather: "小雨转阴 · 31℃/21℃ · <3级 · 🌂→☁️",
    weatherTip: "上午小雨不影响高速公路驾驶。午后到沈阳后阴天 31℃ 较闷热，适合室内吃饭逛街。",
    timeline: [
      { time: "08:00", what: "早餐 + 退房", where: "赤峰市区", detail: "对夹 + 奶茶（最后一次！）。退房后出发" },
      { time: "09:00", what: "自驾 赤峰 → 沈阳", where: "G45 大广高速 / G25 长深高速", detail: "约 280 km / 4 h。G45 一路向南是最短路线（经朝阳/阜新），服务区多快充备选。G25 经锦州稍远但车少" },
      { time: "13:00", what: "抵达沈阳 🎉", where: "沈阳市区", detail: "中午到！从容午餐：老边饺子 / 李连贵熏肉大饼 / 西塔韩国街 / 东北菜。全程约 1070 km 圆满完成！" }
    ],
    meals: "早餐 赤峰（对夹）；午餐 沈阳（老边饺子/李连贵/东北菜）。",
    hotel: "住沈阳，近高速口或火车站。",
    charging: "赤峰满电出发；280 km 纯电可一口气跑到沈阳（或途中服务区快充一次）。进沈阳前补 70%+。",
    stops: ["赤峰市区", "沈阳（中午到）"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "林东 → 真寂之寺 → 经棚",
    rule: "林东满电，经棚补满。174 km 不用中间补。"
  },
  {
    day: "D2",
    legs: "经棚 → 达里诺尔 → 达达线 → 石林 → 热阿线 → 热水塘",
    rule: "305 km 靠经棚满电。达来诺日镇审批 3 台桩（紧急备选）。热水塘几乎无桩。"
  },
  {
    day: "D3",
    legs: "热水塘/经棚 → 赤峰市区",
    rule: "经棚补 85%-90%。280 km 到赤峰。赤峰市区充电桩密集，晚上补满。"
  },
  {
    day: "D4",
    legs: "赤峰 → 沈阳",
    rule: "赤峰满电 → 280 km 到沈阳（或途中服务区补一次）。沈阳充电桩极密集。"
  }
];

const points = [
  { name: "巴林左旗·林东镇", day: 1, lat: 43.9639, lng: 119.3907, kind: "start" },
  { name: "真寂之寺·召庙", day: 1, lat: 43.88, lng: 119.32, kind: "spot" },
  { name: "克什克腾·经棚镇", day: 1, lat: 43.253, lng: 117.5, kind: "charge" },
  { name: "达里诺尔湖·南岸", day: 2, lat: 43.238, lng: 116.65, kind: "spot" },
  { name: "白音敖包·沙地云杉", day: 2, lat: 43.52, lng: 116.98, kind: "spot" },
  { name: "阿斯哈图石林", day: 2, lat: 44.07, lng: 117.45, kind: "spot" },
  { name: "热水塘温泉镇", day: 2, lat: 43.4, lng: 117.35, kind: "city" },
  { name: "黄岗梁森林公园", day: 3, lat: 43.55, lng: 117.4, kind: "spot" },
  { name: "赤峰·辽代历史博物馆", day: 3, lat: 42.26, lng: 118.95, kind: "spot" },
  { name: "赤峰·红山公园", day: 3, lat: 42.28, lng: 118.98, kind: "spot" },
  { name: "沈阳", day: 4, lat: 41.8057, lng: 123.4315, kind: "end" }
];

const colors = {
  1: "#0f766e",
  2: "#b4532a",
  3: "#2f5f8f",
  4: "#b88918"
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
        <article class="charge-card">
          <strong>${item.day}</strong>
          <h3>${item.legs}</h3>
          <p>${item.rule}</p>
        </article>
      `
    )
    .join("");
}

// --- Leaflet 交互地图 ---
let routeMap = null;
let routeLayer = null;
let markerGroup = null;

function initLeafletMap() {
  const mapEl = typeof document !== "undefined" && document.getElementById ? document.getElementById("leaflet-map") : null;
  if (!mapEl || typeof L === "undefined") return;

  routeMap = L.map("leaflet-map", { attributionControl: false, zoomControl: true }).setView([42.8, 118.5], 7);

  L.tileLayer("https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=22813193061716c4d729ab41f125de23", {
    maxZoom: 18,
    minZoom: 4
  }).addTo(routeMap);

  routeMap.zoomControl.setPosition("bottomright");
  drawAllMarkers();
}

function drawAllMarkers() {
  if (!routeMap) return;
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (routeLayer) routeMap.removeLayer(routeLayer);
  markerGroup = L.layerGroup().addTo(routeMap);
  const latlngs = points.map((p) => [p.lat, p.lng]);
  routeLayer = L.polyline(latlngs, { color: "#0f766e", weight: 5, opacity: 0.85 }).addTo(routeMap);
  points.forEach((p, i) => {
    const isCharge = p.kind === "charge";
    const color = colors[p.day] || "#0f766e";
    const icon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background:${isCharge ? "#b88918" : color};color:#fff;width:${isCharge ? 24 : 30}px;height:${isCharge ? 24 : 30}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${isCharge ? "13px" : "14px"};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${isCharge ? "电" : i + 1}</div>`,
      iconSize: [36, 36], iconAnchor: [18, 18], popupAnchor: [0, -20]
    });
    L.marker([p.lat, p.lng], { icon })
      .bindPopup(`<strong>${p.name}</strong><br><span style="color:#5b665f;font-size:90%">D${p.day}</span>`)
      .addTo(markerGroup);
  });
  routeMap.fitBounds(L.latLngBounds(latlngs).pad(0.15));
}

function filterLeafletMap(day) {
  if (!routeMap) return;
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (routeLayer) routeMap.removeLayer(routeLayer);
  const filtered = day === "all" ? points : points.filter((p) => p.day === Number(day));
  if (filtered.length === 0) return;
  markerGroup = L.layerGroup().addTo(routeMap);
  const latlngs = filtered.map((p) => [p.lat, p.lng]);
  routeLayer = L.polyline(latlngs, { color: colors[Number(day)] || "#0f766e", weight: 5, opacity: 0.85 }).addTo(routeMap);
  filtered.forEach((p) => {
    const idx = points.indexOf(p);
    const isCharge = p.kind === "charge";
    const color = colors[p.day] || "#0f766e";
    const icon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background:${isCharge ? "#b88918" : color};color:#fff;width:${isCharge ? 24 : 30}px;height:${isCharge ? 24 : 30}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${isCharge ? "13px" : "14px"};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${isCharge ? "电" : idx + 1}</div>`,
      iconSize: [36, 36], iconAnchor: [18, 18], popupAnchor: [0, -20]
    });
    L.marker([p.lat, p.lng], { icon }).bindPopup(`<strong>${p.name}</strong>`).addTo(markerGroup);
  });
  routeMap.fitBounds(L.latLngBounds(latlngs).pad(0.25));
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      filterLeafletMap(button.dataset.day);
    });
  });
}

renderItinerary();
renderCharging();

if (typeof L !== "undefined") {
  initLeafletMap();
  bindFilters();
} else {
  const mapEl2 = typeof document !== "undefined" && document.getElementById ? document.getElementById("leaflet-map") : null;
  if (mapEl2) {
    mapEl2.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:95%;padding:30px;">🗺️ 交互地图加载中…</div>`;
  }
}
