    function calc(a, b, method) {
        let res = '';
        a = +a;
        b = +b;

        function isValid(x) {
            return  typeof(x) === 'number' && !isNaN(x) && x !== undefined;
        }

        if (isValid(a) && isValid(b)) {
            let operators = {
                'sum': a + b,
                'sub': a - b,
                'mult': a * b,
                'div': (b === 0 ? 'Fehler, Dividieren durch 0' : a / b),
            };
            res = operators[method] !== '' ? operators[method] : 'Fehler, kein Operator';
        } else {
            res = 'Error: not valid'
        }
        return res;
    }
    console.log(calc(4, 5, 'sum')); //9
    console.log(calc(4, 5, 'sub')); //-1
    console.log(calc(4, 5, 'mult')); //20
    console.log(calc(4, 5, 'div')); // 0.8
    console.log(calc(4, 0, 'mult'));