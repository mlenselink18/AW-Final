"use strict";
$(document).ready( () => {

    $( function() {
        $( "#tabs" ).tabs();
    });

    $( '.popup_image' ).each(function() {
        var $imageSrc = $(this);
        var $imageSrcAttr = $imageSrc.attr('href');
        var $linkTitle = $(this);
        var $linkTitleAttr = $imageSrc.attr('title');
        //
        var $dialog = $('<div class="image-container"><img src="' + $imageSrcAttr + '" style="max-width: 800px" /><div>').dialog({
            width: 900,
            height: 600,
            autoOpen: false,
            modal: true,
            title: $linkTitleAttr,
            // start animation
            show: {
            effect: "blind",
            duration: 100
            },
            hide: {
            effect: "blind",
            duration: 100
            },
            // end animation
            buttons: [
            {
            text: "Close",
            click: function() {
            $(this).dialog("close");
            }
            }
            ]
            }); 
            $.ui.dialog.prototype._focusTabbable = function(){};
    //
    $imageSrc.click(function() {
    $dialog.dialog('open');
    return false;
    });
  });
  //

});