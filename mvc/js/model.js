function listClass(itemName,isCompleted)
{
    this.itemName=itemName;
    this.isCompleted=isCompleted;
    this.toggleCheck=function()
    {
        this.isCompleted=!this.isCompleted;
    }
}

function collectionClass()
{
    this.todoCollection=[];
    this.todoPush=function(itemName,isCompleted)
    {
        var item=new listClass(itemName,isCompleted);
        this.todoCollection.push(item);
    }
}

var collectionObject=new collectionClass();