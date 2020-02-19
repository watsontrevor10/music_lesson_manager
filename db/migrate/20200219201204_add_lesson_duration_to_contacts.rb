class AddLessonDurationToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :lesson_duration, :integer, :default => 30
  end
end
