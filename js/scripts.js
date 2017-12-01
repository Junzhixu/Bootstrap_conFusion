$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else{
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});

$('#loginButton').click(function(){
    $('#loginModal').modal();
});

$('#reserveButton').click(function(){
    $('#reserveModal').modal();
});

$('#reserveClose').click(function(){
    $('#reserveModal').modal('hide');
});

$('#loginClose').click(function(){
    $('#loginModal').modal('hide');
});

$('#reserveCancel').click(function(){
    $('#reserveModal').modal('hide');
});
