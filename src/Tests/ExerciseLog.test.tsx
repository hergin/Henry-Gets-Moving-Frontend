import {fireEvent,render,screen} from '@testing-library/react';
import ExerciseLog from '../Pages/ExerciseLog/ExerciseLog';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';

describe('intensity labels',()=>{
    describe('exist',()=>{
        test('light',()=>{
            render(<Router><ExerciseLog/></Router>);
            expect(screen.getByText('Light')).toBeInTheDocument();
        });
        test('moderate',()=>{
            render(<Router><ExerciseLog/></Router>);
            expect(screen.getByText('Moderate')).toBeInTheDocument();
        });
        test('vigorous',()=>{
            render(<Router><ExerciseLog/></Router>);
            expect(screen.getByText('Vigorous')).toBeInTheDocument();
        });
    });
    test.todo('function');
});
test('back arrow goes back',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getByText('Get Moving'));
    fireEvent.click(screen.getByText('Log Exercise'));
    fireEvent.click(screen.getByAltText('Back'));
    expect(global.window.location.pathname).toContain('/get-moving');
});

test.todo('creates new exercise log');
test.todo('adds to total exercise for current date');