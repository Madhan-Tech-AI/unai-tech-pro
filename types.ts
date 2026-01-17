import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
