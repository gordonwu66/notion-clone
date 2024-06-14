import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/next.svg"
                height="100"
                width="100"
                alt="Logo"
            />
            <p className={cn("font-semibold", font.className)}>
                Notion Clone
            </p>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    )
}