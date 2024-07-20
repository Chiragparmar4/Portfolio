const header = document.querySelector("header");

    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",this.window.screenY > 130);
    })

    // Example using jQuery
$('.menulist a').click(function() {
    $('.menulist a').removeClass('active');
    $(this).addClass('active');
});

document.addEventListner("contextmenu",function(e)
                         {
                             e.preventDefault()
                         },false)
