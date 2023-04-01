var i = 0;
var tags = document.getElementsByTagName('code');
var len = tags.length;
var speed = 60;

function typeWriter() {
  if (i < len) {
    var tag = tags[i];
    var html = tag.innerHTML;
    tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    tag.innerHTML = "";
    var j = 0;
    function write() {
      if (j <= txt.length) {
        tag.innerHTML = txt.slice(0 , j);
        j++;
        setTimeout(write, speed);
      } else {
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    write();
  } else {
    i = 0; // Reset i variable to loop the animation
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


// function deltxt() {
// 			if (A <= txt.length) {
		// 	    document.getElementById("text").innerHTML = txt.slice(0, -A);
		// 	    A++;
		// 	    setTimeout(deltxt, 50);
		// 	  }
		// }
		// var backward = speed * txt.length + 1000		;
		// // console.log(backward);
		// setTimeout( function () {
		// 	deltxt();
		// },backward);







    