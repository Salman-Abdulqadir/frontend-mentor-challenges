export type Theme = "light" | "dark";
export type FilterType = "all" | "active" | "inactive";

export interface Extension {
  id: string;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}
