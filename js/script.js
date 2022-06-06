$(document).ready(function(){

    $('img[data-expandable="1"]').each(function() {
        var a = $('<a>');
        a.attr('href', $(this).attr('src'));
        if ($(this).attr('title')) {
            a.attr('title', $(this).attr('title'));
        } else {
            a.attr('title', $(this).attr('alt'));
        }
        a.attr('rel', 'imagebox-intext');
        var b = $(this).clone();
        a.html(b);
        $(this).replaceWith(a);
    });

    $.ImageBox.init({
        loaderSRC: '/js/imagebox2/loading.gif',
        closeHTML: "<img src='/js/imagebox2/close.gif' style='border:0' alt='Zavřít' />",
        fadeDuration: 200
    });

});
