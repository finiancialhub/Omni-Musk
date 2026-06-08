// Client-side simulation of proof submission. No server required.
// Returns a deterministic-looking ticket id so the success UI matches
// the original server-backed flow.

export type SubmitInvestmentProofInput = {
  data: {
    entitySlug: string;
    entityName: string;
    planName: string;
    minimum: number;
    fullName: string;
    email: string;
    txHash?: string;
    receiptName?: string;
    receiptSize?: number;
  };
};

export async function submitInvestmentProof(input: SubmitInvestmentProofInput) {
  // Simulate a brief network round-trip so the "Submitting…" state is visible.
  await new Promise((r) => setTimeout(r, 600));
  console.log("[proof-submission:client]", {
    receivedAt: new Date().toISOString(),
    ...input.data,
  });
  return {
    ok: true as const,
    ticketId: `PRF-${Date.now().toString(36).toUpperCase()}`,
  };
}
