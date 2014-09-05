function AddPlayer(container, callback)
{
    var template = [
    "<div id='add-player-dialog' title='Add A Player'>\n",
	"	Add a Player:\n",
	"	<input id='add-name' type='text'></input>\n",
    "   <input id='accept-player' type='button' value='Accept Player'></input>\n",
	"</div>\n"
	];
	this.container = container;
	this.callback = callback;
	var html = "";
	for (var i = 0; i < template.length; i++)
	    html += template[i];
	container.append(html);
	var _self = this;
	var click = function() {
	    _self.add();
	};
	$("#accept-player").click(click);
	$("#add-player-dialog").dialog();
	$("#add-player-dialog").dialog("close");
}
AddPlayer.prototype.show = function()
{
    $("#add-player-dialog").dialog();
};
AddPlayer.prototype.add = function()
{
    var val = $("#add-player-dialog>#add-name").val();
    if (val != "") {
        this.callback(val);
        $("#add-player-dialog").dialog("close");
    }
};