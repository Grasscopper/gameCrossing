require "rails_helper"

RSpec.describe Api::V1::GamesController, type: :controller do
  let!(:game1) { FactoryBot.create(:game) }
  let!(:game2) { FactoryBot.create(:game) }
  let!(:game3) { FactoryBot.create(:game) }

  describe "GET#index" do
    it "returns a successful response status and a content type of JSON" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "has the correct game(s) associated with the account" do
      sign_in game1.user
      get :index

      returned_json = JSON.parse(response.body)
      expect(returned_json.length).to eq 2

      expect(returned_json["currentUser"]["id"]).to eq returned_json["games"][0]["user_id"]
      expect(returned_json["currentUser"]["id"]).not_to eq returned_json["games"][1]["user_id"]
      expect(returned_json["currentUser"]["id"]).not_to eq returned_json["games"][2]["user_id"]
    end

    it "returns all games in the database" do
      get :index

      returned_json = JSON.parse(response.body)
      expect(returned_json.length).to eq 2

      expect(returned_json["games"][0]["title"]).to eq game1.title
      expect(returned_json["games"][0]["image"]).to eq game1.image
      expect(returned_json["games"][0]["start_date"]).to eq game1.start_date
      expect(returned_json["games"][0]["time_played"]).to eq game1.time_played
      expect(returned_json["games"][0]["progress"]).to eq game1.progress

      expect(returned_json["games"][1]["title"]).to eq game2.title
      expect(returned_json["games"][1]["image"]).to eq game2.image
      expect(returned_json["games"][1]["start_date"]).to eq game2.start_date
      expect(returned_json["games"][1]["time_played"]).to eq game2.time_played
      expect(returned_json["games"][1]["progress"]).to eq game2.progress

      expect(returned_json["games"][2]["title"]).to eq game3.title
      expect(returned_json["games"][2]["image"]).to eq game3.image
      expect(returned_json["games"][2]["start_date"]).to eq game3.start_date
      expect(returned_json["games"][2]["time_played"]).to eq game3.time_played
      expect(returned_json["games"][2]["progress"]).to eq game3.progress
    end
  end

  describe "GET#show" do
    it "returns a successful response status and a content type of JSON" do
      get :show, params: {id: game1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "returns the specific game" do
      get :show, params: {id: game1.id}
      returned_json = JSON.parse(response.body)

      expect(returned_json["game"].length).to eq 7
      expect(returned_json["game"]["title"]).to eq game1.title
      expect(returned_json["game"]["image"]).to eq game1.image
      expect(returned_json["game"]["start_date"]).to eq game1.start_date
      expect(returned_json["game"]["time_played"]).to eq game1.time_played
      expect(returned_json["game"]["progress"]).to eq game1.progress
    end
  end

end
