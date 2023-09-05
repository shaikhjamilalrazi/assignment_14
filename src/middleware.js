import { NextResponse } from "next/server";

export async function middleware(req, res, next) {
    if (req.nextUrl.pathname.startsWith("/api/Profile")) {
        try {
            const requestHeaders = new Headers(req.headers);
            let token = requestHeaders.get("token");
            let payload = await VerifyToken(token["value"]);

            requestHeaders.set("email", payload["email"]);
            return NextResponse.next({ request: { headers: requestHeaders } });
        } catch (e) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }
}
