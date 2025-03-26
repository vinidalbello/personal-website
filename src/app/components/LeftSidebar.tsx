"use client";

import Image from "next/image";
import Link from "next/link";

export const LeftSidebar = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/vinidalbello" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/viniciusdb/" },
  ];

  return (
    <div className="sticky top-4 space-y-4">
      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl">
        <div className="w-40 h-40 bg-paleta-lightestBrown rounded-full overflow-hidden border-4 border-paleta-mediumBrown mb-4 flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/me-pp.jpeg"
            alt="Vinicius Dal Bello"
            width={160}
            height={160}
            className="rounded-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-paleta-darkestBrown font-title">Vinicius Dal Bello</h2>
        <p className="italic text-paleta-darkBrown mb-4">Full Stack Developer</p>
        
        <div className="w-full flex justify-center space-x-2">
          <button className="bg-paleta-mediumBrown hover:bg-paleta-darkBrown text-paleta-lightestBrown px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md btn-hover-effect">
            Follow
          </button>
          <button className="bg-paleta-darkBrown hover:bg-paleta-darkestBrown text-paleta-lightestBrown px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md btn-hover-effect">
            Contact
          </button>
        </div>
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