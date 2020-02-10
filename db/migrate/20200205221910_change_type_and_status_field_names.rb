class ChangeTypeAndStatusFieldNames < ActiveRecord::Migration[6.0]
  change_table :contacts do |t|
    t.rename :type, :contact_type
    t.rename :status, :contact_status
  end
end
