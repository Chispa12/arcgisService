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
define("esri/toolbars/navigation",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/Color","dojo/has","esri/kernel","esri/toolbars/_toolbar","esri/undoManager","esri/OperationBase","esri/geometry/Extent","esri/geometry/Rect","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/graphic"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){var _f=_1(_7,{declaredClass:"esri.toolbars.Navigation",constructor:function(map){this.zoomSymbol=new _d(_d.STYLE_SOLID,new _c(_c.STYLE_SOLID,new _4([255,0,0]),2),new _4([0,0,0,0.25]));_3.connect(map,"onUnload",this,"_cleanUp");this.map=map;this._undoManager=new _8({maxOperations:-1});this._normalizeRect=_2.hitch(this,this._normalizeRect);this._onMouseDownHandler=_2.hitch(this,this._onMouseDownHandler);this._onMouseUpHandler=_2.hitch(this,this._onMouseUpHandler);this._onMouseDragHandler=_2.hitch(this,this._onMouseDragHandler);this._onExtentChangeHandler_connect=_3.connect(map,"onExtentChange",this,"_extentChangeHandler");this._onMapLoad_connect=_3.connect(map,"onLoad",this,"_mapLoadHandler");if(map.loaded&&map.extent){this._currentExtent=map.extent;}},_mapLoadHandler:function(){this._currentExtent=this.map.extent;},_navType:null,_start:null,_graphic:null,_prevExtent:false,_currentExtent:null,_preExtent:null,_cleanUp:function(map){_3.disconnect(this._onExtentChangeHandler_connect);_3.disconnect(this._onMapLoad_connect);},activate:function(_10){var map=this.map;if(!this._graphic){this._deactivateMapTools(true,false,false,true);this._graphic=new _e(null,this.zoomSymbol);}switch(_10){case _f.ZOOM_IN:case _f.ZOOM_OUT:this._deactivate();this._onMouseDownHandler_connect=_3.connect(map,"onMouseDown",this,"_onMouseDownHandler");this._onMouseDragHandler_connect=_3.connect(map,"onMouseDrag",this,"_onMouseDragHandler");this._onMouseUpHandler_connect=_3.connect(map,"onMouseUp",this,"_onMouseUpHandler");this._navType=_10;break;case _f.PAN:this._deactivate();map.enablePan();this._navType=_10;break;}},_extentChangeHandler:function(_11){if(this._prevExtent||this._nextExtent){this._currentExtent=_11;}else{this._preExtent=this._currentExtent;this._currentExtent=_11;if(this._preExtent&&this._currentExtent){var _12=new _f.MapExtent({map:this.map,preExtent:this._preExtent,currentExtent:this._currentExtent});this._undoManager.add(_12);}}this._prevExtent=this._nextExtent=false;this.onExtentHistoryChange();},_deactivate:function(){var _13=this._navType;if(_13===_f.PAN){this.map.disablePan();}else{if(_13===_f.ZOOM_IN||_13===_f.ZOOM_OUT){_3.disconnect(this._onMouseDownHandler_connect);_3.disconnect(this._onMouseDragHandler_connect);_3.disconnect(this._onMouseUpHandler_connect);}}},_normalizeRect:function(_14,end,_15){var sx=_14.x,sy=_14.y,ex=end.x,ey=end.y,_16=Math.abs(sx-ex),_17=Math.abs(sy-ey);return {x:Math.min(sx,ex),y:Math.max(sy,ey),width:_16,height:_17,spatialReference:_15};},_onMouseDownHandler:function(evt){this._start=evt.mapPoint;},_onMouseDragHandler:function(evt){var _18=this._graphic,_19=this.map.graphics;_19.remove(_18,true);_18.setGeometry(new _b(this._normalizeRect(this._start,evt.mapPoint,this.map.spatialReference)));_19.add(_18,true);},_onMouseUpHandler:function(evt){var map=this.map,_1a=this._normalizeRect(this._start,evt.mapPoint,map.spatialReference);map.graphics.remove(this._graphic,true);if(_1a.width===0&&_1a.height===0){return;}if(this._navType===_f.ZOOM_IN){map.setExtent(new _b(_1a).getExtent());}else{var tl=map.toScreen(_1a),tr=map.toScreen({x:_1a.x+_1a.width,y:_1a.y,spatialReference:map.spatialReference}),_1b=map.extent.getWidth(),_1c=(_1b*map.width)/Math.abs(tr.x-tl.x),_1d=(_1c-_1b)/2,ext=map.extent;map.setExtent(new _a(ext.xmin-_1d,ext.ymin-_1d,ext.xmax+_1d,ext.ymax+_1d,ext.spatialReference));}},deactivate:function(){this._deactivate();if(this._graphic){this.map.graphics.remove(this._graphic,true);}this._navType=this._start=this._graphic=null;this._activateMapTools(true,false,false,true);},setZoomSymbol:function(_1e){this.zoomSymbol=_1e;},isFirstExtent:function(){return !this._undoManager.canUndo;},isLastExtent:function(){return !this._undoManager.canRedo;},zoomToFullExtent:function(){var map=this.map;map.setExtent(map.getLayer(map.layerIds[0]).initialExtent);},zoomToPrevExtent:function(){if(!this._undoManager.canUndo){return;}this._prevExtent=true;this._undoManager.undo();},zoomToNextExtent:function(){if(!this._undoManager.canRedo){return;}this._nextExtent=true;this._undoManager.redo();},onExtentHistoryChange:function(){}});_2.mixin(_f,{ZOOM_IN:"zoomin",ZOOM_OUT:"zoomout",PAN:"pan"});_f.MapExtent=_1(_9,{declaredClass:"esri.toolbars.MapExtent",label:"extent changes",constructor:function(_1f){this.map=_1f.map;this.preExtent=_1f.preExtent;this.currentExtent=_1f.currentExtent;},performRedo:function(){this.map.setExtent(this.currentExtent);},performUndo:function(){this.map.setExtent(this.preExtent);}});if(_5("extend-esri")){_2.setObject("toolbars.Navigation",_f,_6);_2.setObject("toolbars.MapExtent",_f.MapExtent,_6);}return _f;});