var map_barcelon = L.map(
    "map_barcelon",
    {
        center: [41.3777, 2.2217],
        crs: L.CRS.EPSG3857,
        zoom: 14,
        zoomControl: true,
        preferCanvas: false,
    }
);
var tile_layer = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
    {"attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href=\"https://carto.com/attributions\"\u003eCARTO\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_barcelon);


var marker_myloc = L.marker(
    [41.37986, 2.189427],
    {}
).addTo(map_barcelon);


var icon_loc = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
);
marker_myloc.setIcon(icon_loc);


var popup_myloc = L.popup({"maxWidth": "100%"});


var html_pop = $(`<div id="html_pop" style="width: 100.0%; height: 100.0%;">mi ubicacion</div>`)[0];
popup_myloc.setContent(html_pop);


marker_myloc.bindPopup(popup_myloc)
;


