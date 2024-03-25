"use client";

import { DefaultLayout } from "@/layouts";
import "@/styles/main.scss";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
