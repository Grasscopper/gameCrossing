# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_13_180238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string "title", null: false
    t.string "image"
    t.string "start_date"
    t.string "time_played"
    t.string "progress"
    t.bigint "user_id"
    t.string "status", default: "unplayed"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title", null: false
    t.string "image"
    t.bigint "game_id"
    t.index ["game_id"], name: "index_lists_on_game_id"
  end

  create_table "points", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "list_id"
    t.index ["list_id"], name: "index_points_on_list_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
