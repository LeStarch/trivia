define(["jquery","underscore","lib/backbone","lib/d3"],function($,_,Backbone,d3) {
    /**
     * A basic view module that constructs a view from templates
     */
    return function(elem,name,headers) {
        var _self = this;
        _self.table = null;
        _self.name = name;
        _self.headers = [];
        
        for (var j = 0; j < headers.length;j++)
            _self.headers.push(headers[j]);
        
        /**
         * Setup this module and its views
         */
        _self.setup = function() {
            var TableView = Backbone.View.extend({
                //Initialize the view
                initialize: function(options) {
                    var tmp = _.template($("script#template-table").html());
                    this.$el.html(tmp({"name":_self.name,"headers":_self.headers}));
                    this.render([]);
                },
                //Renders the view given the template
                render: function(objects) {
                    //Bind it to data
                    var rows = d3.select("#"+_self.name).select("tbody").selectAll("tr");
                    rows.transition().duration(1000).style("background-color","purple");
                    var row = rows.data(objects);
                    row.enter().append("tr").html(function(obj) {
                        return _.template($("#template-table-row").html())({"object":obj,"headers":_self.headers,"header":false});
                    }).style("background-color","green").style("font-size","0.01em").transition().duration(500).style("opacity",100).style("font-size","1.00em");
                    row.exit().style("font-size","1.00em").transition().duration(1000).style("background-color","red").style("opacity",0).style("font-size","0.01em").remove(); 
                },
                events: {}
            });
            this.table = new TableView({"el":$(elem)});
        };
        /**
         * Set the newest data
         */
        _self.data = 
            function(data) {
                _self.table.render(data);
            };
        _self.setup();
    };
});
