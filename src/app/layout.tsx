import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "OIS Europe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <link rel="icon" href="/faviconNew.ico" type="image/x-icon" sizes="16x16"/>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
