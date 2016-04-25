(function($){
	$.fn.nianfen;
	$.fn.inital=function(){
		$.fn.nianfen=$("#year-select").val();
		bindStep1();
		bindStep2();
		bindStep3();
		bindStep4();
		bindStep5();
		bindStep6();
		bindStep7();
		bindStep8();
	}
	var bindStep1=function(){
		$("#btn1").on('click',this,function(){
			var name1=$("#name1").val();
			var linshigong1=$("#linshigong1").val()||0;
			var jishugong1=$("#jishugong1").val()||0;
			var xiaohao1=$("#xiaohao1").val()||0;
			var data={"name":name1,"linshigong":linshigong1,"jishugong":jishugong1,"xiaohao":xiaohao1,"nianfen":$("#year-select").val()};
			$.ajax({
				url:"insertdatastep1",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name1").val('');
					$("#linshigong1").val('');
					$("#jishugong1").val('');
					$("#xiaohao1").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep2=function(){
		$("#btn2").on('click',this,function(){
			var name=$("#name2").val();
			var linshigong=$("#linshigong2").val()||0;
			var jishugon1=$("#jishugong2").val()||0;
			var jiqi1=$("#jiqi1").val()||0;
			var jiqi2=$("#jiqi2").val()||0;
			var jiqi3=$("#jiqi3").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"jiqi1":jiqi1,"jiqi2":jiqi2,"jiqi3":jiqi3,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep2",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name2").val('');
					$("#linshigong2").val('');
					$("#jishugong2").val('');
					$("#jiqi1").val('');
					$("#jiqi2").val('');
					$("#jiqi3").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep3=function(){
		$("#btn3").on('click',this,function(){
	//		var name1=$("#name3").val();
			var linshigong=$("#linshigong3").val()||0;
			var jishugong=$("#jishugong3").val()||0;
			var xiaohao=$("#xiaohao3").val()||0;

			var data={"linshigong":linshigong,"jishugong":jishugong,"xiaohao":xiaohao,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep3",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#linshigong3").val('');
					$("#jishugong3").val('');
					$("#xiaohao3").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep4=function(){
		$("#btn4").on('click',this,function(){
			var name=$("#name4").val();
			var linshigong=$("#linshigong4").val()||0;
			var jishugong=$("#jishugong4").val()||0;
			var xiaohao=$("#xiaohao4").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"xiaohao":xiaohao,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep4",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#linshigong4").val('');
					$("#jishugong4").val('');
					$("#xiaohao4").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep5=function(){
		$("#btn5").on('click',this,function(){
			var name=$("#name5").val();
			var linshigong=$("#linshigong5").val()||0;
			var jishugong=$("#jishugong5").val()||0;
			var yjwjfh=$("#yjwjfh").val()||0;
			var elsgnd=$("#elsgnd").val()||0;
			var ns=$("#ns").val()||0;
			var lsen=$("#lsen").val()||0;
			var lsj=$("#lsj").val()||0;
			var lf=$("#lf").val()||0;
			var yjf=$("#yjf").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"yjwjfh":yjwjfh,"elsgnd":elsgnd,"ns":ns,"lsen":lsen,"lsj":lsj,"lf":lf,"yjf":yjf,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep5",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name5").val('');
					$("#linshigong5").val('');
					$("#jishugong5").val('');
					$("#yjwjfh").val('');
					$("#elsgnd").val('');
					$("#ns").val('');
					$("#lsen").val('');
					$("#lsj").val('');
					$("#lf").val('');
					$("#yjf").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep6=function(){
		$("#btn6").on('click',this,function(){
			var name=$("#name6").val();
			var linshigong=$("#linshigong6").val()||0;
			var jishugong=$("#jishugong6").val()||0;
			var ccj=$("#ccj").val()||0;
			var mcj=$("#mcj").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"ccj":ccj,"mcj":mcj,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep6",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name6").val('');
					$("#linshigong6").val('');
					$("#jishugong6").val('');
					$("#ccj").val('');
					$("#mcj").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep7=function(){
		$("#btn7").on('click',this,function(){
			var name=$("#name7").val();
			var linshigong=$("#linshigong7").val()||0;
			var jishugong=$("#jishugong7").val()||0;
			var zhugan15=$("#zhugan15").val()||0;
			var zhugan30=$("#zhugan30").val()||0;
			var masheng=$("#masheng").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"zhugan15":zhugan15,"zhugan30":zhugan30,"masheng":masheng,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep7",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name7").val('');
					$("#linshigong7").val('');
					$("#jishugong7").val('');
					$("#zhugan15").val('');
					$("#zhugan30").val('');
					$("#masheng").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
	var bindStep8=function(){
		$("#btn8").on('click',this,function(){
			var name=$("#name8").val();
			var linshigong=$("#linshigong8").val()||0;
			var jishugong=$("#jishugong8").val()||0;
			var data={"name":name,"linshigong":linshigong,"jishugong":jishugong,"nianfen":$("#year-select").val(),"bianhao":0};
			$.ajax({
				url:"insertdatastep8",
				type:"post",
				data:$.toJSON(data),
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert(data["message"]);
					$("#name8").val('');
					$("#linshigong8").val('');
					$("#jishugong8").val('');
				},
				error:function(){
					alert("写入数据库失败");
				}
			});
		})
	}
})(jQuery)