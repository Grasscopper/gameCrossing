require "rails_helper"

RSpec.describe Api::V1::GamesController, type: :controller do
  describe "GET#index" do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    it "returns a successful response status and a content type of JSON" do
      sign_in game1.user
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "has the correct game associated with the account and can hold multiple games" do
      sign_in game1.user
      get :index

      returned_json = JSON.parse(response.body)
      expect(returned_json.length).to eq 2

      expect(returned_json["currentUser"]["id"]).to eq returned_json["games"][0]["user_id"]

      expect(returned_json["games"][0]["title"]).to eq game1.title
      expect(returned_json["games"][0]["image"]).to eq game1.image
      expect(returned_json["games"][0]["start_date"]).to eq game1.start_date
      expect(returned_json["games"][0]["time_played"]).to eq game1.time_played
      expect(returned_json["games"][0]["progress"]).to eq game1.progress
      expect(returned_json["games"][0]["status"]).to eq game1.status

      current_games = returned_json["games"]
      current_games << game2

      expect(returned_json["games"][1]["title"]).to eq game2.title
      expect(returned_json["games"][1]["image"]).to eq game2.image
      expect(returned_json["games"][1]["start_date"]).to eq game2.start_date
      expect(returned_json["games"][1]["time_played"]).to eq game2.time_played
      expect(returned_json["games"][1]["progress"]).to eq game2.progress
      expect(returned_json["games"][1]["status"]).to eq game2.status
    end
  end

  describe "GET#show" do
    let!(:game1) { FactoryBot.create(:game) }
    let!(:game2) { FactoryBot.create(:game) }

    it "returns a successful response status and a content type of JSON" do
      sign_in game1.user
      get :show, params: {id: game1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "returns the specific game" do
      get :show, params: {id: game1.id}
      returned_json = JSON.parse(response.body)

      expect(returned_json["game"].length).to eq 9
      expect(returned_json["game"]["title"]).to eq game1.title
      expect(returned_json["game"]["image"]).to eq game1.image
      expect(returned_json["game"]["start_date"]).to eq game1.start_date
      expect(returned_json["game"]["time_played"]).to eq game1.time_played
      expect(returned_json["game"]["progress"]).to eq game1.progress
      expect(returned_json["game"]["user"]["id"]).to eq game1.user_id
    end
  end

end
