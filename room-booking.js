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
        "room-booking-record-data":    	{url:"$H/r/room-booking-record-data.html",Table:"room-booking-record",form_module:"room-booking-record-form",router:1},
        "room-booking-record-form":    	{url:"$H/r/room-booking-record-form.html",Table:"room-booking-record"},
        "room-data":      	  			{url:"$H/r/room-data.html",Table:"room",form_module:"room-form",router:1},
        "room-form":      	  			{url:"$H/r/room-form.html",Table:"room"},
        "room-booking":   			    {url:"$H/r/room-booking.html",Table:"room","booking_form":"room-booking-record-form",router:1},
        "room-booking-calendar": 	    {url:"$H/r/room-booking-calendar.html",Table:"room-booking-record",
                                            "booking":"room-booking","booking_form":"room-booking-record-form",router:1},
    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://"+window.location.hostname+":8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
