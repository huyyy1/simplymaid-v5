export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-600 to-violet-800">
      <div className="w-full max-w-md mx-auto p-4">{children}</div>
    </div>
  );
}