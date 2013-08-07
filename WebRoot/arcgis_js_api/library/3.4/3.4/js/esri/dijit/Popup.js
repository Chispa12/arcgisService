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
define("esri/dijit/Popup",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/kernel","dojo/has","dojo/window","dojo/Stateful","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/kernel","esri/lang","esri/sniff","esri/domUtils","esri/geometry/Polyline","esri/geometry/Polygon","esri/InfoWindowBase","esri/PopupBase","dojo/i18n!esri/nls/jsapi","dojo/NodeList-dom","dojo/has!extend-esri?esri/dijit/PopupTemplate","dojo/has!extend-esri?esri/dijit/PopupRenderer"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18){var _19=_1([_16,_17,_8],{declaredClass:"esri.dijit.Popup",offsetX:3,offsetY:3,zoomFactor:4,marginLeft:25,marginTop:25,highlight:true,pagingControls:true,pagingInfo:true,keepHighlightOnHide:false,popupWindow:true,constructor:function(_1a,_1b){this.initialize();_2.mixin(this,_1a);this.domNode=_a.byId(_1b);var nls=this._nls=_2.mixin({},_18.widgets.popup);var _1c=this.domNode;_c.add(_1c,"esriPopup");this._isRTL=!_e.isBodyLtr();if(this._isRTL){_f.set(_1c,"direction","rtl");}var _1d="<div class='esriPopupWrapper' style='position: absolute;'>"+"<div class='sizer'>"+"<div class='titlePane'>"+"<div class='spinner hidden' title='"+nls.NLS_searching+"...'></div>"+"<div class='title'></div>"+"<div class='titleButton prev hidden' title='"+nls.NLS_prevFeature+"'></div>"+"<div class='titleButton next hidden' title='"+nls.NLS_nextFeature+"'></div>"+"<div class='titleButton maximize' title='"+nls.NLS_maximize+"'></div>"+"<div class='titleButton close' title='"+nls.NLS_close+"'></div>"+"</div>"+"</div>"+"<div class='sizer content'>"+"<div class='contentPane'>"+"</div>"+"</div>"+"<div class='sizer'>"+"<div class='actionsPane'>"+"<div class='actionList hidden'>"+"<a class='action zoomTo' href='javascript:void(0);'>"+nls.NLS_zoomTo+"</a>"+"</div>"+"</div>"+"</div>"+"<div class='pointer hidden'></div>"+"</div>"+"<div class='outerPointer hidden'></div>";_b.set(_1c,"innerHTML",_1d);this._sizers=_5.query(".sizer",_1c);var _1e=_5.query(".titlePane",_1c)[0];_a.setSelectable(_1e,false);this._title=_5.query(".title",_1e)[0];this._prevFeatureButton=_5.query(".prev",_1e)[0];this._nextFeatureButton=_5.query(".next",_1e)[0];this._maxButton=_5.query(".maximize",_1e)[0];this._spinner=_5.query(".spinner",_1e)[0];this._contentPane=_5.query(".contentPane",_1c)[0];this._positioner=_5.query(".esriPopupWrapper",_1c)[0];this._pointer=_5.query(".pointer",_1c)[0];this._outerPointer=_5.query(".outerPointer",_1c)[0];this._actionList=_5.query(".actionsPane .actionList",_1c)[0];this._eventConnections=[_4.connect(_5.query(".close",_1e)[0],"onclick",this,this.hide),_4.connect(this._prevFeatureButton,"onclick",this,this.selectPrevious),_4.connect(this._nextFeatureButton,"onclick",this,this.selectNext),_4.connect(this._maxButton,"onclick",this,this._toggleSize),_4.connect(_5.query(".zoomTo",this._actionList)[0],"onclick",this,this._zoomToFeature),_4.connect(this,"onClearFeatures",this,this._featuresCleared),_4.connect(this,"onSelectionChange",this,this._featureSelected),_4.connect(this,"onDfdComplete",this,this._updateUI)];if(_6("esri-touch")){var _1f=_13.setScrollable(this._contentPane);this._eventConnections.push(_1f[0],_1f[1]);}this._toggleVisibility(false);},onMaximize:function(){},onRestore:function(){},setMap:function(map){this.inherited(arguments);_d.place(this.domNode,map.root);if(this.highlight){this.enableHighlight(map);}this._maxHeight=_f.get(this._contentPane,"maxHeight");},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments);},setTitle:function(_20){if(!this.popupWindow){return;}if(!_11.isDefined(_20)||_20===""){_20="&nbsp;";}this.destroyDijits(this._title);this.place(_20,this._title);if(this.isShowing){this.startupDijits(this._title);this.reposition();}},setContent:function(_21){if(!this.popupWindow){return;}if(!_11.isDefined(_21)||_21===""){_21="&nbsp;";}this.destroyDijits(this._contentPane);this.place(_21,this._contentPane);if(this.isShowing){this.startupDijits(this._contentPane);this.reposition();}},show:function(_22,_23){if(!this.popupWindow){return;}if(!_22){this._toggleVisibility(true);return;}var map=this.map,_24;if(_22.spatialReference){this._location=_22;_24=map.toScreen(_22);}else{this._location=map.toMap(_22);_24=_22;}var _25=map._getFrameWidth();if(_25!==-1){_24.x=_24.x%_25;if(_24.x<0){_24.x+=_25;}if(map.width>_25){var _26=(map.width-_25)/2;while(_24.x<_26){_24.x+=_25;}}}if(this._maximized){this.restore();}else{this._setPosition(_24);}if(_23&&_23.closestFirst){this.showClosestFirst(this._location);}if(!this.isShowing){this._toggleVisibility(true);this._followMap();this.startupDijits(this._title);this.startupDijits(this._contentPane);this.reposition();this.showHighlight();this.onShow();}},hide:function(){if(this.isShowing){this._toggleVisibility(false);this._unfollowMap();if(!this.keepHighlightOnHide){this.hideHighlight();}this.onHide();}},resize:function(_27,_28){if(!this.popupWindow){return;}this._sizers.style({width:_27+"px"});_f.set(this._contentPane,"maxHeight",_28+"px");this._maxHeight=_28;if(this.isShowing){this.reposition();}},reposition:function(){if(!this.popupWindow){return;}if(this.map&&this._location&&!this._maximized&&this.isShowing){this._setPosition(this.map.toScreen(this._location));}},maximize:function(){var map=this.map;if(!map||this._maximized||!this.popupWindow){return;}this._maximized=true;var max=this._maxButton;_c.remove(max,"maximize");_c.add(max,"restore");_b.set(max,"title",this._nls.NLS_restore);var _29=this.marginLeft,_2a=this.marginTop,_2b=map.width-(2*_29),_2c=map.height-(2*_2a),_2d=this.domNode;_f.set(_2d,{left:this._isRTL?null:(_29+"px"),right:this._isRTL?(_29+"px"):null,top:_2a+"px",bottom:null});_f.set(this._positioner,{left:null,right:null,top:null,bottom:null});this._savedWidth=_f.get(this._sizers[0],"width");this._savedHeight=_f.get(this._contentPane,"maxHeight");this._sizers.style({width:_2b+"px"});_f.set(this._contentPane,{maxHeight:(_2c-65)+"px",height:(_2c-65)+"px"});this._showPointer("");this._unfollowMap();_c.add(this.domNode,"esriPopupMaximized");this.onMaximize();},restore:function(){var map=this.map;if(!map||!this._maximized||!this.popupWindow){return;}this._maximized=false;var max=this._maxButton;_c.remove(max,"restore");_c.add(max,"maximize");_b.set(max,"title",this._nls.NLS_maximize);_f.set(this._contentPane,"height",null);this.resize(this._savedWidth,this._savedHeight);this._savedWidth=this._savedHeight=null;this.show(this._location);this._followMap();_c.remove(this.domNode,"esriPopupMaximized");this.onRestore();},startup:function(){},destroy:function(){if(this.map){this.unsetMap();}this.cleanup();if(this.isShowing){this.hide();}this.destroyDijits(this._title);this.destroyDijits(this._content);_3.forEach(this._eventConnections,_4.disconnect);_d.destroy(this.domNode);this._sizers=this._contentPane=this._actionList=this._positioner=this._pointer=this._outerPointer=this._title=this._prevFeatureButton=this._nextFeatureButton=this._spinner=this._eventConnections=this._pagerScope=this._targetLocation=this._nls=this._maxButton=null;},selectNext:function(){this.select(this.selectedIndex+1);},selectPrevious:function(){this.select(this.selectedIndex-1);},setFeatures:function(){this.inherited(arguments);this._updateUI();},postscript:null,_highlightSetter:function(_2e){var _2f=this.highlight,map=this.map;this.highlight=_2e;if(map&&_2e!==_2f){if(_2e){this.enableHighlight(map);var _30=this.features&&this.features[this.selectedIndex];if(_30){this.updateHighlight(map,_30);this.showHighlight();}}else{this.disableHighlight(map);}}},_pagingControlsSetter:function(_31){var _32=this.pagingControls,map=this.map;this.pagingControls=_31;if(map&&_31!==_32){this._updatePagingControls();}},_pagingInfoSetter:function(_33){var _34=this.pagingInfo,map=this.map;this.pagingInfo=_33;if(map&&_33!==_34&&this.features&&this.features.length){this._updatePagingInfo();}},_popupWindowSetter:function(_35){var _36=this.popupWindow,map=this.map;this.popupWindow=_35;if(map&&_35!==_36){if(_35){this._updateUI();this._updateWindow();}else{this.hide();this.showHighlight();}}},_featuresCleared:function(){this.setTitle("&nbsp;");this.setContent("&nbsp;");this._setPagerCallbacks(this);this._updateUI();this.hideHighlight();},_featureSelected:function(){this._updateUI();this._updateWindow();},_updateWindow:function(){var ptr=this.selectedIndex;if(ptr>=0){this.setContent(this.features[ptr].getContent());this.updateHighlight(this.map,this.features[ptr]);this.showHighlight();}},_toggleVisibility:function(_37){this._setVisibility(_37);this.isShowing=_37;},_setVisibility:function(_38){_f.set(this.domNode,"visibility",_38?"visible":"hidden");},_followMap:function(){this._unfollowMap();var map=this.map;this._handles=[_4.connect(map,"onPanStart",this,this._onPanStart),_4.connect(map,"onPan",this,this._onPan),_4.connect(map,"onZoomStart",this,this._onZoomStart),_4.connect(map,"onExtentChange",this,this._onExtentChange)];},_unfollowMap:function(){var _39=this._handles;if(_39){_3.forEach(_39,_4.disconnect);this._handles=null;}},_onPanStart:function(){var _3a=this.domNode.style;this._panOrigin={left:_3a.left,top:_3a.top,right:_3a.right,bottom:_3a.bottom};},_onPan:function(_3b,_3c){var _3d=this._panOrigin,dx=_3c.x,dy=_3c.y,_3e=_3d.left,top=_3d.top,_3f=_3d.right,_40=_3d.bottom;if(_3e){_3e=(parseFloat(_3e)+dx)+"px";}if(top){top=(parseFloat(top)+dy)+"px";}if(_3f){_3f=(parseFloat(_3f)-dx)+"px";}if(_40){_40=(parseFloat(_40)-dy)+"px";}_f.set(this.domNode,{left:_3e,top:top,right:_3f,bottom:_40});},_onZoomStart:function(){this._setVisibility(false);},_onExtentChange:function(_41,_42,_43){if(_43){this._setVisibility(true);this.show(this._targetLocation||this._location);}this._targetLocation=null;},_toggleSize:function(){if(this._maximized){this.restore();}else{this.maximize();}},_setPosition:function(_44){var _45=_44.x,_46=_44.y,_47=this.offsetX||0,_48=this.offsetY||0,_49=0,_4a=0,_4b=_e.position(this.map.container,true),_4c=_4b.w,_4d=_4b.h,_4e="Left",_4f="bottom",_50=_e.getContentBox(this._positioner),_51=_50.w/2,_52=_50.h/2,_53=_f.get(this._sizers[0],"height")+this._maxHeight+_f.get(this._sizers[2],"height"),_54=_53/2,_55=0,_56=0,_57=_4c,_58=_4d,_59=_45,_5a=_46;var _5b=_7.getBox;if(_5b){_5b=_5b();_55=Math.max(_5b.l,_4b.x);_57=Math.min(_5b.l+_5b.w,_4b.x+_4b.w);_56=Math.max(_5b.t,_4b.y);_58=Math.min(_5b.t+_5b.h,_4b.y+_4b.h);_59+=_4b.x;_5a+=_4b.y;}var _5c=((_5a-_56)>_54),_5d=((_58-_5a)>=_54),_5e=((_57-_59)>=_51),_5f=((_59-_55)>_51),_60=((_5a-_56)>=_53),_61=((_58-_5a)>=_53),_62=((_57-_59)>=_50.w),_63=((_59-_55)>=_50.w);if(_5c&&_5d){if(_62){_4f="";_4e="Left";}else{if(_63){_4f="";_4e="Right";}}}if(_4e&&_4f){if(_5f&&_5e){if(_60){_4e="";_4f="bottom";}else{if(_61){_4e="";_4f="top";}}}}if(_4e&&_4f){if(_62&&_60){_4e="Left";_4f="bottom";}else{if(_62&&_61){_4e="Left";_4f="top";}else{if(_63&&_61){_4e="Right";_4f="top";}else{if(_63&&_60){_4e="Right";_4f="bottom";}}}}}var _64=_4f+_4e;switch(_64){case "top":case "bottom":_4a=14;break;case "Left":case "Right":_49=13;break;case "topLeft":case "topRight":case "bottomLeft":case "bottomRight":_4a=45;break;}_f.set(this.domNode,{left:_45+"px",top:_46+"px",right:null,bottom:null});var _65={left:null,right:null,top:null,bottom:null};if(_4e){_65[_4e.toLowerCase()]=(_49+_47)+"px";}else{_65.left=(-_51)+"px";}if(_4f){_65[_4f]=(_4a+_48)+"px";}else{_65.top=(-_52)+"px";}_f.set(this._positioner,_65);this._showPointer(_64);},_showPointer:function(_66){_c.remove(this._pointer,["top","bottom","right","left","topLeft","topRight","bottomRight","bottomLeft","hidden"]);_c.remove(this._outerPointer,["right","left","hidden"]);if(_66==="Right"||_66==="Left"){_66=_66.toLowerCase();_c.add(this._outerPointer,_66);}else{_c.add(this._pointer,_66);}},_setPagerCallbacks:function(_67,_68,_69){if(!this.pagingControls){return;}if(_67===this&&(!this._pagerScope||this._pagerScope===this)){return;}if(_67===this._pagerScope){return;}this._pagerScope=_67;if(_67===this){_68=this.selectPrevious;_69=this.selectNext;}var _6a=this._eventConnections;_4.disconnect(_6a[1]);_4.disconnect(_6a[2]);if(_68){_6a[1]=_4.connect(this._prevFeatureButton,"onclick",_67,_68);}if(_69){_6a[2]=_4.connect(this._nextFeatureButton,"onclick",_67,_69);}},_getLocation:function(_6b){var map=this.map,_6c,_6d,_6e=0,_6f,_70=_6b&&_6b.geometry;if(_70){switch(_70.type){case "point":_6c=_70;break;case "multipoint":_6c=_70.getPoint(0);_6d=_70.getExtent();break;case "polyline":_6c=_70.getPoint(0,0);_6d=_70.getExtent();if(map._getFrameWidth()!==-1){_3.forEach(_70.paths,function(_71){var _72={"paths":[_71,map.spatialReference]},_73=new _14(_72),_74=_73.getExtent(),_75=Math.abs(_74.ymax-_74.ymin),_76=Math.abs(_74.xmax-_74.xmin),_77=(_76>_75)?_76:_75;if(_77>_6e){_6e=_77;_6f=_74;}});_6f.spatialReference=_6d.spatialReference;_6d=_6f;}break;case "polygon":_6c=_70.getPoint(0,0);_6d=_70.getExtent();if(map._getFrameWidth()!==-1){_3.forEach(_70.rings,function(_78){var _79={"rings":[_78,map.spatialReference]},_7a=new _15(_79),_7b=_7a.getExtent(),_7c=Math.abs(_7b.ymax-_7b.ymin),_7d=Math.abs(_7b.xmax-_7b.xmin),_7e=(_7d>_7c)?_7d:_7c;if(_7e>_6e){_6e=_7e;_6f=_7b;}});_6f.spatialReference=_6d.spatialReference;_6d=_6f;}break;}}return [_6c,_6d];},_zoomToFeature:function(){var _7f=this.features,ptr=this.selectedIndex,map=this.map;if(_7f){var _80=this._getLocation(_7f[ptr]),_81=_80[0],_82=_80[1];if(!_81){_81=this._location;}if(!_82||!_82.intersects(this._location)){this._location=_81;}if(_82){map.setExtent(_82,true);}else{var _83=map.getNumLevels(),_84=map.getLevel(),_85=map.getMaxZoom(),_86=this.zoomFactor||1;if(_83>0){if(_84===_85){return;}var _87=_84+_86;if(_87>_85){_87=_85;}map.navigationManager._wheelZoom({value:(_87-_84),mapPoint:_81},true);}else{map.navigationManager._wheelZoom({value:(1/Math.pow(2,_86))*2,mapPoint:_81},true);}}}},_updatePagingControls:function(){var _88=this._prevFeatureButton,_89=this._nextFeatureButton,ptr=this.selectedIndex,_8a=this.features?this.features.length:0;if(this.pagingControls&&_8a>1){if(ptr===0){_c.add(_88,"hidden");}else{_c.remove(_88,"hidden");}if(ptr===(_8a-1)){_c.add(_89,"hidden");}else{_c.remove(_89,"hidden");}}else{_c.add(_88,"hidden");_c.add(_89,"hidden");}},_updatePagingInfo:function(){var _8b=this.features?this.features.length:0,nls=this._nls,_8c="&nbsp;";if(this.pagingInfo&&_8b>1&&nls.NLS_pagingInfo){_8c=_11.substitute({index:this.selectedIndex+1,total:_8b},nls.NLS_pagingInfo);}this.setTitle(_8c);},_updateUI:function(){if(!this.popupWindow){return;}var _8d="&nbsp;",ptr=this.selectedIndex,_8e=this.features,_8f=this.deferreds,_90=_8e?_8e.length:0,_91=this._spinner,_92=this._actionList,nls=this._nls;this._updatePagingControls();this._updatePagingInfo();if(_8f&&_8f.length){if(_8e){_c.remove(_91,"hidden");}else{this.setContent("<div style='text-align: center;'>"+nls.NLS_searching+"...</div>");}}else{_c.add(_91,"hidden");if(!_90){this.setContent("<div style='text-align: center;'>"+nls.NLS_noInfo+".</div>");}}if(_90){_c.remove(_92,"hidden");}else{_c.add(_92,"hidden");}}});if(_6("extend-esri")){_2.setObject("dijit.Popup",_19,_10);}return _19;});