const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

try {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
} catch (error) {
  console.error('Error parsing saved form data:', error);
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('All fields must be filled');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
