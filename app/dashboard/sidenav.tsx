import Link from "next/link";
import NavLinks from "@/app/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signOut } from "@/auth";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-3">
            <Link
                className="mb-2 flex h-16 items-center justify-center rounded-xl bg-blue-600 p-2 shadow-sm transition-all hover:bg-blue-700 md:mb-3 md:h-36 md:p-3"
                href="/"
            >
                <div className="relative flex w-full items-center justify-center">
                    <Image
                        src="/logo/uia-logo.png"
                        width={280}
                        height={85}
                        className="h-9 w-auto object-contain md:h-20"
                        alt="Logo Universitas Islam As-Syafi'iyah"
                        priority
                    />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-xl bg-gray-50/80 md:block"></div>
                <form
                    action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/login" });
                    }}
                >
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600 md:flex-none md:justify-start md:p-2.5 md:px-3">
                        <PowerIcon className="w-5" />
                        <div className="hidden md:block">Keluar</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
