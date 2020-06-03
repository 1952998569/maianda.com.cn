$(function(){
var time;
var winHeight = $(window.parent).height();
$('.my-kefu').css({'top':(winHeight-$('#my-kefu').height())/2});
$('#my-kefu li').on({
'mouseenter':function(){
var scope = this;
time=setTimeout(function(){
var divDom=$(scope).children('div');
var maxWidth=divDom.width();
$(scope).stop().animate({marginLeft:-maxWidth+77,width:maxWidth},'normal',function(){
var pic=$(scope).find('.my-kefu-weixin-pic');
if(pic.length>0){
pic.show();
}
}); 
},100)
                
},
'mouseleave':function(){
var pic=$(this).find('.my-kefu-weixin-pic');
if(pic.length>0){
pic.hide();
}
clearTimeout(time);
var divDom=$(this).children('div');
$(this).stop().animate({marginLeft:0,width:77},"normal",function(){
});
}
});
//返回顶部
$("#my-kefu").find(".my-kefu-ftop").click(function(){
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
if (scrollTop > 0) {
$("html,body").animate({
scrollTop: 0
},"slow");
}
});
});
$(function(){
$('#xiuzhanwang').click(function(){
if($('#name').val()==''){alert('请输入您的姓名！');return false;}
if($('#email').val()==''){alert('请输入您的EMAIL！');return false;}
if ($("#tel").val() == "") { alert("请输入你的手机！"); $("#tel").focus(); return false; } 
if (!$("#tel").val().match(/^(((13[0-9]{1})|147|150|151|152|153|154|155|156|158|157|159|170|180|181|182|183|184|185|186|187|188|189)+\d{8})$/)) { alert("手机号码格式不正确！"); $("#tel").focus(); return false;} 

if($('#content').val()==''){alert('请输入留言内容！');return false;}
})
})