"use client";

import Image from "next/image";

const DocumentsPage = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/next.svg"
                height="300"
                width="300"
                alt="Logo"
            />
        </div>
    );
}

export default DocumentsPage;