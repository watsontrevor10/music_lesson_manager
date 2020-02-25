class Contact < ApplicationRecord
  belongs_to :user

  has_many :invoices, dependent: :destroy
  has_many :calendar_events, dependent: :destroy
end
