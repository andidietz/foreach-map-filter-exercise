function doubleValues(arr){
    return arr.map(function(num){
        return num * 2
    })
}

function onlyEvenValues(arr){
    return arr.filter(function(num){
        return num % 2 === 0
    })
}

function showFirstAndLast(arr){
    return arr.map(function(w){
        return `${w[0]}${w[w.length - 1]}`
    })
}

function addKeyAndValue(arr, key, value){
    return arr.map(function(obj){
        obj[key] = value
        return obj
    })
}

function vowelCount(str){
    const arr = [...(str.toLowerCase())]
    const vowelOnly = arr.reduce(function(obj, letter){
        if('aeiou'.indexOf(letter) !== -1){
            if (obj[letter]) {
                obj[letter] += 1
            } else {
                obj[letter] = 1
            }
        }
        return obj
    }, {})
    return vowelOnly
}

function doubleValuesWithMap(arr) {
    return arr.map(function(num){
        return num * 2
    })
}

function valTimesIndex(arr){
    return arr.map(function(num, index){
        return num * index
    })
}

function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key]
    })
}

function extractFullName(arr){
    return arr.map(function(obj){
        return `${obj['first']} ${obj['last']}`
    })
}

function filterByValue(arr, key) {
    return arr.filter(function(obj){
        if (obj[key]) return true
    })
}


function find(arr, searchValue) {    
    return arr.find(function(num){
        return num === searchValue
    })
}

function findInObj(arr, key, searchValue) {
    return arr.find(function(obj){
        if (obj[key] === searchValue) return obj
    })
}

function removeVowels(str) {
    return Array.from (str).filter(function(char){
        if ('aeiouAEIOU'.indexOf(char) === -1) return char
    }).join('').toLowerCase()
}

function doubleOddNumbers(arr) {
    return arr.filter(function(num){
        return num % 2 === 1
    }).map(function(num){
        return num * 2
    })
}