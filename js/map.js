ymaps.ready(init);
var myMap, myPlacemark;

function init(){ 
	myMap = new ymaps.Map("map", {
            center: [55.79, 37.76], 
            zoom: 14
        }); 

	myPlacemark = new ymaps.Placemark([55.79, 37.76], { 
		hintContent: 'Серебряно-виноградный пруд!', 
		balloonContent: 'Северное Измайлово' });

	myMap.geoObjects.add(myPlacemark);
}
