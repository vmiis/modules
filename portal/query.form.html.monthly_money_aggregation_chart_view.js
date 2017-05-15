var monthly_money_aggregation_chart_view=function(options_json,records){
    var results={}
    var _view=options_json.template;
    var _type=options_json.BI_data_type;
    var _name=options_json.item_name;
    for(var i=0;i<records.length;i++){
        var _month=records[i]._month;
        for(var item in records[i]){
            if(item!=_month){
                if(results[item]==undefined){
                    results[item]={}
                }
                switch(_month){
                    case '1': results[item].M1=records[i][item]; break;
                    case '2': results[item].M2=records[i][item]; break;
                    case '3': results[item].M3=records[i][item]; break;
                    case '4': results[item].M4=records[i][item]; break;
                    case '5': results[item].M5=records[i][item]; break;
                    case '6': results[item].M6=records[i][item]; break;
                    case '7': results[item].M7=records[i][item]; break;
                    case '8': results[item].M8=records[i][item]; break;
                    case '9': results[item].M9=records[i][item]; break;
                    case '10': results[item].M10=records[i][item]; break;
                    case '11': results[item].M11=records[i][item]; break;
                    case '12': results[item].M12=records[i][item]; break;
                }
            }
        }
    }
    var r=[];
    for(var p in results){
        if(p.substring(0,2)==_type){
            var record={}
            record[_name]=p.substring(2).replace(/_1_1_1_/g,'/').replace(/_/g,' ');
            record.Subtotal=0;
            record.Jan=''; if(results[p].M1!=undefined){ record.Jan=parseFloat(results[p].M1).toFixed(2); record.Subtotal+=parseFloat(results[p].M1);}
            record.Feb=''; if(results[p].M2!=undefined){ record.Feb=parseFloat(results[p].M2).toFixed(2); record.Subtotal+=parseFloat(results[p].M2);}
            record.Mar=''; if(results[p].M3!=undefined){ record.Mar=parseFloat(results[p].M3).toFixed(2); record.Subtotal+=parseFloat(results[p].M3);}
            record.Apr=''; if(results[p].M4!=undefined){ record.Apr=parseFloat(results[p].M4).toFixed(2); record.Subtotal+=parseFloat(results[p].M4);}
            record.May=''; if(results[p].M5!=undefined){ record.May=parseFloat(results[p].M5).toFixed(2); record.Subtotal+=parseFloat(results[p].M5);}
            record.Jun=''; if(results[p].M6!=undefined){ record.Jun=parseFloat(results[p].M6).toFixed(2); record.Subtotal+=parseFloat(results[p].M6);}
            record.Jul=''; if(results[p].M7!=undefined){ record.Jul=parseFloat(results[p].M7).toFixed(2); record.Subtotal+=parseFloat(results[p].M7);}
            record.Aug=''; if(results[p].M8!=undefined){ record.Aug=parseFloat(results[p].M8).toFixed(2); record.Subtotal+=parseFloat(results[p].M8);}
            record.Sep=''; if(results[p].M9!=undefined){ record.Sep=parseFloat(results[p].M9).toFixed(2); record.Subtotal+=parseFloat(results[p].M9);}
            record.Oct=''; if(results[p].M10!=undefined){ record.Oct=parseFloat(results[p].M10).toFixed(2); record.Subtotal+=parseFloat(results[p].M10);}
            record.Nov=''; if(results[p].M11!=undefined){ record.Nov=parseFloat(results[p].M11).toFixed(2); record.Subtotal+=parseFloat(results[p].M11);}
            record.Dec=''; if(results[p].M12!=undefined){ record.Dec=parseFloat(results[p].M12).toFixed(2); record.Subtotal+=parseFloat(results[p].M12);}
            record.Subtotal=record.Subtotal.toFixed(2);
            r.push(record);
        }
    }
    var record={}
    record[_name]='Total';
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Subtotal!='') a+=parseFloat(r[i].Subtotal); record.Subtotal=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jan!='') a+=parseFloat(r[i].Jan); record.Jan=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Feb!='') a+=parseFloat(r[i].Feb); record.Feb=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Mar!='') a+=parseFloat(r[i].Mar); record.Mar=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Apr!='') a+=parseFloat(r[i].Apr); record.Apr=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].May!='') a+=parseFloat(r[i].May); record.May=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jun!='') a+=parseFloat(r[i].Jun); record.Jun=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Jul!='') a+=parseFloat(r[i].Jul); record.Jul=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Aug!='') a+=parseFloat(r[i].Aug); record.Aug=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Sep!='') a+=parseFloat(r[i].Sep); record.Sep=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Oct!='') a+=parseFloat(r[i].Oct); record.Oct=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Nov!='') a+=parseFloat(r[i].Nov); record.Nov=a;
    var a=0; for(var i=0;i<r.length;i++)  if(r[i].Dec!='') a+=parseFloat(r[i].Dec); record.Dec=a;

    r.sort(function(a,b) {
        if (a.Item < b.Item)
          return -1;
        if (a.Item > b.Item)
          return 1;
        return 0;
    })
    r.push(record);
    _res_records=r;
    _fields=_name+",Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,Subtotal"

    record="";
    var auto=[];
    var item=$('#input_2__ID').val();
    for(var i=0;i<r.length;i++){
        if(r[i][_name]==item){
            record=r[i];
        }
        auto.push({"label":r[i][_name],"value":r[i][_name]})
    }
    if(record!=""){
        var rr=[];
        rr.push({"X":'Jan',"Y":record.Jan})
        rr.push({"X":'Feb',"Y":record.Feb})
        rr.push({"X":'Mar',"Y":record.Mar})
        rr.push({"X":'Apr',"Y":record.Apr})
        rr.push({"X":'May',"Y":record.May})
        rr.push({"X":'Jun',"Y":record.Jun})
        rr.push({"X":'Jul',"Y":record.Jul})
        rr.push({"X":'Aug',"Y":record.Aug})
        rr.push({"X":'Sep',"Y":record.Sep})
        rr.push({"X":'Oct',"Y":record.Oct})
        rr.push({"X":'Nov',"Y":record.Nov})
        rr.push({"X":'Dec',"Y":record.Dec})
        chart_view(options_json,rr);

        $("#input_2__ID").autocomplete({
            source:auto,
            minLength: 0,
        });
        $("#input_2__ID").focus(function(){$("#input_2__ID").autocomplete("search","");});
    }
    else{
        $('#result__ID').html("No data for the selected item");
    }
}
