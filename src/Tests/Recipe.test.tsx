import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import RecipePage from '../Pages/Recipe/RecipePage';
import API from '../API';
import TestAPI from "./TestAPI";

jest.mock("../API", function() {
    const testAPI = jest.requireActual('./TestAPI');
    return testAPI;
});

describe('recipe buttons',()=>{
    test.skip('are clickable',()=>{
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText(/Recipes/));
        fireEvent.click(screen.getByText('Banana BreadThumbnail'));
        expect(screen.getByText(/20 years$/)).toBeInTheDocument();
    });
    it('exist',()=>{
        render(<Router><RecipePage/></Router>);
        expect(screen.getAllByAltText(/Thumbnail$/)).toBeInstanceOf(Array);
    });
});