# Hello World Program in Ruby
str = gets
str  = str.downcase
puts str
def alpha_position(string)
  result = []
  string.each_char do |char|
    if char.ord >= 97 and char.ord <= 122 and char.ord - 97 + 1 > 0
        result.push(char.ord - 97 + 1)
    end
  end
  puts result.join(" ")
end
alpha_position(str)
