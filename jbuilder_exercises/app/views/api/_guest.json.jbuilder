if index
  json.extract! guest, :name, :age, :favorite_color
else
  json.extract! guest, :name, :age, :favorite_color, :gifts
end
