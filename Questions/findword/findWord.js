const bigString = "This is a big string with the word big repeated in the big string.";
const wordToFind = "big";

let data= []
for(let i =0;i<bigString.length;i++){
    if(wordToFind.startsWith(bigString[i])){
        data.push(i)
    }
}
console.log(data)



function findWord(wordToFind,bigStringInput){
    let resultArray = []
    let word = wordToFind;
    let bigString=bigStringInput;
    function getIndex(index){
        if(index >= bigString.length) return resultArray ;
        if(word.startsWith(bigString[index])){
            resultArray.push(index)
        }
        return  getIndex(index+1)
    }
    return getIndex(0)
    
}






const result = findWord(wordToFind,bigString);
console.log(result)


function findWordImproved(wordToFind, bigStringInput){
    let resultArray = [];
    let word = wordToFind;
    let bigString = bigStringInput;
    
    function getIndex(index){
        if(index > bigString.length - word.length) return resultArray;
        if(bigString.slice(index, index + word.length) === word){
            resultArray.push(index);
        }
        
        return getIndex(index + 1);
    }
    return getIndex(0);
}


const result2 = findWordImproved(wordToFind, bigString);
console.log(result2); // 
