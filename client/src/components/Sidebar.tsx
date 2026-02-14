import type { User } from "@/types";
import { FileText, Folder, Star, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  count?: number;
}

const navItems: NavItem[] = [
  { icon: FileText, label: "All Notes", count: 12 },
  { icon: Folder, label: "Folders" },
  { icon: Star, label: "Favorites", count: 3 },
  { icon: Trash2, label: "Trash" },
];

interface SidebarProps {
  activeNav: string;
  onNavChange: (label: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  user?: User | null;
}

export function Sidebar({
  activeNav,
  onNavChange,
  isOpen,
  onClose,
  user,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 h-full w-64 transform bg-sidebar py-6 transition-transform duration-300 md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 pb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <FileText className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-semibold tracking-tight text-sidebar-foreground">
            Notes
          </span>
        </div>

        {/* Divider */}
        <div className="mx-5 border-t border-sidebar-border" />

        {/* Navigation */}
        <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  onNavChange(item.label);
                  onClose?.();
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.count !== undefined && (
                  <span className="text-xs text-muted-foreground">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div className="mx-5 border-t border-sidebar-border" />
        <div className="flex items-center gap-3 px-5 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {user?.username?.[0]?.toUpperCase() ?? "?"}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-sidebar-foreground truncate">
              {user?.username ?? "Guest"}
            </span>
            <span className="text-xs text-muted-foreground">Personal</span>
          </div>
        </div>
      </aside>
    </>
  );
}
