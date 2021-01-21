class CreateLibraries < ActiveRecord::Migration[6.0]
  def change
    create_table :libraries do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
