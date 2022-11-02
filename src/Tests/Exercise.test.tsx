import {render,screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Exercise from '../Pages/Exercise/Exercise';

describe('of the day',()=>{
    test('thumbnail exists',()=>{
        render(<Router><Exercise/></Router>)
        expect(screen.getByAltText('OTD Thumbnail')).toBeInTheDocument();
    });
    test('name exists',()=>{
        // TODO: update when OTD implemented
        render(<Router><Exercise/></Router>);
        expect(screen.getByText('Exercise Name')).toBeInTheDocument();
    });
});

describe('trophy',()=>{
    test('image exists',()=>{
        render(<Router><Exercise/></Router>);
        expect(screen.getByAltText('Trophy')).toBeInTheDocument();
    });
    test.todo('image updates with exercise logged');
    test.todo('text updates with exercise logged');
});