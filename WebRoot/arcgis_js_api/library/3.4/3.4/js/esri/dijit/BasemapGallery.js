/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/templates/BasemapGallery.html":"<div class=\"esriBasemapGallery\">\r\n  <div dojoAttachPoint=\"flowContainer\">\r\n  </div>\r\n</div>"}});define("esri/dijit/BasemapGallery",["require","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/kernel","dojo/_base/sniff","dojo/has","dojo/query","dojo/DeferredList","dojo/dom","dojo/dom-construct","dojo/dom-class","dijit/_Widget","dijit/_Templated","esri/kernel","esri/urlUtils","esri/request","esri/geometry/Extent","esri/virtualearth/VETiledLayer","esri/layers/OpenStreetMapLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISImageServiceLayer","esri/layers/ImageServiceParameters","esri/dijit/Basemap","dojo/text!esri/dijit/templates/BasemapGallery.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b){var BMG=_2([_e,_f],{declaredClass:"esri.dijit.BasemapGallery",widgetsInTemplate:true,templateString:_1b,basePath:_1.toUrl("esri/dijit")+"/",loaded:false,basemaps:[],bingMapsKey:null,flowContainer:null,_hasUI:false,_selectedBasemap:null,_selectBasemapInProgress:false,constructor:function(_1c,_1d){_1c=_1c||{};if(!_1c.map){console.error("esri.dijit.BasemapGallery: Unable to find the 'map' property in parameters");}this.map=_1c.map;this._hasUI=_1d?true:false;this.bingMapsKey=(_1c.bingMapsKey&&_1c.bingMapsKey.length>0)?_1c.bingMapsKey:null;this.showArcGISBasemaps=(_1c.showArcGISBasemaps===false)?false:true;this.basemaps=_1c.basemaps||[];this.basemapIds=_1c.basemapIds;this.referenceIds=_1c.referenceIds;this.basemapsGroup=_1c.basemapsGroup;if(location.protocol==="https:"){_10.dijit._arcgisUrl=_10.dijit._arcgisUrl.replace("http:","https:");}this.init();},init:function(){this.inherited(arguments);_3.forEach(this.basemaps,function(_1e,i){if(!_1e.id||_1e.id.length===0){_1e.id=this._getUniqueId();}_3.forEach(_1e.layers,function(_1f){_1f.opacity=(_1f.opacity>=0)?_1f.opacity:1;_1f.visibility=true;},this);},this);if(this.basemapIds&&this.basemapIds.length>0){_3.forEach(this.basemapIds,function(_20){var _21=this.map.getLayer(_20);_21._basemapGalleryLayerType="basemap";},this);}if(this.referenceIds&&this.referenceIds.length>0){_3.forEach(this.referenceIds,function(_22){var _23=this.map.getLayer(_22);_23._basemapGalleryLayerType="reference";},this);}if(this.basemapsGroup&&((this.basemapsGroup.owner&&this.basemapsGroup.title)||this.basemapsGroup.id)){this._findCustomBasemapsGroup(_5.hitch(this,"_handleArcGISBasemapsResponse"));}else{if(this.showArcGISBasemaps){this._findArcGISBasemapsGroup(_5.hitch(this,"_handleArcGISBasemapsResponse"));}else{this._finishStartup();}}},startup:function(){if(this.loaded){this._refreshUI();}else{_4.connect(this,"onLoad",_5.hitch(this,function(){this._refreshUI();}));}},select:function(id){this._select(id);},getSelected:function(){return this._selectedBasemap;},get:function(id){var i;for(i=0;i<this.basemaps.length;i++){if(this.basemaps[i].id==id){return this.basemaps[i];}}return null;},add:function(_24){if(_24&&!_24.id){_24.id=this._getUniqueId();this.basemaps.push(_24);this._refreshUI();this.onAdd(_24);return true;}else{if(_24&&this._isUniqueId(_24.id)){this.basemaps.push(_24);this._refreshUI();this.onAdd(_24);return true;}}return false;},remove:function(id){var i;for(i=0;i<this.basemaps.length;i++){var _25=this.basemaps[i];if(_25.id===id){if(this._selectedBasemap&&this._selectedBasemap.id===_25.id){this._selectedBasemap=null;}this.basemaps.splice(i,1);this._refreshUI();this.onRemove(_25);return _25;}}return null;},onLoad:function(){},onSelectionChange:function(){},onAdd:function(_26){},onRemove:function(_27){},onError:function(msg){},_defaultBasemapGalleryGroupQuery:"title:\"ArcGIS Online Basemaps\" AND owner:esri",_basemapGalleryGroupQuery:null,_finishStartup:function(){this.loaded=true;this.onLoad();if(this.map.layerIds.length===0&&this.basemaps.length>0&&!this._selectBasemapInProgress){this._select(this.basemaps[0].id);}},_findCustomBasemapsGroup:function(_28){if(this.basemapsGroup&&this.basemapsGroup.id){this._findArcGISBasemaps(this.basemapsGroup.id,_28);}else{this._basemapGalleryGroupQuery="title:\""+this.basemapsGroup.title+"\" AND owner:"+this.basemapsGroup.owner;this._findArcGISBasemapsGroup(_28);}},_findArcGISBasemapsGroup:function(_29){if(!this._basemapGalleryGroupQuery){var url=_10.dijit._arcgisUrl+"/accounts/self";var _2a={};_2a.f="json";_2a.culture=_6.locale;_12({url:url,content:_2a,callbackParamName:"callback",load:_5.hitch(this,function(_2b,_2c){if(_2b&&_2b.basemapGalleryGroupQuery){this._basemapGalleryGroupQuery=_2b.basemapGalleryGroupQuery;}else{this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery;}this._findArcGISBasemapsGroupContent(_29);}),error:_5.hitch(this,function(_2d,_2e){this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery;})});}else{this._findArcGISBasemapsGroupContent(_29);}},_findArcGISBasemapsGroupContent:function(_2f){var _30=_5.hitch(this,"_findArcGISBasemaps");var url=_10.dijit._arcgisUrl+"/community/groups";var _31={};_31.q=this._basemapGalleryGroupQuery;_31.f="json";_12({url:url,content:_31,callbackParamName:"callback",load:_5.hitch(this,function(_32,_33){if(_32.results.length>0){_30(_32.results[0].id,_2f);}else{var msg="esri.dijit.BasemapGallery: could not find group for basemaps.";this.onError(msg);}}),error:_5.hitch(this,function(_34){var msg="esri.dijit.BasemapGallery: could not find group for basemaps.";this.onError(msg);})});},_findArcGISBasemaps:function(_35,_36){var url=_10.dijit._arcgisUrl+"/search";var _37={};_37.q="group:"+_35+" AND type:\"web map\"";_37.sortField="name";_37.sortOrder="desc";_37.num=50;_37.f="json";_12({url:url,content:_37,callbackParamName:"callback",load:_5.hitch(this,function(_38,_39){if(_38.results.length>0){_36(_38.results);}else{var msg="esri.dijit.BasemapGallery: could not find group for basemaps.";this.onError(msg);}}),error:_5.hitch(this,function(_3a,_3b){var msg="esri.dijit.BasemapGallery: could not find group for basemaps.";this.onError(msg);})});},_handleArcGISBasemapsResponse:function(_3c){if(_3c.length>0){_3.forEach(_3c,function(_3d,i){if(this.bingMapsKey||(!this.bingMapsKey&&_3d.title&&_3d.title.indexOf("Bing Maps")==-1)){var _3e={};_3e.id=this._getUniqueId();_3e.title=_3d.title;_3e.thumbnailUrl="";if(_3d.thumbnail&&_3d.thumbnail.length){_3e.thumbnailUrl=(_10.dijit._arcgisUrl+"/content/items/"+_3d.id+"/info/"+_3d.thumbnail);if(_10.id){var _3f=_10.id.findCredential(_11.urlToObject(_10.dijit._arcgisUrl).path);if(_3f){_3e.thumbnailUrl+="?token="+_3f.token;}}}_3e.itemId=_3d.id;var _40=new _1a(_3e,this);this.basemaps.splice(0,0,_40);}},this);this._finishStartup();}},_refreshUI:function(){if(this._hasUI){_c.empty(this.flowContainer);_3.forEach(this.basemaps,function(_41,i){if(!_41.id){_41.id="basemap_"+i;}this.flowContainer.appendChild(this._buildNodeLayout(_41));},this);_c.create("br",{style:{clear:"both"}},this.flowContainer);this._markSelected(this._selectedBasemap);}},_buildNodeLayout:function(_42){var nId="galleryNode_"+_42.id;var n=_c.create("div",{id:nId,"class":"esriBasemapGalleryNode"});var _43=_c.create("a",{href:"#"},n);_4.connect(_43,"onclick",_5.hitch(this,"_onNodeClick",_42));if(_42.thumbnailUrl){_c.create("img",{"class":"esriBasemapGalleryThumbnail",src:_42.thumbnailUrl},_43);}else{_c.create("img",{"class":"esriBasemapGalleryThumbnail",src:this.basePath.toString()+"images/transparent.gif"},_43);}var _44=_c.create("div",{"class":"esriBasemapGalleryLabelContainer"},n);var _45=_42.title||"";_c.create("span",{innerHTML:_45,alt:_45,title:_45},_44);return n;},_onNodeClick:function(_46,e){e.preventDefault();this._markSelected(_46);this.select(_46.id);},_markSelected:function(_47){if(_47){_3.forEach(_6.query(".esriBasemapGallerySelectedNode",this.domNode),function(_48){_d.remove(_48,"esriBasemapGallerySelectedNode");});var _49=_b.byId("galleryNode_"+_47.id);if(_49){_d.add(_49,"esriBasemapGallerySelectedNode");}}},_select:function(id){this._selectBasemapInProgress=true;var _4a=this.get(id);if(_4a){if(_4a.layers){this._getServiceInfos(_4a);}else{var _4b=_4a.getLayers();if(_5.isArray(_4b)){this._getServiceInfos(_4a);}else{_4b.addCallback(_5.hitch(this,function(_4c){this._getServiceInfos(_4a);}));}}this._markSelected(_4a);}else{this._selectBasemapInProgress=false;}},_getServiceInfos:function(_4d){if(location.protocol=="https:"){_3.forEach(_4d.layers,function(_4e){if(this._isAgolService(_4e.url)||this._isHostedService(_4e.url)){_4e.url=_4e.url.replace("http:","https:");}},this);}this._selectedBasemap=_4d;var _4f=[];_3.forEach(_4d.layers,function(_50){if(_50.url&&_50.url.length>0&&!_50.isReference){_50.deferredsPos=_4f.length;_4f.push(this._getServiceInfo(_50.url));}},this);if(_4f.length>0){var _51=new _a(_4f);_51.addCallback(_5.hitch(this,function(_52){var _53=null;_3.forEach(_4d.layers,function(_54){if(_54.deferredsPos===0||_54.deferredsPos){_54.serviceInfoResponse=_52[_54.deferredsPos][1];var ext=_54.serviceInfoResponse.fullExtent;if(!ext){ext=_54.serviceInfoResponse.extent;}if(!_53){_53=new _13(ext);}else{_53=_53.union(new _13(ext));}}},this);if(this.map.extent){var _55=this._getIntersectionPercent(_53,this.map.extent);if(_55<5){this.map.setExtent(_53,true);}}this._switchBasemapLayers(_4d);this._updateReferenceLayer(_4d);}));}else{this._switchBasemapLayers(_4d);this._updateReferenceLayer(_4d);}},_switchBasemapLayers:function(_56){var _57=_56.layers;if(this.map.layerIds.length>0&&this.map.getNumLevels()===0&&(_57[0].type==="OpenStreetMap"||(_57[0].type&&_57[0].type.indexOf("BingMaps")>-1))){var msg="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";this.onError(msg);return;}_3.forEach(_57,function(_58){if(!_58.isReference&&_58.type&&_58.type.indexOf("BingMaps")>-1&&!this.bingMapsKey){var msg="esri.dijit.BasemapGallery: Invalid Bing Maps key.";this.onError(msg);return;}},this);this._removeBasemapLayers();_3.forEach(_57,function(_59){if(!_59.isReference){var _5a,msg;if(_59.type==="OpenStreetMap"){if(this.map.layerIds.length>0&&this.map.getNumLevels()===0){msg="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";this.onError(msg);return;}_5a=new _15({id:"layer_osm",opacity:_59.opacity});}else{if(_59.type&&_59.type.indexOf("BingMaps")>-1){if(this.map.layerIds.length>0&&this.map.getNumLevels()===0){msg="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";this.onError(msg);return;}var _5b=_14.MAP_STYLE_AERIAL_WITH_LABELS;if(_59.type=="BingMapsAerial"){_5b=_14.MAP_STYLE_AERIAL;}else{if(_59.type=="BingMapsRoad"){_5b=_14.MAP_STYLE_ROAD;}}_5a=new _14({id:"layer_bing",bingMapsKey:this.bingMapsKey,mapStyle:_5b,opacity:_59.opacity});}else{if(_59.serviceInfoResponse&&_59.serviceInfoResponse.mapName){if((this.map.layerIds.length===0||this.map.getNumLevels()>0)&&_59.serviceInfoResponse.singleFusedMapCache===true){_5a=this._loadAsCached(_59);}else{_5a=this._loadAsDynamic(_59);}}else{if(_59.serviceInfoResponse&&_59.serviceInfoResponse.pixelSizeX){var _5c=new _19();_5c.bandIds=_59.bandIds;if(!_59.bandIds&&_59.serviceInfoResponse.bandCount&&parseInt(_59.serviceInfoResponse.bandCount)>3){_5c.bandIds=[0,1,2];}_5a=new _18(_59.url,{resourceInfo:_59.serviceInfoResponse,opacity:_59.opacity,visible:_59.visibility,imageServiceParameters:_5c});}}}}if(_5a){_5a._basemapGalleryLayerType="basemap";this.map.addLayer(_5a,0);}}},this);this._selectBasemapInProgress=false;this.onSelectionChange();},_removeBasemapLayers:function(){var _5d=this.map.layerIds;var _5e=[];_3.forEach(_5d,function(id){var _5f=this.map.getLayer(id);if(_5f._basemapGalleryLayerType==="basemap"){_5e.push(_5f);}},this);if(_5e.length===0&&_5d.length>0){_5e.push(this.map.getLayer(_5d[0]));}if(_5e.length>0){_3.forEach(_5e,function(_60){this.map.removeLayer(_60);},this);}},_updateReferenceLayer:function(_61){var i;this._removeReferenceLayer();for(i=0;i<_61.layers.length;i++){if(_61.layers[i].isReference===true){this._addReferenceLayer(_61.layers[i]);}}},_removeReferenceLayer:function(){var i;for(i=this.map.layerIds.length-1;i>=0;i--){var id=this.map.layerIds[i];var _62=this.map.getLayer(id);if(_62._basemapGalleryLayerType==="reference"){this.map.removeLayer(_62);}}},_addReferenceLayer:function(_63){this._getServiceInfo(_63.url,_5.hitch(this,"_handleReferenceServiceInfoResponse",_63));},_handleReferenceServiceInfoResponse:function(_64,_65,_66){var _67;_64.serviceInfoResponse=_65;if(_65&&_65.mapName){if(_65.singleFusedMapCache===true){_67=this._loadAsCached(_64);}else{_67=this._loadAsDynamic(_64);}}else{if(_65&&_65.pixelSizeX){var _68=new _19();_68.bandIds=_64.bandIds;if(!_64.bandIds&&_65.bandCount&&parseInt(_65.bandCount)>3){_68.bandIds=[0,1,2];}_67=new _18(_64.url,{resourceInfo:_65,opacity:_64.opacity,visible:_64.visibility,imageServiceParameters:_68});}}if(_67){_67._basemapGalleryLayerType="reference";this.map.addLayer(_67);}},_getServiceInfo:function(url,_69){var _6a={};_6a.f="json";var _6b=_12({url:url,content:_6a,callbackParamName:"callback",load:function(_6c,_6d){if(_69){_69(_6c,_6d);}},error:_5.hitch(this,function(_6e,_6f){var msg="esri.dijit.BasemapGallery: service not accessible.";this.onError(msg);})});return _6b;},_loadAsCached:function(_70){var _71=[];if(!_70.displayLevels){_71=_3.map(_70.serviceInfoResponse.tileInfo.lods,function(lod){return lod.level;});}var _72=new _16(_70.url,{resourceInfo:_70.serviceInfoResponse,opacity:_70.opacity,visible:_70.visibility,displayLevels:_70.displayLevels||_71});return _72;},_loadAsDynamic:function(_73){var _74=new _17(_73.url,{resourceInfo:_73.serviceInfoResponse,opacity:_73.opacity,visible:_73.visibility});if(_73.visibleLayers){_74.setVisibleLayers(_73.visibleLayers);}return _74;},_getIntersectionPercent:function(_75,_76){var _77=_76.intersects(_75);if(_77){var _78=_77.getWidth()*_77.getHeight();var _79=_76.getWidth()*_76.getHeight();return (_78/_79)*100;}else{return 0;}},_getIds:function(){var ids=[];_3.forEach(this.basemaps,function(_7a){ids.push(_7a.id);},this);return ids;},_getUniqueId:function(){var _7b=","+this._getIds().toString()+",";var _7c=0;while(true){if(_7b.indexOf(",basemap_"+_7c+",")>-1){_7c++;}else{return "basemap_"+_7c;}}},_isUniqueId:function(id){var _7d=","+this._getIds().toString()+",";if(_7d.indexOf(","+id+",")===-1){return true;}return false;},_isAgolService:function(url){if(!url){return false;}return (url.indexOf("/services.arcgisonline.com/")!==-1||url.indexOf("/server.arcgisonline.com/")!==-1);},_isHostedService:function(url){if(!url){return false;}return (url.indexOf(".arcgis.com/")!==-1);}});if(_8("extend-esri")){_5.setObject("dijit.BasemapGallery",BMG,_10);}return BMG;});