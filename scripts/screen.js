$(document).ready(function(){
	var $indexContent;
	var $indexSidebar;
	var Home  = true;
	var About = false;
	var Creation = false;
	var Contact = false;
	$("#Profile").hide();
	$("#Experience").hide();
	$("#Education").hide();
	$("#comeToDie").hide();
	$("#XML").hide();
	$("#ID").hide();
	$("#ContactMe").hide();

	function changeHome() {
		$("#content").slideToggle(750);
		$("#sidebar").slideToggle(750);
	}

	function changeAbout() {
		$("#Profile").slideToggle(750);
		$("#Experience").slideToggle(750);
		$("#Education").slideToggle(750);
	}

	function changeCreation() {
		$("#comeToDie").toggle();
		$("#XML").toggle();
		$("#ID").toggle();
	}

	function changeContact() {
		$("#ContactMe").toggle();
	}

	function hideLastPage() {
		if(Home==true) {
			changeHome();
			Home=false;
		}
		else if(About==true) {
			changeAbout();
			About=false;
		}
		else if(Creation==true) {
			changeCreation();
			Creation=false;
		}
		else if(Contact==true) {
			changeContact();
			Contact=false;
		}
	}

	$("#Home").click(function(){
		if(Home==false) {
			hideLastPage();
			changeHome();
			Home=true;
		}
	});

	$("#About").click(function(){
		if(About==false) {
			hideLastPage();
			changeAbout();
			About = true;
		}
	});

	$("#Creation").click(function(){
		if(Creation==false) {
			hideLastPage();
			changeCreation();
			Creation=true;
		}
	});

	$("#Contact").click(function(){
		if(Contact==false) {
			hideLastPage();
			changeContact();
			Contact=true;
		}
	});

});
