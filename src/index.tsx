import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HeroUIProvider} from "@heroui/react";
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import { store} from './components/redux/store'
import { Toaster, toast } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter>
          <HelmetProvider>
     <HeroUIProvider>
      <Provider store={store}>
            <App />
           <Toaster />
      </Provider>
     </HeroUIProvider>
          </HelmetProvider>
   </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
