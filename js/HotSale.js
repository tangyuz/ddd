$(function(){
	$("#footer").load("footer.html");
			$.ajax(
				{
					type:"get",
					url:"HotJson.json",
					async:true,
					datatype:"json",
					success:function(mag){
						var data=mag.data;
						var str='';
						for(var i in data){
							str+='<div class="l yi">'
							str+='<a dataid="'+data[i].id+'" class="atu" href="javascript:;"><img  src="'+data[i].img+'"/></a>'
							str+='<a class="a2" dataid="'+data[i].id+'"  href="javascript:;">'+data[i].name+'</a>'
							str+='<div class="di">'
							str+='<p class="l p1">'+data[i].name1+'</p>'
							str+='<p class="l p2">'+data[i].name2+'</p>'
							str+='</div>'
							str+='<div class="shu">'
							str+=data[i].id		
							str+='</div>'	
							str+='<a dataid="'+data[i].id+'" class="a3" href="javascript:;"><img src="'+data[0].img1+'"/></a>'
							str+='</div>'	
							
						}
						$(".remai").append(str);
						
						
						
						
					}
					
					
				}
			)
			//***********跳转详情页***************
			$(".remai").on("click",".atu,.a2,.a3",function(){
				
					var dataid=$(this).attr("dataid");
					setCookie("dataid",dataid);
					window.location.href="detail.html"
					
					
			})
			//**********图片放大效果****************
			$("body").on("mouseover",".atu",function(){
				$(this).find("img").stop(false,true).animate({
					"width":"250px",
					"height":"250px",
					"marginLeft":"-20px",
					"marginTop":"-20px"
				})
			})
			$("body").on("mouseout",".atu",function(){
				$(this).find("img").stop(false,true).animate({
					"width":"208px",
					"height":"208px",
					"marginLeft":"0px",
					"marginTop":"0px"
				})
			})
})
