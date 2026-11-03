import { createRequest } from './requests.mjs';
const form = document.querySelector('#request-form');
const history = [];
function text(tag, content, className) { const node = document.createElement(tag); node.textContent = content; if (className) node.className = className; return node; }
form.addEventListener('submit', event => {
  event.preventDefault();
  const error = document.querySelector('#form-error');
  error.textContent = '';
  const data = new FormData(form);
  let record;
  try { record = createRequest({ service: data.get('service'), window: data.get('window'), note: data.get('note') }, history.length + 1); }
  catch (issue) { error.textContent = issue.message; const field = !data.get('service') ? '#service' : !data.get('window') ? '#window' : '#note'; document.querySelector(field).focus(); return; }
  history.push(record);
  document.querySelector('#empty-receipt').hidden = true;
  document.querySelector('#receipt-detail').hidden = false;
  for (const key of ['id', 'service', 'window', 'status']) document.querySelector(`#receipt-${key}`).textContent = record[key];
  document.querySelector('#receipt-note').textContent = record.note || 'No extra note.';
  document.querySelector('#receipt-heading').textContent = `${record.id}: pending review`;
  document.querySelector('#receipt-announcement').textContent = `Demo request ${record.id} recorded in this tab. Pending review. No booking has been made.`;
  const item = document.createElement('li');
  const first = text('p', ''); first.append(text('strong', record.id), text('span', record.status, 'tag'));
  item.append(first, text('p', record.service), text('p', record.window, 'small'));
  if (record.note) item.append(text('p', record.note, 'small'));
  document.querySelector('#history-list').prepend(item);
  document.querySelector('#empty-history').hidden = true;
  document.querySelector('#history-count').textContent = `${history.length} ${history.length === 1 ? 'request' : 'requests'} in this tab`;
  form.reset();
  document.querySelector('#receipt-heading').focus();
});
