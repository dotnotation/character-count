function charCount(str){
    var obj = {}
    for (var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj
}

// not great to use a for loop
// better to use a for of loop as it will give you each character immediately
// the if else statement is very basic and could be in a more simple syntax 

function charCount(str) {
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}