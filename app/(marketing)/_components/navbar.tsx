"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/documents">
                        Enter Notion Clone
                    </Link>
                </Button>
            </div>
        </div>
    )
}