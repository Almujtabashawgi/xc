(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var WA = "249122477299";
  var EMAIL = "xtremecapabilities@gmail.com";

  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services", "nav.sectors": "Sectors",
    "nav.process": "How we work", "nav.about": "About", "nav.contact": "Contact",
    "cta.whatsapp_short": "WhatsApp", "cta.quote": "Request a quote", "cta.services": "Browse services",
    "cta.whatsapp": "Message us on WhatsApp",
    "hero.title": "Engineering without limits,<br>capabilities without boundaries",
    "hero.lead": "We survey, analyse and map land with precision for agriculture, irrigation, infrastructure and mining projects across every state of Sudan.",
    "services.title": "What we do",
    "services.intro": "Four connected services: we collect data in the field, process and analyse it, and deliver it in the formats your team already works with.",
    "s1.title": "Land surveying",
    "s1.body": "Topographic surveys, setting out, boundaries and levels with total stations, RTK GNSS and levels, for roads, canals, buildings and land plots.",
    "s1.deliv": "Delivered as: DWG drawings, coordinate schedules, survey reports",
    "s2.title": "Geographic information systems",
    "s2.body": "Geodatabases, spatial analysis and thematic maps that support planning and decision-making.",
    "s2.deliv": "Delivered as: Geodatabase and Shapefile, PDF maps, analysis boards",
    "s3.title": "Remote sensing",
    "s3.body": "Satellite and drone imagery analysis to monitor farmland, change, damage and terrain models.",
    "s3.deliv": "Delivered as: orthorectified imagery, elevation models, change maps",
    "s4.title": "Engineering consultancy",
    "s4.body": "Technical support for infrastructure and irrigation projects, from scoping the survey work to reviewing the outputs.",
    "s4.deliv": "Delivered as: technical reports, reviews, recommendations",
    "sectors.title": "Sectors we serve",
    "sec1.t": "Agriculture and irrigation", "sec1.d": "Canal surveys and desilting quantities, irrigated-land and level analysis.",
    "sec2.t": "Reconstruction and infrastructure", "sec2.d": "Base maps, damage inventories and site surveys for roads, bridges and public buildings.",
    "sec3.t": "Mining", "sec3.d": "Topographic surveys of mine sites, concession boundaries and satellite image analysis.",
    "sec4.t": "NGOs and development", "sec4.d": "Needs mapping, coordinate-based field verification and project spatial databases.",
    "sec5.t": "Government", "sec5.d": "Planning maps and land and service information systems for localities and states.",
    "sec6.t": "Investors and individuals", "sec6.d": "Plot setting out and site surveys before design and construction.",
    "process.title": "How we work",
    "p1.t": "Scoping", "p1.d": "We understand the project, the accuracy you need and the delivery formats, and send a clear quote.",
    "p2.t": "Fieldwork", "p2.d": "Surveys with calibrated instruments, drone flights, or satellite image acquisition.",
    "p3.t": "Processing and analysis", "p3.d": "We process and check the data, and build maps and analyses in ArcGIS Pro and QGIS.",
    "p4.t": "Delivery and support", "p4.d": "We deliver in the agreed formats and answer your team's questions afterwards.",
    "eq.title": "Equipment and software",
    "eq.intro": "We use surveying instruments from well-known international manufacturers, calibrated regularly.",
    "eq1.t": "In the field", "eq1.d": "Total stations, GNSS RTK systems, levels",
    "eq2.t": "From the air and space", "eq2.d": "Drones for aerial imaging, satellite imagery",
    "eq3.t": "In the office", "eq3.d": "ArcGIS Pro, QGIS, survey data processing software",
    "about.title": "About us",
    "about.p1": "Xtreme Capabilities for Engineering is a Sudanese company specialising in land surveying and GIS. We work with government bodies, organisations, companies and individuals across all states of Sudan.",
    "about.p2": "The company is built on precision and engineering reliability: spatial data you can depend on for planning, design and construction.",
    "gm.q": "“We help our clients reach the full potential of their projects, with the tools and expertise to turn data into decisions.”",
    "gm.sig": "<strong>Almujtaba Shawgi</strong>, General Manager",
    "vision.t": "Our vision", "vision.d": "To be the trusted partner for spatial data solutions that support sustainable development and the engineering sector in Sudan.",
    "mission.t": "Our mission", "mission.d": "To give our clients the most accurate spatial data and reliable GIS services, through a specialised engineering team and high quality standards.",
    "teams.t": "Our departments",
    "team1": "Management", "team2": "Land surveying team", "team3": "Data collection team", "team4": "GIS team",
    "contact.title": "Start your project with us",
    "contact.intro": "Send us the project location and the type of work, and we will reply with a quote.",
    "c.phone": "Phone", "c.email": "Email", "c.office": "Office", "c.city": "Khartoum, Sudan",
    "form.title": "Or write your request here",
    "form.name": "Name", "form.org": "Organisation or company (optional)", "form.service": "Service",
    "form.other": "Other", "form.details": "Project details and location",
    "form.error": "Add your name and the project details before sending.",
    "form.send_wa": "Send via WhatsApp", "form.send_mail": "Send by email",
    "form.hint": "Your request opens in WhatsApp or your email app, ready to send."
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var AR = {};
  nodes.forEach(function (n) { AR[n.getAttribute("data-i18n")] = n.innerHTML; });

  function setLang(lang) {
    var dict = lang === "en" ? EN : AR;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (dict[k] !== undefined) n.innerHTML = dict[k];
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    var t = document.getElementById("lang-toggle");
    t.textContent = lang === "en" ? "ع" : "EN";
    t.setAttribute("lang", lang === "en" ? "ar" : "en");
    t.setAttribute("aria-label", lang === "en" ? "التبديل إلى العربية" : "Switch to English");
    try { localStorage.setItem("xc-lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("xc-lang"); } catch (e) {}
  if (saved === "en") setLang("en");
  document.getElementById("lang-toggle").addEventListener("click", function () {
    setLang(document.documentElement.lang === "en" ? "ar" : "en");
  });

  // Mobile menu
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  });

  // Contact form: compose the request and open WhatsApp or email
  var form = document.getElementById("contact-form");
  var err = document.getElementById("form-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var via = (e.submitter && e.submitter.value) || "wa";
    var f = form.elements;
    var name = f.name.value.trim(), details = f.details.value.trim();
    if (!name || !details) { err.hidden = false; (name ? f.details : f.name).focus(); return; }
    err.hidden = true;
    var en = document.documentElement.lang === "en";
    var lines = [
      (en ? "Name: " : "الاسم: ") + name,
      f.org.value.trim() ? (en ? "Organisation: " : "الجهة: ") + f.org.value.trim() : "",
      (en ? "Service: " : "الخدمة: ") + f.service.value,
      (en ? "Details: " : "التفاصيل: ") + details
    ].filter(Boolean).join("\n");
    if (via === "mail") {
      var subject = (en ? "Project request: " : "طلب مشروع: ") + f.service.value;
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines);
    } else {
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(lines), "_blank", "noopener");
    }
  });

  // Hero survey plan: measure each contour and draw it once, top to bottom
  var plan = document.querySelector(".hero-plan svg");
  if (plan) {
    plan.querySelectorAll(".plan-contours path").forEach(function (p) {
      var len = 0;
      try { len = p.getTotalLength(); } catch (e) {}
      p.style.setProperty("--len", Math.ceil(len + 2));
      var y = parseFloat(p.getAttribute("data-y") || "0");
      p.style.setProperty("--d", (y * 0.9).toFixed(2) + "s");
    });
    requestAnimationFrame(function () { plan.classList.add("drawn"); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
