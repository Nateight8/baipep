import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const body = localFont({
  src: "../../public/fonts/neue/NeueMontreal-Book.otf",
});

const heading = localFont({
  src: "../../public/fonts/anger/heavy.otf",
  variable: "--heading",
});

export const metadata = {
  title: "BOB AI PEP | Welcome",
  description:
    "We are building a #meme for the love we have on #pepe Having BAIPepe  as part of the #Pepe family we have thrilled to give back opportunity to those that didn't catch up on time during Pepe pump",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${body.className} ${heading.variable}`}>
        <Header />
        <main className="mx-auto max-w-screen-2xl p-4 md:px-6 md:py-6">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
