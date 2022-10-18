import About from './Pages/About/About';
import {fireEvent,render,screen} from '@testing-library/react';

describe('social media nav buttons',()=>{
    describe('exists',()=>{
        test('youtube button',()=>{
            render(<About/>);
            expect(screen.getByAltText('YouTube')).toBeInTheDocument();
        });
        test('facebook button',()=>{
            render(<About/>);
            expect(screen.getByAltText('Facebook')).toBeInTheDocument();
        });
    });
});