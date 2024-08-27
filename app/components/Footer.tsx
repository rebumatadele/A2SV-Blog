import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-5">

        {/* Column 1: Image */}
        <div className="flex justify-center md:justify-start">
          <Image src="/Footer.png" alt="Footer Logo" width={296} height={221} />
        </div>

        {/* Column 2: Get Involved */}
        <div className="flex flex-col justify-center text-center md:text-left gap-5">
          <p className="text-lg font-semibold">
            Get involved in improving <br />
            tech education in Africa!
          </p>
          <Button className='text-white bg-[#264FAD] font-bold'>Support Us</Button>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            {['Home', 'Teams', 'Success Stories', 'About Us'].map((link) => (
              <li key={link}>
                <Link href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-[#264FAD]">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Teams */}
        <div>
          <h3 className="text-lg font-bold mb-4">Teams</h3>
          <ul className="space-y-2">
            {['Board Members', 'Advisors/Mentors', 'Executives', 'Staffs'].map((team) => (
              <li key={team}>
                {team}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Blogs */}
        <div>
          <h3 className="text-lg font-bold mb-4">Blogs</h3>
          <ul className="space-y-2">
            {['Recent Blogs', 'New Blog'].map((blog) => (
              <li key={blog}>
                {blog}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Horizontal Rule */}
      <hr className="my-3 mx-5 border-gray-700" />

      {/* Footer Bottom */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright */}
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        
        {/* Social Media Icons */}
        <div className="flex gap-4 text-gray-400">
          <Link href="https://twitter.com" className="hover:text-[#264FAD]">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://facebook.com" className="hover:text-[#264FAD]">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-[#264FAD]">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-[#264FAD]">
            <FaLinkedinIn size={20} />
          </Link>
          <Link href="https://youtube.com" className="hover:text-[#264FAD]">
            <FaYoutube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
