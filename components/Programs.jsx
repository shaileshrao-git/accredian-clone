export default function Programs() {
  const programs = ["Leadership", "Data Science", "AI"];

  return (
    <section id="programs" className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-8">Programs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <div key={i} className="p-6 border rounded">
            <h3 className="text-xl font-semibold">{p}</h3>
            <p className="my-2">Learn industry skills</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}