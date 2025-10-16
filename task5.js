function odd_even(number) {
    const num1 = typeof (number)
    if (num1 == "number") {
        if (number % 2 === 0) {
            return(number + " is even number ")

        } else {
            return(number + " is odd number ")
        }
    } else {
        return('it is a not number')
    }
    


}
console.log(odd_even(900))