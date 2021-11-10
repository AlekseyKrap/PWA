import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log('test 5')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
    onSuccess: (reg) => {
        console.log('onSuccess', reg);
    },
    onUpdate: (reg) => {
        const registrationWaiting = reg.waiting;
        if (registrationWaiting) {
            registrationWaiting.addEventListener("statechange", event => {
                const target = event?.target;
                if (target instanceof ServiceWorker && target.state === "activated") {
                    window.location.reload()
                }
            });
            registrationWaiting.postMessage({ type: "SKIP_WAITING" });
        }
    },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
