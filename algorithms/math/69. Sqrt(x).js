/**
 * @param {number} x
 * @return {number}
 */var mySqrt = function(x) {
    let num = 0;
    let multp = 0;
    while(multp < x){
        multp = num * num;
        if(x / (num+1) >= num+1)
            num++;
        else 
            break;
    }
    return num;
};