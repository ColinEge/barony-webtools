export type EffectState = 'neutral' | 'positive' | 'negative';

export interface ScrollEffect {
  text: string;
  state: EffectState;
}

export interface ScrollInfo {
  id: string;
  name: string;
  weight: number;
  gold: number;
  
  effect: ScrollEffect;
  blessedEffect: ScrollEffect;
  cursedEffect: ScrollEffect;
}

export interface SessionScrollData {
  scrollId: string;
  inscription: string | null;
}

export interface ScrollSession {
  id: string;
  sessionName: string;

  scrolls: SessionScrollData[];
}