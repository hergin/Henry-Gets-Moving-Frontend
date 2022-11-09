import {render,screen} from '@testing-library/react';
import Game from '../Pages/Game/Game';

test.skip('maze exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Squirm\'s maze')).toBeInTheDocument();
});
test.skip('crossword exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Healthy Eating Crossword Thumbnail')).toBeInTheDocument();
});
test.skip('race exists',()=>{
    render(<Game/>);
    expect(screen.getByAltText('Henry\'s Big Race Thumbnail')).toBeInTheDocument();
});