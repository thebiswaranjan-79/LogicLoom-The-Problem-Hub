const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Title Can't be empty"],
    },

    description : {
        type : String,
        required : [true, "Description can't be Empty"],
    },
    difficulty:{
        type : String, 
        enum :['easy', 'medium', 'hard'],
        required : [true, 'Difficulti cannot be Empty'],
        default:'easy'
    },
    testCase : [
        {
            input :{
                type : String,
                required : true
            },
            output :{
                type : String,
                required : true
            }
        }
    ],

    editorial : {
        type : String
    }

});


const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;

// Mongoose model is an object using which we can query mongodb for this particular problem collection 