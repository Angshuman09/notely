"use client";

import { Plus, Search } from "lucide-react";
import type { Note } from "@/lib/notes-data";

interface NotesListProps {
  notes: Note[];
  activeNoteId: string;
  onSelectNote: (id: string) => void;
  onNewNote: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuClick?: () => void;
}

export function NotesList({
  notes,
  activeNoteId,
  onSelectNote,
  onNewNote,
  searchQuery,
  onSearchChange,
  onMenuClick,
}: NotesListProps) {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.preview.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="relative flex h-full w-72 flex-col border-r border-border bg-card">
      {/* Search */}
      <div className="p-4 pb-2">
        <div className="flex items-center gap-2 mb-3 md:hidden">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold">Notes</span>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto px-3 pb-20">
        {filteredNotes.map((note) => {
          const isActive = activeNoteId === note.id;
          return (
            <button
              key={note.id}
              type="button"
              onClick={() => onSelectNote(note.id)}
              className={`mb-1.5 w-full rounded-xl p-3.5 text-left transition-all ${
                isActive ? "bg-primary/10 shadow-sm" : "hover:bg-accent/50"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3
                  className={`text-sm font-semibold leading-tight ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {note.title}
                </h3>
                <span className="flex-shrink-0 text-xs text-muted-foreground">
                  {note.date}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {note.preview}
              </p>
              {note.folder && (
                <span className="mt-2 inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {note.folder}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* New Note Button */}
      <div className="absolute bottom-5 right-5">
        <button
          type="button"
          onClick={onNewNote}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
          aria-label="Create new note"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
