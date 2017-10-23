
@fortune.each do |fortune|
  json.set! fortune.id do
    json.extract! fortune, :id, :author, :author_second, :fortune
    json.mega @mega
    json.power @power
  end
end
