"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { Icon } from "@/lib/icons";
import { Confirm } from "@/components/confirm";
import { site, crisis } from "@/lib/site-config";

/* Bottom sheet opened by the Call slot of the mobile action bar. */
export function CallSheet({ children }: { children: ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="csheet-ovl" />
        <Dialog.Content className="csheet" aria-describedby={undefined}>
          <Dialog.Title className="csheet-t">Call the practice</Dialog.Title>
          <a className="csheet-row" href={`tel:${site.phoneTel}`}>
            <span className="ico">
              <Icon name="TEL" />
            </span>
            <p>
              <b>+91 {site.phoneDisplay}</b>
              <span>
                Phone hours <Confirm />
              </span>
            </p>
          </a>
          <a className="csheet-row" href={`tel:${crisis.telemanas}`}>
            <span className="ico alert">
              <Icon name="HEART" />
            </span>
            <p>
              <b>Tele-MANAS {crisis.telemanas}</b>
              <span>Free, 24 hours, many Indian languages</span>
            </p>
          </a>
          <a className="csheet-row" href={`tel:${crisis.emergency}`}>
            <span className="ico alert">
              <Icon name="SHIELD" />
            </span>
            <p>
              <b>{crisis.emergency}</b>
              <span>Emergency: police, fire, ambulance</span>
            </p>
          </a>
          <Dialog.Close className="csheet-x" aria-label="Close">
            <Icon name="X" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
