const routeDays = [
  {
    day: 1,
    title: "沈阳到通辽，先把节奏放稳",
    drive: "约 310-340 km / 3.5-4.5 h",
    stay: "住通辽市区",
    summary:
      "早出发，中午后抵达通辽。下午选择科尔沁博物馆或吉祥密乘大乐林寺，傍晚走西拉木伦公园、河边夜市。今天不去库伦三大寺、银沙湾、大青沟。",
    notes: "若碰到周一闭馆，就把博物馆换成市区寺院和公园。晚餐选蒙餐、锅茶、牛肉干和对夹类小吃即可。",
    stops: ["沈阳", "通辽市区", "科尔沁博物馆", "西拉木伦公园"]
  },
  {
    day: 2,
    title: "通辽到奈曼，再切到玉龙沙湖看日落",
    drive: "约 430-500 km / 5.5-6.5 h",
    stay: "住玉龙沙湖景区或乌丹镇",
    summary:
      "早上从通辽出发，奈曼王府停留 1-1.5 小时，下午到玉龙沙湖。把沙漠项目和湖边日落作为主体验，避免晚上再疲劳进赤峰市区。",
    notes: "小红书采样里玉龙沙湖争议集中在门票、项目和住宿。若预算敏感，可只选核心项目；若住景区，提前确认接驳、餐饮和驱蚊。",
    stops: ["通辽", "奈曼王府", "玉龙沙湖", "乌丹镇"]
  },
  {
    day: 3,
    title: "沙湖到赤峰市区，再走喀喇沁和宁城温泉",
    drive: "约 300-360 km / 4.5-5.5 h",
    stay: "住宁城热水镇",
    summary:
      "上午从翁牛特进赤峰市区，赤峰博物馆看红山文化、契丹辽文化。午后去喀喇沁亲王府，傍晚到宁城热水镇泡温泉。",
    notes: "这天是人文和休整日。若亲王府临时维修或闭馆，把时间转给马鞍山森林公园、美林谷或市区红山公园。",
    stops: ["玉龙沙湖", "赤峰博物馆", "喀喇沁亲王府", "宁城热水镇"]
  },
  {
    day: 4,
    title: "宁城短停辽中京，直接返沈阳",
    drive: "约 430-500 km / 5.5-6.5 h",
    stay: "返程",
    summary:
      "上午只做一个短停：辽中京遗址、法轮寺或大明塔一带择一。午前上高速返沈阳，不再加大景区。",
    notes: "最后一天保守一点更舒服。采样里的 3 日/4 日北线通常需要早出晚归，返程日再加达里湖、乌兰布统会明显超负荷。",
    stops: ["宁城", "辽中京遗址", "沈阳"]
  }
];

const locations = [
  { name: "沈阳", day: 1, lat: 41.8057, lng: 123.4315, type: "city" },
  { name: "通辽市区", day: 1, lat: 43.6529, lng: 122.2434, type: "stay" },
  { name: "科尔沁博物馆", day: 1, lat: 43.658, lng: 122.265, type: "culture" },
  { name: "奈曼王府", day: 2, lat: 42.845859, lng: 120.644672, type: "culture" },
  { name: "玉龙沙湖", day: 2, lat: 43.048361, lng: 119.060387, type: "nature" },
  { name: "乌丹镇", day: 2, lat: 42.936, lng: 119.02, type: "stay" },
  { name: "赤峰博物馆", day: 3, lat: 42.246122, lng: 118.893629, type: "culture" },
  { name: "喀喇沁亲王府", day: 3, lat: 41.838282, lng: 118.500461, type: "culture" },
  { name: "宁城热水镇", day: 3, lat: 41.59, lng: 119.28, type: "stay" },
  { name: "辽中京遗址", day: 4, lat: 41.57, lng: 119.18, type: "culture" }
];

const dayRoutes = {
  1: ["沈阳", "通辽市区", "科尔沁博物馆"],
  2: ["通辽市区", "奈曼王府", "玉龙沙湖", "乌丹镇"],
  3: ["乌丹镇", "赤峰博物馆", "喀喇沁亲王府", "宁城热水镇"],
  4: ["宁城热水镇", "辽中京遗址", "沈阳"]
};

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
            <p>${item.notes}</p>
            <ul class="stop-list">
              ${item.stops.map((stop) => `<li>${stop}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function markerHtml(location) {
  return `
    <div class="popup-title">${location.name}</div>
    <div class="popup-meta">D${location.day} · ${location.type}</div>
  `;
}

function buildMap() {
  const map = L.map("map", {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([42.45, 120.55], 7);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markers = [];
  const lines = [];
  const byName = Object.fromEntries(locations.map((location) => [location.name, location]));

  locations.forEach((location) => {
    const marker = L.circleMarker([location.lat, location.lng], {
      radius: location.type === "stay" ? 8 : 6,
      color: "#ffffff",
      weight: 2,
      fillColor: colors[location.day],
      fillOpacity: 0.96
    })
      .bindPopup(markerHtml(location))
      .addTo(map);
    marker.day = location.day;
    markers.push(marker);
  });

  Object.entries(dayRoutes).forEach(([day, names]) => {
    const points = names.map((name) => byName[name]).filter(Boolean).map((point) => [point.lat, point.lng]);
    const line = L.polyline(points, {
      color: colors[day],
      weight: 4,
      opacity: 0.78,
      dashArray: day === "4" ? "8 8" : null
    }).addTo(map);
    line.day = Number(day);
    lines.push(line);
  });

  const bounds = L.latLngBounds(locations.map((location) => [location.lat, location.lng]));
  map.fitBounds(bounds, { padding: [28, 28] });
  L.control.scale({ imperial: false }).addTo(map);
  setTimeout(() => {
    map.invalidateSize();
    map.fitBounds(bounds, { padding: [28, 28] });
  }, 250);

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.day;
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      markers.forEach((marker) => {
        const visible = selected === "all" || marker.day === Number(selected);
        if (visible && !map.hasLayer(marker)) marker.addTo(map);
        if (!visible && map.hasLayer(marker)) marker.removeFrom(map);
      });

      lines.forEach((line) => {
        const visible = selected === "all" || line.day === Number(selected);
        if (visible && !map.hasLayer(line)) line.addTo(map);
        if (!visible && map.hasLayer(line)) line.removeFrom(map);
      });

      const visibleLocations =
        selected === "all" ? locations : locations.filter((location) => location.day === Number(selected));
      map.fitBounds(L.latLngBounds(visibleLocations.map((location) => [location.lat, location.lng])), {
        padding: [36, 36]
      });
    });
  });
}

renderItinerary();
buildMap();
