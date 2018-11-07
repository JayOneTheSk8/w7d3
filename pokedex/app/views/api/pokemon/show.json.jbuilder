all_items = @pokemon.items

json.pokemon do
  json.id @pokemon.id
  json.name @pokemon.name
  json.attack @pokemon.attack
  json.defense @pokemon.defense
  json.moves @pokemon.moves
  json.poke_type @pokemon.poke_type
  json.image_url @pokemon.image_url
  json.item_ids all_items.map { |item| item.id }
end


json.items do
  all_items.each do |item|
    json.id item.id
    json.name item.name
    json.pokemon_id item.pokemon_id
    json.price item.price
    json.happiness item.happiness
    json.image_url item.image_url
  end
end