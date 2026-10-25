# glpmurcia.com — instrucciones para Claude

Web estática bilingüe (ES/EN) de la Gran Logia Provincial de Murcia, publicada con GitHub Pages desde la rama `main`. Para cualquier tarea en este repositorio, cargar la skill **glpmurcia-web**, que contiene el flujo completo, el inventario, las normas editoriales y el validador `validar_glpm.py`.

## Reglas fijas

- Trabajar siempre sobre la versión actual del repositorio, nunca sobre copias de sesiones anteriores.
- Todo cambio se hace **en las dos versiones**: `pagina.html` y `pagina-en.html`, con el selector de idioma apuntando a la gemela.
- Mostrar el antes/después y **esperar la confirmación expresa** antes de hacer commit o push. Un commit por cambio o por fase.
- Validar con `validar_glpm.py` (modo `--comparar`) antes de publicar: 0 errores.
- Si hay cambios visuales, revisar en móvil (390 px) y escritorio (1280 px).

## CSS

1. Nunca `style=""` inline en `<nav>` ni en `.nav-mobile` (el logo usa `.nav-logo-img`).
2. `.nav-hamburger` y `.nav-mobile`, antes del `@media`.
3. El `@media` es lo último del `<style>`; toda regla nueva va delante.
4. `.nav-right { display:flex }`, oculto dentro del `@media`.

`ordenes.html` / `ordenes-en.html` tienen su propio juego de variables: tratarlas aparte.

## Estilo editorial

- Trato de **usted** siempre en español (textos, botones, formularios, metadatos).
- Relación con la Gran Logia de España: «perteneciente a» (EN: *belonging to*); nunca «parte de» ni *part of*.
- Logias **consagradas** (EN: *consecrated*), no «fundadas». Colaterales «bajo los auspicios de».
- Crónicas siempre en pasado. Sin nombres de hermanos ni fotografías suyas salvo indicación expresa.

## Imágenes y SEO

- Lado mayor ≤ 1600 px, JPG calidad 82, < 400 KB; nunca base64 en el HTML.
- `alt` en el idioma de la página; `loading="lazy" decoding="async"` salvo logo y primera imagen.
- Página nueva: partir de una existente, crear ES y EN, `canonical`, `hreflang` (es/en/x-default), Open Graph, y añadirla a `sitemap.xml`.
- Al cambiar archivos cacheados, subir `CACHE_NAME` en `service-worker.js`.

## Notas

- No tocar `CNAME`.
- Este repositorio es público: no subir material interno ni datos personales.
- La caché de GitHub Pages tarda hasta 10 minutos en reflejar los cambios.
