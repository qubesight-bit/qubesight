// dLocal Go - Webhook receiver
// Public endpoint. Logs status changes; extend to persist or notify as needed.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, x-signature",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  let payload: unknown = null;
  try {
    payload = await req.json();
  } catch {
    payload = await req.text().catch(() => null);
  }

  console.log("dlocalgo-webhook received:", JSON.stringify(payload));

  // Always 200 so dLocal Go does not retry indefinitely.
  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
