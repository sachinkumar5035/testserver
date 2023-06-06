import app from './app.js'


app.get("/",(req,res)=>{
    res.send(`<h1>server is working fine</h1>`);
})

app.route("/users").get((req,res)=>{
    res.status(200).json({
        success:true,
        users:[]
    })
})



app.listen(process.env.PORT, () => {
    console.log(`server is listing on port : ${process.env.PORT}`);
})