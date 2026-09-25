export const SECTIONS = {
  essays: { collection: 'essays', path: 'ensaios', label: 'Ensaios', singular: 'ensaio' },
  notes: { collection: 'notes', path: 'notes', label: 'Notas', singular: 'nota' },
  poems: { collection: 'poems', path: 'poesias', label: 'Poesias', singular: 'poesia' },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export function sectionByCollection(collection: SectionKey) {
  return SECTIONS[collection];
}
