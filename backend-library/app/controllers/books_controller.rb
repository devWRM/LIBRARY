class BooksController < ApplicationController
  # before_action :set_book, only: [:show, :update, :destroy]
  before_action :set_library

  # GET /books
  def index
    # @books = Book.all
    @books = @library.books

    render json: @books
  end

  # GET /books/1
  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  # POST /books
  def create
  
    # @book = Book.new(book_params)
    @book = @library.books.new(book_params)

    if @book.save
      # render json: @book, status: :created, location: @book
      # returning @library    NOT @book
      render json: @library
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy

    @book = Book.find(params[:id])
    @book.destroy

    # returning @library    NOT @book
    render json: @library
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_book
    #   @book = Book.find(params[:id])
    # end

    def set_library
      @library = Library.find(params[:library_id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:title, :author, :genre, :summary, :library_id)
    end
end
