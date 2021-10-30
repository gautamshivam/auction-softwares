input = [2,4,7,8,10]

index = 0;
oddCount = 0;
evenCount = 0;
lastEvenIndex = -1;
lastOddIndex = -1;
while(index < input.length) {
    if (input[index] % 2 == 0) {
        evenCount++;
        lastEvenIndex = index;
    } else {
        oddCount++;
        lastOddIndex = index;
    }
    index = index + 1;
}
if(oddCount == 1) {
    console.log(lastOddIndex+1)
} else console.log(lastEvenIndex + 1)