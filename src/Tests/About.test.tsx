import About from '../Pages/About/About';
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

describe('about text',()=>{
    test('henry the hamster text exists',()=>{
        render(<About/>);
        expect(screen.getByText(/Henry the Hamster is a young boy who overcomes his obesity challenge with an active lifestyle and healthy eating\.[\s\S]*/)).toBeInTheDocument();
    });
    test('obesity text exists',()=>{
        render(<About/>);
        expect(screen.getByText(/Obesity is the foremost American public health problem[\s\S]*/)).toBeInTheDocument();
    });
})