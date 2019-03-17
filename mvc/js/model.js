function listClass(itemName,isCompleted)
{
    this.itemName=itemName;
    this.isCompleted=isCompleted;
    this.toggleCheck=function()
    {
        this.isCompleted=!this.isCompleted;
    }
    this.editName=function(itemName)
    {
        this.itemName=itemName
    }
    this.setCompleted=function()
    {
        this.isCompleted=true;
    }
    this.setIncomplete=function()
    {
        this.isCompleted=false;
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
    this.todoPop=function(index)
    {
        this.todoCollection.splice(index,1);
    }
}

var collectionObject=new collectionClass();