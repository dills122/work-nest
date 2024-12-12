import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Work Nest - Task Mngmt",
  description: "Track all your to-do's in one spot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto min-h-full flex flex-col items-center h-screen">
          <div className="flex flex-col items-center w-3/4 p-4">
            <div className="flex justify-center items-center text-sky-500">
              <RocketLaunchIcon className="size-10 mx-4" />
              <h1 className="p-2 text-6xl font-extrabold">Work Nest</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
