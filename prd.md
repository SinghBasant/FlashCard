**Simplified Project Requirement Document (PRD)**  
**Project Name**: AWS Certification Flash Card Demo (1-Day MVP)  
**Focus**: Core UI, Flashcard Interaction, Static Data  

---

### **1. Objective**  
Build a **minimal demo** for AWS certification flash card practice with:  
- Certification/domain/topic selection.  
- Basic flash card interaction (flip, navigation).  
- Preloaded static content (no backend/database).  

---

### **2. Core Features**  
#### **UI Components**  
1. **Certification Dropdown**:  
   - List AWS certifications (e.g., Solutions Architect, Developer Associate).  
2. **Domain Selection**:  
   - Show domains (e.g., "Compute", "Database") as buttons after certification selection.  
3. **Topic Filter (Optional)**:  
   - Simple dropdown to pick topics within a domain.  
4. **Session Setup**:  
   - Input for number of cards per session (default: 5, max: 15).  
   - "Start Session" button.  

#### **Flash Card Interaction**  
- **Flip Animation**: Click card to toggle question/answer.  
- **Navigation**: "Next" and "Previous" buttons.  
- **Progress**: Show "Card 3/10" at the bottom.  
- **Shuffle**: Toggle to randomize card order.  

---

### **3. Data Setup (Static)**  
- Use a **JSON file** (`flashcards.json`) with preloaded demo content:  
  ```json
  {
    "AWS Certified Solutions Architect": {
      "Domains": {
        "Compute": {
          "EC2": [
            { "question": "What is an EC2 instance?", "answer": "A virtual server..." },
            { "question": "What is a Security Group?", "answer": "A firewall..." }
          ],
          "Lambda": [...]
        },
        "Storage": {...}
      }
    }
  }
  ```

---

### **4. Technical Stack (1-Day Focus)**  
- **Frontend**:  
  - Vanilla JavaScript (or Preact/Vue.js for speed) + HTML/CSS.  
  - Use Tailwind CSS for rapid styling.  
- **Data**: Load from `flashcards.json` (no API/backend).  
- **Hosting**: Local dev or GitHub Pages.  

---

### **5. Implementation Steps with Cursor AI**  
1. **Setup Project**:  
   - Create `index.html`, `styles.css`, `app.js`, and `flashcards.json`.  
2. **Build UI**:  
   - Use Tailwind for dropdowns, buttons, and cards (Cursor’s AI can generate starter HTML/CSS).  
3. **Add Interactivity**:  
   - Use Cursor’s Copilot to write JavaScript for:  
     - Dynamic dropdown population from JSON.  
     - Card flip animation (CSS `transform: rotateY`).  
     - Next/previous card logic.  
4. **Test**:  
   - Manually verify card navigation and shuffle.  

---

### **6. Sample Code Snippets**  
#### **HTML (Card Template)**  
```html
<div id="card" class="cursor-pointer transition-transform duration-300">
  <div class="front">What is EC2?</div>
  <div class="back hidden">Virtual server...</div>
</div>
```

#### **JavaScript (Card Navigation)**  
```javascript
let currentCardIndex = 0;
const cards = JSON_DATA.Domains.Compute.EC2; // Load from JSON

function showNextCard() {
  if (currentCardIndex < cards.length - 1) currentCardIndex++;
  updateCard();
}
```

---

### **7. Deliverables**  
By end of day:  
- Working demo with 1 certification, 2 domains, and 5 sample cards.  
- Basic UI for selection and card flipping.  
- No voice/backend – pure frontend with static data.  

--- 

**TL;DR**: Strip everything except the UI, static data, and core flashcard logic. Use Cursor AI to speed up HTML/CSS/JS boilerplate.