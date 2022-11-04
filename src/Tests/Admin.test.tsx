import {fireEvent, render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../Pages/Admin/Admin";
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';

describe('sections',()=>{
    test('exercise section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add Exercise')).toBeInTheDocument();
    });
    test('recipe section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add Recipe')).toBeInTheDocument();
    });
    test('OTD form',()=>{
        render(<Admin/>);
        expect(screen.getByText('Of the Day')).toBeInTheDocument();
    });
});

describe('updates database',()=>{
    test('exercise editor',()=>{
        
    });
    test('exercise adder',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('input')[0];
        const video = screen.getAllByRole('input')[1];
        const category = screen.getAllByRole('input')[1];
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save Exercise'));
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.getByText('Test Exercise')).toBeInTheDocument();
    });
    test.todo('recipe adder');
    test.todo('recipe editor');
    test.todo('of the day');
});