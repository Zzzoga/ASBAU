
// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// TEXT INPUT VALIDATE
	document.querySelectorAll('input[name="name"]').forEach(input => {
		input.addEventListener('keydown', function(e){
		  if( e.key.match(/[0-9]/) ) return e.preventDefault();
		}); 
		
		input.addEventListener('input', function(e){
		  input.value = input.value.replace(/[0-9]/g, "");
		});
	})

	if (document.querySelector('span.play')) {
		document.querySelector('span.play').addEventListener('click', e => {
			e.preventDefault()
			e.target.closest('.about__video').querySelector('img.poster').remove()
			e.target.closest('.about__video').querySelector('video').play()
			e.target.closest('.about__video').querySelector('span.play').remove()
		})
	}

	// MODAL NAV
	document.querySelector('.burger').addEventListener('click', e => {
		e.preventDefault()
		if (!e.target.closest('.burger').classList.contains('active')) {
			e.target.closest('.burger').classList.add('active')
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('body').classList.add('hidden')
			document.querySelector('header').classList.add('nav__active')
		} else {
			e.target.closest('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
			document.querySelector('header').classList.remove('nav__active')
		}
	})

	// document.querySelectorAll('.modal__content nav.menu ul li nav.inner ul li a').forEach(link => {
	// 	link.addEventListener('click', e => {
	// 		document.querySelectorAll('.modal__content nav.menu ul li').forEach(link => link.classList.remove('active'))
	// 		document.querySelector('.burger').classList.remove('active')
	// 		document.querySelector('.modal__nav').classList.remove('active')
	// 		document.querySelector('body').classList.remove('hidden')
	// 		document.querySelector('header').classList.remove('nav__active')
	// 	})
	// })

	// document.querySelectorAll('a.project__link').forEach(link => {
	// 	link.addEventListener('click', e => {
	// 		document.querySelectorAll('.modal__content nav.menu ul li').forEach(link => link.classList.remove('active'))
	// 		document.querySelector('.burger').classList.remove('active')
	// 		document.querySelector('.modal__nav').classList.remove('active')
	// 		document.querySelector('body').classList.remove('hidden')
	// 		document.querySelector('header').classList.remove('nav__active')
	// 	})
	// })

	// document.querySelectorAll('.modal__content nav.menu ul li a').forEach(li => {
	// 	li.addEventListener('click', e => {
	// 		if (e.target.closest('li').querySelector('nav.inner') != null) {
	// 			e.preventDefault()
	// 			if (e.target.closest('li').classList.contains('active')) {
	// 				e.target.closest('li').classList.remove('active')
	// 			} else {
	// 				e.target.closest('li').classList.add('active')
	// 			}
	// 		} else {
	// 			document.querySelectorAll('.modal__content nav.menu ul li').forEach(link => link.classList.remove('active'))
	// 			document.querySelector('.burger').classList.remove('active')
	// 			document.querySelector('.modal__nav').classList.remove('active')
	// 			document.querySelector('body').classList.remove('hidden')
	// 			document.querySelector('header').classList.remove('nav__active')
	// 		}
	// 	})
	// })

	// FIXED HEADER ON SCROLL
	document.addEventListener('scroll', e => {
		if(!document.querySelector('header').classList.contains('custom')) {
			if (this.pageYOffset > 10) {
				document.querySelector('header').classList.add('fixed')
			} else {
				document.querySelector('header').classList.remove('fixed')
			}
		}
	})
	
	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	// SHOW/HIDE MODAL
	function showModal(item, modal) {
		document.querySelectorAll(item).forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.add('active')
				document.querySelector('body').classList.add('hidden')
			})
		})
	}

	function hideModal(item, modal) {
		document.querySelectorAll(item).forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.remove('active')
				document.querySelector('body').classList.remove('hidden')
			})
		})
	}

	showModal('.header__btn', '.modal__call')
	showModal('.company__info .btn', '.modal__call')
	showModal('.footer__contacts .btn', '.modal__call')
	showModal('.content__right .btn', '.modal__call')
	showModal('button.btn.cart__btn', '.modal__call')
	showModal('button.btn.kp__btn', '.modal__call')
	
	hideModal('.modal__call .modal__close', '.modal__call')
	hideModal('.modal__call .modal__overlay', '.modal__call')

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// ACCORDEON TABS
	function tabAccordeon(header, body) {
		document.querySelectorAll(header).forEach(item => {
			item.addEventListener('click', e => {
				const tabData = e.target.dataset.tab
				document.querySelectorAll(header).forEach(item => item.classList.remove('active'))
				e.target.classList.add('active')
				
				document.querySelectorAll(body).forEach(item => item.classList.remove('active'))
				document.querySelector(body + `[data-tab="${tabData}"]`).classList.add('active')
			})
		})
	}

	tabAccordeon('.cart__header', '.cart__body')

})


