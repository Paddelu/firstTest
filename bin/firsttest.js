(function(Main, undefined)
{
    console.log("this is my main js file");
}(window.Main == window.Main || {} ));
(function (Controller, undefined)
{
    console.log("controller");
    var a = "Controller name";
 }
 (Main.Controller == Main.Controller || {} ));