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
        "purchase-order-workflow":  {url:"$H/p/purchase-order-workflow.html",router:1,name:"Purchase order",tags:"Purchase,order,finance"},
        "purchase-order-data-s":    {url:"$H/p/purchase-order-data-s.html",Table:"purchase-order",form_module:"purchase-order-form-s",router:1},
        "purchase-order-form-s":    {url:"$H/p/purchase-order-form-s.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_manager":"purchase-order-email-to-manager"
                                    },

        "purchase-order-data-p1": {url:"$H/p/purchase-order-data-p1.html",Table:"purchase-order",form_module:"purchase-order-form-p1",router:1},
        "purchase-order-form-p1": {url:"$H/p/purchase-order-form-p1.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_accountant":"purchase-order-email-to-accountant"
                                    },

        "purchase-order-data-p2": {url:"$H/p/purchase-order-data-p2.html",Table:"purchase-order",form_module:"purchase-order-form-p2",router:1},
        "purchase-order-form-p2": {url:"$H/p/purchase-order-form-p2.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_requester":"purchase-order-email-to-requester"
                                    },
                                                                

        "purchase-order-email-to-manager":      {url:"$H/p/purchase-order-email-to-manager.html",Table:"email-setup"},
        "purchase-order-email-to-accountant":   {url:"$H/p/purchase-order-email-to-accountant.html",Table:"email-setup"},
        "purchase-order-email-to-requester":    {url:"$H/p/purchase-order-email-to-requester.html",Table:"email-setup"},
    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
