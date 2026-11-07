(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var WA = "249122477299";
  var EMAIL = "xtremecapabilities@gmail.com";

  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services", "nav.sectors": "Sectors",
    "nav.process": "How we work", "nav.about": "About", "nav.faq": "FAQ", "nav.contact": "Contact",
    "nav.work": "Our work",
    "work.title": "Our work",
    "work.intro": "Projects we have delivered in River Nile, Khartoum, Red Sea and Northern states.",
    "pj1.place": "Haya, Red Sea State", "pj1.t": "Masader Petroleum fuel depot",
    "pj1.d": "Setting out fuel tank centres with a total station, and a grid levelling survey of the depot site.",
    "pj1.alt": "Surveyor carrying a total station prism at the Haya fuel depot site",
    "pj2.place": "Al-Hudi, Atbara River", "pj2.t": "Natba Petroleum tank site",
    "pj2.d": "Survey works for the site: setting out the perimeter fence points and fixing the corners precisely.",
    "pj2.alt": "Natba Petroleum tank site after the points were set out",
    "pj3.place": "Al-Golid, Northern State", "pj3.t": "Partners of Success agricultural cooperative",
    "pj3.d": "Planning and setting out a 1,500-feddan agricultural project.",
    "pj3.alt": "Surveyor behind a total station on the agricultural project land",
    "pj4.place": "Al-Qasr Street, Khartoum", "pj4.t": "Comboni College buildings",
    "pj4.d": "Measured survey of the buildings and new as-built drawings.",
    "pj4.alt": "Total station in front of one of the college buildings",
    "pj5.place": "Atbara, River Nile State", "pj5.t": "Commercial Land Port complex",
    "pj5.d": "Measured survey of three buildings and their as-built drawings.",
    "pj5.alt": "Survey team inside one of the complex buildings",
    "pj6.place": "University of Khartoum", "pj6.t": "Practical training for surveying engineering students",
    "pj6.d": "A course on processing field data and producing office outputs, with the Geomatics Engineering Students Society (GESS), for second- and third-year students.",
    "pj6.alt": "Surveying engineering students in a training session at the University of Khartoum",
    "more.title": "Other work",
    "mw1.t": "Construction setting out", "mw1.d": "Column footings and offsets, steel sheds and pile centres, in Atbara, Ad-Damer, Berber and Al-Udayra.",
    "mw2.t": "Excavation and levels", "mw2.d": "Excavation limits and levels for basements and ground slabs, in Ad-Damer, Atbara and Omdurman.",
    "mw3.t": "Land planning", "mw3.d": "Designing, planning and setting out a land subdivision in Atbara, and a school boundary wall in Az-Zeidab.",
    "mw4.t": "Grid levelling", "mw4.d": "A grid levelling survey of a 10,000 m² plot in Ad-Damer.",
    "more.fb": "More of our work on Facebook",
    "profile.download": "Download our company profile (PDF, 2 MB)",
    "c.profile": "Company profile", "c.profile_link": "Download PDF (2 MB)",
    "faq.title": "Frequently asked questions",
    "faq.intro": "Quick answers to what we are usually asked before a project starts. For anything else, message us on WhatsApp.",
    "q1": "What determines the price of a survey?",
    "a1": "The size of the site and its terrain, the accuracy you need, the deliverables, and where the project is and how easy it is to reach. We send a quote once we know these details.",
    "q2": "How long does a project take?",
    "a2": "It depends on the size and location of the work. Our quote states the fieldwork period and the delivery date.",
    "q3": "What accuracy do you provide?",
    "a3": "It depends on the method and instrument: RTK and total station surveys reach centimetre-level accuracy, while satellite imagery suits studies over large areas. We agree the required accuracy with you before we start.",
    "q4": "What formats do you deliver in?",
    "a4": "DWG and DXF drawings, GIS data as Shapefile, Geodatabase and KML, coordinate tables in Excel or CSV, and PDF maps for printing. We deliver in the coordinate system your team uses.",
    "q5": "Do you work outside Khartoum?",
    "a5": "Yes, we provide our services in all states of Sudan.",
    "q6": "Can the work be done without visiting the site?",
    "a6": "Some work, such as satellite image analysis and maps from existing data, can be done remotely. Precise surveying needs fieldwork.",
    "q7": "What do you need from me to start?",
    "a7": "The project location (coordinates, a map link or a description), the type of work, the deliverables you need, and any drawings or documents you already have.",
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
    "sec3.t": "Oil and mining", "sec3.d": "Surveying and setting out fuel depots and petroleum facilities, and topographic surveys of mine sites and concession boundaries.",
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
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var AR = {};
  nodes.forEach(function (n) { AR[n.getAttribute("data-i18n")] = n.innerHTML; });
  altNodes.forEach(function (n) { AR[n.getAttribute("data-i18n-alt")] = n.getAttribute("alt"); });

  function setLang(lang) {
    var dict = lang === "en" ? EN : AR;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (dict[k] !== undefined) n.innerHTML = dict[k];
    });
    altNodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n-alt");
      if (dict[k] !== undefined) n.setAttribute("alt", dict[k]);
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
