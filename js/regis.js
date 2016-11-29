$(function(){
				$("#footer").load("footer.html");
				var oA = $(".zhuce");
				$(".inp1").val('');$(".inp").val('');$(".inp3").val('');$(".inp5").val('');
				$(".inp4").val('');//***********value值清空
				var boo=false;
				var oInp1=$(".inp1");
				var oInp2=$(".inp");
				var oInp3=$(".inp3");
				var oInp4=$(".inp4");
				var oInp5=$(".inp5");
				oA.click(function(){//注册按钮
					
					var name = $(".inp1").val();
					var pass= $(".inp4").val();
					setCookie("name",name,5);//创建cookie用于登录验证
					setCookie("pass",pass,5);
					if(boo==true&&oInp1.val()!=''&&oInp2.val()!=''&&oInp3.val()!=''&&oInp4.val()!=''&&oInp5.val()!=''){
						
						window.location.href = "login.html"
					}else{
						alert("注册失败")
					}
					
				})
				
				
				oInp1.blur(function(){
					 var  re = /^1\d{10}$/;
					 var str=oInp1.val();
					    if(re.test(str)){
					        $(".ok1").show();
					        $(".xiao1").hide();
					        $(".yan1").hide();
					        boo=true;     
					    }else{
					        $(".yan1").show().prev().hide();
					        $(".ok1").hide();
					        
					    } 
				})
				oInp2.blur(function(){
					boo=false;
					 var  re = /^\d{6}$/;
					 var str=oInp2.val();
					    if(re.test(str)){
					        $(".ok2").show();
					        $(".xiao2").hide();
					        $(".yan2").hide();
					        boo=true;
					    }else{
					        $(".yan2").show().prev().hide();
					        $(".ok2").hide();
					    } 
				})
				oInp3.blur(function(){
					boo=false;
					 var  re =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					 var str=oInp3.val();
					    if(re.test(str)){
					        $(".ok3").show();
					        $(".xiao3").hide();
					        $(".yan3").hide();
					        boo=true;
					    }else{
					        $(".yan3").show().prev().hide();
					        $(".ok3").hide();
					    } 
				})
				oInp4.blur(function(){
					boo=false;
					 var  re =  /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/
					 var str=oInp4.val();
					    if(re.test(str)){
					        $(".ok4").show();
					        $(".xiao4").hide();
					        $(".yan4").hide();
					        boo=true;
					    }else{
					        $(".yan4").show().prev().hide();
					        $(".ok4").hide();
					    } 
					    
				})
				
				oInp5.blur(function(){
					boo=false;
					
					
					 var pass1=oInp4.val();
					 var str=oInp5.val();
					    if(str ==pass1){
					    	if(str==''){
							$(".yan5").show().prev().hide();
						    $(".ok5").hide();
							}else{
						        $(".ok5").show();
						        $(".xiao5").hide();
						        $(".yan5").hide();
						        boo=true;
					    	}
					    }else{
					        $(".yan5").show().prev().hide();
					        $(".ok5").hide();
					    } 
				})
			
				
				
				
			})
			
