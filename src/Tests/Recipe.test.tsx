import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import RecipePage from '../Pages/Recipe/RecipePage';

jest.mock('../API');

describe('recipe buttons',()=>{
    test('are clickable',()=>{
        render(<Router><RecipePage/></Router>);
        fireEvent.click(screen.getByText('Banana BreadThumbnail'));
        expect(screen.getByText(/20 years$/)).toBeInTheDocument();
    });
    it('exist',()=>{
        render(<Router><RecipePage/></Router>);
        expect(screen.getAllByAltText(/Thumbnail$/)).toBeInstanceOf(Array);
    });
});