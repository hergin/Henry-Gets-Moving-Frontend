import {fireEvent, render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "../Pages/Admin/Admin";
import App from '../App';
import {BrowserRouter as Router} from 'react-router-dom';

describe('sections',()=>{
    test('exercise section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add ExercisePage')).toBeInTheDocument();
    });
    test('recipe section exists',()=>{
        render(<Admin/>);
        expect(screen.getByText('Add RecipePage')).toBeInTheDocument();
    });
    test('OTD form',()=>{
        render(<Admin/>);
        expect(screen.getByText('Of the Day')).toBeInTheDocument();
    });
});

describe('updates database',()=>{
    test.skip('exercise editor',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[0];
        const video = screen.getAllByRole('textbox')[1];
        const category = screen.getAllByRole('textbox')[2];
        fireEvent.click(name);
        userEvent.type(name, 'Test ExercisePage');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save ExercisePage'));
        fireEvent.click(screen.getAllByRole('select')[0]);
        fireEvent.click(screen.getByText('Test ExercisePage'));
        fireEvent.click(name);
        userEvent.type(name, 'Test ExercisePage Edited');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save ExercisePage'));
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.getByText('Test ExercisePage Edited')).toBeInTheDocument();
    });
    test.skip('exercise adder/deleter',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[0];
        const video = screen.getAllByRole('textbox')[1];
        const category = screen.getAllByRole('textbox')[2];
        fireEvent.click(name);
        userEvent.type(name, 'Test ExercisePage');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Save ExercisePage'));
        // check the exercise exists
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.getByText('Test ExercisePage')).toBeInTheDocument();
        // delete the test exercise
        render(<Admin/>);
        fireEvent.click(name);
        userEvent.type(name, 'Test ExercisePage');
        fireEvent.click(video);
        userEvent.type(video, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        fireEvent.click(category);
        userEvent.type(category, 'Yoga');
        fireEvent.click(screen.getByText('Delete ExercisePage'));
        render(<Router><App/></Router>);
        // make sure it's not there anymore
        fireEvent.click(screen.getByText('Get Moving'));
        expect(screen.queryByText('Test ExercisePage')).not.toBeInTheDocument();
    });
    test.skip('recipe adder/remover',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[3];
        const thumbnail = screen.getAllByRole('textbox')[4];
        const category = screen.getAllByRole('textbox')[5];
        const time = screen.getAllByRole('textbox')[6];
        const ingredients = screen.getAllByRole('textbox')[7];
        const steps = screen.getAllByRole('textbox')[8];
        fireEvent.click(name);
        userEvent.type(name, 'Test RecipePage');
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
        fireEvent.click(screen.getByText('Save RecipePage'));
        // check the exercise exists
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.getByText('Test RecipePage')).toBeInTheDocument();
        // delete the test exercise
        render(<Admin/>);
        fireEvent.click(name);
        userEvent.type(name, 'Test RecipePage');
        fireEvent.click(thumbnail);
        userEvent.type(thumbnail, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG14.png');
        fireEvent.click(category);
        userEvent.type(category, 'Food');
        fireEvent.click(screen.getByText('Delete RecipePage'));
        render(<Router><App/></Router>);
        // make sure it's not there anymore
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.queryByText('Test RecipePage')).not.toBeInTheDocument();
    });
    test.skip('recipe editor',()=>{
        render(<Admin/>);
        const name = screen.getAllByRole('textbox')[3];
        const thumbnail = screen.getAllByRole('textbox')[4];
        const category = screen.getAllByRole('textbox')[5];
        const time = screen.getAllByRole('textbox')[6];
        const ingredients = screen.getByPlaceholderText(/.*Ingredient.*/);
        const steps = screen.getByPlaceholderText(/.*Step.*/);
        
        fireEvent.click(name);
        userEvent.type(name, 'Test RecipePage');
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
        fireEvent.click(screen.getByText('Save RecipePage'));

        userEvent.selectOptions(screen.getAllByRole('combobox')[2], 'Test RecipePage');
        fireEvent.click(screen.getByText('Test RecipePage'));
        fireEvent.click(name);
        userEvent.type(name, 'Test RecipePage Edited');
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
        fireEvent.click(screen.getByText('Save RecipePage'));
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Eat Healthy'));
        expect(screen.getByText('Test RecipePage Edited')).toBeInTheDocument();
    });
    test('of the day',()=>{
        render(<Admin/>);
        // add exercise to make sure there is one there in existence
        const name = screen.getAllByRole('textbox')[3];
        const thumbnail = screen.getAllByRole('textbox')[4];
        const category = screen.getAllByRole('textbox')[5];
        const time = screen.getAllByRole('textbox')[6];
        const ingredients = screen.getByPlaceholderText(/.*Ingredient.*/);
        const steps = screen.getByPlaceholderText(/.*Step.*/);
        
        fireEvent.click(name);
        userEvent.type(name, 'Test RecipePage');
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
        fireEvent.click(screen.getByText('Save RecipePage'));
        const rotd = screen.getAllByRole('combobox')[2];
        fireEvent.click(rotd);
    });
});