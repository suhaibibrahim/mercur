# DesignBridge MVP Conversion

## Target Product

DesignBridge is a creator marketplace surface inside Designar.ai. Clients buy prompt packs, design templates, made-to-order services, and AI-assisted brand kits from human creators who use AI transparently and own output quality.

## Phase 1 Scope

- Arabic social media creators publish storefronts and sell fixed-price deliverables.
- Creator prices are self-set with a $10 USD minimum per deliverable.
- Stripe Connect handles creator payment accounts and payouts.
- Launch commission is 0% for the first 3 months; default post-launch commission is 15%.
- Privacy Mode adds a $5 platform surcharge and hides uploaded identities from creators.
- Clients pay upfront, creators deliver, and a 48-hour review window controls release.
- Disputes are handled manually with a 50% creator kill fee, 50% client refund, and platform commission forfeited.
- Marketplace is web-first; Designar links users into this surface.

## Existing Mercur Fit

| DesignBridge requirement | Mercur capability |
| --- | --- |
| Creator storefronts | Sellers, vendor portal, public store seller routes |
| Prompt packs, templates, services, brand kits | Vendor-scoped products, variants, categories, collections, tags, attributes |
| Creator-set pricing | Vendor product and variant price management |
| 15% platform commission | Commission rates, commission lines, payout deduction |
| Stripe Connect payouts | Payout module and Stripe Connect payout provider |
| Upfront payment with later release | Split-order checkout authorization and vendor payment capture route |
| Creator subscriptions | Subscription plans with seller overrides |

## Gaps To Build

1. Time-based commission waiver: automatically keep new creators at 0% for 3 months, then switch to 15%.
2. Privacy Mode: anonymize client assets before creator review and charge a $5 platform surcharge.
3. Delivery release: auto-capture or release payment 48 hours after delivery when the client does not dispute.
4. Disputes: record disputes, apply the 50/50 resolution, and waive platform commission.
5. Weekly payouts: batch eligible earnings every Sunday and enforce a $20 minimum threshold.
6. Storefront integration: add the Designar entry point and public marketplace browsing surface outside this core package.

## Implemented Conversion Slice

The vendor product API now rejects USD creator deliverables below $10. This makes the Phase 1 pricing floor a server-side rule, not only a UI recommendation.

## Verification

- `bun run lint`
- `bun run build`
- `bun run test:integration:http -- product/vendor/product.spec.ts`
