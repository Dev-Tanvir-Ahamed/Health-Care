import Providers from "@/lib/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Health Care",
  description: "Health Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <Toaster position="top-center" />
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
