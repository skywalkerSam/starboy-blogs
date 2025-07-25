
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-b from-transparent via-blue-400 to-transparent">
      {children}
    </main>
  );
}
