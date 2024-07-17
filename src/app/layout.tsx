import type { Metadata } from "next";
import "./globals.css";
import { HomePageLayout } from "@/components/templates/homepagelayout";

export const metadata: Metadata = {
  title: "TechIsHiring Job Hunt Resoures",
  description:
    "App that has a collection of resources for Tech professionals on the job hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HomePageLayout>{children}</HomePageLayout>
      </body>
    </html>
  );
}
