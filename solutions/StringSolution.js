function stringSolution(S) {
    let numArray = S.split('').map(Number);

    let i = 0;

    while(i < numArray.length - 1) {
        if(numArray[i] + numArray[i + 1] <= 9) {
            numArray[i] = numArray[i] + numArray[i + 1];
            numArray.splice(i + 1, 1);

            if (i > 0) {
                i--;
            }
        } else {
            i++;
        }
    }
    return numArray.join('');
}

