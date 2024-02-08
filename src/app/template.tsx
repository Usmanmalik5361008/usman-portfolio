"use client";

import { DefaultLayout } from "@/layouts";
import "@/styles/main.scss";
import { useEffect } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark-mode">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
