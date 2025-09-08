type Matrix = {row:number,col:number,value:number}
type MatrixValidate= [row:Matrix["row"],col:Matrix["col"],value:Matrix["value"]]



class SparseMatrix {
  public matrix: Array<Matrix>;
  private row: Array<number>;
  private col: Array<number>;
  constructor() {
    this.matrix = [];
    this.row = [];
    this.col = [];
  }

  //custom validation
  private validate(...args:MatrixValidate) {
    const [row,col] = args
    if (!this.row.includes(row) && !this.col.includes(col)) {
      return "rowColNotExist";
    } else {
      if (this.row.includes(row)) {
        if (!this.col.includes(col)) {
          return "colNotExist";
        }
      } else {
        if (this.col.includes(col)) {
          return "colExist";
        }
      }
      return "rowcolExist";
    }
  }

  private counter(i = 0, cb: (item: Matrix) => void) {
    if (i >= this.matrix.length) return;
    let curr = this.matrix[i];
    cb(curr);
    this.counter(i + 1, cb);
  }
  //add function
  public add(row: number, col: number, value = 1) {
    const result = this.validate(row, col, value);
    switch (result) {
      case "rowColNotExist": {
        this.row.push(row);
        this.col.push(col);
        break;
      }
      case "colExist": {
        this.row.push(row);
        break;
      }
      case "colNotExist": {
        this.col.push(col);
        break;
      }
    }
    this.matrix.push({ row, col, value });
  }

  //get function
  public get(row: number, col: number) {
    const validate = this.validate(row, col, 1);
    if (validate === "rowcolExist") {
      let result = undefined;
      this.counter(0, (item) => {
        if (item.row === row && item.col === col) {
          result = item.value;
        }
      });
      return result;
    }
    else {
        throw new SyntaxError("value doesn't exist")
    }
  }

  //diagnol function
  public diagnol(){
    const result:Array<number> = []
    this.counter(0,(item)=>{
        if(item.row===item.col){
            result.push(item.value)
        }
    })
    return result;
  }



}
const mtx = new SparseMatrix();
mtx.add(0, 0, 55);
mtx.add(0, 1, 56);
mtx.add(0, 2, 57);
mtx.add(0, 3, 58);
mtx.add(1, 0, 59);
mtx.add(1, 1, 60);
mtx.add(1, 2, 60);
const result = mtx.diagnol()

console.log(result)
