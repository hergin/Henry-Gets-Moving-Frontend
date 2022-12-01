import {fireEvent,render,screen} from '@testing-library/react';
import ExerciseLogPage from '../Pages/ExerciseLog/ExerciseLogPage';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('intensity labels',()=>{
    describe('exist',()=>{
        test('light',()=>{
            render(<BrowserRouter><ExerciseLogPage/></BrowserRouter>);
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

    describe('to set the intensity',()=>{
        test('light',()=>{
            const mockSetIntensity = jest.fn();
            const mockUseState: any = (useState: any) => [useState, mockSetIntensity];
            jest.spyOn(React, 'useState').mockImplementation(mockUseState);
            render(<Router><ExerciseLogPage/></Router>);
            fireEvent.click(screen.getByText('Light'));
            expect(mockSetIntensity).toHaveBeenCalled();
        });
    })

    describe('change their styling when selected',()=>{
        test('light',()=>{
            render(<Router><ExerciseLogPage/></Router>);
            fireEvent.click(screen.getByText('Light'));
            expect(screen.get)
        });
    });
});
test('back arrow component exists',()=>{
    render(<Router><ExerciseLogPage/></Router>);
    expect(screen.getByAltText('Back')).toBeInTheDocument();
});

test('creates new exercise log',()=>{
    global.fetch = jest.fn().mockResolvedValue({ok: true});
    window.alert = jest.fn();
    render(<Router><ExerciseLogPage/></Router>);
    fireEvent.click(screen.getByAltText('Light Intensity'));
    userEvent.type(screen.getByPlaceholderText('# of Minutes'), '40');
    userEvent.type(screen.getAllByRole('textbox')[0], 'Test Child');
    userEvent.type(screen.getAllByRole('textbox')[1], 'Test Exercise');
    fireEvent.click(screen.getByText('Log Exercise'));
    expect(fetch).toHaveBeenCalled();
});