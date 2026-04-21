import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFilter, faArrowLeft, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
library.add(faSearch, faFilter, faArrowLeft , faClapperboard, faVideo, faBook);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
