import {
  ClerkProvider,
} from '@clerk/nextjs'

import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Suspense } from 'react';
config.autoAddCss = false;

export const metadata = {
  title: "Maguayan",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
        <ClerkProvider dynamic>
          <html lang="en" className={`${GeistSans.variable}`}>
            <body>
              <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
          </html>
        </ClerkProvider>
    </Suspense>
  );
}
