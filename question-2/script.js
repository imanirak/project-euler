let fiboEvenSum = (n) => {

    let sum = 0
    let a = 1
    let b = 2
    n = 4000000

    // 2 is the first even number in fibonacci sequence

    if (n >= 2) {
        sum = sum + b
    }


    let c = 0
    while (c <= n) {
        c = a + b
        if (c % 2 === 0) {
            sum = sum + c
        }
        a = b
        b = c

    }





    return sum



}

console.log("result is" + " " + fiboEvenSum())