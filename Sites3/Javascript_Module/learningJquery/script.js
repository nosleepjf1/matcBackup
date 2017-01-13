/**
 * Created by bobnweave on 10/19/16.
 */

$(".myClass").html('I am the class').css("color", "green");
$("#myId").html("<a href='#'>id link</a>");
$("#myId").css("opacity", ".8").css("background", "yellow");

//attribute property
$("#myId a").attr("href", "http://www.google.com");


//adding and removing classes
$("#myContainer").addClass("warningbtn");
$("#myContainer").removeClass("warningbtn");