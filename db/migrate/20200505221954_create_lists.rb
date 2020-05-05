class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.string :image
      t.belongs_to :game
    end
  end
end
