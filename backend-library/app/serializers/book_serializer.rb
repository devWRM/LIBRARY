class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :summary, :library_id
end
