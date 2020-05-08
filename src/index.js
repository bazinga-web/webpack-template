import { file, parse } from './globals'
import pic from './assets/img/download.png'
import './assets/css/style.css'
import print from './print.js'
import { sum } from './math';

function component() {
    let element = document.createElement('div');
    // element.innerHTML = _.join(['hello', 'webpack', '123'], ' ');
    // element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.innerHTML = 'hello webpack';
    let img = document.createElement('img');
    img.src = pic;

    element.appendChild(img);
    // print()
    // console.log(file, parse)
    console.log(sum(1, 2))

    return element;
}

document.body.append(component());

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