import { fireEvent, render, screen } from '@testing-library/react';
import Calendar from '../Pages/Calendar/Calendar';
import {BrowserRouter as Router} from 'react-router-dom';
jest.mock('../API');
describe('date',()=>{
    test.skip('is today by default',()=>{
        render(<Router><Calendar/></Router>);
        expect(screen.getByText(new RegExp(`.*${new Date().toLocaleDateString()}.*`))).toBeInTheDocument();
    });

    test.skip('can be changed with calendar buttons',()=>{
        render(<Router><Calendar/></Router>);
        fireEvent.click(screen.getByText('22'));
        expect(screen.getByText(new RegExp(`.*${new Date().getMonth()+1}/22/${new Date().toLocaleDateString().split('/')[2]}.*`))).toBeInTheDocument();
    });
});

describe('month',()=>{
    test.skip('can be changed with arrows',()=>{
        render(<Router><Calendar/></Router>);
        const days = new Date().toLocaleDateString().split('/');
        fireEvent.click(screen.getByText('›'));
        fireEvent.click(screen.getByText("22"));
        expect(screen.getByText(new RegExp(`.*${parseInt(days[0])+1===13?1:parseInt(days[0]+1)}/22/${parseInt(days[0])===12?parseInt(days[2])+1:days[2]}.*`))).toBeInTheDocument();
    });

    test.skip('can be changed via menu',()=>{
        render(<Router><Calendar/></Router>);
        const today = new Date();
        const days = today.toLocaleDateString().split('/');
        fireEvent.click(screen.getByText(today.toLocaleString('default',{month:'long'})+' '+today.getFullYear()));
        fireEvent.click(screen.getByText('December'));
        fireEvent.click(screen.getByText("22"));
        expect(screen.getByText(new RegExp(`.*12/22/${days[2]}.*`))).toBeInTheDocument();
    });
})

describe('disabled',()=>{
    test.skip('can\'t choose day before October 20th, 2022',()=>{
        render(<Router><Calendar/></Router>);
        // make sure it's october 2022, if this test is being run in the far future
        const today = new Date();
        fireEvent.click(screen.getByText(today.toLocaleString('default',{month:'long'})+' '+today.getFullYear()));
        fireEvent.click(screen.getByText(today.getFullYear()));
        fireEvent.click(screen.getByText('2022'));
        fireEvent.click(screen.getByText('October'));
        fireEvent.click(screen.getByText('10'));
        expect(screen.getByText(new RegExp(`.*${new Date().toLocaleDateString()}.*`))).toBeInTheDocument();
    });

    test.skip('can\'t choose month before october 2022',()=>{
        render(<Router><Calendar/></Router>);
        const today = new Date();
        fireEvent.click(screen.getByText(today.toLocaleString('default',{month:'long'})+' '+today.getFullYear()));
        fireEvent.click(screen.getByText(today.getFullYear()));
        fireEvent.click(screen.getByText('2022'));
        fireEvent.click(screen.getByText('January'));
        // expect the "10" button for choosing the day not to be in the document,
        // chosen as an arbitrary day just to make sure we weren't taken to the
        // january month page
        expect(screen.queryByText('10')).not.toBeInTheDocument();
    });

    test.skip('can\'t choose year before 2022',()=>{
        render(<Router><Calendar/></Router>);
        const today = new Date();
        fireEvent.click(screen.getByText(today.toLocaleString('default',{month:'long'})+' '+today.getFullYear()));
        fireEvent.click(screen.getByText(today.getFullYear()));
        fireEvent.click(screen.getByText('2021'));
        // expect the "January" button for choosing the month not to be in the document,
        // chosen as an arbitrary month just to make sure we weren't taken to the
        // month selection page
        expect(screen.queryByText('January')).not.toBeInTheDocument();
    })
});