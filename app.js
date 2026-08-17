const places = {
  giza: {
    kicker: "GIZA · DAY 2", title: "ギザの三大ピラミッド", image: "assets/pyramids.jpg",
    description: "クフ王、カフラー王、メンカウラー王のピラミッドが並ぶ、エジプト旅の象徴。ツアーではクフ王のピラミッドと王妃のピラミッドに入場予定です。",
    highlights: ["スフィンクス足元の特別エリアへ貸切入場", "三大ピラミッドを望むパノラマポイント", "民族衣装ガラベイヤで記念撮影"],
    time: "約2時間", note: "砂埃・天候により眺望が変わります"
  },
  museum: {
    kicker: "CAIRO · DAY 2", title: "大エジプト博物館", image: "assets/museum.jpg",
    credit: "Amr F.Nagy · Public domain · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Grand_Egyptian_Museum_2025.jpg",
    description: "ギザのピラミッドに近接する世界最大級の考古学博物館。2025年11月のグランドオープン後を訪れる予定です。",
    highlights: ["古代エジプトの膨大なコレクション", "ツタンカーメン関連展示", "ピラミッド観光と同日に巡る構成"],
    time: "約3時間", note: "急遽休館の場合は考古学博物館へ"
  },
  cairo: {
    kicker: "CAIRO · DAY 2", title: "カイロ旧市街", image: "assets/cairo.jpg",
    credit: "Diego Delso · CC BY-SA 3.0 · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Muhammad_Ali_Mosque,_Citadel,_Cairo,_Egypt3.jpg",
    description: "イスラム建築と市場の熱気に触れるカイロ市内観光。モハメッドアリモスクとハンハリーリバザールを巡ります。",
    highlights: ["モハメッドアリモスクの外観", "ハンハリーリバザール散策", "ピラミッド夜景を望む夕食"],
    time: "約1時間", note: "夕食はコシャリとシシタウーク"
  },
  abusimbel: {
    kicker: "NUBIA · DAY 3–4", title: "アブシンベル神殿", image: "assets/abusimbel.jpg",
    description: "ラムセス2世が築いた大神殿と、王妃ネフェルタリに捧げた小神殿。ナセル湖の建設に伴い、巨大な神殿全体が現在地へ移築されました。",
    highlights: ["湖上から大神殿と小神殿を一望", "夜の音と光のショーを日本語で貸切見学", "翌朝は開場前の神殿へ貸切入場"],
    time: "午後・夜・翌早朝", note: "朝日と遊覧は天候により変更あり"
  },
  nile: {
    kicker: "THE NILE · DAY 4–7", title: "ナイル川クルーズ", image: "assets/nile.jpg",
    description: "アスワンからルクソールまで、ナイル川沿いの神殿をつなぐ3泊の船旅。移動そのものが旅のハイライトになります。",
    highlights: ["5つ星クルーズ船に3連泊", "窓とバスタブ付きの客室", "伝統帆船ファルーカ遊覧", "エスナの水門で約6mの水位差を通過"],
    time: "3泊4日", note: "船名は出発前の確定書面で案内"
  },
  philae: {
    kicker: "ASWAN · DAY 5", title: "イシス神殿", image: "assets/philae.jpg",
    description: "ナイルの真珠と呼ばれるフィラエ島の神殿。女神イシス信仰の中心地で、水に囲まれた景観も魅力です。",
    highlights: ["島へ渡って神殿を見学", "神殿のパノラマビュー", "水辺と列柱がつくる静かな景観"],
    time: "約1時間30分", note: "香油・香水瓶店にも立寄り"
  },
  komombo: {
    kicker: "KOM OMBO · DAY 5", title: "コムオンボ神殿", image: "assets/komombo.jpg",
    description: "ワニの神セベクとハヤブサの神ハロエリス、二柱の神に捧げられた左右対称の二重神殿です。",
    highlights: ["珍しい二重構造の神殿", "医療器具を表したレリーフ", "併設のワニの博物館"],
    time: "約1時間", note: "観光後はエドフへ向けて航行"
  },
  edfu: {
    kicker: "EDFU · DAY 6", title: "ホルス神殿", image: "assets/edfu.jpg",
    credit: "Marc Ryckaert · CC BY-SA 4.0 · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Edfu_Temple_R04.jpg",
    description: "天空の神ホルスに捧げられた、保存状態の良いプトレマイオス朝の神殿。巨大な塔門と中庭が迎えます。",
    highlights: ["神殿までは馬車で移動", "高さのある第一塔門", "ホルス神とセト神の神話を刻む壁面"],
    time: "約1時間30分", note: "朝の観光"
  },
  luxor: {
    kicker: "LUXOR · DAY 6", title: "ルクソール東岸", image: "assets/luxor-temple.jpg",
    credit: "Vyacheslav Argenberg · CC BY 4.0 · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Luxor_Temple_at_night,_Luxor,_Egypt.jpg",
    description: "古代テーベの生者の町。夕暮れからライトアップされるルクソール神殿と、スフィンクスが並ぶ参道を歩きます。",
    highlights: ["ルクソール神殿のライトアップ", "約3kmのスフィンクスアベニュー", "夜の神殿を楽しむオプショナルツアー"],
    time: "約1時間", note: "ルクソール博物館は別途代金"
  },
  luxorMuseum: {
    kicker: "LUXOR · DAY 6", title: "ルクソール博物館", image: "assets/luxor-museum.jpg",
    credit: "Walaa · Public domain · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Luxor_Museum,_Egypt_33.jpg",
    description: "古代テーベ周辺で発掘された選りすぐりの遺物を、落ち着いた空間で鑑賞できる博物館。王墓や神殿を巡った後の理解を深めます。",
    highlights: ["ルクソール周辺から出土した彫像や副葬品", "新王国時代の美術を見やすい展示構成", "夕方のオプショナルツアーで訪問予定"],
    time: "午後・夕方", note: "オプショナルツアーに参加予定"
  },
  valley: {
    kicker: "WEST BANK · DAY 7", title: "王家の谷", image: "assets/valley-of-kings.jpg",
    credit: "Vyacheslav Argenberg · CC BY 4.0 · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:Thebes,_Luxor,_Egypt,_Panoramic_view_of_the_Valley_of_the_Kings.jpg",
    description: "新王国時代のファラオたちが眠る岩窟墓群。ツタンカーメン王の墓はツアー参加者だけの貸切入場を予定しています。",
    highlights: ["ツタンカーメン王の墓へ貸切入場", "セティ1世の墓を見学予定", "ハトシェプスト女王葬祭殿", "ハワード・カーター・ハウス"],
    time: "西岸全体で約4時間30分", note: "修復・調査時は代替観光あり"
  },
  karnak: {
    kicker: "LUXOR · DAY 7", title: "カルナック神殿", image: "assets/karnak.jpg",
    description: "歴代ファラオが増築を重ねた巨大な神殿複合体。134本の石柱が並ぶ大列柱室は旅の終盤を飾る圧巻の空間です。",
    highlights: ["アメン大神殿", "高さ約23mの柱が並ぶ大列柱室", "スフィンクス参道につながる古代都市の軸線"],
    time: "約1時間", note: "観光後は空港へ"
  }
};

const days = [
  {
    date: "9/20", weekday: "SUN", jpWeekday: "日", location: "NARITA → CAIRO", title: "成田から、砂漠の都へ",
    summary: "夜の直行便でカイロへ。到着後すぐに始まる観光に備え、機内でしっかり休みます。",
    image: "assets/cairo.jpg", caption: "最初の目的地、砂漠の都カイロ", facts: [["STAY", "機中泊"], ["MEAL", "旅行日程上は食事なし"]],
    events: [
      ["17:00", "HIS集合", "成田空港 第1ターミナル。旅券、旅行書類、査証代30米ドルを確認。"],
      ["20:30", "成田空港 発", "エジプト航空 MS965便でカイロへ。"],
      ["機内", "到着後に備えて休息", "歯みがき、着替え、常備薬は手荷物に。"]
    ]
  },
  {
    date: "9/21", weekday: "MON", jpWeekday: "月", location: "CAIRO · GIZA", title: "ピラミッドと新しい博物館を一日で",
    summary: "古代エジプトの象徴からカイロの街角まで、到着初日から濃密に巡ります。",
    image: "assets/pyramids.jpg", caption: "ギザの三大ピラミッドとスフィンクス", facts: [["STAY", "マリオット メナハウス"], ["DINNER", "コシャリ・シシタウーク"]],
    events: [
      ["03:05–04:05", "カイロ着・査証取得", "ホテルへ移動し、ピラミッドが見えるレストランで朝食。"],
      ["午前", "ギザ観光", "クフ王・王妃のピラミッド、スフィンクス、パノラマポイント。", "giza"],
      ["午後", "大エジプト博物館", "2025年11月グランドオープンの博物館を見学。", "museum"],
      ["夕方", "カイロ市内観光", "モハメッドアリモスク、ハンハリーリバザール。", "cairo"]
    ]
  },
  {
    date: "9/22", weekday: "TUE", jpWeekday: "火", location: "CAIRO → ABU SIMBEL", title: "アブシンベル、湖上と夜の表情",
    summary: "国内線と砂漠の道を乗り継ぎ、ラムセス2世の大神殿へ。昼・湖上・夜と表情の変化を楽しみます。",
    image: "assets/abusimbel.jpg", caption: "アブシンベル大神殿・小神殿", facts: [["STAY", "セティ アブシンベル"], ["LUNCH", "ムサカ または 魚のタジン"]],
    events: [
      ["05:45–06:45", "カイロ → アスワン", "国内線で南へ。朝食はボックス。"],
      ["午前", "アブシンベルへ移動", "約280km、約3時間30分。途中、アスワンハイダム。"],
      ["午後", "大神殿・小神殿", "ナセル湖遊覧で二つの神殿を正面から望む。", "abusimbel"],
      ["夜", "音と光のショー", "日本語案内で貸切見学。", "abusimbel"]
    ]
  },
  {
    date: "9/23", weekday: "WED", jpWeekday: "水", location: "ABU SIMBEL → ASWAN", title: "朝日の神殿から、ナイルの船旅へ",
    summary: "開場前の神殿を味わった後、アスワンへ。午後から3泊のクルーズが始まります。",
    image: "assets/nile.jpg", caption: "アスワンから始まるナイル川クルーズ", facts: [["STAY", "船中泊 1/3"], ["MEAL", "昼・夜は船内"]],
    events: [
      ["早朝", "朝日のアブシンベル神殿", "オープン前の神殿へ貸切入場。", "abusimbel"],
      ["午前", "アスワンへ戻る", "約280km、約3時間30分。"],
      ["午後", "クルーズ船に乗船", "5つ星クルーズ、窓とバスタブ付き客室。", "nile"],
      ["その後", "ファルーカ遊覧", "伝統帆船でナイル川をゆったり進む。", "nile"]
    ]
  },
  {
    date: "9/24", weekday: "THU", jpWeekday: "木", location: "ASWAN → KOM OMBO", title: "イシス神殿と、二重構造の神殿",
    summary: "水に囲まれた女神の神殿から、ワニの神に捧げられた左右対称の神殿へ。",
    image: "assets/philae.jpg", caption: "フィラエ島に建つイシス神殿", facts: [["STAY", "船中泊 2/3"], ["MEAL", "3食とも船内"]],
    events: [
      ["午前", "アスワン観光", "イシス神殿とパノラマビュー。", "philae"],
      ["航行", "コムオンボへ", "ナイルの景色を楽しみながら移動。", "nile"],
      ["午後", "コムオンボ観光", "二重構造の神殿とワニの博物館。", "komombo"],
      ["夕方", "エドフへ向け出発", "夕食はクルーズ船内。"]
    ]
  },
  {
    date: "9/25", weekday: "FRI", jpWeekday: "金", location: "EDFU → LUXOR", title: "ホルス神殿から、灯り始めるルクソールへ",
    summary: "神殿へ馬車で向かい、エスナの水門を越えて古代テーベへ入ります。",
    image: "assets/luxor-temple.jpg", caption: "夜の光に浮かぶルクソール神殿", facts: [["STAY", "船中泊 3/3"], ["OPTION", "ルクソール博物館観光"]],
    events: [
      ["朝", "エドフ・ホルス神殿", "天空の神ホルスに捧げられた神殿。", "edfu"],
      ["航行", "エスナの水門を通過", "約6mの水位差を越えてルクソールへ。", "nile"],
      ["午後", "ルクソール博物館観光", "オプショナルツアーに参加予定。ルクソール周辺から出土した遺物を見学します。", "luxorMuseum"],
      ["夕刻", "ルクソール東岸", "スフィンクスアベニュー、ライトアップされる神殿。", "luxor"]
    ]
  },
  {
    date: "9/26", weekday: "SAT", jpWeekday: "土", location: "LUXOR → CAIRO", title: "王家の谷、旅のクライマックス",
    summary: "王たちの墓と大列柱室を巡り、夜の便で帰国の途へ。旅の密度が最も高い一日です。",
    image: "assets/valley-of-kings.jpg", caption: "岩山に王墓が眠る王家の谷", facts: [["STAY", "機中泊"], ["DINNER", "和食のお弁当"]],
    events: [
      ["午前", "ルクソール西岸", "ゴールデンシティ、貴族の墓、ラムセス2世葬祭殿。"],
      ["王家の谷", "ツタンカーメン王の墓", "貸切入場。セティ1世の墓も見学予定。", "valley"],
      ["続いて", "女王葬祭殿ほか", "メムノンの巨像、ハワード・カーター・ハウス。", "valley"],
      ["午後", "カルナック神殿", "壮大な大列柱室へ。", "karnak"],
      ["20:10–21:10", "ルクソール発", "カイロ乗継で帰国の途へ。"]
    ]
  },
  {
    date: "9/27", weekday: "SUN", jpWeekday: "日", location: "CAIRO → NARITA", title: "おかえりなさい。旅の余韻とともに",
    summary: "機内で旅を振り返りながら日本へ。成田到着後、入国・手荷物受取を経て解散です。",
    image: "assets/karnak.jpg", caption: "エジプトの壮大な景色を胸に帰国", facts: [["ARRIVAL", "成田 18:30予定"], ["MEAL", "旅行日程上は食事なし"]],
    events: [
      ["機内", "カイロから成田へ", "エジプト航空 MS964便で日本へ。"],
      ["18:30", "成田空港 着", "MS964便で到着予定。入国、受託手荷物受取後に解散。"]
    ]
  }
];

const routeNames = ["成田", "カイロ・ギザ", "アブシンベル", "アスワン", "コムオンボ", "エドフ", "ルクソール", "成田"];
const weatherCities = [
  { name: "カイロ", label: "CAIRO", latitude: 30.0444, longitude: 31.2357 },
  { name: "ルクソール", label: "LUXOR", latitude: 25.6872, longitude: 32.6396 },
  { name: "アスワン", label: "ASWAN", latitude: 24.0889, longitude: 32.8998 }
];
let selectedDay = 0;
let lastTrigger = null;

const dateStrip = document.querySelector("#date-strip");
const route = document.querySelector("#route");
const dialog = document.querySelector("#place-dialog");

function weatherLabel(code) {
  if (code === 0) return "快晴";
  if ([1, 2].includes(code)) return "晴れ時々曇り";
  if (code === 3) return "曇り";
  if ([45, 48].includes(code)) return "霧";
  if ([51, 53, 55, 56, 57].includes(code)) return "霧雨";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "雨";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天気情報あり";
}

function egyptTime() {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Africa/Cairo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());
}

function updateEgyptTime() {
  document.querySelector("#egypt-time").textContent = `エジプト ${egyptTime()}`;
}

async function loadWeather() {
  const refreshButton = document.querySelector("#weather-refresh");
  const updated = document.querySelector("#weather-updated");
  refreshButton.disabled = true;
  refreshButton.classList.add("is-loading");
  updated.textContent = "取得しています";

  try {
    const weather = await Promise.all(weatherCities.map(async city => {
      const params = new URLSearchParams({
        latitude: city.latitude,
        longitude: city.longitude,
        current: "temperature_2m,weather_code",
        timezone: "Africa/Cairo"
      });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error("Weather request failed");
      const data = await response.json();
      return { ...city, temperature: Math.round(data.current.temperature_2m), code: data.current.weather_code };
    }));

    document.querySelector("#weather-grid").innerHTML = weather.map(city => `
      <article class="weather-card">
        <span>${city.label}</span><strong>${city.temperature}°</strong><p>${weatherLabel(city.code)}</p>
      </article>`).join("");
    updated.textContent = `${egyptTime()}更新`;
  } catch {
    updated.textContent = "取得できませんでした";
    document.querySelector("#weather-grid").innerHTML = weatherCities.map(city => `
      <article class="weather-card is-unavailable"><span>${city.label}</span><strong>--°</strong><p>再度更新</p></article>`).join("");
  } finally {
    refreshButton.disabled = false;
    refreshButton.classList.remove("is-loading");
  }
}

function renderRoute() {
  route.innerHTML = routeNames.map((name, index) => `
    <button class="route-stop" type="button" data-day="${index}" aria-label="Day ${index + 1} ${name}を表示">
      <img src="${days[index].image}" alt="" loading="lazy">
      <span class="route-day">DAY ${String(index + 1).padStart(2, "0")}</span>
      <span class="route-date">${days[index].date} ${days[index].weekday}</span>
      <strong>${name}</strong>
      <small>${days[index].title}</small>
    </button>`).join("");
  route.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    selectDay(Number(button.dataset.day), true);
  }));
}

function renderDateButtons() {
  dateStrip.innerHTML = days.map((day, index) => `
    <button class="date-button" type="button" role="tab" data-day="${index}" aria-selected="${index === selectedDay}" aria-controls="timeline">
      <span>DAY ${index + 1}</span><strong>${day.date}</strong><small>${day.weekday}</small>
    </button>`).join("");
  dateStrip.querySelectorAll("button").forEach(button => button.addEventListener("click", () => selectDay(Number(button.dataset.day))));
}

function renderDay() {
  const day = days[selectedDay];
  document.querySelector("#day-number").textContent = String(selectedDay + 1).padStart(2, "0");
  document.querySelector("#day-location").textContent = `${day.date}（${day.jpWeekday}） · ${day.location}`;
  document.querySelector("#day-title").textContent = day.title;
  document.querySelector("#day-summary").textContent = day.summary;
  const image = document.querySelector("#day-image");
  image.src = day.image;
  image.alt = day.caption;
  document.querySelector("#day-caption").textContent = day.caption;
  document.querySelector("#day-facts").innerHTML = day.facts.map(fact => `<div class="fact"><span>${fact[0]}</span><strong>${fact[1]}</strong></div>`).join("");
  document.querySelector("#timeline").innerHTML = day.events.map(event => `
    <article class="timeline-item">
      <div class="timeline-time">${event[0]}</div>
      <div class="timeline-body"><h4>${event[1]}</h4><p>${event[2]}</p>
        ${event[3] ? `<button class="place-button" type="button" data-place="${event[3]}">訪問地の詳細 <span aria-hidden="true">↗</span></button>` : ""}
      </div>
    </article>`).join("");
  document.querySelectorAll(".place-button").forEach(button => button.addEventListener("click", () => openPlace(button.dataset.place, button)));
  document.querySelectorAll(".date-button").forEach((button, index) => button.setAttribute("aria-selected", String(index === selectedDay)));
  document.querySelector("#prev-day").disabled = selectedDay === 0;
  document.querySelector("#next-day").disabled = selectedDay === days.length - 1;
  document.querySelector("#day-progress").textContent = `${selectedDay + 1} / ${days.length}`;
}

function selectDay(index, scroll = false) {
  selectedDay = Math.max(0, Math.min(days.length - 1, index));
  renderDay();
  updateHash();
  if (scroll) document.querySelector("#itinerary").scrollIntoView({ behavior: "smooth" });
}

function openPlace(id, trigger) {
  const place = places[id];
  if (!place) return;
  lastTrigger = trigger || document.activeElement;
  document.querySelector("#place-kicker").textContent = place.kicker;
  document.querySelector("#place-title").textContent = place.title;
  document.querySelector("#place-description").textContent = place.description;
  document.querySelector("#place-highlights").innerHTML = place.highlights.map(item => `<li>${item}</li>`).join("");
  const image = document.querySelector("#place-image");
  image.src = place.image;
  image.alt = place.title;
  const credit = document.querySelector("#place-credit");
  credit.hidden = !place.credit;
  credit.textContent = place.credit || "";
  credit.href = place.creditUrl || "#";
  document.querySelector("#place-meta").innerHTML = `
    <div><span>VISIT</span><strong>${place.time}</strong></div>
    <div><span>NOTE</span><strong>${place.note}</strong></div>`;
  dialog.dataset.place = id;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  updateHash(id);
}

function closePlace() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
  delete dialog.dataset.place;
  updateHash();
  if (lastTrigger) lastTrigger.focus();
}

function updateHash(placeId) {
  const value = `day=${selectedDay + 1}${placeId ? `&place=${placeId}` : ""}`;
  history.replaceState(null, "", `#${value}`);
}

function restoreFromHash() {
  const params = new URLSearchParams(location.hash.slice(1));
  const day = Number(params.get("day"));
  if (Number.isInteger(day) && day >= 1 && day <= days.length) selectedDay = day - 1;
  renderDateButtons();
  renderDay();
  const place = params.get("place");
  if (place && places[place]) openPlace(place);
}

document.querySelector("#prev-day").addEventListener("click", () => selectDay(selectedDay - 1, true));
document.querySelector("#next-day").addEventListener("click", () => selectDay(selectedDay + 1, true));
document.querySelector("#dialog-close").addEventListener("click", closePlace);
dialog.addEventListener("click", event => { if (event.target === dialog) closePlace(); });
dialog.addEventListener("cancel", event => { event.preventDefault(); closePlace(); });
window.addEventListener("hashchange", restoreFromHash);
document.querySelector("#weather-refresh").addEventListener("click", loadWeather);

renderRoute();
restoreFromHash();
updateEgyptTime();
setInterval(updateEgyptTime, 30000);
loadWeather();