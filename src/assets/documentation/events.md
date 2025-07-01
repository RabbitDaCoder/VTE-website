## for anointing

## 🎯 Anointing – **Events Page**

### 🔧 **Goals of the Page:**

- Display all events happening across the faculty.
- Allow users to **filter by department**.
- Paginate through a larger list of events cleanly.
- Include a **callout or ad** section for special announcements or banners.

---

### 🧩 **Wireframe Features & What Anointing Should Build**

---xhcqju

### ✅ 1. **Small Hero Section**

- **Includes:** Title like “Our Events” or “Faculty Events” with a short subtitle (e.g., “Stay updated with our latest happenings”).
- **What Anointing Should Do:**

  - Keep this **minimal** but styled nicely.
  - Use large text (`text-3xl` or `4xl`) and maybe a background color/image.
  - Add breadcrumbs or page location (optional).

---

### ✅ 2. **Filter by Department (Dropdown Filter)**

- **Includes:** A `<select>` with department options (e.g., Computer Science, Mathematics...).
- **What Anointing Should Do:**

  - Use a state variable (`selectedDepartment`) to track filter.
  - Filter dummy data accordingly (just simulate it for now).

- **Static Dummy Data Example:**

  ```js
  const departments = [
    "All",
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biological Sciences",
  ];
  ```

- **Challenge:** Ensure it resets correctly, filters immediately, and is responsive.

---

### ✅ 3. **Events Section (Main Content)**

- **Includes:** Multiple events as **cards** or **tiles**.
- **What Anointing Should Do:**

  - Create a reusable `EventCard` component.
  - Use grid layout for cards:

    ```css
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    ```

  - Each event should have:

    - Image or banner thumbnail
    - Title
    - Date
    - Brief description
    - Optional department tag

- **Make It Sleek:**

  - Add hover effects (e.g., shadow grow, scale).
  - Animate on scroll (`fade-in`, etc. with `framer-motion` or basic CSS).

---

### ✅ 4. **Pagination**

- **Includes:** Buttons or numbered pages to navigate through event sets.
- **What Anointing Should Do:**

  - Use local state to track `currentPage`.
  - Display only a subset of events per page (e.g., 6 per page).
  - Add "Next" and "Previous" buttons or numeric pagination.

- **Bonus UI Touches:**

  - Highlight active page.
  - Smooth scroll back to top on page change.

---

### ✅ 5. **Ads / Callout Section**

- **Includes:** A promo block or message—can be a banner or CTA.
- **What Anointing Should Do:**

  - Can place between sections or at the bottom.
  - Add a styled box with:

    - A headline (e.g., “Upcoming Faculty Conference!”)
    - Button/Link (e.g., “Learn More” or “Register Now”)

  - Add background color or gradient for visual break.

---

### 🔧 Sample Layout Flow

```
[Hero Section]
[Filter Dropdown]

[Events Grid]
  - EventCard 1
  - EventCard 2
  - ...
  - Pagination Controls

[Ads/Callout Section]
```

---

### 🛠 Design Tools Anointing Can Use:

| Feature    | What to Use                                | Notes                     |
| ---------- | ------------------------------------------ | ------------------------- |
| Filter     | `select` input                             | Use controlled state      |
| Cards      | `grid` + Tailwind or CSS                   | Add hover/fade animations |
| Pagination | Basic array logic                          | 6 per page, update state  |
| Ads        | `div` with bold colors or background image | Centered or wide section  |

---

### 💡 UX Problems Anointing Should Solve:

| Feature     | Problem                            | Solution                                        |
| ----------- | ---------------------------------- | ----------------------------------------------- |
| Filter      | Filter must update cards instantly | Add dummy event list and filter it on selection |
| Pagination  | Show only correct events per page  | Use `.slice()` logic on filtered events         |
| Card layout | Can get messy on small screens     | Use responsive grids and test mobile            |
| Ad section  | Needs to stand out visually        | Use contrast color, icon, or button             |

---

### 🧠 Reminder for Anointing:

- Use placeholder events (10–20 objects) with fields like:

  ```js
  {
    title: "Tech Symposium 2025",
    department: "Computer Science",
    date: "2025-08-02",
    image: "/event1.jpg",
    description: "A gathering of minds in tech."
  }
  ```

- Keep things accessible: readable text, contrast, button labels.
