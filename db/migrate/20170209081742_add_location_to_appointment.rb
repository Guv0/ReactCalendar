class AddLocationToAppointment < ActiveRecord::Migration[5.0]
  def change
    add_column :appointments, :location, :string
  end
end
