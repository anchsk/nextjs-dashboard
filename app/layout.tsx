import '@/app/ui/global.css'
import { inter, lusitana } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lusitana.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
