//Imports via require js
require.config({
    baseUrl: "",
    paths: {
        jquery: "lib/jquery-2.1.3",
        underscore: "lib/underscore"
        //js: "../js"
    }
});
//"jquery","underscore","backbone","i18n!js/nls/ui",
require(["lib/domReady!","jquery","js/View","lib/text!templates/template.html"],function(doc,$,View,html) {
    $("body").append(html);
    var lst = [{"Name":"Manfred","Category 1":"Towers","Category 2":"French Cheese Cake","Category 3":"I am the Walrus"},
               {"Name":"Wilfred","Category 1":"Houses","Category 2":"Danish Rye Pudding","Category 3":"I am the Parrot"},
               {"Name":"Tedfred","Category 1":"Cities","Category 2":"German Corn Pastry","Category 3":"I am the Donkey"}];
    var view = new View("#top","Atable",["Name","Category 1","Category 2","Category 3"],lst);
    var lst2 = [{"Name":"Manfred Joe","Category 1":"Towers","Category 2":"Sweedish Cheese Cake","Category 3":"I am a Walrus"},
               {"Name":"Wilfred Moe","Category 1":"Houses","Category 2":"Finnish  Rye Pudding","Category 3":"I am a Parrot"},
               {"Name":"Tedfred Doe","Category 1":"Cities","Category 2":"Danish   Corn Pastry","Category 3":"I am a Donkey"}];
    var iii = 10;
    var c = function () {
        lst = lst.concat(lst2);
        view.data(lst);
        if (iii-- > 0)
            setTimeout(c,500);
        else 
            setTimeout(function(){view.data([]);},1000);
    };
    setTimeout(c,500);
});
