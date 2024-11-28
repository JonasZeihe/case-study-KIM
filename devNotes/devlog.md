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

