import type { ConsultationPayload } from './validation';

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'unconfigured' }
  | { ok: false; reason: 'error' };

/**
 * Modular submission.
 * Set PUBLIC_CONSULTATION_ENDPOINT to a service that accepts POST JSON.
 * Without an endpoint this returns `unconfigured` and never reports success.
 */
export async function submitConsultation(
  payload: ConsultationPayload,
  endpoint: string,
): Promise<SubmitResult> {
  const url = endpoint.trim();
  if (!url) return { ok: false, reason: 'unconfigured' };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) return { ok: false, reason: 'error' };
    return { ok: true };
  } catch {
    return { ok: false, reason: 'error' };
  }
}

export function whatsappConsultationUrl(payload: ConsultationPayload): string {
  const lines = [
    'Hola, quisiera solicitar una consulta en Haskel Socolovsky Odontología.',
    `Nombre: ${payload.name}`,
    `Teléfono: ${payload.phone}`,
    payload.email ? `Correo: ${payload.email}` : '',
    `Motivo: ${payload.reason}`,
    `Preferencia horaria: ${payload.timePreference}`,
    payload.comments ? `Comentarios: ${payload.comments}` : '',
  ].filter(Boolean);

  return `https://wa.me/59892077745?text=${encodeURIComponent(lines.join('\n'))}`;
}
