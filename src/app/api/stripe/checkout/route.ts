import Stripe from "stripe"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "")

export async function POST() {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY
    const priceId = process.env.STRIPE_PRICE_ID
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

    if (!secretKey) {
      return NextResponse.json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, { status: 400 })
    }
    if (!priceId) {
      return NextResponse.json({ ok: false, error: "Missing STRIPE_PRICE_ID" }, { status: 400 })
    }
    if (!siteUrl) {
      return NextResponse.json({ ok: false, error: "Missing NEXT_PUBLIC_SITE_URL" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/enrol/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/enrol/cancel`,
      // optional but nice:
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      // If you want Stripe to collect email:
      // customer_email: "optional",
    })

    return NextResponse.json({ ok: true, url: session.url })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Stripe error" },
      { status: 500 },
    )
  }
}