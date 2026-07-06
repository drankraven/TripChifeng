const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化深度 — 真寂之寺 + 博物馆 + 遗址 → 经棚",
    totalDrive: "约 174 km / 2.75 h",
    stay: "住克什克腾旗经棚镇（补满电，为 D2 达达线做最后准备）",
    timeline: [
      { time: "07:30", what: "早餐", where: "林东镇", detail: "早起！今天要跑 4 个景点 + 160 km 长途。对夹/奶茶/蒙餐简餐" },
      { time: "08:00", what: "自驾 林东 → 真寂之寺", where: "巴林左旗南 14 km", detail: "约 14 km / 25 min。召庙景区·真寂之寺，辽代石窟群（全国独一份），112 尊佛像" },
      { time: "08:30", what: "游真寂之寺·召庙石窟", where: "AAAA 景区，门票 ¥30", detail: "辽代开凿石窟群：中窟卧佛（世界唯一头南脚北造型）、南北窟、清代善福寺。约 1.25 h。⚠️ 若开门时间为 09:00 而非 08:00，则与遗址公园对调" },
      { time: "09:50", what: "自驾 真寂之寺 → 林东", where: "回头路 14 km", detail: "约 25 min" },
      { time: "10:15", what: "游辽上京博物馆", where: "林东镇，门票 ¥10", detail: "周二至周日 09:00-12:00 / 14:30-17:00。上午场截止 12:00。6 个展厅：辽代历史/瓷器/壁画/丧葬制度。约 1.5 h" },
      { time: "11:45", what: "午餐", where: "林东镇", detail: "对夹（赤峰头牌美食）、蒙餐、锅茶，约 1 h" },
      { time: "12:45", what: "游辽上京国家考古遗址公园", where: "林东镇（紧邻博物馆）", detail: "北塔/南塔/皇城遗址，露天步行，约 1 h" },
      { time: "13:50", what: "自驾 林东 → 经棚", where: "G303 → G305（经林西方向）", detail: "约 160 km / 2.5 h。走林西方向不绕大板。巴林草原风光，沿途视野开阔" },
      { time: "16:25", what: "经棚补能 + 入住", where: "经棚镇", detail: "⭐ 关键！快充至满电（达里诺尔/达达线无桩！）。酒店 check-in，约 40 min" },
      { time: "17:30", what: "自由休整 + 晚餐前", where: "经棚镇", detail: "逛克什克腾博物馆（免费，17:00 前）或镇内散步。买明天路上的水和干粮" },
      { time: "18:30", what: "晚餐", where: "经棚镇", detail: "蒙餐/铁锅炖/莜面窝窝。早睡——明天 07:00 出发！" }
    ],
    meals: "早餐 林东（对夹/奶茶）；午餐 林东镇（对夹/蒙餐）；晚餐 经棚镇（蒙餐/铁锅炖/莜面）。",
    hotel: "住经棚镇核心区，带停车场、近补能点的酒店。推荐：克什克腾经棚宾馆、经棚商务酒店等。",
    charging: "⭐ 经棚是全程绝对核心补能点！D1 到后必须补到满电——明天要跑 305 km 达达线+达里诺尔+石林，沿线无任何充电桩（达来诺日镇有新建 3 台桩，但不保证已运营）。",
    stops: ["真寂之寺·召庙石窟", "辽上京博物馆", "辽上京遗址公园(北塔/南塔)", "经棚镇(⭐关键补能)"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达里诺尔湖 + 达达线全程 + 阿斯哈图石林 + 热阿线 → 热水塘温泉",
    totalDrive: "约 305 km / 5.5 h 驾驶（含达达线/热阿线停车）",
    stay: "住热水塘温泉镇（泡汤过夜）",
    timeline: [
      { time: "06:30", what: "早餐 + 出发", where: "经棚镇", detail: "早出发是关键！今天 305 km 是全程最长驾驶日，但也是全程最精华的景观日。经棚满电出发" },
      { time: "07:00", what: "【达达线北段】经棚 → 贡格尔草原 → 达里诺尔湖南岸", where: "达达线起点段", detail: "约 80 km / 1.5 h。贡格尔草原在道路两侧铺开——一望无际的绿毯上牛羊如珍珠。贡格尔观景台停 10 min" },
      { time: "08:30", what: "游达里诺尔湖 · 南岸", where: "达里诺尔湖南岸（曼陀山庄/观鸟/火山地貌）", detail: "门票 ¥120（南岸），开放 8:00-18:00。中国第三大内陆湖、火山堰塞湖。约 2.5 h：观景台俯瞰 → 沿湖栈道 → 风车阵。💡充电：达来诺日镇达里湖度假中心已审批 3 台充电桩（2026.5），可能已运营或即将运营，可作为紧急备选" },
      { time: "11:00", what: "午餐", where: "达里诺尔湖边", detail: "全鱼宴：烤华子鱼（必吃！外焦里嫩）、羊杂汤，约 1 h" },
      { time: "12:00", what: "【达达线·精华段全程】达里诺尔 → 白音敖包 → 巴彦查干 → 阿斯哈图石林", where: "达达线全线 S105 北段", detail: "约 135 km / 3.5 h（含多停）。⭐ 达达线本身才是今天的核心景点！\n\n🛣️ 达达线详解（135 km，中国版 66 号公路）：\n• 路面：柏油路，平坦开阔，随时可路边停车\n• 景色递变：贡格尔草原（平坦）→ 起伏草坡 → 远山轮廓（靠近石林）\n📍 必停点：\n① 12:40 白音敖包（距达里湖约 60 km）— 全球唯一原始沙地云杉林，停车场+卫生间+小商店（草原版「服务区」）。千年古树+电影感光影。停 30 min\n② 14:00 巴彦查干苏木弯道群（距白音敖包约 40 km）— 草原深处 S 弯连发，下午常有牛羊横穿马路喝水，绝佳人文机位\n③ 15:00 风车阵路段（距石林约 25-30 km）— 数十座白色风机列阵起伏山脊，无人机/广角出片" },
      { time: "15:30", what: "游阿斯哈图石林", where: "克什克腾石阵（一园区）", detail: "门票 ¥160（含区间车），开放 8:30-18:00。只看一园区精华：月亮城堡 + 擎天柱 + 冰长城，约 1.5 h。南门出来白桦林可拍照（免费）" },
      { time: "17:00", what: "【热阿线·北段】石林 → 黄岗梁 → 热水塘", where: "热阿线盘山公路", detail: "约 90 km / 2 h（含停）。傍晚光线从背后打来，热阿线的白桦林和弯道比上午好看。\n\n📍 沿途停：\n① 石林南门→白桦林（20 km）林间光影停 15 min\n② 黄岗梁山顶平台（距石林约 50 km）— 大兴安岭最高峰地带，360° 林海+草原全景（免费），停 20 min（风大！）\n③ 很黑村 — 7 月向日葵花海 + 牧民赶羊群回家\n④ 热水塘温泉镇（距经棚 28 km 西北）" },
      { time: "19:00", what: "入住 + 泡温泉", where: "热水塘温泉镇", detail: "Check-in 温泉酒店，泡汤 1-1.5 h 解乏（推荐酒店见页面底部温泉专区）" },
      { time: "20:30", what: "晚餐", where: "热水塘温泉镇", detail: "酒店蒙餐/铁锅炖/烤羊排。早睡——明天还要继续！" }
    ],
    meals: "早餐 经棚；午餐 达里湖边（全鱼宴/烤华子鱼）；晚餐 热水塘温泉酒店。",
    hotel: "热水塘温泉酒店见底部推荐专区。距经棚 28 km 西北方向。旺季务必提前 1-2 周订！",
    charging: "经棚满电出发（D1 已补满）。达里诺尔/达达线/石林/热阿线沿线无桩（达来诺日镇新桩可能运营但不保证）。热水塘可能有慢充。全程赌经棚满电！",
    stops: ["贡格尔草原(达达线)", "达里诺尔湖·南岸", "白音敖包·沙地云杉(达达线)", "达达线·风车阵/弯道", "阿斯哈图石林", "热阿线·黄岗梁山顶", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线黄岗梁深度 · 经棚补能 — 南下乌兰布统草原",
    totalDrive: "约 190 km / 3.5 h",
    stay: "住乌兰布统景区内或围场县",
    timeline: [
      { time: "08:00", what: "晨汤 + 早餐 + 退房", where: "热水塘温泉镇", detail: "早上再泡 20-30 min 解乏（反正付了温泉酒店的钱）。然后退房出发" },
      { time: "09:00", what: "【热阿线·南段补完】热水塘 → 黄岗梁山顶 → 经棚", where: "热阿线回头段", detail: "约 60 km / 1.5 h。昨天热阿线傍晚光线好但可能太赶？今早补拍黄岗梁晨光——从热水塘往黄岗梁方向开 30 km，山顶平台看晨雾漫过林海。" },
      { time: "10:30", what: "经棚补能 + 早午餐", where: "经棚镇", detail: "⭐ 关键补能！快充至 85%-90%（乌兰布统+返程围场之间无桩）。吃早午餐：莜面窝窝/手把肉/蒙餐，约 1 h" },
      { time: "11:30", what: "自驾 经棚 → 乌兰布统草原", where: "经御道口/桦木沟方向南下", detail: "约 130 km / 2.5-3 h。经棚出来走 G303 → 经御道口公路 → 乌兰布统景区入口。路况好但限速多" },
      { time: "14:30", what: "游乌兰布统草原", where: "影视基地 → 欧式风光区 → 红山军马场", detail: "门票 ¥120（通票）。影视基地（公主湖/欧式牧场，40 min）→ 欧式风光区（丘陵草原+白桦林，30 min）→ 红山军马场（万马奔腾/骑马体验，40 min）。约 2 h" },
      { time: "16:30", what: "蛤蟆坝 / 百草敖包等日落", where: "乌兰布统西部", detail: "提前占位。7 月日落约 19:30。蛤蟆坝：起伏草原+牧归牛羊，经典机位" },
      { time: "19:30", what: "晚餐", where: "乌兰布统景区内或围场县城", detail: "草原烧烤/手把肉/铁锅炖。景区内贵，围场县城性价比高且充电桩多（30-40 km）" }
    ],
    meals: "早午餐 经棚镇（蒙餐/手把肉）；晚餐 乌兰布统/围场。",
    hotel: "星空日出：景区内木屋/蒙古包 ¥300-600（提前 1-2 周订！）；稳妥补能：围场县城 ¥150-250，有国网/特来电快充。",
    charging: "经棚是今天唯一可靠补能点（补到 85%-90%）。乌兰布统景区内无桩。晚上到围场县再补满。",
    stops: ["热阿线·黄岗梁晨光", "经棚镇(补能枢纽)", "乌兰布统·影视基地", "欧式风光区", "红山军马场", "蛤蟆坝日落"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "乌兰布统晨光（可选） — 沈阳（中午抵达）",
    totalDrive: "约 450-500 km / 6.5-7 h",
    stay: "终点沈阳，中午前后抵达",
    timeline: [
      { time: "05:30", what: "早起 + 退房出发", where: "乌兰布统/围场", detail: "想看草原日出可 04:30 起去百草敖包（7 月日出约 04:20）。不看则 05:30 直接出发" },
      { time: "06:00", what: "自驾 乌兰布统 → 围场县", where: "G111/S301", detail: "约 120 km / 2 h。清晨光好，路上注意牛羊" },
      { time: "08:00", what: "围场县 补能 + 早餐", where: "围场县城（国网/特来电快充）", detail: "⭐ 快充至 70%+（300 km 纯电必补！）。吃早餐：豆腐脑/包子/油条，约 45 min" },
      { time: "08:45", what: "自驾 围场 → 沈阳", where: "G45 大广高速（经朝阳/阜新）", detail: "约 330-380 km / 4-4.5 h。G45 一路向南最短路线。服务区多快充备选" },
      { time: "13:15", what: "抵达沈阳 🎉", where: "沈阳市区", detail: "中午到！从容午餐：老边饺子/李连贵熏肉大饼/西塔韩国街/东北菜" }
    ],
    meals: "早餐 围场县（简餐）；午餐 沈阳市区（大餐庆祝！）。",
    hotel: "当晚住沈阳，近高速口/火车站。",
    charging: "乌兰布统满电出发；围场县必停快充；G45 高速服务区多处备选快充。进沈阳前补 70%+。",
    stops: ["乌兰布统(晨光可选)", "围场县(⭐关键补能)", "沈阳市区(中午到)"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "林东 → 真寂之寺 → 经棚",
    rule: "林东满电出发。经棚是全程命脉——D1 必须补满！达里诺尔/达达线沿线无充电桩。"
  },
  {
    day: "D2",
    legs: "经棚 → 达里诺尔 → 达达线 → 石林 → 热阿线 → 热水塘",
    rule: "全程 305 km 靠经棚满电撑。达来诺日镇有审批 3 台桩（2026.5）可能运营中，作为紧急备选。热水塘慢充极少。"
  },
  {
    day: "D3",
    legs: "热水塘/经棚 → 乌兰布统",
    rule: "经棚快充至 85%-90%（乌兰布统无桩）。晚上围场县补满。"
  },
  {
    day: "D4",
    legs: "乌兰布统 → 围场 → 沈阳",
    rule: "围场县必停快充（国网/特来电）。G45 服务区备选。进沈阳前补 70%+。"
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
  { name: "乌兰布统草原", day: 3, lat: 42.3, lng: 117.18, kind: "spot" },
  { name: "围场县补给", day: 4, lat: 42.05, lng: 117.8, kind: "charge" },
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

  routeMap = L.map("leaflet-map", { attributionControl: false, zoomControl: true }).setView([43.0, 118.5], 7);

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
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });
    L.marker([p.lat, p.lng], { icon })
      .bindPopup(`<strong>${p.name}</strong><br><span style="color:#5b665f;font-size:90%">D${p.day} · ${isCharge ? "补能站" : p.kind === "start" ? "起点" : p.kind === "end" ? "终点" : p.kind === "city" ? "住宿/温泉" : "景区"}</span>`)
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
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });
    L.marker([p.lat, p.lng], { icon })
      .bindPopup(`<strong>${p.name}</strong><br><span style="color:#5b665f;font-size:90%">D${p.day}</span>`)
      .addTo(markerGroup);
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
    mapEl2.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:95%;text-align:center;padding:30px;">🗺️ 交互地图加载中…<br><small>如长时间未显示，请检查网络连接</small></div>`;
  }
}
