# FrostCart — Decisions

## 1. Why this product and interaction strategy?

I chose to build FrostCart as a visual frozen-food shopping experience because the category naturally benefits from strong product imagery and fast browsing.

Instead of making the homepage primarily informational, I prioritized the path:

**Discover → Browse → Add → Review**

The homepage therefore uses visual categories, product cards, a lightweight Mood Picker, and a familiar cart experience.

I considered making the experience more recommendation-heavy, but rejected that approach because the assignment rewards a polished homepage rather than a complex recommendation engine. A simple mood interaction adds personality while keeping the core shopping flow understandable.

For product imagery, I used a fallback strategy rather than requiring every demo product to have a unique image:

**individual product image → category image → placeholder**

This allowed the catalog to remain visually consistent without modifying every product object.

---

## 2. One trade-off under the time limit

The biggest trade-off was keeping checkout as a frontend demo instead of implementing a real order/payment system.

A real implementation would require backend order persistence, authentication, payment handling, validation, and additional error states. That would have taken attention away from the assignment's primary goal: the quality of the responsive home page.

Instead, I implemented a clearly labeled **demo checkout and confirmation flow**.

I deliberately avoided fake payment success, delivery times, live inventory, fake order tracking, or other information that could make a prototype appear to be a real transaction.

With a real week, I would add a proper backend, authentication, persistent cart/order state, payment integration, and server-side validation.

---

## 3. Where AI tools were used

AI tools were used as development assistance during the project, particularly for:

* Exploring implementation approaches
* Reviewing UI behavior
* Identifying responsive edge cases
* Refining interaction requirements
* Debugging issues such as image fallback behavior
* Improving prompts/specifications for implementation

I personally reviewed the resulting implementation and verified the behavior rather than treating AI output as automatically correct.

For example, the category image system initially worked in the product grid but did not correctly appear in the cart. I identified that inconsistency and corrected the implementation so the cart reused the same image fallback behavior.

I also manually checked the responsive behavior, cart interactions, image paths, and demo checkout behavior against the assignment requirements.

The final implementation decisions, scope, and verification were my responsibility.

---

## What I intentionally did not fabricate

The project does not use:

* Fake testimonials
* Fake user counts
* Fake customer statistics
* Fake company logos
* Fake payment success
* Fake delivery promises
* Fake live inventory
* Fake customer reviews

Where the project uses demo functionality, it is presented as demo functionality.

That was an intentional product and trust decision rather than an omission.
