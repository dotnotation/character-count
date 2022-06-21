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

// Refactoring:
// not great to use a for loop
// better to use a for of loop as it will give you each character immediately
// the if else statement is very basic and could be in a more simple syntax 
// use proper eS6 syntax aka remove var and replace with let or const
// the performance of regular expressions ([a-z0-9]) depends on what you're doing and what browser you are using
// in particular Chrome had some issues with regular expressions awhile back
// you could replace the regular expression with a simple mathematical comparison
// you could use the function charCodeAt() to check the character code
// this would allow you to do boolean comparisons which are a lot more efficient 
// when compared, the boolean comparison is 55% faster than the regular expression
// consider placement of .toLowerCase()

function charCount(str) {
    var obj = {}
    for (var char of str) {
        if (isAlphaNumeric(char)){
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha(A-Z)
        !(code > 96 && code < 123)) { // lower alpha(a-z)
            return false
    }
    return true
}

charCodeAt(0)