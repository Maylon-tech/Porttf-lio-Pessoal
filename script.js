const navBar = document.querySelector('.navbar')

$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrolly > 20) {
            navBar.classList.add("sticky").scroll;
        } else {
          navBar.classList.remove("sticky");
        }
    });
});