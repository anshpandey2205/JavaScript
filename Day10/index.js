
let obj={
    id:1,
    firstName:"anshu",
    LastName:"pandey",
    FullName:function(city){
        console.log(this.firstName+" "+this.LastName+" from "+city);
    }
}
obj.FullName("delhi");