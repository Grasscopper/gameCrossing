class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :image
      t.string :start_date
      t.string :time_played
      t.string :progress
      t.belongs_to :user
    end
  end
end
