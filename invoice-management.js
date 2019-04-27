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
    //invoice-management
    var modules={
        "workflow":                 {url:"$H/i/invoice-management-workflow.html",router:1,name:"Invoice management",tags:"invoice,finance"},
        "invoice-data": 	        {url:"$H/i/invoice-data.html",Table:"invoice-vm",form_module:"invoice-form",router:1},
        "invoice-form": 	        {url:"$H/i/invoice-form.html",Table:"invoice-vm",client_table:"client-wapp"},
        "invoice-print": 	        {url:"$H/i/invoice-print.html",Table:"invoice-vm", client_table:"client-wapp"},
        "client-data": 	            {url:"$H/c/client-data-wapp.html",Table:"client-wapp",form_module:"client-form",router:1},
        "client-form": 	            {url:"$H/i/client-form-wapp.html",Table:"client-wapp"},
    }
    url_replace(modules,"invoice-management-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
