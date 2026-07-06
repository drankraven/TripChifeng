const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化 — 北上克什克腾经棚",
    totalDrive: "约 200 km / 3.5 h",
    stay: "住克什克腾旗经棚镇",
    timeline: [
      { time: "08:30", what: "游辽上京博物馆", where: "林东镇", detail: "6 个展厅 + 辽文化陈列，约 1.5 h" },
      { time: "10:00", what: "游辽上京国家考古遗址公园", where: "林东镇（紧邻博物馆）", detail: "辽代都城露天遗址，约 1 h" },
      { time: "11:00", what: "午餐", where: "林东镇", detail: "对夹、蒙餐、锅茶，约 1 h" },
      { time: "12:00", what: "自驾 林东 → 大板", where: "G303 / 集锡线", detail: "约 85 km / 1.5 h" },
      { time: "13:30", what: "游荟福寺 + 格斯尔庙", where: "巴林右旗大板镇", detail: "藏传佛寺，约 1 h" },
      { time: "14:30", what: "自驾 大板 → 经棚", where: "G303", detail: "约 115 km / 2 h" },
      { time: "16:30", what: "入住 + 休整补能", where: "经棚镇", detail: "酒店 check-in、纯电补至 90%+" },
      { time: "18:00", what: "晚餐", where: "经棚镇", detail: "蒙餐、铁锅炖、莜面窝窝" }
    ],
    meals: "午餐 林东镇（对夹/蒙餐）；晚餐 经棚镇（蒙餐/铁锅炖/莜面）。",
    hotel: "住经棚镇核心区，优先带停车场、近补能点。",
    charging: "林东满电出发；经棚是克什克腾主要补能点，今晚过夜补满。",
    stops: ["辽上京博物馆", "辽上京遗址公园", "大板·荟福寺/格斯尔庙", "经棚镇"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达达线精华：贡格尔草原 + 达里诺尔湖 + 阿斯哈图石林 — 热水塘温泉过夜",
    totalDrive: "约 305 km / 5.5 h",
    stay: "住热水塘温泉镇（泡汤过夜）",
    timeline: [
      { time: "07:30", what: "早餐 + 出发", where: "经棚镇", detail: "经棚满电出发" },
      { time: "08:00", what: "自驾 经棚 → 达里诺尔湖", where: "达达线北段（经贡格尔草原）", detail: "约 80 km / 1.5 h，贡格尔草原沿途拍照" },
      { time: "09:30", what: "游达里诺尔湖", where: "达里诺尔湖南岸（曼陀山庄/观鸟/火山地貌）", detail: "门票 80 元，开放 8:00-18:00，建议 2.5 h" },
      { time: "12:00", what: "午餐", where: "达里诺尔湖边", detail: "全鱼宴：华子鱼、鲫鱼，约 1 h" },
      { time: "13:00", what: "自驾 达里诺尔 → 阿斯哈图石林", where: "达达线（内蒙古最美草原公路）", detail: "约 135 km / 2.5 h" },
      { time: "15:30", what: "游阿斯哈图石林", where: "克什克腾石阵（一园区 1.5h + 三园区 0.7h）", detail: "开放 8:30-18:00，门票 35 元，约 2 h" },
      { time: "17:30", what: "自驾 阿斯哈图 → 热水塘", where: "热阿线（经黄岗梁林海、盘山景观道）", detail: "约 90 km / 1.5 h" },
      { time: "19:00", what: "晚餐 + 泡温泉", where: "热水塘温泉镇", detail: "温泉酒店：泡汤解乏，约 1-2 h" }
    ],
    meals: "午餐 达里诺尔湖边（全鱼宴）；晚餐 热水塘温泉酒店（蒙餐/家常）。",
    hotel: "住热水塘温泉镇，选带私汤或公共温泉的酒店（旺季建议提前订房）。",
    charging: "经棚满电出发；达里诺尔/阿斯哈图极缺桩，务必经棚补满；热水塘补能有限。",
    stops: ["贡格尔草原(沿途)", "达里诺尔湖", "阿斯哈图石林", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线黄岗梁 — 乌兰布统草原",
    totalDrive: "约 190 km / 3.5 h",
    stay: "住乌兰布统景区内或围场县",
    timeline: [
      { time: "08:00", what: "晨汤 + 早餐", where: "热水塘温泉镇", detail: "早上再泡一次温泉再走" },
      { time: "09:00", what: "自驾 热水塘 → 黄岗梁", where: "热阿线", detail: "约 30 km / 0.7 h，热阿线盘山路风光" },
      { time: "09:30", what: "游黄岗梁国家森林公园", where: "大兴安岭最高峰（海拔 2029 m）/ 白桦林 / 林海", detail: "0 元免费，不爬山约 2 h（走马观花），深度可半天" },
      { time: "11:30", what: "自驾 黄岗梁 → 经棚", where: "热阿线回头段", detail: "约 30 km / 0.7 h" },
      { time: "12:15", what: "午餐", where: "经棚镇", detail: "快速午餐或打包车上吃，约 45 min" },
      { time: "13:00", what: "自驾 经棚 → 乌兰布统", where: "经御道口方向南下", detail: "约 130 km / 3 h" },
      { time: "16:00", what: "游乌兰布统草原", where: "影视基地（40 min）→ 欧式风光区（30 min）→ 红山军马场（30 min）", detail: "约 1.5 h，门票 120 元" },
      { time: "17:30", what: "蛤蟆坝看日落", where: "乌兰布统蛤蟆坝", detail: "7 月日落约 19:30，提前占位拍照" },
      { time: "19:30", what: "晚餐", where: "乌兰布统景区内或围场县", detail: "草原烧烤、手把肉、铁锅炖" }
    ],
    meals: "午餐 经棚镇（快速餐饮/打包）；晚餐 乌兰布统/围场（草原烧烤/铁锅炖）。",
    hotel: "想看星空住景区内（木屋/蒙古包，旺季提前订）；稳妥补能住围场县（距景区约 30-40 km）。",
    charging: "热水塘/经棚满电出发；乌兰布统景区内桩少，到围场县补能，今晚补 85%-90%。",
    stops: ["黄岗梁森林公园", "乌兰布统·影视基地/欧式风光", "红山军马场", "蛤蟆坝日落"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "乌兰布统 — 沈阳（中午/午后抵达）",
    totalDrive: "约 450-500 km / 6.5-7 h",
    stay: "终点沈阳，中午抵达",
    timeline: [
      { time: "06:00", what: "早餐出发", where: "乌兰布统/围场", detail: "早出发赶路，乌兰布统满电出发" },
      { time: "06:30", what: "自驾 乌兰布统 → 围场/承德方向", where: "经围场县城方向", detail: "约 120 km / 2 h" },
      { time: "08:30", what: "补能 + 休整", where: "围场县 / 承德", detail: "快充一次（300 km 纯电必补），休整约 0.5 h" },
      { time: "09:00", what: "自驾 围场 → 沈阳", where: "经平泉 / 朝阳方向", detail: "约 330-380 km / 4-4.5 h" },
      { time: "13:00", what: "抵达沈阳", where: "沈阳市区", detail: "中午/午后到，从容午餐：老边饺子、东北菜" },
      { time: "—", what: "行程结束", where: "沈阳", detail: "住沈阳，若次日续程优先住近高速口" }
    ],
    meals: "早 6 点乌兰布统/围场简餐；途中午餐可在承德/平泉服务区或进沈阳后吃。",
    hotel: "当晚住沈阳，近高速口或火车站。",
    charging: "乌兰布统满电出发；围场/承德补能一次（300 km 纯电必补）；进沈阳前补至 70%+。",
    stops: ["乌兰布统", "围场/承德补给", "沈阳市区（中午）"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "林东 → 大板 → 经棚",
    rule: "林东满电出发；经棚是克什克腾主要补能点，今晚过夜补满。"
  },
  {
    day: "D2",
    legs: "经棚 → 达里诺尔 → 阿斯哈图 → 热水塘",
    rule: "达里诺尔/阿斯哈图一带几乎无桩，务必在经棚补满再走；热水塘补能有限，能补就补。"
  },
  {
    day: "D3",
    legs: "热水塘 → 黄岗梁 → 乌兰布统",
    rule: "热水塘/经棚满电出发；乌兰布统景区内桩少，到围场县补能更稳。"
  },
  {
    day: "D4",
    legs: "乌兰布统 → 围场/承德 → 沈阳",
    rule: "300 km 纯电必在围场/承德或平泉补一次；进沈阳前补到 70%+。"
  }
];

const points = [
  { name: "巴林左旗·林东镇", day: 1, lat: 43.9639, lng: 119.3907, kind: "start" },
  { name: "巴林右旗·大板镇", day: 1, lat: 43.561, lng: 118.712, kind: "spot" },
  { name: "克什克腾·经棚镇", day: 1, lat: 43.253, lng: 117.5, kind: "charge" },
  { name: "达里诺尔湖", day: 2, lat: 43.238, lng: 116.65, kind: "spot" },
  { name: "阿斯哈图石林", day: 2, lat: 44.07, lng: 117.45, kind: "spot" },
  { name: "热水塘温泉镇", day: 2, lat: 43.4, lng: 117.35, kind: "city" },
  { name: "黄岗梁森林公园", day: 3, lat: 43.55, lng: 117.4, kind: "spot" },
  { name: "乌兰布统草原", day: 3, lat: 42.3, lng: 117.18, kind: "spot" },
  { name: "围场/承德补给", day: 4, lat: 42.05, lng: 117.8, kind: "charge" },
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
                        <span class="hour-detail">${t.detail}</span>
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

function project(point, bounds, width, height, padding) {
  const x = padding + ((point.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * (width - padding * 2);
  const y = padding + ((bounds.maxLat - point.lat) / (bounds.maxLat - bounds.minLat)) * (height - padding * 2);
  return { x, y };
}

function renderMap(selectedDay = "all") {
  const map = document.querySelector("#map");
  const visiblePoints = selectedDay === "all" ? points : points.filter((point) => point.day === Number(selectedDay));
  const pathPoints = selectedDay === "all" ? points : points.filter((point) => point.day === Number(selectedDay));
  const boundsSource = visiblePoints.length > 1 ? visiblePoints : points;
  const bounds = {
    minLat: Math.min(...boundsSource.map((point) => point.lat)),
    maxLat: Math.max(...boundsSource.map((point) => point.lat)),
    minLng: Math.min(...boundsSource.map((point) => point.lng)),
    maxLng: Math.max(...boundsSource.map((point) => point.lng))
  };
  const width = 820;
  const height = 620;
  const padding = 74;
  const projected = pathPoints.map((point) => ({ ...point, ...project(point, bounds, width, height, padding) }));
  const allProjected = visiblePoints.map((point) => ({ ...point, ...project(point, bounds, width, height, padding) }));
  const pathD = projected
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  map.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="巴林左旗到沈阳自驾路线示意图">
      <rect class="map-bg" x="0" y="0" width="${width}" height="${height}" rx="18" />
      <path class="grid-line" d="M80 120 H740 M80 260 H740 M80 400 H740 M180 70 V550 M360 70 V550 M540 70 V550 M700 70 V550" />
      <path class="route-shadow" d="${pathD}" />
      <path class="route-line" d="${pathD}" />
      ${allProjected
        .map(
          (point, index) => `
            <g class="map-point ${point.kind}" transform="translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})">
              <circle r="${point.kind === "charge" ? 10 : 13}" style="--point-color:${colors[point.day]};" />
              <text class="point-index" y="5">${point.kind === "charge" ? "电" : index + 1}</text>
              <text class="point-name" x="0" y="${point.y < 110 ? 34 : -24}">${point.name}</text>
            </g>
          `
        )
        .join("")}
      <text class="map-axis" x="38" y="56">北</text>
      <text class="map-caption" x="40" y="590">本地示意图：按经纬度缩放，显示顺序、方位与补能节点</text>
    </svg>
  `;
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderMap(button.dataset.day);
    });
  });
}

renderItinerary();
renderCharging();
renderMap();
bindFilters();
