export const metadata = {
  title: "Accredian Clone",
  description: "Enterprise Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}