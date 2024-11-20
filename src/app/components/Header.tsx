export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">
        Survivor Log: <span className="text-red-500">Vinicius Dal Bello</span>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#profile" className="hover:text-red-500 transition">
              Profile
            </a>
          </li>
          <li>
            <a href="#backpack" className="hover:text-red-500 transition">
              Backpack
            </a>
          </li>
          <li>
            <a href="#story" className="hover:text-red-500 transition">
              Story
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};