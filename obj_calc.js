    function calc(a, b, method) {
        let res = '';
        a = +a;
        b = +b;

        function isValid(x) {
            return x !== undefined && typeof(x) === 'number' && !isNaN(x);
        }

        if (isValid(a) && isValid(b)) {
            let operators = {
                'sum': a + b,
                'sub': a - b,
                'mult': a * b,
                'div': (b === 0 ? 'Fehler, Dividieren durch 0' : a / b),
            };
            res = operators[method] !== undefined ? operators[method] : 'Fehler, kein Operator';
        } else {
            res = 'Error: not valid'
        }
        return res;
    }
    console.log(calc(4, 5, 'sum'));