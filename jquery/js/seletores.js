$(document).ready(function(){
    $("input[type='text'][required]").css({
        "background-color": "#fff000"
    });

    $("label:first").css({
        "color": "#ff0000"
    });

    $("input:last").css({
        "color": "#0000ff"
    });

    $("li:even").css({
        "background-color": "#ddd"
    });

    $("input:eq(1)").css({
        "background-color": "#00ff00"
    });

    $(":header").css({
        "color": "darkgreen"
    });
});