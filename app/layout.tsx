import type { Metadata } from "next";
import "./globals.css";
import NaviBar from "@/components/navibar";
import Footer from "@/components/footer";
/* import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'; */

export const metadata: Metadata = {
  title: "Dan Nguyen's CSS 480 Page",
  description: "UWB Spring 2024 CSS 480 A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Theme> */}

          <NaviBar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          {/* <Footer /> */}

        {/* </Theme> */}
      </body>
    </html>
  );
}
