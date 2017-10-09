class DoormanController < ApplicationController
  include DoormanHelper
  def index
  end

  def getPrices
    photo_prices = get_min_and_max_price_of_model(Shooting.all)
    video_prices = get_min_and_max_price_of_model(Videography.all)
    render json: { photo: photo_prices, video: video_prices}, status: :ok
  end
end
