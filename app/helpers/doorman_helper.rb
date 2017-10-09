module DoormanHelper
  def get_min_and_max_price_of_model(shootings)
    result = {
      "min": shootings.minimum('price').to_i || 0,
      "max": shootings.maximum('price').to_i || 1000,
    }
  end
end
