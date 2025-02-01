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
            width={135}
            height={30}
            className="w-[135px] h-auto sm:w-[180px]"
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
