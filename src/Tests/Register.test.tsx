import {render,screen,fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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

    describe('can be typed in',()=>{
        test('email box',()=>{
            render(<Router><Register/></Router>);
            const emailBox = screen.getByLabelText('Email');
            fireEvent.click(screen.getByLabelText('Email'));
            userEvent.type(emailBox,"test@mail.whatever");
            expect(emailBox).toHaveValue('test@mail.whatever');
        });
        test('confirm email box',()=>{
            render(<Router><Register/></Router>);
            const emailBox = screen.getByLabelText('Confirm Email');
            fireEvent.click(screen.getByLabelText('Confirm Email'));
            userEvent.type(emailBox,"test@mail.whatever");
            expect(emailBox).toHaveValue('test@mail.whatever');
        });
    });
});