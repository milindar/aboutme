function area() {
  var x = Number(document.getElementById('x').value);
  var y = Number(document.getElementById('y').value);
  var r = x * y;

  localStorage.setItem("length",x);
  localStorage.setItem("breadth",y);
  localStorage.setItem("res",r);
 
  document.getElementById('result').innerHTML = "Area of rectangle is : " + r;
 
  
}
function local(){
 
  document.getElementById('storage').innerHTML = "Area of rectangle with length "+ localStorage.getItem("length")   +" and breadth "+ localStorage.getItem("breadth") + " is "+localStorage.getItem("res");
}



var milindar = new XMLHttpRequest();
milindar.open('GET', 'https://codepen.io/millindar/pen/NoZLjP.html');
milindar.onreadystatechange = function () { 
if (milindar.readyState === 4) {
document.getElementById('ajax').innerHTML = milindar.responseText;
}
};

function ajax() {
    milindar.send();
    document.getElementById('magic').style.display = 'none';
}

