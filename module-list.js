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
    //generic
    var modules={
        "2-columns-contents": 			{url:"$H/2/2-columns-contents.html",router:1},

        "about":  		  	  			        {url:"$H/a/about.html",router:1},
        "about-vmiis":    			            {url:"$H/a/about-vmiis.html",router:1},
        "autocomplete-data":  			        {url:"$H/a/autocomplete-data.html",Table:"autocomplete",form_module:"autocomplete-form",router:1},
        "autocomplete-form":  			        {url:"$H/a/autocomplete-form.html",Table:"autocomplete"},
        "angularjs-hello-world":	            {url:"$H/a/angularjs-hello-world.html",router:1},
        "accountant-list-data":  	            {url:"$H/e/email-list-data.html",Table:"accountant-list",form_module:"accountant-list-form",router:1},
        "accountant-list-form":  	            {url:"$H/e/email-list-form.html",Table:"accountant-list"},
        "australian-gdp-growth":	            {url:"$H/a/australian-gdp-growth.html",router:1},
        "australian-age-dependency-ratio":	    {url:"$H/a/australian-age-dependency-ratio.html",router:1},
        

        "bar-data":  	                        {url:"$H/b/bar-data.html",Table:"bar",form_module:"bar-form",router:1},
        "bar-form":  	                        {url:"$H/b/bar-form.html",Table:"bar"},
        "bar-chart":  	                        {url:"$H/b/bar-chart.html",Table:"bar",router:1},
        "bubble":  		  	  			        {url:"$H/b/bubble.html",router:1},
        //"bookkeeping-workflow":  			    {url:"$H/b/bookkeeping/home.html",router:1},
        "bookkeeping-panel":  			        {url:"$H/b/bookkeeping-panel.html",router:1},
        "bookkeeping-home":  			        {url:"$H/b/bookkeeping/home.html",router:1},
        "clinical-trials-data-entry": 	{url:"$H/c/clinical-trials-data-entry.html"},
        "carousel":  		  			{url:"$H/c/carousel.html",router:1},
        "checkbox-data":      			{url:"$H/c/checkbox-data.html",Table:"checkbox",form_module:"checkbox-form",router:1},
        "checkbox-form":      			{url:"$H/c/checkbox-form.html",Table:"checkbox"},
        "consent-data":  	  		    {url:"$H/c/consent-data.html",Table:"consent",form_module:"consent-form"},
        "consent-form":  	  		    {url:"$H/c/consent-form.html",Table:"consent"},
        "color-data":      	  			{url:"$H/c/color-data.html",Table:"color",form_module:"color-form",router:1},
        "color-form":      	  			{url:"$H/c/color-form.html",Table:"color"},
        "coming-soon": 		            {url:"$H/u/under-construction.html",text:"Coming soon...",router:1},
        "contact-us-data":  			{url:"$H/c/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form"},
        "contact-us-form":  			{url:"$H/c/contact-us-form.html",Table:"ccontact-us-vm"},
        "contact-us-form-01":  			{url:"$H/c/contact-us-form-01.html",Table:"ccontact-us-vm"},
        "contact-us-form-02":  			{url:"$H/c/contact-us-form-02.html",Table:"ccontact-us-vm"},
        "contact-us-form-03":  			{url:"$H/c/contact-us-form-03.html",Table:"ccontact-us-vm"},
        "contact-us-panel":  			{url:"$H/c/contact-us-panel.html",Table:"ccontact-us-vm"},
        "column-data":  	            {url:"$H/c/column-data.html",Table:"column",form_module:"column-form",router:1},
        "column-form":  	            {url:"$H/c/column-form.html",Table:"column"},
        "column-chart":  	            {url:"$H/c/column-chart.html",Table:"column",router:1},
        "column-chart-group":           {url:"$H/c/column-chart-group.html",Table:"column",router:1},
        "column-chart-stack":           {url:"$H/c/column-chart-stack.html",Table:"column",router:1},
        "column-chart-panel":           {url:"$H/c/column-chart-panel.html",Table:"column",form_module:"column-form",router:1},
        
        "doctor":      	 		 	    {url:"$H/d/doctor.html",router:1},          
        "d-c-t-data":      	  			{url:"$H/d/data-collection-template-data.html","App":"demo",Table:"template",form_module:"d-c-t-form",router:1},
        "d-c-t-form":      	 		 	{url:"$H/d/data-collection-template-form.html","App":"demo",Table:"template"},
        "date-data":      	  			{url:"$H/d/date-data.html",Table:"date-vm",form_module:"date-form",router:1},
        "date-form":      	 		 	{url:"$H/d/date-form.html",Table:"date-vm"},          
        "dass-data":	 	            {url:"$H/d/depression-anxiety-stress-scales-data.html",Table:"dass",form_module:"dass-form"},
        "dass-form":	 	            {url:"$H/d/depression-anxiety-stress-scales-form.html",Table:"dass"},

        "document-data":	 	        {url:"$H/d/document-data.html",Table:"document-demo",form_module:"document-form",router:1},
        "document-form":	 	        {url:"$H/d/document-form.html",Table:"document-demo"},
        "document-panel":	 	        {url:"$H/d/document-panel.html",Table:"document-demo",form_module:"document-form",router:1},

        "email-setup-data":      	  	{url:"$H/e/email-setup-data.html",Table:"email-setup",form_module:"email-setup-form"},
        "email-setup-form":      	  	{url:"$H/e/email-setup-form.html",Table:"email-setup"},         
        "enquiry-data":      	  		{url:"$H/e/enquiry-data.html",Table:"vm-enquiry",form_module:"enquiry-form"},
        "enquiry-form":      	  		{url:"$H/e/enquiry-form.html",Table:"vm-enquiry"},         
        "event-data":      	  		    {url:"$H/e/event-data.html",Table:"event-vm",form_module:"event-form"},
        "event-form":      	  		    {url:"$H/e/event-form.html",Table:"event-vm"},         
        "event-daily":      	 	    {url:"$H/e/event-daily.html",Table:"event-vm",router:1,
                                            event_form:"event-form"
                                        },         
        "event-monthly":      	 	    {url:"$H/e/event-monthly.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            event_form:"event-form"
                                        },         
        "event-panel":      	 	    {url:"$H/e/event-panel.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            form_module:"event-form"
                                        },         
        "ffs-data":      	  			{url:"$H/f/flinders-fatigue-scale-data.html",Table:"ffs",form_module:"ffs-form"},
        "ffs-form":      	  			{url:"$H/f/flinders-fatigue-scale-form.html",Table:"ffs"},
        "file-data":      	  			{url:"$H/f/file-data.html",Table:"file",form_module:"file-form",router:1},
        "file-form":      	  			{url:"$H/f/file-form.html",Table:"file"},
        "fss-data":      	  			{url:"$H/f/fatigue-severity-scale-data.html",Table:"fss",form_module:"fss-form"},
        "fss-form":      	  			{url:"$H/f/fatigue-severity-scale-form.html",Table:"fss"},
        "form-maker":                   {url:"$H/f/form-maker.html",router:1},
        "fountains-illumination":		{url:"$H/f/fountains-illumination.html",router:1},
        //"frame":                        {url:"$H/f/frame.html"},
        "form-text-input-fields":       {url:"$H/f/form-text-input-fields.html",router:1},
        "form-sql-fields":              {url:"$H/f/form-sql-fields.html",router:1},
        "fitness":                      {url:"$H/f/fitness.html",router:1},
        "formio-data":                  {url:"$H/f/formio-data.html",Table:"formio-vm",form_module:"formio-form",router:1},
        "formio-form":                  {url:"$H/f/formio-form.html",Table:"formio-vm"},
        "forex-overview":	            {url:"$H/f/forex-overview.html",router:1},

        

        "home-woolcock": 		  		{url:"$H/h/home-woolcock.html",router:1},
        "hello-world": 		  			{url:"$H/h/hello-world.html",router:1},

        "incosact-data":   	  			{url:"$H/i/incosact-data.html",Table:"incosact",form_module:"incosact-english-form",router:1},
        "incosact-english-form":  		{url:"$H/i/incosact-english-form.html",Table:"incosact",router:1},
        "incosact-thanks-english":      {url:"$H/i/incosact-thanks-english.html",router:1},
        "isi-data":      	  			{url:"$H/i/insomnia-severity-index-data.html",Table:"isi",form_module:"isi-form"},
        "isi-form":      	  			{url:"$H/i/insomnia-severity-index-form.html",Table:"isi"},


        "image-with-title-on-hover": 	                            {url:"$H/i/image-with-title-on-hover.html",router:1},
        "image-and-title-with-scale-rotate-effect-on-hover": 	    {url:"$H/i/image-and-title-with-scale-rotate-effect-on-hover.html",router:1},
        "image-with-title-and-subtitle-on-hover": 	                {url:"$H/i/image-with-title-and-subtitle-on-hover.html",router:1},

        "layout-with-fixed-header-and-footer-index":                {url:"$H/l/layout-with-fixed-header-and-footer/index.html"},
        "layout-with-fixed-header-and-scrollable-footer-index":     {url:"$H/l/layout-with-fixed-header-and-scrollable-footer/index.html"},
        "layout-with-scrollable-header-and-footer-index":           {url:"$H/l/layout-with-scrollable-header-and-footer/index.html"},
        "layout-with-side-nav-and-fixed-footer-index":              {url:"$H/l/layout-with-side-nav-and-fixed-footer/index.html"},
        "long-page":  		  	 		                            {url:"$H/l/long-page.html",router:1},

        "medical-history-wf-data":      {url:"$H/m/medical-history-wf-data.html",Table:"medical-history-wf",form_module:"medical-history-wf-form"},
        "medical-history-wf-form":      {url:"$H/m/medical-history-wf-form.html",Table:"medical-history-wf"},
        "medication-data":              {url:"$H/m/medication-data.html",Table:"medication",form_module:"medication-form"},
        "medication-form":              {url:"$H/m/medication-form.html",Table:"medication"},
        "medical-practitioners-data":  	{url:"$H/m/medical-practitioners-data.html",Table:"vm-medical-practitioners",form_module:"medical-practitioners-form",router:1},
        "medical-practitioners-form":  	{url:"$H/m/medical-practitioners-form.html",Table:"vm-medical-practitioners"},

        "manager-list-data":  	        {url:"$H/e/email-list-data.html",Table:"manager-list",form_module:"manager-list-form",router:1},
        "manager-list-form":  	        {url:"$H/e/email-list-form.html",Table:"manager-list"},


        "notes":  		  	  			{url:"$H/n/notes.html"},
        "nasa":  		  	  			{url:"$H/n/nasa.html",router:1},
        "not-ready": 		            {url:"$H/u/under-construction.html",text:"Not Ready",router:1},
        "nyan":  		  	  			{url:"$H/n/nyan.html",router:1},

        "online-questionnaire-setup": 	    {url:"$H/o/online-questionnaire-setup.html",Table:"participant"},
        

        //"panel":    		  			{url:"$H/p/panel.html",router:1},
        "panel-main-biomarkers-ii":     {url:"$H/p/panel-biomarkers-ii/panel-main.html",router:1},
        
        "participant-data-biomarkers-ii":   {url:"$H/p/participant-data-biomarkers-ii.html", Table:"T91000570",
                                                form_module:"participant-form-biomarkers-ii",
                                                panel_child:"panel-child--biomarkers-ii",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form-biomarkers-ii":   {url:"$H/p/participant-form-biomarkers-ii.html", Table:"T91000570"},



        "particle":  		  			{url:"$H/p/particle.html",router:1},
        "particle-panel":  	  			{url:"$H/p/particle-panel.html",router:1},
        "prices":  		  	  			{url:"$H/p/prices.html",router:1},
        "price-02":  		  	 		{url:"$H/p/price-02.html",router:1},
        "psqi-data":                    {url:"$H/p/pittsburgh-sleep-quality-index-data.html",Table:"psqi",form_module:"psqi-form"},
        "psqi-form":   			        {url:"$H/p/pittsburgh-sleep-quality-index-form.html",Table:"psqi"},


        "pie-data":  	            {url:"$H/p/pie-data.html",Table:"pie",form_module:"pie-form",router:1},
        "pie-form":  	            {url:"$H/p/pie-form.html",Table:"pie"},
        "pie-chart":  	            {url:"$H/p/pie-chart.html",Table:"pie",router:1},
        "pie-chart-3d": 	        {url:"$H/p/pie-chart-3d.html",Table:"pie",router:1},
        "pie-chart-donut": 	        {url:"$H/p/pie-chart-donut.html",Table:"pie",router:1},

        "project-shq-data":         {
                                        url: "$H/p/project-shq-data.html", Table: "astn-shq-project-20003481", form_module: "project-shq-form", router: 1,
                                        child_panel: "panel-main-shq-astn"
                                    },
        "project-shq-form":         { url: "$H/p/project-shq-form.html", Table: "astn-shq-project-20003481" },

        
        "quest-panel":                  {url:"$H/o/online-questionnaire-panel.html"},

        "radio-data":      	  			{url:"$H/r/radio-data.html",Table:"radio",form_module:"radio-form",router:1},
        "radio-form":      	  			{url:"$H/r/radio-form.html",Table:"radio"},
        "room-booking-workflow":  		{url:"$H/r/room-booking-workflow.html",router:1},
        

        
        "reactjs-hello-world":                  {url:"$H/r/reactjs-hello-world.html",router:1},
        "reactjs-tic-tac-toe-passing-value":    {url:"$H/r/reactjs-tic-tac-toe-passing-value.html",router:1},
        "reactjs-tic-tac-toe-starter":          {url:"$H/r/reactjs-tic-tac-toe-starter.html",router:1},
        

        "sales-data":        			{url:"$H/s/sales-data.html",Table:"sales-vm",form_module:"sales-form",router:1},
        "sales-form":        			{url:"$H/s/sales-form.html",Table:"sales-vm"},
        "sales-item-data":       		{url:"$H/s/sales-item-data.html",Table:"sales-item-vm",form_module:"sales-item-form",router:1},
        "sales-item-form":       		{url:"$H/s/sales-item-form.html",Table:"sales-item-vm"},
        "sales-region-data":     		{url:"$H/s/sales-region-data.html",Table:"sales-region-vm",form_module:"sales-region-form",router:1},
        "sales-region-form":     		{url:"$H/s/sales-region-form.html",Table:"sales-region-vm"},
        "sales-rep-data":      			{url:"$H/s/sales-rep-data.html",Table:"sales-rep-vm",form_module:"sales-rep-form",router:1},
        "sales-rep-form":      			{url:"$H/s/sales-rep-form.html",Table:"sales-rep-vm"},
        "sales-monthly-aggregation-data":  {url:"$H/s/sales-monthly-aggregation-data.html",Table:"sales-monthlt-aggegation-vm",form_module:"sales-monthly-aggregation-form",router:1},
        "sales-monthly-aggregation-form":  {url:"$H/s/sales-monthly-aggregation-form.html",Table:"sales-monthlt-aggegation-vm",data_table:"sales-vm"},
        "sales-monthly-aggregation-chart": {url:"$H/s/sales-monthly-aggregation-chart.html",Table:"sales-monthlt-aggegation-vm",router:1},

        "screen-failure":      			{url:"$H/s/screen-failure-thank-you-page.html",router:1},
        "select-data":        			{url:"$H/s/select-data.html",Table:"select",form_module:"select-form",router:1},
        "select-form":        			{url:"$H/s/select-form.html",Table:"select"},
        "services":  	  	  			{url:"$H/s/services.html",router:1},
        "short-page":  		  	 		{url:"$H/s/short-page.html",router:1},
        "snow":  		  	  			{url:"$H/s/snow.html",router:1},
        "survey-data":      	  		{url:"$H/s/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$H/s/survey-form.html",Table:"survey-vm"},         
        "survey-panel":      	  		{url:"$H/s/survey-panel.html",Table:"survey-vm"},         
        "surveyjs-data":                {url:"$H/s/surveyjs-data.html",Table:"surveyjs-vm",form_module:"surveyjs-form",router:1},
        "surveyjs-form":                {url:"$H/s/surveyjs-form.html",Table:"surveyjs-vm"},
        "sleep-fix-homepage":           {url:"$H/s/sleep-fix-homepage.html"},
        "success-page":  		   		{url:"$H/s/success.html",router:1},

        "text-input-data":    			{url:"$H/t/text-input-data.html",Table:"text-input",form_module:"text-input-form",router:1},
        "text-input-form":    			{url:"$H/t/text-input-form.html",Table:"text-input"},
        "tom-knowledge-base-data":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-data.html",Table:"tom-knowledge-base",form_module:"tom-knowledge-base-form",router:1},
        "tom-knowledge-base-form":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-form.html",Table:"tom-knowledge-base"},
        "text-input-form":    			{url:"$H/t/text-input-form.html",Table:"text-input"},
        
        "trainers":  		  			{url:"$H/t/trainers.html",router:1},
        "template-001":  		  		{url:"$H/t/template-001/index.html"},
        "template-002":  		  		{url:"$H/t/template-002/index.html"},
        "template-003":  		  		{url:"$H/t/template-003/index.html"},
        "template-004":  		  		{url:"$H/t/template-004/index.html"},
        "template-005":  		  		{url:"$H/t/template-005/index.html"},
        "template-006":  		  		{url:"$H/t/template-006/index.html"},
        "template-007":  		  		{url:"$H/t/template-007/index.html"},
        "template-008":  		  		{url:"$H/t/template-008/index.html"},
        "template-009":  		  		{url:"$H/t/template-009/index.html"},
        "template-010":  		  		{url:"$H/t/template-010/index.html"},
        

        "under-construction": 		    {url:"$H/u/under-construction.html",text:"Under Construction",router:1},

        "visit-date-data":    			{url:"$H/v/visit-date-data.html",Table:"visit-date",form_module:"visit-date-form"},
        "visit-date-form":    			{url:"$H/v/visit-date-form.html",Table:"visit-date"},
        
        
        "portfolio":	                {url:"$H/c/components/portfolio.html",router:1},
        "structure":	                {url:"$H/c/components/structure.html",router:1},
        "c_services":  	  	  			{url:"$H/c/components/services.html",router:1},

        "food-data":    			    {url:"$H/f/food-data.html",Table:"food-demo",form_module:"food-form"},
        "food-form":    			    {url:"$H/f/food-form.html",Table:"food-demo"},
        "food-special":    			    {url:"$H/f/food-special.html",form_module:"food-form",router:1},
        
        "first-aid-officer-data":    	{url:"$H/f/first-aid-officer-data.html",Table:"first-aid-officer-demo",form_module:"first-aid-officer-form",router:1},
        "first-aid-officer-form":    	{url:"$H/f/first-aid-officer-form.html",Table:"first-aid-officer-demo"},
        "first-aid-officer-panel":      {url:"$H/f/first-aid-officer-panel.html",router:1},
        "flat-trial":    			    {url:"$H/f/flat-trial.html",router:1},
        "flat-trial-home": 			    {url:"$H/f/flat-trial-home.html",router:1},
        "aaxsys-panel":                 {url:"$H/a/aaxsys-panel.html",router:1},
    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //clinical trials
    var modules={
        "participant-data":   		        {url:"$H/c/clinical-trials/participant-data.html",Table:"participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-wapp",
                                                questionnaire_setup:"online-questionnaire-setup-wapp",
                                                online_questionnaire:"online-questionnaire-app-wapp"
                                            },
        "participant-form":   		        {url:"$H/c/clinical-trials/participant-form.html",Table:"participant"},
        
        "actigraphy-data":	                {url:"$H/c/clinical-trials/tasks/actigraphy-data.html",Table:"actigraphy-wapp",form_module:"actigraphy-form"},
        "actigraphy-form":	                {url:"$H/c/clinical-trials/tasks/actigraphy-form.html",Table:"actigraphy-wapp"},
        
        "actiwatch-data":	                {url:"$H/c/clinical-trials/tasks/actiwatch-data.html",Table:"actiwatch-wapp",form_module:"actiwatch-form"},
        "actiwatch-form":	                {url:"$H/c/clinical-trials/tasks/actiwatch-form.html",Table:"actiwatch-wapp"},
        "adverse-event-data":	            {url:"$H/c/clinical-trials/tasks/adverse-event-data.html",Table:"adverse-eevent-wapp",form_module:"adverse-eevent-form"},
        "adverse-eevent-form":	            {url:"$H/c/clinical-trials/tasks/adverse-event-form.html",Table:"adverse-eevent-wapp"},
        "background-information-data":      {url:"$H/w/wapp-tasks/background-information-data.html",Table:"background-information-wapp",form_module:"background-information-form"},
        "background-information-form":      {url:"$H/w/wapp-tasks/background-information-form.html",Table:"background-information-wapp",task_name:"Background information"},
        "consent-data":  			        {url:"$H/c/clinical-trials/tasks/consent-data.html",Table:"consent-wapp",form_module:"consent-form"},
        "consent-form":  			        {url:"$H/c/clinical-trials/tasks/consent-form.html",Table:"consent-wapp",task_name:"Consent"},
        "dass-data":	 	                {url:"$H/c/clinical-trials/tasks/dass-data.html",Table:"dass-wapp",form_module:"dass-form"},
        "dass-form":	 	                {url:"$H/c/clinical-trials/tasks/dass-form.html",Table:"dass-wapp"},
        "ess-data":       			        {url:"$H/c/clinical-trials/tasks/ess-data.html",Table:"ess-wapp",form_module:"ess-form"},
        "ess-form":       			        {url:"$H/c/clinical-trials/tasks/ess-form.html",Table:"ess-wapp"},
        "ethnicity-data":    		        {url:"$H/c/clinical-trials/tasks/ethnicity-self-data.html",Table:"ethnicity-wapp",form_module:"ethnicity-form"},
        "ethnicity-form":    		        {url:"$H/c/clinical-trials/tasks/ethnicity-self-form.html",Table:"ethnicity-wapp"},
        "family-sleep-history-data":        {url:"$H/c/clinical-trials/tasks/family-sleep-history-data.html",Table:"family-sleep-history-wapp",form_module:"family-sleep-history-form"},
        "family-sleep-history-form":        {url:"$H/c/clinical-trials/tasks/family-sleep-history-form.html",Table:"family-sleep-history-wapp"},
        "fosq-data":      	  		        {url:"$H/c/clinical-trials/tasks/fosq-data.html",Table:"fosq-wapp",form_module:"fosq-form"},
        "fosq-form":      	  		        {url:"$H/c/clinical-trials/tasks/fosq-form.html",Table:"fosq-wapp"},
        "isi-data":      	  		        {url:"$H/c/clinical-trials/tasks/isi-data.html",Table:"isi-wapp",form_module:"isi-form"},
        "isi-form":      	  		        {url:"$H/c/clinical-trials/tasks/isi-form.html",Table:"isi-wapp"},
        "isi2-data":      	  		        {url:"$H/c/clinical-trials/tasks/insomnia-severity-index-data.html",Table:"isi-wapp",form_module:"isi2-form"},
        "isi2-form":      	  		        {url:"$H/c/clinical-trials/tasks/insomnia-severity-index-form.html",Table:"isi-wapp"},
        "screening-data": 			        {url:"$H/c/clinical-trials/tasks/screening-data.html",Table:"screening",form_module:"screening-form"},
        "screening-form": 			        {url:"$H/c/clinical-trials/tasks/screening-form.html",Table:"screening"},
        "sdp-data":     		            {url:"$H/c/clinical-trials/tasks/sleep-disorder-patterns-data.html",Table:"sdp-wapp",form_module:"sdp-form"},
        "sdp-form":     		            {url:"$H/c/clinical-trials/tasks/sleep-disorder-patterns-form.html",Table:"sdp-wapp"},
        
        "psqi-data":     		            {url:"$H/c/clinical-trials/tasks/pittsburgh-sleep-quality-index-data.html",Table:"psqi-wapp",form_module:"psqi-form"},
        "psqi-form":     		            {url:"$H/c/clinical-trials/tasks/pittsburgh-sleep-quality-index-form.html",Table:"psqi-wapp"},
        "ffs-data":     		            {url:"$H/c/clinical-trials/tasks/flinders-fatigue-scale-data.html",Table:"ffs-wapp",form_module:"ffs-form"},
        "ffs-form":     		            {url:"$H/c/clinical-trials/tasks/flinders-fatigue-scale-form.html",Table:"ffs-wapp"},
        "fss-data":     		            {url:"$H/c/clinical-trials/tasks/fatigue-severity-scale-data.html",Table:"fss-wapp",form_module:"fss-form"},
        "fss-form":     		            {url:"$H/c/clinical-trials/tasks/fatigue-severity-scale-form.html",Table:"fss-wapp"},
        
        "wa-data":    			            {url:"$H/c/clinical-trials/tasks/wa-data.html",Table:"wa-wapp",form_module:"wa-form"},
        "wa-form":    			            {url:"$H/c/clinical-trials/tasks/wa-form.html",Table:"wa-wapp"},
        "visit-date-data":    			    {url:"$H/c/clinical-trials/tasks/visit-date-data.html",Table:"visit-date-wapp",form_module:"visit-date-form"},
        "visit-date-form":    			    {url:"$H/c/clinical-trials/tasks/visit-date-form.html",Table:"visit-date-wapp"},
        
        "demographics-data":    		    {url:"$H/c/clinical-trials/tasks/demographics-data.html",Table:"demographics-wapp",form_module:"demographics-form"},
        "demographics-form":    		    {url:"$H/c/clinical-trials/tasks/demographics-form.html",Table:"demographics-wapp"},
        
        "anthropometry-data":    		    {url:"$H/c/clinical-trials/tasks/anthropometry-data.html",Table:"anthropometry-wapp",form_module:"anthropometry-form"},
        "anthropometry-form":    		    {url:"$H/c/clinical-trials/tasks/anthropometry-form.html",Table:"anthropometry-wapp"},
        
        "ecg-report-upload-data":    	    {url:"$H/c/clinical-trials/tasks/ecg-report-upload-data.html",Table:"ecg-report-upload-wapp",form_module:"ecg-report-upload-form"},
        "ecg-report-upload-form":    	    {url:"$H/c/clinical-trials/tasks/ecg-report-upload-form.html",Table:"ecg-report-upload-wapp"},
        
        "nback1-data":    	                {url:"$H/c/clinical-trials/tasks/nback1-data.html",Table:"nback1-demo", form_module:"nback1-form",game_module:"nback1-game",router:1},
        "nback1-form":    	                {url:"$H/c/clinical-trials/tasks/nback1-form.html",Table:"nback1-demo"},
        "nback1-game":    	                {url:"$H/c/clinical-trials/tasks/nback1-game.html",Table:"nback1-demo"},
        
        "dsst-data":    	                {url:"$H/c/clinical-trials/tasks/dsst-data.html",Table:"dsst-demo", form_module:"dsst-form",game_module:"dsst-game",router:1},
        "dsst-form":    	                {url:"$H/c/clinical-trials/tasks/dsst-form.html",Table:"dsst-demo"},
        "dsst-game":    	                {url:"$H/c/clinical-trials/tasks/dsst-game.html",Table:"dsst-demo"},
    }
    url_replace(modules,"clinical-trials-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //apap
    var modules={
        "panel-main-apap":    			{url:"$H/p/panel-apap/panel-main.html",router:1},
        "panel-child-apap":    			{url:"$H/p/panel-apap/panel-child.html"},
        
        "participant-data-apap":   		{url:"$H/p/participant-data-apap.html",Table:"apap-participant",form_module:"participant-form-apap",router:1,
                                            child_panel:"panel-child-apap",
                                            questionnaire_setup:"online-questionnaire-setup-apap",
                                            online_questionnaire:"online-questionnaire-app-apap"
                                        },
        "participant-form-apap":   		{url:"$H/p/participant-form-apap.html",Table:"apap-participant"},

        "notes":  		  	  			{url:"$H/n/notes.html"},

        "anthropometry-data-apap":		    {url:"$H/a/apap-tasks/anthropometry-data.html",Table:"anthropometry",form_module:"anthropometry-form-apap"},
        "anthropometry-form-apap":		    {url:"$H/a/apap-tasks/anthropometry-form.html",Table:"anthropometry"},
        "adverseevents-data-apap":	        {url:"$H/a/apap-tasks/adverseevents-data.html",Table:"cpap-adverseevents",form_module:"adverseevents-form-apap"},
        "adverseevents-form-apap":	        {url:"$H/a/apap-tasks/adverseevents-form.html",Table:"cpap-adverseevents"},
        "adverseevents-data-3m-apap":	    {url:"$H/a/apap-tasks/adverseevents-data.html",Table:"cpap-adverseevents-3m",form_module:"adverseevents-form-3m-apap"},
        "adverseevents-form-3m-apap":	    {url:"$H/a/apap-tasks/adverseevents-form.html",Table:"cpap-adverseevents-3m"},

        "bloodgas-data-apap":                   {url:"$H/b/bloodgas-data-apap.html",Table:"bloodgas-apap",form_module:"bloodgas-form-apap"},
        "bloodgas-form-apap":                   {url:"$H/b/bloodgas-form-apap.html",Table:"bloodgas-apap"},
        "bloodgas-data-1m-apap":                {url:"$H/b/bloodgas-data-apap.html",Table:"bloodgas-1m-apap",form_module:"bloodgas-form-1m-apap"},
        "bloodgas-form-1m-apap":                {url:"$H/b/bloodgas-form-apap.html",Table:"bloodgas-1m-apap"},
        "bloodgas-data-3m-apap":                {url:"$H/b/bloodgas-data-apap.html",Table:"bloodgas-3m-apap",form_module:"bloodgas-form-3m-apap"},
        "bloodgas-form-3m-apap":                {url:"$H/b/bloodgas-form-apap.html",Table:"bloodgas-3m-apap"},
        "blood-data-apap":                      {url:"$H/b/blood-data-apap.html",Table:"blood-apap",form_module:"blood-form-apap"},
        "blood-form-apap":                      {url:"$H/b/blood-form-apap.html",Table:"blood-apap"},
        "blood-data-3m-apap":                   {url:"$H/b/blood-data-apap.html",Table:"blood-3m-apap",form_module:"blood-form-3m-apap"},
        "blood-form-3m-apap":                   {url:"$H/b/blood-form-apap.html",Table:"blood-3m-apap"},

        "clinical-trials-app-apap":     {url:"$H/c/clinical-trials-apap/index.html"},
        "consent-form-upload-data-apap":{url:"$H/c/consent-form-upload-data-apap.html",Table:"consent-form",form_module:"consent-form-upload-form-apap"},
        "consent-form-upload-form-apap":{url:"$H/c/consent-form-upload-form-apap.html",Table:"consent-form"},
        "contact-details-data":   		{url:"$H/c/contact-details-data.html",Table:"contact-details",form_module:"contact-details-form",router:1},
        "contact-details-form":   		{url:"$H/c/contact-details-form.html",Table:"contact-details"},

        "cpapdownload-data-apap":   	{url:"$H/c/cpapdownload-data-apap.html",Table:"cpapdownload-apap",form_module:"cpapdownload-form-apap"},
        "cpapdownload-form-apap":   	{url:"$H/c/cpapdownload-form-apap.html",Table:"cpapdownload-apap"},
        "cpapdownload-data-3m-apap":   	{url:"$H/c/cpapdownload-data-apap.html",Table:"cpapdownload-3m-apap",form_module:"cpapdownload-form-3m-apap"},
        "cpapdownload-form-3m-apap":   	{url:"$H/c/cpapdownload-form-apap.html",Table:"cpapdownload-3m-apap"},

        "ess-data-apap":       			{url:"$H/e/epworth-sleepiness-scale-data-apap.html",Table:"ess",form_module:"ess-form-apap"},
        "ess-form-apap":       			{url:"$H/e/epworth-sleepiness-scale-form-apap.html",Table:"ess",task_name:"Visit 1 - Epworth Sleepiness Scale"},
        "ess-data-3m-apap":     		{url:"$H/e/epworth-sleepiness-scale-data-apap.html",Table:"ess-3m-apap",form_module:"ess-form-3m-apap"},
        "ess-form-3m-apap":     		{url:"$H/e/epworth-sleepiness-scale-form-apap.html",Table:"ess-3m-apap",task_name:"3 Month - Epworth Sleepiness Scale"},
        "ecg-data-apap":   	  			{url:"$H/e/ecg-data-apap.html",Table:"ecg-apap",form_module:"ecg-form-apap"},
        "ecg-form-apap":   	  			{url:"$H/e/ecg-form-apap.html",Table:"ecg-apap"},
        "ecg-data-3m-apap":   	  		{url:"$H/e/ecg-data-apap.html",Table:"ecg-3m-apap",form_module:"ecg-form-3m-apap"},
        "ecg-form-3m-apap":   	  		{url:"$H/e/ecg-form-apap.html",Table:"ecg-3m-apap"},
        
        "fosq-data-apap":  	  			{url:"$H/f/functional-outcome-of-sleepquestionnaire-data-apap.html",Table:"fosq-apap",form_module:"fosq-form-apap"},
        "fosq-form-apap":  	  			{url:"$H/f/functional-outcome-of-sleepquestionnaire-form-apap.html",Table:"fosq-apap",task_name:"Visit 1 - Functional Outcomes of Sleep Questionnaire"},
        "fosq-data-3m-apap":  	  		{url:"$H/f/functional-outcome-of-sleepquestionnaire-data-apap.html",Table:"fosq-3m-apap",form_module:"fosq-form-3m-apap"},
        "fosq-form-3m-apap":  	  		{url:"$H/f/functional-outcome-of-sleepquestionnaire-form-apap.html",Table:"fosq-3m-apap",task_name:"3 Month - Functional Outcomes of Sleep Questionnaire"},
        
        "medical-history-data-apap":    {url:"$H/m/medical-history-data-apap.html",Table:"medical-history",form_module:"medical-history-form-apap"},
        "medical-history-form-apap":    {url:"$H/m/medical-history-form-apap.html",Table:"medical-history"},
        "medication-data-apap":         {url:"$H/m/medication-data-apap.html",Table:"medication-apap",form_module:"medication-form-apap"},
        "medication-form-apap":         {url:"$H/m/medication-form-apap.html",Table:"medication-apap"},
        
        "online-questionnaire-setup-apap": 	{url:"$H/o/online-questionnaire-setup-apap.html",Table:"apap-participant"},
        "online-questionnaire-app-apap":    {url:"$H/o/online-questionnaire-apap/index.html"},
        

        "pwa-data-apap":	            {url:"$H/p/pwa-data-apap.html",Table:"pwa-apap",form_module:"pwa-form-apap"},
        "pwa-form-apap":	            {url:"$H/p/pwa-form-apap.html",Table:"pwa-apap"},
        "pwa2-data-apap":	            {url:"$H/p/pwa-data-apap.html",Table:"pwa2-apap",form_module:"pwa2-form-apap"},
        "pwa2-form-apap":	            {url:"$H/p/pwa-form-apap.html",Table:"pwa2-apap"},
        "pwa-data-3m-apap":	            {url:"$H/p/pwa-data-apap.html",Table:"pwa-3m-apap",form_module:"pwa-form-3m-apap"},
        "pwa-form-3m-apap":	            {url:"$H/p/pwa-form-apap.html",Table:"pwa-3m-apap"},
        "pwa2-data-3m-apap":	        {url:"$H/p/pwa-data-apap.html",Table:"pwa2-3m-apap",form_module:"pwa2-form-3m-apap"},
        "pwa2-form-3m-apap":	        {url:"$H/p/pwa-form-apap.html",Table:"pwa2-3m-apap"},
        "pwv-data-apap":	            {url:"$H/p/pwv-data-apap.html",Table:"pwv-apap",form_module:"pwv-form-apap"},
        "pwv-form-apap":	            {url:"$H/p/pwv-form-apap.html",Table:"pwv-apap"},
        "pwv2-data-apap":	            {url:"$H/p/pwv-data-apap.html",Table:"pwv2-apap",form_module:"pwv2-form-apap"},
        "pwv2-form-apap":	            {url:"$H/p/pwv-form-apap.html",Table:"pwv2-apap"},
        "pwv-data-3m-apap":	            {url:"$H/p/pwv-data-apap.html",Table:"pwv-3m-apap",form_module:"pwv-form-3m-apap"},
        "pwv-form-3m-apap":	            {url:"$H/p/pwv-form-apap.html",Table:"pwv-3m-apap"},
        "pwv2-data-3m-apap":	        {url:"$H/p/pwv-data-apap.html",Table:"pwv2-3m-apap",form_module:"pwv2-form-3m-apap"},
        "pwv2-form-3m-apap":	        {url:"$H/p/pwv-form-apap.html",Table:"pwv2-3m-apap"},
        
        "pressureapap-data-apap":       {url:"$H/p/pressureapap-data-apap.html",Table:"pressureapap-apap",form_module:"pressureapap-form-apap"},
        "pressureapap-form-apap":	    {url:"$H/p/pressureapap-form-apap.html",Table:"pressureapap-apap"},
        "pressurecpap-data-apap":       {url:"$H/p/pressurecpap-data-apap.html",Table:"pressurecpap-apap",form_module:"pressurecpap-form-apap"},
        "pressurecpap-form-apap":	    {url:"$H/p/pressurecpap-form-apap.html",Table:"pressurecpap-apap"},

        "physical-examination-data-apap":{url:"$H/p/physical-examination-data-apap.html",Table:"physical-examination",form_module:"physical-examination-form-apap"},
        "physical-examination-form-apap":{url:"$H/p/physical-examination-form-apap.html",Table:"physical-examination"},

        "randomisation-table-low-data-apap": {url:"$H/r/randomisation-table-data-apap.html",Table:"apap-randomisation-low",form_module:"randomisation-table-low-form-apap"},
        "randomisation-table-low-form-apap": {url:"$H/r/randomisation-table-form-apap.html",Table:"apap-randomisation-low"},
        "randomisation-table-high-data-apap":{url:"$H/r/randomisation-table-data-apap.html",Table:"apap-randomisation-high",form_module:"randomisation-table-high-form-apap"},
        "randomisation-table-high-form-apap":{url:"$H/r/randomisation-table-form-apap.html",Table:"apap-randomisation-high"},
        
        "social-history-data-apap":    	{url:"$H/s/social-history-data-apap.html",Table:"social-history",form_module:"social-history-form-apap"},
        "social-history-form-apap":    	{url:"$H/s/social-history-form-apap.html",Table:"social-history"},
        "spirometry-data-apap":      	{url:"$H/s/spirometry-data-apap.html",Table:"spirometry-apap",form_module:"spirometry-form-apap"},
        "spirometry-form-apap":      	{url:"$H/s/spirometry-form-apap.html",Table:"spirometry-apap"},
        "spirometry-data-1m-apap":     	{url:"$H/s/spirometry-data-apap.html",Table:"spirometry-1m-apap",form_module:"spirometry-form-1m-apap"},
        "spirometry-form-1m-apap":     	{url:"$H/s/spirometry-form-apap.html",Table:"spirometry-1m-apap"},
        "sri-data-apap":      	        {url:"$H/s/sri-data-apap.html",Table:"sri-apap",form_module:"sri-form-apap"},
        "sri-form-apap":      	        {url:"$H/s/sri-form-apap.html",Table:"sri-apap",task_name:"Visit 1 - Severe Respiratory Insufficiency Questionnaire"},
        "sri-data-3m-apap":             {url:"$H/s/sri-data-apap.html",Table:"sri-3m-apap",form_module:"sri-form-3m-apap"},
        "sri-form-3m-apap":             {url:"$H/s/sri-form-apap.html",Table:"sri-3m-apap",task_name:"3 Month - Severe Respiratory Insufficiency Questionnaire"},


    }
    url_replace(modules,"","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //biomakers-ii
    var modules={
        
        //the following are all biomarkers-ii-tasks
        "visit-dates-data":	  		                    {url:"$H/b/biomarkers-ii-tasks/visit-dates-data.html",Table:"91000581",form_module:"visit-dates-form"},
        "visit-dates-form":	  		                    {url:"$H/b/biomarkers-ii-tasks/visit-dates-form.html",Table:"91000581"},

        // Column 2, Screening visit
        "in-exclusion-criteria-data":                   {url:"$H/b/biomarkers-ii-tasks/in-exclusion-criteria-data.html",Table:"91000582",form_module:"in-exclusion-criteria-form"},
        "in-exclusion-criteria-form":	 	            {url:"$H/b/biomarkers-ii-tasks/in-exclusion-criteria-form.html",Table:"91000582"},
        "anthropometry-data":	                        {url:"$H/b/biomarkers-ii-tasks/anthropometry-data.html",Table:"91000572",form_module:"anthropometry-form"},
        "anthropometry-form":	 	                    {url:"$H/b/biomarkers-ii-tasks/anthropometry-form.html",Table:"91000572"},
        "education-data":	                            {url:"$H/b/biomarkers-ii-tasks/education-data.html",Table:"91000583",form_module:"education-form"},
        "education-form":	 	                        {url:"$H/b/biomarkers-ii-tasks/education-form.html",Table:"91000583"},
        // Column 2, Baseline psychometry
        "state-trait-anxiety-inventory-data":           {url:"$H/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-data.html",Table:"91000579",form_module:"state-trait-anxiety-inventory-form"},
        "state-trait-anxiety-inventory-form":           {url:"$H/b/biomarkers-ii-tasks/state-trait-anxiety-inventory-form.html",Table:"91000579"},
        "thermoregulatory-index-data":                  {url:"$H/b/biomarkers-ii-tasks/thermoregulatory-index-data.html",Table:"91000580",form_module:"thermoregulatory-index-form"},
        "thermoregulatory-index-form":                  {url:"$H/b/biomarkers-ii-tasks/thermoregulatory-index-form.html",Table:"91000580"},
        "driving-accident-history-data":                {url:"$H/b/biomarkers-ii-tasks/driving-accident-history-data.html",Table:"91000575",form_module:"driving-accident-history-form"},
        "driving-accident-history-form":                {url:"$H/b/biomarkers-ii-tasks/driving-accident-history-form.html",Table:"91000575"},
        
        // Column 3, Ambulatory week
        "sleep-diary-d1-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000600",form_module:"sleep-diary-d1-form"},
        "sleep-diary-d1-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000600",task_name:"Sleep Diary - day 1, fill out in the morning"},
        "sleep-diary-d2-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000601",form_module:"sleep-diary-d2-form"},
        "sleep-diary-d2-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000601",task_name:"Sleep Diary - day 2, fill out in the morning"},
        "sleep-diary-d3-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000602",form_module:"sleep-diary-d3-form"},
        "sleep-diary-d3-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000602",task_name:"Sleep Diary - day 3, fill out in the morning"},
        "sleep-diary-d4-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000603",form_module:"sleep-diary-d4-form"},
        "sleep-diary-d4-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000603",task_name:"Sleep Diary - day 4, fill out in the morning"},
        "sleep-diary-d5-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000604",form_module:"sleep-diary-d5-form"},
        "sleep-diary-d5-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000604",task_name:"Sleep Diary - day 5, fill out in the morning"},
        "sleep-diary-d6-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000605",form_module:"sleep-diary-d6-form"},
        "sleep-diary-d6-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000605",task_name:"Sleep Diary - day 6, fill out in the morning"},
        "sleep-diary-d7-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000606",form_module:"sleep-diary-d7-form"},
        "sleep-diary-d7-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000606",task_name:"Sleep Diary - day 7, fill out in the morning"},
        "sleep-diary-d8-data":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-data.html",Table:"91000607",form_module:"sleep-diary-d8-form"},
        "sleep-diary-d8-form":                          {url:"$H/b/biomarkers-ii-tasks/sleep-diary-form.html",Table:"91000607",task_name:"Sleep Diary - day 8, fill out in the morning"},
        "day-diary-d1-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000608",form_module:"day-diary-d1-form"},
        "day-diary-d1-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000608",task_name:"Day Diary - day 1, fill out in the evening",router:1},
        "day-diary-d2-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000609",form_module:"day-diary-d2-form"},
        "day-diary-d2-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000609",task_name:"Day Diary - day 2, fill out in the evening"},
        "day-diary-d3-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000610",form_module:"day-diary-d3-form"},
        "day-diary-d3-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000610",task_name:"Day Diary - day 3, fill out in the evening"},
        "day-diary-d4-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000611",form_module:"day-diary-d4-form"},
        "day-diary-d4-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000611",task_name:"Day Diary - day 4, fill out in the evening"},
        "day-diary-d5-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000612",form_module:"day-diary-d5-form"},
        "day-diary-d5-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000612",task_name:"Day Diary - day 5, fill out in the evening"},
        "day-diary-d6-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000613",form_module:"day-diary-d6-form"},
        "day-diary-d6-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000613",task_name:"Day Diary - day 6, fill out in the evening"},
        "day-diary-d7-data":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-data.html",Table:"91000614",form_module:"day-diary-d7-form"},
        "day-diary-d7-form":                            {url:"$H/b/biomarkers-ii-tasks/day-diary-form.html",Table:"91000614",task_name:"Day Diary - day 7, fill out in the evening"},
        "actigraphy-ambulatory-data":                   {url:"$H/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000592",form_module:"actigraphy-ambulatory-form"},
        "actigraphy-ambulatory-form":                   {url:"$H/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000592"},
        
        // Column 4, Experimental visit
        "psg-evening-questionnaire-data":               {url:"$H/b/biomarkers-ii-tasks/psg-evening-questionnaire-data.html",Table:"91000586",form_module:"psg-evening-questionnaire-form"},
        "psg-evening-questionnaire-form":               {url:"$H/b/biomarkers-ii-tasks/psg-evening-questionnaire-form.html",Table:"91000586"},
        "psg-300-data":                                 {url:"$H/b/biomarkers-ii-tasks/psg-300-data.html",Table:"91000591",form_module:'psg-300-form'},
        "psg-300-form":                                 {url:"$H/b/biomarkers-ii-tasks/psg-300-form.html",Table:"91000591"},
        "actigraphy-laboratory-data":                   {url:"$H/b/biomarkers-ii-tasks/actigraphy-data.html",Table:"91000593",form_module:"actigraphy-laboratory-form"},
        "actigraphy-laboratory-form":                   {url:"$H/b/biomarkers-ii-tasks/actigraphy-form.html",Table:"91000593"},
        "psg-morning-questionnaire-data":               {url:"$H/b/biomarkers-ii-tasks/psg-morning-questionnaire-data.html",Table:"91000587",form_module:"psg-morning-questionnaire-form"},
        "psg-morning-questionnaire-form":               {url:"$H/b/biomarkers-ii-tasks/psg-morning-questionnaire-form.html",Table:"91000587"},
        "habitual-bedtimes-data":                       {url:"$H/b/biomarkers-ii-tasks/habitual-bedtimes-data.html",Table:"91000588",form_module:"habitual-bedtimes-form"},
        "habitual-bedtimes-form":                       {url:"$H/b/biomarkers-ii-tasks/habitual-bedtimes-form.html",Table:"91000588"},
        "karolinska-sleepiness-scale-data":             {url:"$H/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-data.html",Table:"91000589",form_module:"karolinska-sleepiness-scale-form"},
        "karolinska-sleepiness-scale-form":             {url:"$H/b/biomarkers-ii-tasks/karolinska-sleepiness-scale-form.html",Table:"91000589"},
        "post-test-self-assessment-data":               {url:"$H/b/biomarkers-ii-tasks/post-test-self-assessment-data.html",Table:"91000590",form_module:"post-test-self-assessment-form"},
        "post-test-self-assessment-form":               {url:"$H/b/biomarkers-ii-tasks/post-test-self-assessment-form.html",Table:"91000590"},
        
        // Column 4, tasks
        "pvt-data":                                     {url:"$H/b/biomarkers-ii-tasks/pvt-data.html",Table:"91000591",form_module:'pvt-form'},
        "pvt-form":                                     {url:"$H/b/biomarkers-ii-tasks/pvt-form.html",Table:"91000591"},
        "choice-reaction-time-data":                    {url:"$H/b/biomarkers-ii-tasks/choice-reaction-time-data.html",Table:"91000594",form_module:'choice-reaction-time-form'},
        "choice-reaction-time-form":                    {url:"$H/b/biomarkers-ii-tasks/choice-reaction-time-form.html",Table:"91000594"},
        "karolinska-drowsiness-test-data":              {url:"$H/b/biomarkers-ii-tasks/karolinska-drowsiness-test-data.html",Table:"91000595",form_module:'karolinska-drowsiness-test-form'},
        "karolinska-drowsiness-test-form":              {url:"$H/b/biomarkers-ii-tasks/karolinska-drowsiness-test-form.html",Table:"91000595"},
        "maintenance-wakefulness-test-data":            {url:"$H/b/biomarkers-ii-tasks/maintenance-wakefulness-test-data.html",Table:"91000596",form_module:'maintenance-wakefulness-test-form'},
        "maintenance-wakefulness-test-form":            {url:"$H/b/biomarkers-ii-tasks/maintenance-wakefulness-test-form.html",Table:"91000596"},
        
    }
    url_replace(modules,"biomarkers-ii-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //isleephealth
    var modules = {
        "appointment-workflow": { url: "$H/i/isleephealth/appointment-workflow.html",router:1},
        "appointment-data":     { url: "$H/i/isleephealth/appointment-data.html", Table: "appointment", form_module: "appointment-form",router:1},
        "appointment-form":     { url: "$H/i/isleephealth/appointment-form.html", Table: "appointment"},
    }
    url_replace(modules,"isleephealth-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
    //template-001
    var modules={
        "footer": {url:"$H/t/template-001/modules/footer.html"},
    }
    url_replace(modules,"template-001-","$H","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
