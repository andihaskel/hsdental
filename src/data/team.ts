export interface Professional {
  id: string;
  name: string;
  specialty: string;
  /**
   * PENDING CONFIRMATION.
   * The reference labels these texts "RESEÑAS BIOGRÁFICAS DE EJEMPLO".
   * They are reproduced from the design and are not verified credentials.
   */
  biography: string;
  portraitLabel: string;
  /** Visual tone of the portrait placeholder until a real black-and-white photo exists. */
  tone: 'gray' | 'gray-deep' | 'mist';
}

export const team: Professional[] = [
  {
    id: 'carlos-haskel',
    name: 'Dr. Carlos Haskel',
    specialty: 'Rehabilitación e implantes',
    biography:
      'Responsable de los tratamientos de rehabilitación oral e implantología, con un enfoque centrado en la función y la estabilidad a largo plazo.',
    portraitLabel: 'Retrato B/N',
    tone: 'gray',
  },
  {
    id: 'beatriz-socolovsky',
    name: 'Dra. Beatriz Socolovsky',
    specialty: 'Ortodoncia y ortopedia',
    biography:
      'A cargo del área de ortodoncia y ortopedia para niños, adolescentes y adultos, con controles cercanos en cada etapa.',
    portraitLabel: 'Retrato B/N',
    tone: 'gray-deep',
  },
  {
    id: 'denise-haskel',
    name: 'Dra. Denise Haskel',
    specialty: 'Periodoncia',
    biography:
      'Se dedica al diagnóstico y tratamiento de las encías, base de cualquier tratamiento duradero.',
    portraitLabel: 'Retrato B/N',
    tone: 'mist',
  },
  {
    id: 'adriana-gaspar',
    name: 'Dra. Adriana Gaspar',
    specialty: 'Endodoncia',
    biography:
      'Especialista en tratamientos de conducto, con el objetivo de conservar siempre que sea posible la pieza propia.',
    portraitLabel: 'Retrato B/N',
    tone: 'gray-deep',
  },
  {
    id: 'stephanie-ramos',
    name: 'Dra. Stephanie Ramos',
    specialty: 'Odontología general',
    biography:
      'Coordina la atención general, los controles periódicos y el seguimiento de los pacientes de la clínica.',
    portraitLabel: 'Retrato B/N',
    tone: 'mist',
  },
  {
    id: 'ramiro-betancor',
    name: 'Dr. Ramiro Betancor',
    specialty: 'Cirugía maxilofacial',
    biography:
      'Realiza los procedimientos quirúrgicos del equipo, con indicaciones claras antes y después de cada intervención.',
    portraitLabel: 'Retrato B/N',
    tone: 'gray',
  },
];
