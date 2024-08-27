"use client"; // Ensures the component is treated as a client-side component

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  // Utility function to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 py-10 bg-white">
      {/* Logo on the Right */}
      <div className="flex-shrink-0">
        <Image src="/Logo.png" alt="Logo" className="h-8 w-auto" width={197} height={50} />
      </div>

      {/* Links in the Middle */}
      <div className="flex space-x-8">
        {['Home', 'Teams', 'Success Stories', 'About Us', 'Blog', 'Get Involved'].map((link) => {
          const href = `/${link.replace(/\s+/g, '-').toLowerCase()}`;
          return (
            <Link
              key={link}
              href={href}
              className={`${isActive(href) ? 'text-[#264FAD] underline' : 'text-gray-700 hover:text-[#264FAD]'}`}
            >
              {link}
            </Link>
          );
        })}
      </div>

      {/* Buttons on the Left */}
      <div className="flex space-x-4">
        <Button
          className="text-white bg-[#264FAD] hover:bg-[#1F3D8A] focus:outline-none"
        >
          Login
        </Button>
        <Button
          className="text-white bg-[#264FAD] hover:bg-[#1F3D8A] focus:outline-none"
        >
          Donate
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
