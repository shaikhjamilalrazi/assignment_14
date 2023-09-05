import { NextResponse } from "next/server";

export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    let toEmail = searchParams.get("email");
    let Transporter = nodemailer.createTransport({
        host: "mail.treamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbile.com",
            pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false },
    });

    let myEmail = {
        from: "test email from Next JS Application<info@teamrabbile.com>",
        to: toEmail,
        subject: "test email from next js application",
    };
    try {
        await Transporter.sendMail(myEmail);
        return NextResponse.json({ msg: "success" });
    } catch (e) {
        return NextResponse.json({ msg: "success" });
    }
}
