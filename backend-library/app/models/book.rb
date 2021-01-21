class Book < ApplicationRecord
  belongs_to :library

  validates :title, :author, :genre, :summary, presence: true
end
