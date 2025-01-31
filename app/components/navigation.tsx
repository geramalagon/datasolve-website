"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <Link 
      href={href} 
      className={`px-3 py-1 rounded-md transition-colors lowercase ${
        isActive 
          ? 'bg-secondary text-foreground' 
          : 'hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="DataSolve Logo"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="space-x-2">
          <NavLink href="/">home</NavLink>
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/blog">blog</NavLink>
        </div>
      </div>
    </nav>
  );
}