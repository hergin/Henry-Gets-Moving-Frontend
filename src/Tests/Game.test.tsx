import {render,screen} from '@testing-library/react';
import Game from '../Pages/Game/Game';

describe("crossword",()=>{
    describe("fill all answers",()=>{
        test('exists',()=>{
            render(<Game/>);
            expect(screen.getByText("Fill all answers")).toBeInTheDocument();
        });
    });
});