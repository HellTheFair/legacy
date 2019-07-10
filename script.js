/*					CONTENT MENU				*/

document.getElementById("lang").innerHTML = "Lang: " + navigator.language || navigator.userLanguage;
var content_menu=document.getElementById('content_menu');
var holder=document.getElementById("holder");
content_menu.onclick = function(event){
for (var i=0;i<holder.children.length;i++) {
holder.children[i].style.display="none";
}
for (var i=0;i<content_menu.children.length;i++) {
content_menu.children[i].style.borderWidth="0 0 3px 0";
content_menu.children[i].style.color="black";
content_menu.children[i].style.backgroundColor="white";
}

clicked=event.target;
if (clicked.id == "") clicked=clicked.parentElement;
clicked_menu=clicked;
clicked=clicked.id;
clicked=clicked.slice(0,-5);
clicked=document.getElementById(clicked);
clicked.style.display = "block";
clicked_menu.style.borderWidth="0 0 7px 0";



switch (clicked) {
case promote:
	clicked_menu.style.color = "hsl(348, 83%, 27%)";
	clicked_menu.style.backgroundColor= "hsl(348, 83%, 97%)";
	break;	
case ticket:
	clicked_menu.style.color = "hsl(9, 100%, 44%)";
	clicked_menu.style.backgroundColor= "hsl(9, 100%, 96%)";	
	break;
case wheel:
	clicked_menu.style.color = "hsl(51, 100%, 30%)";
	clicked_menu.style.backgroundColor= "hsl(51, 100%, 95%)";	
	break;
case finance:
	clicked_menu.style.color = "hsl(80, 61%, 30%)";
	clicked_menu.style.backgroundColor= "hsl(80, 61%, 95%)";	
	break;
case about:
	clicked_menu.style.color = "hsl(80, 60%, 15%)";
	clicked_menu.style.backgroundColor= "hsl(80, 60%, 85%)";	
	break;
case career:
	clicked_menu.style.color = "hsl(197, 71%, 53%)";
	clicked_menu.style.backgroundColor= "hsl(197, 71%, 97%)";	
	break;
case news:
	clicked_menu.style.color = "hsl(270, 50%, 20%)";
	clicked_menu.style.backgroundColor= "hsl(270, 50%, 90%)";	
	break;
}

}

/* 				INTERACTIVE MAP				*/

var a_m_d = document.getElementsByClassName("about_map_pointer");
for (var i=0;i<a_m_d.length;i++) {
var twinkling;
a_m_d[i].addEventListener("mouseover", function(){
var self = this;
twinkling = setInterval(function(){
var point = document.getElementById(self.id+'_map');
point.classList.toggle("HEREITIS");
}, 500);
});
a_m_d[i].addEventListener("mouseout", function(){
clearInterval(twinkling);
document.getElementById(this.id+'_map').classList.remove("HEREITIS");
});
}

/* 			EASTERN EGG 				*/

var ee=document.getElementById("eastern_egg");
var egg_ass=document.getElementById("associator");
var eggs = document.getElementsByClassName("egg");
var egg_ass3 = document.getElementById("associator3");
var egg_ass2 = document.getElementById("black_egg");
egg_ass.onclick = function() {
for (var i=0;i<eggs.length;i++) {
eggs[i].style.display="block";
}
egg_ass.style.width = egg_ass.style.height = "8px";
egg_ass.style.margin ="-4px -4px 0 -4px";
}

egg_ass2.onclick = function() {
egg_ass.id = "associator2";
egg_ass.style.zIndex = "3";
egg_ass3.style.display="block";
}
egg_ass3.onclick = function() {
egg_ass.id="associator4";
egg_ass2.id= "nulled";


function discounted() {
var disc ="";
for (var i=0;i<4;i++) {
var x=0;
while (x<49||x>90||x==58||x==59||x==60||x==61||x==62||x==63||x==64){
x = Math.round(Math.random()*50+48);
}
disc=disc+String.fromCharCode(x);
}
return disc;
}

egg_ass.innerHTML = egg_ass.innerHTML+ '<p id="disc_code"><b>'+"Discount Code: "+discounted()+"</b></br> Awesome! You Found It!</p>";
for (var i=0;i<eggs.length;i++) {
eggs[i].style.borderRadius="3px";
}
}
var count=0;
var rowi;
$.get("php/career.php", function(response){
	for (var i=0;i<response.length;i++) {
		if (count==2) count=0;
		if (count==0){
			var rowi = document.createElement('div');
		}
		var cell = document.createElement('div');
		var cell_text = document.createElement('div');
		var cell_background = document.createElement('img');
		rowi.className="gallery_row";
		cell.className="gallery_cell";
		cell_text.className="g_i_n";
		cell_background.className="g_i";
		cell_text.innerHTML=response[i].name;
		cell_background.src=response[i].image;
		cell.appendChild(cell_text);
		cell.appendChild(cell_background);
		rowi.appendChild(cell);
		count+=1;
		if(count==2 || i+1==response.length)document.getElementById('career_inner').appendChild(rowi);
	}
});
$.get("php/stock.php", function(response){
	document.getElementById('finance_stock').innerHTML=response;
});
setInterval(function(){$.get("php/stock.php", function(response){
	document.getElementById('finance_stock').innerHTML=response;
})}, 6000);
																				//TODO make function  of ticket hover;

var senior_amount=1;																		
$('#senior').change(function(){
	var sha = $('.senior_holder').length;
	if ($('.senior_holder').length<$('#senior').val()){
		for (var i=1;i<=$('#senior').val()-sha;i++){
			var holder = document.createElement('div');
			var holder_name = document.createElement('div');
			var former = document.createElement('div');
			var input_name  = document.createElement('input');
			var input_fp = document.createElement('input');
			var ticket_image  = document.createElement('div');
			var fast_pass_text = document.createElement('span');
			fast_pass_text.innerHTML = "+FastPass >>";
			fast_pass_text.className="fp_text";
			input_name.type='text';
			input_fp.type="checkbox";
			holder_name.innerHTML = "Senior "+senior_amount;
			senior_amount+=1;
			holder.className="ticket_holder senior_holder";
			holder_name.className="ticket_holder_text";
			former.className="ticket_ticket_info";
			input_name.className="ticket_input_namer";
			input_name.required = true;
			input_fp.className="ticket_input_fp";
			ticket_image.style.backgroundImage='url("images/normal_ticket.png")';
			ticket_image.className="ticket_ticket";
			ticket_image.style.color="black";


			former.appendChild(input_name);
			former.appendChild(input_fp);
			former.appendChild(fast_pass_text);
			holder.appendChild(holder_name);
			holder.appendChild(former);
			holder.appendChild(ticket_image);
			document.getElementById('ticket_inner').appendChild(holder);
		}
				}else{
			for (var i=sha-1;i>=$('#senior').val();i--){
					$('.senior_holder')[i].remove();
					senior_amount-=1;
			}
	}

		$('.ticket_input_fp').change(function(){
			if (this.checked){
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/fp_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='white';
			}else{
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/normal_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='black';
			}
		});
		$('.ticket_input_namer').change(function(){
			$(this).css("borderColor", "");
			$(this).parent().parent().find('.ticket_ticket').text($(this).val());
	});

});
var adult_amount=1;
$('#adult').change(function(){
	var sha = $('.adult_holder').length;
	if ($('.adult_holder').length<$('#adult').val()){
		for (var i=1;i<=$('#adult').val()-sha;i++){
		var holder = document.createElement('div');
		var holder_name = document.createElement('div');
		var former = document.createElement('div');
		var input_name  = document.createElement('input');
		var input_fp = document.createElement('input');
		var ticket_image  = document.createElement('div');
		var fast_pass_text = document.createElement('span');
		fast_pass_text.innerHTML = "+FastPass >>";
		fast_pass_text.className="fp_text";
		input_name.type='text';
		input_name.required = true;
		input_fp.type="checkbox";
		holder_name.innerHTML = "Adult "+adult_amount;
		adult_amount+=1;
		holder.className="ticket_holder adult_holder";
		holder_name.className="ticket_holder_text";
		former.className="ticket_ticket_info";
		input_name.className="ticket_input_namer";
		input_fp.className="ticket_input_fp";
		ticket_image.style.backgroundImage='url("images/normal_ticket.png")';
		ticket_image.className="ticket_ticket";
		ticket_image.style.color="black";

		former.appendChild(input_name);
		former.appendChild(input_fp);
		former.appendChild(fast_pass_text);
		holder.appendChild(holder_name);
		holder.appendChild(former);
		holder.appendChild(ticket_image);
		document.getElementById('ticket_inner').appendChild(holder);
	}
		}else{
			for (var i=sha-1;i>=$('#adult').val();i--){
					$('.adult_holder')[i].remove();
					adult_amount-=1;
			}
	}
			$('.ticket_input_fp').change(function(){
			if (this.checked){
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/fp_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='white';
			}else{
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/normal_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='black';
			}
		});
		$('.ticket_input_namer').change(function(){
			$(this).css("borderColor", "");
			$(this).parent().parent().find('.ticket_ticket').text($(this).val());
		});

});
var child_amount=1;
$('#child').change(function(){
	var sha = $('.child_holder').length;
	if ($('.child_holder').length<$('#child').val()){
		for (var i=1;i<=$('#child').val()-sha;i++){
			var holder = document.createElement('div');
			var holder_name = document.createElement('div');
			var former = document.createElement('div');
			var input_name  = document.createElement('input');
			var input_fp = document.createElement('input');
			var ticket_image  = document.createElement('div');
			var fast_pass_text = document.createElement('span');
			fast_pass_text.innerHTML = "+FastPass >>";
			fast_pass_text.className="fp_text";
			input_name.type='text';
			input_name.required = true;
			input_fp.type="checkbox";
			holder_name.innerHTML = "Children "+child_amount;
			child_amount+=1;
			holder.className="ticket_holder child_holder";
			holder_name.className="ticket_holder_text";
			former.className="ticket_ticket_info";
			input_name.className="ticket_input_namer";
			input_fp.className="ticket_input_fp";
			ticket_image.style.backgroundImage='url("images/normal_ticket.png")';
			ticket_image.className="ticket_ticket";
			ticket_image.style.color="black";

			former.appendChild(input_name);
			former.appendChild(input_fp);
			former.appendChild(fast_pass_text);
			holder.appendChild(holder_name);
			holder.appendChild(former);
			holder.appendChild(ticket_image);
			document.getElementById('ticket_inner').appendChild(holder);
		}
	}else{
			for (var i=sha-1;i>=$('#child').val();i--){
					$('.child_holder')[i].remove();
					child_amount-=1;
			}
	}
			$('.ticket_input_fp').change(function(){
			if (this.checked){
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/fp_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='white';
			}else{
				$(this).parent().parent().find('.ticket_ticket')[0].style.backgroundImage='url("images/normal_ticket.png")';
				$(this).parent().parent().find('.ticket_ticket')[0].style.color='black';
			}
		});
		$('.ticket_input_namer').change(function(){
			$(this).css("borderColor", "");
			$(this).parent().parent().find('.ticket_ticket').text($(this).val());
		});

});


$('#ticket_confirm').click(function(){
	$('#child').val(0);
	$('#senior').val(0);
	$('#adult').val(0);
	$('.ticket_holder').remove();
	$('#ticket_inner').show();
	$('#ticket_submitter').show();
	$('#confirming').hide();
	$('#confirmer > div').remove();
	child_amount=1;
	adult_amount=1;
	senior_amount=1;
	$('#messenge').show();
	setTimeout(function(){$('#messenge').hide()},5000)
});
$('#ticket_edit').click(function(){
	$('#ticket_inner').show();
	$('#ticket_submitter').show();
	$('#confirming').hide();
	$('#confirmer > div').remove();
});

$('#ticket_submitter').click(function(){
	var amount=document.getElementsByClassName('ticket_input_namer');
	var count=0;
	if(amount.length!=0){
		for (var i=0; i<amount.length;i++){
			if(amount[i].value) count+=1;
		}
		if(count!=amount.length){
			for (var i=0; i<amount.length;i++){
				if(!amount[i].value) amount[i].style.borderColor="red";
			}
		}else{

			for (var i=0; i<amount.length;i++){

				var namer = amount[i].value;
				var fper = document.getElementsByClassName('ticket_input_fp')[i].checked;
				var typer = ' '+document.getElementsByClassName('ticket_holder_text')[i].innerHTML;
				$.post("php/form_handler.php", {
					name: namer,
					fp: fper,
					type: typer.slice(0,-1)
				}, function(response){
					var shower = document.createElement('div');
					shower.innerHTML = response;
					$('#confirmer').append(shower);
					$('#ticket_inner').hide();
					$('#ticket_submitter').hide();
					$('#confirming').show();
				});
			}

		}



	}

});
