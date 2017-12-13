const express = require("express");
const app = express();
santaList = [];

listTemplate = '<html><title>The List</title><body><header><nav><ul><li><a href="index.html">Home</a></li></ul></header><main><h1>Santa\'s Naughty List</h1><ul>{{list}}</ul></main></body></html>';


app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.status = "200";
    console.log("Hello.  All is good here.");
});

app.get("/processForm", (req, res) =>{
    let listContent = "";
    santaList.push(req.query.name);

    santaList.forEach((item) => {
    listContent += "<li>" + item + "</li>";
    });
    
    listContent += "</ul>";
    let listPage = listTemplate.replace("{{list}}", listContent);
    res.send(listPage);
});

app.listen("8080", ()=>{
    console.log("Psst...we are listening on 8080.");
})


