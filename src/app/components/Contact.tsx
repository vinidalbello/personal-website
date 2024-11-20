export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400">
        If you&apos;re receiving this, I’m still out here surviving. Reach out via:
      </p>
      <ul className="mt-4 space-y-2">
        <li>
          Email:{" "}
          <a href="mailto:vinicius.cej@gmail.com" className="text-red-500 hover:underline">
            vinicius.cej@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/viniciusdb/" className="text-red-500 hover:underline">
            linkedin.com/in/viniciusdb/
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/vinidalbello" className="text-red-500 hover:underline">
            github.com/vinidalbello
          </a>
        </li>
      </ul>
    </section>
  );
};