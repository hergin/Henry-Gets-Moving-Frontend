import {fireEvent,getByText,render,screen} from '@testing-library/react';
import ExerciseLogPage from '../Pages/ExerciseLog/ExerciseLogPage';
import {BrowserRouter as Router, useNavigate} from 'react-router-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('intensity labels',()=>{
    describe('exist',()=>{
        test('light',()=>{
            render(<Router><ExerciseLogPage/></Router>);
            expect(screen.getByText('Light')).toBeInTheDocument();
        });
        test('moderate',()=>{
            render(<Router><ExerciseLogPage/></Router>);
            expect(screen.getByText('Moderate')).toBeInTheDocument();
        });
        test('vigorous',()=>{
            render(<Router><ExerciseLogPage/></Router>);
            expect(screen.getByText('Vigorous')).toBeInTheDocument();
        });
    });
});
test('back arrow component exists',()=>{
    render(<Router><ExerciseLogPage/></Router>);
    expect(screen.getByAltText('Back')).toBeInTheDocument();
});

test('creates new exercise log',()=>{
    fetch = jest.fn().mockResolvedValue({ok: true});
    window.alert = jest.fn();
    render(<Router><ExerciseLogPage/></Router>);
    fireEvent.click(screen.getByAltText('Light Intensity'));
    userEvent.type(screen.getByPlaceholderText('# of Minutes'), '40');
    userEvent.type(screen.getAllByRole('textbox')[0], 'Test Child');
    userEvent.type(screen.getAllByRole('textbox')[1], 'Test Exercise');
    fireEvent.click(screen.getByText('Log Exercise'));
    expect(fetch).toHaveBeenCalled();
});