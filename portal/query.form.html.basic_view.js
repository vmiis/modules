var basic_view=function(options_json,headers,records,class_name){
    //-----------------------------------------
    var txt="<table id=grid__ID class="+class_name+"__ID><tr><th></th>";
    for(var i=0;i<headers.length;i++){
        var sv=$('<div/>').text(headers[i]).html();
        txt+="<th>"+sv+"</th>";
    }
    txt+="</tr>"
    for(var i=0;i<records.length;i++){
        txt+="<tr><td>"+(i+1).toString()+"</td>";
        for(var j=0;j<headers.length;j++){
            var sv=$('<div/>').text(records[i][headers[j]]).html();
            txt+="<td>"+sv+"</td>";
        }
        txt+="</tr>";
    }
    txt+="</table>"
    if(records.length>=200){
        txt+="maximum 200 rows in the query results"
    }
    txt+="<style>";
    if(options_json.style!=undefined){
        txt+=$('<div/>').html(options_json.style.replace(/result/g,'#result__ID')).text();
    }
    txt+="</style>"
    $('#result__ID').html(txt);
    //-----------------------------------------
}
