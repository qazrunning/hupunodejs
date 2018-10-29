$(document).ready(function() {
	jiazai();

	function jiazai() {
		$.ajax({
			type: "post",
			//data: ,
			url: "http://localhost:3000/users/shouye",
			async: true,
			success: function(data) {
				//console.log(data)
				data.map(function(item) {
					$(".Indexmain ul").prepend(`
						<li id="${item.id}">
						<a href="#">
						<h2>${item.title}</h2>
						<span>
						70亮1951回复</span>
						</a>
					</li>
							`)
				});
				
				
				$(".Indexmain li").click(function() {
					$titleId = $(this).attr("id");
					console.log($titleId);
					$(".Indexmain li").find("a").attr('href',`http://localhost:3000/html/NewsDetail.html?id=${$titleId}`)
				})
			}
		});
	}


	var tgb = location.href;
	if(tgb.indexOf("?") >= 0){
		tgb = tgb.split('?');
		let titleId = tgb[1].split('=');
		console.log(titleId[1]);
			$.ajax({
		type: "post",
		data: {
			username: titleId[1]
		},
		url: "http://localhost:3000/users/indexImg",
		async: true,
		success: function(data) {
			$(".indexlogin img").attr("src", `../img/${data[0].picture}`);
			$(".indexlogin img").css('display','block');
			$(".loginhtml").css('display','none')
			console.log(data)
		}
	});
	
	$("#houtaihtml").click(function(){
		$(this).attr('href',`http://localhost:3000/html/houtai.html?id=${titleId[1]}`)
	})
}
	
})