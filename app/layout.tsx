import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng" className={NotoSansKR.className}>
      <body className=" relative min-h-screen bg-gray-200">{children}</body>
    </html>
  );
}
