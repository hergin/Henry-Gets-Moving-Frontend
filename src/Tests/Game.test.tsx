import {render,screen} from '@testing-library/react';
import Game from '../Pages/Game/Game';

test('maze exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Squirm\'s maze')).toBeInTheDocument();
});
test('crossword exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Healthy Eating Crossword Thumbnail')).toBeInTheDocument();
});
test('race exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Henry\'s Big Race Thumbnail')).toBeInTheDocument();
});