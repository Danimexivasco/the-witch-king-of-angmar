# 🔥 The Witch King of Angmar 🔥

![The Witch King of Angmar](./src/assets/images/nazgul.webp)

[The Witch King of Angmar](the-witch-king-of-angmar.vercel.app) is a website made with [Astro](https://astro.build) and [Preact](https://preactjs.com/) (just for a client side trick for a mask-image with gif animation).

A key feature of the project is the integration of CSS Scroll-Linked Animations using the experimental animation-timeline property, enabling smooth, timeline-driven animations tied to scroll position — such as rotating cursed wheels, masked wire overlays, and depth-perspective transitions. The layout uses modern CSS Grid and flexbox, along with visual polish using filters, masking, and layering.

This project demonstrates a deep dive into cutting-edge CSS capabilities, focusing on performance, semantic structure, and immersive interaction — all without a single line of JavaScript (the only JS used is to handle and store the preferred theme).

> [!IMPORTANT]
> The project relies on experimental CSS animation-timeline feature, which is not supported in all browsers. I also noticed that the behaviour in mobile devices is not the same as in desktop because of the hide/show functionality of the address bar, so for the best experience, please use a desktop device



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

