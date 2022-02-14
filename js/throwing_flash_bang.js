function white_screen(){
  var white_screen = document.getElementById("container_csgo");
    var throwing_flashbang = new Audio("../img/throwing_flashbang.mp3");
    var bouncing_explose = new Audio("../img/bouncing_flash_sound.mp3");
    throwing_flashbang.play();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      var get_blinded = document.getElementById("blinded_gif")
      var header = document.getElementById("header")
      var footer = document.getElementById("footer")
      delay(1000).then(() => bouncing_explose.play());
      delay(2000).then(() => footer.style.background = "white");
      delay(2000).then(() => white_screen.style.display = "none");
      delay(2000).then(() => get_blinded.style.display="block");
      delay(3800).then(() => get_blinded.style.display="none");
      delay(2000).then(() => footer.style.background = "rgb(184, 184, 184)");
      delay(3800).then(() => white_screen.style.display = "block");
    }
