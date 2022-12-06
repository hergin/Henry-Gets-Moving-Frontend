import {fireEvent,render,screen} from '@testing-library/react';
import ExerciseLogPage from '../Pages/ExerciseLog/ExerciseLogPage';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('intensity labels',()=>{
    describe('exist',()=>{
        test('light',()=>{
            render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
            expect(screen.getByText('Light')).toBeInTheDocument();
        });
        test('moderate',()=>{
            render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
            expect(screen.getByText('Moderate')).toBeInTheDocument();
        });
        test('vigorous',()=>{
            render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
            expect(screen.getByText('Vigorous')).toBeInTheDocument();
        });
    });
});
test('back arrow component exists',()=>{
    render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
    expect(screen.getByAltText('Back')).toBeInTheDocument();
});

test('creates new exercise log',()=>{
    global.fetch = jest.fn().mockResolvedValue({ok: true});
    window.alert = jest.fn();
    render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
    fireEvent.click(screen.getByAltText('Light Intensity'));
    userEvent.type(screen.getByPlaceholderText('# of Minutes'), '40');
    userEvent.type(screen.getAllByRole('textbox')[0], 'Test Child');
    userEvent.type(screen.getAllByRole('textbox')[1], 'Test Exercise');
    fireEvent.click(screen.getByText('Log Exercise'));
    expect(fetch).toHaveBeenCalled();
});