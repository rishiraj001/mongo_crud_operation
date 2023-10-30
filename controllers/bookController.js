const Book = require('../models/bookSchema')

exports.create = async (req,res) => {
    try {
        const { title, author, summary } = req.body;
        if(!title || !author || !summary){
            return res.status(422).json({
                message:'Some Fields are missing'
            })
        }
        const result = await Book.create(req.body);
        res.status(200).json({
            message: "Book Added Successfully",
            book: result
        })
    } catch (e) {
        throw new Error(e)
    }
}

exports.read = async (req,res) => {
    try {
        const bookDetails = await Book.find({});
        res.send(bookDetails)
    }
    catch (e) {
        throw new Error(e)
    }
}

exports.readOne = async (req,res) => {
    try {
        const id = req.query.id
        const bookDetails = await Book.findById(id);
        if(!bookDetails){
            return res.status(404).json({
                message:'No Book Found'
            })
        }
        res.send(bookDetails)
    } catch (e) {
        throw new Error(e)
    }
}

exports.update = async (req,res) => {
    try {
        const id = req.body.id;
        const bookDetails = await Book.findByIdAndUpdate(id, {$set: req.body});
        if(!bookDetails){
            return res.status(404).json({
                message:'No Book Found'
            })
        }
        res.send('Book Updated Successfully')
    } catch (e) {
        throw new Error(e)
    }
}

exports.delete = async (req,res) => {
    try {
        const id = req.query.id;
        const bookDetails = await Book.findByIdAndRemove(id);
        if(!bookDetails){
            return res.status(404).json({
                message:'No Book Found'
            })
        }
        res.send('Book Deleted Successfully')
    } catch (e) {
        throw new Error(e)
    }
}