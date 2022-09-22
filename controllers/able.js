const able = require('../models/able')

module.exports = {
    getable: async (req,res)=>{
        console.log(req.user)
        try{
            const meetings = await able.find().sort({ date: 1})
            res.render('able.ejs', {teamSched: meetings})
        }catch(err){
            console.log(err)
        }
    },
    createMeeting: async (req, res)=>{
        try{
            await able.create({date: req.body.date, timeStart: req.body.timeStart, timeEnd: req.body.timeEnd, description: req.body.description, userID: req.user._id, userName: req.user.userName})
            console.log('Your meeting has been added!')
            res.redirect('/able')
        }catch(err){
            console.log(err)
        }
    },
    deleteMeeting: async (req, res)=>{
        // try{
        //     await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
        //         completed: true
        //     })
        //     console.log('Marked Complete')
        //     res.json('Marked Complete')
        // }catch(err){
        //     console.log(err)
        // }
    }
}    