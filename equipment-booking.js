(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "equipment-booking-record-data":   	{url:"$H/e/equipment-booking-record-data.html",Table:"equipment-booking-record",form_module:"equipment-booking-record-form",router:1},
        "equipment-booking-record-form":   	{url:"$H/e/equipment-booking-record-form.html",Table:"equipment-booking-record"},
        "equipment-data":      	  			{url:"$H/e/equipment-data.html",Table:"equipment",form_module:"equipment-form",router:1},
        "equipment-form":      	  			{url:"$H/e/equipment-form.html",Table:"equipment"},
        "equipment-booking":   			    {url:"$H/e/equipment-booking.html",Table:"equipment","booking_form":"equipment-booking-record-form",router:1},
        "equipment-booking-calendar": 	    {url:"$H/e/equipment-booking-calendar.html",Table:"equipment-booking-record",
                                                "booking":"equipment-booking","booking_form":"equipment-booking-record-form",router:1},
        "equipment-booking-app":   			{url:"$H/e/equipment-booking/index.html"},
    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://"+window.location.hostname+":8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
