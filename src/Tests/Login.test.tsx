import {render,screen,fireEvent} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';

describe('register button',()=>{
    test('takes to the right page',()=>{
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Login'));
        fireEvent.click(screen.getByText('Register'));
        expect(global.window.location.pathname).toContain('/register');
    });
});