import { lusitana } from '@/app/ui/fonts';

export default function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-6 text-xl font-bold text-gray-900 md:text-3xl`}>
        Dashboard
      </h1>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <p className="text-gray-700">
          Selamat datang di halaman <strong>Dashboard</strong>. Anda dapat mengelola invoice dan data pelanggan melalui menu di samping.
        </p>
      </div>
    </main>
  );
}

