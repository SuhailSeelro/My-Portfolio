/* Renders index.html entirely from SITE_DATA (data.js). */
(function () {
  const d = SITE_DATA;

  // ---- Hero ----
  document.getElementById("hero-lede").textContent = d.tagline;
  document.getElementById("hero-location").textContent = d.location;
  document.getElementById("footer-name").textContent =
    `© ${new Date().getFullYear()} ${d.name}`;

  const stats = [
    { b: String(d.projects.length).padStart(2, "0"), s: "Projects shipped" },
    { b: String(d.certificates.length).padStart(2, "0"), s: "Certificates earned" },
    { b: "2", s: "Platforms — Web & Unity" },
  ];
  document.getElementById("hero-stats").innerHTML = stats
    .map((s) => `<div class="stat"><b>${s.b}</b><span>${s.s}</span></div>`)
    .join("");

  // ---- Expertise ----
  document.getElementById("expertise-grid").innerHTML = d.expertise
    .map(
      (e, i) => `
      <div class="expertise-card">
        <div class="expertise-index">${String(i + 1).padStart(2, "0")} /</div>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>`
    )
    .join("");

  // ---- Skills ----
  document.getElementById("skills-groups").innerHTML = d.skillGroups
    .map(
      (g) => `
      <div>
        <div class="skill-group-label">${g.group}</div>
        <div class="skill-chips">
          ${g.skills.map((s) => `<span class="chip">${s}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  // ---- Projects ----
  document.getElementById("project-list").innerHTML = d.projects
    .map((p, i) => {
      const isWeb = /web|website/i.test(p.platform) || p.category === "Website";
      return `
      <div class="project-row">
        <div class="project-num">${String(i + 1).padStart(2, "0")}</div>
        <div class="project-main">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
        </div>
        <div class="project-meta">
          <span class="tag ${isWeb ? "platform-web" : ""}">${p.platform}</span>
          <span class="cat">${p.category}</span>
        </div>
        <a class="project-link" href="${p.repo}" target="_blank" rel="noopener">View repo ↗</a>
      </div>`;
    })
    .join("");

  // ---- Certificates ----
  document.getElementById("cert-shelf").innerHTML = d.certificates
    .map(
      (c) => `
      <div class="cert-card">
        <button class="cert-thumb" data-title="${c.title}"
                data-img="assets/certificates/${c.file}-1.png" style="border:0;padding:0;cursor:pointer;width:100%">
          <img src="assets/certificates/${c.file}-1.png" alt="${c.title} certificate preview" loading="lazy">
        </button>
        <div class="cert-body">
          <h4>${c.title}</h4>
          <span class="cert-issuer">${c.issuer}</span>
          <a class="cert-dl" href="assets/certificates/pdf/${c.file}.pdf" download>Download PDF ↓</a>
        </div>
      </div>`
    )
    .join("");

  // ---- Contact ----
  const c = d.contact;
  const contactItems = [
    { label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s+/g, "")}` },
    { label: "WhatsApp", value: c.whatsapp, href: `https://wa.me/${c.whatsapp.replace(/[^\d]/g, "")}` },
    { label: "Email (personal)", value: c.emailPersonal, href: `mailto:${c.emailPersonal}` },
    { label: "Email (university)", value: c.emailEducation, href: `mailto:${c.emailEducation}` },
    { label: "LinkedIn", value: "in/suhail-ahmed", href: c.linkedin },
    { label: "GitHub", value: "SuhailSeelro", href: c.github },
  ];
  document.getElementById("contact-grid").innerHTML = contactItems
    .map(
      (i) => `
      <a class="contact-card" href="${i.href}" target="_blank" rel="noopener">
        <span class="contact-label">${i.label}</span>
        <span class="contact-value">${i.value}</span>
      </a>`
    )
    .join("");

  // ---- Lightbox ----
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");

  document.getElementById("cert-shelf").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-img]");
    if (!btn) return;
    lightboxImg.src = btn.dataset.img;
    lightboxImg.alt = btn.dataset.title;
    lightboxTitle.textContent = btn.dataset.title;
    lightbox.classList.add("open");
  });

  function closeLightbox() { lightbox.classList.remove("open"); }
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  // ---- Mobile nav toggle (simple: reuse links list via native scroll) ----
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth <= 760) {
    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.textContent = "Menu";
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      const open = navLinks.style.display === "flex";
      navLinks.style.display = open ? "none" : "flex";
      navLinks.style.cssText += open
        ? ""
        : "position:absolute;top:68px;left:0;right:0;background:#171A21;flex-direction:column;padding:20px 28px;border-bottom:1px solid #2B303B;";
      toggle.setAttribute("aria-expanded", String(!open));
    });
    document.querySelector(".nav .wrap").insertBefore(toggle, document.querySelector(".nav-cta"));
  }
})();
