require 'test_helper'

class MainControllerTest < ActionController::TestCase
  test "should get ondex" do
    get :ondex
    assert_response :success
  end

end
