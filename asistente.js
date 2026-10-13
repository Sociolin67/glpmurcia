/* ============================================================
   Asistente guiado — Gran Logia Provincial de Murcia
   glpmurcia.com · archivo autónomo (textos, estilo y funcionamiento)

   Uso: añadir antes de </body> en cada página:
     <script src="asistente.js" defer></script>

   Idioma: se toma de <html lang="es"> o <html lang="en">.
   Para cambiar una pregunta o respuesta, editar solo el bloque TEXTOS.
   No envía datos a ningún sitio ni usa cookies.
   ============================================================ */
(function () {
  'use strict';
  if (window.__glpAsistente) return;
  window.__glpAsistente = true;

  /* ---------------- TEXTOS ---------------- */
  var TEXTOS = {
    es: {
      boton: '¿Le orientamos?', cerrar: 'Cerrar',
      titulo: '¿En qué podemos orientarle?', sub: 'Elija una pregunta',
      saludo: 'Bienvenido a la web de la Gran Logia Provincial de Murcia. Elija una de estas preguntas y le indicaremos dónde encontrar la respuesta.',
      otra: 'Otra pregunta', pie: 'Respuestas fijas, sin datos personales.', ir: 'Ir a',
      grupos: [
        { g: 'Conocer la masonería', q: [
          { p: '¿Qué es la masonería?',
            r: ['Es una fraternidad de hombres libres y de buenas costumbres que trabaja por la mejora personal y el servicio a los demás.',
                'En «Sobre la Masonería» encontrará su historia, los grados y las preguntas más frecuentes.'],
            l: ['masoneria.html', 'Sobre la Masonería'] },
          { p: '¿Qué logias hay y qué ritos trabajan?',
            r: ['Las logias de la Provincia trabajan los Ritos de Emulación, Escocés Antiguo y Aceptado, Francés y York, en español y en inglés.',
                'Cada logia tiene su ficha con número, rito, idioma y enlaces.'],
            l: ['logias.html', 'Logias'] },
          { p: '¿Qué órdenes masónicas hay en Murcia?',
            r: ['Bajo el amparo de la Provincia trabajan distintas órdenes, como Maestros Masones de la Marca, Marineros del Arca Real o el Monitor Secreto.',
                'Todas están descritas en la página Órdenes, con el «Rincón de los colaterales».'],
            l: ['ordenes.html', 'Órdenes'] }
        ]},
        { g: 'Dar un paso', q: [
          { p: '¿Cómo puedo ingresar?',
            r: ['Escríbanos por el formulario de contacto eligiendo el asunto «Interés en ingresar».',
                'Respondemos a todas las consultas en un plazo de 48 horas.'],
            l: ['contacto.html', 'Contáctenos'] },
          { p: 'Soy hermano: ¿cómo visito una logia?',
            r: ['Contacte en primera instancia con el Secretario de la logia, o use el formulario de contacto con el asunto «Visita como hermano».'],
            l: ['contacto.html', 'Contáctenos'] },
          { p: '¿Qué hace la Provincia en caridad?',
            r: ['La Provincia y sus logias colaboran con entidades sociales de la Región mediante donaciones y actos benéficos.'],
            l: ['caridad.html', 'Caridad'] }
        ]},
        { g: 'Usar la web', q: [
          { p: '¿Dónde leo las crónicas de las logias?',
            r: ['En «Vida de las Logias», dentro de la página Logias. Están ordenadas de la más reciente a la más antigua, y el botón «Ver cursos anteriores» abre el archivo.'],
            l: ['logias.html#vida-logias', 'Vida de las Logias'] },
          { p: '¿Cómo instalo la web en el móvil?',
            r: ['Puede añadirla a la pantalla de inicio y abrirla como una aplicación.'],
            pasos: ['<strong>Android:</strong> en Chrome, menú de tres puntos › «Añadir a pantalla de inicio».',
                    '<strong>iPhone:</strong> en Safari, botón Compartir › «Añadir a pantalla de inicio».'],
            l: ['index.html', 'Inicio'] },
          { p: 'Soy miembro: ¿dónde está el acceso?',
            r: ['El enlace «Acceso a Miembros» está al pie de la página de Inicio y conduce al portal privado de los hermanos.'],
            l: ['index.html', 'Inicio'] }
        ]}
      ]
    },
    en: {
      boton: 'Need a hand?', cerrar: 'Close',
      titulo: 'How can we help?', sub: 'Choose a question',
      saludo: 'Welcome to the website of the Provincial Grand Lodge of Murcia. Choose one of these questions and we will show you where to find the answer.',
      otra: 'Another question', pie: 'Fixed answers, no personal data.', ir: 'Go to',
      grupos: [
        { g: 'About Freemasonry', q: [
          { p: 'What is Freemasonry?',
            r: ['It is a fraternity of free men of good character, working for personal improvement and service to others.',
                '“About Freemasonry” covers its history, the degrees and the most frequently asked questions.'],
            l: ['masoneria-en.html', 'About Freemasonry'] },
          { p: 'Which lodges are there and which rites do they work?',
            r: ['The lodges of the Province work the Emulation, Ancient and Accepted Scottish, French and York Rites, in Spanish and English.',
                'Each lodge has its own card with number, rite, language and links.'],
            l: ['logias-en.html', 'Lodges'] },
          { p: 'Which Masonic Orders work in Murcia?',
            r: ['Several Orders work under the auspices of the Province, such as the Mark Master Masons, the Royal Ark Mariners and the Secret Monitor.',
                'They are all described on the Orders page, including the “Collateral Orders Corner”.'],
            l: ['ordenes-en.html', 'Orders'] }
        ]},
        { g: 'Taking a step', q: [
          { p: 'How can I join?',
            r: ['Write to us through the contact form, choosing the subject “Interest in joining”.',
                'We respond to all enquiries within 48 hours.'],
            l: ['contacto-en.html', 'Contact Us'] },
          { p: 'I am a Brother: how do I visit a lodge?',
            r: ['Please contact the lodge Secretary in the first instance, or use the contact form with the subject “Visit as a Brother”.'],
            l: ['contacto-en.html', 'Contact Us'] },
          { p: 'What does the Province do for charity?',
            r: ['The Province and its lodges support social organisations in the Region through donations and charitable events.'],
            l: ['caridad-en.html', 'Charity'] }
        ]},
        { g: 'Using the site', q: [
          { p: 'Where can I read the lodge chronicles?',
            r: ['In “Lodge Life”, on the Lodges page. They run from the most recent to the oldest, and the “Previous years” button opens the archive.'],
            l: ['logias-en.html#lodge-life', 'Lodge Life'] },
          { p: 'How do I install the site on my phone?',
            r: ['You can add it to your home screen and open it like an app.'],
            pasos: ['<strong>Android:</strong> in Chrome, three-dot menu › “Add to Home screen”.',
                    '<strong>iPhone:</strong> in Safari, Share button › “Add to Home Screen”.'],
            l: ['index-en.html', 'Home'] },
          { p: 'I am a member: where is the login?',
            r: ['The “Members Access” link is at the foot of the Home page and leads to the private portal for the Brethren.'],
            l: ['index-en.html', 'Home'] }
        ]}
      ]
    }
  };

  /* ---------------- ESTILO (todo con prefijo glpa-) ---------------- */
  var CSS = [
    '#glpa-boton,#glpa-panel,#glpa-panel *{box-sizing:border-box}',
    '#glpa-boton{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:900;display:flex;align-items:center;gap:.6rem;margin:0;background:#0D1B2A;color:#F7F3EC;border:1px solid #C9A84C;border-radius:999px;padding:.65rem 1.05rem .65rem .75rem;font-family:"Lato",Arial,sans-serif;font-size:.82rem;font-weight:400;letter-spacing:.06em;line-height:1;cursor:pointer;box-shadow:0 8px 24px rgba(13,27,42,.25)}',
    '#glpa-boton:hover{background:#1A2F45}',
    '#glpa-boton .glpa-sello{width:28px;height:28px;border-radius:50%;background:#C9A84C;color:#0D1B2A;display:flex;align-items:center;justify-content:center;font-family:"Cinzel",Georgia,serif;font-size:1rem}',
    '#glpa-panel{position:fixed;right:20px;bottom:calc(84px + env(safe-area-inset-bottom,0px));z-index:900;width:380px;max-width:calc(100vw - 32px);max-height:min(600px,calc(100vh - 120px));display:flex;flex-direction:column;background:#FFFDF8;color:#1C2B3A;border:1px solid #E2D8C4;border-radius:14px;box-shadow:0 18px 50px rgba(13,27,42,.22);overflow:hidden;font-family:"Lato",Arial,sans-serif;text-align:left}',
    '#glpa-panel[hidden]{display:none!important}',
    '#glpa-panel .glpa-cab{background:#0D1B2A;color:#F7F3EC;padding:1rem 1.1rem;display:flex;align-items:center;gap:.8rem}',
    '#glpa-panel .glpa-cab .glpa-sello{width:36px;height:36px;flex:none;border-radius:50%;border:1px solid #C9A84C;color:#C9A84C;display:flex;align-items:center;justify-content:center;font-family:"Cinzel",Georgia,serif}',
    '#glpa-panel .glpa-titulo{font-family:"Cinzel",Georgia,serif;font-weight:600;font-size:.95rem;letter-spacing:.05em;margin:0;color:#F7F3EC;line-height:1.3}',
    '#glpa-panel .glpa-sub{margin:.15rem 0 0;font-size:.75rem;color:#B9B2A3;line-height:1.3}',
    '#glpa-panel .glpa-cuerpo{flex:1;min-height:0;overflow-y:auto;padding:1rem 1rem .5rem;display:flex;flex-direction:column;gap:.7rem}',
    '#glpa-panel .glpa-msg{max-width:88%;padding:.65rem .85rem;border-radius:12px;font-size:.9rem;line-height:1.5}',
    '#glpa-panel .glpa-msg p{margin:0}',
    '#glpa-panel .glpa-msg p+p,#glpa-panel .glpa-msg ol{margin-top:.45rem}',
    '#glpa-panel .glpa-msg ol{padding-left:1.1rem;margin-bottom:0}',
    '#glpa-panel .glpa-bot{background:#F1EADC;color:#1C2B3A;border-top-left-radius:4px;align-self:flex-start}',
    '#glpa-panel .glpa-yo{background:#1A2F45;color:#F7F3EC;border-top-right-radius:4px;align-self:flex-end}',
    '#glpa-panel .glpa-ir{display:inline-block;margin-top:.6rem;font-size:.74rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A6126;text-decoration:none;border-bottom:1px solid #C9A84C}',
    '#glpa-panel .glpa-ir:hover{color:#1C2B3A}',
    '#glpa-panel .glpa-opciones{display:flex;flex-direction:column;gap:.4rem;padding:.2rem 0 .4rem}',
    '#glpa-panel .glpa-grupo{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:#8A6126;margin:.5rem 0 .1rem;font-weight:700}',
    '#glpa-panel .glpa-op{display:block;width:100%;margin:0;text-align:left;background:#FFFDF8;border:1px solid #E2D8C4;border-radius:8px;padding:.55rem .75rem;font-family:inherit;font-size:.88rem;font-weight:400;line-height:1.4;letter-spacing:0;text-transform:none;color:#1C2B3A;cursor:pointer}',
    '#glpa-panel .glpa-op:hover{border-color:#C9A84C;background:#FBF6EA}',
    '#glpa-panel .glpa-pie{border-top:1px solid #E2D8C4;padding:.6rem 1rem;display:flex;justify-content:space-between;align-items:center;gap:.5rem;font-size:.74rem;color:#4A5868}',
    '#glpa-panel .glpa-volver{white-space:nowrap;flex:none;background:none;border:0;margin:0;padding:.2rem 0;font-family:inherit;font-size:.74rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A6126;cursor:pointer}',
    '#glpa-panel .glpa-volver[hidden]{display:none!important}',
    '#glpa-boton:focus-visible,#glpa-panel button:focus-visible,#glpa-panel a:focus-visible{outline:2px solid #C9A84C;outline-offset:3px}',
    '@media (prefers-reduced-motion:no-preference){#glpa-panel:not([hidden]){animation:glpa-sube .22s ease-out}@keyframes glpa-sube{from{opacity:.4;transform:translateY(8px)}to{opacity:1;transform:none}}}',
    '@media (max-width:760px){#glpa-panel{right:16px;left:16px;width:auto;max-width:none}#glpa-boton{right:16px}}'
  ].join('\n');

  /* ---------------- FUNCIONAMIENTO ---------------- */
  function iniciar() {
    var lang = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase() === 'en' ? 'en' : 'es';
    var t = TEXTOS[lang];

    var estilo = document.createElement('style');
    estilo.id = 'glpa-estilo';
    estilo.textContent = CSS;
    document.head.appendChild(estilo);

    function el(tag, cls, txt) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (txt != null) e.textContent = txt;
      return e;
    }

    // Panel
    var panel = el('div');
    panel.id = 'glpa-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-labelledby', 'glpa-titulo');
    panel.hidden = true;

    var cab = el('div', 'glpa-cab');
    var sello = el('span', 'glpa-sello', '∴'); sello.setAttribute('aria-hidden', 'true');
    var tit = el('div');
    var h = el('p', 'glpa-titulo', t.titulo); h.id = 'glpa-titulo';
    tit.appendChild(h); tit.appendChild(el('p', 'glpa-sub', t.sub));
    cab.appendChild(sello); cab.appendChild(tit);

    var cuerpo = el('div', 'glpa-cuerpo');
    cuerpo.setAttribute('aria-live', 'polite');

    var pie = el('div', 'glpa-pie');
    pie.appendChild(el('span', '', t.pie));
    var volver = el('button', 'glpa-volver', '← ' + t.otra);
    volver.type = 'button'; volver.hidden = true;
    pie.appendChild(volver);

    panel.appendChild(cab); panel.appendChild(cuerpo); panel.appendChild(pie);

    // Botón
    var boton = el('button');
    boton.id = 'glpa-boton'; boton.type = 'button';
    boton.setAttribute('aria-controls', 'glpa-panel');
    boton.setAttribute('aria-expanded', 'false');
    var bs = el('span', 'glpa-sello', '∴'); bs.setAttribute('aria-hidden', 'true');
    var btxt = el('span', '', t.boton);
    boton.appendChild(bs); boton.appendChild(btxt);

    function burbuja(cls) {
      var d = el('div', 'glpa-msg ' + cls);
      cuerpo.appendChild(d);
      return d;
    }

    function menu() {
      cuerpo.innerHTML = '';
      burbuja('glpa-bot').appendChild(el('p', '', t.saludo));
      var box = el('div', 'glpa-opciones');
      t.grupos.forEach(function (g) {
        box.appendChild(el('div', 'glpa-grupo', g.g));
        g.q.forEach(function (q) {
          var b = el('button', 'glpa-op', q.p);
          b.type = 'button';
          b.addEventListener('click', function () { responder(q); });
          box.appendChild(b);
        });
      });
      cuerpo.appendChild(box);
      volver.hidden = true;
      cuerpo.scrollTop = 0;
    }

    function responder(q) {
      cuerpo.innerHTML = '';
      burbuja('glpa-yo').appendChild(el('p', '', q.p));
      var b = burbuja('glpa-bot');
      q.r.forEach(function (x) { b.appendChild(el('p', '', x)); });
      if (q.pasos) {
        var ol = el('ol');
        q.pasos.forEach(function (x) { var li = el('li'); li.innerHTML = x; ol.appendChild(li); });
        b.appendChild(ol);
      }
      var a = el('a', 'glpa-ir', t.ir + ' ' + q.l[1] + ' →');
      a.href = q.l[0];
      b.appendChild(a);
      volver.hidden = false;
      volver.focus();
    }

    function abrir(si) {
      panel.hidden = !si;
      boton.setAttribute('aria-expanded', si ? 'true' : 'false');
      btxt.textContent = si ? t.cerrar : t.boton;
      if (si) { menu(); var p = cuerpo.querySelector('.glpa-op'); if (p) p.focus(); }
    }

    boton.addEventListener('click', function () { abrir(panel.hidden); });
    volver.addEventListener('click', function () { menu(); var p = cuerpo.querySelector('.glpa-op'); if (p) p.focus(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { abrir(false); boton.focus(); }
    });

    document.body.appendChild(panel);
    document.body.appendChild(boton);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
