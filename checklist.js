const groups = [
  {
    id: "documents", title: "渡航書類", items: [
      ["passport", "パスポート", "残存有効期間と署名欄を確認", "手荷物"],
      ["visa", "査証・入国条件の確認", "必要な場合は取得書類も携行", "手荷物"],
      ["tickets", "航空券・旅程表", "予約番号をオフラインでも確認可能に", "手荷物"],
      ["insurance", "海外旅行保険", "証券番号と緊急連絡先", "手荷物"],
      ["copies", "重要書類のコピー", "紙とクラウドに分散して保管", "分散"],
      ["contacts", "緊急連絡先一覧", "旅行会社・保険・カード会社", "手荷物"]
    ]
  },
  {
    id: "money", title: "お金・支払い", items: [
      ["cards", "クレジットカード", "国際ブランドを分けて2枚以上", "分散"],
      ["cash", "現金", "日本円・米ドル・現地通貨を必要に応じて", "分散"],
      ["wallet", "予備の財布", "日常用と保管用を分ける", "預け可"],
      ["card-contact", "カード紛失時の連絡先", "カード番号とは別に保管", "手荷物"]
    ]
  },
  {
    id: "clothes", title: "衣類・身につけるもの", items: [
      ["tops", "トップス", "日数と洗濯予定に合わせる", "預け可"],
      ["bottoms", "ボトムス", "動きやすく着回せるもの", "預け可"],
      ["underwear", "下着・靴下", "予備を機内手荷物にも", "分散"],
      ["sleepwear", "寝間着", "ホテル備品を事前確認", "預け可"],
      ["jacket", "薄手の羽織もの", "機内・冷房・朝晩の温度差対策", "手荷物"],
      ["shoes", "歩きやすい靴", "長時間観光に対応できるもの", "着用"],
      ["hat", "帽子・サングラス", "日差しの強い地域では必携", "手荷物"]
    ]
  },
  {
    id: "health", title: "衛生用品・医薬品", items: [
      ["medicine", "常備薬・処方薬", "日数分より少し多めに", "手荷物"],
      ["prescription", "英文の処方情報", "薬によっては証明書を確認", "手荷物"],
      ["toiletries", "洗面・衛生用品", "液体の機内持込容量に注意", "預け可"],
      ["sunscreen", "日焼け止め", "塗り直し用は小容量で携行", "手荷物"],
      ["mask", "マスク・ティッシュ", "乾燥・砂埃・移動中の対策", "手荷物"],
      ["glasses", "眼鏡・コンタクト用品", "予備の眼鏡も用意", "手荷物"]
    ]
  },
  {
    id: "digital", title: "電子機器", items: [
      ["phone", "スマートフォン", "地図・翻訳・連絡手段", "手荷物"],
      ["charger", "充電器・ケーブル", "端子ごとに確認", "手荷物"],
      ["battery", "モバイルバッテリー", "預け入れ不可。容量制限も確認", "手荷物"],
      ["adapter", "変換プラグ", "渡航先のコンセント形状を確認", "預け可"],
      ["camera", "カメラ・メモリーカード", "充電池と空き容量も確認", "手荷物"],
      ["earphones", "イヤホン", "機内・移動時間用", "手荷物"]
    ]
  },
  {
    id: "comfort", title: "機内・旅先で便利", items: [
      ["daybag", "観光用バッグ", "ファスナー付きで体に沿うもの", "手荷物"],
      ["pen", "ボールペン", "入国書類の記入用", "手荷物"],
      ["bottle", "空の水筒・ボトル", "保安検査後に給水", "手荷物"],
      ["pillow", "ネックピロー・アイマスク", "長距離フライトの休息用", "手荷物"],
      ["rain", "折りたたみ傘・雨具", "季節と予報に応じて", "預け可"],
      ["packing", "圧縮袋・仕分け袋", "衣類や小物の整理に", "預け可"]
    ]
  }
];

const storageKey = "egypt-2026-packing-checklist";
const scheduleStorageKey = "egypt-2026-travel-schedule";
const schedulePreset = {
  presetVersion: 2,
  takuyaPickup: "13:45",
  kazukiPickup: "14:00",
  naritaArrival: "15:30",
  hisMeeting: "17:00"
};
const travelers = [
  { id: "takuya", name: "TAKUYA" },
  { id: "kazuki", name: "KAZUKI" },
  { id: "junpei", name: "JUNPEI" }
];
let state = loadState();
let filter = "all";

function loadSchedule() {
  try {
    const stored = JSON.parse(localStorage.getItem(scheduleStorageKey));
    return stored?.presetVersion === schedulePreset.presetVersion
      ? { ...schedulePreset, ...stored }
      : { ...schedulePreset };
  } catch {
    return { ...schedulePreset };
  }
}

const schedule = loadSchedule();

document.querySelectorAll("[data-schedule-time]").forEach(input => {
  const key = input.dataset.scheduleTime;
  input.value = schedule[key] || "";
  input.addEventListener("input", () => {
    schedule[key] = input.value;
    localStorage.setItem(scheduleStorageKey, JSON.stringify(schedule));
  });
});

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (stored?.people) {
      return {
        activePerson: travelers.some(person => person.id === stored.activePerson) ? stored.activePerson : "junpei",
        people: Object.fromEntries(travelers.map(person => [person.id, {
          checked: stored.people[person.id]?.checked || {},
          custom: stored.people[person.id]?.custom || []
        }]))
      };
    }
    return {
      activePerson: "junpei",
      people: Object.fromEntries(travelers.map(person => [person.id, {
        checked: person.id === "junpei" ? stored?.checked || {} : {},
        custom: person.id === "junpei" ? stored?.custom || [] : []
      }]))
    };
  } catch {
    return {
      activePerson: "junpei",
      people: Object.fromEntries(travelers.map(person => [person.id, { checked: {}, custom: [] }]))
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function personState(personId = state.activePerson) {
  return state.people[personId];
}

function allGroups() {
  const current = personState();
  if (!current.custom.length) return groups;
  return [...groups, {
    id: "custom", title: "自分用", items: current.custom.map(item => [item.id, item.label, "追加した持ち物", "指定なし"])
  }];
}

function render() {
  const current = personState();
  const checklistGrid = document.querySelector("#checklist-grid");
  checklistGrid.innerHTML = allGroups().map(group => {
    const checkedCount = group.items.filter(item => current.checked[item[0]]).length;
    return `<section class="checklist-group" data-group="${group.id}">
      <header><h2>${group.title}</h2><span class="group-count">${checkedCount} / ${group.items.length}</span></header>
      <div class="check-items">${group.items.map(item => `
        <label class="check-item${filter === "remaining" && current.checked[item[0]] ? " is-hidden" : ""}">
          <input type="checkbox" data-id="${item[0]}" ${current.checked[item[0]] ? "checked" : ""}>
          <span><strong>${item[1]}</strong><small>${item[2]}</small></span>
          <span class="bag">${item[3]}</span>
        </label>`).join("")}</div>
    </section>`;
  }).join("");

  checklistGrid.querySelectorAll("input[type='checkbox']").forEach(input => input.addEventListener("change", () => {
    personState().checked[input.dataset.id] = input.checked;
    saveState();
    render();
  }));
  updateTravelerTabs();
  updateProgress();
}

function updateProgress() {
  const items = allGroups().flatMap(group => group.items);
  const checked = items.filter(item => personState().checked[item[0]]).length;
  const percent = items.length ? Math.round((checked / items.length) * 100) : 0;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-count").textContent = `${checked} / ${items.length} 準備済み`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  const visible = document.querySelectorAll(".check-item:not(.is-hidden)").length;
  document.querySelector("#empty-state").classList.toggle("is-visible", filter === "remaining" && visible === 0);
}

function updateTravelerTabs() {
  document.querySelectorAll("#traveler-tabs [role='tab']").forEach(button => {
    const person = travelers.find(item => item.id === button.dataset.person);
    const profile = personState(person.id);
    const itemIds = [...groups.flatMap(group => group.items.map(item => item[0])), ...profile.custom.map(item => item.id)];
    const checked = itemIds.filter(id => profile.checked[id]).length;
    const selected = person.id === state.activePerson;
    button.setAttribute("aria-selected", String(selected));
    button.setAttribute("tabindex", selected ? "0" : "-1");
    button.querySelector("small").textContent = `${checked}/${itemIds.length}`;
  });
  const activeName = travelers.find(person => person.id === state.activePerson).name;
  document.querySelector("#custom-label").textContent = `${activeName}の持ち物を追加`;
  document.querySelector("#reset-checklist").textContent = `${activeName}をリセット`;
}

document.querySelectorAll("#traveler-tabs [role='tab']").forEach(button => button.addEventListener("click", () => {
  state.activePerson = button.dataset.person;
  filter = "all";
  document.querySelectorAll(".filter-button").forEach(item => item.setAttribute("aria-pressed", String(item.dataset.filter === "all")));
  saveState();
  render();
}));

document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
  filter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  render();
}));

document.querySelector("#custom-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#custom-item");
  const label = input.value.trim();
  if (!label) return;
  personState().custom.push({ id: `custom-${Date.now()}`, label });
  input.value = "";
  saveState();
  render();
});

document.querySelector("#reset-checklist").addEventListener("click", () => {
  personState().checked = {};
  saveState();
  render();
});

render();