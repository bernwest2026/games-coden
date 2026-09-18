document.addEventListener("DOMContentLoaded", () => {
  renderHallOfFame();
  wireSubdirectorySearch();
});


function renderHallOfFame() {
  const list = document.getElementById("hof-list");
  list.innerHTML = "";
  SITE_CONFIG.hallOfFame.forEach(({ title, url }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.textContent = title.toLowerCase();
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    list.appendChild(li);
  });
}


function getName(n) {
  return sha1(input = n + "bernwest2026\n");

}

function wireSubdirectorySearch() {
  const form = document.getElementById("subdir-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = getName(document.getElementById("subdir-input").value);
    console.log(query);
    if (!query) return;
    window.location.href = `archive.html#${slugify(query)}`;
  });
}

function slugify(path) {
  const s = path
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `dir-${s || "root"}`;
}
