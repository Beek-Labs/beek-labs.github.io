function about_read() {
  var dots = document.getElementById("about_dots");
  var moreText = document.getElementById("about_more");
  var btnText= document.getElementById("about_readmore");
  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = '<button class="bn30">Read More<i class="fa fa-angle-right ml-2" aria-hidden="true"></i></button></a'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = '<button class="bn30">Read Less<i class="fa fa-angle-left ml-2" aria-hidden="true"></i></button></a>'; 
    moreText.style.display = 'inline';
  }
}

function bscp() {
  var dots = document.getElementById("dots_1");
  var moreText = document.getElementById("more_1");
  var btnText= document.getElementById("BSCP");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}

function csplus() {
  var dots = document.getElementById("dots_2");
  var moreText = document.getElementById("more_2");
  var btnText = document.getElementById("CSplus");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}

function ccna() {
  var dots = document.getElementById("dots_3");
  var moreText = document.getElementById("more_3");
  var btnText = document.getElementById("CCNA");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}

function cce() {
  var dots = document.getElementById("dots_4");
  var moreText = document.getElementById("more_4");
  var btnText = document.getElementById("CCE");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More>'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}

function itla() {
  var dots = document.getElementById("dots_5");
  var moreText = document.getElementById("more_5");
  var btnText = document.getElementById("ITLA");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}

function salle() {
  var dots = document.getElementById("dots_6");
  var moreText = document.getElementById("more_6");
  var btnText = document.getElementById("SALLE");

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read Less'; 
    moreText.style.display = 'inline';
  }
}
