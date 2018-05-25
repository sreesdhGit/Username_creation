$(document).ready(function(){
	$('#userName').on("input", function(event) {	
		 var dInput = this.value;
	
	   var regex = /[`~!@#$%^&*()_|+\-=?;:'"" ",.<>\{\}\[\]\\\/]/;
		var isSplChar = regex.test(dInput);
		if(isSplChar)
		{
			var noSplChar = dInput.replace(regex, '');
			console.log(noSplChar);
			$(this).val(noSplChar);
		}
	else{
		if(dInput.length>=6){		
		$(".cross").attr("id","validated")
		$(".cross").attr("class","tick")
		if(1==1){
			$(".unamelist").attr("id","validated")
			$(".unamelist").attr("class","loader")
			setTimeout(myFunction, 1000);
		}
		
	}else{
		$( ".tick" ).attr("id", "invalid")
		$( ".tick" ).attr("class", "cross")
		
		}
	}
	
	function myFunction() {
    	$("li:last-child").attr("class","tick")
}
		 
	
});

	   



});