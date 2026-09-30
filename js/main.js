/* Bloomin' Brass — page behaviour */

(function () {
  "use strict";

  const money = (n) => "$" + Number(n).toFixed(2);

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  if (typeof PRODUCTS === "undefined") return;

  /* ---------- Product cards ---------- */
  function card(p) {
    return (
      '<a class="product-card' + (p.sold ? " is-sold" : "") + '" href="product.html?id=' +
      encodeURIComponent(p.id) + '">' +
      '<div class="img-wrap">' +
      '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" width="600" height="600">' +
      (p.sold ? '<span class="badge">Sold</span>' : "") +
      "</div>" +
      '<div class="body">' +
      "<h3>" + escapeHtml(p.name) + "</h3>" +
      "<p>" + escapeHtml(p.description) + "</p>" +
      '<span class="price">' + (p.sold ? "Sold" : money(p.price)) + "</span>" +
      "</div></a>"
    );
  }

  const shopGrid = document.getElementById("shop-grid");
  if (shopGrid) {
    // Available pieces first, sold pieces after.
    const sorted = PRODUCTS.slice().sort((a, b) => Number(a.sold) - Number(b.sold));
    shopGrid.innerHTML = sorted.map(card).join("");
  }

  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    const featured = PRODUCTS.filter((p) => p.featured && !p.sold).slice(0, 3);
    featuredGrid.innerHTML = featured.map(card).join("");
  }

  /* ---------- Product detail page ---------- */
  const detail = document.getElementById("product-detail");
  if (detail) {
    const id = new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((x) => x.id === id);

    if (!p) {
      detail.innerHTML =
        '<div class="page-head" style="grid-column:1/-1">' +
        "<h1>Piece not found</h1>" +
        '<p class="lead">This piece may have found its home already.</p>' +
        '<p style="margin-top:2rem"><a class="btn" href="shop.html">Back to the collection</a></p></div>';
      return;
    }

    document.title = p.name + " — Bloomin' Brass";
    const crumb = document.getElementById("crumb-name");
    if (crumb) crumb.textContent = p.name;

    let action;
    if (p.sold) {
      action = '<span class="btn" aria-disabled="true">Sold</span>' +
        '<p class="note">This one has found its home. <a href="contact.html?about=' +
        encodeURIComponent(p.name) + '">Ask about something similar</a>.</p>';
    } else if (p.buyUrl) {
      action = '<a class="btn" href="' + escapeHtml(p.buyUrl) + '">Buy now</a>' +
        '<p class="note">Secure checkout. One of a kind — once it\'s gone, it\'s gone.</p>';
    } else {
      action = '<a class="btn" href="contact.html?about=' + encodeURIComponent(p.name) +
        '">Ask about this piece</a>' +
        '<p class="note">One of a kind — once it\'s gone, it\'s gone.</p>';
    }

    detail.innerHTML =
      '<div class="photo"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" width="600" height="600"></div>' +
      "<div>" +
      '<span class="eyebrow">One of a kind</span>' +
      "<h1>" + escapeHtml(p.name) + "</h1>" +
      '<div class="price">' + money(p.price) + "</div>" +
      '<p class="desc">' + escapeHtml(p.description) + "</p>" +
      '<ul class="specs">' +
      "<li><span>Metal</span><span>Reclaimed bullet jackets</span></li>" +
      (p.accents ? "<li><span>Accents</span><span>" + escapeHtml(p.accents) + "</span></li>" : "") +
      (p.earWire ? "<li><span>Findings</span><span>" + escapeHtml(p.earWire) + "</span></li>" : "") +
      "<li><span>Made</span><span>By hand, one pair at a time</span></li>" +
      "</ul>" +
      action +
      "</div>";
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const about = new URLSearchParams(location.search).get("about");
    if (about) {
      form.elements.topic.value = "A specific piece";
      form.elements.message.value = "Hi! I'm interested in the " + about + ".\n\n";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!SITE.email) {
        alert("The contact email hasn't been set up yet. Please check back soon!");
        return;
      }
      const f = form.elements;
      const subject = "[Bloomin' Brass] " + f.topic.value + " — " + f.name.value;
      const body = f.message.value + "\n\n— " + f.name.value + " (" + f.email.value + ")";
      location.href = "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
