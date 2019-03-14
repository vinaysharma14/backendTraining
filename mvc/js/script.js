document.getElementById("todoInput").addEventListener("keyup",function(event)
{
    if(event.key=="Enter" && this.value.length>0)
    {
        var list=document.getElementById("todoList");
        var item=document.createElement("li");
        var itemCheck=document.createElement("input");
        var itemName=document.createElement("p");

        item.addEventListener("mouseover",function()
        {
            if(this.childElementCount==2)
            {
                var icon=document.createElement("i")
                icon.classList.add("fas","fa-times");
                icon.setAttribute("style","float:right;margin-top:-18px;margin-right: 80px;color: #e8d4d5;")
                this.appendChild(icon);
            }
            if(this.childElementCount==3)
            {
                icon.addEventListener("click",function()
                {
                    this.parentElement.remove();
                })
            }
        });

        item.addEventListener("mouseleave",function()
        {
            this.removeChild(this.childNodes[2]);
        })

        itemCheck.addEventListener("click",function()
        {
            if(this.checked==false)
                this.parentElement.childNodes[1].style.textDecoration="none";
            else
                this.parentElement.childNodes[1].style.textDecoration="line-through";
        });

        itemCheck.type="checkbox";
        itemName.textContent=this.value;

        item.classList.add("list","shadow","p-2","bg-white");
        itemCheck.classList.add("checkBox")

        item.appendChild(itemCheck);
        item.appendChild(itemName);
        list.appendChild(item);

        this.value="";
    }
})