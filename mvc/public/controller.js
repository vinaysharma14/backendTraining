document.body.onload=function()
{
    var all=document.getElementById("all");
    all.setAttribute("isActive","1");
    all.setAttribute("style","border: 1px solid #e8d4d5;border-radius: 5px");
    var act=document.getElementById("act").setAttribute("isActive","0");
    var cmp=document.getElementById("cmp").setAttribute("isActive","0");
    var footer=document.getElementsByClassName("buttons");
    list=document.getElementById("todoList");
    collectionObject=new collectionClass();
    var request=new XMLHttpRequest();
    request.onload=function()
    {
        var i=0;
        var dbData=JSON.parse(this.responseText);
        for(i=0;i<dbData.length;i++)
            collectionObject.todoPush(dbData[i]._id,dbData[i].itemName,dbData[i].isCompleted);
        for(i=0;i<collectionObject.todoCollection.length;i++)
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
        if(i!=0)
            document.getElementById("footer").style.display="block";
        getLeftCount();
    }
    request.open("GET",'/getTodo');
    request.send();
}

document.getElementById("todoInput").addEventListener("keydown",function(event)
{
    if(event.key=="Enter" && this.value.length>0)
    {
        clear();
        var that=this;
        var request=new XMLHttpRequest();
        request.onload=function()
        {
            collectionObject.todoPush(JSON.parse(this.responseText),that.value,false);
            var i=0;
            for(i=0;i<collectionObject.todoCollection.length;i++)
            {
                if(cmp.getAttribute("isActive")==1)
                {
                    if(collectionObject.todoCollection[i].isCompleted==true)
                        render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
                }
                else
                    render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
            }
            if(i!=0)
                document.getElementById("footer").style.display="block";
            getLeftCount();
            that.value="";
        }
        request.open("POST",'/storeTodo');
        request.send(JSON.stringify({itemName:this.value,isCompleted:false}));
    }
});

document.getElementById("downAngle").addEventListener("click",function()
{
    if(all.getAttribute("isActive")==1)
    {
        var list=document.getElementById("todoList");
        if(checkItems()==1)
        {
            clear();
            for(var i=0;i<collectionObject.todoCollection.length;i++)
            {
                collectionObject.todoCollection[i].setCompleted();
                var request=new XMLHttpRequest();
                request.open("POST",'/toggleCheck');
                request.send(JSON.stringify({id:collectionObject.todoCollection[i]._id,flag: collectionObject.todoCollection[i].isCompleted}));
                render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
            }
        }
        else
        {
            clear();
            for(var i=0;i<collectionObject.todoCollection.length;i++)
            {
                collectionObject.todoCollection[i].setIncomplete();
                var request=new XMLHttpRequest();
                request.open("POST",'/toggleCheck');
                request.send(JSON.stringify({id:collectionObject.todoCollection[i]._id,flag: collectionObject.todoCollection[i].isCompleted}));
                render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
            }
        }
    }
    else if(act.getAttribute("isActive")==1)
    {
        clear();
        for(var i=0;i<collectionObject.todoCollection.length;i++)
        {
            collectionObject.todoCollection[i].setCompleted();
            var request=new XMLHttpRequest();
            request.open("POST",'/toggleCheck');
            request.send(JSON.stringify({id:collectionObject.todoCollection[i]._id,flag: collectionObject.todoCollection[i].isCompleted}));
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
        }
    }
    else if(cmp.getAttribute("isActive")==1)
    {
        clear();
        for(var i=0;i<collectionObject.todoCollection.length;i++)
        {
            collectionObject.todoCollection[i].setIncomplete();
            var request=new XMLHttpRequest();
            request.open("POST",'/toggleCheck');
            request.send(JSON.stringify({id:collectionObject.todoCollection[i]._id,flag: collectionObject.todoCollection[i].isCompleted}));
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,collectionObject.todoCollection[i]._id);
        }
    }
    getLeftCount();
});

checkItems=()=>
{
    var flag1=0,flag2=0;
    for(var i=0;i<collectionObject.todoCollection.length;i++)
    {
        if(collectionObject.todoCollection[i].isCompleted==flag1)
            flag1=1;
        else
            flag2=1;
    }
    if(flag1+flag2==2)
        return 1;
    if(flag2==0)
        return 1;
    if(flag1==0)
        return 0;
}