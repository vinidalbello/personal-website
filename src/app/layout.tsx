import "./styles/globals.css";
import { Header } from "./components/Header";
export const metadata = {
  title: "Survivor Log: Vinicius Dal Bello",
  description: "Portfolio in the style of a zombie apocalypse survivor log.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200 font-mono min-h-screen">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}