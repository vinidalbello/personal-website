import "./styles/globals.css";
import { poppins, raleway } from "./fonts";

export const metadata = {
  title: "Vinicius Dal Bello - Portfolio",
  description: "Portfolio pessoal de Vinicius Dal Bello, desenvolvedor Full Stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body className="bg-paleta-lightestBrown text-paleta-darkestBrown font-sans min-h-screen">
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}