import "./globals.css";

export const metadata = {
  title: "DFS Demo App",
  description: "A simple DFS-style player pick demo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-black">{children}</body>
    </html>
  );
}
