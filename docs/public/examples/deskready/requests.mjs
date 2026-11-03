export const services = { room: 'Quiet meeting room', table: 'Project table', equipment: 'Presentation equipment help' };
export const windows = { morning: 'Morning · 9 a.m.–noon', afternoon: 'Afternoon · noon–4 p.m.', evening: 'Evening · 4–7 p.m.' };
export function createRequest(input, sequence = 1) {
  if (!Object.hasOwn(services, input.service)) throw new Error('Choose a service from the list.');
  if (!Object.hasOwn(windows, input.window)) throw new Error('Choose a preferred time window.');
  const note = typeof input.note === 'string' ? input.note.trim() : '';
  if (note.length > 240) throw new Error('Keep your note to 240 characters.');
  if (!Number.isInteger(sequence) || sequence < 1) throw new Error('Request sequence must be a positive whole number.');
  return { id: `DR-${String(sequence).padStart(3, '0')}`, service: services[input.service], window: windows[input.window], note, status: 'Pending review' };
}
