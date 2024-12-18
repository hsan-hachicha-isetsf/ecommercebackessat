const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const app=express()
const categoriesRouter=require("./routes/categories.route")
const articlesRouter=require("./routes/article.route")
dotenv.config()
app.get("/accueil",(req,res)=>{

    res.send("page accueil")

})
//BodyParser Middleware
app.use(express.json());
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit();});
app.get("/contact",(req,res)=>{

    res.send("page de contact")

})
app.use("/api/categories",categoriesRouter)
app.use("/api/articles",articlesRouter)
app.listen(process.env.PORT,()=>
    
    console.log(`application exécutée sur le port ${process.env.PORT}`))

    module.exports = app;