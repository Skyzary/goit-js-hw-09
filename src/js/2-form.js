
let formDate = {
  email: '',
  message: '',
}
const form = document.querySelector('.feedback-form');
form.addEventListener('input', (event) =>{
  formDate[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
  console.log(localStorage.getItem('feedback-form-state'));
})
form.addEventListener('submit', (event) =>{
  event.preventDefault();
  if (event.target.email.value !== '' && event.target.message.value !== '') {
    form.reset();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.clear()
  }
  else alert('all fields must be filled')
})
const {email, message } = JSON.parse(localStorage.getItem('feedback-form-state'));
form.email.value = email;
form.message.value = message;
