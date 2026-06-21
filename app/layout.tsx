import { Suspense } from "react";
import "./globals.css";
import { NavBar } from "./NavBar";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <main className="p-5">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
