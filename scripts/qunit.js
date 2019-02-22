function area(x,y) {
   
    var r;
    if(x<0 || y<0){
    r = 0;}
     else
     {
    r = x * y;
     }
    return r;
    
  }

  QUnit.test("area", function(assert) {
	assert.equal(area(4,2), 8, "Area of rectangle with length 4 and breadth 2 == 8");
	assert.equal(area(-1,2), 0, "Area of rectangle with length -1 and breadth 2 == 0");
	assert.equal(area(5,-2), 0, "Area of rectangle with length 5 and breadth -2 == 0");
	assert.equal(area(6,3), 18, "Area of rectangle with length 6 and breadth 3 == 18");
	assert.equal(area(10,2), 20, "Area of rectangle with length 10 and breadth 2 == 20");
 });