import Footer from "@components/footer/Footer";
import Navbar from "@components/nav/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Anu Cuts Studio",
  description: "Reserve your Spot in Advance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
