export const Backpack = () => {
  const skills = [
    { name: "TypeScript", description: "My go-to for scalable and efficient systems." },
    { name: "Docker", description: "For isolated and reliable environments." },
    { name: "React.js", description: "Building dynamic and interactive UIs." },
    { name: "PostgreSQL", description: "Managing complex data structures." },
  ];

  return (
    <section id="backpack" className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-3xl font-bold mb-4">Backpack</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};