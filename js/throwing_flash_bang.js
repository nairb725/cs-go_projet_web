function white_screen(){
    var throwing_flashbang = new Audio("../img/throwing_flashbang.mp3");
    var bouncing_explose = new Audio("../img/bouncing_flash_sound.mp3");
    var get_blinded = document.getElementById("blinded_gif")
    var section_csgo = document.getElementById("section_csgo")
    throwing_flashbang.play();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      delay(1000).then(() => bouncing_explose.play());
      delay(1900).then(() => section_csgo.style.display = "none");
      delay(2000).then(() => get_blinded.style.display = "block");
      delay(3800).then(() => get_blinded.style.display = "none");
      delay(3800).then(() => section_csgo.style.display = "block");
    }