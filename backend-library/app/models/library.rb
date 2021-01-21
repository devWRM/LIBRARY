class Library < ApplicationRecord
    has_many :books, :dependent => :destroy

    validates :name, :street, :city, :state, presence: true
end
