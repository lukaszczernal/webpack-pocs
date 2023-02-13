// // import './style.css';
// // import Cover from './cover.png';
// import Print from "./print";

// async function getComponent() {
//   const element = document.createElement("div");

//   const { default: _ } = await import("lodash");

//   _.delay(() => {
//     element.innerHTML = _.join(["Hello", "after 2sec"], " ");
//   }, 2000)
  
//   element.innerHTML = _.join(["Hello", "now!"], " ");
//   // element.classList.add('hello');
//   element.onclick = Print.bind(null, 'Hello everybody!');


//   return element;
// }

// getComponent().then((component) => {
//   // const myCover = new Image();
//   // myCover.src = Cover;

//   // const btn = document.createElement('button');

//   // btn.innerHTML = "Click me and check the console!";
//   // btn.onclick = printMe;


//   document.body.appendChild(component);
//   // document.body.appendChild(btn);
// });




import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack2'], ' ');

    _.delay(() => {
    element.innerHTML = _.join(["Hello", "after 2sec"], " ");
  }, 2000)

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}


let element = component();
document.body.appendChild(element);

if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}