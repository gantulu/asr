# ASR Collection Storefront

Frontend-first storefront prototype for ASR Collection. Built with React, TypeScript, Vite, Tailwind CSS v4, accessible local UI primitives, Lucide icons, Zustand cart state, and Sonner toast feedback.

## Getting started

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

## Current scope

- Responsive home/catalog, category filtering, search, product detail, cart, checkout UI, and account placeholder.
- Mock product data and client-only cart state.
- IDR currency formatting.
- Accessible labels, visible focus treatment, reduced-motion support, responsive mobile navigation, and safe-area padding.
- Design tokens are specified in `design_system.json`; validation contract is `design_system.schema.json`.

## Explicit limitations

- This is a frontend prototype. No production API, inventory reservation, account authentication, address validation, shipping quote, order persistence, or payment provider is connected.
- Checkout does not create an order or initiate payment. Do not treat the demo button as a successful transaction.
- Product photos are external Unsplash demo assets and must be replaced/verified before production.
- Build and browser tests must be run in an environment with npm access before deployment.
