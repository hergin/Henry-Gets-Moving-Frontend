import {fireEvent, render,screen} from '@testing-library/react';
import Game from '../Pages/Game/Game';

describe("crossword",()=>{
    describe("fill all answers",()=>{
        test('exists',()=>{
            render(<Game/>);
            expect(screen.getByText("Fill all answers")).toBeInTheDocument();
        });
        test('works',()=>{
            const {container} = render(<Game/>);
            fireEvent.click(screen.getByText('Fill all answers'));
            // use the first cell as an example to avoid testing every cell individually
            const cell = container.getElementsByClassName('guess-text-correct')[0];
            expect(cell.innerHTML).toEqual('B');
        });
    });
});