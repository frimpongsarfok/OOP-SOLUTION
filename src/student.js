class Student {
  constructor(...param){
      this.name=param[0];
      this.skillLevel=param[1];
      this.assignments=[];
  }
  study(){
    if(this.skillLevel===100){
        return this;
    }  
    this.skillLevel+=1;
    return this;
  }
  doHomework(objParam){
    if(objParam===undefined){
     for(let assignments of this.assignments){
      if(assignments.skillLevel<this.skillLevel){
         assignments.completed=true;
        return;
      }else{
              assignments.completed=false;
                  return;
            }    
        }
     }
   
    if(objParam.skillLevel<this.skillLevel && objParam.skillLevel>1){
        objParam.completed=true;
        this.assignments.push(objParam);
    }else{
        if(objParam.skillLevel>1 && objParam.skillLevel<100 ){
          this.assignments.push(objParam);
          objParam.completed=false; 
        }
    }
   
  }
  

}

module.exports = Student
