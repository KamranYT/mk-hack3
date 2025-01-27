import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|static|favicon.ico).*)', // Ensure middleware runs for authenticated pages only
    '/shop', // Add the specific route(s) where auth is needed
  ],
};
