export type ItemType = 'scroll' | 'envelope';

export interface LoveItem {
  id: number;
  type: ItemType;
  title: string;
  previewText: string;
  content: string;
}
