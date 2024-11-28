
### **1. Designansatz und Layoutstruktur**

#### **Golden Ratio**
- Das **Golden Ratio (1.618)** ist ideal für Layoutproportionen, Typografiestufen und Abstände. Wir nutzen es z. B. so:
  - **Typografie:** Schriftgrößen basieren auf einer Skala:
    - Basisgröße: `16px`
    - Überschriften: `16px * 1.618` ≈ `26px`, `26px * 1.618` ≈ `42px`, usw.
    - Abstufungen für kleinere Texte: `16px / 1.618` ≈ `10px`.
  - **Abstände:** Margins, Paddings und Gaps zwischen Layout-Elementen folgen der gleichen Skala.
  - **Containergrößen:** z. B. ein 3:5-Verhältnis für Karten oder eine asymmetrische Aufteilung in der Bilddarstellung.

#### **Atomic Design**
Das Atomic Design Prinzip teilt die UI in fünf Ebenen, die wir direkt auf dein Projekt anwenden können:

1. **Atoms**: Kleinste, unteilbare UI-Elemente (z. B. Buttons, Icons, Texte).
2. **Molecules**: Kombinationen aus Atomen, die kleine Funktionseinheiten ergeben (z. B. ein Suchfeld aus Input und Button).
3. **Organisms**: Komplexere Komponenten, die Moleküle und Atome kombinieren (z. B. Header, Card-Komponente).
4. **Templates**: Layouts, die mehrere Organismen in einer spezifischen Struktur anordnen.
5. **Pages**: Die finalen Seiten mit realem Content, basierend auf Templates.

#### **Komponentenarten nach Funktion**
Zusätzlich zur Atomic-Logik unterteilen wir die Komponenten nach ihrem Zweck:
- **Content Components:** Überschriften, Texte, Bilder, Videos.
- **Action Components:** Buttons, Links, Call-to-Action-Elemente.
- **Feedback Components:** Tooltips, Modale, Lightboxen, Animationen.
- **Layout Components:** Container, Grids, Spalten, Reihen.

---

### **2. Layoutsystem: Container-Typen**

Um eine einheitliche und flexible Basis für das Layout zu schaffen, definieren wir verschiedene **Container-Typen**, die auf allen Seiten verwendet werden können:

#### **2.1 Standard-Container**
- **Full Width:** Füllt den gesamten Bildschirm (z. B. für Hero-Bereiche oder Slider).
- **Boxed Width:** Begrenzte Breite (z. B. max. `1200px`), zentriert mit Margins links und rechts.
- **Responsive Container:** Passt sich dynamisch an den verfügbaren Platz an, basierend auf Breakpoints.

#### **2.2 Flexible Layouts**
- **Grid-Container:** Ein flexibles Raster für Bilder, Karten oder App-Screens:
  - Spaltenzahl dynamisch (1-4 Spalten, abhängig von der Bildschirmgröße).
  - Gut für Kachel-Galerien, Feature-Bereiche oder Case Studies.
- **Flex-Container:** Ideal für vertikale oder horizontale Anordnungen von Elementen.

#### **2.3 Karten (Cards)**
- **Image Cards:** Für Bilder mit Titel und Beschreibung.
- **Text Cards:** Z. B. für Zitate oder einfache Textblöcke.
- **Mixed Media Cards:** Bilder, Videos oder GIFs mit Overlay-Text.

#### **2.4 Hero-Bereich**
- Ein großflächiger Container für Titel, Beschreibungen und Call-to-Action.
- **Beispiele:** Landing-Page-Banner oder der Einstieg in eine Case Study.

---

### **3. Komponenten-Liste (Atomic Design Struktur)**

#### **Atoms (Basiselemente)**
- **Text:**
  - Typografiestufen (H1-H6, Paragraph, Label, Caption).
- **Button:**
  - Primär-Button, Sekundär-Button, Icon-Button.
- **Input:**
  - Textfeld, Passwortfeld, Checkbox, Radio.
- **Icons:**
  - SVGs für Aktionen oder Statusindikatoren.

#### **Molecules (Kombination von Atomen)**
- **Card:**
  - Kombiniert Bild, Titel und optionalen Button.
- **Navigation:**
  - Menüpunkt + Dropdown-Logik.
- **Formularfeld:**
  - Label + Input + Fehlermeldung.
- **Slider-Item:**
  - Einzelnes Element im Slider (z. B. App-Screen mit Bild und Titel).

#### **Organisms (Komplexe Einheiten)**
- **Header:**
  - Logo, Navigation, Burger-Menü (mobil), Scroll-Interaktion.
- **Footer:**
  - Links, Copyright-Hinweis, Social Media Icons.
- **Image-Slider:**
  - Karussell für Bilder, GIFs oder Videos.
- **Gallery-Lightbox:**
  - Darstellung und Zoom-Funktion für Bilder.
- **Feature-Section:**
  - Kombination aus Titel, Beschreibung und mehreren Karten.

#### **Templates (Seitenlayouts)**
- **One-Pager Template:**
  - Abschnitte wie Hero, Features, Projekte, Kontakt.
- **Case Study Template:**
  - Struktur für Projektbeschreibungen (Hero-Bereich, Text, Bilder).
- **Galerie Template:**
  - Grid mit Lightbox-Unterstützung.

#### **Pages**
- Die finalen Seiten:
  - Home, Case Studies, Kontakt.

---

### **4. Auflistung: Benötigte Komponenten und Funktionen**

#### **Typografie und Abstände**
- Golden-Ratio-basierte Schriftgrößen und Margins/Paddings.
- Einheitliche Schriftfamilien und -gewichte.

#### **Header und Footer**
- Sticky Header mit responsive Logo-Varianten.
- Dynamischer Footer mit Links und Social Media.

#### **Karussell**
- Varianten für Bilder, App-Screens, GIFs und Videos.
- Navigationselemente (Pfeile, Punkte).

#### **Bilddarstellung**
- Lightbox für Vergrößerung und Zoom.
- Grid mit verschiedenen Spalten (1-4).
