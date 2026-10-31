"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/* /thank-you/ is only reached by a successful booking, so mounting fires
 * the generate_lead conversion once (no-op when analytics is not allowed). */
export function LeadEvent() {
  useEffect(() => track("generate_lead"), []);
  return null;
}
