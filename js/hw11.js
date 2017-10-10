//========= task 1 ===================
$('.enter_Task1').on('click', check_storage);

function suports_storage(){
try {
	    'localStorage' in window && window ['localStorage']!== null;
	    return true;
}catch (e){
	return false
}
}

function check_storage(){
	if (suports_storage() === true){
		console.log ('ok');
	}else {
		console.log ('not supported');
	}
}

//========= task 2 ===================
let mainCss = document.getElementById('main_css');
let topic = document.getElementsByName('topic');
for(var i=0; i < topic.length; i++){
  topic[i].addEventListener('click', changeTopic, false);
}
checkTopic();

function checkTopic() {
    if (localStorage.getItem("check_topic") == "topicOne") {
        mainCss.href = 'css/style1.css';
    } else if (localStorage.getItem("check_topic") == "topicTwo") {
        mainCss.href = 'css/style2.css';
    }
}

function changeTopic(){
    if (this.value == "one") {
        localStorage.setItem("check_topic", "topicOne");
        mainCss.href = 'css/style1.css';
    } else if (this.value == "two") {
        localStorage.setItem("check_topic", "topicTwo");
        mainCss.href = 'css/style2.css';
    }
}

//========= task 3 ===================
$('.enter_Task3').on('click', function(){
let arr = [1, 'two', 3];
localStorage.setItem ("myKey", arr);
let res = localStorage.getItem("myKey");
$('.output3').text(res);


})


//========= task 4 ===================

$(document).ready(function(){
	showStartModal();
});
function showStartModal(){
	//start timeout
	if (localStorage.getItem('modalYesBtn')!=1){
		setTimeout(function(){
			$('#exampleModal').modal('show');
			$('#modal-yes-btn').on ('click', function(){
				// save state modal
				localStorage.setItem('modalYesBtn',1);
				$('#exampleModal').modal('hide');
			});
		},4000);

	}
}



//========= task 5 ===================
$('.enter_Task5').on('click', function(){

for (var key in localStorage){
	console.log (localStorage[key]);
}
})

//====================================



























