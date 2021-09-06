import { Char, Matrix, setCell } from 'node-cli-character-matrix';

/**
 * Paint a matrix by overlaying another matrix
 * 
 * PROTIP - you probably want to extend this function!
 */
export function paintMatrixFromMatrix(matrix: Matrix, itemsToPaint: Array<Array<Char | null>>) :Matrix{

    let newMatrix =matrix; 
    itemsToPaint.forEach((row, rowNum) => {
        row.forEach((char, colNum) => {
            if (char) {
                newMatrix = setCell(newMatrix, rowNum, colNum, char); 
            }
        }); 
    }); 

    return newMatrix; 
}

export type CharacterPoint = {
    char: Char, 
    x: number; 
    y: number; 
}

/** Paint a matrix from a single list of x,y,char objects */
export function paintMatrixFromPositions(matrix: Matrix, items: Array<CharacterPoint>) : Matrix {
    return items.reduce((acc, cur) => {
        return setCell(acc, cur.y, cur.x, cur.char); 
    }, matrix); 
}