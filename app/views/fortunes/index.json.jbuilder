json.fortunes @fortunes.each do |fortune|
  json.fortune fortune.fortune
  json.author fortune.author
  json.author_second fortune.author_second
end
