var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.display = "none";
canvas.style.position = 'absolute';
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 5000, 5000);

function white_screen(){
    var throwing_flashbang = new Audio("../img/throwing_flashbang.mp3");
    var bouncing_explose = new Audio("../img/bouncing_flash_sound.mp3");
    throwing_flashbang.play();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      delay(1000).then(() => canvas.style.display = "block",bouncing_explose.play()).then(()=>canvas.style.display = "none");
}
