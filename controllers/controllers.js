const Student = require('../model/Student.model');
module.exports.contactsController = {
    getStudents: (req, res) => {
      Student.find({}).then(
        (data) => res.json(data))
    },

    deleteStudents: (req, res) => {
      Student.findOneAndRemove(req.params.id).then(
      (data) => res.json(data))
      },
      
    pathStudents: (req, res) => {
      Student.findByIdAndUpdate(req.params.id, {name: req.body.name}).then(
        (data) => res.json(data))
      },

    createStudents: (req, res) => {
      const { name, phone, age } = req.body;
      console.log(req.body)
      Student.create({
        name,
        phone,
        age,
      }).then(() => {
        res.json("Студент добавлен")
      })
      }
    }