$(document).ready(function() {

	var tgb = location.href;
	if(tgb.indexOf("?") >= 0) {
		tgb = tgb.split('?');

		let titleId = tgb[1].split('=');
		//没有完善功能，后期编写获取username字符串
		//将字符串转数组，然后将各自的数组转成对象。获取到username的值。

		console.log(titleId[1]);

		$.ajax({
			type: "post",
			data:{
				id:titleId[1]
			},
			url: "http://localhost:3000/users/detail",
			async: true,
			success:function(data){
				$(".NewsTitle h1").text(data[0].title);
				$(".author span").text(data[0].author);
				$(".Article img").attr("src",`../img/${data[0].img}`);
				$(".ArticleContent").html(`	<p>${data[0].content}</p>`);
				console.log(data)
			}
		});

	}

})