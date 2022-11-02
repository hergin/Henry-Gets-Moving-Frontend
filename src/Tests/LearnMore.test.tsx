import {render,screen,fireEvent} from "@testing-library/react";
import LearnMore from "../Pages/LearnMore/LearnMore";
import {BrowserRouter as Router} from 'react-router-dom';

describe('video player',()=>{
    test('opens on click',()=>{
        render(<Router><LearnMore/></Router>);
        // TODO: update when diagrams added
        fireEvent.click(screen.getAllByAltText('Some nameThumbnail')[0]);
        expect(screen.getByAltText('Exit')).toBeInTheDocument();
    });
    test('exit button works',()=>{
        render(<Router><LearnMore/></Router>);
        // TODO: update when diagrams added
        fireEvent.click(screen.getAllByAltText('Some nameThumbnail')[0]);
        fireEvent.click(screen.getByAltText('Exit'));
        expect(screen.queryByAltText('Exit')).not.toBeInTheDocument();
    });
});

test('diagrams exist',()=>{
    render(<Router><LearnMore/></Router>);
    expect(screen.getAllByAltText('Diagram')[0]).toBeInTheDocument();
});

test('category selector exists',()=>{
    render(<Router><LearnMore/></Router>);
    expect(screen.getByText('Category Selection')).toBeInTheDocument();
});

describe('content pulls from database',()=>{
    test.todo('demos');
    test.todo('diagrams');
});