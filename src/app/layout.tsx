import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Efikcoin EFC Pay",
  description: "Efikcoin merchant payment system"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
