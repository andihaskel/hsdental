export interface Professional {
  id: string;
  name: string;
  specialty: string;
}

export const team: Professional[] = [
  {
    id: 'carlos-haskel',
    name: 'Dr. Carlos Haskel',
    specialty: 'Rehabilitación e implantes',
  },
  {
    id: 'beatriz-socolovsky',
    name: 'Dra. Beatriz Socolovsky',
    specialty: 'Ortodoncia y ortopedia',
  },
  {
    id: 'denise-haskel',
    name: 'Dra. Denise Haskel',
    specialty: 'Periodoncia',
  },
  {
    id: 'adriana-gaspar',
    name: 'Dra. Adriana Gaspar',
    specialty: 'Endodoncia',
  },
  {
    id: 'stephanie-ramos',
    name: 'Dra. Stephanie Ramos',
    specialty: 'Odontología general',
  },
  {
    id: 'ramiro-betancor',
    name: 'Dr. Ramiro Betancor',
    specialty: 'Cirugía maxilofacial',
  },
];
