export type EcommerceStageId =
  | "browser"
  | "react-router"
  | "authentication"
  | "api-layer"
  | "express"
  | "controllers"
  | "prisma"
  | "postgresql"
  | "payment"
  | "order-completion";

export const ECOMMERCE_STAGES: EcommerceStageId[] = [
  "browser",
  "react-router",
  "authentication",
  "api-layer",
  "express",
  "controllers",
  "prisma",
  "postgresql",
  "payment",
  "order-completion",
];

export const stageDurations: Record<EcommerceStageId, number> = {
  browser: 220,
  "react-router": 180,
  authentication: 260,
  "api-layer": 210,
  express: 180,
  controllers: 240,
  prisma: 200,
  postgresql: 120,
  payment: 320,
  "order-completion": 260,
};

export const stageLogs: Record<EcommerceStageId, string> = {
  browser: "Rendering product catalog and cart UI in the browser.",
  "react-router": "Navigating user sessions through public and protected commerce routes.",
  authentication: "Validating credentials and issuing JWT tokens for secure sign-in.",
  "api-layer": "Forwarding commerce requests from React to the Express API.",
  express: "Routing cart, order, and payment calls through Express endpoints.",
  controllers: "Executing business logic for products, orders, and payment flows.",
  prisma: "Translating application queries into Prisma database operations.",
  postgresql: "Persisting orders, carts, users, and reviews in PostgreSQL.",
  payment: "Processing Razorpay checkout and verifying payment success.",
  "order-completion": "Completing order lifecycle and returning confirmation to the storefront.",
};
