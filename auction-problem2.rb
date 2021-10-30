number = gets
str = number.split("")
str = str.select{ |s| str.count(s) > 1 }
str = str.uniq
puts str.length
