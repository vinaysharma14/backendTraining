document.getElementById("todoInput").addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        var list=document.getElementById("todoList");
        var item=document.createElement("li");
        var itemCheck=document.createElement("input");
        var itemName=document.createElement("p");

        itemCheck.type="checkbox";
        itemName.textContent=this.value;

        item.classList.add("list","shadow","w-75","p-3","bg-white");

        item.appendChild(itemCheck);
        item.appendChild(itemName);
        list.appendChild(item);

        this.value="";
    }
})