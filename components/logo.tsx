import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {headingFont} from "@/components/localFont";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2
            hidden md:flex">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src="/logo.svg" alt="Logo" height={30} width={30} />
                <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}>Taskify</p>
            </div>
        </Link>
    )
}