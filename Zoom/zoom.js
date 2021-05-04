"use strict";
$(document).ready( () => {

    $("#image_list").each( (index, link) =>{
        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click( evt => {
        evt.preventDefault();
        const link = evt.currentTarget;
        $("#main_image").fadeOut(400, function ()
        {
            $("#main_image").attr("src", link.href);
            $("#caption").text(link.title);
            $("#main_image").fadeIn();
        });      
    });

    $("li:first-child a").focus();

});