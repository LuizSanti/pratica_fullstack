const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    },
    preco: {
      type: Number,
      required: true,
      min: 0
    },
    quantidadeEstoque: {
      type: Number,
      default: 0,
      min: 0
    },
    disponivel: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Produto", produtoSchema);
