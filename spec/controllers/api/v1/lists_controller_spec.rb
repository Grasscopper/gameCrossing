require "rails_helper"

RSpec.describe Api::V1::ListsController, type: :controller do
  describe "GET#show" do
    let!(:list1) { FactoryBot.create(:list) }
    let!(:list2) { FactoryBot.create(:list) }

    it "returns a successful response status and a content type of JSON" do
      sign_in list1.game.user
      get :show, params: {id: list1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "returns the specific list" do
      sign_in list1.game.user
      get :show, params: {id: list1.id}

      returned_json = JSON.parse(response.body)
      expect(returned_json["list"].length).to eq 5

      expect(returned_json["list"]["title"]).to eq list1.title
      expect(returned_json["list"]["image"]).to eq list1.image
      expect(returned_json["list"]["points"].length).to eq 0
      expect(returned_json["list"]["game"]).not_to eq nil
    end
  end

end
