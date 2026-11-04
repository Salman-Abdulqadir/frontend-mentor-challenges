# Frontend Mentor challenges

My solutions to [Frontend Mentor](https://www.frontendmentor.io) challenges, built between 2022 and 2025. Each challenge lives in its own folder under `challenges/` with its original commit history, and all of them are deployed together on one site: **https://SITE/**

<!-- challenges:start -->
| Challenge | Stack | Updated | Demo |
|---|---|---|---|
| [Calculator app](challenges/calculator-app) | React, Tailwind | 2025-05 | [live](https://fe-mentor-calculator.netlify.app) |
| [Calculator app (v1)](challenges/calculator-v1) | React | 2025-05 | [live](https://SITE/calculator-v1/) |
| [Launch countdown timer](challenges/launch-countdown-timer) | React, Tailwind | 2025-05 | [live](https://fe-mentor-launch-countdown-timer.netlify.app) |
| [Manage landing page](challenges/manage-landing-page) | React, Tailwind | 2025-05 | [live](https://SITE/manage-landing-page/) |
| [Newsletter sign-up](challenges/newsletter-sign-up) | React, Tailwind | 2025-05 | [live](https://fe-mentor-newsletter-signup.netlify.app) |
| [Product list with cart](challenges/product-list-with-cart) | React, TypeScript, Tailwind | 2025-05 | [live](https://fe-mentor-s.netlify.app) |
| [Time tracking dashboard](challenges/time-tracking-dashboard) | React, Tailwind | 2025-05 | [live](https://fe-mentor-time-tracking-dashboard.netlify.app) |
| [Todo app](challenges/todo-app) | React, TypeScript, Tailwind | 2025-05 | [live](https://fe-mentor-todo-app.netlify.app) |
| [Contact form](challenges/contact-form) | React, Tailwind | 2025-04 | [live](https://fe-mentor-contact-form.netlify.app) |
| [Interactive comments section](challenges/interactive-comments-section) | React, TypeScript, Tailwind | 2025-04 | [live](https://fe-mentor-interactive-comments.netlify.app) |
| [Pricing component](challenges/pricing-component) | React, Tailwind | 2025-04 | [live](https://fe-mentor-pricing-component.netlify.app) |
| [Space tourism website](challenges/space-tourism-website) | Next.js, React, TypeScript, Tailwind | 2025-04 | [live](https://fe-mentor-explore-space.netlify.app) |
| [Browser extensions manager UI](challenges/browser-extensions-manager-ui) | React, TypeScript, Tailwind | 2025-03 | [live](https://fe-mentor-brower-extenstion-manager.netlify.app) |
| [Easybank landing page](challenges/easybank-landing-page) | HTML, CSS, JavaScript | 2025-01 | [live](https://SITE/easybank-landing-page/) |
| [FAQ accordion](challenges/faq-accordion) | HTML, CSS, JavaScript | 2024-12 | [live](https://fe-mentor-faq-accordion-salman.netlify.app) |
| [Interactive card details form](challenges/interactive-card-details-form) | React, TypeScript, Tailwind | 2024-12 | [live](https://SITE/interactive-card-details-form/) |
| [Mortgage repayment calculator](challenges/mortgage-repayment-calculator) | React, TypeScript, Tailwind | 2024-10 | [live](https://fe-mentor-salman.netlify.app) |
| [Order summary component](challenges/order-summary-component) | HTML, CSS | 2024-10 | [live](https://SITE/order-summary-component/) |
| [Todo app (v1)](challenges/todo-app-v1) | React, TypeScript, Tailwind | 2024-10 | [live](https://SITE/todo-app-v1/) |
| [Tic-tac-toe](challenges/tic-tac-toe) | React, TypeScript, Tailwind | 2024-09 | [live](https://SITE/tic-tac-toe/) |
| [Dictionary web app](challenges/dictionary-web-app) | React, Tailwind | 2024-06 | [live](https://fast-dictionary.netlify.app) |
| [Notifications page](challenges/notifications-page) | React, Tailwind | 2024-06 | [live](https://notification-ui-frontendmentor.netlify.app) |
| [Job listings with filtering](challenges/job-listings-with-filtering) | React, TypeScript, Tailwind | 2024-05 | [live](https://job-listing-ui.netlify.app) |
| [Age calculator app](challenges/age-calculator-app) | React, TypeScript, Sass | 2024-04 | [live](https://age-calculator-4.netlify.app) |
| [Rock paper scissors](challenges/rock-paper-scissors) | React, styled-components, Redux | 2023-01 | [live](https://frontend-mentor-rock-paper-scissor.netlify.app) |
| [Advice generator app](challenges/advice-generator-app) | HTML, CSS, JavaScript | 2022-12 | [live](https://SITE/advice-generator-app/) |
| [Expenses chart component](challenges/expenses-chart-component) | React | 2022-12 | [live](https://SITE/expenses-chart-component/) |
| [IP address tracker](challenges/ip-address-tracker) | React, Sass, Redux | 2022-12 | [live](https://SITE/ip-address-tracker/) |
| [Multi-step form](challenges/multi-step-form) | React, Sass, Redux | 2022-12 | [live](https://SITE/multi-step-form/) |
| [REST Countries API](challenges/rest-countries-api) | React, styled-components, Redux | 2022-12 | [live](https://SITE/rest-countries-api/) |
| [Tip calculator app](challenges/tip-calculator-app) | React, styled-components | 2022-12 | [live](https://SITE/tip-calculator-app/) |
| [URL shortening API](challenges/url-shortening-api) | React, styled-components | 2022-12 | [live](https://SITE/url-shortening-api/) |
<!-- challenges:end -->

## Repo layout
- `challenges/<slug>/`: one self-contained project per challenge (its own `package.json` where it has one)
- `challenges.json`: the list of challenges; drives the gallery page and the table above
- `scripts/build.mjs`: builds every challenge into `dist/<slug>/` and writes the gallery at `dist/index.html`
- `scripts/readme.mjs`: regenerates the table above

## Run locally
```bash
node scripts/build.mjs                  # everything
node scripts/build.mjs todo-app         # one challenge
npx serve dist
```
Or work on a single challenge directly: `cd challenges/<slug>` and use its own `dev` script.
