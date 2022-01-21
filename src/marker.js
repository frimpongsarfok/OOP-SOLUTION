class Marker {
   constructor(...param){
       this.size=param[0];
       this.color=param[1];
       this.remainingInk=param[2];
   }
   write(string){
        let ink="";
       for(let char of string){
         if(char!=' ' && this.remainingInk){
            this.remainingInk--;
            ink+=char;
         }else if(char===' '){
             ink+=char;
         }
         
       }
       if(!this.remainingInk){
            return ink;
       }
      return string; 
   }
}

module.exports = Marker
