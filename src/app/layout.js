import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "./components/Loader";

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

export const metadata = {
  title: "Next-Auth",
  description: "Custom Next Auth",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ClerkLoading>
          <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
            {/* <div className="text-2xl font-bold text-gray-800">Loading...</div> */}
            <Loader/>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
        <Header/>
        {children}
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
