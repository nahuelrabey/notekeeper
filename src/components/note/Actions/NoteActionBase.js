const mongoose = require("mongoose");
class NoteActionBase{
    static check_db(req, res, next){
        // check health of database
        // should be in another component
        mongoose.connection.on('disconected', (err) => {
            
        })
    }
}