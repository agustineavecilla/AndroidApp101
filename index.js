/**
 * Created with AndroidApp101.
 * User: agustineavecilla
 * Date: 2014-03-25
 * Time: 07:27 AM
 * To change this template use Tools | Templates.
 */
head.js("bower_components/jquery/dist/jquery.min.js", //
    "bower_components/bootstrap/dist/js/bootstrap.min.js", //
    "bower_components/bootstrap/dist/css/bootstrap.css", //
    "bower_components/bootstrap/dist/css/bootstrap-theme.css", //
    "bower_components/rwm-phoenix/dist/phoenix.js");
head.ready(function readyF() {
    $(".row").hide();
    $("#login").fadeIn();
    
    $("#back").click(function() {
                    $("#UserID").val("");
                    $("#Password").val("");
                    $("#Name").val("");
                    $("#Vissible").val("");
        $(".row").hide();
        $("#login").fadeIn();
                    });
    $("#submit").click(function() {
        $("#cnm").val("")
        if($("#UserID").val() == "") {
            return;
        }
        if($("#Password").val() == "") {
            return;
        }
        phoenix.userId = 'debug'; //Do NOT store your API Key on a script.
        phoenix.apiKey = 'F7F7F40AAFE6A2C4C5E741E14983B386F1333F06';
        phoenix.send({
            cgrp: '$members',
            cmnd: 'login',
            prms: {
                'cid': $("#UserID").val(),
                'pin': $("#Password").val()
            }
        }, function callbackF(data) {
            //alert(data);
            var d = JSON.parse(data);
            if(d.exitCode === 0) alert(JSON.stringify(d.response['error']));
            else {
                $("#Name").val(JSON.stringify(d.response['cnm']));
                $("#Vissible").val(JSON.stringify(d.response['VisBal']));
                $(".row").hide();
                $("#info").fadeIn();
            } //alert(JSON.stringify(d, undefined, 2));
            //alert(JSON.stringify(d.response['cid']));
            //alert(JSON.stringify(d.response['cti']));
            //alert(JSON.stringify(d.response['ctc']));
            //alert(JSON.stringify(d.response['ctd']));
            //alert(JSON.stringify(d.response['HidBal']));
            //alert(JSON.stringify(d.response['LptBal']));
            //alert(JSON.stringify(d.response['NecBal']));
            //alert(JSON.stringify(d.response['CecBal']));
        });
    });
});
//function() {
//alert("Hello World")
//});