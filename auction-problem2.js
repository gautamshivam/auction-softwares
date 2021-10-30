

input = "123";
maskify(input);
function maskify(input) {
    masked = '';
    index = 0;
    while(index < input.length - 4) {
        masked = masked.concat("#");
        index = index + 1;
    }
    while(index < input.length) {
        masked = masked.concat(input.charAt(index));
        index = index + 1;
    }
    console.log(masked)
}