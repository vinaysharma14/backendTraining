class listClass
{
    constructor(itemID,itemName,isCompleted)
    {
        this._id=itemID;
        this.itemName=itemName;
        this.isCompleted=isCompleted;
    }
    toggleCheck=()=>
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
    todoPush=(itemID,itemName,isCompleted)=>
    {
        var item=new listClass(itemID,itemName,isCompleted);
        this.todoCollection.push(item);
    }
    todoPop=(itemID)=>
    {
        this.todoCollection.splice(itemID,1);
    }
}

var collectionObject=new collectionClass();