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
      <div className="mt-4 flex flex-1 items-center justify-center py-4 md:py-8">
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-12">
          <h1 className={`${lusitana.className} text-2xl font-bold text-gray-900 md:text-4xl`}>
            Selamat Datang!
          </h1>
          <p className="mt-3 text-base text-gray-700 leading-relaxed md:text-lg">
            Ini adalah situs web pembelajaran{' '}
            <a
              href="https://nextjs.org/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Mata Kuliah Web teknologi
            </a>
            , dengan Dosen Pengampu{' '}
            <strong className="text-gray-900">
              Adhitya Ahmad Pradypta, S.Kom., M.T.I.
            </strong>
          </p>

          <div className="mt-8">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}