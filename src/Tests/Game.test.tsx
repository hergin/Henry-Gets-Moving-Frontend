import {fireEvent, render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    describe("reset",()=>{
        test('exists',()=>{
            render(<Game/>);
            expect(screen.getByText("Reset")).toBeInTheDocument();
        });
        test('works',()=>{
            const {container} = render(<Game/>);
            fireEvent.click(screen.getByText('Fill all answers'));
            // make sure it's filled
            const cell = container.getElementsByClassName('guess-text-correct')[0];
            expect(cell.innerHTML).toEqual('B');
            fireEvent.click(screen.getByText('Reset'));
            // and assert it's no longer filled
            expect(cell.innerHTML).toEqual('');
        });
    });
    describe('cells',()=>{
        test('can be typed in',()=>{
            const {container} = render(<Game/>);
            const cell = container.getElementsByClassName('guess-text-incorrect')[0];
            userEvent.type(cell, "B");
            expect(cell.innerHTML).toEqual('B');
        });
        test('turn yellow when correct',()=>{
            const {container} = render(<Game/>);
            const random_cell = container.getElementsByClassName('guess-text-incorrect')[0];
            fireEvent.click(screen.getByText('Fill all answers'));
            expect(random_cell).toHaveClass('guess-text-correct');
        });
    });
});