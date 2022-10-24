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
    })
});