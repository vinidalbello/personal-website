"use client";
import { Company } from "../types/Company";
import Image from "next/image";

export const Story = () => {
  const timelineData: Company[] = [
    {
      id: 1,
      company: "Victoware",
      role: "Full Stack Developer",
      startDate: "Aug 2023",
      endDate: "Now",
      description: "Developed scalable web applications using React and Node.js. Led the migration to a Dockerized environment.",
      images: ["/me-pp.jpeg", "/techcorp-2.jpg"],
    },
    {
      id: 2,
      company: "CodeStudio",
      role: "Frontend Developer",
      startDate: "Feb 2018",
      endDate: "Dec 2019",
      description: "Focused on building responsive UI with TypeScript and maintaining cross-browser compatibility.",
      images: ["/codestudio-1.jpg", "/codestudio-2.jpg"],
    },
  ];
  

  return (
    <section id="story" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Story</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 bottom-0 w-1 bg-gray-600"></div>
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="relative mb-8 flex items-center gap-4 w-full"
            >
              <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
              <div className="ml-8">
                <p className="text-lg font-semibold text-gray-200">{item.startDate} - {item.endDate}</p>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold">{item.company}</h3>
              <p className="text-gray-400 italic mb-4">
                {item.role} ({item.startDate} - {item.endDate})
              </p>
              <p className="text-gray-400">{item.description}</p>
              <div className="mt-4 flex gap-4">
                {item.images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`${item.company} - ${index + 1}`}
                    width={96}
                    height={96}
                    className="rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};