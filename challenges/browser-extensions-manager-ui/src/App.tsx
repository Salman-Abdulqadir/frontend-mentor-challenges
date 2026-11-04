import { useEffect } from "react";
import { useExtensionStore } from "./store/extensionStore";
import { Header } from "./components/Header";
import { FilterTabs } from "./components/FilterTabs";
import { ExtensionCard } from "./components/ExtensionCard";
import { EmptyState } from "./components/EmptyState";
import { Toaster, toast } from "react-hot-toast";
import extensionsData from "./data.json";
import { Extension } from "./types";

const showToast = (message: string, type: "success" | "error") => {
  const toastOptions = {
    duration: 2000,
    position: "top-center" as const,
    className:
      "!bg-white dark:!bg-neutral-800 !text-neutral-900 dark:!text-white",
  };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else {
    toast.error(message, toastOptions);
  }
};

export default function App() {
  const {
    extensions,
    setExtensions,
    activeFilter,
    searchQuery,
    toggleExtension,
    removeExtension,
    theme,
    setActiveFilter,
  } = useExtensionStore();

  useEffect(() => {
    // Add IDs to the extensions data
    const extensionsWithIds = (extensionsData as Omit<Extension, "id">[]).map(
      (ext, index) => ({
        ...ext,
        id: `ext-${index}`,
      })
    );
    setExtensions(extensionsWithIds);
  }, [setExtensions]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = (id: string) => {
    toggleExtension(id);
    const extension = extensions.find((ext) => ext.id === id);
    if (extension) {
      showToast(
        `${extension.name} ${extension.isActive ? "deactivated" : "activated"}`,
        "success"
      );
    }
  };

  const handleRemove = (id: string) => {
    const extension = extensions.find((ext) => ext.id === id);
    removeExtension(id);
    if (extension) {
      showToast(`${extension.name} removed`, "error");
    }
  };

  const filteredExtensions = extensions.filter((extension) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "active" && extension.isActive) ||
      (activeFilter === "inactive" && !extension.isActive);

    const matchesSearch =
      searchQuery.trim() === "" ||
      extension.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      extension.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#060913] text-neutral-900 dark:text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-3xl font-bold">Extensions List</h1>
              <FilterTabs
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
            {filteredExtensions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExtensions.map((extension) => (
                  <ExtensionCard
                    key={extension.id}
                    extension={extension}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                theme={theme}
                message={
                  searchQuery
                    ? "No extensions found matching your search"
                    : activeFilter !== "all"
                    ? `No ${activeFilter} extensions found`
                    : "No extensions available"
                }
              />
            )}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
}
