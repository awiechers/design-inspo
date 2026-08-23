const ANNUAL_SOURCE = "https://x.com/formsarchive/status/2089562646739632142";

const CASES = [
  {
    short: "IBM · 1986",
    label: "Case 01 · Technology as architecture",
    title: "A building becomes an information system.",
    lede: "The photograph makes architecture read like a luminous grid: ordered, interconnected, and far more atmospheric than a literal picture of computing.",
    notes: [
      "Seen at night, the colored windows hold the structure together while its reflections extend the pattern beyond the building itself.",
      "The product is absent, but the idea of a system is everywhere. That indirection gives the cover both mystery and a strong point of view."
    ],
    move: "Photograph the company’s idea rather than its product.",
    effect: "Infrastructure feels vivid, ordered, and human.",
    keep: "A metaphor can explain a system more memorably than a diagram.",
    source: "IBM annual report, 1986",
    image: "images/2089562646739632142_3.jpg",
    alt: "IBM 1986 annual report cover showing a luminous gridded building reflected at night"
  },
  {
    short: "IBM · 1985",
    label: "Case 02 · The future at work",
    title: "New technology appears inside an ordinary task.",
    lede: "A mechanic uses a screen while leaning over an open hood. The future is not staged as spectacle; it is shown becoming useful in a familiar place.",
    notes: [
      "The diagonals of the hood, arm, and monitor pull attention directly to the interaction. The image reads as a small story instead of a product display.",
      "That makes a technical proposition credible: the system matters because someone can already do something with it."
    ],
    move: "Show the new thing being used inside the old world.",
    effect: "Innovation feels practical rather than promotional.",
    keep: "A real situation can carry more meaning than a pristine product shot.",
    source: "IBM annual report, 1985",
    image: "images/2089562646739632142_4.jpg",
    alt: "IBM 1985 annual report cover showing a mechanic using a computer beside an open car hood"
  },
  {
    short: "Pepsi-Cola · 1959",
    label: "Case 03 · Product as pattern",
    title: "Repetition turns the familiar into texture.",
    lede: "A bottle cap is ordinary; stacked into an ascending graph, it becomes both product and performance. The cover reports growth before the reader reaches a number.",
    notes: [
      "Scale shifts from object to pattern and back again. You register the rising columns first, then discover that the chart is made from the product itself.",
      "It is an especially good example of a commercial artifact becoming graphic material without losing its specificity."
    ],
    move: "Repeat one recognizable object past the point of inventory.",
    effect: "The brand becomes atmosphere.",
    keep: "Familiar elements can gain force through accumulation.",
    source: "Pepsi-Cola annual report, 1959",
    image: "images/2089562646739632142_5.jpg",
    alt: "Pepsi-Cola 1959 annual report cover filled with rows of blue bottle caps"
  },
  {
    short: "Boeing · 1964",
    label: "Case 04 · Product as horizon",
    title: "Four images compress an entire frontier.",
    lede: "Rocket, satellite, airliner, fighter: the sequence turns a broad industrial portfolio into a compact story about movement and reach.",
    notes: [
      "The wide horizontal band behaves like a miniature exhibition. Rounded frames keep very different subjects inside one coherent visual sentence.",
      "The result is corporate, but not bureaucratic: breadth is communicated through a brisk sequence rather than an exhaustive inventory."
    ],
    move: "Edit a complex portfolio into one decisive sequence.",
    effect: "Breadth reads as momentum rather than sprawl.",
    keep: "A few well-chosen images can imply the whole system.",
    source: "Boeing annual report, 1964",
    image: "images/2089562646739632142_6.jpg",
    alt: "Boeing 1964 annual report cover with a rocket, satellite, airliner, and fighter jet"
  },
  {
    short: "General Mills · 1972",
    label: "Case 05 · Symbol first",
    title: "The mark behaves like an invitation, not a signature.",
    lede: "A concentrated piece of geometry holds the page while the rest stays almost entirely open. The restraint makes the symbol feel deliberate rather than merely branded.",
    notes: [
      "The white field gives the eye a clean entry. Because the mark is allowed to remain small, attention goes to its shape and placement.",
      "It is a useful reminder that confidence can look like leaving most of the cover alone."
    ],
    move: "Place one compressed signal inside a generous field.",
    effect: "Restraint makes the mark feel consequential.",
    keep: "Whitespace is an active part of identity.",
    source: "General Mills annual report, 1972",
    image: "images/2089562646739632142_0.jpg",
    crop: true,
    alt: "Collage of vintage annual reports led by a geometric General Mills cover"
  },
  {
    short: "National Biscuit · 1953",
    label: "Case 06 · The archive speaks",
    title: "A report can borrow the density of an index.",
    lede: "The cover treats accumulated company material as an aesthetic in itself. Repetition and typographic density make history feel tangible.",
    notes: [
      "Rather than illustrating a single achievement, it suggests a collection—many years, products, or records held together.",
      "That archival texture is useful when continuity is the argument."
    ],
    move: "Let accumulated evidence become the image.",
    effect: "History reads as both substance and texture.",
    keep: "When continuity matters, show the collection rather than one emblem.",
    source: "National Biscuit Company annual report, 1953",
    image: "images/2089562646739632142_2.jpg",
    crop: true,
    alt: "Collage of vintage food company annual reports led by National Biscuit Company"
  },
  {
    short: "CRTC · 1989–90",
    label: "Case 07 · Institution with texture",
    title: "A public document makes room for character.",
    lede: "The cover uses composition and material rather than corporate polish. It feels official, but also unmistakably made by someone with a visual point of view.",
    notes: [
      "That tension is the interesting part: information does not have to look generic in order to look credible.",
      "The design gives institutional content a specific cultural and physical presence."
    ],
    move: "Pair institutional clarity with a tactile visual language.",
    effect: "Authority feels authored rather than anonymous.",
    keep: "Credibility and character are not opposites.",
    source: "CRTC annual report, 1989–90",
    image: "images/2089562646739632142_1.jpg",
    crop: true,
    alt: "Collage of vintage annual reports led by a CRTC 1989–90 cover"
  }
];

const CLUSTERS = {
  all: { label: "All", terms: [] },
  publication: { label: "Printed matter", terms: ["book", "print", "poster", "report", "yearbook", "type", "font", "pdf", "paper", "ornamental", "graphic"] },
  field: { label: "Field notes", terms: ["field", "travel", "map", "stamp", "archive", "collection", "photos"] },
  interface: { label: "Interfaces", terms: ["website", "ui", "product", "framer", "marketing", "system", "design", "app", "css"] },
  image: { label: "Image making", terms: ["illustration", "painting", "photo", "color", "texture", "art", "prompt"] }
};

let selectedCase = 0;
let items = [];
let activeCluster = "all";
let query = "";

const caseStrip = document.querySelector("#case-strip");
const readingImage = document.querySelector("#reading-image");
const imageCaption = document.querySelector("#image-caption");
const caseTitle = document.querySelector("#case-title");
const caseLabel = document.querySelector("#case-label");
const caseLede = document.querySelector("#case-lede");
const caseNotes = document.querySelector("#case-notes");
const imageDialog = document.querySelector("#image-dialog");

function renderCases() {
  caseStrip.innerHTML = CASES.map((item, index) => `
    <button class="case-card" type="button" role="option" aria-selected="${index === selectedCase}" data-case="${index}">
      <span class="case-card-image">
        <img class="${item.crop ? "is-crop" : ""}" src="${item.image}" alt="">
      </span>
      <span class="case-card-label">${String(index + 1).padStart(2, "0")} · ${item.short}</span>
    </button>
  `).join("");

  caseStrip.querySelectorAll(".case-card").forEach((button) => {
    button.addEventListener("click", () => selectCase(Number(button.dataset.case), true));
  });
}

function selectCase(index, scrollToReading = false, revealSelection = false) {
  selectedCase = (index + CASES.length) % CASES.length;
  const item = CASES[selectedCase];

  caseStrip.querySelectorAll(".case-card").forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", String(buttonIndex === selectedCase));
  });

  document.querySelector("#case-position").textContent = `Case ${selectedCase + 1} of ${CASES.length}`;
  caseLabel.textContent = item.label;
  caseTitle.textContent = item.title;
  caseLede.textContent = item.lede;
  caseNotes.innerHTML = item.notes.map((note) => `<p>${note}</p>`).join("");
  document.querySelector("#case-move").textContent = item.move;
  document.querySelector("#case-effect").textContent = item.effect;
  document.querySelector("#case-keep").textContent = item.keep;
  document.querySelector("#case-source").textContent = item.source;
  document.querySelector("#source-link").href = ANNUAL_SOURCE;
  readingImage.src = item.image;
  readingImage.alt = item.alt;
  readingImage.style.objectPosition = "top left";
  document.querySelector("#image-button").classList.toggle("is-crop", Boolean(item.crop));
  imageCaption.textContent = `${item.short} · Working note${item.crop ? " · Cropped from source sheet" : ""}`;

  const selectedButton = caseStrip.querySelector(`[data-case="${selectedCase}"]`);
  if (revealSelection) selectedButton?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  if (scrollToReading) {
    document.querySelector("#case-reading").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function cleanText(value = "") {
  return value.replace(/\\n/g, " ").replace(/https?:\/\/\s*/g, "").replace(/\s+/g, " ").trim();
}

function contentLines(value = "") {
  const lines = value
    .replace(/\\n/g, "\n")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines[1]?.startsWith("@")) {
    lines.splice(0, 2);
    while (lines.length && (lines[0] === "·" || /^(\d+[hms]|[A-Z][a-z]{2} \d{1,2})$/.test(lines[0]))) {
      lines.shift();
    }
  }
  return lines;
}

function itemTitle(item) {
  const lines = contentLines(item.text);
  const text = cleanText(lines[0] || item.text);
  if (!text) return "Saved for a second look";
  return text.length > 82 ? `${text.slice(0, 79).trim()}…` : text;
}

function itemBody(item) {
  const text = item.notes ? cleanText(item.notes) : cleanText(contentLines(item.text).join(" "));
  return text.length > 220 ? `${text.slice(0, 217).trim()}…` : text;
}

function itemHaystack(item) {
  return `${item.handle} ${item.text} ${item.notes || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
}

function itemCluster(item) {
  const haystack = itemHaystack(item);
  const match = Object.entries(CLUSTERS)
    .filter(([key]) => key !== "all")
    .map(([key, value]) => ({ key, score: value.terms.filter((term) => haystack.includes(term)).length }))
    .sort((a, b) => b.score - a.score)[0];
  return match?.score ? match.key : "interface";
}

function renderFilters() {
  const filterList = document.querySelector("#filter-list");
  filterList.innerHTML = Object.entries(CLUSTERS).map(([key, cluster]) => `
    <button type="button" data-cluster="${key}" class="${activeCluster === key ? "is-active" : ""}" aria-pressed="${activeCluster === key}">${cluster.label}</button>
  `).join("");
  filterList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCluster = button.dataset.cluster;
      renderFilters();
      renderClippings();
    });
  });
}

function renderClippings() {
  const annualId = "2089562646739632142";
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = items.filter((item) => {
    if (item.id === annualId) return false;
    if (activeCluster !== "all" && itemCluster(item) !== activeCluster) return false;
    return words.every((word) => itemHaystack(item).includes(word));
  });

  document.querySelector("#result-count").textContent = `${filtered.length} ${filtered.length === 1 ? "clipping" : "clippings"}`;
  document.querySelector("#empty-state").hidden = filtered.length > 0;
  document.querySelector("#clipping-grid").innerHTML = filtered.map((item) => {
    const image = item.imgs?.[0];
    const cluster = CLUSTERS[itemCluster(item)].label;
    const handle = item.handle && item.handle !== "i" ? `@${item.handle}` : "Saved source";
    return `
      <article class="clipping-card ${image ? "" : "is-text-only"}">
        <a href="${item.url}" target="_blank" rel="noreferrer">
          ${image ? `<div class="clipping-image"><img src="${image}" alt="" loading="lazy"></div>` : ""}
          <div class="clipping-meta"><span>${cluster}</span><span>${item.date || "Undated"}</span></div>
          <h3>${escapeHtml(itemTitle(item))}</h3>
          <p>${escapeHtml(itemBody(item))}</p>
          <div class="clipping-meta"><span>${escapeHtml(handle)}</span><span>Source ↗</span></div>
        </a>
      </article>
    `;
  }).join("");
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value || "";
  return element.innerHTML;
}

async function loadArchive() {
  try {
    const response = await fetch("/inspo/data.json");
    if (!response.ok) throw new Error(`Archive request failed: ${response.status}`);
    items = await response.json();
  } catch (error) {
    console.error(error);
    items = [];
  }
  document.querySelectorAll(".thread-link[data-filter]").forEach((button) => {
    const count = items.filter((item) => item.id !== "2089562646739632142" && itemCluster(item) === button.dataset.filter).length;
    button.querySelector(".thread-total").textContent = String(count).padStart(2, "0");
  });
  renderFilters();
  renderClippings();
}

document.querySelector("#previous-case").addEventListener("click", () => selectCase(selectedCase - 1, false, true));
document.querySelector("#next-case").addEventListener("click", () => selectCase(selectedCase + 1, false, true));
document.querySelector("#archive-search").addEventListener("input", (event) => {
  query = event.target.value;
  renderClippings();
});

caseStrip.addEventListener("keydown", (event) => {
  const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
  if (!keys.includes(event.key)) return;
  event.preventDefault();
  const nextIndex = event.key === "Home"
    ? 0
    : event.key === "End"
      ? CASES.length - 1
      : selectedCase + (event.key === "ArrowRight" ? 1 : -1);
  selectCase(nextIndex, false, true);
  caseStrip.querySelector(`[data-case="${selectedCase}"]`)?.focus();
});

document.querySelectorAll(".thread-link").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".thread-link").forEach((threadButton) => {
      const isCurrent = threadButton === button;
      threadButton.classList.toggle("is-active", isCurrent);
      if (isCurrent) threadButton.setAttribute("aria-current", "true");
      else threadButton.removeAttribute("aria-current");
    });
    if (button.dataset.thread === "annual-reports") {
      document.querySelector("#thread-title").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    activeCluster = button.dataset.filter;
    renderFilters();
    renderClippings();
    document.querySelector("#clippings").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector("#image-button").addEventListener("click", () => {
  document.querySelector("#dialog-image").src = readingImage.src;
  document.querySelector("#dialog-image").alt = readingImage.alt;
  imageDialog.showModal();
});
document.querySelector("#dialog-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

renderCases();
selectCase(0);
loadArchive();
