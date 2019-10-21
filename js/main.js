document.addEventListener("DOMContentLoaded", function() {
  console.log("hello");
  let selectCity = document.getElementById("select");

  function backgroundImage() {
    return document.querySelector("body");
  }
  function clearBackgroundImage() {
    backgroundImage().classList.remove("austin.jpg");
    backgroundImage().classList.remove("citipix_skyline.jpg");
    backgroundImage().classList.remove("la.jpg");
    backgroundImage().classList.remove("nyc.jpg");
    backgroundImage().classList.remove("sf.jpg");
    backgroundImage().classList.remove("sydney.jpg");
  }

  selectCity.addEventListener("change", function(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "1") {
      clearBackgroundImage();
      backgroundImage().style.backgroundImage = "url(images/nyc.jpg)";
    } else if (selectedValue === "2") {
      clearBackgroundImage();
      document.querySelector("body").style.backgroundImage =
        "url(images/sf.jpg)";
    } else if (selectedValue === "3") {
      clearBackgroundImage();
      document.querySelector("body").style.backgroundImage =
        "url(images/la.jpg)";
    } else if (selectedValue === "4") {
      clearBackgroundImage();
      document.querySelector("body").style.backgroundImage =
        "url(images/austin.jpg)";
    } else if (selectedValue === "5") {
      clearBackgroundImage();
      document.querySelector("body").style.backgroundImage =
        "url(images/sydney.jpg)";
    } else {
      clearBackgroundImage();
      document.querySelector("body").style.backgroundImage =
        "url(images/citipix_skyline.jpg)";
    }
  });
});
