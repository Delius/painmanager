class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :paintype
      t.integer :painlevel
      t.decimal :painduration
      t.string :painplcement

      t.timestamps
    end
  end
end
