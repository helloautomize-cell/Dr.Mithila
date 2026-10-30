import { Icon } from "@/lib/icons";
import { crisis } from "@/lib/site-config";

export function HelpCallout({
  title = "Thinking of harming yourself?",
  text = "Please don't wait for an appointment. Call Tele-MANAS 14416 or 112, free and open 24 hours.",
  href = `tel:${crisis.telemanas}`,
  label = `Call ${crisis.telemanas}`,
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="help">
      <p>
        <b>{title}</b> {text}
      </p>
      <a href={href}>
        <Icon name="TEL" /> {label}
      </a>
    </div>
  );
}
