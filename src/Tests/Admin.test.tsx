import {render,screen} from "@testing-library/react";
import Admin from "../Pages/Admin/Admin";

describe('sections',()=>{
    test('exercise section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add Exercise')).toBeInTheDocument();
    });
    test('recipe section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add Recipe')).toBeInTheDocument();
    });
    test('OTD form',()=>{
        render(<Admin/>);
        expect(screen.getByText('Of the Day')).toBeInTheDocument();
    });
});

describe('updates database',()=>{
    test.todo('exercise editor');
    test.todo('exercise adder');
    test.todo('recipe adder');
    test.todo('recipe editor');
    test.todo('of the day');
});