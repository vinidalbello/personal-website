"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks, profileData } from './staticData';

export const LeftSidebar = () => {
  return (
    <div className="sticky top-4 space-y-4">
      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl">
        <div className="w-40 h-40 bg-paleta-lightestBrown rounded-full overflow-hidden border-4 border-paleta-mediumBrown mb-4 flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <Image
            src={profileData.avatarUrl}
            alt={profileData.name}
            width={160}
            height={160}
            className="rounded-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-paleta-darkestBrown font-title">{profileData.name}</h2>
        <p className="italic text-paleta-darkBrown mb-2">{profileData.role}</p>
        <p className="text-sm text-paleta-darkBrown mb-4">{profileData.description}</p>
      </div>

      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-darkestBrown">Connect</h3>
        <ul className="space-y-2">
          {socialLinks.map((link) => (
            <li key={link.name} className="transform transition-transform hover:translate-x-1">
              <Link 
                href={link.url} 
                className="text-paleta-darkBrown hover:text-paleta-darkestBrown hover:underline flex items-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 