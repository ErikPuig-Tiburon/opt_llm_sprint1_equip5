
## 🌐 Projecte Montsià30 Web

### 📋 Descripció general

Aquest repositori conté la versió del **SPRINT 1** dels mòduls **LLM, DIGI, SOSTE i OPT** del curs **1r ASIX / 1r DAW**.
L’objectiu és desenvolupar una **aplicació web estàtica** per a l’associació **Montsià30**, una entitat d’empreses del Montsià que vol promoure la **digitalització de les PIMEs** i **l’acompliment dels Objectius de Desenvolupament Sostenible (ODS)**.

El web ofereix **informació, formularis de contacte i suggeriments, un espai de digitalització i una intranet bàsica**, amb un disseny senzill, responsive i fàcilment mantenible.

---

### 🗂 Estructura del projecte

- **Arrel del projecte**
  - **`index.html`**: pàgina principal amb accés als espais de **Digitalització**, **Sostenibilitat** (pendents futures ampliacions) i **Intranet**.
  - **`carrusel.html`**: espai de **Digitalització**, amb un carrusel d’eines i continguts explicatius (pàgines de suport dins la carpeta `html/`).
  - **`contactans.html`**: pàgina de **contacte** amb formulari.
  - **`sugerencies.html`**: pàgina de **suggeriments** amb formulari específic.
  - **`login.html`**: pantalla de **login** per accedir a la intranet.
  - **`intranet.html`**: pàgina d’**intranet**, amb llistat d’empreses i accés al formulari d’autodiagnosi.
- **Carpetes principals**
  - **`css/`**: fulls d’estil (`style.css`, `digi.css`, `login.css`, `intranet.css`) per a cada secció.
  - **`js/`**: fitxers JavaScript per al carrusel, el login i la interacció a la intranet.
  - **`html/`**: pàgines de contingut associades a l’espai de digitalització (detall de cada eina/diapositiva).
  - **`img/`**: recursos gràfics del lloc, incloent el **favicon** comú a totes les pàgines.

---

### 🚀 Objectius funcionals del web

- **Pàgina principal** amb accés clar als diferents espais del projecte.
- **Espai de Digitalització** amb carrusel de continguts i navegació per diferents eines.
- **Formulari de contacte** i **formulari de suggeriments** per a empreses i usuaris.
- **Login d’intranet** amb validació bàsica:
  - Contrasenya amb mínim 8 caràcters, majúscules, minúscules i caràcters alfanumèrics.
  - Correu amb domini `@montsia30.net`.
- **Intranet d’empreses**:
  - Llistat d’empreses amb informació bàsica (nom, municipi, sector).
  - Accés a formulari d’**autodiagnosi del sector comercial**.

---

### 🧰 Tecnologies utilitzades

- **HTML5** i **CSS3** per a l’estructura i el disseny del web.
- **JavaScript** per a la interactivitat (carrusel, validacions de formulari, interaccions a la intranet).
- **Git** per al control de versions i treball en equip.

> En versions futures es poden integrar altres tecnologies (per ex. XML, emmagatzematge persistent, etc.) segons els requeriments dels següents sprints.

---

### ▶️ Com provar el projecte

- **Opció 1 (ràpida)**: obrir `index.html` directament amb el navegador.
- **Opció 2 (recomanada)**:
  - Servir la carpeta del projecte amb un petit servidor local (per exemple, `Live Server` a VS Code).
  - Navegar a `index.html` i accedir a la resta de pàgines mitjançant els enllaços del menú.

---

### 🧠 Objectius d’aprenentatge

- Analitzar i comprendre una comanda real d’un client.
- Planificar i estructurar un web amb diverses seccions i rols d’usuari.
- Dissenyar interfícies senzilles, coherents i accessibles.
- Aplicar validacions bàsiques en formularis amb JavaScript.
- Treballar col·laborativament amb **Git** i documentar el projecte.

---

### 👥 Integrants del grup 5

- **Erik Puig**
- **Chaimae Bahri**
- **Ferran Valldeperez**
- **Jordi del Valle**

---

> *Aquest projecte forma part del procés d’aprenentatge dels estudiants del CFGS en Administració de Sistemes Informàtics en Xarxa (ASIX) i/o Desenvolupament d’Aplicacions Web (DAW).*
