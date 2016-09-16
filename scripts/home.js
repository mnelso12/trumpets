jQuery(document).ready(function($){
	console.log(
	"Tiny bubbles, in my beer. It makes me happy, it makes me feel queer. Tiny bubbles, makes me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats and here's to silver seas, but most of all a toast to you and me (to you and me!). Tiny bubbles, in my wine. It makes me happy, it makes me feel fine. Tiny bubbles, make me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats, and here's to silver seas, but most of all a toast to you and me (to you and me!)."
	);

	// default is players
	$("#funInfo").hide();
	$("#seeUsInfo").hide();
	$("#statsInfo").hide();
	$("#playersInfo").show();

	// hover handlers
	$("#playersCell").hover(function(){
		console.log('players hoveringggg');	
		$("#statsInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#playersInfo").show();
	});
	
	$("#statsCell").hover(function(){
		console.log("stats hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#statsInfo").show();
	});
	
	$("#funCell").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#funInfo").show();
	});
	
	$("#traditionCell").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#funInfo").hide();
		$("#traditionInfo").show();
	});
	
	$("#seeUsCell").hover(function(){
		console.log("see us hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#statsInfo").hide();
		$("#traditionInfo").hide();
		$("#seeUsInfo").show();
	});
	
	
	// click handlers
	$("#homePlayersButton").click(function(){
		console.log("players clicked");
	});
	
	$("#homeStatsButton").click(function(){
		console.log("stats clicked");
	});
	
	$("#homeFunButton").click(function(){
		console.log("fun clicked");
	});
	
	$("#homeSeeUsButton").click(function(){
		console.log("see us clicked");
	});
});


