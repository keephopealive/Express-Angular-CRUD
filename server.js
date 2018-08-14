// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================



// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =====================================



// ============ View Engine ============ 
// Will require: express/app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// =====================================



// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================



// ============ Flash ============ 
// Will require: express/app, express-session
// const flash = require('express-flash');
// app.use(flash());
// ===============================



// ============ Mongoose ============ 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tasks")

const TaskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title must exist."],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    description: { 
        type: String, 
        required: [true, "Description must exist."],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    completed: { 
        type: Boolean, 
        default: false
    },
}, { timestamps: true });
const Task = mongoose.model('Task', TaskSchema);
// ==================================



// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "angular-app/dist/angular-app")));
// =======================================



// ============ Routes ============ 
// Will use: mongoose
app.get('/tasks', function (req, res) {
    console.log("app.get('/tasks', function (req, res) { ... })");
    Task.find({}, function(err, tasks){
        res.json(tasks);
        // res.json({tasks:tasks, message:'tasks returned'});
    })
})

app.post('/tasks', function (req, res) {
    console.log("app.post('/tasks', function (req, res) { req.body })", req.body);
    const taskInstance = new Task();
    taskInstance.title = req.body.title;
    taskInstance.description= req.body.description;
    taskInstance.save(function(err, data){
        console.log("taskInstance.save(function(err, data){ err })", err);
        console.log("taskInstance.save(function(err, data){ data })", data);
        if (err) {            
            res.json(err);
        } else {
            res.json(data);
        }  
    })
})

app.get('/tasks/:id', function(req, res){
    console.log("app.get('/tasks/:id', function(req, res){ ... })")
    Task.findOne({ _id:req.params.id }, function(err, task){
        console.log("Task.findOne({ _id:req.params.id }, function(err, task){ err })", err);
        console.log("Task.findOne({ _id:req.params.id }, function(err, task){ task })", task);
        if(err){
            res.json(err);
        } else {
            res.json(task);
        }
    })
})

app.put('/tasks/:id', function(req, res){
    console.log("app.post('/tasks/:id/update', function(req, res){ req.params.id })", req.params.id);
    console.log("app.post('/tasks/:id/update', function(req, res){ req.body })", req.body);
    Task.findOne({_id: req.params.id}, function(err, task){
        console.log("Task.findOne({_id: req.params.id}, function(err, task){ err })", err);
        console.log("Task.findOne({_id: req.params.id}, function(err, task){ task })", task);
        task.title = req.body.title;
        task.description = req.body.description;
        task.save(function(err){
            console.log("task.save(function(err){ err })", err);
            console.log("task.save(function(err){ task })", task);
            if(err){
                res.json(err);
            } else {
                res.json(task);
            }
        })
    })
})

app.delete("/tasks/:id", function(req, res){
    console.log("app.get('/tasks/:id/delete', function(req, res){ req.params.id });", req.params.id);
    Task.findOneAndDelete({_id: req.params.id}, function(result) {
        console.log("Note.findOneAndDelete({_id: req.params.id}, function(result) { result })", result)
        res.json(result);
    })
})
// ==================================



// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================
