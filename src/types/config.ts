export interface Site {
  title: string;
  description: string;
  url: string;
  advantages?: string[];
  related?: {
    title: string;
    description: string;
  }[];
}

export interface SubMenuItem {
  name: string;
  href: string;
  icon: string;
  sites: Site[];
}

export interface MenuItem {
  name: string;
  href: string;
  icon: string;
  type: 'single' | 'tabs';
  sites?: Site[];
  submenu?: SubMenuItem[];
}

export interface Config {
  site: {
    title: string;
    description: string;
    logo: {
      text: string;
      href: string;
    };
  };
  categoryMap: {
    [key: string]: string;
  };
  menuItems: MenuItem[];
}

export interface StaticPath {
  params: { slug: string };
  props: {
    site: Site;
    category: string;
    subcategory?: string;
  };
} 