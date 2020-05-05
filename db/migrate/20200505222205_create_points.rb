class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.string :title, null: false
      t.belongs_to :list
    end
  end
end
