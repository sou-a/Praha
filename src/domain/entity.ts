export interface HistoryElement {
  squares: InSquare[];
}

export type History = HistoryElement[];
export type InSquare = 'X' | 'O' | null;
