import { useState } from "react";
import { Extension } from "../types";
import { Modal } from "./Modal";

interface ExtensionCardProps {
  extension: Extension;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function ExtensionCard({
  extension,
  onToggle,
  onRemove,
}: ExtensionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get the image URL
  const getImageUrl = (path: string) => {
    // Remove the ./ prefix if it exists
    const cleanPath = path.replace("./", "");
    // Use Vite's import.meta.url to resolve the asset
    return new URL(`../${cleanPath}`, import.meta.url).href;
  };

  return (
    <>
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-600 min-h-[200px] flex flex-col">
        <div className="flex items-start gap-4 flex-1">
          <img
            src={getImageUrl(extension.logo)}
            alt={`${extension.name} logo`}
            className="w-12 h-12 rounded-xl"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white truncate">
              {extension.name}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
              {extension.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 mt-auto border-t border-neutral-200 dark:border-neutral-600">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-neutral-500 rounded-lg transition-colors hover:border-neutral-400 dark:hover:border-neutral-400"
          >
            Remove
          </button>
          <button
            onClick={() => onToggle(extension.id)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              extension.isActive
                ? "bg-red-500"
                : "bg-neutral-200 dark:bg-neutral-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                extension.isActive ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => onRemove(extension.id)}
        title="Remove Extension"
        message={`Are you sure you want to remove ${extension.name}? This action cannot be undone.`}
      />
    </>
  );
}
