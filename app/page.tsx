import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 p-4 md:p-6">
      {/* Header Banner */}
      <header className="flex h-20 w-full shrink-0 items-center justify-between rounded-xl bg-blue-600 px-4 py-3 shadow-sm md:h-28 md:px-8">
        <div className="flex items-center">
          <Image
            src="/logo/uia-logo.png"
            width={280}
            height={85}
            className="h-10 w-auto object-contain md:h-16"
            alt="Logo Universitas Islam As-Syafi'iyah"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-xl border border-gray-200/80 bg-white px-6 py-8 shadow-xs md:w-2/5 md:px-12 md:py-12">
          <p className={`${lusitana.className} text-lg text-gray-800 md:text-2xl md:leading-normal`}>
            <strong className="text-xl md:text-3xl text-gray-900">Selamat Datang!</strong> <br />
            Ini adalah situs web pembelajaran{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-600 font-semibold hover:underline">
              Mata Kuliah Web teknologi
            </a>
            , Dosen Pengampu <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-3 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center rounded-xl border border-gray-200/80 bg-white p-4 shadow-xs md:w-3/5 md:px-10 md:py-8">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block object-contain"
            alt="Tampilan dashboard versi desktop"
            priority
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block max-w-[280px] h-auto object-contain md:hidden"
            alt="Tampilan dashboard versi mobile"
          />
        </div>
      </div>
    </main>
  );
}