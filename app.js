const routeDays = [
  {
    day: 1,
    date: "7月7日 周二",
    title: "巴林左旗·辽文化深度游 — 直达经棚（跳过大板）",
    totalDrive: "约 160 km / 2.5 h（林东 → 经棚直达，省去大板绕行）",
    stay: "住克什克腾旗经棚镇",
    timeline: [
      { time: "08:00", what: "游辽上京博物馆", where: "林东镇", detail: "6 个展厅，辽代历史/瓷器/壁画/丧葬制度，约 1.5 h" },
      { time: "09:45", what: "游辽上京国家考古遗址公园", where: "林东镇（紧邻博物馆）", detail: "北塔/南塔/皇城遗址，露天可步行，约 1 h" },
      { time: "10:55", what: "午餐", where: "林东镇", detail: "对夹（赤峰特色）、蒙餐、锅茶，约 50 min" },
      { time: "11:50", what: "自驾 林东 → 经棚（直达）", where: "G303 → G305 经林西方向", detail: "约 160 km / 2.5 h。不绕大板，走林西方向更顺；沿途巴林草原风光" },
      { time: "14:25", what: "入住 + 补能", where: "经棚镇", detail: "酒店 check-in、纯电补至满电（克什克腾主要补能点）" },
      { time: "16:00", what: "自由活动 / 克什克腾博物馆", where: "经棚镇内", detail: "若时间充裕可逛克什克腾博物馆（免费），或休息调整" },
      { time: "18:00", what: "晚餐", where: "经棚镇", detail: "蒙餐、铁锅炖、莜面窝窝" }
    ],
    meals: "午餐 林东镇（对夹/蒙餐）；晚餐 经棚镇（蒙餐/铁锅炖/莜面）。",
    hotel: "住经棚镇核心区，优先带停车场、近补能点的酒店。",
    charging: "林东满电出发；经棚是克什克腾唯一靠谱的补能点，今晚务必补满。",
    stops: ["辽上京博物馆", "辽上京遗址公园(北塔/南塔)", "经棚镇(补能枢纽)"]
  },
  {
    day: 2,
    date: "7月8日 周三",
    title: "达达线公路旅行 — 达里诺尔湖 + 阿斯哈图石林 → 热水塘温泉",
    totalDrive: "约 305 km / 6.5 h（含达达线/热阿线停车拍照）",
    stay: "住热水塘温泉镇（泡汤过夜）",
    timeline: [
      { time: "06:30", what: "早餐 + 出发", where: "经棚镇", detail: "早出发！今天路程最长，达达线本身就是景点" },
      { time: "07:00", what: "【达达线·北段】经棚 → 贡格尔草原 → 达里诺尔湖", where: "达达线起点段（S105/G303）", detail: "约 80 km / 1.5 h。贡格尔草原在道路两侧铺开，一望无际的绿毯上牛羊如珍珠；途经贡格尔草原观景台可停 10 min 拍照" },
      { time: "08:30", what: "游达里诺尔湖", where: "达里诺尔湖南岸（曼陀山庄/观鸟台）或北岸", detail: "中国第三大内陆湖、火山堰塞湖，华子鱼洄游奇观（4-5 月最佳）。门票南岸 ¥120 / 北岸 ¥90，开放 8:00-18:00。建议 2.5 h：观景台俯瞰→沿湖栈道→湖边拍风车阵。💡省钱技巧（来自冷三岁图）：可不进景区，找牧民带野路到湖边约 ¥20" },
      { time: "11:00", what: "午餐", where: "达里诺尔湖边", detail: "全鱼宴（烤华子鱼必吃！）、羊杂汤，约 1 h" },
      { time: "12:00", what: "【达达线·精华段】达里诺尔 → 白音敖包 → 巴彦查干 → 阿斯哈图石林", where: "达达线全线（S105 北段）", detail: "约 135 km / 3.5 h（含停）。⭐ 这是全天核心体验！\n\n🛣️ 达达线详解（135-140 km）：\n• 性质：柏油路面，地势平坦开阔，被称为\"中国版 66 号公路\"\"\n• 路况：双向两车道，无护栏，随时可停车；部分路段无加油站\n• 景色变化：每 10 km 切换一种地貌——贡格尔草原（平坦）→ 起伏草坡（丘陵感）→ 远山轮廓（靠近石林变山地）\n• 必停点：①白音敖包（距达里湖约 60 km）— 全球唯一原始沙地云杉林，有停车场+卫生间+小商店（草原上的\"服务区\"！），建议停 30 min；②巴彦查干苏木附近— 草原深处弯道群，下午马路对面常有牛羊来喝水，绝佳机位；③风车阵路段— 达达线中后段，数十座白色风机列阵山脊，出片率极高\n• 驾驶提示：草原信号差，提前下载离线地图；SUV 更舒适但轿车可通过；注意横穿马路的牛羊群" },
      { time: "15:30", what: "游阿斯哈图石林", where: "克什克腾石阵景区（一园区为主）", detail: "第四纪冰川遗迹，花岗岩群峰：擎天柱/冰长城/鲲鹏落草原（网红机位）。门票 ¥160（含区间车），开放 8:30-18:00。时间紧只看一园区精华（月亮城堡+擎天柱），约 1.5 h。💡南门出来即白桦林区，露营野餐天堂" },
      { time: "17:00", what: "【热阿线·北段】石林 → 黄岗梁方向 → 热水塘", where: "热阿线（S204/S105 盘山段）", detail: "约 90 km / 2 h（含停）。⭐ 热阿线与达达线完全不同！\n\n🛣️ 热阿线详解（约 82 km 全长，石林→热水塘）：\n• 性质：盘山公路，多急弯连续弯道，被称为\"小独库\"——驾驶乐趣远超达达线\n• 景色：森林+峡谷+高山草甸，递减起伏，层次丰富；从草原渐变为白桦林→针叶林→山顶草甸\n• 本段（石林→热水塘，约 80 km）经过：①石林南门→白桦林（20 km）— 林间光影绝美，适合停车拍照；②黄岗梁区域（距石林约 50 km）— 大兴安岭最高峰地带（主峰海拔 2029 m），山顶有停车场和观景平台，360°环视林海+草原，大风但视野封神！（免费，建议停 20-30 min）；③很黑村— 向日葵花海+傍晚牧民赶羊群的童话场景；④热水塘温泉镇\n• 驾驶提示：弯多需谨慎控制车速；海拔爬升明显（1500→2000m）；6-9 月景色最美" },
      { time: "19:00", what: "晚餐 + 泡温泉", where: "热水塘温泉镇", detail: "温泉酒店泡汤解乏（推荐天牧/蓝天温泉）。商业化较重、价格偏高但值得。泡 1-1.5 h 后休息" }
    ],
    meals: "午餐 达里诺尔湖边（全鱼宴/烤华子鱼）；晚餐 热水塘温泉酒店。",
    hotel: "住热水塘温泉镇，选带温泉的酒店（旺季务必提前订房，或改住林西县性价比更高）。",
    charging: "经棚出发前必须补满！达里诺尔/阿斯哈图几乎无桩（仅达来诺日镇可能有慢充）；热水塘补能极有限，不要指望。到热水塘后如有桩就补，没有也没关系——明天回经棚方向再补。",
    stops: ["贡格尔草原(达达线)", "达里诺尔湖", "白音敖包沙地云杉(达达线)", "阿斯哈图石林", "热阿线·黄岗梁段", "热水塘温泉"]
  },
  {
    day: 3,
    date: "7月9日 周四",
    title: "热阿线黄岗梁补完 — 南下乌兰布统草原",
    totalDrive: "约 190 km / 3.5 h（不含游玩）",
    stay: "住乌兰布统景区内或围场县",
    timeline: [
      { time: "07:30", what: "晨汤 + 早餐 + 补能检查", where: "热水塘温泉镇", detail: "早上泡 20-30 min 温泉醒身；检查电量，若昨晚没补上可在热水塘找桩或直接到经棚补" },
      { time: "08:30", what: "【热阿线·南段补完】热水塘 → 黄岗梁山顶 → 经棚", where: "热阿线回头南下（如果昨天黄岗梁没停够）", detail: "约 60 km / 1.5 h 含停。昨天傍晚走的热阿线北段如果太赶、黄岗梁没细玩，今早可以回头补：热水塘→黄岗梁山顶（30 km/40 min，停 30 min 看晨光中的林海）→ 继续到经棚（30 km/40 min）补电/午餐" },
      { time: "10:00", what: "经棚补能 + 午餐", where: "经棚镇", detail: "快充至 85%-90%（关键补能点！），同时午餐：莜面窝窝/手把肉/蒙餐，约 1 h" },
      { time: "11:00", what: "自驾 经棚 → 乌兰布统草原", where: "经御道口/桦木沟方向南下", detail: "约 130 km / 2.5-3 h。经棚出来走 G303 → 经棚→御道口公路 → 乌兰布统景区入口。路况良好但限速较多（经过塞罕坝区域）" },
      { time: "14:00", what: "游乌兰布统草原（下午场）", where: "影视基地 → 欧式风光区 → 红山军马场", detail: "门票 ¥120（通票）。影视基地（公主湖/欧式牧场风光，40 min）→ 欧式风光区（丘陵草原+白桦林，30 min）→ 红山军马场（万马奔腾实景/骑马，30 min）。合计约 1.5-2 h" },
      { time: "16:00", what: "蛤蟆坝 / 百草敖包等日落点位", where: "乌兰布统西部", detail: "7 月日落约 19:30，蛤蟆坝是经典日落机位（起伏草原+牧归场景）。提前去占位、等光。也可以去百草敖包看全景" },
      { time: "19:30", what: "晚餐", where: "乌兰布统景区内或围场县城", detail: "草原烧烤、手把肉、铁锅炖。景区内贵且选择少，围场县性价比高（距景区 30-40 km）" }
    ],
    meals: "午餐 经棚镇（蒙餐/手把肉/快吃）；晚餐 乌兰布统/围场（烧烤/铁锅炖）。",
    hotel: "想看星空+日出住景区内（木屋/蒙古包，旺季提前 1-2 周订）；稳妥吃饭补能住围场县。",
    charging: "经棚是今天的核心补能点（快充到 85%-90%）；乌兰布统景区内充电桩极少且可能排队，晚上到围场县再补一次更稳。",
    stops: ["黄岗梁森林公园(补完)", "经棚镇(补能)", "乌兰布统·影视基地/欧式风光", "红山军马场", "蛤蟆坝日落"]
  },
  {
    day: 4,
    date: "7月10日 周五",
    title: "乌兰布统 — 沈阳（周五中午抵达）",
    totalDrive: "约 450-500 km / 6.5-7 h",
    stay: "终点沈阳，中午前后抵达",
    timeline: [
      { time: "05:30", what: "早起 + 退房出发", where: "乌兰布统/围场", detail: "想看草原日出可 4:30 起去百草敖包；不看则 5:30 直接出发。乌兰布统满电出发（或在围场先补）" },
      { time: "06:00", what: "自驾 乌兰布统 → 围场县", where: "经围场县城方向（G111/S301）", detail: "约 120 km / 2 h。清晨草原光线好，路上注意牛羊" },
      { time: "08:00", what: "补能 + 早餐", where: "围场县", detail: "快充至 70%+（300 km 纯电必补！围场县城桩比景区靠谱得多）。顺便吃早饭，约 45 min" },
      { time: "08:45", what: "自驾 围场 → 沈阳", where: "G45 大广高速 / G25 长深高速方向", detail: "约 330-380 km / 4-4.5 h。走 G45 大广高速一路向南是最短路线（经朝阳/阜新方向）。也可走 G25 经锦州方向（稍远但车少）" },
      { time: "13:15", what: "抵达沈阳", where: "沈阳市区", detail: "周五中午前后到！从容午餐：老边饺子/李连贵熏肉大饼/东北菜/西塔韩国街" },
      { time: "—", what: "行程结束 🎉", where: "沈阳", detail: "4 天赤峰自驾圆满完成。若当晚不走可住沈阳休整；若继续行程优先选近高速口的酒店" }
    ],
    meals: "早 5:30-8:00 围场简餐（包子/豆腐脑）；中午到沈阳后好好吃一顿。",
    hotel: "当晚住沈阳（近高速口或火车站一带方便后续出行）。",
    charging: "乌兰布统满电出发；围场县是返程唯一的可靠补能点（必停！）；进沈阳前补到 70%+ 即够市区用。",
    stops: ["乌兰布统晨光(可选)", "围场县(关键补能)", "沈阳市区(中午)"]
  }
];

const chargePlan = [
  {
    day: "D1",
    legs: "林东 → 经棚（直达）",
    rule: "林东满电出发；经棚是克什克腾唯一靠谱补能点，今晚必须补满（明天要跑 300km 无桩区）。"
  },
  {
    day: "D2",
    legs: "经棚 → 达里诺尔 → 达达线 → 石林 → 热阿线 → 热水塘",
    rule: "经棚补满再走！达里诺尔/达达线沿线/阿斯哈图几乎零桩（仅达来诺日镇可能慢充）；热水塘也基本没有。全程靠经棚那一晚的电撑着。"
  },
  {
    day: "D3",
    legs: "热水塘/经棚 → 乌兰布统",
    rule: "经棚是今天的关键补能点（D2 到热水塘可能已耗掉 50%-60%，必须在经棚充到 85%-90% 才敢进乌兰布统）。"
  },
  {
    day: "D4",
    legs: "乌兰布统 → 围场 → 沈阳",
    rule: "围场县是返程唯一可靠补能点（必停快充！）；乌兰布统景区内不要指望能补上。"
  }
];

const points = [
  { name: "巴林左旗·林东镇", day: 1, lat: 43.9639, lng: 119.3907, kind: "start" },
  { name: "克什克腾·经棚镇", day: 1, lat: 43.253, lng: 117.5, kind: "charge" },
  { name: "达里诺尔湖", day: 2, lat: 43.238, lng: 116.65, kind: "spot" },
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
      <text class="map-caption" x="40" y="590">本地示意图：按经纬度缩放，显示顺序、方位与补能节点 | 达达线(蓝) + 热阿线(橙) 为克什克腾两大景观大道</text>
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
