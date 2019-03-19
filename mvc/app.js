const express=require('express');
const path=require('path');
const app=express();
const mongoClient=require('mongodb').MongoClient;
const ObjectId=require('mongodb').ObjectID;
var mongoUrl="mongodb://localhost:27017/";

app.use(express.static(__dirname+'/public'));

function readJSONBody(request,callback) 
{
    var body='';
    request.on('data',function(chunk)
    {
        body+=chunk;
    });
    request.on('end',function() 
    {
        var data=JSON.parse(body);
        callback(data);
    });
}
function readData(callback)
{
    mongoClient.connect(mongoUrl,{useNewUrlParser:true},function(error,client)
    {
        if(error)
            throw error;
        var array=[];
        var database=client.db("todoData");
        array=database.collection("todoCollection").find().toArray().then(function(result)
        {
            array=result;
            callback(array);
            client.close();
        },function(error)
        {
            throw error;
        });
    });
}
function insertData(object,callback)
{
    mongoClient.connect(mongoUrl,{useNewUrlParser:true},function(error,client)
    {
        if(error)
            throw error;
        var database=client.db("todoData");
        database.collection("todoCollection").insertOne(object,function(error,result)
        {
            if(error)
                throw error;
            client.close();
            callback(object._id);
        });
    });
}
function toggleData(id,flag,callback)
{
    mongoClient.connect(mongoUrl,{useNewUrlParser:true},function(error,client)
    {
        if(error)
            throw error;
        var database=client.db("todoData");
        database.collection("todoCollection").findOneAndUpdate({_id:ObjectId(id)},{$set:{isCompleted:flag}},{returnOriginal:false}).then(function(result)
        {
            client.close();
            callback();
        });
    });
}
function editData(id,name,callback)
{
    mongoClient.connect(mongoUrl,{useNewUrlParser:true},function(error,client)
    {
        if(error)
            throw error;
        var database=client.db("todoData");
        database.collection("todoCollection").findOneAndUpdate({_id:ObjectId(id)},{$set:{itemName:name}},{returnOriginal:false}).then(function(result)
        {
            client.close();
            callback();
        });
    });
}
function deleteData(id,callback)
{
    mongoClient.connect(mongoUrl,{useNewUrlParser:true},function(error,client)
    {
        if(error)
            throw error;
        var database=client.db("todoData");
        database.collection("todoCollection").findOneAndDelete({_id:ObjectId(id)}).then(function(result)
        {
            if(error)
                throw error;
            client.close();
            callback();
        });
    });
}

app.post('/storeTodo',(request,response)=>
{
    readJSONBody(request,function(data)
    {
        insertData(data,function(id)
        {
            response.writeHead(200,{'Content-type':'application/id'});
            response.write(JSON.stringify(id));
            response.end();
        });
    })
});
app.post('/deleteTodo',(request,response)=>
{
    readJSONBody(request,function(data)
    {
        deleteData(data,function()
        {
            response.end();
        })
    });
});
app.post('/toggleCheck',(request,response)=>
{
    readJSONBody(request,function(data)
    {
        toggleData(data.id,data.flag,function()
        {
            response.end();
        })
    });
});
app.post('/editTodo',(request,response)=>
{
    readJSONBody(request,function(data)
    {
        editData(data.id,data.name,function()
        {
            response.end();
        })
    });
});
app.get('/getTodo',(request,response)=>
{
    readData(function(array)
    {
        response.writeHead(200,{'Content-type':'application/id'});
        response.write(JSON.stringify(array));
        response.end();
    });
});

app.listen(8000);