import { useExtensionStore } from "../store/extensionStore";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { theme, toggleTheme } = useExtensionStore();

  return (
    <div className="sticky top-4 z-50 container mx-auto px-4">
      <header className="bg-white dark:bg-[#0A0F1D] rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
        <div className="p-4 flex flex-col sm:flex-row items-center gap-4">
          <Logo theme={theme} />
          <div className="flex items-center gap-4 sm:ml-auto">
            <SearchBar />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </header>
    </div>
  );
}
