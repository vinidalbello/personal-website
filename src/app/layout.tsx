import "./styles/globals.css";
import { poppins, raleway } from "./fonts";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

export const metadata = {
  title: "Vinicius Dal Bello - Portfolio",
  description: "Portfolio pessoal de Vinicius Dal Bello, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${poppins.variable} ${raleway.variable}`}>
      <body className="bg-paleta-nearBlack text-paleta-lightGray font-sans min-h-screen">
        <ThemeToggle />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}