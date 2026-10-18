export interface Treatment {
  id: string;
  number: string;
  name: string;
  description: string;
  reason: string;
}

export const treatments: Treatment[] = [
  {
    id: 'odontologia-general',
    number: '01',
    name: 'Odontología general',
    description:
      'Controles periódicos, limpiezas y prevención. La base para conservar la salud bucal a largo plazo.',
    reason: 'Odontología general',
  },
  {
    id: 'estetica-dental',
    number: '02',
    name: 'Estética dental',
    description:
      'Mejoras en la forma y el color de los dientes, con resultados naturales y en armonía con el rostro.',
    reason: 'Estética dental',
  },
  {
    id: 'ortodoncia',
    number: '03',
    name: 'Ortodoncia',
    description:
      'Corrección de la posición dental en niños, adolescentes y adultos, mediante alineadores o brackets.',
    reason: 'Ortodoncia',
  },
  {
    id: 'implantes-dentales',
    number: '04',
    name: 'Implantes dentales',
    description: 'Reposición de piezas perdidas con una planificación previa detallada.',
    reason: 'Implantes dentales',
  },
  {
    id: 'blanqueamiento',
    number: '05',
    name: 'Blanqueamiento',
    description:
      'Aclaramiento del tono dental bajo supervisión profesional, preservando la salud del esmalte.',
    reason: 'Blanqueamiento',
  },
  {
    id: 'rehabilitacion-oral',
    number: '06',
    name: 'Rehabilitación oral',
    description:
      'Planes integrales para recuperar la función y la estética cuando intervienen varias especialidades.',
    reason: 'Rehabilitación oral',
  },
  {
    id: 'endodoncia',
    number: '07',
    name: 'Endodoncia',
    description: 'Tratamientos de conducto orientados a conservar la pieza dental propia.',
    reason: 'Endodoncia',
  },
  {
    id: 'periodoncia',
    number: '08',
    name: 'Periodoncia',
    description: 'Diagnóstico y tratamiento de las encías y de los tejidos que sostienen los dientes.',
    reason: 'Periodoncia',
  },
  {
    id: 'cirugia-maxilofacial',
    number: '09',
    name: 'Cirugía maxilofacial',
    description: 'Extracciones complejas, terceros molares y procedimientos de cirugía oral.',
    reason: 'Cirugía maxilofacial',
  },
];
