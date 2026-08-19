# FrostCart ❄️

> A premium frozen-food shopping experience designed to make choosing your next freezer pick feel simple, visual, and enjoyable.

**Live Demo:** `ADD_YOUR_DEPLOYED_URL_HERE`

**GitHub:** https://github.com/Ayush-2721/FrostCart-project

---

## About the Project

FrostCart is a responsive frozen-food shopping homepage created as part of the **Premium Home Page** assignment.

The goal was to take a familiar frozen-food shopping experience and give it a more polished, product-focused interface rather than treating it as a basic product grid.

The experience focuses on:

* Clear product discovery
* Visual category browsing
* Fast add-to-cart interactions
* Mood-based product discovery
* A familiar cart experience
* Responsive mobile-first behavior
* Small interactions that provide useful feedback

The design intentionally avoids fabricated social proof, fake testimonials, fake customer counts, and invented company metrics.

---

## Key Features

### 🧊 Premium Hero Section

The homepage opens with a clear FrostCart value proposition and a strong call to action.

The hero is designed to communicate the product quickly without overwhelming the user with unnecessary information.

### 🛒 Product Discovery

Products are presented through a responsive product grid with:

* Product images
* Product names
* Categories
* Pricing
* Add-to-cart actions
* Responsive card layouts

### 🎯 Mood Picker

FrostCart includes a lightweight mood-based discovery interaction.

Users can select a mood such as:

* Excited
* Happy
* Medium
* Stressed
* Sad

FrostCart then recommends a product based on the existing demo product data.

The interaction is intentionally simple so that it adds personality without becoming a complicated recommendation engine.

### 🖼️ Image Fallback System

Products use a layered image strategy:

```text
Individual product image
        ↓
Category image
        ↓
FrostCart placeholder / emoji fallback
```

The project includes category images for:

* Fries
* Momos
* Parathas
* Snacks
* Vegetables
* Pizza
* Ice Cream
* Kebabs
* Meals

These images are stored in:

```text
public/products/
```

The same image-resolution behavior is reused across the product grid, Mood Picker, and cart.

### 🛍️ Cart

The cart follows familiar e-commerce behavior:

* Cart quantity badge
* Add-to-cart feedback
* Quantity controls
* Product removal
* Subtotal
* Cart drawer on desktop
* Mobile-friendly cart panel
* Empty-cart state
* Demo checkout flow

Adding the same product multiple times merges it into one cart line and updates the quantity.

### ✅ Demo Order Confirmation

The checkout flow is intentionally a frontend prototype.

Users can progress through:

```text
Product
   ↓
Cart
   ↓
Demo Checkout
   ↓
Confirm Demo Order
   ↓
Demo Order Confirmed
```

No real payment or order is processed.

### 👤 Demo Profile

The header includes a lightweight demo profile interaction.

On desktop it can be accessed through the profile hover interaction, while mobile uses a tap-based interaction.

This is demo UI only and does not represent real authentication or account data.

### 📱 Responsive Design

The homepage is designed to work across desktop and mobile layouts.

Particular attention was given to:

* 390px mobile width
* 1440px desktop width
* Touch-friendly controls
* Responsive product cards
* Cart behavior
* Header layout
* No horizontal overflow

---

## Design Principles

The interface was built around a few principles:

### 1. Visual-first product discovery

Frozen food is highly visual, so product imagery is treated as a primary part of the shopping experience.

### 2. Familiar interactions

The cart, quantity controls, navigation, and product actions follow recognizable e-commerce patterns instead of introducing unusual interactions.

### 3. Motion with purpose

Motion is used mainly for feedback:

* Add-to-cart confirmation
* Cart badge updates
* Drawer transitions
* Small hover/focus states

The goal is to make interactions feel responsive without turning the interface into an animation showcase.

### 4. Honest product communication

No fabricated:

* Testimonials
* User counts
* Customer reviews
* Company logos
* Delivery promises
* Payment confirmations
* Live inventory claims

The project uses demo data and labels demo functionality appropriately.

---

## Tech Stack

* React
* JavaScript
* Tailwind CSS
* Vite
* HTML
* CSS
* Git / GitHub

---

## Project Structure

```text
FrostCart-project/
│
├── public/
│   └── products/
│       ├── fries.jpg
│       ├── momos.jpg
│       ├── parathas.jpg
│       ├── snacks.jpg
│       ├── vegetables.jpg
│       ├── pizza.jpg
│       ├── ice-cream.jpg
│       ├── kebabs.jpg
│       ├── meals.jpg
│       └── ...
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── DECISIONS.md
│
└── FrostCart specification PDFs
```

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Ayush-2721/FrostCart-project.git
```

Move into the project:

```bash
cd FrostCart-project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

---

## Responsive QA

The interface was designed and checked against the assignment's primary targets:

| Viewport | Goal                 |
| -------- | -------------------- |
| 390px    | Mobile usability     |
| 1440px   | Desktop presentation |

Additional responsive checks include narrower mobile widths to ensure that the interface does not introduce horizontal scrolling or clipped controls.

---

## Demo Limitations

FrostCart is a frontend prototype.

The following are intentionally not implemented as real services:

* Real authentication
* Real payments
* Real order processing
* Live inventory
* Live delivery tracking
* Real customer accounts
* Backend order persistence

The checkout confirmation is explicitly presented as a **demo confirmation**.

---

## Easter Egg

An optional small interaction/easter egg is included in the homepage.

It does not affect the core shopping experience.

---

## Assignment

This project was created for the **Premium Home Page** track.

The assignment emphasizes:

* Product presentation
* UI craft
* Responsive design
* Interaction quality
* Honest product communication
* Ability to explain design and implementation decisions

FrostCart was built with those constraints in mind.

---

## Author

**Ayush Raj**

BTech CSE — Lovely Professional University

GitHub: https://github.com/Ayush-2721
