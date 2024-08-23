import './globals.css';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Manage Users, Orders, and Products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
