"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export const Editor = () => {
    const editor: BlockNoteEditor = useCreateBlockNote();
    return (
        <div className="w-[50%]">
            <BlockNoteView editor={editor} theme="light" />
        </div>
    );
}