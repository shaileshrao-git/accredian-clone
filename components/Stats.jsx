export default function Stats() {
  const data = [
    { value: "150%", label: "Salary Hike" },
    { value: "60%", label: "Avg Growth" },
    { value: "80%", label: "Career Impact" },
  ];

  return (
    <section className="py-10 bg-gray-50 text-center">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="p-6 shadow rounded">
            <h3 className="text-3xl font-bold">{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}