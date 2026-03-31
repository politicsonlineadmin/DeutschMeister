import type { Metadata, Viewport } from 'next';
import { Raleway, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DeutschMeister \u2014 Learn German',
  description:
    'Adaptive German language learning from A1 to C2, powered by AI tutoring.',
  applicationName: 'DeutschMeister',
  keywords: ['German', 'language learning', 'CEFR', 'A1', 'C2', 'Deutsch'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8ffff',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${jetbrainsMono.variable}`}>
      <body className={`${raleway.className} bg-[#f8ffff]`}>
        {children}
      </body>
    </html>
  );
}
