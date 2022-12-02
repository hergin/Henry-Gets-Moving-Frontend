import {fireEvent, render,screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import ExercisePage from '../Pages/Exercise/ExercisePage';

describe('of the day',()=>{
    test('thumbnail exists',()=>{
        render(<Router><ExercisePage/></Router>)
        expect(screen.getByAltText('OTD Thumbnail')).toBeInTheDocument();
    });
    test('name exists',()=>{
        // TODO: update when OTD implemented
        render(<Router><ExercisePage/></Router>);
        expect(screen.getByText('Exercise Name')).toBeInTheDocument();
    });
});

describe('trophy',()=>{
    test('image exists',()=>{
        render(<Router><ExercisePage/></Router>);
        expect(screen.getByAltText('Trophy')).toBeInTheDocument();
    });
    test('text exists',()=>{
        render(<Router><ExercisePage/></Router>);
        expect(screen.getByText('You Have Logged')).toBeInTheDocument();
    });
    test.todo('image updates with exercise logged');
    test.todo('text updates with exercise logged');
});

test('log exercise button takes to login page if not logged in',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getAllByText("Get Moving")[0]);
    fireEvent.click(screen.getByText('Log Exercise'));
    expect(global.window.location.pathname).toContain('/login');
});

test('all logs button takes to login page if user not logged in',()=>{
    render(<Router><App/></Router>);
    fireEvent.click(screen.getAllByText('Get Moving')[0]);
    fireEvent.click(screen.getByText(/(All Logs)$/));
    expect(global.window.location.pathname).toContain('/login');
});

test('category selector exists in document',()=>{
    render(<Router><ExercisePage/></Router>);
    expect(screen.getByText('Category Selection')).toBeInTheDocument();
});

describe('video player',()=>{
    test.skip('opens on click',()=>{
        render(<Router><ExercisePage/></Router>);
        // TODO: update when exercises added
        fireEvent.click(screen.getAllByAltText('Some nameThumbnail')[0]);
        expect(screen.getByAltText('Exit')).toBeInTheDocument();
    });
    test.skip('exit button works',()=>{
        render(<Router><ExercisePage/></Router>);
        // TODO: update when exercises added
        fireEvent.click(screen.getAllByAltText('Some nameThumbnail')[0]);
        fireEvent.click(screen.getByAltText('Exit'));
        expect(screen.queryByAltText('Exit')).not.toBeInTheDocument();
    });
});

test.todo('see more button expands');