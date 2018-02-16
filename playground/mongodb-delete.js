const MongoClient = require('mongodb').MongoClient;

MongoClient
  .connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
      console.log('Unable to connect');
    }
    console.log('Server is successfully connected');

    // deleteMany
    // db.collection('Todos').deleteMany({name: "Abacus"}).then((response) => {
    //   console.log(response);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Go to walk"}).then((response) => {
    //   console.log(response);
    // })
    // findOneanddeleteOne
    db.collection('Todos').findOneAndDelete({text: "Go to walk"}).then((response) => {
      console.log(response);
    })

    db.close()
  })
