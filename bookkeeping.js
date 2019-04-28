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
        "workflow":                         {url:"$H/b/bookkeeping/home.html",router:1,name:"Bookkeeping",tags:"bookkeeping,finance"},
        "predefined-transaction-item-data": {url:"$H/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item",form_module:"predefined-transaction-item-form",router:1,tags:"bookkeeping"},
        "predefined-transaction-item-form": {url:"$H/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item",router:1,tags:"bookkeeping"},
        
        "transaction-y-q-tax-return-data":  {url:"$H/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-y-q-bas-data":    		{url:"$H/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-y-q-data":    		    {url:"$H/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        
        "transaction-bas-data":   		    {url:"$H/b/bookkeeping/transaction-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-tax-return-data":      {url:"$H/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-data":    			    {url:"$H/b/bookkeeping/transaction-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-form":    			    {url:"$H/b/bookkeeping/transaction-form.html",Table:"transaction",item_table:'predefined-transaction-item',tags:"bookkeeping"},
        "ato-bas-quarter-aggregation-data":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction',form_module:"ato-bas-quarter-aggregation-form",router:1,tags:"bookkeeping"},
        "ato-bas-quarter-aggregation-form":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction',tags:"bookkeeping"},
        "income-expense-month-aggregation-data":{url:"$H/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation", transaction_table:'transaction',form_module:"income-expense-month-aggregation-form",router:1,tags:"bookkeeping"},
        "income-expense-month-aggregation-form":{url:"$H/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation", transaction_table:'transaction',tags:"bookkeeping"},
        "item-month-aggregation-data":          {url:"$H/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation", transaction_table:'transaction',form_module:"item-month-aggregation-form",router:1,tags:"bookkeeping"},
        "item-month-aggregation-form":          {url:"$H/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation", transaction_table:'transaction',tags:"bookkeeping"},
        "income-expense-chart":                 {url:"$H/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation",router:1,tags:"bookkeeping"},
        "item-chart":                           {url:"$H/b/bookkeeping/item-chart.html",Table:"item-month-aggregation",router:1,tags:"bookkeeping"},
    }
    url_replace(modules,"bookkeeping-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //bookkeeping-wappsystem
    var modules={
        "predefined-transaction-item-data": {url:"$H/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item-wappsystem",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$H/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item-wappsystem"},
        
        "transaction-y-q-tax-return-data":  {url:"$H/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$H/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$H/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$H/b/bookkeeping/transaction-bas-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$H/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$H/b/bookkeeping/transaction-data.html",Table:"transaction-wappsystem",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$H/b/bookkeeping/transaction-form.html",Table:"transaction-wappsystem",
                                                item_table:'predefined-transaction-item-wappsystem'
                                            },
        "ato-bas-quarter-aggregation-data":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-wappsystem",transaction_table:'transaction-wappsystem'},
        "income-expense-month-aggregation-data":{url:"$H/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$H/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem'},
        "item-month-aggregation-data":          {url:"$H/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$H/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation-wappsystem", transaction_table:'transaction-wappsystem'},
        "income-expense-chart":                 {url:"$H/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation-wappsystem",router:1},
        "item-chart":                           {url:"$H/b/bookkeeping/item-chart.html",Table:"item-month-aggregation-wappsystem",router:1},
    }
    url_replace(modules,"bookkeeping-wappsystem-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //bookkeeping-vmautomation
    var modules={
        "predefined-transaction-item-data": {url:"$H/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item-vmautomation",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$H/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item-vmautomation"},
        
        "transaction-y-q-tax-return-data":  {url:"$H/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$H/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$H/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$H/b/bookkeeping/transaction-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$H/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$H/b/bookkeeping/transaction-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$H/b/bookkeeping/transaction-form.html",Table:"transaction-vmautomation",
                                                item_table:'predefined-transaction-item-vmautomation'
                                            },
        "ato-bas-quarter-aggregation-data":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-vmautomation',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form":     {url:"$H/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-vmautomation'},
        "income-expense-month-aggregation-data":{url:"$H/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$H/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation'},
        "item-month-aggregation-data":          {url:"$H/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$H/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-vmautomation'},
        "income-expense-chart":                 {url:"$H/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation-vmautomation",router:1},
        "item-chart":                           {url:"$H/b/bookkeeping/item-chart.html",Table:"item-month-aggregation-vmautomation",router:1},
    }
    url_replace(modules,"bookkeeping-vmautomation-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
