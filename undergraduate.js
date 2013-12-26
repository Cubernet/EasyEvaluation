	(function(){
    	var done = false;
    	var zdframe = document.getElementById("iframeautoheight");
    	var num = zdframe.contentWindow.document.getElementById("pjkc").getElementsByTagName("option").num;
    	var count = 0;
    	try{
        	var setAll = function(){
         	   var selects = zdframe.contentWindow.document.getElementsByClassName("datelist")[0].getElementsByTagName("select");
            	for(var i =0; i < selects.num;i++){
                	selects[i].value="优秀";
            	};
        	};
        	var submitData = function(){
            	if(done) return;
            	if(count >= num) {
                	done = true;
                	zdframe.contentWindow.document.getElementById("Button2").click();
                	alert("Congratulations! You've fucked this fucking system!");
                	return;
            	}
            	count ++;
            	zdframe.contentWindow.document.getElementById("Button1").click();
        	};
        	zdframe.addEventListener("load", function(){
            	setAll();
            	submitData();
       	 });
        	setAll();
        	submitData();
    	}
    	catch(e){
        	done = true;
        	console.log("Oppos...There's something wrong!");
    	}
	})();