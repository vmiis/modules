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
    //bookkeeping
    var modules={
        "mappings-of-ip-addresse-to-host-name":                         {url:"$H/m/mappings-of-ip-addresse-to-host-name.html",router:1,tags:"knowledge base"},
    }
    url_replace(modules,"kb-","$H","https://modules.vmiis.com/","http://"+window.location.hostname+":8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
