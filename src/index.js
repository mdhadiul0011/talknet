import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import firebaseConfig from './Components/firebase/FirebaseConfig';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from 'react-redux';
import MyStore from './Components/features/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={MyStore}><App /></Provider>
);

