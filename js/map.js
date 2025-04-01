ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.664152,37.7532],
        zoom: 15,
        // Добавим панель маршрутизации.
    });

    var target = new ymaps.Placemark([55.664152,37.7532], null,{
        iconLayout: 'default#image',
        iconImageHref: "/img/map__target.svg",
        iconImageSize: [39, 51],
        iconImageOffset: [-20, -44]
    });

    myMap.geoObjects.add(target);

});
