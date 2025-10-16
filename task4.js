function count_zero(stri) {
    const strings = String(stri)
    let count = 0;
    for (let char of strings) {
        if (char === '0') {
            count++
        }
    }
    return count

}
console.log(count_zero(101010777000));


