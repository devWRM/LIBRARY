# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Library.destroy_all
Book.destroy_all



friedman = Library.create(name: "Friedman", street: "Jackson Rd.", city: "Augusta", state: "GA")
fashion = Book.create(title: "100 Years of Fashion", author: "Cally Blackman", genre: "fashion", summary: "This fashion book documents in pictures the most exciting and diverse period in fashion: from 1900 to today.", library_id: 1)

buckhead = Library.create(name: "Buckhead", street: "Buckhead Ave.", city: "Atlanta", state: "GA")
cookies = Book.create(title: "Cookies!", author: "Cy Decosse", genre: "cookbook", summary: "A cookbook all about cookies.", library_id: 2)


mlk = Library.create(name: "Martin Luther King, Jr", street: "John Wesley Dobbs Ave.", city: "Atlanta", state: "GA")
snowy = Book.create(title: "The Snowy Day", author: "Ezra Jack Keats", genre: "children's", summary: "A picture book about Peter, an African American boy, who explores his neighborhood after the season’s first snowfall.", library_id: 3)
bird = Book.create(title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", genre: "autobiography", summary: "A 1969 autobiography describing the early years of American writer and poet Maya Angelou.", library_id: 3)


epiphany = Library.create(name: "Epiphany", street: "East 23rd St.", city: "New York", state: "NY")
cat = Book.create(title: "The Cat in the Hat", author: "Dr. Seuss", genre: "children's", summary: "A children's book written and illustrated by the American author Theodor Geisel, using the pen name Dr. Seuss.", library_id: 4)
harry = Book.create(title: "Harry Potter", author: "J. K. Rowling", genre: "fantasy", summary: "Story that chronicles the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.", library_id: 4)
grapes = Book.create(title: "The Grapes of Wrath", author: "John Steinbeck", genre: "fiction", summary: "An American realist novel that won the National Book Award and Pulitzer Prize.", library_id: 4)

