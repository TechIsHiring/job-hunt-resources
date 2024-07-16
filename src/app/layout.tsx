import type { Metadata } from "next";
import "./globals.css";

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
        <div className="flex w-full h-screen justify-center px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
