import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Crossword/CrosswordComponent.scss';
import Crossword, {CrosswordImperative, CrosswordProps} from '@jaredreisinger/react-crossword';
// @ts-ignore
import styled from 'styled-components';

const data = {
    across: {
        1: { clue: 'A yellow fruit that monkeys like to eat.', answer: 'BANANA', row: 0, col: 5 },
        2: { clue: 'A red fruit that is turned into ketchup.', answer: 'TOMATO', row: 2, col: 4},
        4: { clue: 'A blueish/purplish fruit that is small and round, also very sweet.', answer: 'BLUEBERRY', row: 6, col: 4},
        7: { clue: 'A red or green fruit.', answer: 'APPLE', row: 10, col: 6},
        8: { clue: 'An orange fruit that is sometimes turned into a juice drink.', answer: 'ORANGE', row: 12, col: 9},
        9: { clue: 'A green fruit with a big seed in the middle.', answer: 'AVOCADO', row: 13, col: 0},
    },
    down: {
        1: { clue: 'A green vegetable that looks like a tree.', answer: 'BROCCOLI', row: 0, col: 5},
        3: { clue: 'A red fruit that has seeds on the outside and is very sweet.', answer: 'STRAWBERRY', row: 4, col: 10},
        5: { clue: 'A green vegetable that looks like a pickle.', answer: 'CUCUMBER', row: 6, col: 14},
        6: { clue: 'An orange vegetable that helps you see better.', answer: 'CARROT', row: 9, col: 6},
    },
};

const Commands = styled.div``;

const Command = styled.button`
  margin-right: 1em;
`;

const CrosswordWrapper = styled.div`
  max-width: 30em;
  /* and some fun making use of the defined class names */
  .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }
  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }
    text-decoration: line-through;
    color: rgb(130, 130, 130);
  }
`;

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...

function CrosswordComponent() {
    const crossword = useRef<CrosswordImperative>(null);

    const fillAllAnswers = useCallback<React.MouseEventHandler>((event) => {
        crossword.current?.fillAllAnswers();
    }, []);

    const reset = useCallback<React.MouseEventHandler>((event) => {
        crossword.current?.reset();
    }, []);

    // We don't really *do* anything with callbacks from the Crossword component,
    // but we can at least show that they are happening.  You would want to do
    // something more interesting than simply collecting them as messages.
    const messagesRef = useRef<HTMLPreElement>(null);
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = useCallback((message: string) => {
        setMessages((m) => m.concat(`${message}\n`));
    }, []);

    useEffect(() => {
        if (!messagesRef.current) {
            return;
        }
        const { scrollHeight } = messagesRef.current;
        messagesRef.current.scrollTo(0, scrollHeight);
    }, [messages]);

    // onCorrect is called with the direction, number, and the correct answer.
    const onCorrect = useCallback<Required<CrosswordProps>['onCorrect']>(
        (direction, number, answer) => {
            addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
        },
        [addMessage]
    );

    // onLoadedCorrect is called with an array of the already-correct answers,
    // each element itself is an array with the same values as in onCorrect: the
    // direction, number, and the correct answer.
    const onLoadedCorrect = useCallback<
        Required<CrosswordProps>['onLoadedCorrect']
        >(
        (answers) => {
            addMessage(
                `onLoadedCorrect:\n${answers
                    .map(
                        ([direction, number, answer]) =>
                            `    - "${direction}", "${number}", "${answer}"`
                    )
                    .join('\n')}`
            );
        },
        [addMessage]
    );

    // onCrosswordCorrect is called with a truthy/falsy value.
    const onCrosswordCorrect = useCallback<
        Required<CrosswordProps>['onCrosswordCorrect']
        >(
        (isCorrect) => {
            addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
        },
        [addMessage]
    );

    // onCellChange is called with the row, column, and character.
    const onCellChange = useCallback<Required<CrosswordProps>['onCellChange']>(
        (row, col, char) => {
            addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
        },
        [addMessage]
    );

    return (
        <div className='crossword-component'>
                <Commands>
                    <Command onClick={fillAllAnswers}>See Answers</Command>
                    <Command onClick={reset}>Reset</Command>
                </Commands>
                <CrosswordWrapper>
                    <Crossword
                        ref={crossword}
                        data={data}
                        storageKey="first-example"
                        onCorrect={onCorrect}
                        onLoadedCorrect={onLoadedCorrect}
                        onCrosswordCorrect={onCrosswordCorrect}
                        onCellChange={onCellChange}
                    />
                </CrosswordWrapper>
        </div>
    );
}

export default CrosswordComponent;