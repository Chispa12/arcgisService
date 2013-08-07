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
define("esri/nls/jsapi_it-it",{"dijit/form/nls/validate":{"rangeMessage":"Questo valore è fuori dall'intervallo consentito.","invalidMessage":"Il valore immesso non è valido.","missingMessage":"Questo valore è obbligatorio."},"esri/nls/jsapi":{"identity":{"noAuthService":"Impossibile accedere al servizio di autenticazione.","lblCancel":"Annulla","lblUser":"Nome utente:","title":"Accesso","forbidden":"Il nome utente e la password sono validi, ma non si dispone di accesso alla risorsa.","errorMsg":"Nome utente/password non validi. Riprovare.","lblItem":"elemento","lblOk":"OK","info":"Effettuare l´accesso per accedere all´elemento su ${server} ${resource}","lblSigning":"Accesso in corso...","invalidUser":"Il nome utente o la password immessi non sono validi.","lblPwd":"Password:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom deprecato. Shift-Double-Click zoom behavior non sarà supportato.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecato. Utilizzare Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"BingMapsKey deve essere specificato."},"vegeocode":{"bingMapsKeyNotSpecified":"BingMapsKey deve essere specificato.","requestQueued":"Token server non recuperato. La richiesta di accodamento verrà eseguita dopo il recupero del token del server."}},"bufferTool":{"sizeHelp":"Per creare più buffer, immettere le distanze separate da spazi (2 3 5.5).","typeLabel":"Tipo di buffer","disks":"Dischi","round":"Arrotondato","right":"Destra","distanceMsg":"Sono consentiti solo valori numerici","itemDescription":"Feature service generato dall´esecuzione della soluzione Feature buffer. I dati di input di ${layername} sono stati memorizzati nel buffer a una distanza di ${distance_field} ${units}","resultLabel":"Nome layer risultati","around":"Intorno a","sideType":"Tipo di lato","flat":"Piatto","multipleDistance":"I buffer per più distanze devono essere","outputLayerName":"Buffer di ${layername}","rings":"Anelli","sizeLabel":"Immetti dimensione buffer","itemTags":"Buffer, ${layername}","areaofInputPoly":"Poligoni dell´area di input in poligoni buffer","left":"Sinistra","bufferDefine":"Crea buffer da <b>${layername}</b>","distance":"Distanza","itemSnippet":"Feature service Analisi generato da Buffer","endType":"Tipo finale","field":"Campo","optionsLabel":"Opzioni","include":"Includi","exclude":"Escludi","dissolve":"Dissolvi","overlap":"Sovrapponi"},"widgets":{"attributeInspector":{"NLS_title":"Modifica attributi","NLS_validationFlt":"Il valore deve essere mobile.","NLS_noFeaturesSelected":"Nessuna feature selezionata","NLS_validationInt":"Il valore deve essere un numero intero.","NLS_next":"Seguente","NLS_errorInvalid":"Non valido","NLS_previous":"Precedente","NLS_first":"Primo","NLS_deleteFeature":"Elimina","NLS_of":"di","NLS_last":"Ultimo"},"legend":{"NLS_polygons":"Poligoni","NLS_lines":"Linee","NLS_noLegend":"Nessuna legenda","NLS_points":"Punti","NLS_creatingLegend":"Creazione legenda"},"directions":{"getDirections":"Ottieni indicazioni","findOptimalOrder":"Trova ordine ottimale","showOptions":"Mostra opzioni","reverseDirections":"Inverti indicazioni","addDestination":"Aggiungi destinazione","returnToStart":"Torna all´inizio","error":{"maximumStops":"È stato raggiunto il numero massimo di fermate","notEnoughStops":"Immettere un´origine e una destinazione.","invalidStopType":"Tipo di fermata non valido","locator":"Località non trovata.","noAddresses":"Non sono stati restituiti indirizzi.","unknownStop":"Località ´<name>´ non trovata.","noStops":"Non sono state specificate fermate da aggiungere.","routeTask":"Impossibile creare il percorso per questi indirizzi.","locatorUndefined":"Impossibile eseguire la geocodifica inversa. URL del localizzatore non definito."},"hideOptions":"Nascondi opzioni","units":{"KILOMETERS":{"name":"chilometri","abbr":"km"},"MILES":{"name":"miglia","abbr":"mi"},"METERS":{"name":"metri","abbr":"m"},"NAUTICAL_MILES":{"name":"miglia nautiche","abbr":"nm"}},"time":{"minute":"minuto","minutes":"minuti","hour":"ora","hours":"ore"},"printNotes":"Immettere qui le note","viewFullRoute":"Zoom a percorso completo","printDisclaimer":"Le indicazioni vengono fornite solo per la pianificazione e sono soggette alle <a href='http://www.esri.com/legal/software-license' target='_blank'>Condizioni d´uso Esri</a>. È necessario tenere conto delle condizioni effettive della strada, che potrebbero essere diverse da quelle delle indicazioni, nonché dei segnali stradali e delle limitazioni previste per legge. L´utente si assume tutti i rischi connessi all´utilizzo delle indicazioni.","print":"Stampa"},"timeSlider":{"NLS_previous":"Precedente","NLS_play":"Riproduci/Pausa","NLS_next":"Seguente","NLS_invalidTimeExtent":"TimeExtent non specificato o in un formato non corretto.","NLS_first":"Primo"},"templatePicker":{"loading":"Caricamento in corso...","creationDisabled":"La creazione delle feature è disabilitata per tutti i layer."},"editor":{"tools":{"NLS_pointLbl":"Punto","NLS_reshapeLbl":"Modifica forma","NLS_arrowLeftLbl":"Freccia sinistra","NLS_triangleLbl":"Triangolo","NLS_autoCompleteLbl":"Completamento automatico","NLS_arrowDownLbl":"Freccia giù","NLS_selectionRemoveLbl":"Elimina da selezione","NLS_unionLbl":"Unione","NLS_freehandPolylineLbl":"Polilinea a mano libera","NLS_rectangleLbl":"Rettangolo","NLS_ellipseLbl":"Ellisse","NLS_attributesLbl":"Attributi","NLS_arrowUpLbl":"Freccia su","NLS_arrowRightLbl":"Freccia destra","NLS_undoLbl":"Annulla","NLS_arrowLbl":"Freccia","NLS_cutLbl":"Taglia","NLS_polylineLbl":"Polilinea","NLS_selectionClearLbl":"Cancella selezione","NLS_polygonLbl":"Poligono","NLS_selectionUnionLbl":"Unione","NLS_freehandPolygonLbl":"Poligono a mano libera","NLS_deleteLbl":"Elimina","NLS_extentLbl":"Limiti","NLS_selectionNewLbl":"Nuova selezione","NLS_circleLbl":"Cerchio","NLS_redoLbl":"Ripeti","NLS_selectionAddLbl":"Aggiungi a selezione"}},"attachmentEditor":{"NLS_error":"Errore.","NLS_attachments":"Allegati:","NLS_none":"Nessuno","NLS_add":"Aggiungi","NLS_fileNotSupported":"Questo tipo di file non è supportato."},"overviewMap":{"NLS_invalidSR":"Riferimento spaziale del livello dato non compatibile con la mappa principale","NLS_invalidType":"Tipo di livello non supportato. I tipi validi sono ´TiledMapServiceLayer´e ´DynamicMapServiceLayer´","NLS_noMap":"´map´ non trovato nei parametri di input","NLS_hide":"Nascondi anteprima mappa","NLS_drag":"Trascinare per modificare i limiti della mappa","NLS_maximize":"Ingrandisci","NLS_noLayer":"La mappa principale non dispone di un livello di base","NLS_restore":"Ripristina","NLS_show":"Mostra anteprima mappa"},"measurement":{"NLS_length_kilometers":"Chilometri","NLS_area_sq_miles":"Miglia quadre","NLS_length_yards":"Iarde","NLS_distance":"Distanza","NLS_area_acres":"Acri","NLS_resultLabel":"Risultato misurazione","NLS_length_miles":"Miglia","NLS_area_hectares":"Ettari","NLS_deg_min_sec":"DMS","NLS_area":"Area","NLS_area_sq_meters":"Metri quadri","NLS_latitude":"Latitudine","NLS_area_sq_kilometers":"Chilometri quadri","NLS_area_sq_feet":"Piedi quadri","NLS_longitude":"Longitudine","NLS_location":"Posizione","NLS_decimal_degrees":"Gradi","NLS_length_feet":"Piedi","NLS_area_sq_yards":"Iarde quadre","NLS_length_meters":"Metri","NLS_map_coordinate":"Coordinate mappa"},"bookmarks":{"NLS_add_bookmark":"Aggiungi segnalibro","NLS_new_bookmark":"Senza titolo","NLS_bookmark_edit":"Modifica","NLS_bookmark_remove":"Rimuovi"},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Cambia geocodificatore","untitledGeocoder":"Geocodificatore senza titolo","clearButtonTitle":"Cancella ricerca","searchButtonTitle":"Cerca","geocoderMenuCloseTitle":"Chiudi menu","geocoderMenuHeader":"Seleziona geocodificatore"},"esriGeocoderName":"Geocodificatore mondiale Esri"},"popup":{"NLS_attach":"Allegati","NLS_nextFeature":"Oggetto feature seguente","NLS_moreInfo":"Altre informazioni","NLS_searching":"Ricerca in corso","NLS_maximize":"Ingrandisci","NLS_noAttach":"Nessun allegato trovato","NLS_noInfo":"Nessuna informazione disponibile","NLS_pagingInfo":"(${index} di ${total})","NLS_restore":"Ripristina","NLS_prevFeature":"Oggetto feature precedente","NLS_nextMedia":"Media seguente","NLS_close":"Chiudi","NLS_zoomTo":"Zoom a","NLS_prevMedia":"Media precedente"},"HistogramTimeSlider":{"NLS_play":"Riproduci/Pausa","NLS_range":"intervallo completo","NLS_invalidTimeExtent":"TimeExtent non specificato o in un formato non corretto.","NLS_overview":"PANORAMICA","NLS_cumulative":"Cumulativo"},"print":{"NLS_printing":"Stampa in corso","NLS_printout":"Stampa","NLS_print":"Stampa"}},"toolbars":{"draw":{"addShape":"Fare clic per aggiungere una forma o premere per iniziare e rilasciare per terminare","finish":"Fare doppio clic per terminare","invalidType":"Tipo di geometria non supportato","resume":"Fare clic per continuare a disegnare","addPoint":"Fare clic per aggiungere un punto","freehand":"Premere per iniziare e rilasciare per terminare","complete":"Fare doppio clic per completare","start":"Fare clic per iniziare a disegnare","addMultipoint":"Fare clic per iniziare ad aggiungere punti","convertAntiClockwisePolygon":"I poligoni tracciati in senso antiorario verranno ridisegnati in senso orario."},"edit":{"invalidType":"Impossibile attivare lo strumento. Verificare che lo strumento sia valido per il tipo di geometria dato.","deleteLabel":"Elimina"}},"tasks":{"gp":{"gpDataTypeNotHandled":"Tipo di dati GP non gestito."},"query":{"invalid":"Impossibile eseguire la query. Verificare i parametri."},"na":{"route":{"routeNameNotSpecified":"´RouteName´ non specificato per almeno 1 fermata nel FeatureSet delle fermate."}}},"driveTimes":{"measureLabel":"Misura:","toolDefine":"Crea aree intorno a <b>${layername}</b>","itemTags":"Tempi di guida, ${layername}","itemSnippet":"Feature service Analisi generato da Crea poligoni tempi di guida","measureHelp":"Per ottenere più aree per ogni punto, digitare le dimensioni separate da spazi (2 3.5 5)","itemDescription":"Feature service generato dall´esecuzione della soluzione Crea poligoni tempo di guida.","areaLabel":"Aree da punti diversi:","trafficLabel":"Usa condizioni del traffico (facoltativo)","resultLabel":"Nome layer risultati","outputLayerName":"Guida da ${layername}: ---"},"analysisTools":{"aggregateTool":"Aggrega punti","createDensitySurface":"Crea superficie di densità","sumnearby":"Riepiloga nelle vicinanze","attributeCalculator":"Calcolatore attributi","createBuffers":"Crea buffer","extractData":"Estrai dati","dataEnrichment":"Data Enrichment","dissolveBoundaries":"Dissolvi confini","analyzePatterns":"Analizza modelli","findClosestFacility":"Trova più vicine","mergeLayers":"Unisci layer","summarizeWithin":"Riepiloga entro","pubRoleMsg":"L´account online non è stato assegnato al ruolo Editore.","findLocations":"Trova località","findExistingLocations":"Trova località esistenti","bufferTool":"Dati buffer","emptyResultInfoMsg":"The result of your analysis did not return any features. No layer will be created.","summarizeData":"Riepiloga dati","generateFleetPlan":"Genera piano itinerari per flotta","servNameExists":"È già presente un risultato con questo nome. Rinominarlo e inviare nuovamente l´analisi.","findHotSpots":"Trova hot spot","performAnalysis":"Esegui analisi","createInterpolatedSurface":"Crea superficie","driveTimes":"Crea poligoni tempo di guida","overlayLayers":"Sovrapponi layer","outputLayerLabel":"Nome layer risultati","bufferToolName":"Crea buffer","correlationReporter":"Esplora correlazioni","geoenrichLayer":"Arricchisci feature","findRoute":"Trova percorso","findNewLocations":"Deriva nuove località","useProximity":"Usa prossimità","manageData":"Gestisci dati","orgUsrMsg":"Per eseguire il servizio, è necessario essere membro di un´organizzazione.","aggregateToolName":"Aggrega punti","outputFileName":"Nome file di output"},"common":{"feet":"Piede/i","nautMiles":"Miglio/a nautico/che","apply":"Applica","errorTitle":"Errore","statistic":"Statistica","titleLabel":"Titolo:","fourLabel":"4.","newLabel":"Nuovo","close":"Chiudi","kilometers":"Chilometro/i","previous":"Precedente","share":"Condividi","runAnalysis":"Analizza","yards":"Iarda/e","yesLabel":"Sì","oneLabel":"1.","ok":"OK","maximum":"Massimo","miles":"Miglio/a","attribute":"Attributo","help":"Guida","comingSoonLabel":"Disponibile a breve","deleteLabel":"Elimina","outputnameMissingMsg":"Nome di output obbligatorio","minimum":"Minimo","remove":"Rimuovi","inches":"Pollice/i","upload":"Carica","open":"Apri","submit":"Invia","save":"Salva","edit":"Modifica","average":"Media","selectAttribute":"Seleziona attributo","sum":"Somma","standardDev":"Deviazione standard","threeLabel":"3.","done":"Fine","twoLabel":"2.","create":"Crea","warning":"Avviso","cancel":"Annulla","noLabel":"No","meters":"Metro/i","arcgis":"ArcGIS","pointsUnit":"Punto/i","next":"Seguente","degree":"Grado/i decimale/i"},"extractDataTool":{"selectFtrs":"Seleziona feature","outputfileName":"NomeOutput.zip","itemTags":"Analisi, Estrai dati","itemSnippet":"Elemento del file di analisi generato da Estrai dati","clipFtrs":"Feature di taglio","sameAsLayer":"Come ${layername}","itemDescription":"File generato dall´esecuzione della soluzione Estrai dati.","lyrpkg":"Layer package","outputDataFormat":"Formato dati di output","sameAsDisplay":"Come visualizzato","layersToExtract":"Layer da estrarre","studyArea":"Area di studio","filegdb":"Geodatabase file","shpFile":"Shapefile"},"aggregatePointsTool":{"removeAttrStats":"Rimuovi statistiche attributi","itemTags":"Analisi, Aggrega punti, ${pointlayername}, ${polygonlayername}","groupByLabel":"Scegli attributo in base a cui raggruppare (facoltativo)","itemSnippet":"Feature service Analisi generato da Aggrega punti","chooseAreaLabel":"Scegli area","aggregateDefine":"Conta <b>${layername}</b> entro","itemDescription":"Feature service generato dall´esecuzione di soluzioni Aggrega punti. I punti del file CSV ${pointlayername} sono stati aggregati in ${polygonlayername}","keepPolygonLabel":"Mantieni poligoni senza punti","outputLayerName":"Aggregazione di ${pointlayername} in ${polygonlayername}","addStatsLabel":"Aggiungi statistiche (facoltativo)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl non impostato."},"layers":{"FeatureLayer":{"createUserHours":"Creato da ${userId} ${hours} ore fa","editUserMinutes":"Modificato da ${userId} ${minutes} minuti fa","editHour":"Modificato un´ora fa","editMinute":"Modificato un minuto fa","editUserMinute":"Modificato da ${userId} un minuto fa","editSeconds":"Modificato qualche secondo fa","createUserFull":"Creato da ${userId} il giorno ${formattedDate} alle ore ${formattedTime}","editWeekDay":"Modificato il giorno ${weekDay} alle ore ${formattedTime}","createUserMinutes":"Creato da ${userId} ${minutes} minuti fa","createUserHour":"Creato da ${userId} un´ora fa","editUserSeconds":"Modificato da ${userId} qualche secondo fa","editUserWeekDay":"Modificato da ${userId} ${weekDay} alle ore ${formattedTime}","editUserFull":"Modificato da ${userId} il giorno ${formattedDate} alle ore ${formattedTime}","createFull":"Creato il giorno ${formattedDate} alle ore ${formattedTime}","editUser":"Modificato da ${userId}","noOIDField":"objectIdField non impostato [url: ${url}]","editUserHour":"Modificato da ${userId} un´ora fa","createHour":"Creato un´ora fa","updateError":"Errore durante l´aggiornamento del livello","createUserWeekDay":"Creato da ${userId} ${weekDay} alle ore ${formattedTime}","invalidParams":"La query contiene uno o più parametri non supportati","editHours":"Modificato ${hours} ore fa","noGeometryField":"Impossibile trovare un campo di tipo ´esriFieldTypeGeometry´ nelle informazioni ´fields´ del livello. Se si utilizza un livello di map service, le feature non avranno geometria [url: ${url}]","createUserMinute":"Creato da ${userId} un minuto fa","createUser":"Creato da ${userId}","createMinute":"Creato un minuto fa","createMinutes":"Creato ${minutes} minuti fa","fieldNotFound":"Impossibile trovare il campo ´${field}´ nelle informazioni ´fields´ del livello [url: ${url}]","createHours":"Creato ${hours} ore fa","editUserHours":"Modificato da ${userId} ${hours} ore fa","editMinutes":"Modificato ${minutes} minuti fa","createSeconds":"Creato qualche secondo fa","createUserSeconds":"Creato da ${userId} qualche secondo fa","createWeekDay":"Creato il giorno ${weekDay} alle ore ${formattedTime}","editFull":"Modificato il giorno ${formattedDate} alle ore ${formattedTime}"},"dynamic":{"imageError":"Impossibile caricare l´immagine"},"tiled":{"tileError":"Impossibile caricare la tile"},"imageParameters":{"deprecateBBox":"Proprietà ´bbox´ deprecata. Usare la proprietà ´extent´."},"agstiled":{"deprecateRoundrobin":"Opzione costruttore ´roundrobin´ deprecata. Usare l´opzione ´tileServers´."},"graphics":{"drawingError":"Impossibile disegnare l´elemento grafico "}},"findHotSpotsTool":{"hotspotsPointDefine":"Analizza <b>${layername}</b> per trovare hot spot e cold spot statisticamente rilevanti ","itemTags":"Analisi, Hot spot, ${layername}, ${fieldname}","itemSnippet":"Feature service Analisi generato da Trova hot spot","defineBoundingLabel":"Definisci punti in cui sono possibili incidenti","blayerName":"Confini segnati","Options":"Opzioni","hotspots":"Hot spot","defaultAggregationOption":"Seleziona aree di aggregazione","itemDescription":"Feature service generato dall´esecuzione della soluzione Trova hot spot.","chooseAttributeLabel":"Scegli un campo di analisi","provideAggLabel":"Specifica aree di aggregazione per sommare incidenti","hotspotsPolyDefine":"Analizza <b>${layername}</b> per trovare hot spot e cold spot statisticamente rilevanti di ","defaultBoundingOption":"Seleziona aree di confine","fieldLabel":"con o senza un campo di analisi","noAnalysisField":"Senza campo di analisi","outputLayerName":"Hot spot ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint deprecato. Utilizzare esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint deprecato. Utilizzare esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Analisi, Sovrapponi layer, ${layername}","unionOutputLyrName":"unione di ${layername} e ${overlayname}","itemSnippet":"Feature service Analisi generato da Sovrapponi layer","eraseOutputLyrName":"cancella ${layername} con ${overlayname}","chooseOverlayMethod":"Scegli metodo di sovrapposizione","itemDescription":"Feature service generato dall´esecuzione della soluzione Sovrapponi layer.","union":"Unione","overlayDefine":"Sovrapponi <b>${layername}</b> a","intersectOutputLyrName":"intersezione di ${layername} e ${overlayname}","overlayLayerPolyMsg":"Il layer di sovrapposizione deve essere di tipo poligono per la sovrapposizione di tipo unione","notSupportedEraseOverlayMsg":"Layer di sovrapposizione non supportato per la sovrapposizione di tipo cancellazione. Verrà utilizzata la sovrapposizione di tipo intersezione.","intersect":"Incrocia","erase":"Cancella","chooseOverlayLayer":"Scegli layer per sovrapposizione"},"arcgis":{"utils":{"geometryServiceError":"Specificare un servizio di geometria per aprire la mappa Web.","baseLayerError":"Impossibile caricare il livello della mappa di base"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["dom","lun","mar","mer","gio","ven","sab"],"months-format-narrow":["G","F","M","A","M","G","L","A","S","O","N","D"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"giorno della settimana","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yyQQQQ":"QQQQ yy","dateFormatItem-yMEd":"E d/M/y","dateFormatItem-MMMEd":"E d MMM","eraNarrow":["aC","dC"],"days-format-short":["dom","lun","mar","mer","gio","ven","sab"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"dd MMMM y","months-format-wide":["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"PM","dateFormat-full":"EEEE d MMMM y","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"d/M/y","field-era":"era","dateFormatItem-yM":"M/y","months-standAlone-wide":["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],"timeFormat-short":"HH:mm","quarters-format-wide":["1o trimestre","2o trimestre","3o trimestre","4o trimestre"],"timeFormat-long":"HH:mm:ss z","field-year":"anno","dateFormatItem-yMMM":"MMM y","dateFormatItem-yQ":"Q-yyyy","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"ora","dateFormatItem-yyyyMMMM":"MMMM y","dateFormatItem-MMdd":"dd/MM","months-format-abbr":["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],"dateFormatItem-yyQ":"Q yy","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"oggi","field-day-relative+1":"domani","field-day-relative+2":"dopodomani","dateFormatItem-H":"HH","months-standAlone-abbr":["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],"quarters-format-abbr":["T1","T2","T3","T4"],"quarters-standAlone-wide":["Primo trimestre","Secondo trimestre","Terzo trimestre","Quarto trimestre"],"dateFormatItem-M":"L","days-standAlone-wide":["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],"timeFormat-medium":"HH:mm:ss","dateFormatItem-Hm":"HH:mm","quarters-standAlone-abbr":["T1","T2","T3","T4"],"eraAbbr":["aC","dC"],"field-minute":"minuto","field-dayperiod":"periodo del giorno","days-standAlone-abbr":["dom","lun","mar","mer","gio","ven","sab"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"ieri","dateFormatItem-h":"hh a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"m.","field-day-relative+-2":"l'altro ieri","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E d/M","dateTimeFormat-full":"{1} {0}","field-day":"giorno","days-format-wide":["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],"field-zone":"zona","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["G","F","M","A","M","G","L","A","S","O","N","D"],"field-year-relative+-1":"Anno scorso","field-month-relative+-1":"Mese scorso","dateFormatItem-yyMM":"MM/yy","dateFormatItem-hm":"hh:mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["dom","lun","mar","mer","gio","ven","sab"],"dateFormatItem-yMMMd":"d MMM y","eraNames":["a.C.","d.C"],"days-format-narrow":["D","L","M","M","G","V","S"],"days-standAlone-narrow":["D","L","M","M","G","V","S"],"dateFormatItem-MMM":"LLL","field-month":"mese","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"AM","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMdd":"dd MMMM","dateFormat-short":"dd/MM/yy","field-second":"secondo","dateFormatItem-yMMMEd":"E d MMM y","field-month-relative+0":"Questo mese","field-month-relative+1":"Mese prossimo","dateFormatItem-Ed":"E d","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"settimana","dateFormat-medium":"dd/MMM/y","field-year-relative+0":"Questo anno","field-week-relative+-1":"Settimana scorsa","field-year-relative+1":"Anno prossimo","dayPeriods-format-narrow-pm":"p.","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"hh:mm:ss a","field-week-relative+0":"Questa settimana","field-week-relative+1":"Settimana prossima"},"dijit/nls/loading":{"loadingState":"Caricamento in corso...","errorState":"Si è verificato un errore"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 B","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"¤ #,##0.00","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":".","percentFormat":"#,##0%","decimalFormat-long":"000 bilioni","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"dijit/nls/common":{"buttonOk":"Ok","buttonCancel":"Annulla","buttonSave":"Salva","itemClose":"Chiudi"}});