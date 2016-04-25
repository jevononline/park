(function($){
	$.fn.initial=function(){
		step1View();
		step2View();
		step3View();
		step4View();
		step5View();
		step6View();
		step7View();
		step8View();
		selectBind();
	}
	var selectBind=function(){
		$("#year-select").on('change',this,function(){
		step1View();
		step2View();
		step3View();
		step4View();
		step5View();
		step6View();
		step7View();
		step8View();
		})
	}
	var step1View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body1");
		body.html('');
		$.ajax({
			url:"getStep1s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data['id']+ '</td>');
						tr.append('<td>' + data['linshigong']+ '</td>');
						tr.append('<td>' + data['jishugong']+ '</td>');
						tr.append('<td>' + data['xiaohao']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['xiaohao']+ '</td>');
						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step2View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body2");
		body.html('');
		$.ajax({
			url:"getStep2s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['jiqi1']+ '</td>');
						tr.append('<td>' + data[i]['jiqi2']+ '</td>');
						tr.append('<td>' + data[i]['jiqi3']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['jiqi1']+ '</td>');
						tr.append('<td>' + data[i]['jiqi2']+ '</td>');
						tr.append('<td>' + data[i]['jiqi3']+ '</td>');
						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step3View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body3");
		body.html('');
		$.ajax({
			url:"getStep3s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data['id']+ '</td>');
						tr.append('<td>' + data['linshigong']+ '</td>');
						tr.append('<td>' + data['jishugong']+ '</td>');
						tr.append('<td>' + data['xiaohao']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
							var tr = $("<tr></tr>");
							tr.append('<td>' + data[i]['id']+ '</td>');
							tr.append('<td>' + data[i]['linshigong']+ '</td>');
							tr.append('<td>' + data[i]['jishugong']+ '</td>');
							tr.append('<td>' + data[i]['xiaohao']+ '</td>');
							if( i % 2 == 0){
								tr.addClass('info');
							}else{
								tr.addClass('warning');
							}
							body.append(tr);
						}
					}
					
				}
				else {
				//	alert(message);
				}
			},
		})
	}
	
	var step4View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body4");
		body.html('');
		$.ajax({
			url:"getStep4s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data['id']+ '</td>');
						tr.append('<td>' + data['name']+ '</td>');
						tr.append('<td>' + data['linshigong']+ '</td>');
						tr.append('<td>' + data['jishugong']+ '</td>');
						tr.append('<td>' + data['xiaohao']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
							var tr = $("<tr></tr>");
							tr.append('<td>' + data[i]['id']+ '</td>');
							tr.append('<td>' + data[i]['name']+ '</td>');
							tr.append('<td>' + data[i]['linshigong']+ '</td>');
							tr.append('<td>' + data[i]['jishugong']+ '</td>');
							tr.append('<td>' + data[i]['xiaohao']+ '</td>');
							if( i % 2 == 0){
								tr.addClass('info');
							}else{
								tr.addClass('warning');
							}
							body.append(tr);
						}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step5View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body5");
		body.html('');
		$.ajax({
			url:"getStep5s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['yjwjfh']+ '</td>');
						tr.append('<td>' + data[i]['elsgnd']+ '</td>');
						tr.append('<td>' + data[i]['ns']+ '</td>');
						tr.append('<td>' + data[i]['lsen']+ '</td>');
						tr.append('<td>' + data[i]['lsj']+ '</td>');
						tr.append('<td>' + data[i]['lf']+ '</td>');
						tr.append('<td>' + data[i]['yjf']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['yjwjfh']+ '</td>');
						tr.append('<td>' + data[i]['elsgnd']+ '</td>');
						tr.append('<td>' + data[i]['ns']+ '</td>');
						tr.append('<td>' + data[i]['lsen']+ '</td>');
						tr.append('<td>' + data[i]['lsj']+ '</td>');
						tr.append('<td>' + data[i]['lf']+ '</td>');
						tr.append('<td>' + data[i]['yjf']+ '</td>');
						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step6View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body6");
		body.html('');
		$.ajax({
			url:"getStep6s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['ccj']+ '</td>');
						tr.append('<td>' + data[i]['mcj']+ '</td>');

						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['ccj']+ '</td>');
						tr.append('<td>' + data[i]['mcj']+ '</td>');

						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step7View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body7");
		body.html('');
		$.ajax({
			url:"getStep7s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['zhugan15']+ '</td>');
						tr.append('<td>' + data[i]['zhugan30']+ '</td>');
						tr.append('<td>' + data[i]['masheng']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						tr.append('<td>' + data[i]['zhugan15']+ '</td>');
						tr.append('<td>' + data[i]['zhugan30']+ '</td>');
						tr.append('<td>' + data[i]['masheng']+ '</td>');
						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
	
	var step8View=function(){
		var data={"year":$("#year-select").val()};
		var body = $("#body8");
		body.html('');
		$.ajax({
			url:"getStep8s",
			type:"post",
			data:$.toJSON(data),
			contentType:"application/json;charset=utf-8",
			success:function(data){
				var message=data["message"];
				if (message=="success") {
					data=data["data"];
					if (data.length==undefined) {
						var tr = $("<tr></tr>");
						tr.append('<td>' + data['id']+ '</td>');
						tr.append('<td>' + data['linshigong']+ '</td>');
						tr.append('<td>' + data['jishugong']+ '</td>');
						tr.append('<td>' + data['xiaohao']+ '</td>');
						tr.addClass('warning');
						body.append(tr);
					}
					else {
						for(var i = 0; i < data.length; i++){
						var tr = $("<tr></tr>");
						tr.append('<td>' + data[i]['id']+ '</td>');
						tr.append('<td>' + data[i]['name']+ '</td>');
						tr.append('<td>' + data[i]['linshigong']+ '</td>');
						tr.append('<td>' + data[i]['jishugong']+ '</td>');
						if( i % 2 == 0){
							tr.addClass('info');
						}else{
							tr.addClass('warning');
						}
						body.append(tr);
					}
					}
					
				}
				else {
					alert(message);
				}
			},
		})
	}
})(jQuery)