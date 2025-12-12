class PatternMaster {
    private validateInput(n: number): boolean {
        return typeof n === 'number' && n > 0;
    }

    // ==================== LEVEL 1: BASIC STAR PATTERNS ====================

    // 1. Solid Square
    solidSquare(n: number): string {
        if (!this.validateInput(n)) throw new Error("Invalid input");
        let result = '';
        for (let i = 0; i < n; i++) {
            result += '*'.repeat(n) + '\n';
        }
        return result;
    }

    // 2. Hollow Square
    hollowSquare(n: number): string {
        if (!this.validateInput(n)) throw new Error("Invalid input");
        let result = '';
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) {
                result += '*'.repeat(n);
            } else {
                result += '*' + ' '.repeat(n - 2) + '*';
            }
            result += '\n';
        }
        return result;
    }

    // 3. Solid Rectangle
    solidRectangle(rows: number, cols: number): string {
        let result = '';
        for (let i = 0; i < rows; i++) {
            result += '*'.repeat(cols) + '\n';
        }
        return result;
    }

    // 4. Hollow Rectangle
    hollowRectangle(rows: number, cols: number): string {
        let result = '';
        for (let i = 0; i < rows; i++) {
            if (i === 0 || i === rows - 1) {
                result += '*'.repeat(cols);
            } else {
                result += '*' + ' '.repeat(cols - 2) + '*';
            }
            result += '\n';
        }
        return result;
    }

    // 5. Right Triangle
    rightTriangle(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += '*'.repeat(i) + '\n';
        }
        return result;
    }

    // 6. Inverted Right Triangle
    invertedRightTriangle(n: number): string {
        let result = '';
        for (let i = n; i >= 1; i--) {
            result += '*'.repeat(i) + '\n';
        }
        return result;
    }

    // 7. Left Triangle
    leftTriangle(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
        }
        return result;
    }

    // 8. Inverted Left Triangle
    invertedLeftTriangle(n: number): string {
        let result = '';
        for (let i = n; i >= 1; i--) {
            result += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
        }
        return result;
    }

    // 9. Pyramid
    pyramid(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        return result;
    }

    // 10. Inverted Pyramid
    invertedPyramid(n: number): string {
        let result = '';
        for (let i = n; i >= 1; i--) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        return result;
    }

    // 11. Diamond
    diamond(n: number): string {
        let result = '';
        // Upper part
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        // Lower part
        for (let i = n - 1; i >= 1; i--) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        return result;
    }

    // 12. Hollow Diamond
    hollowDiamond(n: number): string {
        let result = '';
        // Upper part
        for (let i = 1; i <= n; i++) {
            if (i === 1) {
                result += ' '.repeat(n - i) + '*' + '\n';
            } else {
                result += ' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*' + '\n';
            }
        }
        // Lower part
        for (let i = n - 1; i >= 1; i--) {
            if (i === 1) {
                result += ' '.repeat(n - i) + '*' + '\n';
            } else {
                result += ' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*' + '\n';
            }
        }
        return result;
    }



    // 13. Hourglass
    hourglass(n: number): string {
        let result = '';
        // Upper part
        for (let i = n; i >= 1; i--) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        // Lower part
        for (let i = 2; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        return result;
    }

    // 14. X Pattern
    xPattern(n: number): string {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j === i || j === n - i - 1) {
                    result += '*';
                } else {
                    result += ' ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // 15. Plus Pattern
    plusPattern(n: number): string {
        let result = '';
        const mid = Math.floor(n / 2);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j === mid || i === mid) {
                    result += '*';
                } else {
                    result += ' ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // ==================== LEVEL 2: NUMBER PATTERNS ====================

    // 21. Number Square
    numberSquare(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                result += i;
            }
            result += '\n';
        }
        return result;
    }

    // 22. Number Pyramid
    numberPyramid(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += i + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 23. Number Triangle
    numberTriangle(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                result += j + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 24. Floyd's Triangle
    floydsTriangle(n: number): string {
        let result = '';
        let num = 1;
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                result += num.toString().padEnd(3, ' ') + ' ';
                num++;
            }
            result += '\n';
        }
        return result;
    }

    // 25. Pascal's Triangle
    pascalsTriangle(n: number): string {
        let result = '';
        for (let i = 0; i < n; i++) {
            let num = 1;
            result += ' '.repeat(n - i - 1);
            for (let j = 0; j <= i; j++) {
                result += num.toString().padEnd(3, ' ') + ' ';
                num = num * (i - j) / (j + 1);
            }
            result += '\n';
        }
        return result;
    }

    // 26. Continuous Numbers Pyramid
    continuousNumbersPyramid(n: number): string {
        let result = '';
        let num = 1;
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += num.toString().padEnd(2, ' ') + ' ';
                num++;
            }
            result += '\n';
        }
        return result;
    }

    // ==================== LEVEL 3: ADVANCED PATTERNS ====================

    // 41. Butterfly Pattern
    butterfly(n: number): string {
        let result = '';
        // Upper part
        for (let i = 1; i <= n; i++) {
            result += '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i) + '\n';
        }
        // Lower part
        for (let i = n; i >= 1; i--) {
            result += '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i) + '\n';
        }
        return result;
    }

    // 44. Full Butterfly
    fullButterfly(n: number): string {
        let result = '';
        const totalWidth = 2 * n;

        for (let i = 1; i <= n; i++) {
            const stars = i;
            const spaces = totalWidth - 2 * stars;

            // Left wing
            result += '*'.repeat(stars);
            // Body
            result += ' '.repeat(spaces);
            // Right wing
            result += '*'.repeat(stars);
            result += '\n';
        }

        for (let i = n; i >= 1; i--) {
            const stars = i;
            const spaces = totalWidth - 2 * stars;

            // Left wing
            result += '*'.repeat(stars);
            // Body
            result += ' '.repeat(spaces);
            // Right wing
            result += '*'.repeat(stars);
            result += '\n';
        }

        return result;
    }

    // 49. Palindrome Pyramid
    palindromePyramid(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            // Increasing numbers
            for (let j = 1; j <= i; j++) {
                result += j;
            }
            // Decreasing numbers
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        return result;
    }

    // 50. Alphabet Pyramid
    alphabetPyramid(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            // Increasing letters
            for (let j = 0; j < i; j++) {
                result += String.fromCharCode(65 + j);
            }
            // Decreasing letters
            for (let j = i - 2; j >= 0; j--) {
                result += String.fromCharCode(65 + j);
            }
            result += '\n';
        }
        return result;
    }

    // ==================== LEVEL 4: LOGIC BASED PATTERNS ====================

    // 61. Snake Pattern Matrix
    snakePattern(rows: number, cols: number): string {
        let result = '';
        let num = 1;

        for (let i = 0; i < rows; i++) {
            if (i % 2 === 0) {
                // Left to right
                for (let j = 0; j < cols; j++) {
                    result += num.toString().padStart(3, ' ') + ' ';
                    num++;
                }
            } else {
                // Right to left
                num += cols - 1;
                for (let j = 0; j < cols; j++) {
                    result += num.toString().padStart(3, ' ') + ' ';
                    num--;
                }
                num += cols + 1;
            }
            result += '\n';
        }
        return result;
    }

    // 62. Zig-Zag Matrix
    zigZagMatrix(rows: number, cols: number): string {
        let result = '';
        let matrix: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(0));
        let num = 1;

        for (let i = 0; i < rows; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < cols; j++) {
                    matrix[i]![j] = num++;
                }
            } else {
                for (let j = cols - 1; j >= 0; j--) {
                    matrix[i]![j] = num++;
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result += matrix[i]![j]!.toString().padStart(3, ' ') + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 63. Checkerboard Pattern
    checkerboard(n: number): string {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if ((i + j) % 2 === 0) {
                    result += '██';
                } else {
                    result += '  ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // 64. Binary Triangle
    binaryTriangle(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            let start = i % 2;
            for (let j = 1; j <= i; j++) {
                result += start + ' ';
                start = 1 - start;
            }
            result += '\n';
        }
        return result;
    }

    // ==================== LEVEL 5: EXPERT PATTERNS ====================

    // 81. Heart Pattern
    heartPattern(size: number): string {
        let result = '';
        const n = size;

        for (let i = n / 2; i <= n; i += 2) {
            // First part of the heart
            for (let j = 1; j < n - i; j += 2) {
                result += ' ';
            }

            // First half of heart
            for (let j = 1; j <= i; j++) {
                result += '*';
            }

            // Space between two halves
            for (let j = 1; j <= n - i; j++) {
                result += ' ';
            }

            // Second half of heart
            for (let j = 1; j <= i; j++) {
                result += '*';
            }

            result += '\n';
        }

        // Bottom part of heart
        for (let i = n; i >= 1; i--) {
            for (let j = i; j < n; j++) {
                result += ' ';
            }
            for (let j = 1; j <= (i * 2) - 1; j++) {
                result += '*';
            }
            result += '\n';
        }

        return result;
    }

    // 82. Arrow Pattern
    arrowPattern(n: number): string {
        let result = '';
        // Arrow head
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        // Arrow shaft
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - 1) + '*' + '\n';
        }
        return result;
    }

    // 83. Spiral Pattern
    spiralPattern(n: number): string {
        let result = '';
        const matrix: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

        let top = 0, bottom = n - 1, left = 0, right = n - 1;
        let num = 1;
        let direction = 0;

        while (top <= bottom && left <= right) {
            if (direction === 0) {
                // Left to right
                for (let i = left; i <= right; i++) {
                    matrix[top]![i] = num++;
                }
                top++;
            } else if (direction === 1) {
                // Top to bottom
                for (let i = top; i <= bottom; i++) {
                    matrix[i]![right] = num++;
                }
                right--;
            } else if (direction === 2) {
                // Right to left
                for (let i = right; i >= left; i--) {
                    matrix[bottom]![i] = num++;
                }
                bottom--;
            } else if (direction === 3) {
                // Bottom to top
                for (let i = bottom; i >= top; i--) {
                    matrix[i]![left] = num++;
                }
                left++;
            }
            direction = (direction + 1) % 4;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result += matrix[i]![j]!.toString().padStart(3, ' ') + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 84. Number Hill Pattern
    numberHill(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            // Decreasing numbers
            for (let j = 1; j <= n - i + 1; j++) {
                result += j;
            }

            // Spaces
            for (let j = 1; j <= 2 * (i - 1); j++) {
                result += ' ';
            }

            // Increasing numbers (reverse)
            for (let j = n - i + 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        return result;
    }

    // 85. Diamond with Numbers
    diamondWithNumbers(n: number): string {
        let result = '';
        // Upper part
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += j;
            }
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        // Lower part
        for (let i = n - 1; i >= 1; i--) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += j;
            }
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        return result;
    }

    // 86. Alphabet Diamond
    alphabetDiamond(n: number): string {
        let result = '';
        // Upper part
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            // Increasing letters
            for (let j = 0; j < i; j++) {
                result += String.fromCharCode(65 + j);
            }
            // Decreasing letters
            for (let j = i - 2; j >= 0; j--) {
                result += String.fromCharCode(65 + j);
            }
            result += '\n';
        }
        // Lower part
        for (let i = n - 1; i >= 1; i--) {
            result += ' '.repeat(n - i);
            // Increasing letters
            for (let j = 0; j < i; j++) {
                result += String.fromCharCode(65 + j);
            }
            // Decreasing letters
            for (let j = i - 2; j >= 0; j--) {
                result += String.fromCharCode(65 + j);
            }
            result += '\n';
        }
        return result;
    }

    // 87. Pattern with Special Characters
    specialPattern(n: number): string {
        let result = '';
        const chars = ['*', '#', '$', '@', '%', '&'];

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                result += chars[(i + j) % chars.length] + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 88. Hollow Pyramid with Numbers
    hollowPyramidNumbers(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            if (i === 1) {
                result += '1';
            } else if (i === n) {
                for (let j = 1; j <= 2 * n - 1; j++) {
                    result += (j % 2 === 0 ? ' ' : ((j + 1) / 2).toString());
                }
            } else {
                result += '1' + ' '.repeat(2 * i - 3) + i.toString();
            }
            result += '\n';
        }
        return result;
    }

    // 89. Cross Diagonal Pattern
    crossDiagonal(n: number): string {
        let result = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j || i + j === n - 1 || i === Math.floor(n / 2) || j === Math.floor(n / 2)) {
                    result += '* ';
                } else {
                    result += '  ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // 90. Concentric Square Pattern
    concentricSquares(n: number): string {
        let result = '';
        const size = 2 * n - 1;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const minDistance = Math.min(i, j, size - 1 - i, size - 1 - j);
                result += (n - minDistance) + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 91. Wave Pattern
    wavePattern(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    result += j + ' ';
                } else {
                    result += '  ';
                }
            }

            for (let j = n - 1; j >= 1; j--) {
                if (j <= i) {
                    result += j + ' ';
                } else {
                    result += '  ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // 92. Triangle with Multiple Patterns
    multiPatternTriangle(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            // Numbers
            for (let j = 1; j <= i; j++) {
                result += j;
            }

            // Stars
            result += '*'.repeat(2 * (n - i));

            // Numbers in reverse
            for (let j = i; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        return result;
    }

    // 93. Diamond Inside Square
    diamondInSquare(n: number): string {
        let result = '';
        const size = 2 * n - 1;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const distance = Math.abs(i - n + 1) + Math.abs(j - n + 1);
                if (distance < n) {
                    result += (n - distance) + ' ';
                } else {
                    result += '0 ';
                }
            }
            result += '\n';
        }
        return result;
    }

    // 94. Chessboard Numbers
    chessboardNumbers(rows: number, cols: number): string {
        let result = '';
        let num = 1;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i + j) % 2 === 0) {
                    result += num.toString().padStart(3, ' ') + ' ';
                } else {
                    result += '  0  ';
                }
                num++;
            }
            result += '\n';
        }
        return result;
    }

    // 95. Pyramid of Palindromes
    palindromePyramidAdvanced(n: number): string {
        let result = '';
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);

            // First half
            for (let j = 1; j <= i; j++) {
                result += j;
            }

            // Second half
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }

            result += '\n';
        }
        return result;
    }

    // 96. Number Spiral (Alternate)
    numberSpiral(n: number): string {
        let result = '';
        const matrix: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

        let value = 1;
        let top = 0, bottom = n - 1, left = 0, right = n - 1;

        while (top <= bottom && left <= right) {
            // Top row
            for (let i = left; i <= right; i++) {
                matrix[top]![i] = value++;
            }
            top++;

            // Right column
            for (let i = top; i <= bottom; i++) {
                matrix[i]![right] = value++;
            }
            right--;

            // Bottom row
            for (let i = right; i >= left; i--) {
                matrix[bottom]![i] = value++;
            }
            bottom--;

            // Left column
            for (let i = bottom; i >= top; i--) {
                matrix[i]![left] = value++;
            }
            left++;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result += matrix[i]![j]!.toString().padStart(3, ' ') + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 97. Alphabet Spiral
    alphabetSpiral(n: number): string {
        let result = '';
        const matrix: string[][] = Array(n).fill('').map(() => Array(n).fill(' '));

        let charCode = 65; // 'A'
        let top = 0, bottom = n - 1, left = 0, right = n - 1;

        while (top <= bottom && left <= right) {
            // Top row
            for (let i = left; i <= right; i++) {
                matrix[top]![i] = String.fromCharCode(charCode);
                charCode = (charCode - 65 + 1) % 26 + 65;
            }
            top++;

            // Right column
            for (let i = top; i <= bottom; i++) {
                matrix[i]![right] = String.fromCharCode(charCode);
                charCode = (charCode - 65 + 1) % 26 + 65;
            }
            right--;

            // Bottom row
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    matrix[bottom]![i] = String.fromCharCode(charCode);
                    charCode = (charCode - 65 + 1) % 26 + 65;
                }
                bottom--;
            }

            // Left column
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    matrix[i]![left] = String.fromCharCode(charCode);
                    charCode = (charCode - 65 + 1) % 26 + 65;
                }
                left++;
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result += matrix[i]![j] + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 98. Pattern with Increasing Borders
    increasingBorders(n: number): string {
        let result = '';
        const size = 2 * n + 1;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const minDistance = Math.min(i, j, size - 1 - i, size - 1 - j);
                result += (minDistance + 1) + ' ';
            }
            result += '\n';
        }
        return result;
    }

    // 99. Master Pattern (Combination)
    masterPattern(n: number): string {
        let result = '';

        // Part 1: Pyramid
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
        }

        result += '\n';

        // Part 2: Diamond
        for (let i = 1; i <= n; i++) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += j;
            }
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }
        for (let i = n - 1; i >= 1; i--) {
            result += ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) {
                result += j;
            }
            for (let j = i - 1; j >= 1; j--) {
                result += j;
            }
            result += '\n';
        }

        result += '\n';

        // Part 3: Hollow Square with Numbers
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === n) {
                result += (i % 10).toString().repeat(n);
            } else {
                result += (i % 10) + ' '.repeat(n - 2) + (i % 10);
            }
            result += '\n';
        }

        return result;
    }
}

// Usage examples
const patternMaster = new PatternMaster();

console.log("=== SOLID SQUARE ===");
console.log(patternMaster.solidSquare(5));

console.log("\n=== HOLLOW DIAMOND ===");
console.log(patternMaster.hollowDiamond(5));

console.log("\n=== BUTTERFLY PATTERN ===");
console.log(patternMaster.butterfly(4));

console.log("\n=== PASCAL'S TRIANGLE ===");
console.log(patternMaster.pascalsTriangle(5));

console.log("\n=== HEART PATTERN ===");
console.log(patternMaster.heartPattern(6));

console.log("\n=== SPIRAL PATTERN ===");
console.log(patternMaster.spiralPattern(5));

console.log("\n=== ALPHABET DIAMOND ===");
console.log(patternMaster.alphabetDiamond(4));

console.log("\n=== MASTER PATTERN ===");
console.log(patternMaster.masterPattern(4));
