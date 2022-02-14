function white_screen(){
  var white_screen = document.getElementById("container_csgo");
    var throwing_flashbang = new Audio("../img/throwing_flashbang.mp3");
    var bouncing_explose = new Audio("../img/bouncing_flash_sound.mp3");
    throwing_flashbang.play();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      var get_blinded = document.getElementById("blinded_gif")
      var body = document.getElementById("body")
      delay(1000).then(() => bouncing_explose.play());
      delay(1800).then(() => body.style.display = "none");
      delay(3800).then(() => body.style.display = "block");
    }