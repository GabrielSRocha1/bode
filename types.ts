export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface TokenData {
  name: string;
  value: number;
  fill: string;
}