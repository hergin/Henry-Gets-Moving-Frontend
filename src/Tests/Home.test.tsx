import Home from '../Pages/Home/Home';
import { fireEvent, render, screen } from '@testing-library/react';

describe('x of the day',()=>{
    describe('exercise',()=>{
        it('takes to exercises page when clicked',()=>{
            render(<Home/>);
            fireEvent.click(screen.getByAltText('Exercise Photo'));
            expect(global.window.location.pathname).toContain('/get-moving');
        });
        // TODO: update when logic to change exercise of the day implemented
        it('has "exercise of the day" text',()=>{
            render(<Home/>);
            expect(screen.getByText('Exercise of the Day')).toBeInTheDocument();
        });
    });

    describe('recipe',()=>{
        it('takes to recipes page when clicked',()=>{
            render(<Home/>);
            fireEvent.click(screen.getByAltText('Exercise Photo'));
            expect(global.window.location.pathname).toContain('/eat-healthy');
        });
        // TODO: update when logic to change exercise of the day implemented
        it('has "recipe of the day" text',()=>{
            render(<Home/>);
            expect(screen.getByText('Recipe of the Day')).toBeInTheDocument();
        });
    });
});