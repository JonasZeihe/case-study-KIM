## 20241122-2048

Einführung von devnotes in die Projekte- das erspart den Wechsel zu Obsidian und alles ist da wo es hingehört

ich habe angefangen grundsätzlich alles nochmal neu zu konzipieren- siehe styleguide I und II, daraus entstanden ist dann eine analyse der bisherigen codebase stand heute, und daraus haben wir eine Übersicht für das refactoring erstellt

### 0249

Alles klar, so weit habe ich haufenweise Komponenten erstellt
das grundlegende Design optimiert
alles in einen intuitiven und ganzheitlichen Ansatz gebracht

Sieht gut aus aber Chat ist aufgebraucht

Carousel slider ist noch nicht gut

Layout stimmt noch nicht

Textfarbe passt nicht

Bildlaufschrift ist nicht richtig für die quotes und generell alles noch verbesserungsfähig

header klicks ohne funktion

scroll to top ohne funktion

List muss noch als KOmponente überarbeitet und eingebunden werden das ist noch nicht gut so

Farben könnte man nochmal schauen

Dann als nächste Schritte:

GIFs einbinden

Video einbinden

Prototyp Link einbinden als appscreen

Build yml und github actions für passendes deployment auf github pages

dann GG :D

## 20241127 1710

Nach viel hin und her habe ich das refactoring am vorigen Abend über den Haufen geworfen

Dann am nächsten Tag war aber nicht alles gelöscht sondern es wurden die neuen Dateien übernommen- darauf aufbauend habe ich alles neu überarbeitet auch wenn es so unglaublich viele Probleme gab

Der aktuellste Stand bewegt sich auf einer langsamen Niveausteigerung wo durch immer wieder erfolgende Iterationen und inputs der aktuellen codebase eine gewisse Verbesserung erfolgt

jetzt gerade ist das hier die Priorisierung aller tasks

### **Ultimative Prioritätsliste: KIM Case Study**

Hier ist die **strukturierte und intuitive Priorisierungsliste** für alle anstehenden Aufgaben. Die Liste ist nach **Kategorien**, **Impact**, und **Abhängigkeiten** geordnet. So können wir die wichtigsten Punkte priorisiert und effizient abarbeiten.

---

## **🔥 High Priority: Essentials**

### 1. **Styles & Theme Konsistenz**

- **[DONE] Gradients in Theme integriert**
- **Überprüfung & Feinjustierung der Farbpalette**
  - Subtile Anpassungen für Accessibility (Kontrast-Check WCAG).
  - Überprüfung, ob die Gradients überall gut wirken.
- **Typography Updates**
  - Vereinheitlichung der Schriftarten (`primary`, `secondary`) in allen Komponenten.
  - Test mit responsive Font-Skalierung (Golden Ratio für jede Viewportgröße).

### 2. **Wrapper-Komponente optimieren**

- Dynamische Integration der Gradients als **Background Option**.
- Überarbeitung der bestehenden Varianten (`hero`, `header`, `default`) für bessere Wiederverwendbarkeit.
- Flexiblere Steuerung für:
  - **Padding/Spacing**.
  - Dynamische Anpassung bei Breakpoints.

### 3. **Mobile First Debugging**

- Fix für Textüberlappungen und Layout-Bugs (auf kleineren Viewports).
- Sicherstellen, dass **Wrapper, Cards, und Sections** perfekt für Mobile und Tablets rendern.
- **Testen aller Seiten auf unterschiedlichen Breakpoints (sm, md, lg).**

---

## **💎 Medium Priority: Experience Enhancements**

### 4. **Components Optimization**

- **MediaDisplay Updates:**
  - Integration der neuen Gradients für einen lebendigen Look.
  - Verbesserte Hover- und Active-Zustände für Medien (Zoom-Effekt, weichere Übergänge).
- **Lightbox & Carousel**
  - Performance-Tuning (lazy loading von Images).
  - Optimierung der Steuerung (z.B. Swipe-Gesten auf Mobile).
- **Card Komponente**
  - Einheitliche Shadow-Styles (`theme.boxShadow`) auf allen Karten.
  - Optionen für dynamische Breiten basierend auf Layout (`horizontal`, `vertical`).

### 5. **Content & Struktur der Pages**

- Sicherstellen, dass alle Seiten:
  - **Headlines und Subheadlines** konsistent mit `Typography`-Komponenten sind.
  - Inhaltlich klare Hierarchien aufweisen (Intro > Key Sections > CTA).
- **Section Übergänge verbessern**:
  - Subtile Gradients zwischen den Sections verwenden.
  - Visuelle Abgrenzungen bei langen Seiten wie **Research** und **Final Design**.

---

## **🚀 Low Priority: Nice-to-Have Add-ons**

### 6. **Neue Features & Ideen**

- **Animations Framework einbinden** (z.B. Framer Motion):
  - Smooth Scroll für Sections.
  - Fade-in für Cards und Bilder.
- **Tooltip-Komponente** für zusätzliche Hinweise (z.B. bei Interaktionen).
- **CTA Enhancements**:
  - Animierte Buttons (leichtes Pulsieren, Hover-Effekte).

### 7. **Global Performance Improvements**

- **Image Optimization**:
  - SVGs für Icons nutzen (statt PNGs oder JPEGs).
  - Lazy Loading für alle größeren Bilder und Videos.
- **Code Splitting**:
  - Dynamisches Laden von Seiten/Komponenten, um die initiale Ladezeit zu reduzieren.

### 8. **Test & Documentation**

- **Testing aller Komponenten**:
  - Unit Tests für kritische Komponenten (`Wrapper`, `Carousel`, `Lightbox`).
  - End-to-End Tests (z.B. mit Cypress) für die Navigation zwischen den Seiten.
- **Saubere Dokumentation**:
  - Beschreibungen aller Komponenten und ihrer Props.
  - README.md aktualisieren für zukünftige Wiederverwendung.

---

### **Vorschlag für den Ablauf**

Wir arbeiten uns **Kategorie für Kategorie** durch, starten aber mit den wichtigsten Punkten aus **Styles**, **Wrapper-Komponente**, und **Mobile Debugging**. Nach jeder Iteration gibt es eine kurze Review-Phase, um sicherzustellen, dass wir den **bestmöglichen Output** haben.

---

am meisten geholfen haben bisher die stylguide files, das ist wirklich unschlagbar und in Kombination mit der codebase toll für jede Iteration

## 20241128 1335

Danke für das Transkript! Basierend auf deiner Beschreibung habe ich eine klare Übersicht, was alles zu tun ist. Hier ist eine detaillierte Aufgabenliste mit Priorisierungen:

---

### **Hauptprobleme und To-Dos**

#### **1. Header**

- [x] **Funktionalität**:
  - Navigation zwischen Seiten funktioniert nicht (Desktop & Mobile).
  - Mobile Navigation öffnet sich nicht korrekt (Overlay- oder Layout-Problem).
- [] **Styling**:
  - Transparenz- und Farbprobleme (kein Hintergrund, weiße Schrift unleserlich).
  - Buttons sind eckig und nicht konsistent mit dem Designsystem.

#### **2. Footer**

- [ ] **Funktionalität**:
  - "Scroll to Top"-Button ohne Funktion.
- [ ] **Styling**:
  - Footer war visuell bereits besser – muss überarbeitet werden.

#### **3. Mesh Gradient Background**

- [ ] **Animation entfernen**:
  - Der Mesh Gradient bewegt sich unruhig – Animation abschalten.
- [ ] **Konsistenz sicherstellen**:
  - Mesh Gradient für jede Seite richtig positionieren.

#### **4. Wrapper und Layout**

- [ ] **Grundstruktur der Pages**:
  - Jede Seite benötigt einen konsistenten Wrapper (äußerste Schicht) mit leichtem Gradient-Hintergrund.
- [ ] **Verschachtelungen der Abschnitte**:
  - Fließende Übergänge zwischen Hero Banner und anderen Abschnitten sicherstellen.
  - Farben der Wrapper und Abschnitte harmonisieren.

#### **5. Typografie**

- [ ] **Farben**:
  - Kontraste prüfen und anpassen (Lesbarkeit sicherstellen).
- [ ] **Textfluss und Struktur**:
  - Überschriften, Unterüberschriften und Absätze klar trennen.
  - Typografie-Komponente überarbeiten, um diese Standards zu sichern.

#### **6. Abstände und Spacing**

- [ ] **Zwischen den Abschnitten**:
  - Gleichmäßige Spacing-Abstände zwischen den Abschnitten jeder Seite.
- [ ] **Innerhalb der Pages**:
  - Typografie und Absätze gleichmäßig formatieren.
  - Seiten wie „Informationsarchitektur“ anpassen (z. B. neue Zeilen für Überschrift und Text).

#### **7. Lightbox**

- [ ] **Inhalte der Website blockieren**:
  - Website darf nicht scrollen, während die Lightbox aktiv ist.
- [ ] **Konsistenz prüfen**:
  - Elemente in der Lightbox (z. B. Bilder) vollständig mittig und korrekt dargestellt.

---

### **Priorisierte Roadmap**

#### **Phase 1: Kritische Fehler beheben**

1. **Header**:
   - Navigation und Mobile Menu reparieren.
   - Styling und Button-Rundungen korrigieren.
2. **Footer**:
   - "Scroll to Top"-Funktionalität umsetzen.
3. **Lightbox**:
   - Scrolling der Website blockieren, während Lightbox aktiv ist.

#### **Phase 2: Layout und Struktur**

4. **Mesh Gradient**:
   - Animation entfernen und Gradient fixieren.
5. **Wrapper und Verschachtelungen**:
   - Wrapper korrekt implementieren und Farbprobleme lösen.
6. **Spacing**:
   - Einheitliche Abstände zwischen Abschnitten und innerhalb von Seiten.

#### **Phase 3: Feinschliff**

7. **Typografie**:
   - Farben und Textfluss optimieren.
   - Typografie-Komponente anpassen, um konsistente Stile zu gewährleisten.
8. **Lightbox Feintuning**:
   - Darstellung und mittige Position der Inhalte optimieren.

---

### **Vorgehen**

1. Soll ich mit der ersten Phase starten und den Fokus auf die kritischen Probleme (Header, Footer, Lightbox) legen?
2. Oder möchtest du erst einen Überblick über die geplanten Code-Änderungen für einen Bereich (z. B. Header) sehen?

Sag mir, wie du vorgehen möchtest, und ich lege direkt los! 🚀

---

## 20241129 1512

**Analyse und To-Do-Liste für das Layout und die Typografie der KIM App**

Nach der Analyse des Codes habe ich die relevanten Stellen identifiziert, die wir für das Refactoring der Layouts, Farben und Typografie bearbeiten müssen. Hier ist eine strukturierte Übersicht, welche Dateien betroffen sind und welche Änderungen benötigt werden:

---

### **GlobalStyles und Theme (Basis für alles)**

#### Dateien:

1. `src/styles/GlobalStyles.js`
2. `src/styles/theme.js`

#### Änderungen:

- **GlobalStyles.js**:

  - Schriftfarben überarbeiten, die Standard-Textfarbe sollte besser lesbar und konsistent sein.
  - Abstände (padding/margin) standardisieren, insbesondere für Hauptcontainer und Textelemente.
  - Globale `line-height` und `font-size` für Überschriften und Absätze konsistenter gestalten.

- **theme.js**:
  - Farben (`colors`) überprüfen, insbesondere:
    - Neutralfarben für Texte, um gute Lesbarkeit zu gewährleisten.
    - Hintergrundfarben und Akzentfarben harmonisieren.
  - Typografie-Skalierung (z. B. `scaleFont`) überprüfen und anpassen.
  - Konsistente `spacing`-Faktoren (z. B. `theme.spacing()`), um ein einheitliches Layout zu schaffen.

---

### **Komponenten**

#### Dateien:

1. `src/components/layout/Wrapper.js`
2. `src/components/layout/Header.js`
3. `src/components/layout/Footer.js`
4. `src/components/sections/HeroBanner.js`
5. `src/components/sections/QuoteComponent.js`

#### Änderungen:

- **Wrapper.js**:

  - Standardmäßige Padding- und Gap-Werte definieren, um konsistente Abstände zwischen Abschnitten zu gewährleisten.
  - Textausrichtung und Hintergrundfarben aus dem `theme` dynamisch steuerbar machen.

- **Header.js**:

  - Hintergrund- und Schriftfarben optimieren, insbesondere bei Scrolling.
  - Responsive Verhalten prüfen, z. B. Menü-Button und Logo-Darstellung.

- **Footer.js**:

  - Schriftgröße und Abstände der Textblöcke anpassen, um Lesbarkeit und Design zu verbessern.
  - Farben harmonisieren.

- **HeroBanner.js**:

  - Hintergrundfarben und Typografie aus `theme` direkt ableiten.
  - Padding für verschiedene Viewports anpassen.

- **QuoteComponent.js**:
  - Farben der Texte und Highlights aus dem `theme` verwenden.
  - Abstände und Rahmen dynamischer gestalten.

---

### **Datendarstellung**

#### Dateien:

1. `src/components/data-display/Carousel.js`
2. `src/components/data-display/ListComponent.js`
3. `src/components/data-display/MediaDisplay.js`

#### Änderungen:

- **Carousel.js**:

  - Navigation (Buttons und Dots) besser positionieren und mit klaren Farben versehen.
  - Standard-Abstände innerhalb des Carousels festlegen.

- **ListComponent.js**:

  - Standardisierte Farben und Hintergründe für Listenitems.
  - Abstände und Schriftgrößen anpassen.

- **MediaDisplay.js**:
  - Textbeschriftungen besser positionieren und in der Farbe optimieren.
  - Gitterlayout prüfen und für verschiedene Viewports anpassen.

---

### **Seiten**

#### Dateien:

1. `src/pages/*.js` (alle Seiten)
2. `src/App.js`

#### Änderungen:

- **Alle Seiten**:

  - Einheitliche Layoutstruktur, die Abschnitte klar voneinander abgrenzt (Wrapper optimieren).
  - Farben und Typografie aus `theme` übernehmen.
  - Abstände zwischen Abschnitten überprüfen und mit konsistenten Werten versehen.

- **App.js**:
  - `Main`-Container prüfen, ob die `padding`- und `max-width`-Einstellungen standardisiert sind.

---

### **Sonstige Komponenten**

#### Dateien:

1. `src/components/common/Button.js`
2. `src/components/common/Typography.js`
3. `src/components/common/Lightbox.js`

#### Änderungen:

- **Button.js**:

  - Varianten (z. B. `primary`, `secondary`) aus `theme` ableiten.
  - Konsistente Schriftgrößen und Paddings für alle Buttons festlegen.

- **Typography.js**:

  - Typografie-Varianten (`h1`, `h2`, etc.) überarbeiten und Farben/Textgrößen standardisieren.
  - Responsive Verhalten für unterschiedliche Viewports sicherstellen.

- **Lightbox.js**:
  - Hintergrundfarben und Übergänge für die Lightbox harmonisieren.

---

### **Schritte für das Refactoring**

1. **Basis-Anpassungen**:
   - `GlobalStyles.js` und `theme.js` überarbeiten.
2. **Komponenten**:
   - Wrapper, Header, Footer und zentrale Darstellungskomponenten bearbeiten.
3. **Seiten**:
   - Layoutstruktur für jede Seite optimieren.
4. **Testen**:
   - Farben und Abstände auf allen Seiten visuell prüfen.
   - Typografie auf Konsistenz überprüfen.

---

### Nächste Schritte

Lass uns mit den Basis-Anpassungen in `GlobalStyles.js` und `theme.js` starten. Sag Bescheid, wenn ich den ersten Vorschlag für diese Dateien umsetzen soll.

## 20241201 0011

Mehr als ein refactoring

Ich habe frustrierenderweise die boilerplate aller react Projekte einabuen müssen um das Projekt generell in eine Richtung zu lenken

Jedes React Projekt- oder so ziemlich JEDES Webprojekt benötigt Formatting, Linting, all so Zeugs!

Chatgpt ist nicht nützlich ohne all das

An sich war das jetzt alles viel hin und her aber scheinbar habe ich eine bessere Basis geschaffen

Jetzt müssen linting erros beseitigt werden und das Design nochmal überarbeitet werden

Header und solche Komponenten wurde noch nicht entzerrt- da ist noch Luft nach oben!

Au weia jetzt kommen die ganzen Design Baustellen, also Headlines für jede Page müssen einen Gradient bekommen aber subheadline oder Headline müssen dann doch noch aufgewertet werden

Ich lass erstmal gut sein

## 20241201 1233

Refactoring abgeschlossen und alles optimiert, daraufhin habe ich erneut ein transkript aufgenommen und jetzt gehts hier weiter:

### **Zusammenfassung der Optimierungspunkte aus deinem Transkript:**

#### **1. Typografie und Design**

- **Schriftgröße:** Headlines (H2, H3) und Body-Text sind aktuell zu klein. Sie müssen für bessere Lesbarkeit angepasst werden.
- **Farben der Headlines:** Orange H2-Titel sind nicht konsistent und wirken nicht optimal.
- **Kontrast & Farbpalette:** Das Design ist zu dunkel. Wir heben es auf, ohne den Kontrast zu verlieren und bleiben in der Palette des Styleguides.
- **Typografiekonsistenz:** Strong-Elemente, HighlightText und andere Textformatierungen sollen in allen List- und Quote-Elementen vereinheitlicht werden.

#### **2. Spacing & Layout**

- **MediaDisplay:** Der Text unter MediaDisplay darf nicht "kleben". Der Wrapper soll Spacing zwischen Text und Medien einfügen.
- **Wrapper-Breite:** MediaDisplay darf den Wrapper ausfüllen, um visuell harmonischer zu wirken.
- **Carousel:** Eng verschachteltes Layout auflockern. Mobile-Ansicht ohne unnötige Buttons (links/rechts).

#### **3. Funktionalität**

- **Lightbox/Carousel in Mobile:**
  - Pinch-Zoom anstelle von "Rein-Tippen".
  - Wischgesten für Navigation.
- **Navigation & Zitate:** Die QuoteComponent sollte verstärkt für Interview-Zitate und Insights verwendet werden, nicht in ListComponent.

---

### **Mein Plan für die Umsetzung**

#### **Typografie & Layout**

1. **Wrapper-Komponente anpassen:**
   - Mehr Default-Spacing für `padding` und `gap` zwischen den Sektionen.
   - Spacing-Regeln zwischen MediaDisplay und Text automatisieren.
2. **Typografie-Updates:**
   - Dynamische Schriftgrößen für bessere Lesbarkeit.
   - Konsistente Farben basierend auf der Styleguide-Palette.

#### **Media & Carousel**

3. **Lightbox in Mobile optimieren:**
   - Pinch-to-Zoom.
   - Wischgesten-Navigation implementieren.
4. **Carousel-Ansicht:**
   - Entferne Navigations-Buttons in Mobile.
   - Padding um das Carousel auflockern.

#### **Color Refinement**

5. **Farben auffrischen:**
   - Verwendung der Primär- und Sekundärfarben aus dem Styleguide.
   - Dunkle Abschnitte aufhellen und Kontrast wahren.

#### **Refactoring von QuoteComponent**

6. QuoteComponent als Default für Zitate und Insights verwenden, nicht ListComponent.

---

### Nächste Schritte

1. Lade die komplette Codebase hoch, damit ich alle Änderungen integrieren kann.
2. Ich werde jede Seite einzeln überarbeiten, basierend auf den oben genannten Punkten und deinem Feedback.
3. Die AppScreens nutze ich zur Verfeinerung des Layouts und um sicherzustellen, dass Design und Funktionalität miteinander harmonieren.

## 20241203 0031

Viel ist passiert- aber nicht genug

Layout und Styling müssen überarbeitet werden

Kaskadierung fehlerhaft

Styleguide ist nicht konform und muss mehr integriert werden

H1 bricht aus

Lightbox immer noch falsch

Carousel immer noch falsch buttons und swipe gesten nicht richtig

Grundlegendes light design falsch

Wir machen als nächstes verbessertes theme

mit light und dark mode aufbauend auf farbpalette und styleguide

mit switcher toggle

Nachwievor List nicht konsistent eingebaut in den pages mit highlight text und strong elementen

Quote ist nicht responsive- mobile sieht es gut aus aber desktop ist viel zu breit

Hab noch gerade in introduction rumgespielt- typography js ist fehlerhaft- Farbe und alles wird nicht richtig übernommen

## 20241204 1622

Plan für Case study Todo

Logo muss gemacht werden
UX unvollständig, Interviews etc fehlen und hmw --DONE
Vídeo einbinden neue Page und Link zum Prototyp
Background Nachbearbeitung --DONE
Hero Banner container und generell light Box und Mediadisplay noch nicht final
Buttons nicht korrekt designt
Buttons in mobile teilweise überflüssig carousel etc
Bilder füllen nicht ganz aus
Swipe gesten
Wenn alles passt dann
Performance Lighthouse etc
SEO SEA
