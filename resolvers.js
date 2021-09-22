// Resolvers digunakan menghandle request yang diterima

const BookModel = require("./models/Book");

module.exports = {
  // Key Query
  Query: {
    getAllBooks: async () => await BookModel.find(),
    getBook: async (parent, args) => await BookModel.findById(args._id),
  },
  Mutation: {
    createBook: async (parent, args) => {
      const book = new BookModel(args);
      await book.save();
      return book;
    },
    updateBook: async (parent, args) => {
      // id => Diambil kemudian ambil semua args
      const book = await BookModel.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      return book;
    },
    deleteBook: async (parent, args) => {
      const book = await BookModel.findByIdAndRemove(args._id);
      if (book) {
        return true;
      } else {
        return false;
      }
    },
  },
};
