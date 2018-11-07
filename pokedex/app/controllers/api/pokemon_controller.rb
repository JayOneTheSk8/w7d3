class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  # private
  # def poke_params
  #   params.require(:pokemon).permit(:id, :name, :attack, :defense, :poke_type, :moves, :image_url)
  # end
end
