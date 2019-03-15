document.body.onload=function()
{
    var all=document.getElementById("all");
    all.setAttribute("isActive","1");
    all.setAttribute("style","border: 1px solid #e8d4d5;border-radius: 5px");
    var act=document.getElementById("act").setAttribute("isActive","0");
    var cmp=document.getElementById("cmp").setAttribute("isActive","0");
    var footer=document.getElementsByClassName("buttons");
}

document.getElementById("todoInput").addEventListener("keydown",function(event)
{
    if(event.key=="Enter" && this.value.length>0)
    {
        var list=document.getElementById("todoList");
        var item=document.createElement("li");
        var itemCheck=document.createElement("input");
        var itemName=document.createElement("p");
        var icon=document.createElement("i");
        icon.classList.add("fas","fa-times");
        icon.setAttribute("style","float:right;margin-top:-18px;margin-right: 80px;color: #e8d4d5;display:none")

        itemName.addEventListener("click",function(event)
        {
            itemName.contentEditable="true";
            itemName.style.outline="none";
            this.addEventListener("keydown",function(event)
            {
                if(event.key=="Enter")
                itemName.contentEditable="false";
            });
        });

        item.addEventListener("mouseover",function()
        {
            this.childNodes[2].style.display="block";
        });

        item.addEventListener("mouseleave",function()
        {
            this.childNodes[2].style.display="none";
        })

        icon.addEventListener("click",function()
        {
            this.parentElement.remove();
            document.getElementById("listCount").textContent=list.childElementCount+" items left";
        });

        itemCheck.addEventListener("click",function()
        {
            var c=0;
            for(var i=1;i<=list.childElementCount;i++)
                if(list.childNodes[i].childNodes[0].checked==false)
                    c++;
            document.getElementById("listCount").textContent=c+" items left";

            if(this.checked==false)
            {
                this.parentElement.childNodes[1].style.textDecoration="none";
                this.parentElement.childNodes[1].style.color="black";
            }
            else
            {
                this.parentElement.childNodes[1].style.textDecoration="line-through";
                this.parentElement.childNodes[1].style.color="lightgrey";
            }
        });

        itemCheck.type="checkbox";
        itemName.textContent=this.value;

        item.classList.add("list","shadow","p-2","bg-white");
        itemCheck.classList.add("checkBox")

        item.appendChild(itemCheck);
        item.appendChild(itemName);
        item.appendChild(icon);
        list.appendChild(item);

        this.value="";

        var c=0;
        for(var i=1;i<=list.childElementCount;i++)
            if(list.childNodes[i].childNodes[0].checked==false)
                c++;
        document.getElementById("listCount").textContent=c+" items left";
    }
})

all.addEventListener("click",function()
{
    var list=document.getElementById("todoList");
    for(var i=1;i<=list.childElementCount;i++)
    {
        list.childNodes[i].style.display="block";
    }
    document.getElementById("listCount").textContent=list.childElementCount+" items left";

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
    var list=document.getElementById("todoList");
    var counter=0;
    for(var i=1;i<=list.childElementCount;i++)
    {
        list.childNodes[i].style.display="block";
        if(list.childNodes[i].childNodes[0].checked==true)
        {
            list.childNodes[i].style.display="none";
            counter++;
        }
    }
    document.getElementById("listCount").textContent=list.childElementCount-counter+" items left";

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
    var list=document.getElementById("todoList");
    var counter=0;
    for(var i=1;i<=list.childElementCount;i++)
    {
        list.childNodes[i].style.display="block";
        if(list.childNodes[i].childNodes[0].checked==false)
        {
            list.childNodes[i].style.display="none";
            counter++;
        }
    }
    document.getElementById("listCount").textContent=list.childElementCount-counter+" items left";

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

document.getElementById("downAngle").addEventListener("click",function()
{
    var list=document.getElementById("todoList");
    for(var i=1;i<=list.childElementCount;i++)
    {
        if(list.childNodes[i].childNodes[0].checked==false)
        {
            list.childNodes[i].childNodes[0].checked=true;
            list.childNodes[i].childNodes[1].style.textDecoration="line-through";
            list.childNodes[i].childNodes[1].style.color="lightgrey";
        }
        else
        {
            list.childNodes[i].childNodes[0].checked=false;
            list.childNodes[i].childNodes[1].style.textDecoration="none";
            list.childNodes[i].childNodes[1].style.color="black";
        }
    }

    var c=0;
    for(var i=1;i<=list.childElementCount;i++)
        if(list.childNodes[i].childNodes[0].checked==false)
            c++;
    document.getElementById("listCount").textContent=c+" items left";
});