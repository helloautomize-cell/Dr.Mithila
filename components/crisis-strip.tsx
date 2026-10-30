import Link from "next/link";
import { crisis } from "@/lib/site-config";

export function CrisisStrip() {
  return (
    <div className="crisis">
      Not an emergency service. In danger? Call <b>{crisis.emergency}</b> or{" "}
      <b>Tele-MANAS {crisis.telemanas}</b> (free, 24 hours).{" "}
      <Link href="/get-help-now/">Get help now</Link>
    </div>
  );
}
