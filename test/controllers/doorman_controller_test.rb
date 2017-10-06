require 'test_helper'

class DoormanControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get doorman_index_url
    assert_response :success
  end

end
