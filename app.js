const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化 → 北上克什克腾经棚",
    legs: [
      { from: "林东镇(巴林左旗)", to: "大板镇(巴林右旗)", km: "约 85 km", time: "1.5 h" },
      { from: "大板镇", to: "经棚镇(克什克腾旗)", km: "约 115 km", time: "2 h" }
    ],
    totalDrive: "全天自驾约 200 km / 3.5 h（不含游玩）",
    stay: "住克什克腾旗经棚镇",
    meals: "午餐 林东镇：对夹、蒙餐、锅茶；晚餐 经棚镇：蒙餐、铁锅炖、莜面窝窝。",
    hotel: "住经棚镇核心区，优先带停车场、近镇内补能点的酒店。",
    charging: "林东满电出发；经棚镇是克什克腾主要补能点，今晚过夜补满。",
    summary:
      "上午游辽上京国家考古遗址公园 + 辽上京博物馆（室内外皆可观，现在无闭馆顾虑）；午餐林东镇对夹、蒙餐；下午北上巴林右旗看荟福寺、格斯尔庙，再翻越到大兴安岭余脉下的经棚镇。",
    stops: ["辽上京遗址 + 博物馆", "召庙·真寂之寺(可选)", "大板·荟福寺/格斯尔庙", "经棚镇"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达达线精华：贡格尔草原 + 达里诺尔湖 + 阿斯哈图石林 → 热水塘温泉",
    legs: [
      { from: "经棚镇", to: "达里诺尔湖", km: "约 80 km", time: "1.5 h（经贡格尔草原·达达线北段）" },
      { from: "达里诺尔湖", to: "阿斯哈图石林", km: "约 135 km", time: "2.5 h（达达线）" },
      { from: "阿斯哈图石林", to: "热水塘温泉镇", km: "约 90 km", time: "1.5 h（热阿线·经黄岗梁林海）" }
    ],
    totalDrive: "全天自驾约 305 km / 5.5 h（不含游玩）",
    stay: "住热水塘温泉镇（泡汤过夜）",
    meals: "午餐 达里诺尔湖边：全鱼宴（华子鱼、鲫鱼）；晚餐 热水塘温泉酒店：蒙餐或家常菜。",
    hotel: "住热水塘温泉镇，选带私汤或公共温泉的酒店，泡汤解乏（周末/旺季建议提前订房）。",
    charging:
      "经棚满电出发；达里诺尔/阿斯哈图一带补能点极少，务必在经棚补满再走；热水塘补能有限，能补就补。",
    summary:
      "达达线精华日。先经贡格尔草原一带进入达里诺尔湖（火山堰塞湖、观鸟、湖岸），午餐湖边全鱼宴；沿达达线北上阿斯哈图花岗岩石林（世界地质公园）；傍晚走热阿线、途经黄岗梁林海，到热水塘温泉镇泡汤。",
    stops: ["贡格尔草原(达达线风光)", "达里诺尔湖", "阿斯哈图石林", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线：黄岗梁森林公园 → 乌兰布统草原",
    legs: [
      { from: "热水塘温泉镇", to: "黄岗梁国家森林公园", km: "约 30 km", time: "0.7 h（热阿线）" },
      { from: "黄岗梁", to: "乌兰布统草原", km: "约 160 km", time: "3 h（经经棚·御道口）" }
    ],
    totalDrive: "全天自驾约 190 km / 3.7 h（不含游玩）",
    stay: "住乌兰布统景区内或围场县",
    meals: "午餐 乌兰布统：草原农家、手把肉、奶茶；晚餐 景区内或围场：烧烤、铁锅炖。",
    hotel: "想看日落星空住景区内（木屋/蒙古包）；想稳妥吃饭补能住围场县（距景区约 30-40 km）。",
    charging: "热水塘/经棚满电出发；乌兰布统景区内补能点少且可能排队，到围场县补能更稳，今晚补到 85%-90%。",
    summary:
      "上午走热阿线游黄岗梁国家森林公园（大兴安岭最高峰、白桦林、林海）；随后经经棚、御道口南下乌兰布统，全天交给草原——影视基地、欧式风光区、红山军马场、蛤蟆坝，傍晚看日落。",
    stops: ["黄岗梁森林公园", "乌兰布统草原", "影视基地/欧式风光区", "红山军马场/蛤蟆坝"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "乌兰布统 → 沈阳（周五中午抵达）",
    legs: [
      { from: "乌兰布统", to: "围场/承德方向补给", km: "约 120 km", time: "2 h" },
      { from: "围场/承德", to: "沈阳市区", km: "约 330-380 km", time: "4.5-5 h" }
    ],
    totalDrive: "全天自驾约 450-500 km / 6.5-7 h（不含午餐休整）",
    stay: "终点沈阳，中午抵达",
    meals: "早午餐在乌兰布统或围场；途中承德/平泉一带午餐休整；中午到沈阳吃老边饺子、烧烤或东北菜。",
    hotel: "当晚住沈阳；若次日继续行程，优先住靠近高速口或火车站一带。",
    charging: "乌兰布统满电出发；围场/承德或平泉补能一次（300 km 纯电必补）；进沈阳前补到 70% 以上。",
    summary:
      "返程日，周五中午到沈阳。建议早出发，走围场/承德方向回沈阳（比绕经赤峰短），中途午餐+补能一次，中午前后抵达，结束赤峰行程。若想顺路看城市文化，可在沈阳前经赤峰市区，但会增加约 2 小时路程。",
    stops: ["乌兰布统", "围场/承德补给", "沈阳市区(中午)"]
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
    rule: "300km 纯电必在围场/承德或平泉补一次；进沈阳前补到 70%+。"
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
            <p>${item.summary}</p>
            <div class="legs">
              <p class="legs-title">景点间自驾</p>
              <ul>
                ${item.legs
                  .map(
                    (leg) =>
                      `<li><span class="leg-route">${leg.from} → ${leg.to}</span><span class="leg-time">${leg.km} · ${leg.time}</span></li>`
                  )
                  .join("")}
              </ul>
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
      <text class="map-caption" x="40" y="590">本地示意图：按经纬度缩放，显示顺序、方位与补能节点；达达线/热阿线为克什克腾两大景观大道</text>
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
