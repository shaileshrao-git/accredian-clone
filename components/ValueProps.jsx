export default function ValueProps() {
  const data = [
    "Industry Expert Mentors",
    "Top University Programs",
    "Career-Focused Learning",
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="p-6 shadow rounded bg-white">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}