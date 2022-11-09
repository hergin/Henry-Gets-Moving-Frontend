import { fireEvent, render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from '../Pages/Home/Home';

describe('x of the day',()=>{
    describe('exercise',()=>{
        it('takes to exercises page when clicked',()=>{
            render(<Router><Home/></Router>);
            fireEvent.click(screen.getByAltText('ExercisePage Photo'));
            expect(global.window.location.pathname).toContain('/get-moving');
        });
        // TODO: update when logic to change exercise of the day implemented
        it('has "exercise of the day" text',()=>{
            render(<Router><Home/></Router>);
            expect(screen.getByText('ExercisePage of the Day')).toBeInTheDocument();
        });
    });

    describe('recipe',()=>{
        it('takes to recipes page when clicked',()=>{
            render(<Router><Home/></Router>);
            fireEvent.click(screen.getByAltText('RecipePage Photo'));
            expect(global.window.location.pathname).toContain('/recipes');
        });
        // TODO: update when logic to change exercise of the day implemented
        it('has "recipe of the day" text',()=>{
            render(<Router><Home/></Router>);
            expect(screen.getByText(/RecipePage of the Day/)).toBeInTheDocument();
        });
    });
});