var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateY(+62px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateY(+124px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateY(+186px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateY(+248px) rotate(1080deg)";
    document.getElementById("btn5").style.transform =
      "translateY(+310px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateX(0)";
    document.getElementById("btn2").style.transform = "translateX(0)";
    document.getElementById("btn3").style.transform = "translateX(0)";
    document.getElementById("btn4").style.transform = "translateX(0)";
    document.getElementById("btn5").style.transform = "translateY(0)";

    isPop = false;
  }
}
