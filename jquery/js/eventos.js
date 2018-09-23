$(document).ready(function(){
    // Evento 'resize'
    $(window).resize(function(){
        var largura = $(window).width();
        var altura = $(window).height();
        console.log("Resize: (" + largura + ", " + altura + ").");
    });

    // Evento 'scroll'
    $(window).scroll(function(){
        var x = $(window).scrollLeft();
        var y = $(window).scrollTop();
        console.log("Scroll: (" + x + ", " + y + ").");
    });

    // Evento 'focus'
    $("*").focusin(function(){
        var tagName = this.tagName;
        var id = this.id;
        console.log("Focusin: (" + tagName + ", #" + id + ").");
    });

    // Evento 'blur'
    $("*").blur(function(){
        var tagName = this.tagName;
        var id = this.id;
        console.log("Blur: (" + tagName + ", #" + id + ").");
    });

    // Evento 'focusout'
    $("*").blur(function(){
        var tagName = this.tagName;
        var id = this.id;
        console.log("Focusout: (" + tagName + ", #" + id + ").");
    });

    //Evento 'select'
    $("input").select(function(){
        console.log("Select: (" + window.getSelection() + ").");
    });

    // Evento 'change'
    $("input").change(function(){
        console.log("Change: (" + $(this).val() + ").");
    });

    // Evento 'keydown'
    $("input").keydown(function(event){
        console.log("Keydown: (" + event.which + ").");
    });

    // Evento 'keypress'
    $("input").keypress(function(event){
        console.log("Keypress: (" + event.which + ").");
    });

    // Evento 'keyup'
    $("input").keyup(function(event){
        console.log("Keyup: (" + event.which + ").");
    });

    //Evento 'click'
    $("#div1").click(function(event){
        console.log("Click: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'dblclick'
    $("#div1").dblclick(function(event){
        console.log("DblClick: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mousedown'
    $("#div1").mousedown(function(event){
        console.log("Mousedown: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mouseup'
    $("#div1").mouseup(function(event){
        console.log("Mouseup: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mouseenter'
    $("#div1").mouseenter(function(event){
        console.log("Mouseenter: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mouseleave'
    $("#div1").mouseleave(function(event){
        console.log("Mouseleave: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'hover'
    $("#div1").hover(function(event){
        console.log("Hover: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mouseover'
    $("#div1").mouseover(function(event){
        console.log("Mouseover: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mouseout'
    $("#div1").mouseout(function(event){
        console.log("Mouseout: (" + event.pageX + ", " + event.pageY + ")");
    });

    //Evento 'mousemove'
    $("#div1").mousemove(function(event){
        console.log("Mousemove: (" + event.pageX + ", " + event.pageY + ")");
    });
});