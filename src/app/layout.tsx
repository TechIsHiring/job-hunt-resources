import type { Metadata } from "next";
import "./globals.css";
import { HomePageLayout } from "@/components/templates/homepagelayout";
import { MainLayoutCard } from "@/components/atoms/card";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/particles/theme-provider";

export const metadata: Metadata = {
  title: "TechIsHiring Job Search Resoures",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HomePageLayout>
            <MainLayoutCard>
              <div className="flex flex-col gap-4 pt-5">
                <Header />
                {children}
              </div>
              <Footer />
            </MainLayoutCard>
          </HomePageLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
