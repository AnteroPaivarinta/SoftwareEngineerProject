import buttonRed from './Button.css';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import MyComponent from '../Selectbox'
import buttonBlack from './Button.css';

import '@testing-library/jest-dom'
it('Button.css', () => {
    let div = document.createElement('div');
    ReactDOM.render(<buttonRed/>, div)   //From button.css
  });
  

