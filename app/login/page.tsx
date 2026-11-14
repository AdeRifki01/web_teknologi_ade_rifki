'use client';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function Page() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <main className="flex min-h-screen flex-col bg-gray-50 p-4 md:p-6">
            {/* Navbar Header */}
            <header className="flex h-20 w-full items-center justify-between rounded-xl bg-blue-600 px-4 py-3 shadow-sm md:h-24 md:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo/uia-logo.png"
                        width={280}
                        height={85}
                        className="h-10 w-auto object-contain md:h-14"
                        alt="Logo Universitas Islam As-Syafi'iyah"
                        priority
                    />
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-lg bg-blue-700/60 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700 md:text-sm"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span>Kembali ke Beranda</span>
                </Link>
            </header>

            {/* Form Container */}
            <div className="flex flex-1 items-center justify-center py-8">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-8">
                    <div className="mb-6 text-center">
                        <h1 className={`${lusitana.className} text-2xl font-bold text-gray-900 md:text-3xl`}>
                            Silakan Masuk
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Gunakan akun Anda untuk mengakses dashboard
                        </p>
                    </div>

                    <form action={formAction} className="space-y-4">
                        <div>
                            <label
                                className="mb-2 block text-xs font-semibold text-gray-700 md:text-sm"
                                htmlFor="email"
                            >
                                Alamat Email
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="nama@email.com"
                                    required
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label
                                className="mb-2 block text-xs font-semibold text-gray-700 md:text-sm"
                                htmlFor="password"
                            >
                                Kata Sandi
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Ketikkan kata sandi"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                            </div>
                        </div>

                        <Button
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            aria-disabled={isPending}
                        >
                            <span>{isPending ? 'Memproses...' : 'Masuk'}</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </Button>

                        <div className="min-h-6 pt-1" aria-live="polite" aria-atomic="true">
                            {errorMessage && (
                                <div className="flex items-center gap-2 rounded-lg bg-red-50 p-2.5 text-sm text-red-600 border border-red-200">
                                    <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}