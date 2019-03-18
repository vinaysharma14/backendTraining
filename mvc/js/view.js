render=(objectName,isCompleted,index)=>
{
    var list=document.getElementById("todoList");
    var item=document.createElement("li");
    item.setAttribute("id",index);
    var itemCheck=document.createElement("div");
    itemCheck.classList.add("checkBox");
    var checkIcon=document.createElement("i");
    checkIcon.classList.add("fas","fa-check");
    var itemName=document.createElement("p");
    var icon=document.createElement("i");
    icon.classList.add("fas","fa-times");
    icon.setAttribute("style","float:right;margin-top:-35px;margin-right: 80px;color: #e8d4d5;display:none");

    itemName.addEventListener("click",function(event)
    {
        itemName.contentEditable="true";
        itemName.style.outline="none";
        this.addEventListener("keydown",function(event)
        {
            if(event.key=="Enter")
            {
                collectionObject.todoCollection[this.parentElement.id].editName(itemName.textContent);
                clear();
                for(var i=0;i<collectionObject.todoCollection.length;i++)
                    render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
            }
        });
    });

    item.addEventListener("mouseover",function()
    {
        this.childNodes[2].style.display="block";
    });

    item.addEventListener("mouseleave",function()
    {
        this.childNodes[2].style.display="none";
    });

    icon.addEventListener("click",function()
    {
        collectionObject.todoPop(this.parentElement.id);
        clear();
        getLeftCount();
        for(i=0;i<collectionObject.todoCollection.length;i++)
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
        if(collectionObject.todoCollection.length==0)
            document.getElementById("footer").style.display="none";
    });

    itemCheck.addEventListener("click",function()
    {
        getLeftCount();
        collectionObject.todoCollection[this.parentElement.id].toggleCheck();
        clear();
        for(var i=0;i<collectionObject.todoCollection.length;i++)
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
    });

    itemCheck.appendChild(checkIcon);
    itemName.textContent=objectName;
    if(isCompleted==1)
    {
        itemName.style.textDecoration="line-through";
        itemName.style.color="lightgrey";
        itemCheck.style.border="1px solid aquamarine";
        checkIcon.style.display="block";
    }

    item.classList.add("list","shadow","p-2","bg-white");
    itemCheck.classList.add("checkBox");

    item.appendChild(itemCheck);
    item.appendChild(itemName);
    item.appendChild(icon);
    list.appendChild(item);
}
clear=()=>
{
    while(list.firstChild)
        list.removeChild(list.firstChild);
}
getLeftCount=()=>
{
    var c=0;
    for(var i=0;i<collectionObject.todoCollection.length;i++)
        if(collectionObject.todoCollection[i].isCompleted==0)
            c++;
    document.getElementById("listCount").textContent=c+" items left";
}
all.addEventListener("click",function()
{
    clear();
    for(var i=0;i<collectionObject.todoCollection.length;i++)
        render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
    getLeftCount();

    this.setAttribute("isActive","1");
    this.setAttribute("style","border: 1px solid #e8d4d5;");

    act.setAttribute("isActive","0");
    act.setAttribute("style","border: none");

    cmp.setAttribute("isActive","0");
    cmp.setAttribute("style","border: none;");
});
all.addEventListener("mouseover",function()
{
    if(this.getAttribute("isActive")==1);
    else
        this.setAttribute("style","border: 1px solid lightgray;");
});
all.addEventListener("mouseleave",function()
{
    if(this.getAttribute("isActive")==0)
        this.setAttribute("style","border: none");
    else
        this.setAttribute("style","border: 1px solid #e8d4d5");
});

act.addEventListener("click",function()
{
    clear();
    for(var i=0;i<collectionObject.todoCollection.length;i++)
        if(collectionObject.todoCollection[i].isCompleted==false)
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
    getLeftCount();

    this.setAttribute("isActive","1");
    this.setAttribute("style","border: 1px solid #e8d4d5;");

    cmp.setAttribute("isActive","0");
    cmp.setAttribute("style","border: none");

    all.setAttribute("isActive","0");
    all.setAttribute("style","border: none");
});
act.addEventListener("mouseover",function()
{
    if(this.getAttribute("isActive")==1);
    else
        this.setAttribute("style","border: 1px solid lightgray;");
});
act.addEventListener("mouseleave",function()
{
    if(this.getAttribute("isActive")==0)
        this.setAttribute("style","border: none");
    else
        this.setAttribute("style","border: 1px solid #e8d4d5");
})

cmp.addEventListener("click",function()
{
    clear();
    for(var i=0;i<collectionObject.todoCollection.length;i++)
        if(collectionObject.todoCollection[i].isCompleted==true)
            render(collectionObject.todoCollection[i].itemName,collectionObject.todoCollection[i].isCompleted,i);
    getLeftCount();

    this.setAttribute("isActive","1");
    this.setAttribute("style","border: 1px solid #e8d4d5;");

    act.setAttribute("isActive","0");
    act.setAttribute("style","border: none");

    all.setAttribute("isActive","0");
    all.setAttribute("style","border: none;");
});
cmp.addEventListener("mouseover",function()
{
    if(this.getAttribute("isActive")==1);
    else
        this.setAttribute("style","border: 1px solid lightgray;");
});
cmp.addEventListener("mouseleave",function()
{
    if(this.getAttribute("isActive")==0)
        this.setAttribute("style","border: none");
    else
        this.setAttribute("style","border: 1px solid #e8d4d5");
})