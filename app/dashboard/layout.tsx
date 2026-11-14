import SideNav from '@/app/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-slate-50 md:flex-row md:overflow-hidden">
      <div className="w-full flex-none bg-white border-b border-gray-200/70 md:w-64 md:border-b-0 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-10">{children}</div>
    </div>
  );
}

