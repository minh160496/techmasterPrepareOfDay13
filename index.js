function Persion(firstName, lastName, favorite) {
  //đây là một function contructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.favorite = favorite;
  this.getName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

let user = new Persion("Lê", "Minh", "soccer");

let author = new Persion("Nguyễn", "Ba", "game"); //Lúc này cả 2 đối tượng user và author đều có
// properties với key là 'className' và value là 'techmaster

Persion.prototype.className = "techmaster";
