import { type NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK =
  "https://onyi46.app.n8n.cloud/webhook/6f104494-76d1-4900-b34e-9f22f740709e/chat";

// The n8n chat widget sends all actions (loadPreviousSession, sendMessage)
// as POST requests. Proxying here avoids CORS — the browser talks to the
// same origin, and the server-to-server call to n8n has no CORS restriction.
export async function POST(request: NextRequest) {
  const body = await request.text();

  const upstream = await fetch(N8N_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const text = await upstream.text();

  return new NextResponse(text, {
    status: upstream.status,
    headers: { "Content-Type": upstream.headers.get("Content-Type") ?? "application/json" },
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const upstream = await fetch(
    `${N8N_WEBHOOK}?${searchParams.toString()}`,
    { method: "GET" }
  );

  const text = await upstream.text();

  return new NextResponse(text, {
    status: upstream.status,
    headers: { "Content-Type": upstream.headers.get("Content-Type") ?? "application/json" },
  });
}
