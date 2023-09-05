import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req, res) {
    const JSONBody = req.json();
    let username = JSONBody["user"];
    let password = JSONBody["password"];

    if (username === "xyz" && password === "123") {
        const payload = { username: username };
        const Key = TextEncoder().encode(process.env.JWT_KEY);
        let token = await new SignJWT(payload)
            .setProtectedHeader({
                alg: "HS256",
            })
            .setIssueAt()
            .setIssuer("https://localhost:3000")
            .setExpirationTime("2h")
            .sign(Key);
        return NextResponse.json(
            { status: "success", message: "valid user", token: token },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { status: "failed", message: "invalid user" },
            { status: 401 }
        );
    }
}
