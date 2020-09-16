console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'theme/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'theme/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'theme/purple.css'
	}

	localStorage.setItem('theme', mode)
}

document.querySelector("body > section:nth-child(2) > div > div > div.about-me > p:nth-child(6) > a").addEventListener("click", fun);
function fun(){
	window.alert("\nPlease e-mail for resume or more details.\n\nThank You !!!")
}