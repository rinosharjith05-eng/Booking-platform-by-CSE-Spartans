const form = document.getElementById('bookingForm');
const msg = document.getElementById('message');
const bookingsList = document.createElement('ul');
document.body.appendChild(bookingsList);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const date = form.querySelector('input[type="date"]').value;
  const time = document.getElementById('time') ? document.getElementById('time').value : 'Not specified';

  msg.textContent = `✅ Booking Confirmed for ${name} on ${date} at ${time}`;
  msg.style.color = "yellow";

  const item = document.createElement('li');
  item.textContent = `${name} — ${date} — ${time}`;
  bookingsList.appendChild(item);

  form.reset();
});
