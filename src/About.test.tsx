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

    describe('go to the right page',()=>{
        test('youtube button',()=>{
            render(<About/>);
            fireEvent.click(screen.getByAltText('YouTube'));
            expect(global.window.location.pathname).toContain('youtube.com');
            expect(screen.getByText('Henry GetsMoving')).toBeInTheDocument();
        });
        test('facebook button',()=>{
            render(<About/>);
            fireEvent.click(screen.getByAltText('Facebook'));
            expect(global.window.location.pathname).toContain('facebook.com');
            expect(screen.getByText('Henry Gets Moving in Delaware County')).toBeInTheDocument();
        });
    })
});