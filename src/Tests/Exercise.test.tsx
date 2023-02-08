import {fireEvent, render,screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import ExercisePage from '../Pages/Exercise/ExercisePage';
jest.mock('../API');
describe('of the day',()=>{
    test('thumbnail exists',async ()=>{
        render(<Router><ExercisePage/></Router>);
        await screen.findByAltText('OTD Thumbnail').then((item) => {
            expect(item).toBeInTheDocument();
        });
    });
    test('name exists',async ()=>{
        render(<Router><ExercisePage/></Router>);
        await screen.findByAltText('Exercise Name').then((item) => {
            expect(item).toBeInTheDocument();
        })
    });
});

test('image exists',async ()=>{
    render(<Router><ExercisePage/></Router>);
    await screen.findByAltText('Trophy').then((item) => {
        expect(item).toBeInTheDocument();
    });
});

test('log exercise button takes to login page if not logged in',async()=>{
    render(<Router><App/></Router>);
    await screen.findAllByText("Get Moving").then((item)=>{
        fireEvent.click(item[0]);
    });
    await screen.findByText("Log Exercise").then((item)=>{
        fireEvent.click(item);
    });
    expect(global.window.location.pathname).toContain('/login');
});

test('all logs button takes to login page if user not logged in',async()=>{
    render(<Router><App/></Router>);
    await screen.findAllByText("Get Moving").then((item)=>{
        fireEvent.click(item[0]);
    });
    screen.findByText(/(All Logs)$/).then((item)=>{
        fireEvent.click(item);
    });
    expect(global.window.location.pathname).toContain('/login');
});

test('category selector exists in document',async ()=>{
    render(<Router><ExercisePage/></Router>);
    await screen.findByRole('combobox').then((item)=>expect(item).toBeInTheDocument());
});

describe('video player',()=>{
    test.skip('opens on click',async ()=>{
        render(<Router><ExercisePage/></Router>);
        await screen.findAllByAltText("$Thumbnail ").then((item)=>{
            fireEvent.click(item[0]);
        });
        expect(screen.getByAltText('Exit')).toBeInTheDocument();
    });
    test.skip('exit button works',async()=>{
        render(<Router><ExercisePage/></Router>);
        await screen.findAllByAltText("Thumbnail").then((item)=>{
            fireEvent.click(item[0]);
        });
        fireEvent.click(screen.getByAltText('Exit'));
        expect(screen.queryByAltText('Exit')).not.toBeInTheDocument();
    });
});