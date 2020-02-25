class UpdateContactForeignKeyForCalendars < ActiveRecord::Migration[6.0]
  def change
    rename_column :calendar_events, :contacts_id, :contact_id
  end
end
