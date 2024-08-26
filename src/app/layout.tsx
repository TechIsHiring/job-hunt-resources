import type { Metadata } from "next";
import "./globals.css";
import { HomePageLayout } from "@/components/templates/homepagelayout";
import { MainLayoutCard } from "@/components/atoms/card";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { ThemeProvider } from "@/components/particles/theme-provider";
import dynamic from "next/dynamic";

const AppAnalytics = dynamic(
  () => import("../components/particles/analytics"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "TechIsHiring Job Search Resources",
  description:
    "App that has a collection of resources for Tech professionals on the job hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <AppAnalytics>
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
        </AppAnalytics>
      </body>
    </html>
  );
}
