# Hello World Program in Ruby
number = gets
n = number.to_i
closedPath = 0
while n > 0 
    rem = n % 10;
    if(rem == 6 or rem == 0 or rem == 4 or rem == 9) 
        closedPath += 1;
    end
    if(rem == 8)
        closedPath += 2
    end
    n = n/10
end
puts closedPath
