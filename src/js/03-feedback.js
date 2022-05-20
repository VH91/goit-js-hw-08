
import throttle from 'lodash.throttle';
const form = document.querySelector(`.feedback-form`);

let objectText = {};
updateInput();
form.addEventListener(`submit`, evt => {
  
  const message = evt.currentTarget.elements.message.value;
  const email = evt.currentTarget.elements.email.value;
  
  
  if (email && message) {
      evt.preventDefault();
      localStorage.clear();
      form.reset();
      objectText = {};
    console.log({ email, message })
    } else {
      alert(`заполни все поля`)
    }
});

form.addEventListener(`input`, throttle(evt => {
  objectText[evt.target.name] = evt.target.value
  localStorage.setItem(`feedback-form-state`, JSON.stringify(objectText))
  }, 500))
  
function updateInput() {
  let valueInput = localStorage.getItem(`feedback-form-state`)
    if (valueInput) {
      valueInput = JSON.parse(valueInput);
      Object.entries(valueInput).forEach(([name, value]) => {
        console.log([name, value])
        form.elements[name].value = value;
        objectText[name] = value;
      });
  }
}