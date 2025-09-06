// class Matrix {
//   constructor(rows, cols, initialValue = 0) {
//     this.matrix = [];
//     this.#createMatrix(rows, cols, initialValue);
//   }
//   //creating an matrix;
//   #createMatrix(rows, cols, initialValue) {
//     for (let i = 0; i < rows; i++) {
//       this.matrix.push([]);
//       for (let j = 0; j < cols; j++) {
//         this.matrix[i].push(initialValue);
//       }
//     }
//   }
//   //insertvalue =================================================>
//   insert(rows, cols, value) {
//     try {
//       if (!rows && !cols && !value) throw new SyntaxError("Give correct input");
//       return (this.matrix[rows][cols] = value);
//     } catch (error) {
//       return error.stack;
//     }
//   }
//   //flat =========================================================>
//   flated() {
//     let flatArray = [];
//     for (let i = 0; i < this.matrix.length; i++) {
//       for (let j = 0; j < this.matrix[i].length; j++) {
//         flatArray.push(this.matrix[i][j]);
//       }
//     }
//     return flatArray;
//   }
//   //customflat===================================================>
//   customflat(val) {
//     try {
//       if (typeof val === "undefined" || !Array.isArray(val))
//         throw new SyntaxError("Please Provide Correct Value");
//       let flatArray = [];
//       for (let i = 0; i < val.length; i++) {
//         for (let j = 0; j < val[i].length; j++) {
//           flatArray.push(val[i][j]);
//         }
//       }
//       return flatArray;
//     } catch (error) {
//       return error.stack;
//     }
//   }
//   //map====================================================>
//   custommap(val, cb) {
//     try {
//       if (typeof cb !== "function") throw new SyntaxError("Need a callback");
//       let result = this.customflat(val);
//       return result.map(cb);
//     } catch (error) {
//       return error.stack;
//     }
//   }

//   //maths ================================>
//   maths(opt) {
//     let result;
//     this.custommap(
//       this.matrix,
//       (() => {
//         if (opt === "addition") result = 0;
//         else if (opt === "multiply") result = 1;
//         else throw new SyntaxError("Give Correct Input");
//         return (item) => {
//           if(opt==="addition"){
//             result+=item;
//           }
//           else{
//             result*=item
//           }
//         };
//       })()

//     );
//     return result;
//   }
// }

// const data = new Matrix(2, 3);
// data.insert(0, 0, 4);
// data.insert(0, 1, 8);
// data.insert(0, 2, 9);
// data.insert(1, 0, 7);
// data.insert(1, 1, 5);
// data.insert(1, 2, 15);
// console.log(data.matrix)
// data.maths("multiply");


