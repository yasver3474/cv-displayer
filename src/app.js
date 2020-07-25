const express = require('express');
const hbs = require('hbs');
const path = require('path');
// require('./db/mongoose');
// const Task = require('./models/education');
// const User = require('./models/user');
// const Internship = require('./models/internship');
// const Certificates = require('./models/certificates');
// const Misc = require('./models/misc');
// const Education = require('./models/education');
// const Projects = require('./models/projects');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

hbs.registerPartials(partialPath);

app.set('views',viewPath);
app.set('view engine','hbs');

// Setup static directory to serve
app.use(express.static(path.join(__dirname,'../public')));


// Add basic Details
// app.post(('/user'), async (req, res) => {
//     const user = new User(req.body);
//     try{
//         await user.save();
//         res.status(201);
//         res.send(user);
//     } catch(error){
//         res.status(400);
//         res.send(error);
//     }
// });
// // Get Basic Details
// app.get('/user', async(req,res)=>{

//     try{
//         const user = await User.find({});
//         res.send(user);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });

// // Create Education Details
// app.post('/education',async (req,res)=>{
//     const education = new Education(req.body);
//     try{
//         await education.save();
//         res.status(201);
//         res.send(education);
//     } catch(error){
//         res.status(500).send(error);
//     }
// });

// // Get education details
// app.get('/education', async(req,res)=>{

//     try{
//         const education = await Education.find({});
//         res.send(education);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });


// // Create Internship Details
// app.post('/internship',async (req,res)=>{
//     const internship = new Internship(req.body);
//     try{
//         await internship.save();
//         res.status(201);
//         res.send(internship);
//     } catch(error){
//         res.status(500).send(error);
//     }
// });

// // Get Internship details
// app.get('/internship', async(req,res)=>{

//     try{
//         const internship = await Internship.find({});
//         res.send(internship);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });


// // Create certificates Details
// app.post('/certificates',async (req,res)=>{
//     const certificates = new Certificates(req.body);
//     try{
//         await certificates.save();
//         res.status(201);
//         res.send(certificates);
//     } catch(error){
//         res.status(500).send(error);
//     }
// });

// // Get certificates details
// app.get('/certificates', async(req,res)=>{

//     try{
//         const certificates = await Certificates.find({});
//         res.send(certificates);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });



// // Create misc Details
// app.post('/misc',async (req,res)=>{
//     const misc = new Misc(req.body);
//     try{
//         await misc.save();
//         res.status(201);
//         res.send(misc);
//     } catch(error){
//         res.status(500).send(error);
//     }
// });

// // Get misc details
// app.get('/misc', async(req,res)=>{

//     try{
//         const misc = await Misc.find({});
//         res.send(misc);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });

// // Create Project Details
// app.post('/projects',async (req,res)=>{
//     const projects = new Projects(req.body);
//     try{
//         await projects.save();
//         res.status(201);
//         res.send(projects);
//     } catch(error){
//         res.status(500).send(error);
//     }
// });

// // Get Project details
// app.get('/projects', async(req,res)=>{

//     try{
//         const projects = await Projects.find({});
//         res.send(projects);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });

// //Get all details 
// app.get('/cv',async(req,res)=>{

//     try{
//         const user = await User.find({});
//         const education = await Education.find({});
//         const internship = await Internship.find({});
//         const certificates = await Certificates.find({});
//         const projects = await Projects.find({});
//         const misc = await Misc.find({});
//         const cv = {
//             user,
//             education,
//             internship,
//             certificates,
//             projects,
//             misc
//         }
//         res.send(cv);
//     } catch(error){
//         res.status(500).send(error);
//     }

// });
app.get('',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{

    console.log('Server is up! '+'on '+port);

});