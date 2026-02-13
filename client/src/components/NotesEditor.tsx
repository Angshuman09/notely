import {
  Bold,
  CheckSquare,
  ImageIcon,
  Italic,
  Link2,
  MoreHorizontal,
  Underline,
} from "lucide-react";
import type { Note } from "../lib/notes-data";

interface NoteEditorProps {
  note: Note | null;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onBack?: () => void;
}

const toolbarItems = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: CheckSquare, label: "Checklist" },
  { icon: ImageIcon, label: "Image" },
  { icon: Link2, label: "Link" },
];

export function NoteEditor({
  note,
  onTitleChange,
  onContentChange,
  onBack,
}: NoteEditorProps) {
  if (!note) {
    return (
      <div className="flex flex-1 items-center justify-center bg-card">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted-foreground"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="14 2 14 8 20 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16"
                y1="17"
                x2="8"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Select a note to start editing
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Or create a new one
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-card">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border px-6 py-3">
        <div className="flex items-center gap-1">
          {/* Back Button (Mobile Only) */}
          <button
            type="button"
            onClick={onBack}
            className="md:hidden mr-2 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {toolbarItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={item.label}
            >
              <item.icon className="h-4 w-4" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            Edited {note.date}
          </span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <div className="mx-auto max-w-2xl">
          {/* Title */}
          <input
            type="text"
            value={note.title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full bg-transparent text-3xl font-bold tracking-tight text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
            placeholder="Note title"
          />

          {/* Metadata */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs text-muted-foreground">{note.date}</span>
            {note.folder && (
              <>
                <span className="text-xs text-muted-foreground/40">{"/"}</span>
                <span className="text-xs text-muted-foreground">
                  {note.folder}
                </span>
              </>
            )}
          </div>

          {/* Content */}
          <textarea
            value={note.content}
            onChange={(e) => onContentChange(e.target.value)}
            className="mt-6 w-full flex-1 resize-none bg-transparent text-[15px] leading-relaxed text-foreground/80 placeholder:text-muted-foreground/30 focus:outline-none"
            placeholder="Start writing..."
            rows={20}
          />
        </div>
      </div>
    </div>
  );
}
