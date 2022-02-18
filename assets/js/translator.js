(function(){
    const NormalInput = document.getElementById('NormalInput');
    const CactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'y', 'A': 'Y', 
        'b': 'p', 'B': 'P', 
        'c': 'l', 'C': 'L', 
        'd': 't', 'D': 'T', 
        'e': 'a', 'E': 'A', 
        'f': 'v', 'F': 'V', 
        'g': 'k', 'G': 'K', 
        'h': 'r', 'H': 'R', 
        'i': 'e', 'I': 'E', 
        'j': 'z', 'J': 'Z', 
        'k': 'g', 'K': 'G', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': 'u', 'O': 'U', 
        'p': 'b', 'P': 'B', 
        'q': 'x', 'Q': 'X', 
        'r': 'n', 'R': 'N', 
        's': 'c', 'S': 'C', 
        't': 'd', 'T': 'D', 
        'u': 'i', 'U': 'I', 
        'v': 'j', 'V': 'J', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'o', 'Y': 'O', 
        'z': 'w', 'Z': 'W', 
    }
    const alphabetAlBhed = new Object;
    for (var letter in alphabet) {
        alphabetCactobeto[alphabet[letter]] = letter;
    };

    revert.addEventListener('click', function(e) {
        translate.classList.toggle('translateToCactobeto');
        translate.classList.toggle('translateToNormal');
        NormalInput.classList.toggle('input');
        cactobetoInput.classList.toggle('output');
        NormalInput.classList.toggle('output');
        cactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    translate.addEventListener('click', function(e) {
        if(translate.className === 'translateToCactobeto') {
            const normal = input[0].value;
            const cactobeto = normal.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(translate.className === 'translateToNormal') {
            const cactobeto = input[0].value;
            const normal= cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetcactobeto[m];
            });
            output[0].value = normal;
        }
        e.preventDefault();
    });

})();