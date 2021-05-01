import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const rootComponent = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(rootComponent, rootElement);
