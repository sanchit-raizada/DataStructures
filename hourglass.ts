function rightArrow(n: number) {
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


let result = rightArrow(5)
console.log(result)
