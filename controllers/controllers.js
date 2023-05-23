module.exports.contactsController = {
    getMessage: (req, res) => {
        res.json('pal')
    },

    deleteMessage: (req, res) => {
        res.json("юзер с ID :id удален");
      },
      
      pathMessage: (req, res) => {
        res.json("юзер с ID :id изменен");
      },

      postMessage: (req, res) => {
        res.json("успех");
      }
    }