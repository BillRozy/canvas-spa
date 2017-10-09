class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :user_id
      t.integer :portfolio_id

      t.timestamps null: false
    end
  end
end