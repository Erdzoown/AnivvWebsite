export interface SectionContent {
  id: string;
  title?: string;
  body: string[];
  highlight?: string;
  images?: string[];
}

export interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
}
