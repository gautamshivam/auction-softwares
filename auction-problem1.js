remix = "WUBWUBIWUBAMWUBWUBX";
temp = remix.split("WUB")
temp = temp.filter(item => item != '')
original = temp.join(' ')
console.log(original);