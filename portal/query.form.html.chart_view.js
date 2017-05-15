var chart_view=function(options_json,records){
    var render=function(){
        var txt="<div id=pvdiv__ID><div style='padding:0 6px 0 6px'><div id=chart__ID style='width:100%;'></div></div></div>";
        txt+="<style>";
        if(options_json.style!=undefined){
            txt+=$('<div/>').html(options_json.style.replace('result','#result__ID')).text();
        }
        txt+="</style>"
        $('#result__ID').html(txt);
        //-----------------------------------------
        $('#chart__ID').html('');
        var top1=$('#chart__ID').offset().top;
        $('#chart__ID').css("height",($(window).height()-top1-30)+'px');
        //-----------------------------------------
    }
    //-----------------------------------------
    var chart=function(options_json,records){
        var d=[["X","Y",{ role: "tooltip" }]];
        for(var i=0;i<records.length;i++){
            d.push([records[i].X, parseFloat(records[i].Y),parseFloat(records[i].Y)]);
        }
        var data = google.visualization.arrayToDataTable(d);
        var formatter = new google.visualization.NumberFormat({pattern:'$ ###,###,###.00'} );
        formatter.format(data, 2);
        var view = new google.visualization.DataView(data);
        var c= new google.visualization[options_json.chart_type](document.getElementById("chart__ID"));
        c.draw(view, options_json.options);
    }
    //-----------------------------------------
    render();
    chart(options_json,records);
}
