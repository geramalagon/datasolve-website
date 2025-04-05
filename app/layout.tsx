import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { Navigation } from './components/navigation';

const hack = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hack',
});

export const metadata: Metadata = {
  title: 'DataSolve - Portfolio & Blog',
  description: 'Data Scientist & Technical Writer',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hack.variable}>
      <body suppressHydrationWarning className="font-hack flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="border-b">
          <Navigation />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} DataSolve LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
