import { useState, useCallback, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { NotesList } from "../components/NotesList";
import { NoteEditor } from "../components/NotesEditor";
import { initialNotes } from "../lib/notes-data";
import type { Note } from "../lib/notes-data";
import { useIsMobile } from "../hooks/use-mobile";
import Auth from "./Auth";
import { useGetUser } from "@/hooks/user";

export function Home() {
  const { data: user, isLoading } = useGetUser()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      setOpen(true)
    }
  }, [isLoading, user])

  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [activeNav, setActiveNav] = useState("All Notes");
  const [activeNoteId, setActiveNoteId] = useState(notes[0]?.id ?? "");
  const [searchQuery, setSearchQuery] = useState("");

  const { isMobile } = { isMobile: useIsMobile() };
  const [mobileView, setMobileView] = useState<"list" | "editor">("list");
  const [showSidebar, setShowSidebar] = useState(false);

  const activeNote = notes.find((n) => n.id === activeNoteId) ?? null;

  const handleNewNote = useCallback(() => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      preview: "",
      content: "",
      date: "Just now",
    };
    setNotes((prev) => [newNote, ...prev]);
    setActiveNoteId(newNote.id);
    if (isMobile) {
      setMobileView("editor");
    }
  }, [isMobile]);

  const handleNoteSelect = useCallback(
    (id: string) => {
      setActiveNoteId(id);
      if (isMobile) {
        setMobileView("editor");
      }
    },
    [isMobile],
  );

  const handleTitleChange = useCallback(
    (title: string) => {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === activeNoteId
            ? { ...n, title, preview: n.content.slice(0, 100) }
            : n,
        ),
      );
    },
    [activeNoteId],
  );

  const handleContentChange = useCallback(
    (content: string) => {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === activeNoteId
            ? { ...n, content, preview: content.slice(0, 100) }
            : n,
        ),
      );
    },
    [activeNoteId],
  );

  // Reset view when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setMobileView("list");
      setShowSidebar(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <Auth open={open} onOpenChange={setOpen}/>
      <Sidebar
        activeNav={activeNav}
        onNavChange={setActiveNav}
        isOpen={showSidebar}
        onClose={() => setShowSidebar(false)}
        user = {user}
      />

      {/* Desktop Layout */}
      <div className="flex flex-1 overflow-hidden">
        {(!isMobile || mobileView === "list") && (
          <div
            className={`flex h-full ${isMobile ? "w-full" : "w-72 shrink-0"}`}
          >
            <NotesList
              notes={notes}
              activeNoteId={activeNoteId}
              onSelectNote={handleNoteSelect}
              onNewNote={handleNewNote}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onMenuClick={() => setShowSidebar(true)}
            />
          </div>
        )}

        {(!isMobile || mobileView === "editor") && (
          <div className="flex flex-1 flex-col overflow-hidden">
            <NoteEditor
              note={activeNote}
              onTitleChange={handleTitleChange}
              onContentChange={handleContentChange}
              onBack={() => setMobileView("list")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
