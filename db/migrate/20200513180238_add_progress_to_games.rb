class AddProgressToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :status, :string, default: "unplayed"
  end
end
