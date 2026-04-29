export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
      <h1 className="text-xl font-bold">Accredian</h1>
      <div className="space-x-4 hidden md:block">
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Schedule Call
      </button>
    </div>
  );
}