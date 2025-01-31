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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hack.variable}>
      <body suppressHydrationWarning className="font-hack">
        <header className="border-b">
          <Navigation />
        </header>
        {children}
        <footer className="bg-secondary py-12">
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