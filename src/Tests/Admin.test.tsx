import {fireEvent, render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../Pages/Admin/Admin";
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock('../API');
beforeEach(function() {
    global.fetch = jest.fn().mockResolvedValue({ok: true});
});

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
    test('exercise editor',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[0];
        const video = screen.getAllByRole('textbox')[1];
        const category = screen.getAllByRole('textbox')[2];
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise Edited');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save Exercise'));
        expect(fetch).toHaveBeenCalled();
    });
    describe('exercise adder/deleter',()=>{
        test('sends request on confirm',()=>{
            window.confirm = jest.fn().mockReturnValue(true);
            render(<Admin/>);
            const name = screen.getAllByRole('textbox')[0];
            const video = screen.getAllByRole('textbox')[1];
            const category = screen.getAllByRole('textbox')[2];
            render(<Admin/>);
            fireEvent.click(name);
            userEvent.type(name, 'Test Exercise');
            fireEvent.click(video);
            userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            fireEvent.click(category);
            userEvent.type(category, 'Yoga');
            fireEvent.click(screen.getAllByText('Delete Exercise')[0]);
            expect(fetch).toHaveBeenCalled();
        });
        test('exercise is not deleted if confirm is not clicked',()=>{
            window.confirm = jest.fn().mockReturnValue(false);
            render(<Admin/>);
            const name = screen.getAllByRole('textbox')[0];
            const video = screen.getAllByRole('textbox')[1];
            const category = screen.getAllByRole('textbox')[2];
            render(<Admin/>);
            fireEvent.click(name);
            userEvent.type(name, 'Test Exercise');
            fireEvent.click(video);
            userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            fireEvent.click(category);
            userEvent.type(category, 'Yoga');
            fireEvent.click(screen.getAllByText('Delete Exercise')[0]);
            expect(fetch).not.toHaveBeenCalled();
        });
    })

    describe('recipe deleter',()=>{
        test('works if confirmed',()=>{
            window.confirm = jest.fn().mockReturnValue(true);
            render(<Admin/>);
            const name = screen.getAllByRole('textbox')[3];
            const thumbnail = screen.getAllByRole('textbox')[4];
            const category = screen.getAllByRole('textbox')[5];
            render(<Admin/>);
            fireEvent.click(name);
            userEvent.type(name, 'Test Recipe');
            fireEvent.click(thumbnail);
            userEvent.type(thumbnail, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG14.png');
            fireEvent.click(category);
            userEvent.type(category, 'Food');
            fireEvent.click(screen.getAllByText('Delete Recipe')[0]);
            expect(fetch).toHaveBeenCalled();
        });
        test('rejects if not confirmed',()=>{
            window.confirm = jest.fn().mockReturnValue(false);
            render(<Admin/>);
            const name = screen.getAllByRole('textbox')[3];
            const thumbnail = screen.getAllByRole('textbox')[4];
            const category = screen.getAllByRole('textbox')[5];
            render(<Admin/>);
            fireEvent.click(name);
            userEvent.type(name, 'Test Recipe');
            fireEvent.click(thumbnail);
            userEvent.type(thumbnail, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG14.png');
            fireEvent.click(category);
            userEvent.type(category, 'Food');
            fireEvent.click(screen.getAllByText('Delete Recipe')[0]);
            expect(fetch).not.toHaveBeenCalled();
        });
    })
    
    test('recipe editor auto-fills recipe details',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[3];
        userEvent.selectOptions(screen.getAllByRole('combobox')[4], 'Banana Bread');
        expect(name).toHaveValue('Banana Bread');
    });
    test('of the day',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[3];
        const thumbnail = screen.getAllByRole('textbox')[4];
        const category = screen.getAllByRole('textbox')[5];
        const time = screen.getAllByRole('textbox')[6];
        const ingredients = screen.getByPlaceholderText(/.*Ingredient.*/);
        const steps = screen.getByPlaceholderText(/.*Step.*/);
        
        fireEvent.click(name);
        userEvent.type(name, 'Test Recipe');
        fireEvent.click(thumbnail);
        userEvent.type(thumbnail, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG14.png');
        fireEvent.click(category);
        userEvent.type(category, 'Food');
        fireEvent.click(time);
        userEvent.type(time, '1 hour');
        fireEvent.click(ingredients);
        userEvent.type(ingredients, 'Pants, Microphone');
        fireEvent.click(steps);
        userEvent.type(steps, '1. cook 2. eat');
        fireEvent.click(screen.getByText('Save Recipe'));
        const rotd = screen.getAllByRole('combobox')[2];
        fireEvent.click(rotd);
    });
});