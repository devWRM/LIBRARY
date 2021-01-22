class LibrarySerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state	
  
  has_many :books
end
