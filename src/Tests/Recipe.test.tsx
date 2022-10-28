import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Recipe from '../Pages/Recipe/Recipe';

describe('recipe buttons',()=>{
    test('are clickable',()=>{
        // TODO: update when recipes can pull from database
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Eat Healthy'));
        fireEvent.click(screen.getAllByAltText('Some nameThumbnail')[0]);
        expect(global.window.location.pathname).toContain('/individual-recipe');
    });
    it('exist',()=>{
        render(<Router><Recipe/></Router>);
        expect(screen.getAllByAltText(/Thumbnail$/)).toBeInstanceOf(Array);
    });
});