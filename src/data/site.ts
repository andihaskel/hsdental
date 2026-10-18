/**
 * Clinic facts taken from the design reference.
 * Fields marked `confirmed: false` are visible in the layout exactly as
 * designed, but must not be treated as verified clinic data.
 */

export const site = {
  name: 'Haskel Socolovsky Odontología',
  shortName: 'Haskel Socolovsky',
  legalName: 'Haskel Socolovsky Odontología',
  url: 'https://hsdental.com.uy',
  locale: 'es-UY',
  lang: 'es-UY',
  title: 'Haskel Socolovsky Odontología | Clínica odontológica en Montevideo',
  description:
    'Clínica odontológica en Montevideo. Odontología integral con un equipo de especialistas, en Av. Sarmiento 2553. Coordiná tu primera consulta.',
  email: 'info@hsdental.com.uy',
  instagram: {
    handle: '@hs.dental',
    url: 'https://www.instagram.com/hs.dental/',
  },
  address: {
    street: 'Av. Sarmiento 2553',
    city: 'Montevideo',
    country: 'Uruguay',
    countryCode: 'UY',
    line: 'Av. Sarmiento 2553, Montevideo',
  },
  phones: [
    { display: '2711 7745', href: 'tel:+59827117745' },
    { display: '2712 7745', href: 'tel:+59827127745' },
  ],
  whatsapp: {
    display: '092 077 745',
    href: 'https://wa.me/59892077745?text=Hola%2C%20quisiera%20solicitar%20una%20consulta%20en%20Haskel%20Socolovsky%20Odontolog%C3%ADa.',
  },
  maps: {
    search:
      'https://www.google.com/maps/search/?api=1&query=Av.%20Sarmiento%202553%2C%20Montevideo',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Av.%20Sarmiento%202553%2C%20Montevideo',
    reviews:
      'https://www.google.com/maps/search/?api=1&query=Haskel%20Socolovsky%20Odontolog%C3%ADa%20Montevideo',
    embed:
      'https://maps.google.com/maps?q=Av.%20Sarmiento%202553%2C%20Montevideo%2C%20Uruguay&z=16&output=embed',
  },
  hours: {
    /** PENDING CONFIRMATION — the reference labels the days as "DÍAS A CONFIRMAR". */
    confirmed: false,
    summary: 'Lunes a viernes, 9 a 20 h',
    days: 'Lunes a viernes',
    time: '9 a 20 h',
  },
  /**
   * PENDING CONFIRMATION — shown as "[—]" and "A COMPLETAR".
   * Set a number only after the clinic confirms the years in practice.
   */
  yearsOfExperience: null as number | null,
  /** PENDING CONFIRMATION — facility copy references equipment still to be confirmed. */
  equipmentConfirmed: false,
  /** PENDING CONFIRMATION — biographies in the reference are marked as examples. */
  biographiesAreExamples: true,
} as const;

export const nav = [
  { label: 'La clínica', href: '#clinica' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export {
  consultationReasons,
  timePreferences,
  type ConsultationReason,
  type TimePreference,
} from '../utils/validation';
