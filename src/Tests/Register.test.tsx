import {render,screen,fireEvent} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Register from '../Pages/Register/Register';

describe('text boxes',()=>{
    test('email',()=>{
        render(<Router><Register/></Router>);
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });
    test('confirm email',()=>{
        render(<Router><Register/></Router>);
        expect(screen.getByLabelText('Confirm Email')).toBeInTheDocument();
    });
});