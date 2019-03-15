document.body.onload=function()
{
    var all=document.getElementById("all");
    all.setAttribute("isActive","1");
    all.setAttribute("style","border: 1px solid #e8d4d5;border-radius: 5px");
    var act=document.getElementById("act").setAttribute("isActive","0");
    var cmp=document.getElementById("cmp").setAttribute("isActive","0");
    var footer=document.getElementsByClassName("buttons");
    list=document.getElementById("todoList");
    list.setAttribute("checkAll",1);
    collectionObject=new collectionClass();
}

document.getElementById("todoInput").addEventListener("keydown",function(event)
{
    if(event.key=="Enter" && this.value.length>0)
    {
        clear();
        collectionObject.todoPush(this.value);
        for(var i=0;i<collectionObject.todoCollection.length;i++)
            render(collectionObject.todoCollection[i].itemName);
        this.value="";
    }
});

document.getElementById("downAngle").addEventListener("click",function()
{
    if(all.getAttribute("isActive")==1)
    {
        var list=document.getElementById("todoList");
        if(list.childElementCount>0 && list.getAttribute("checkAll")==1)
        {
            for(var i=0;i<list.childElementCount;i++)
            {
                list.children[i].children[0].checked=true;
                list.children[i].children[1].style.textDecoration="line-through";
                list.children[i].children[1].style.color="lightgrey";
            }
            list.setAttribute("checkAll",0);
        }
        else if(list.childElementCount>0 && list.getAttribute("checkAll")==0)
        {
            for(var i=0;i<list.childElementCount;i++)
            {
                list.children[i].children[0].checked=false;
                list.children[i].children[1].style.textDecoration="none";
                list.children[i].children[1].style.color="black";
            }
            list.setAttribute("checkAll",1);
        }
    }
    else if(act.getAttribute("isActive")==1)
    {
        var list=document.getElementById("todoList");
        if(list.childElementCount>0)
        {
            for(var i=0;i<list.childElementCount;i++)
            {
                if(list.children[i].style.display=="block")
                {
                    list.children[i].children[0].checked=true;
                    list.children[i].children[1].style.textDecoration="line-through";
                    list.children[i].children[1].style.color="lightgrey";
                    list.children[i].style.display="none";
                }
            }
        }
    }
    else if(cmp.getAttribute("isActive")==1)
    {
        var list=document.getElementById("todoList");
        if(list.childElementCount>0)
        {
            for(var i=0;i<list.childElementCount;i++)
            {
                if(list.children[i].style.display=="block")
                {
                    list.children[i].children[0].checked=false;
                    list.children[i].children[1].style.textDecoration="none";
                    list.children[i].children[1].style.color="black";
                    list.children[i].style.display="none";
                }
            }
        }
    }
    document.getElementById("listCount").textContent=getLeftCount()+" items left";
});