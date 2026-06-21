# Design System - What's in my Fridge?

## 1. Design Tokens (Colors & Typography)
### Colors
- **Primary:** `#2ECC71` (Buttons, Active Icons)
- **Secondary:** `#E67E22` (Save, Favorites)
- **Accent:** `#3498DB` (Time labels, Links)
- **Background:** `#F9F9F9`
- **Text:** `#2C3E50`
- **Error:** `#E74C3C`
- **Success:** `#27AE60`

### Typography
- **Font:** Assistant
- **Headings:** 24px / Bold (700)
- **Body:** 16px / Regular (400)
- **Labels:** 12px / Medium (500)

### Spacing
- **Base Unit:** 8px
- **Border Radius:** 12px - 16px

---

## 2. Component Style Guide
- **Buttons:** Background fill (Primary/Secondary), 12px rounded, white bold text.
- **Cards:** White background, 16px rounded, soft shadow (`0 4px 12px rgba(0,0,0,0.08)`).
- **Inputs:** #EEE background, 12px rounded, muted gray text.
- **Navigation:** Bottom navigation bar, active state (Primary color), inactive state (Gray).
- **CSS Implementation:** All design tokens are implemented as CSS Variables in `globals.css` to avoid hardcoded values.

---

## 3. Component Breakdown Table
| שם הרכיב | תיאור | קובץ |
| :--- | :--- | :--- |
| **BottomNav** | תפריט ניווט תחתון המכיל קישורים לעמודי האפליקציה | `src/components/BottomNav/BottomNav.tsx` |
| **RecipeCard** | רכיב להצגת כרטיס מתכון בודד עם תמונה ופרטים | `src/components/RecipeCard/RecipeCard.tsx` |
| **Dashboard** | העמוד הראשי המציג אוסף מתכונים | `src/pages/Dashboard.tsx` |
| **PantryPage** | עמוד ניהול המצרכים הקיימים במזווה | `src/pages/PantryPage.tsx` |

---

## 4. Navigation Table
| עמוד | נתיב (Path) | תיאור תוכן |
| :--- | :--- | :--- |
| **דף הבית** | `/` | הצגת רשימת המתכונים והחיפוש |
| **מזווה** | `/pantry` | ממשק ניהול רכיבי המזווה שלך |
| **מועדפים** | `/favorites` | רשימת המתכונים השמורים |
| **פרופיל** | `/profile` | ניהול פרטי משתמש והגדרות |
| **פרטי מתכון** | `/recipe/:id` | דף ייעודי להצגת מתכון ספציפי לפי מזהה |