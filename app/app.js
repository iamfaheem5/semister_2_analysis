/* Sem 2 Notes — self-contained vault reader (no dependencies; KaTeX optional). */
(function () {
  "use strict";

  var view = document.getElementById("view");
  var backBtn = document.getElementById("backbtn");
  var topTitle = document.getElementById("topbar-title");
  var search = document.getElementById("search");

  var courses = [
    { id: "CSE_1201", name: "CSE-1201 · Fundamentals of Programming" },
    { id: "CSE_1202", name: "CSE-1202 · Digital Logic Design" },
    { id: "PHY_1203", name: "PHY-1203 · Physics" },
    { id: "MATH_1204", name: "MATH-1204 · Integration, Diff. Equations & Series" },
    { id: "ENG_1205", name: "ENG-1205 · Developing English Skills" }
  ];

  /* ---------------- Markdown rendering ---------------- */

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Resolve a link target relative to the current note into a #/n/... route
  // when it points at a known note, otherwise leave it as a plain URL.
  function linkHref(href, notePath) {
    if (/^https?:|^mailto:|^#/.test(href)) return href;
    var clean = href.split("#")[0];
    if (/\.md$/i.test(clean)) {
      var parts = notePath.split("/");
      parts.pop();
      clean.replace(/^\.\//, "").split("/").forEach(function (seg) {
        if (seg === "..") parts.pop();
        else if (seg && seg !== ".") parts.push(seg);
      });
      var target = parts.join("/");
      if (window.VAULT.notes.some(function (n) { return n.p === target; })) return "#/n/" + target;
    }
    return href;
  }

  function renderMd(src, notePath) {
    var stash = [];
    function keep(html) { stash.push(html); return "\u0000" + (stash.length - 1) + "\u0000"; }

    // 1. Pull out math and fenced code first so their contents never get
    //    mangled by markdown (LaTeX is full of _ * \ chars).
    src = src.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, function (m) {
      return keep("<pre><code>" + esc(m.replace(/^```[a-z]*\n?|~~~\n?|```$|~~~$/g, "")) + "</code></pre>");
    });
    src = src.replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) {
      return keep('<span class="katex-block" data-tex="' + esc(tex) + '"></span>');
    });
    src = src.replace(/\$([^$\n]+?)\$/g, function (_, tex) {
      return keep('<span class="katex-inline" data-tex="' + esc(tex) + '"></span>');
    });
    src = src.replace(/`([^`\n]+?)`/g, function (_, code) {
      return keep("<code>" + esc(code) + "</code>");
    });

    // 2. Block-level pass, line by line.
    var lines = src.split("\n");
    var out = [], i, listStack = [];
    function closeLists() {
      while (listStack.pop()) out.push("</ul>");
    }
    function inline(s) {
      s = esc(s);
      s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, function (_, txt, href) {
        return '<a href="' + esc(linkHref(href, notePath)) + '">' + txt + "</a>";
      });
      s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      s = s.replace(/__([^_]+)__/g, "<strong>$1</strong>");
      s = s.replace(/(^|[\s(])\*([^*\n]+)\*/g, "$1<em>$2</em>");
      s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
      return s;
    }
    function para(s) { return s.trim() ? "<p>" + inline(s) + "</p>" : ""; }

    for (i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/^\s*$/.test(line)) { closeLists(); continue; }
      if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) { closeLists(); out.push("<hr>"); continue; }
      var h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) { closeLists(); var lv = h[1].length; out.push("<h" + lv + ">" + inline(h[2]) + "</h" + lv + ">"); continue; }
      if (/^>/.test(line)) {
        closeLists();
        var q = [];
        while (i < lines.length && /^>/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, "")); i++; }
        i--;
        out.push("<blockquote>" + q.map(para).join("") + "</blockquote>");
        continue;
      }
      if (/^\|/.test(line) && i + 1 < lines.length && /^\|?[\s:|-]+\|/.test(lines[i + 1]) && lines[i + 1].indexOf("-") >= 0) {
        closeLists();
        function cells(l) { return l.replace(/^\||\|$/g, "").split("|").map(function (c) { return inline(c.trim()); }); }
        var head = cells(line);
        i += 2;
        var rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) { rows.push(cells(lines[i])); i++; }
        i--;
        var t = "<table><thead><tr>" + head.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>";
        rows.forEach(function (r) { t += "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; });
        out.push(t + "</tbody></table>");
        continue;
      }
      var mUl = line.match(/^(\s*)[-*+]\s+(.*)$/);
      var mOl = line.match(/^(\s*)(\d+)[.)]\s+(.*)$/);
      if (mUl || mOl) {
        var indent = Math.floor((mUl || mOl)[1].length / 2);
        while (listStack.length > indent) { out.push("</ul>"); listStack.pop(); }
        while (listStack.length <= indent) { out.push("<ul>"); listStack.push(1); }
        var itemText = mOl ? mOl[2] + ". " + mOl[3] : mUl[2];
        out.push("<li>" + inline(itemText) + "</li>");
        continue;
      }
      closeLists();
      var buf = [line];
      while (i + 1 < lines.length && !/^\s*$/.test(lines[i + 1]) && !/^(#{1,4}\s|>|\||\s*[-*+]\s|\s*\d+[.)]\s)/.test(lines[i + 1])) {
        buf.push(lines[++i]);
      }
      out.push(para(buf.join(" ")));
    }
    closeLists();
    var html = out.join("\n");
    html = html.replace(/\u0000(\d+)\u0000/g, function (_, idx) { return stash[+idx]; });
    return html;
  }

  function renderMath(root) {
    if (!window.katex) return; // offline without vendored KaTeX: raw LaTeX shows as plain text
    root.querySelectorAll("[data-tex]").forEach(function (el) {
      var display = el.classList.contains("katex-block");
      try { el.innerHTML = katex.renderToString(el.getAttribute("data-tex"), { displayMode: display, throwOnError: false }); }
      catch (e) { el.textContent = el.getAttribute("data-tex"); }
    });
  }

  /* ---------------- Views ---------------- */

  function noteLink(p, title) {
    var n = window.VAULT.notes.find(function (x) { return x.p === p; });
    return '<a class="list-item" href="#/n/' + p + '">' + esc(title || n.t) +
      '<span class="sub">' + esc(p) + "</span></a>";
  }

  function homeView() {
    topTitle.textContent = "Sem 2 Notes";
    backBtn.hidden = true;
    search.hidden = false;
    var html = '<div class="group-h">Guides &amp; Indexes</div>';
    window.VAULT.notes.filter(function (n) { return n.p.indexOf("/") < 0; }).forEach(function (n) {
      html += noteLink(n.p);
    });
    html += '<div class="group-h">Courses</div>';
    courses.forEach(function (c) {
      var count = window.VAULT.notes.filter(function (n) { return n.p.indexOf(c.id + "/") === 0; }).length;
      html += '<a class="list-item" href="#/c/' + c.id + '">' + esc(c.name) +
        '<span class="badge">' + count + " notes</span><span class=\"sub\">" + c.id + "</span></a>";
    });
    html += '<div class="group-h">Previous Year Questions (PDF)</div>';
    window.VAULT.papers.forEach(function (p) {
      html += '<a class="list-item" href="' + p + '">' + esc(p.split("/").pop()) +
        '<span class="sub">' + esc(p) + "</span></a>";
    });
    view.innerHTML = html;
    view.className = "";
  }

  function courseView(id) {
    var c = courses.find(function (x) { return x.id === id; });
    if (!c) { location.hash = "#/"; return; }
    topTitle.textContent = c.name;
    backBtn.hidden = false;
    search.hidden = true;
    var notes = window.VAULT.notes.filter(function (n) { return n.p.indexOf(id + "/") === 0; });
    var groups = {};
    notes.forEach(function (n) {
      var g = n.p.split("/");
      g.pop();
      g = g.slice(1).join("/") || "General";
      (groups[g] = groups[g] || []).push(n);
    });
    var html = "";
    Object.keys(groups).sort().forEach(function (g) {
      html += '<div class="group-h">' + esc(g.replace(/_/g, " ")) + "</div>";
      groups[g].forEach(function (n) { html += noteLink(n.p); });
    });
    view.innerHTML = html;
    view.className = "";
  }

  function noteView(path) {
    var n = window.VAULT.notes.find(function (x) { return x.p === path; });
    if (!n) { location.hash = "#/"; return; }
    topTitle.textContent = n.t;
    backBtn.hidden = false;
    search.hidden = true;
    view.className = "note";
    view.innerHTML = renderMd(n.b, path);
    renderMath(view);
    window.scrollTo(0, 0);
  }

  function searchView(q) {
    var needle = q.toLowerCase();
    topTitle.textContent = "Search";
    backBtn.hidden = false;
    var html = "";
    window.VAULT.notes.forEach(function (n) {
      var hay = (n.t + "\n" + n.b).toLowerCase();
      var at = hay.indexOf(needle);
      if (at < 0) return;
      var raw = n.b.slice(Math.max(0, at - 60), at + 90).replace(/\s+/g, " ");
      var snip = esc(raw).replace(new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), "<mark>$&</mark>");
      html += noteLink(n.p) + '<div class="snippet">&hellip;' + snip + "&hellip;</div>";
    });
    view.innerHTML = html || '<p style="color:var(--muted)">No matches for &ldquo;' + esc(q) + "&rdquo;.</p>";
    view.className = "";
  }

  /* ---------------- Router ---------------- */

  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    search.value = "";
    if (h === "") homeView();
    else if (h.indexOf("c/") === 0) courseView(h.slice(2));
    else if (h.indexOf("n/") === 0) noteView(h.slice(2));
    else homeView();
  }
  window.addEventListener("hashchange", route);

  search.addEventListener("input", function () {
    var q = search.value.trim();
    if (q.length < 2) { route(); return; }
    searchView(q);
  });
  backBtn.addEventListener("click", function () { history.back(); });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  route();
})();
