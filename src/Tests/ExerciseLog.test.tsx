import {fireEvent,getByText,render,screen} from '@testing-library/react';
import ExerciseLogPage from '../Pages/ExerciseLog/ExerciseLogPage';
import {BrowserRouter as Router} from 'react-router-dom';
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
test.skip('back arrow goes back',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getByText('Get Moving'));
    fireEvent.click(screen.getByText('Log ExercisePage'));
    fireEvent.click(screen.getByAltText('Back'));
    expect(global.window.location.pathname).toContain('/get-moving');
});

test.skip('creates new exercise log',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getByText('Get Moving'));
    fireEvent.click(screen.getByText('Log ExercisePage'));
    fireEvent.click(screen.getByAltText('Light Intensity'));
    userEvent.type(screen.getByPlaceholderText('# of Minutes'), '40');
    userEvent.type(screen.getAllByRole('textbox')[0], 'Test Child');
    userEvent.type(screen.getAllByRole('textbox')[1], 'Test ExercisePage');
    fireEvent.click(screen.getByText('Log ExercisePage'));
    // TODO query database
});
test.skip('adds to total exercise for current date',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getByText('Get Moving'));
    fireEvent.click(screen.getByText('Log ExercisePage'));
    fireEvent.click(screen.getByAltText('Light Intensity'));
    userEvent.type(screen.getByPlaceholderText('# of Minutes'), '40');
    userEvent.type(screen.getAllByRole('textbox')[0], 'Test Child');
    userEvent.type(screen.getAllByRole('textbox')[1], 'Test ExercisePage');
    fireEvent.click(screen.getByText('Log ExercisePage'));
    fireEvent.click(screen.getByAltText('Back'));
    expect(screen.getByText('40 Minutes')).toBeInTheDocument();
});