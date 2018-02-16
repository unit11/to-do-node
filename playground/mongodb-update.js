const MongoClient = require('mongodb').MongoClient;

MongoClient
  .connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
      console.log('Unable to connect');
    }
    console.log('Server is successfully connected');

    db.collection('Users')
        .findOneAndUpdate({
          name:"NewCus",
        },{
          $set:{
            name:"Namer",
        }
        },{
            returnOriginal:false,
        
      }).then((response) => {
        console.log(response);
      });
    db.close()
  })
