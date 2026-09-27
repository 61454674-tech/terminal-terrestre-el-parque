'use strict';

// Abre y cierra el menú en pantallas pequeñas.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', function () {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-wrap')) closeMenu();
  });
}

// Simulación pedida en la consigna: ningún dato se guarda o se envía.
const contactForm = document.querySelector('#formulario-contacto');
if (contactForm) {
  const fields = ['nombre', 'correo', 'asunto', 'mensaje'];
  const result = document.querySelector('#resultado-formulario');
  const message = document.querySelector('#mensaje');
  const counter = document.querySelector('#caracteres');

  function validateField(id) {
    const field = document.getElementById(id);
    const value = field.value.trim();
    let error = '';

    if (value === '') {
      error = id === 'asunto' ? 'Selecciona un asunto.' : 'Completa este campo.';
    } else if (id === 'correo' && (field.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
      error = 'Escribe un correo válido, por ejemplo nombre@correo.com.';
    }

    document.getElementById('error-' + id).textContent = error;
    field.setAttribute('aria-invalid', String(error !== ''));
    return error === '';
  }

  fields.forEach(function (id) {
    const field = document.getElementById(id);
    field.addEventListener('input', function () {
      result.textContent = '';
      result.className = 'form-result';
      if (field.getAttribute('aria-invalid') === 'true') validateField(id);
    });
    field.addEventListener('change', function () {
      if (field.getAttribute('aria-invalid') === 'true') validateField(id);
    });
  });

  message.addEventListener('input', function () {
    counter.textContent = String(message.value.length);
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let firstInvalid = null;
    fields.forEach(function (id) {
      if (!validateField(id) && firstInvalid === null) firstInvalid = document.getElementById(id);
    });

    if (firstInvalid) {
      result.textContent = 'Revisa los campos señalados para continuar.';
      result.className = 'form-result is-error';
      firstInvalid.focus();
      return;
    }

    result.textContent = 'Simulación completada. Los campos son válidos. No se ha enviado ni guardado tu mensaje.';
    result.className = 'form-result is-success';
    result.focus();
    contactForm.reset();
    counter.textContent = '0';
    fields.forEach(function (id) {
      document.getElementById(id).removeAttribute('aria-invalid');
      document.getElementById('error-' + id).textContent = '';
    });
  });
  document.getElementById('enviar').disabled = false;
}


// Prepara un mensaje de reserva con el destino elegido; el visitante lo envía desde WhatsApp.
const destinationSelect = document.querySelector('#destino-pasaje');
const reservationLink = document.querySelector('#reservar-whatsapp');
if (destinationSelect && reservationLink) {
  function updateReservationMessage() {
    const destination = destinationSelect.value;
    const message = destination === 'otro'
      ? '🚌 ¡Hola! Deseo separar un pasaje desde Huancayo. ¿Qué destinos tienen disponibles? ¿Me pueden indicar horarios, precios y lugar de embarque? ¡Gracias!'
      : `🚌 ¡Hola! Deseo separar un pasaje de Huancayo a ${destination}. ¿Me pueden confirmar los horarios disponibles, el precio y el lugar de embarque? ¡Gracias!`;
    reservationLink.href = 'https://wa.me/51924606678?text=' + encodeURIComponent(message);
  }

  destinationSelect.addEventListener('change', updateReservationMessage);
  updateReservationMessage();
}
