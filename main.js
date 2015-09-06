import { createHistory } from 'history';

const history = createHistory();
const slice = [].slice;
const BUTTON_COUNT = 3;

history.listen(location => {
  console.log(location.pathname);
});

slice.call(Array.apply(null, {length: BUTTON_COUNT})).map((el, i) => {
  let b = document.createElement('button');
  b.id = b.textContent = `button${i}`;
  return b;
}).forEach(el => {
  el.addEventListener('click', ev => {
    history.pushState({the: 'state'}, `/${ev.currentTarget.textContent}`);
  });
  document.body.appendChild(el);
});
