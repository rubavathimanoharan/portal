
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}




function myFunction() {
  var x = document.getElementById("progressbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    { 
      title: {
        text: "Adding Attributes to  axisX"
           },
      axisX: {
        title: "X Axis Title",
        titleFontFamily: "comic sans ms"
      },
      data: [
      {        
        type: "column",
        dataPoints: [
        { x: 10, y: 7, label: "sem1" },
        { x: 20, y: 7, label: "sem 2" },
        { x: 30, y: 8, label: "cat 3"},
        { x: 40, y: 8, label: "cat 4" },
        
      
        ]
      }
      ]
    });
  
    chart.render();
  }
  
}

function myFun1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFon2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

