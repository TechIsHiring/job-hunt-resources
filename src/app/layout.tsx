import type { Metadata } from "next";
import "./globals.css";
import { HomePageLayout } from "@/components/templates/homepagelayout";
import { MainLayoutCard } from "@/components/atoms/card";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

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
            <div className="flex flex-col gap-4">
              <Header />
              {children}
            </div>
            <Footer />
          </MainLayoutCard>
        </HomePageLayout>
      </body>
    </html>
  );
}