import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.KIT_FORM_ID

  if (!apiKey || !formId) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    )

    if (!res.ok) {
      const err = await res.json()
      console.error("Kit error:", err)
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Kit fetch error:", err)
    return NextResponse.json({ error: "Network error" }, { status: 500 })
  }
}
