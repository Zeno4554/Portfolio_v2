export interface GraphNode {
  id: string;
  title: string;
  column: "browser" | "router" | "auth" | "api" | "server" | "db" | "payment" | "order";
  row: number;
  description: string;
  folder: string;
  files: string[];
  input: string;
  output: string;
  latency: string;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const graphNodes: GraphNode[] = [
  {
    id: "browser",
    title: "Browser",
    column: "browser",
    row: 0,
    description:
      "User interacts with the storefront, product listings, cart, wishlist, and checkout flows in the React browser UI.",
    folder: "frontend",
    files: ["src/pages/index.tsx", "src/components/ProductCard.tsx"],
    input: "User actions",
    output: "Route navigation",
    latency: "N/A",
  },
  {
    id: "router",
    title: "React Router",
    column: "router",
    row: 0,
    description:
      "Client-side routing manages public pages, protected user routes, checkout, and the admin dashboard in the React app.",
    folder: "frontend/src/routes",
    files: ["AppRoutes.tsx", "ProtectedRoute.tsx"],
    input: "Browser navigation",
    output: "Route changes",
    latency: "< 50ms",
  },
  {
    id: "authentication",
    title: "Authentication",
    column: "auth",
    row: 0,
    description:
      "JWT authentication protects user sessions, secures cart and orders, and enforces role-based admin access.",
    folder: "backend/src/auth",
    files: ["auth.controller.ts", "auth.middleware.ts", "jwt.service.ts"],
    input: "Login credentials",
    output: "JWT token",
    latency: "120ms",
  },
  {
    id: "api-layer",
    title: "API Layer",
    column: "api",
    row: 0,
    description:
      "Frontend API calls route through React services to the Express backend for products, carts, orders, and payments.",
    folder: "frontend/src/api",
    files: ["apiClient.ts", "productService.ts", "orderService.ts"],
    input: "HTTP requests",
    output: "JSON responses",
    latency: "150-220ms",
  },
  {
    id: "express",
    title: "Express",
    column: "server",
    row: 0,
    description:
      "Express hosts REST endpoints for authentication, products, cart operations, orders, reviews, and payment processing.",
    folder: "backend/src",
    files: ["server.ts", "routes/product.routes.ts", "routes/order.routes.ts"],
    input: "API requests",
    output: "Controller dispatch",
    latency: "80-140ms",
  },
  {
    id: "controllers",
    title: "Controllers",
    column: "server",
    row: 1,
    description:
      "Controllers handle route logic for products, categories, cart, wishlist, orders, reviews, and Razorpay checkout.",
    folder: "backend/src/controllers",
    files: ["product.controller.ts", "order.controller.ts", "payment.controller.ts"],
    input: "Route payloads",
    output: "Service calls",
    latency: "100-180ms",
  },
  {
    id: "prisma",
    title: "Prisma ORM",
    column: "db",
    row: 0,
    description:
      "Prisma translates controller queries into SQL for managing products, carts, orders, users, and reviews in PostgreSQL.",
    folder: "backend/prisma",
    files: ["schema.prisma", "seed.ts"],
    input: "ORM queries",
    output: "Database statements",
    latency: "90-140ms",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    column: "db",
    row: 1,
    description:
      "PostgreSQL stores catalog data, user accounts, cart state, order history, payment records, and review entries.",
    folder: "database",
    files: ["migrations/", "seed.sql"],
    input: "SQL queries",
    output: "Persisted data",
    latency: "5-20ms",
  },
  {
    id: "payment",
    title: "Payment",
    column: "payment",
    row: 0,
    description:
      "Razorpay integration handles secure checkout, payment verification, and order capture before finalizing purchases.",
    folder: "backend/src/payments",
    files: ["razorpay.service.ts", "payment.controller.ts"],
    input: "Checkout request",
    output: "Payment confirmation",
    latency: "250-420ms",
  },
  {
    id: "order-completion",
    title: "Order Completion",
    column: "order",
    row: 0,
    description:
      "Order completion finalizes inventory updates, generates order records, and returns confirmation to the storefront.",
    folder: "backend/src/orders",
    files: ["order.service.ts", "order.controller.ts"],
    input: "Payment success",
    output: "Completed order",
    latency: "180-260ms",
  },
];

export const graphEdges: GraphEdge[] = [
  { from: "browser", to: "router" },
  { from: "router", to: "authentication" },
  { from: "authentication", to: "api-layer" },
  { from: "api-layer", to: "express" },
  { from: "express", to: "controllers" },
  { from: "controllers", to: "prisma" },
  { from: "prisma", to: "postgresql" },
  { from: "controllers", to: "payment" },
  { from: "payment", to: "order-completion" },
];
