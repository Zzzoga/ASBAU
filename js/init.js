var bannerSlider = new Swiper(".banner__slider .swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".banner__slider .arrow.next",
		prevEl: ".banner__slider .arrow.prev",
	},
});

var partnersSlider = new Swiper(".partners__slider .swiper", {
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: true,
	freeMode: false,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".partners__slider__nav",
		clickable: true,
	},
});

var partnersSlider = new Swiper(".certificate .swiper", {
	slidesPerView: 2,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
        768: {
			slidesPerView: 3,
			spaceBetween: 16,
        },
        992: {
			slidesPerView: 4,
			spaceBetween: 20,
        },
    },
	pagination: {
		el: ".certificate__nav",
		clickable: true,
	},
});

var bannerSlider = new Swiper(".cart__media .swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".cart__media .arrow.next",
		prevEl: ".cart__media .arrow.prev",
	},
});
