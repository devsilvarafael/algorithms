var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase(); // Tirando o espaçamento e deixando lowerCase.

    let leftIndex = 0;
    let rightIndex = s.length - 1;

    while(leftIndex < rightIndex) {
        if(s[leftIndex] !== s[rightIndex]) return false; /* Compara se a letra atual do leftIndex é igual ao rightIndex,
                                                            se for diferente, não é palindromo. */

        leftIndex++
        rightIndex--
    }
    return true
}

const phrase = isPalindrome("A man, a plan, a canal: Panama");
console.log(phrase);