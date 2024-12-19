const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const app=express()
const cors=require('cors')
const categoriesRouter=require("./routes/categories.route")
const articlesRouter=require("./routes/article.route")
const scategoriesRouter=require("./routes/scategories.route")
dotenv.config()

//BodyParser Middleware
app.use(express.json());
app.use(cors())
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit();});
app.get("/",(req,res)=>{

    res.send("page accueil")

})
app.use("/api/categories",categoriesRouter)
app.use("/api/scategories",scategoriesRouter)
app.use("/api/articles",articlesRouter)
app.listen(process.env.PORT,()=>
    
console.log(`application exécutée sur le port ${process.env.PORT}`))
module.exports = app;