var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // Создаем наполнение для информационного окна
    var contentString = '<div class="d-flex flex-column" id="content">'+'<img class="map-logo" src="images/Logo.png"></img>'+ '<a class="tel"href="tel:998933781738">+998(93) 378-17-38</a>'+'</div>';


    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <+ id="map"></+>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: { lat: 41.353306244197285, lng: 69.253264128906 }, 
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 18,

        // Добавляем свои стили для отображения карты

        // styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({
        // Определяем позицию маркера
        position: { lat: 41.353306244197285, lng: 69.253264128906 },

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        // title: 'Наш маркер: Большой театр',
        // Укажем свою иконку для маркера
        icon: 'images/logo-dot.png ',
    });

    window.onload= function (){
        infowindow.open(map, marker)
    }
    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    // });

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });
}
