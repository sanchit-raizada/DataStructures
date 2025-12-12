class PatternsPractice {
    auth(n: any) {
        if (typeof n === "number") return true;
        return false;
    }



    //basic start patterns;
    // ****
    // ****
    // ****
    // ****
    rectangle(n: number) {
        let result: string = ''
        if (this.auth(n)) {

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    result += "*"
                }
                result += '\n'
            }

            return result;
        }

        throw new SyntaxError("Only Numbers are Allowed")
    }



    //hollowReactangle
    // *****
    // *   *
    // *   *
    // *   *
    // *****
    hollowReactangle(n: number) {
        let result = "";
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || i === n - 1 || j === 0 || j === n - 1) result += "*"
                else result += " "
            }
            result += "\n"
        }
        return result;
    }



    //straight triangle
    // *
    // **
    // ***
    // ****
    starightTriangle(n: number) {
        let result: string = ""
        for (let i = 0; i < n; i++) {
            console.log(i)
            for (let j = 0; j < i; j++) {
                result += "*"
            }
            result += '\n'
        }

        return result;
    }






    //hollow triangle
    // *
    // **
    // * *
    // *  *
    // *****
    hollowTriagnle(n: number) {
        let result = ""
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j === 0 || i === n - 1 || i === j) {
                    result += "*"
                }
                else {
                    result += " "
                }
            }
            result += "\n"
        }
        return result;
    }





    //inverted Triangle
    // ****
    // ***
    // **
    // *
    invertedTriangle(n: number) {
        let result: string = "";

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i; j++) {
                console.log(j, "console of j")
                result += "*";
            }
            result += "\n"
        }

        return result;

    }





    // *****
    //  *  *
    //   * *
    //    **
    //     *
    //hollowInvertedTriangle
    hollowInvertedTriagnle(n: number) {
        let result = ""
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || j === n - 1 || i === j) {
                    result += "*"
                }
                else {
                    result += " "
                }
            }
            result += "\n"
        }
        return result;
    }





    //right Triangle
    //    *
    //   **
    //  ***
    // ****
    rightTriangle(n: number) {
        let result: string = "";
        for (let i = n; i > 0; i--) {
            for (let j = 0; j < n; j++) {
                if (j >= i) {
                    result += "*"
                }
                else {
                    result += " "
                }
            }
            result += '\n'
        }
        return result;
    }




    //reverseTriangle
    // ****
    //  ***
    //   **
    //    *
    reverseTriangle(n: number) {
        let result = "";
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j >= i) {
                    result += "*"
                }
                else {
                    result += " "
                }
            }
            result += "\n"
        }
        return result;
    }






    //pyramid function
    //    *
    //   ***
    //  *****
    // *******
    pyramid(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);
        for (let i = 0; i < mid; i++) {
            for (let j = 0; j < n; j++) {
                if (j >= mid - i && j <= mid + i) result += "*"
                else result += " "
            }
            result += "\n"
        }
        return result;
    }





    //hollowPyramid
    //    *
    //   * *
    //  *   *
    // *******
    hollowPyramid(n: number) {
        let result = ""
        let mid = Math.floor(n / 2);


        for (let i = 0; i <= mid; i++) {
            for (let j = 0; j < n; j++) {
                if (i === mid || j === mid - i || j === mid + i) result += "*"
                else result += " "
            }
            result += "\n"
        }
        return result;
    }




    //inverted Pyramid
    // *******
    //  *****
    //   ***
    //    *
    invertedPyramid(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);
        for (let i = mid; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (j >= mid - i && j <= mid + i) {
                    result += "*"
                }
                else {
                    result += " "
                }
            }
            result += '\n'
        }
        return result;
    }





    //hollowInvertedPyramid
    // *******
    //  *   *
    //   * *
    //    *
    hollowInvertedPyramid(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);
        for (let i = mid; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (i === mid || j === mid - i || j === mid + i) result += "*"
                else result += " "
            }
            result += "\n"
        }
        return result;
    }






    //diamond
    //    *
    //   ***
    //  *****
    // *******
    //  *****
    //   ***
    //    *
    diamond(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);

        for (let i = 0; i < n; i++) {
            if (i <= mid) {
                for (let j = 0; j < n; j++) {
                    if (j >= mid - i && j <= mid + i) {
                        result += "*"
                    }
                    else {
                        result += " "
                    }
                }
            }
            else {
                let value = (n - i) - 1;
                for (let j = 0; j < n; j++) {
                    if (j >= mid - value && j <= mid + value) {
                        result += "*"
                    }
                    else {
                        result += " "
                    }
                }

            }
            result += "\n"
        }
        return result;
    }



    //rightArrow
    // *
    // **
    // ***
    // ****
    // *****
    // ****
    // ***
    // **
    // *
    rightArrow(n: number) {
        let result = ""
        let mid = Math.floor(n / 2)

        for (let i = 0; i < n * 2; i++) {
            if (i < n) {
                for (let j = 0; j < n; j++) {
                    if (j <= i) {
                        result += "*"
                    }
                    else {
                        result += " "
                    }
                }
            }
            else {
                let value = (2 * n - i) - 2;
                for (let j = 0; j < n; j++) {
                    if (j <= value) {
                        result += "*"
                    }
                    else result += " "
                }
            }

            result += "\n"
        }
        return result;
    }










    //hollowDiamond
    //     *
    //    * *
    //   *   *
    //  *     *
    // *       *
    //  *     *
    //   *   *
    //    * *
    //     *
    hollowDiamond(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);

        for (let i = 0; i < n; i++) {
            if (i <= mid) {
                for (let j = 0; j < n; j++) {
                    if (j == mid - i || j == mid + i) {
                        result += "*"
                    }
                    else {
                        result += " "
                    }
                }
            }
            else {
                let value = (n - i) - 1;
                for (let j = 0; j < n; j++) {
                    if (j == mid - value || j == mid + value) {
                        result += "*"
                    }
                    else {
                        result += " "
                    }
                }

            }
            result += "\n"
        }
        return result;
    }



    //hourGlass
    // *******
    //  *****
    //   ***
    //    *
    //   ***
    //  *****
    // *******
    hourGlass(n: number) {
        let result = ""
        let mid = Math.floor(n / 2)
        let pointer = mid;
        for (let i = 0; i < n; i++) {
            if (i <= mid) {
                for (let j = 0; j < n; j++) {
                    if (j >= mid - pointer && j <= mid + pointer) result += "*"
                    else result += " "
                }
                pointer--
            }
            else {
                if (pointer < 0) pointer = 1;
                for (let j = 0; j < n; j++) {
                    if (j >= mid - pointer && j <= mid + pointer) result += "*"
                    else result += " "
                }
                pointer++
            }

            result += "\n"
        }
        return result;
    }



    //hollowHourGlass
    // *******
    //  *   *
    //   * *
    //    *
    //   * *
    //  *   *
    // *******
    hollowHourGlass(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);
        let pointer = mid;

        for (let i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) {
                for (let j = 0; j < n; j++) {
                    result += "*"
                }
            }
            else {
                if (i <= mid) {
                    pointer -= 1;
                    for (let j = 0; j < n; j++) {
                        if (j === mid - pointer || j === mid + pointer) {
                            result += "*"
                        }
                        else result += " "
                    }
                }
                else {
                    pointer += 1;
                    for (let j = 0; j < n; j++) {
                        if (j === mid - pointer || j === mid + pointer) {
                            result += "*"
                        }
                        else result += " "
                    }
                }
            }
            result += "\n"
        }
        return result
    }


    //plus pattern
    //    *
    //    *
    // *******
    //    *
    //    *
    //    *

    plus(n: number) {
        let result = ""
        let mid = Math.floor(n / 2);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === mid || j === mid) result += "*"
                else result += " "
            }
            result += "\n"
        }
        return result;
    }




    //cross
    // *     *
    //  *   *
    //   * *
    //    *
    //   * *
    //  *   *
    // *     *
    cross(n: number) {
        let result = "";
        let mid = Math.floor(n / 2);
        let pointer = mid;

        for (let i = 0; i < n; i++) {
            if (i <= mid) {
                for (let j = 0; j < n; j++) {
                    if (j === mid - pointer || j === mid + pointer) result += "*"
                    else result += " "
                }
                result += "\n"
                pointer--;
            }
            else {
                if (pointer < 0) pointer = 1;
                for (let j = 0; j < n; j++) {
                    if (j === mid - pointer || j === mid + pointer) result += "*"
                    else result += " "
                }
                result += "\n"
                pointer++;
            }

        }
        return result;
    }
}


const data = new PatternsPractice()

let output = data.plus(7)
console.log(output)


