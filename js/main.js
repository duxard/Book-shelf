$(document).ready(function(){
    var $goods = $(".shelf-item"),
        $dropdownMenu = $(".dropdown-content");
//    shelf centering
    $('#shelf').css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '45%',
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2}
    });
//    sortable
    $("#sortable").sortable({
        revert: true,
        start: function(event, ui){
            ui.item.children(".dropdown-content").removeClass("open-menu");
        }
    });   
    
//    drop-down menu
    $goods.on('click', function(e){
        var $ddMenu = $(this).children(".dropdown-content");
        $dropdownMenu.not($(this).find(".dropdown-content")).each(function(){
            $(this).removeClass("open-menu");
        });
        
        if($ddMenu.hasClass("open-menu")){
            $ddMenu.removeClass("open-menu");
        }else{
            if(!$(this).hasClass('ui-sortable-helper')){
               $ddMenu.addClass("open-menu");
            }
        }
    });
    
//    click on window closes opened menu
    $(window).on('click', function(e){
        var $target = $(e.target);
        if(!$target.hasClass('shelf-item')){
            $dropdownMenu.removeClass("open-menu");  
        }
    });
});