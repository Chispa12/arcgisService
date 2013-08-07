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
define("esri/dijit/PopupRenderer",["require","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dijit/_Templated","esri/kernel","dojo/i18n!esri/nls/jsapi","dojo/NodeList-dom"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11){var _12=0;var PR=_2([_e,_f],{declaredClass:"esri.dijit._PopupRenderer",constructor:function(){this._nls=_4.mixin({},_11.widgets.popup);},templateString:"<div class='esriViewPopup'>"+"<div class='mainSection'>"+"<div class='header' dojoAttachPoint='_title'></div>"+"<div class='hzLine'></div>"+"<div dojoAttachPoint='_description'></div>"+"<div class='break'></div>"+"</div>"+"<div class='attachmentsSection hidden'>"+"<div>${_nls.NLS_attach}:</div>"+"<ul dojoAttachPoint='_attachmentsList'>"+"</ul>"+"<div class='break'></div>"+"</div>"+"<div class='mediaSection hidden'>"+"<div class='header' dojoAttachPoint='_mediaTitle'></div>"+"<div class='hzLine'></div>"+"<div class='caption' dojoAttachPoint='_mediaCaption'></div>"+"<div class='gallery' dojoAttachPoint='_gallery'>"+"<div class='mediaHandle prev' dojoAttachPoint='_prevMedia' dojoAttachEvent='onclick: _goToPrevMedia'></div>"+"<div class='mediaHandle next' dojoAttachPoint='_nextMedia' dojoAttachEvent='onclick: _goToNextMedia'></div>"+"<ul class='summary'>"+"<li class='image mediaCount hidden' dojoAttachPoint='_imageCount'>0</li>"+"<li class='image mediaIcon hidden'></li>"+"<li class='chart mediaCount hidden' dojoAttachPoint='_chartCount'>0</li>"+"<li class='chart mediaIcon hidden'></li>"+"</ul>"+"<div class='frame' dojoAttachPoint='_mediaFrame'></div>"+"</div>"+"</div>"+"<div class='editSummarySection hidden' dojoAttachPoint='_editSummarySection'>"+"<div class='break'></div>"+"<div class='break hidden' dojoAttachPoint='_mediaBreak'></div>"+"<div class='editSummary' dojoAttachPoint='_editSummary'></div>"+"</div>"+"</div>",startup:function(){this.inherited(arguments);var _13=this.template,_14=this.graphic,_15=_13.getComponents(_14),_16=_15.title,_17=_15.description,_18=_15.fields,_19=_15.mediaInfos,_1a=this.domNode,nls=this._nls;this._prevMedia.title=nls.NLS_prevMedia;this._nextMedia.title=nls.NLS_nextMedia;_a.set(this._title,"innerHTML",_16);if(!_16){_b.add(this._title,"hidden");}if(!_17&&_18){_17="";_5.forEach(_18,function(row){_17+=("<tr valign='top'>");_17+=("<td class='attrName'>"+row[0]+"</td>");_17+=("<td class='attrValue'>"+row[1].replace(/^\s*(https?:\/\/[^\s]+)\s*$/i,"<a target='_blank' href='$1' title='$1'>"+nls.NLS_moreInfo+"</a>")+"</td>");_17+=("</tr>");});if(_17){_17="<table class='attrTable' cellpadding='0px' cellspacing='0px'>"+_17+"</table>";}}_a.set(this._description,"innerHTML",_17);if(!_17){_b.add(this._description,"hidden");}_6.query("a",this._description).forEach(function(_1b){_a.set(_1b,"target","_blank");});if(_16&&_17){_6.query(".mainSection .hzLine",_1a).removeClass("hidden");}else{if(_16||_17){_6.query(".mainSection .hzLine",_1a).addClass("hidden");}else{_6.query(".mainSection",_1a).addClass("hidden");}}var dfd=(this._dfd=_13.getAttachments(_14));if(dfd){dfd.addBoth(_4.hitch(this,this._attListHandler,dfd));_a.set(this._attachmentsList,"innerHTML","<li>"+nls.NLS_searching+"...</li>");_6.query(".attachmentsSection",_1a).removeClass("hidden");}if(_19&&_19.length){_6.query(".mediaSection",_1a).removeClass("hidden");_9.setSelectable(this._mediaFrame,false);this._mediaInfos=_19;this._mediaPtr=0;this._updateUI();this._displayMedia();}if(_15.editSummary){_a.set(this._editSummary,"innerHTML",_15.editSummary);if(_19&&_19.length){_b.remove(this._mediaBreak,"hidden");}_b.remove(this._editSummarySection,"hidden");}},destroy:function(){if(this._dfd){this._dfd.cancel();}this._destroyFrame();this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._dfd=null;this.inherited(arguments);},_goToPrevMedia:function(){var ptr=this._mediaPtr-1;if(ptr<0){return;}this._mediaPtr--;this._updateUI();this._displayMedia();},_goToNextMedia:function(){var ptr=this._mediaPtr+1;if(ptr===this._mediaInfos.length){return;}this._mediaPtr++;this._updateUI();this._displayMedia();},_updateUI:function(){var _1c=this._mediaInfos,_1d=_1c.length,_1e=this.domNode,_1f=this._prevMedia,_20=this._nextMedia;if(_1d>1){var _21=0,_22=0;_5.forEach(_1c,function(_23){if(_23.type==="image"){_21++;}else{if(_23.type.indexOf("chart")!==-1){_22++;}}});if(_21){_a.set(this._imageCount,"innerHTML",_21);_6.query(".summary .image",_1e).removeClass("hidden");}if(_22){_a.set(this._chartCount,"innerHTML",_22);_6.query(".summary .chart",_1e).removeClass("hidden");}}else{_6.query(".summary",_1e).addClass("hidden");_b.add(_1f,"hidden");_b.add(_20,"hidden");}var ptr=this._mediaPtr;if(ptr===0){_b.add(_1f,"hidden");}else{_b.remove(_1f,"hidden");}if(ptr===_1d-1){_b.add(_20,"hidden");}else{_b.remove(_20,"hidden");}this._destroyFrame();},_displayMedia:function(){var _24=this._mediaInfos[this._mediaPtr],_25=_24.title,_26=_24.caption,_27=_6.query(".mediaSection .hzLine",this.domNode)[0];_a.set(this._mediaTitle,"innerHTML",_25);_b[_25?"remove":"add"](this._mediaTitle,"hidden");_a.set(this._mediaCaption,"innerHTML",_26);_b[_26?"remove":"add"](this._mediaCaption,"hidden");_b[(_25&&_26)?"remove":"add"](_27,"hidden");this._rid=null;if(_24.type==="image"){this._showImage(_24.value);}else{var _28=this,_29=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],_2a=_24.value.theme||this.chartTheme||"esri/dijit/Rainbow";if(_4.isString(_2a)){_2a=_2a.replace(/\./gi,"/");if(_2a.indexOf("/")===-1){_2a="dojox/charting/themes/"+_2a;}_29.push(_2a);}try{var rid=(this._rid=_12++);_1(_29,function(_2b,_2c,_2d){if(rid===_28._rid){_28._rid=null;_28._showChart(_24.type,_24.value,_2b,_2c,_2d);}});}catch(err){console.log("PopupRenderer: error loading modules");}}},_showImage:function(_2e){_b.add(this._mediaFrame,"image");var _2f=_d.get(this._gallery,"height"),_30="<img class='esriPopupMediaImage' src='"+_2e.sourceURL+"' />";if(_2e.linkURL){_30="<a target='_blank' href='"+_2e.linkURL+"'>"+_30+"</a>";}_a.set(this._mediaFrame,"innerHTML",_30);var img=_6.query(".esriPopupMediaImage",this._mediaFrame)[0],_31=this,_32;_32=_3.connect(img,"onload",function(){_3.disconnect(_32);_32=null;_31._imageLoaded(img,_2f);});},_showChart:function(_33,_34,_35,_36,_37){_b.remove(this._mediaFrame,"image");var _38=this._chart=new _35(_c.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});if(_37){_38.setTheme(_37);}switch(_33){case "piechart":_38.addPlot("default",{type:"Pie",labels:false});_38.addSeries("Series A",_34.fields);break;case "linechart":_38.addPlot("default",{type:"Markers"});_38.addAxis("x",{min:0,majorTicks:false,minorTicks:false,majorLabels:false,minorLabels:false});_38.addAxis("y",{includeZero:true,vertical:true,fixUpper:"minor"});_5.forEach(_34.fields,function(_39,idx){_39.x=idx+1;});_38.addSeries("Series A",_34.fields);break;case "columnchart":_38.addPlot("default",{type:"Columns",gap:3});_38.addAxis("y",{includeZero:true,vertical:true,fixUpper:"minor"});_38.addSeries("Series A",_34.fields);break;case "barchart":_38.addPlot("default",{type:"Bars",gap:3});_38.addAxis("x",{includeZero:true,fixUpper:"minor",minorLabels:false});_38.addAxis("y",{vertical:true,majorTicks:false,minorTicks:false,majorLabels:false,minorLabels:false});_38.addSeries("Series A",_34.fields);break;}this._action=new _36(_38);_38.render();},_destroyFrame:function(){this._rid=null;if(this._chart){this._chart.destroy();this._chart=null;}if(this._action){this._action.destroy();this._action=null;}_a.set(this._mediaFrame,"innerHTML","");},_imageLoaded:function(img,_3a){var _3b=img.height;if(_3b<_3a){var _3c=Math.round((_3a-_3b)/2);_d.set(img,"marginTop",_3c+"px");}},_attListHandler:function(dfd,_3d){if(dfd===this._dfd){this._dfd=null;var _3e="";if(!(_3d instanceof Error)&&_3d&&_3d.length){_5.forEach(_3d,function(_3f){_3e+=("<li>");_3e+=("<a href='"+_3f.url+"' target='_blank'>"+(_3f.name||"[No name]")+"</a>");_3e+=("</li>");});}_a.set(this._attachmentsList,"innerHTML",_3e||"<li>"+this._nls.NLS_noAttach+"</li>");}}});if(_7("extend-esri")){_4.setObject("dijit._PopupRenderer",PR,_10);}return PR;});