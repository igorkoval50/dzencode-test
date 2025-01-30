import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/base.scss'
import { Provider } from "react-redux";
import store from "./reducer/store.js";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
