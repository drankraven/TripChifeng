const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化 — 经棚 — 达里诺尔湖落日",
    totalDrive: "约 240 km / 4 h",
    stay: "住达来诺日镇或达里诺尔湖附近民宿",
    timeline: [
      { time: "08:00", what: "游辽上京博物馆", where: "林东镇", detail: "6 个展厅，辽代历史/瓷器/壁画/丧葬制度，约 1.5 h" },
      { time: "09:45", what: "游辽上京国家考古遗址公园", where: "林东镇（紧邻博物馆）", detail: "北塔/南塔/皇城遗址，露天可步行，约 1 h" },
      { time: "11:00", what: "午餐", where: "林东镇", detail: "对夹、蒙餐、锅茶，约 50 min" },
      { time: "12:00", what: "自驾 林东 → 经棚（直达）", where: "G303 → G305（经林西方向）", detail: "约 160 km / 2.5 h。不走大板，省 40 km + 1 h。沿途巴林草原风光" },
      { time: "14:40", what: "经棚补能 + 休整", where: "经棚镇", detail: "快充至 90%+（接下来达里诺尔/达达线无桩！），补水补零食，约 40 min" },
      { time: "15:30", what: "【达达线北段】经棚 → 贡格尔草原 → 达里诺尔湖", where: "达达线起点段", detail: "约 80 km / 1.5 h。贡格尔草原在道路两侧铺开——今天是\"预览\"达达线，明天才是全程" },
      { time: "17:00", what: "达里诺尔湖（傍晚场）", where: "南岸曼陀山庄 / 找牧民带路到湖边", detail: "门票 ¥120（南岸）/ ¥90（北岸），开放至 18:00。💡省钱：找牧民野路到湖边约 ¥20。重点看：湖面全景 + 风车阵落日 + 观鸟（夏季候鸟）。趁 7 月日落约 19:30，光线绝佳！约 2 h" },
      { time: "19:00", what: "湖边看日落", where: "达里诺尔湖畔", detail: "7 月日落约 19:30，风车、湖面、草原三重叠景——绝佳机位！" },
      { time: "19:45", what: "晚餐 + 住宿", where: "达来诺日镇 / 达里湖附近民宿", detail: "达来诺日镇是最近的小镇（距湖约 20 km），有家庭旅馆和简餐。或住湖边的蒙古包/民宿（条件一般但看日出方便）。全鱼宴晚餐！" }
    ],
    meals: "午餐 林东镇（对夹/蒙餐）；晚餐 达来诺日镇/达里湖边（全鱼宴·华子鱼）。",
    hotel: "达来诺日镇家庭旅馆约 ¥150-200/晚；或达里湖边蒙古包 ¥150-300/晚（看日出方便，但条件一般）。💡注意：这附近住宿朴素，但好处是 D2 一早就在达达线起点上，省了 80 km 回头路。",
    charging: "经棚是唯一靠谱补能点！D1 下午在经棚必须补满。达来诺日镇/达里湖周边无充电桩。今晚电量尽量省着用（关空调/低功耗模式）。",
    stops: ["辽上京博物馆", "辽上京遗址公园", "经棚镇(关键补能！)", "贡格尔草原(达达线)", "达里诺尔湖落日"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达达线全程 + 阿斯哈图石林 + 热阿线 → 热水塘温泉",
    totalDrive: "约 225 km / 月5.5 h（含达达线/热阿线停车拍照）",
    stay: "住热水塘温泉镇（泡汤过夜）",
    timeline: [
      { time: "07:30", what: "早餐 + 出发", where: "达来诺日镇 / 达里湖边", detail: "简易早餐（镇上包子/奶茶或民宿简餐）。达来诺日就在达达线起点，出发即上路！" },
      { time: "08:00", what: "【达达线·精华段全程】达里诺尔 → 白音敖包 → 巴彦查干 → 阿斯哈图石林", where: "达达线全线（S105 北段）", detail: "约 135 km / 4 h（含多停！）。比昨天赶路版多出整整 1.5 h 用于停车拍照。\n\n📍 必停点：\n① 08:30 白音敖包沙地云杉（距起点约 60 km）— 全球唯一原始沙地云杉林，有停车场+卫生间+小商店，停 30 min\n② 10:00 巴彦查干苏木弯道群（距白音敖包约 40 km）— 草原深处 S 弯连发，牛羊群常来路边喝水，绝佳人文机位\n③ 11:00 风车阵路段（距石林约 25-30 km）— 数十座白色风机列阵山脊，无人机/广角出片" },
      { time: "12:00", what: "午餐", where: "石林景区门口或巴彦查干苏木", detail: "简单午餐：手把肉/蒙古包子/泡面（石林门口有小饭店），约 45 min" },
      { time: "12:45", what: "游阿斯哈图石林", where: "克什克腾石阵（一园区为主）", detail: "门票 ¥160（含区间车），开放 8:30-18:00。只看一园区精华：月亮城堡 + 擎天柱 + 冰长城，约 1.5 h。💡南门出来白桦林区可露营、野餐、拍照（免费）" },
      { time: "14:15", what: "【热阿线·北段】石林 → 黄岗梁 → 热水塘", where: "热阿线盘山公路", detail: "约 90 km / 2.5 h（含停）。下午光线从背后打来，热阿线的白桦林和盘山弯道比上午好看。\n\n📍 必停点：\n① 石林南门→白桦林（20 km）— 林间光影，停 15 min\n② 黄岗梁山顶平台（距石林约 50 km）— 大兴安岭最高峰地带，360° 林海+草原全景（免费），停 20-30 min（风大！）\n③ 很黑村 — 向日葵花海（季节性）+ 牧民赶羊群回家\n④ 热水塘温泉镇" },
      { time: "17:00", what: "入住 + 泡温泉", where: "热水塘温泉镇", detail: "到达热水塘！先 check-in 温泉酒店，泡汤 1-1.5 h 解乏" },
      { time: "19:00", what: "晚餐", where: "热水塘温泉镇", detail: "酒店蒙餐/家常菜，或镇上饭馆：铁锅炖、烤羊排" }
    ],
    meals: "午餐 石林门口或巴彦查干（简餐/手把肉）；晚餐 热水塘温泉镇。",
    hotel: "热水塘温泉酒店推荐见页面底部「温泉住宿」专区。旺季务必提前订！",
    charging: "昨晚在经棚补满的电撑到今天。达达线/石林/热阿线全程无桩！到热水塘可能有极少慢充（蓝天温泉酒店据说有，但不保证）。如果电量告急，明天一早必须回经棚补。",
    stops: ["达达线·白音敖包(沙地云杉)", "达达线·风车阵/弯道", "阿斯哈图石林", "热阿线·黄岗梁山顶", "热阿线·白桦林", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线黄岗梁深度·经棚 — 南下乌兰布统草原",
    totalDrive: "约 190 km / 3.5 h",
    stay: "住乌兰布统景区内或围场县",
    timeline: [
      { time: "08:00", what: "晨汤 + 早餐", where: "热水塘温泉镇", detail: "早上再泡 20-30 min 解乏，然后退房出发" },
      { time: "09:00", what: "【热阿线·南段补完】热水塘 → 黄岗梁山顶 → 经棚", where: "热阿线回头段", detail: "约 60 km / 1.5 h。昨天热阿线如果太赶，今早补拍黄岗梁晨光（山顶平台看晨雾漫过林海，绝了），然后在经棚补能+午餐" },
      { time: "10:30", what: "经棚补能 + 早午餐/午餐", where: "经棚镇", detail: "关键补能点！快充至 85%-90%（接下来到乌兰布统+返程围场之间无桩），顺便吃早午餐：莜面窝窝/手把肉/蒙餐，约 1 h" },
      { time: "11:30", what: "自驾 经棚 → 乌兰布统草原", where: "经御道口/桦木沟方向南下", detail: "约 130 km / 2.5-3 h。经棚出来走 G303 → 经御道口公路 → 乌兰布统景区入口。路况良好但限速多" },
      { time: "14:30", what: "游乌兰布统草原（下午场）", where: "影视基地 → 欧式风光区 → 红山军马场", detail: "门票 ¥120（通票）。影视基地（公主湖/欧式牧场风光，40 min）→ 欧式风光区（丘陵草原+白桦林，30 min）→ 红山军马场（万马奔腾实景/骑马体验，30 min），约 2 h。💡时间不够可不买票，路过看景也美（冷三岁图示）" },
      { time: "16:30", what: "蛤蟆坝 / 百草敖包等日落", where: "乌兰布统西部", detail: "提前去蛤蟆坝占位（经典日落机位！起伏草原+牧归牛羊）。7 月日落约 19:30" },
      { time: "19:30", what: "晚餐", where: "乌兰布统景区内或围场县城", detail: "草原烧烤/手把肉/铁锅炖。推荐围场县（距景区 30-40 km，性价比高+充电桩靠谱）" }
    ],
    meals: "早午餐 经棚镇（蒙餐/手把肉）；晚餐 乌兰布统/围场。",
    hotel: "星空日出：景区内木屋/蒙古包 ¥300-600/晚（提前 1-2 周订！）；稳妥补能：围场县城 ¥150-250/晚，有快充桩。",
    charging: "经棚是今天唯一可靠补能点！务必充到 85%-90% 再走。乌兰布统景区内不要指望能充。围场县有快充桩，晚上补满。",
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
      { time: "06:00", what: "自驾 乌兰布统 → 围场县", where: "G111/S301", detail: "约 120 km / 2 h。清晨草原光线好，路上注意牛羊" },
      { time: "08:00", what: "围场县 补能 + 早餐", where: "围场县城", detail: "快充至 70%+（300 km 纯电必补！围场有国网/特来电快充桩，比景区靠谱 100 倍）。顺便吃早餐：豆腐脑/油条/包子，约 45 min" },
      { time: "08:45", what: "自驾 围场 → 沈阳", where: "G45 大广高速（经朝阳/阜新）", detail: "约 330-380 km / 4-4.5 h。G45 大广高速一路向南是最短路线。或走 G25 经锦州方向（稍远但车少）。服务区有多处快充，可作为备选" },
      { time: "13:15", what: "抵达沈阳 🎉", where: "沈阳市区", detail: "中午到！从容午餐：老边饺子/李连贵熏肉大饼/东北菜/西塔韩国街。行程结束！总里程约 1100 km。" }
    ],
    meals: "早 6:00-8:00 围场简餐；中午到沈阳后吃大餐。",
    hotel: "当晚住沈阳（近高速口/火车站方便后续出行）。",
    charging: "乌兰布统满电出发；围场县必停快充一次；G45 高速服务区有多处备选快充站。进沈阳前补到 70%+。",
    stops: ["乌兰布统(晨光可选)", "围场县(关键补能！)", "沈阳市区(中午到)"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "林东 → 经棚(补满) → 达里诺尔",
    rule: "林东出发满电；经棚是 D1 唯一靠谱补能点且必须补满（达里诺尔无桩）。今晚尽量省电。"
  },
  {
    day: "D2",
    legs: "达里诺尔 → 达达线 → 石林 → 热阿线 → 热水塘",
    rule: "全程 225 km 靠昨天经棚补满的电跑。达达线/石林/热阿线均无桩。热水塘可能有慢充但不保证。"
  },
  {
    day: "D3",
    legs: "热水塘/经棚 → 乌兰布统",
    rule: "经棚是今天的救命补能点！务必补到 85%-90%。乌兰布统景区无桩，晚上到围场县再补。"
  },
  {
    day: "D4",
    legs: "乌兰布统 → 围场 → 沈阳",
    rule: "乌兰布统满电出发；围场县必停快充（国网/特来电）；G45 高速服务区多备选。进沈阳前补到 70%+。"
  }
];

const points = [
  { name: "巴林左旗·林东镇", day: 1, lat: 43.9639, lng: 119.3907, kind: "start" },
  { name: "克什克腾·经棚镇", day: 1, lat: 43.253, lng: 117.5, kind: "charge" },
  { name: "达里诺尔湖", day: 1, lat: 43.238, lng: 116.65, kind: "spot" },
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

// --- 渲染行程时间线 ---
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

// --- 渲染补能计划 ---
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

  // 星图云矢量瓦片
  const token = "22813193061716c4d729ab41f125de23";
  L.tileLayer("https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=" + token, {
    maxZoom: 18,
    minZoom: 4
  }).addTo(routeMap);

  // 缩放控制移到右下
  routeMap.zoomControl.setPosition("bottomright");

  drawAllMarkers();
}

function drawAllMarkers() {
  if (!routeMap) return;
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (routeLayer) routeMap.removeLayer(routeLayer);

  markerGroup = L.layerGroup().addTo(routeMap);

  // 路线
  const latlngs = points.map((p) => [p.lat, p.lng]);
  routeLayer = L.polyline(latlngs, { color: "#0f766e", weight: 5, opacity: 0.85, dashArray: null }).addTo(routeMap);

  // 标记
  points.forEach((p, i) => {
    const isCharge = p.kind === "charge";
    const isEnd = p.kind === "end";
    const isStart = p.kind === "start";
    const color = colors[p.day] || "#0f766e";

    const icon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background:${isCharge ? '#b88918' : color};color:#fff;width:${isCharge ? 24 : 30}px;height:${isCharge ? 24 : 30}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${isCharge ? '13px' : '14px'};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${isCharge ? '电' : i + 1}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });

    L.marker([p.lat, p.lng], { icon })
      .bindPopup(
        `<strong>${p.name}</strong><br><span style="color:#5b665f;font-size:90%">D${p.day} · ${p.kind === 'charge' ? '补能站' : p.kind === 'start' ? '起点' : p.kind === 'end' ? '终点' : p.kind === 'city' ? '住宿/休整' : '景区'}</span>`
      )
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

  const visibleIndices = [];
  filtered.forEach((p) => {
    const idx = points.indexOf(p);
    visibleIndices.push(idx);
  });

  filtered.forEach((p) => {
    const idx = points.indexOf(p);
    const isCharge = p.kind === "charge";
    const color = colors[p.day] || "#0f766e";
    const icon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background:${isCharge ? '#b88918' : color};color:#fff;width:${isCharge ? 24 : 30}px;height:${isCharge ? 24 : 30}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${isCharge ? '13px' : '14px'};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${isCharge ? '电' : idx + 1}</div>`,
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

// --- 日筛选按钮绑定 ---
function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      filterLeafletMap(button.dataset.day);
    });
  });
}

// --- 启动 ---
renderItinerary();
renderCharging();

if (typeof L !== "undefined") {
  initLeafletMap();
  bindFilters();
} else {
  // Leaflet 未加载时降级到 SVG 占位
  const mapEl2 = typeof document !== "undefined" && document.getElementById ? document.getElementById("leaflet-map") : null;
  if (mapEl2) {
    mapEl2.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:95%;text-align:center;padding:30px;">🗺️ 交互地图加载中…<br><small>如长时间未显示，请检查网络连接</small></div>`;
  }
}
