console.log ('bli-bli js n=====1');

function flashsale1 (){
	
	var intervalId = setInterval(function (){
		var login = document.querySelector('#blibli-main-ctrl > div > header > div > div > div > div.header__right > div > a');
		var pageLogin= document.querySelector('#blibli-main-ctrl > section > div > div > div');
		var btnLogin = document.querySelector('#gdn-login-form > button');
		
		
		if(!(login)){
		}else{
			login.click();
		}
		
		if(!(btnLogin)){
		}else{
			pageLogin.click();
			setTimeout(function() {	btnLogin.click();}, 500);
		
		}
	
	},2000);

	var intervalId = setInterval(function (){
		
		var hitMun = document.querySelector('#blibli-main-ctrl > section > div > div > section.countdown.mi__box.row > div > div');
		if(!(hitMun)){
		}else{
			var hitungMundur = (hitMun.textContent).replace(/\D/g,'');
		}
		var beliSekarang = document.querySelector('.product__item-group > div:nth-child(3) > div.product__item-info > button');
		
		if(hitungMundur <'000004'){
			
			if(!(beliSekarang)){
				}else{
					console.log('klik beli');
					beliSekarang.click();
				}
		}else{
			console.log('menunggu hitmun ada refresh 5menit');
			setTimeout(function() {	window.location.reload();}, 300000);
		}
		if(!(hitungMundur )){
			console.log('hitung Mundur ngga ada');
			if(!(beliSekarang)){
				console.log('beli sekarang kosong');
				}else{
					console.log('klik beli');
					beliSekarang.click();
				}
		}else{
			console.log('menunggu hitmun null ada');
		}

	},500);	

	var intervalId = setInterval(function (){
		var antriLagi = document.querySelector('.mi__box.mi__box-content.row > div > div > a');
		var lanjut = document.querySelector('#checkout-user_info-submit');
		
		if(!(antriLagi)){
		}else{
			antriLagi.click();
		}
		if (!(lanjut)){
			
		}else{
			lanjut.click();
		}
	},2000);

	var intervalId = setInterval(function (){
		var indomart = document.querySelector('#blibli-main-ctrl > section > div > div > div.checkout__content.row > div.checkout__form > div > div.box.payment > div > div > label:nth-child(14)');
		var buyNow = document.querySelector('#checkout-btn_buy_now');
		
		setTimeout(function() {
			if (!(indomart)){
				}else{
					indomart.click();
				}
			}, 1000);
			setTimeout(function() {
				if (!(buyNow)){
				}else{
					buyNow.click();
				}
			}, 2000);
		
	},5000);
}
 
function flashsale2 (){

var intervalId = setInterval(function (){
		var login = document.querySelector('#blibli-main-ctrl > div > header > div > div > div > div.header__right > div > a');
		var pageLogin= document.querySelector('#blibli-main-ctrl > section > div > div > div');
		var btnLogin = document.querySelector('#gdn-login-form > button');	
		if(!(login)){
		}else{
			login.click();
		}
		
		if(!(btnLogin)){
		}else{
			pageLogin.click();
			setTimeout(function() {	btnLogin.click();}, 500);
		
		}
	
	},2000);

var intervalId = setInterval(function (){
		
		var hitMun = document.querySelector('#blibli-main-ctrl > section > div > div > section.countdown.mi__box.row > div > div');
		if(!(hitMun)){
		}else{
			var hitungMundur = (hitMun.textContent).replace(/\D/g,'');
		}
		var beliSekarang = document.querySelector('.product__item-group > div:nth-child(3) > div.product__item-info > button');
		
		if(hitungMundur <'000004'){
			
			if(!(beliSekarang)){
				}else{
					console.log('klik beli');
					beliSekarang.click();
				}
		}else{
			console.log('menunggu hitmun ada refresh 5menit');
			setTimeout(function() {	window.location.reload();}, 300000);
		}
		if(!(hitungMundur )){
			console.log('hitung Mundur ngga ada');
			if(!(beliSekarang)){
				console.log('beli sekarang kosong');
				}else{
					console.log('klik beli');
					beliSekarang.click();
				}
		}else{
			console.log('menunggu hitmun null ada');
		}

	},500);	

var intervalId = setInterval(function (){
	var antriLagi = document.querySelector('.mi__box.mi__box-content.row > div > div > a');
	var lanjut = document.querySelector('#checkout-user_info-submit');
	
	if(!(antriLagi)){
	}else{
		antriLagi.click();
	}
	if (!(lanjut)){
		
	}else{
		lanjut.click();
	}
},2000);

var intervalId = setInterval(function (){
	var indomart = document.querySelector('#blibli-main-ctrl > section > div > div > div.checkout__content.row > div.checkout__form > div > div.box.payment > div > div > label:nth-child(14)');
	var buyNow = document.querySelector('#checkout-btn_buy_now');
	
	setTimeout(function() {
		if (!(indomart)){
			}else{
				indomart.click();
			}
		}, 1000);
		setTimeout(function() {
			if (!(buyNow)){
			}else{
				buyNow.click();
			}
		}, 2000);
	
},5000);
}
