// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
export function isValidSudoku(board: string[][]): boolean {
	for (let i = 0; i < 9; ++i) {
		const existed = new Map<string, boolean>();

		const checkExistence = (k: string, v: string) => {
			if (v !== '.') {
				if (existed.has(`${k}-${v}`)) return true;
				existed.set(`${k}-${v}`, true);
			}
		};

		// Check rows & columns
		for (let j = 0; j < 9; ++j) {
			if (checkExistence('r', board[i][j])) return false; // Row
			if (checkExistence('c', board[j][i])) return false; // Column
		}

		// Check sub-box
		for (let k = 0; k < 3; ++k) {
			for (let l = 0; l < 3; ++l) {
				if (checkExistence('s', board[k + 3 * ~~(i / 3)][l + ((3 * (i % 3)) % 9)])) return false;
			}
		}
	}

	return true;
}
