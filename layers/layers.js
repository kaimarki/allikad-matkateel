var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_matkatee_1 = new ol.format.GeoJSON();
var features_matkatee_1 = format_matkatee_1.readFeatures(json_matkatee_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matkatee_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matkatee_1.addFeatures(features_matkatee_1);
var lyr_matkatee_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_matkatee_1, 
                style: style_matkatee_1,
                interactive: true,
                title: '<img src="styles/legend/matkatee_1.png" /> matkatee'
            });
var format_allikad_3km_2 = new ol.format.GeoJSON();
var features_allikad_3km_2 = format_allikad_3km_2.readFeatures(json_allikad_3km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allikad_3km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allikad_3km_2.addFeatures(features_allikad_3km_2);
var lyr_allikad_3km_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_allikad_3km_2, 
                style: style_allikad_3km_2,
                interactive: true,
                title: '<img src="styles/legend/allikad_3km_2.png" /> allikad_3km'
            });
var format_peatuskohad_3 = new ol.format.GeoJSON();
var features_peatuskohad_3 = format_peatuskohad_3.readFeatures(json_peatuskohad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peatuskohad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peatuskohad_3.addFeatures(features_peatuskohad_3);
var lyr_peatuskohad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peatuskohad_3, 
                style: style_peatuskohad_3,
                interactive: true,
                title: '<img src="styles/legend/peatuskohad_3.png" /> peatuskohad'
            });

lyr_OSMStandard_0.setVisible(true);lyr_matkatee_1.setVisible(true);lyr_allikad_3km_2.setVisible(true);lyr_peatuskohad_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_matkatee_1,lyr_allikad_3km_2,lyr_peatuskohad_3];
lyr_matkatee_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_allikad_3km_2.set('fieldAliases', {'sys_id': 'sys_id', 'versioon': 'versioon', 'id': 'id', 'nimi': 'nimi', 'tyyp': 'tyyp', 'kr_kood': 'kr_kood', 'muud_nimed': 'muud_nimed', });
lyr_peatuskohad_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_matkatee_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_allikad_3km_2.set('fieldImages', {'sys_id': 'Range', 'versioon': 'TextEdit', 'id': 'Range', 'nimi': 'TextEdit', 'tyyp': 'TextEdit', 'kr_kood': 'TextEdit', 'muud_nimed': 'TextEdit', });
lyr_peatuskohad_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_matkatee_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_allikad_3km_2.set('fieldLabels', {'sys_id': 'no label', 'versioon': 'no label', 'id': 'no label', 'nimi': 'no label', 'tyyp': 'no label', 'kr_kood': 'no label', 'muud_nimed': 'no label', });
lyr_peatuskohad_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_peatuskohad_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});