# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fortune.delete_all
text = ''
File.open(File.dirname(__FILE__) + '/ofortunes.txt').each do |x|
  text<< x.gsub("\n", " ")
end
text.split('%%').each do |f|
  Fortune.create(fortune: f)
end
# counter = 0
# h=Hash.new
# t =''
# File.open(File.dirname(__FILE__) + '/fortunes.txt').each do |x|
#   t << x.gsub("\n", " ")
# end
#  t.split('%').each do |cook|
#    h[counter] = cook
#    counter+=1
#  end
#
# # h.each do |k,v|
# #   p k
# #   p v.split(" --")
# # end
#
# fortunes = t.split('%%%')
# fortunes.each do |f|
#   op =  f.split(' -')
#   Fortune.create(fortune: op[0], author: op[1], author_second: op[2])
#   # p 'fortune:'+ op[0]
#   # p 'author:'+ op[1] if op[1]
#   # p 'authort:'+ op[2] if op[2]
# end
