for prosper

## 🎯 Prosper – **Contact Page**

### 🔧 **Goals of the Page:**

- Let students, staff, and visitors **reach the faculty easily**.
- Provide all possible **contact channels** in one place.
- Add credibility and trust with map, contact info, and FAQs.

---

### 🧩 **Wireframe Features & What Prosper Should Build**

---

### ✅ 1. **Hero Section**

- **Includes:** Page title like "Contact Us" and a subtext like “We’d love to hear from you”.
- **What Prosper Should Do:**

  - Centered text in a full-width section with padding.
  - Use background image or simple colored background.
  - Style with `text-4xl`, subtle animation (optional), and margin below.

- **Bonus Touch:** Add a call-to-action like “Fill the form or reach out directly”.

---

### ✅ 2. **Contact Form Section**

- **Includes:** Fields: Name, Email, Subject (optional), Message, and a submit button.
- **What Prosper Should Do:**

  - Use a responsive 2-column layout for name/email on large screens.
  - Show a confirmation message on submit (static/dummy).

- **Input Validations:**

  - Required fields (basic frontend check).
  - Highlight invalid fields with red border/text.

```jsx
// Example Fields
<input type="text" placeholder="Your Name" />
<input type="email" placeholder="Your Email" />
<textarea placeholder="Your Message"></textarea>
```

---

### ✅ 3. **Faculty Contact Information Section**

- **Includes:** Faculty address, phone number, and email.
- **What Prosper Should Do:**

  - Style as info cards or a 2–3 column grid.
  - Use icons (📍 🕿 ✉️) for each contact method.

- **Extra Styling Tip:** Add a subtle border or background (`bg-gray-100` / `bg-white` with shadow).

---

### ✅ 4. **Embedded Google Map Section**

- **Includes:** Google Map iframe or a placeholder box.
- **What Prosper Should Do:**

  - Embed a real iframe using a static location URL or use a `div` as a mock.
  - Make sure it is **full-width** and responsive.

- **Extra Touch:** Add border-radius or shadow to make it pop.

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
></iframe>
```

---

### ✅ 5. **Social Media Links Section**

- **Includes:** Icons with links to dummy social handles (Facebook, Twitter, Instagram, LinkedIn).
- **What Prosper Should Do:**

  - Use `react-icons` or any SVG icons.
  - Wrap each icon in a link (`<a>` tag with `target="_blank"`).
  - Style with hover effects (scale, color change).

- **Layout Idea:** Flex row or grid of circular buttons.

---

### ✅ 6. **Quick FAQ and Help Box Section**

- **Includes:** Short FAQ with questions like:

  - “How do I reach the office?”
  - “Where is the department located?”
  - “How can I join?”

- **What Prosper Should Do:**

  - Accordion-style layout (click to expand) or simple list.
  - Add a help box beside or below with:

    - Message like “Still have questions? Email us”
    - A mailto link or dummy help button.

- **Bonus:** Use background highlight (like a light yellow or blue card).

---

### 🧠 Layout Flow Suggestion

```
[Hero Section]
[Contact Form + Contact Info (side by side or stacked)]
[Google Map Embed]
[Social Media Icons Grid]
[FAQ + Help Box]
```

---

### 🛠 Tools & Design Challenges for Prosper

| Feature      | Design Challenge             | How to Solve                          |
| ------------ | ---------------------------- | ------------------------------------- |
| Contact Form | Validation and mobile layout | Use flex/grid and check empty fields  |
| Info Section | Prevent clutter              | Use icon-based cards with spacing     |
| Map Embed    | Responsiveness               | Use width 100%, set `height` manually |
| Social Icons | Hover interactivity          | `hover:scale-110` and `transition`    |
| FAQ          | UX readability               | Use expand/collapse or colored cards  |

---

### 🔧 Design Stack for Prosper:

- **Layout:** CSS Grid or Tailwind Grid/Flex.
- **Icons:** `react-icons`, Font Awesome, or SVGs.
- **Embed Map:** Static Google Maps iframe or dummy placeholder div.
- **FAQ Interaction (Optional):** Use small accordion logic or just collapsible divs.

---

### 🔑 Reminder:

- Keep the **contact form clean and intuitive**.
- Design should reflect **trust** and **accessibility**.
- Use placeholder or dummy submission for now.
