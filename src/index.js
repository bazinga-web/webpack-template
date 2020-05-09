// import { file, parse } from './globals'
// import pic from './assets/img/download.png'
// import './assets/css/style.css'
import print from './print.js'
// import { sum } from './math';

function component() {
    let element = document.createElement('div');
    // element.innerHTML = _.join(['hello', 'webpack', '123'], ' ');
    // element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.innerHTML = print;
    // let img = document.createElement('img');
    // img.src = pic;

    // element.appendChild(img);
    // console.log(file, parse)
    // console.log(sum(1, 2))
    return element;
}
let element = component()

let btn = document.createElement('button');
btn.innerHTML = 'Click';
btn.onclick = () => {
    document.body.style.background = 'red'
}
document.body.append(element);
document.body.append(btn);


// if ('serviceWorker' in navigator) {
//     console.log('in')
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

if (module.hot) {
    module.hot.accept('./print.js', function () {
        document.body.removeChild(elment)
        element = component()
        document.body.appendChild(element);
    })
}