import { type LucideIcon } from "lucide-react";

interface NavigationItemBase {
  title: string;
  icon?: LucideIcon;
}

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

interface LocationInfo {
  name: string;
  image: string;
  description: string;
}

interface DropdownNavItem extends NavigationItemBase {
  type: "dropdown";
  items: DropdownItem[];
}

interface LocationNavItem extends NavigationItemBase {
  type: "location";
  icon: LucideIcon;
  current: LocationInfo;
  upcoming: LocationInfo[];
}

interface LinkNavItem extends NavigationItemBase {
  type: "link";
  href: string;
  icon?: LucideIcon;
}

export type NavigationItem = DropdownNavItem | LocationNavItem | LinkNavItem;