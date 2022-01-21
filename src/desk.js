class Desk {
  constructor(...param){
      this.length=param[0];
      this.width=param[1];
      this.height=param[2];
      this.isWhiteboard=param[3];
      this.content="";
     
  }
  write(strPram){
      this.content+=strPram;
  }
  wipe(){
      if(this.isWhiteboard){
          this.content="";
      }
  }
}

module.exports = Desk
