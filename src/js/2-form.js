
let formData = {
  email: '',
  message: '',
}
const {email, message } = JSON.parse(localStorage.getItem('feedback-form-state'));
if (localStorage.getItem('feedback-form-state') === null){
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const form = document.querySelector('.feedback-form');
form.email.value = email;
form.message.value = message;
form.addEventListener('input', (event) =>{
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(localStorage.getItem('feedback-form-state'));
})
form.addEventListener('submit', (event) =>{
  event.preventDefault();
  if (event.target.email.value !== '' && event.target.message.value !== '') {
    form.reset();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
  }
  else alert('all fields must be filled')
})
