import { FilterType } from "../types";

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  const filterOptions: FilterType[] = ["all", "active", "inactive"];

  return (
    <div className="flex justify-end md:gap-2">
      <div className="inline-flex gap-1.5 bg-neutral-200 dark:bg-neutral-800/90 rounded-full p-1.5 md:bg-transparent md:dark:bg-transparent">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`px-5 md:px-7 py-2.5 rounded-full font-medium capitalize transition-all duration-200 ease-in-out
              ${
                activeFilter === filter
                  ? "bg-red-500 text-white hover:bg-red-600 md:shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700/50 md:bg-white md:dark:bg-neutral-800/50 md:shadow-sm md:hover:bg-neutral-50 md:dark:hover:bg-neutral-800/70"
              }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
