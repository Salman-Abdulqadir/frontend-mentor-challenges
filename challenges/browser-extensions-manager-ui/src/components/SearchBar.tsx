import { useExtensionStore } from "../store/extensionStore";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useExtensionStore();

  return (
    <div className="relative w-48 sm:w-64">
      <input
        type="text"
        placeholder="Search extensions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
      />
      <svg
        className="absolute left-3 top-2.5 w-4 h-4 text-neutral-500 dark:text-neutral-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
