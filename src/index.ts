import { startMatrixApplication, clearMatrix, setCell } from "node-cli-character-matrix";
import { ALL_SHAPES } from './shapes';
import { paintMatrixFromMatrix } from './utils';

const N_ROWS = 5;
const N_COLUMNS = 5;
const INTERVAL_MS = 100;


let currentX = 0; 
let currentY = 0; 

startMatrixApplication({
	nRows: N_ROWS,
	nColumns: N_COLUMNS,
	intervalTime: INTERVAL_MS,
	onTick: (matrix, tickCount, exit,keyPress, oldState) => {
		const clearedMatrix = clearMatrix(matrix);

        if (keyPress) {

			switch (keyPress.name) {
				case "down": {
					currentY = (currentY + 1 + N_ROWS) % N_ROWS;
					break;
				}
				case "up": {
					currentY = (currentY - 1 + N_ROWS) % N_ROWS;
					break;
				}

				case "left": {
					currentX = (currentX - 1 + N_COLUMNS) % N_COLUMNS;
					break;
				}

				case "right": {
					currentX = (currentX + 1 + N_COLUMNS) % N_COLUMNS;
					break;
				}
			}
		}

        const shape = ALL_SHAPES[currentX% ALL_SHAPES.length]; 

        const newMatrix = paintMatrixFromMatrix(matrix, shape); 
		return {newMatrix, newState: null};
	},
	initialState: null,
});