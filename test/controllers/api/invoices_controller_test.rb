require 'test_helper'

class Api::InvoicesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_invoices_index_url
    assert_response :success
  end

  test "should get show" do
    get api_invoices_show_url
    assert_response :success
  end

  test "should get create" do
    get api_invoices_create_url
    assert_response :success
  end

  test "should get update" do
    get api_invoices_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_invoices_destroy_url
    assert_response :success
  end

end
