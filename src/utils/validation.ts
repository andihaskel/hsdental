export const consultationReasons = [
  'Primera consulta',
  'Odontología general',
  'Estética dental',
  'Ortodoncia',
  'Implantes dentales',
  'Blanqueamiento',
  'Rehabilitación oral',
  'Endodoncia',
  'Periodoncia',
  'Cirugía maxilofacial',
] as const;

export const timePreferences = ['Indistinto', 'Mañana', 'Tarde'] as const;

export type ConsultationReason = (typeof consultationReasons)[number];
export type TimePreference = (typeof timePreferences)[number];

export interface ConsultationInput {
  name: string;
  phone: string;
  email: string;
  reason: string;
  timePreference: string;
  comments: string;
  consent: boolean;
}

export interface ConsultationPayload {
  name: string;
  phone: string;
  email?: string;
  reason: string;
  timePreference: string;
  comments?: string;
  consent: true;
}

export type FieldName = 'name' | 'phone' | 'email' | 'reason' | 'timePreference' | 'comments' | 'consent';

export type FieldErrors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return (
    /^2\d{7}$/.test(digits) ||
    /^09\d{7}$/.test(digits) ||
    /^5982\d{7}$/.test(digits) ||
    /^5989\d{7}$/.test(digits)
  );
}

export function isValidEmail(value: string): boolean {
  return emailPattern.test(value.trim());
}

export function validateConsultation(input: ConsultationInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();

  if (name.length < 3 || !/^[\p{L}\s'.-]+$/u.test(name)) {
    errors.name = 'Ingrese su nombre y apellido.';
  }

  if (!isValidPhone(input.phone)) {
    errors.phone = 'Ingrese un teléfono válido. Por ejemplo, 2711 7745 o 092 077 745.';
  }

  const email = input.email.trim();
  if (email && !isValidEmail(email)) {
    errors.email = 'Ingrese un correo electrónico válido.';
  }

  if (!(consultationReasons as readonly string[]).includes(input.reason)) {
    errors.reason = 'Seleccione el motivo de la consulta.';
  }

  if (!(timePreferences as readonly string[]).includes(input.timePreference)) {
    errors.timePreference = 'Seleccione una preferencia horaria.';
  }

  if (!input.consent) {
    errors.consent = 'Debe aceptar que la clínica lo contacte para coordinar la consulta.';
  }

  if (input.comments.trim().length > 500) {
    errors.comments = 'El comentario puede tener hasta 500 caracteres.';
  }

  return errors;
}

export function toPayload(input: ConsultationInput): ConsultationPayload | null {
  if (Object.keys(validateConsultation(input)).length > 0) return null;

  const email = input.email.trim();
  const comments = input.comments.trim();

  return {
    name: input.name.trim(),
    phone: input.phone.trim(),
    ...(email ? { email } : {}),
    reason: input.reason,
    timePreference: input.timePreference,
    ...(comments ? { comments: comments.slice(0, 500) } : {}),
    consent: true,
  };
}
