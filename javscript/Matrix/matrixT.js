class Matrix {
  constructor(rows, cols, init = 0) {
    this.matrix = [];
    this.#createMatrix(rows, cols, init);
  }
  //private function for creating Matrix//====================================
  #createMatrix(rows, cols, init, index = 0) {
    try {
      //base
      if (index >= rows) return;
      this.matrix.push(new Array(cols).fill(init));
      this.#createMatrix(rows, cols, init, index + 1);
    } catch (error) {
      return error.stack;
    }
  }
  //private validation//=================================================================
  #validation(row, col) {
    try {
      function isValidate(x, y) {
        return (
          !Number.isInteger(x) ||
          !Number.isInteger(y) ||
          x >= this.matrix.length ||
          y >= this.matrix[0].length
        );
      }
      if (isValidate.call(this, row, col)) {
        throw new SyntaxError("Please Provide Correct Indices");
      }
      return true;
    } catch (error) {
      error.stack;
    }
  }

  //public getIndexValue//=================================================================
  get(row, col) {
    if (this.#validation(row, col)) {
      console.log(this.matrix[row][col]);
    }
  }
  //public insert //==========================================================================
  insert(row, col, value) {
    if (this.#validation(row, col)) {
      this.matrix[row][col] = value;
    }
  }

  //public getValueInArray //====================================================================
  getValueInArray() {
    let result = [];
    const resultArray = (index = 0) => {
      if (index >= this.matrix.length) return result;
      result.push(...this.matrix[index]);
      return resultArray(index + 1);
    };
    return resultArray();
  }

  //public diagnol//==========================================================
  diganol() {
    const result = [];
    const outer = (i = 0) => {
      if (i >= this.matrix.length) return result;

      const inner = (j = 0) => {
        if (j >= this.matrix[i].length) return;
            if(i===j){
                result.push(this.matrix[i][j])
            }    
            inner(j+1)
      };

      inner();
      return outer(i + 1);
    };
   return outer();
  }

  //fx for insertion in matrix
}

const mtx = new Matrix(2, 2);

mtx.insert(1, 0, 15);
mtx.insert(1, 1, 25);
mtx.insert(0, 1, 10);
mtx.insert(0, 0, 5);
