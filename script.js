var typed = new Typed(".text", {
    strings:["Web Developer", "Frontend Developer", "Web Designer", "Graphic Designer"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1000,
    loop:true
})

    // Progress bars
    $(document).ready(function() {
        $('.progress .progress-bar').css("width",
                  function() {
                      return $(this).attr("aria-valuenow") + "%";
                  }
          )
      });