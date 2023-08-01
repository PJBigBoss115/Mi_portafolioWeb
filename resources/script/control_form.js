const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const project = document.getElementById('project').value;
  const contactTime = document.getElementById('contact-time').value;

  const message = `
    Nombre: ${name}
    Correo electrónico: ${email}
    Número de teléfono: ${phone}
    Descripción del proyecto: ${project}
    Horario de contacto: ${contactTime}
  `;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'send-email.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Gracias por contactarme. Te responderé lo más pronto posible.');
      form.reset();
    } else {
      alert('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
    }
  };
  xhr.send(`message=${encodeURIComponent(message)}`);
});