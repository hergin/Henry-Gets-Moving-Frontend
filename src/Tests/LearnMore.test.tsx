import {render,screen,fireEvent} from "@testing-library/react";
import LearnMore from "../Pages/LearnMore/LearnMore";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "../App";
describe('video player',()=>{
    test.skip('opens on click',()=>{
        render(<Router><LearnMore/></Router>);
        fireEvent.click(screen.getAllByAltText(/Thumbnail$/)[0]);
        expect(screen.getByAltText('Exit')).toBeInTheDocument();
    });
    test.skip('exit button works',()=>{
        render(<Router><LearnMore/></Router>);
        fireEvent.click(screen.getAllByAltText(/Thumbnail$/)[0]);
        fireEvent.click(screen.getByAltText('Exit'));
        expect(screen.queryByAltText('Exit')).not.toBeInTheDocument();
    });
});

test('diagrams exist',()=>{
    render(<Router><LearnMore/></Router>);
    expect(screen.getByText('Diagrams')).toBeInTheDocument();
});

test('category selector exists',()=>{
    render(<Router><LearnMore/></Router>);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
});

describe('content pulls from database',()=>{
    test('demos',()=>{
        global.fetch = jest.fn().mockResolvedValue({ok: true});
        render(<Router><App/></Router>);
        fireEvent.click(screen.getAllByText("Learn More")[0]);
        expect(fetch).toHaveBeenCalled();
    });
    test('diagrams',()=>{
        global.fetch = jest.fn().mockResolvedValue({ok: true});
        render(<Router><App/></Router>);
        fireEvent.click(screen.getAllByText("Learn More")[0]);
        expect(fetch).toHaveBeenCalled();
    });
});