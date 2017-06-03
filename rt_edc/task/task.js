//*************************************
//hard-code
var app_name="rt_edc_";
var participant_pid='20009726';
var notes_pid='20009727';
var notes_url='https://vmiis.github.io/modules/rt_edc/task_notes.html'
var site_filter_pid='';
var sql_participant="@('Study_ID')";
$vm.module_list[app_name+'clinical_trials_notes']={table_id:notes_pid, var:{},  url:notes_url};
//*************************************
_record_type="s2";
var _task_fields='';
//-------------------------------------
var site_sql_where='';
var site_array=[];
var site_filter_and_request=function(){
    var sql="select List=@('Site_List') from [FORM-"+site_filter_pid+"] where S2=@S1";
    var req_data={cmd:'query_records',sql:sql,s1:$vm.user};
    $VmAPI.request({data:req_data,callback:function(res){
        if(res.records.length>0){
            var sites=res.records[0].List.replace(/\r/g,'\n').replace(/\n\n/g,'\n').replace(/\n/g,',');
            sites=sites.replace(',*','');
            sites=sites.replace('*','');
            site_array=sites.split(',');
            var sites="";
            for(var i=0;i<site_array.length;i++){
                if(sites!=="") sites+=",";
                sites+="'"+site_array[i]+"'";
            }
            if(res.records[0].List.indexOf('*')!==-1) site_sql_where='';
            else site_sql_where=" where S1 in ("+sites+")";
        }
        else{
            site_sql_where=" where S1 in ('')";
        }
        _set_req(); _request_data();
    }});
}
//-------------------------------------
var _default_cell_render=function(records,I,field,td,set_value,source){
    switch(field){
		case 'Study_ID':
			if(_mobj().op.is_child_panel==undefined){
				var sql="with tb as (select name="+sql_participant+",value2=UID,value3=S1 from [FORM-"+participant_pid+"])";
				sql+=" select top 10 name,value=name,value2,value3 from tb where Name like '%'+@S1+'%' ";
				VmInclude:__LIB__/vmiis/Common-Code/grid/field_auto.js
			}
			else{
				records[I].vm_readonly[field]=true;
				td.text(records[I][field]);
			}
			break;
        case 'Site':
                records[I].vm_custom[field]=true;
                break;
        case 'S3':
            records[I].vm_custom[field]=true;
            td.html("<span style='color:"+records[I][field]+"'>&#x25cf;</span>");
            break;
        case 'NT':
            records[I].vm_custom[field]=true;
            if(_records[I].UID===undefined) return;
            var color=_records[I].NC;     if(color==="") color="#000000"
            var value=records[I][field];  if(value==="") value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            td.html("<u style='cursor:pointer;color:"+color+"'>"+value+"</u>");
            td.find('u').on('click',function(){
				var op={mobj:$vm.vm['__ID'],record:records[I],participant_pid:participant_pid,is_task:'1'}
				$vm.load_module_by_name(app_name+'clinical_trials_notes',$vm.root_layout_content_slot,op)
            });
            break;
    }
}
//-------------------------------------
_set_req=function(){
	if(_mobj().op.is_child_panel==undefined && _mobj().op.record.Child_Record=='1'){
		alert('The module can not be load without parent infomation. It should be called from a staff module.');
		_req="";
		return;
	}

    if($vm.online_questionnaire===1){
        _records=[];
        return;
    }
	var parent_where="";
	if(_mobj().op.is_child_panel!=undefined){
		var record=_mobj().op.mobj.op.record;
		parent_where=" where uid="+record.UID;
		site_sql_where='';
	}
    var sql="with notes as (select PUID,NT=S1,NC=@('Color'),NRowNum=row_number() over (PARTITION BY PUID order by ID DESC) from [FORM-"+notes_pid+"] where ppid="+_db_pid+")";
    sql+=",participant as (select Site=S1,ParticipantUID=UID,sql_participant="+sql_participant+" from [FORM-"+participant_pid+"]"+site_sql_where+parent_where+" )";
    sql+=",task as (select ID,PID,UID,PUID,S3,Site=participant.Site,Information,sql_participant,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [FORM-"+_db_pid+"-@S1] join participant on PUID=ParticipantUID)";
    sql+="select ID,PID,S3,UID,Site,Information,Participant=sql_participant,DateTime,Author,RowNum,NT,NC,dirty=0, valid=1 from task left join notes on UID=notes.PUID and NRowNum=1 where RowNum between @I6 and @I7";
    var sql_n="with participant as (select Site=S1,ParticipantUID=UID from [FORM-"+participant_pid+"]"+site_sql_where+" )";
    sql_n+=" select count(ID) from [FORM-"+_db_pid+"-@S1] join participant on PUID=ParticipantUID";

    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
_set_req_export=function(){
    _fields_e="Participant ID|ParticipantUID,Participant,"+_task_fields
    var sql="with participant as (select Site=S1,ParticipantUID=UID,sql_participant="+sql_participant+",RowNum=row_number() over (order by ID DESC) from [FORM-"+participant_pid+"]"+site_sql_where+" )";
    sql+=",task as (select ID,UID,PUID,S3,Information,DateTime,Author from [FORM-"+_db_pid+"-@S1])";
    sql+=" select ID,ParticipantUID,Site,Information,Participant=sql_participant,DateTime,Author from participant left join task on PUID=ParticipantUID";
    _set_from_to();
    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
    else sql+=" order by ParticipantUID DESC";
    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
}
//-------------------------------------
var _set_status_and_participant=function(record,dbv){    //set status color, PUID=paticipant_uid
    var flds=_task_fields.split(',');
    var J=0,K=0,N=flds.length;
    for(var i=0;i<N;i++){
        var id=flds[i].split('|').pop();
        if(id=='UID') K++;
        else if(record[id]==='' || record[id]===undefined || record[id]===null)  J++;
    }
    N=N-K;
    if(N==J) 		    dbv.S3='#FF0000';
    else if(J===0)  	dbv.S3='#00FF00';
    else 			    dbv.S3='#FFCC00';
    if(record.Study_ID===undefined || record.Study_ID===null || record.Study_ID==""){
        $vm.alert("No participant was selected");
        return false;
    }
    dbv.PPID=participant_pid;
    if(record.Study_ID_uid!==undefined) dbv.PUID=record.Study_ID_uid;
    return true;
};
//-------------------------------------
_data_process_after_render=function(){
	if(_mobj().op.is_child_panel!=undefined && _mobj().op.record.Single_Record=='1'){
		if(_records.length==0){
			$('#new__ID').triggerHandler('click');
		}
		if(_records.length==1){
			var form=$('#grid__ID tr:nth-child(2)').find('u:first');
			form.triggerHandler('click');
		}
		else{
			alert("More than one records were found! Please report the administrator.");
			return;
		}
	}
}
//-------------------------------------
_new_pre_data_process=function(){
	/*
	if($vm.vm['__ID'].op.from_child_panel!=undefined){
	    _records[0].Participant_uid=$vm.vm['__ID'].op.parent_uid;
	    _records[0].Participant    =$vm.vm['__ID'].op.parent_name;
	}
	*/
	if(_mobj().op.is_child_panel=='1'){
		var record=_mobj().op.mobj.op.record;
		_records[0].Study_ID_uid=record.UID;
	    _records[0].Study_ID    =record.Study_ID;
	}
}
//-------------------------------------
