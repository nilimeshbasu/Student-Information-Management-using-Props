# 🎓 Student Information Portal (React Assignment 2)

A responsive React application built to manage and display student information using **Props**, **Component Reusability**, and **State Management**.

---

## 🚀 Features
* **Reusable Components:** Cleanly structured into `Header`, `Footer`, `StudentList`, and `StudentCard`.
* **Data Passing via Props:** All student data is passed down dynamically from the parent component to the child cards.
* **Student Data Table & Cards:** Displays Name, Roll Number, Department, Semester, CGPA, and Photo in both a structured table format and visual cards.
* **Sorting Mechanism:** Features an interactive button to sort students by their CGPA in descending order.
* **Colorful UI:** Enhanced with modern CSS gradients, hover animations, and clean layouts.

---

## 📂 Component Structure
```text
src/
├── Header.js         # Top navigation banner
├── Footer.js         # Bottom page footer
├── StudentList.js    # Maps through the student array
├── StudentCard.js    # Individual student profile card
├── App.js            # Main parent component holding state & sort logic
└── App.css           # Custom external styles