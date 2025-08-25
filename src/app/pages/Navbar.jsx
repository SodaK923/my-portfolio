import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      <ul className="flex list-none p-0 m-0">
          <Link href="/" className="text-gray-800 no-underline text-lg hover:text-blue-600">
            Home
          </Link>
        <li className="mx-4">
          <Link href="#about-me" className="text-gray-800 no-underline text-lg hover:text-blue-600">
            About
          </Link>
        </li>
        <li className="ml-4"> {/* Changed mx-4 to ml-4 for right alignment */}
          <Link href="#projects" className="text-gray-800 no-underline text-lg hover:text-blue-600">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;