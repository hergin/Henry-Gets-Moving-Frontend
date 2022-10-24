import { fireEvent, render, screen } from '@testing-library/react';
import Calendar from '../Pages/Calendar/Calendar';

describe('date',()=>{
    test('is today by default',()=>{
        render(<Calendar/>);
        expect(screen.getByText(new RegExp(`.*${new Date().toLocaleDateString()}.*`))).toBeInTheDocument();
    });

    test('can be changed with calendar buttons',()=>{
        render(<Calendar/>);
        fireEvent.click(screen.getByText('22'));
        expect(screen.getByText(new RegExp(`.*${new Date().getMonth()+1}/22/${new Date().toLocaleDateString().split('/')[2]}.*`))).toBeInTheDocument();
    });
});

describe('month',()=>{
    test('can be changed with arrows',()=>{
        render(<Calendar/>);
        const days = new Date().toLocaleDateString().split('/');
        fireEvent.click(screen.getByText('›'));
        fireEvent.click(screen.getByText(days[1]));
        expect(screen.getByText(new RegExp(`.*${parseInt(days[0])+1}/${days[1]}/${days[2]}.*`))).toBeInTheDocument();
    });
})