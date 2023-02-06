import React from "react";

const WordsearchComponent = () => {
    const wordsearchGrid = [['K', 'R', 'P', 'G', 'Z', 'J', 'B', 'U', 'U', 'F', 'D', 'K', 'F', 'O', 'O', 'T', 'B', 'A', 'L', 'L'],
                            ['A', 'U', 'G', 'X', 'V', 'D', 'L', 'T', 'F', 'F', 'I', 'K', 'Z', 'Y', 'F', 'G', 'H', 'X', 'H', 'O'],
                            ['L', 'N', 'A', 'V', 'Y', 'K', 'P', 'W', 'R', 'N', 'U', 'T', 'R', 'I', 'T', 'I', 'O', 'N', 'V', 'C'],
                            ['U', 'N', 'H', 'K', 'Y', 'J', 'S', 'U', 'U', 'X', 'R', 'V', 'N', 'I', 'T', 'I', 'K', 'D', 'S', 'A'],
                            ['E', 'I', 'T', 'H', 'M', 'Q', 'S', 'R', 'Z', 'Z', 'W', 'U', 'Z', 'E', 'G', 'M', 'Z', 'X', 'K', 'C'],
                            ['B', 'N', 'J', 'P', 'U', 'Y', 'X', 'J', 'K', 'L', 'K', 'R', 'D', 'F', 'S', 'C', 'B', 'D', 'A', 'T'],
                            ['H', 'G', 'E', 'N', 'D', 'L', 'R', 'J', 'R', 'V', 'S', 'K', 'J', 'Z', 'R', 'S', 'U', 'A', 'T', 'I'],
                            ['T', 'E', 'V', 'X', 'Y', 'R', 'I', 'D', 'W', 'A', 'K', 'X', 'T', 'L', 'I', 'P', 'J', 'N', 'I', 'V'],
                            ['F', 'V', 'A', 'G', 'E', 'R', 'F', 'B', 'A', 'S', 'K', 'E', 'T', 'B', 'A', 'L', 'L', 'C', 'N', 'E'],
                            ['N', 'D', 'S', 'L', 'F', 'R', 'S', 'I', 'D', 'I', 'J', 'N', 'R', 'R', 'V', 'V', 'G', 'I', 'G', 'B'],
                            ['J', 'W', 'O', 'M', 'T', 'S', 'C', 'D', 'Z', 'N', 'C', 'F', 'C', 'S', 'F', 'U', 'H', 'N', 'C', 'B'],
                            ['X', 'X', 'C', 'G', 'W', 'H', 'J', 'I', 'G', 'V', 'Y', 'S', 'J', 'F', 'A', 'T', 'W', 'G', 'V', 'D'],
                            ['M', 'N', 'C', 'D', 'L', 'N', 'Y', 'D', 'S', 'V', 'M', 'W', 'N', 'K', 'V', 'O', 'Y', 'X', 'R', 'Z'],
                            ['P', 'V', 'E', 'E', 'M', 'C', 'V', 'X', 'G', 'E', 'K', 'Z', 'C', 'U', 'W', 'W', 'H', 'R', 'L', 'E'],
                            ['D', 'V', 'R', 'S', 'K', 'W', 'W', 'G', 'O', 'L', 'F', 'A', 'A', 'F', 'M', 'W', 'P', 'G', 'F', 'F']]

    const wordsearchTable = () => {
        return wordsearchGrid.map((row) => {
            return (
                <div>
                    <tr>
                        {row.map((string) => {
                            return (
                                <td>{string}</td>
                            )
                        })}
                    </tr>
                </div>

            )
        })
    }

    return (
        <div>
            <div>
                {wordsearchTable()}
            </div>
        </div>

    )
}
export default WordsearchComponent;