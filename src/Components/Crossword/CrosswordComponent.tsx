import Crossword from '@jaredreisinger/react-crossword';

const CrosswordComponent = () => {
    const clue = '';

    const data = {
        across: {
            1: { clue: 'A yellow fruit that monkeys like to eat.', answer: 'Banana', row: 0, col: 5 },
            2: { clue: 'A red fruit that is turned into ketchup.', answer: 'Tomato', row: 2, col: 4},
            4: { clue: 'A blueish/purplish fruit that is small and round, also very sweet.', answer: 'Blueberry', row: 5, col: 4},
            7: { clue: 'A red or green fruit.', answer: 'Apple', row: 9, col: 6},
            8: { clue: 'An orange fruit that is sometimes turned into a juice drink.', answer: 'Orange', row: 11, col: 9},
            9: { clue: 'A green fruit with a big seed in the middle.', answer: 'Avocado', row: 12, col: 0},
        },
        down: {
            1: { clue: 'A green vegetable that looks like a tree.', answer: 'Broccoli', row: 0, col: 5},
            3: { clue: 'A red fruit that has seeds on the outside and is very sweet.', answer: 'Strawberry', row: 3, col: 10},
            5: { clue: 'A green vegetable that looks like a pickle.', answer: 'Cucumber', row: 5, col: 14},
            6: { clue: 'An orange vegetable that helps you see better.', answer: 'Carrot', row: 8, col: 6},
        },
    };

    return(
        <div className='crossword-component'>
            <Crossword data={data} />
        </div>
    )
}
export default CrosswordComponent;