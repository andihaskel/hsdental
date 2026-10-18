import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isValidPhone, toPayload, validateConsultation, type ConsultationInput } from './validation.ts';

const valid = (): ConsultationInput => ({
  name: 'Ana Pérez',
  phone: '092 077 745',
  email: '',
  reason: 'Primera consulta',
  timePreference: 'Indistinto',
  comments: '',
  consent: true,
});

describe('isValidPhone', () => {
  it('accepts the clinic landline and mobile formats', () => {
    assert.equal(isValidPhone('2711 7745'), true);
    assert.equal(isValidPhone('092 077 745'), true);
    assert.equal(isValidPhone('+598 2712 7745'), true);
    assert.equal(isValidPhone('+598 92 077 745'), true);
  });

  it('rejects incomplete numbers', () => {
    assert.equal(isValidPhone('123'), false);
    assert.equal(isValidPhone(''), false);
  });
});

describe('validateConsultation', () => {
  it('accepts a complete request', () => {
    assert.deepEqual(validateConsultation(valid()), {});
    assert.ok(toPayload(valid()));
  });

  it('requires name, phone, and consent', () => {
    const errors = validateConsultation({
      ...valid(),
      name: 'A',
      phone: '12',
      consent: false,
    });
    assert.ok(errors.name);
    assert.ok(errors.phone);
    assert.ok(errors.consent);
  });

  it('validates email only when it is present', () => {
    assert.equal(validateConsultation({ ...valid(), email: 'no-es-mail' }).email !== undefined, true);
    assert.equal(validateConsultation({ ...valid(), email: 'ana@hsdental.com.uy' }).email, undefined);
  });

  it('does not build a payload for invalid input', () => {
    assert.equal(toPayload({ ...valid(), consent: false }), null);
  });
});
