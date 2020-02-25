require 'test_helper'

class Api::CalendarEventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_calendar_events_index_url
    assert_response :success
  end

  test "should get show" do
    get api_calendar_events_show_url
    assert_response :success
  end

  test "should get create" do
    get api_calendar_events_create_url
    assert_response :success
  end

  test "should get update" do
    get api_calendar_events_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_calendar_events_destroy_url
    assert_response :success
  end

end
