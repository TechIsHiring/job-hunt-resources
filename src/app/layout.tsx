import type { Metadata } from "next";
import "./globals.css";
import { HomePageLayout } from "@/components/templates/homepagelayout";
import { MainLayoutCard } from "@/components/atoms/card";
import { Header } from "@/components/organisms/header";

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
        <HomePageLayout>
          <MainLayoutCard>
            <Header />
            {children}
          </MainLayoutCard>
        </HomePageLayout>
      </body>
    </html>
  );
}
