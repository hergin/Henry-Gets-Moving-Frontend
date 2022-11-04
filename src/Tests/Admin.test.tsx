import {fireEvent, render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../Pages/Admin/Admin";
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';

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
    test.skip('exercise editor',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('input')[0];
        const video = screen.getAllByRole('input')[1];
        const category = screen.getAllByRole('input')[2];
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save Exercise'));
        fireEvent.click(screen.getAllByRole('select')[0]);
        fireEvent.click(screen.getByText('Test Exercise'));
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise Edited');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save Exercise'));
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.getByText('Test Exercise Edited')).toBeInTheDocument();
    });
    test.skip('exercise adder/deleter',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('input')[0];
        const video = screen.getAllByRole('input')[1];
        const category = screen.getAllByRole('input')[2];
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save Exercise'));
        // check the exercise exists
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.getByText('Test Exercise')).toBeInTheDocument();
        // delete the test exercise
        render(<Admin/>);
        fireEvent.click(name);
        userEvent.type(name, 'Test Exercise');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Delete Exercise'));
        render(<Router><App/></Router>);
        // make sure it's not there anymore
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.queryByText('Test Exercise')).not.toBeInTheDocument();
    });
    test.skip('recipe adder/remover',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('input')[3];
        const thumbnail = screen.getAllByRole('input')[4];
        const category = screen.getAllByRole('input')[5];
        const time = screen.getAllByRole('input')[6];
        const ingredients = screen.getAllByRole('input')[7];
        const steps = screen.getAllByRole('input')[8];
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
        // check the exercise exists
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.getByText('Test Recipe')).toBeInTheDocument();
        // delete the test exercise
        render(<Admin/>);
        fireEvent.click(name);
        userEvent.type(name, 'Test Recipe');
        fireEvent.click(thumbnail);
        userEvent.type(thumbnail, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG14.png');
        fireEvent.click(category);
        userEvent.type(category, 'Food');
        fireEvent.click(screen.getByText('Delete Recipe'));
        render(<Router><App/></Router>);
        // make sure it's not there anymore
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.queryByText('Test Recipe')).not.toBeInTheDocument();
    });
    test.skip('recipe editor',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('input')[3];
        const thumbnail = screen.getAllByRole('input')[4];
        const category = screen.getAllByRole('input')[5];
        const time = screen.getAllByRole('input')[6];
        const ingredients = screen.getAllByRole('input')[7];
        const steps = screen.getAllByRole('input')[8];
        
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

        fireEvent.click(screen.getAllByRole('select')[1]);
        fireEvent.click(screen.getByText('Test Recipe'));
        fireEvent.click(name);
        userEvent.type(name, 'Test Recipe Edited');
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
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.getByText('Test Recipe Edited')).toBeInTheDocument();
    });
    test.todo('of the day');
});