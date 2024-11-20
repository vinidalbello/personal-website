import Image from "next/image";

export const Profile = () => {
  return (
    <section
      id="profile"
      className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative"
    >
      <div className="w-40 h-40 bg-gray-700 rounded-full overflow-hidden border-4 border-gray-900 mb-4">
        <Image
          src="/me-pp.jpeg"
          alt="Vinicius Dal Bello"
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-4xl font-bold mb-2">Vinicius Dal Bello</h2>
      <p className="italic text-gray-400 text-lg">&quot;The Full Stack Survivor&quot;</p>
      <ul className="mt-4 space-y-2 text-lg">
        <li>
          <strong>Class:</strong> Full Stack Developer
        </li>
        <li>
          <strong>Level:</strong> 2
        </li>
        <li>
          <strong>Status:</strong> Active
        </li>
      </ul>
    </section>
  );
};