class Room {
  constructor(...param){
    this.name=param[0];
    this.description=param[1];
    this.contents=[];
   
  }
 
  add(item){
    this.contents.push(item);
    return this;
  }
  has(item){
      return this.contents.includes(item);
  }
}

module.exports = Room
