

input = "1234";
maskify(input);
function maskify(input) {
    substr = '';
    if(input.length > 4) {
        substr = input.substring(0, input.length - 4);
        substr = substr.concat("####")
    } else {
        len = input.length;
        while(len > 0) {
            substr = substr.concat("#");
            len = len - 1;
        }
    }
    console.log(substr);
}