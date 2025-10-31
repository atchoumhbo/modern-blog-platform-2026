const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const assistant = document.querySelector('.assistant');
const assistantClose = document.querySelector('.assistant__close');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('is-open');
    navLinks.setAttribute('aria-hidden', String(expanded));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      navLinks.setAttribute('aria-hidden', 'true');
    });
  });

  navLinks.setAttribute('aria-hidden', 'true');
}

if (assistant && assistantClose) {
  assistantClose.addEventListener('click', () => {
    assistant.classList.toggle('is-collapsed');
    assistant.setAttribute(
      'aria-label',
      assistant.classList.contains('is-collapsed')
        ? 'AI assistant preview collapsed'
        : 'AI assistant preview'
    );
  });
}

const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = /** @type {HTMLInputElement|null} */ (form.querySelector('#email'));
    const team = /** @type {HTMLSelectElement|null} */ (form.querySelector('#team'));
    if (!email || !team) return;

    const summary = `Demo request received for ${email.value} (team size: ${team.value}).`;
    const confirmation = document.createElement('p');
    confirmation.className = 'form-confirmation';
    confirmation.textContent = summary;
    form.replaceWith(confirmation);
  });
}
