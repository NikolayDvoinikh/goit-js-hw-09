import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.target;
  const delayEl = Number(delay.value);
  const stepEl = Number(step.value);
  const amountEl = Number(amount.value);
  if (delayEl <= 0 || stepEl <= 0 || amountEl <= 0) {
    return Notiflix.Report.failure(`Input value should be > '0'`);
  }
  for (let i = 1; i <= amountEl; i += 1) {
    createPromise(i, delayEl + stepEl * (i - 1))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
