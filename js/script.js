

$("document").ready( function(e) {
    $("footer + div").removeClass("none")
    $("footer + div").addClass("popup");

    $(".but_login").click(function (e) {
        let login = $("input").val()
        if( login.toLowerCase() !== "tontonlaforce"){
            $("input").toggleClass("error");
        }else {

            $("footer + div").removeClass("popup")
            $("footer + div").addClass("none2")
            setTimeout(function () {
                $("footer + div").removeClass("none2");
                $("footer + div").addClass("none")
            }, 800);

        }

    });

    $("input").focusin(function () {
        $(this).removeClass("error");
    })

})

