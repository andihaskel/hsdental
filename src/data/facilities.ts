export interface FacilityImage {
  id: string;
  label: string;
  tone: 'slate-light' | 'mist' | 'slate' | 'gray';
}

/** La clínica, Consultorio and Esterilización use real photos. The rest are still placeholders. */
export const facilityLead: FacilityImage[] = [
  { id: 'clinica', label: '01 · La clínica', tone: 'slate-light' },
  { id: 'consultorio', label: '02 · Consultorio', tone: 'mist' },
];

export const facilityRow: FacilityImage[] = [
  { id: 'diagnostico', label: '03 · Diagnóstico por imagen', tone: 'slate' },
  { id: 'atencion', label: '04 · Atención, B/N', tone: 'gray' },
  { id: 'esterilizacion', label: '05 · Esterilización', tone: 'slate-light' },
];
