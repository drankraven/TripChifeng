const routeDays = [
  {
    day: 1,
    title: "沈阳 -> 奈曼王府 -> 奈曼旗住宿",
    drive: "约 330-370 km / 4.5-5.5 h，不含充电",
    stay: "住奈曼旗大沁他拉镇",
    meals: "午餐在阜新或彰武补能时解决；晚餐选奈曼旗蒙餐、锅茶、手把肉或本地家常菜。",
    hotel: "住大沁他拉镇核心区，优先选有地面停车场、附近 1-2 公里内有快充站、含早餐的商务酒店。",
    charging: "沈阳满电出发；阜新或彰武补到 85%-90%；到奈曼后过夜补能到 90% 左右。",
    summary:
      "第一站只抓奈曼王府。沈阳到奈曼对 300 公里纯电已经偏紧，中途必须补能，不建议当天再赶赤峰。下午逛奈曼王府 1.5 小时即可，晚上把车和人都充满。",
    stops: ["沈阳", "阜新/彰武补能", "奈曼王府", "大沁他拉镇"]
  },
  {
    day: 2,
    title: "奈曼 -> 赤峰市区 -> 玉龙沙湖",
    drive: "约 330-380 km / 5-6 h，不含游玩",
    stay: "住玉龙沙湖景区酒店或乌丹镇",
    meals: "午餐在赤峰市区吃对夹、蒙餐或清真小馆；晚餐优先乌丹镇，景区内餐饮作为备选。",
    hotel: "预算足够住玉龙沙湖景区或木屋/集装箱类酒店，看日落和星空方便；想稳妥补能和吃饭，住乌丹镇更实用。",
    charging: "奈曼满电出发；赤峰市区午餐快充到 80%-90%；到乌丹镇或景区酒店后再补到 90%。",
    summary:
      "第二站赤峰市区以赤峰博物馆为主，若遇周一闭馆就改红山公园或市区轻逛。下午去第三站玉龙沙湖，把沙漠、湖边和日落放在同一段完成。",
    stops: ["奈曼旗", "赤峰博物馆", "赤峰午餐补能", "玉龙沙湖"]
  },
  {
    day: 3,
    title: "玉龙沙湖 -> 辽上京 -> 通辽市区",
    drive: "约 470-540 km / 6.5-8 h，是全程最累一天",
    stay: "住通辽市区",
    meals: "早餐在酒店；午餐在林东镇或辽上京博物馆周边；晚餐到通辽吃蒙餐、烧烤或买牛肉干奶茶。",
    hotel: "通辽建议住万达广场、西拉木伦公园或火车站南广场一带，吃饭和快充选择更多。",
    charging: "玉龙/乌丹满电出发；林东镇参观辽上京前后补到 85%-90%；若到开鲁或阿旗天山镇电量低于 45%，再补 20-30 分钟；通辽过夜补满。",
    summary:
      "第四站辽上京建议组合辽上京遗址 + 辽上京博物馆，不必在遗址区久走。今天长距离横穿赤峰北部到通辽，景点要克制，补能要前置。",
    stops: ["玉龙沙湖", "林东镇补能", "辽上京遗址", "通辽市区"]
  },
  {
    day: 4,
    title: "通辽市区 -> 铁岭昌图县终点",
    drive: "约 240-290 km / 3.5-4.5 h",
    stay: "终点昌图县，不返沈阳",
    meals: "上午通辽市区轻逛后早午餐；下午到昌图，可安排铁锅炖、烧烤或东北家常菜。",
    hotel: "若在昌图过夜，住县城主城区，优先靠近高速口或商圈，方便第二天继续出发。",
    charging: "通辽满电出发基本可到昌图；若天气冷、顶风或满载，在双辽/科左后旗一带备选补能；到昌图后把车补到 70% 以上。",
    summary:
      "第五站通辽市区只做半日：科尔沁博物馆、大乐林寺、西拉木伦公园三选一到二。午后开到昌图县收尾，避免把最后一天变成长途疲劳日。",
    stops: ["通辽市区", "科尔沁博物馆/大乐林寺", "双辽或科左后旗备选补能", "昌图县"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "沈阳 -> 阜新/彰武 -> 奈曼",
    rule: "第一段不要超过 180-220 km；在阜新或彰武吃饭快充，奈曼过夜补能。"
  },
  {
    day: "D2",
    legs: "奈曼 -> 赤峰 -> 玉龙沙湖",
    rule: "赤峰市区午餐时补能最稳；不要指望到沙湖后再临时找枪。"
  },
  {
    day: "D3",
    legs: "玉龙沙湖 -> 林东/辽上京 -> 通辽",
    rule: "林东镇是关键补能点；林东到通辽偏长，开鲁或阿旗天山镇做备选。"
  },
  {
    day: "D4",
    legs: "通辽 -> 昌图",
    rule: "通辽满电出发；到昌图后补能，为后续行程留余量。"
  }
];

const points = [
  { name: "沈阳", day: 1, lat: 41.8057, lng: 123.4315, kind: "start" },
  { name: "阜新/彰武补能", day: 1, lat: 42.02, lng: 121.67, kind: "charge" },
  { name: "奈曼王府", day: 1, lat: 42.845859, lng: 120.644672, kind: "spot" },
  { name: "赤峰市区", day: 2, lat: 42.246122, lng: 118.893629, kind: "city" },
  { name: "玉龙沙湖", day: 2, lat: 43.048361, lng: 119.060387, kind: "spot" },
  { name: "林东镇/辽上京", day: 3, lat: 43.963901, lng: 119.390691, kind: "spot" },
  { name: "开鲁备选补能", day: 3, lat: 43.60, lng: 121.32, kind: "charge" },
  { name: "通辽市区", day: 3, lat: 43.6529, lng: 122.2434, kind: "city" },
  { name: "双辽备选补能", day: 4, lat: 43.52, lng: 123.50, kind: "charge" },
  { name: "昌图县", day: 4, lat: 42.97835, lng: 123.94928, kind: "end" }
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
          <div class="day-badge">D${item.day}</div>
          <div>
            <h3>${item.title}</h3>
            <div class="timeline-meta">${item.drive} · ${item.stay}</div>
            <p>${item.summary}</p>
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
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="沈阳到昌图单向自驾路线示意图">
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
      <text class="map-caption" x="40" y="590">本地示意图：按经纬度缩放，显示顺序、方位和补能节点</text>
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
