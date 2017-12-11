function palindrome(str) {
    var len = str.length;
    var l=len-1;
    console.log(len);
    for ( var i = 0; i <Math.floor(len/2); i++ ) {
        if (str[i] !== str[l]) {
           
            return false;
        }
         l--;
    }
    return true;
}
var arr=123;
while(!palindrome(arr.toString())){
 //console.log("It's palindrome");
 arr=arr+1;
}
console.log(arr);
