class listClass
{
    constructor(itemName,isCompleted)
    {
        this.itemName=itemName;
        this.isCompleted=isCompleted;
    }
    toggleCheck=function()
    {
        this.isCompleted=!this.isCompleted;
    }
    editName=(itemName)=>
    {
        this.itemName=itemName
    }
    setCompleted=()=>
    {
        this.isCompleted=true;
    }
    setIncomplete=()=>
    {
        this.isCompleted=false;
    }
}

class collectionClass
{
    todoCollection=[];
    todoPush=(itemName,isCompleted)=>
    {
        var item=new listClass(itemName,isCompleted);
        this.todoCollection.push(item);
    }
    todoPop=(index)=>
    {
        this.todoCollection.splice(index,1);
    }
}

var collectionObject=new collectionClass();