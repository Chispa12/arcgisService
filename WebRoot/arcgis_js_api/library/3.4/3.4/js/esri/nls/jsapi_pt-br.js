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
define("esri/nls/jsapi_pt-br",{"dijit/form/nls/validate":{"rangeMessage":"Este valor está fora do intervalo. ","invalidMessage":"O valor inserido não é válido.","missingMessage":"Este valor é necessário."},"esri/nls/jsapi":{"identity":{"noAuthService":"Não foi possível acessar o serviço de autenticação.","lblCancel":"Cancelar","lblUser":"Nome de Usuário:","title":"Registrar","forbidden":"O nome de usuário e senha são válidos, mas você não tem acesso para este recurso.","errorMsg":"Nome de usuário / senha inválidos. Tente novamente.","lblItem":"item","lblOk":"OK","info":"Registre-se para acessar o item em ${server} ${resource}","lblSigning":"Acessando…","invalidUser":"O nome de usuário ou senha que você digitou está incorreto.","lblPwd":"Senha:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom está obsoleto. O comportamento de zoom Shift-Double-Click não será suportado.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) está obsoleto. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"Um BingMapsKey deve ser fornecido."},"vegeocode":{"bingMapsKeyNotSpecified":"Um BingMapsKey deve ser fornecido.","requestQueued":"O token do servidor não foi recuperado. A solicitação será executada depois que o token do servidor for recuperado."}},"bufferTool":{"sizeHelp":"Para criar múltiplos buffers, insira as distâncias separadas por espaços (2 3 5.5).","typeLabel":"Tipo do Buffer","disks":"Discos","round":"Redondo","right":"Direita","distanceMsg":"Somente valores numéricos são permitidos","itemDescription":"Serviço da Feição gerado ao executar a solução Buffer das Feições. Entrada da ${layername} criou buffer por ${distance_field} ${units}","resultLabel":"Nome da camada resultante","around":"Ao Redor","sideType":"Tipo Lateral","flat":"Achatado","multipleDistance":"Buffers de múltiplas distâncias devem ser","outputLayerName":"Área de ${layername}","rings":"Anéis","sizeLabel":"Inserir tamanho do buffer","itemTags":"Buffer, ${layername}","areaofInputPoly":"Área dos polígonos de entrada em polígonos do buffer","left":"Esquerda","bufferDefine":"Criar áreas de <b>${layername}</b>","distance":"Distância","itemSnippet":"Analisar Serviço da Feição gerado do Buffer","endType":"Tipo Final","field":"Campo","optionsLabel":"Opções","include":"Incluir","exclude":"Excluir","dissolve":"Dissolver","overlap":"Sobrepor"},"widgets":{"attributeInspector":{"NLS_title":"Editar Atributos","NLS_validationFlt":"O valor deve ser real.","NLS_noFeaturesSelected":"Nenhuma feição selecionada","NLS_validationInt":"O valor deve ser inteiro.","NLS_next":"Próximo","NLS_errorInvalid":"Inválido","NLS_previous":"Anterior","NLS_first":"Primeiro","NLS_deleteFeature":"Excluir","NLS_of":"de","NLS_last":"Último"},"legend":{"NLS_polygons":"Polígonos","NLS_lines":"Linhas","NLS_noLegend":"Sem legendas","NLS_points":"Pontos","NLS_creatingLegend":"Criando legendas"},"directions":{"getDirections":"Obter Direções","findOptimalOrder":"Localizar ordem favorável","showOptions":"Mostrar opções","reverseDirections":"Inverter direções","addDestination":"Adicionar destino","returnToStart":"Retornar ao início","error":{"maximumStops":"O número máximo de paradas foi alcançado","notEnoughStops":"Insira uma origem e um destino.","invalidStopType":"Tipo de parada inválida","locator":"Não foi possível encontrar o local.","noAddresses":"Nenhum endereço foi retornado.","unknownStop":"Não foi possível encontrar o local '<name>'.","noStops":"Nenhuma parada foi oferecida para ser adicionada.","routeTask":"Não foi possível criar a rota destes endereços.","locatorUndefined":"Não foi possíverl inverter o geocódigo. O URL do localizador está indefinido."},"hideOptions":"Ocultar opções","units":{"KILOMETERS":{"name":"quilômetros","abbr":"km."},"MILES":{"name":"milhas","abbr":"mi."},"METERS":{"name":"metros","abbr":"m."},"NAUTICAL_MILES":{"name":"milhas náuticas","abbr":"mn."}},"time":{"minute":"minuto","minutes":"minutos","hour":"hora","hours":"horas"},"printNotes":"Insira anotações aqui","viewFullRoute":"Zoom na rota completa","printDisclaimer":"As direções são fornecidas somente para propósitos de planejamento e estão sujeitas aos <a href='http://www.esri.com/legal/software-license' target='_blank'>termos de uso da Esri</a>. Condições da estrada dinâmicas podem existir, causando a verificação para diferenciar suas direções e devem ser levadas em conta junto com sinais e restrições legais. Você assume todos os riscos de uso.","print":"Imprimir"},"timeSlider":{"NLS_previous":"Anterior","NLS_play":"Reproduzir/Pausar","NLS_next":"Próximo","NLS_invalidTimeExtent":"TimeExtent não especificado ou em formato incorreto.","NLS_first":"Primeiro"},"templatePicker":{"loading":"Carregando...","creationDisabled":"A criação de feições está desativada para todas as camadas."},"editor":{"tools":{"NLS_pointLbl":"Ponto","NLS_reshapeLbl":"Redefinir","NLS_arrowLeftLbl":"Seta para a Esquerda","NLS_triangleLbl":"Triângulo","NLS_autoCompleteLbl":"Auto-completar","NLS_arrowDownLbl":"Seta para Baixo","NLS_selectionRemoveLbl":"Subtrair da seleção","NLS_unionLbl":"Unir","NLS_freehandPolylineLbl":"Polilinha À Mão Livre","NLS_rectangleLbl":"Retângulo","NLS_ellipseLbl":"Elipse","NLS_attributesLbl":"Atributos","NLS_arrowUpLbl":"Seta para Cima","NLS_arrowRightLbl":"Seta para a Direita","NLS_undoLbl":"Desfazer","NLS_arrowLbl":"Seta","NLS_cutLbl":"Cortar","NLS_polylineLbl":"Polilinha","NLS_selectionClearLbl":"Limpar seleção","NLS_polygonLbl":"Polígono","NLS_selectionUnionLbl":"Unir","NLS_freehandPolygonLbl":"Polígono À Mão Livre","NLS_deleteLbl":"Excluir","NLS_extentLbl":"Estender","NLS_selectionNewLbl":"Nova seleção","NLS_circleLbl":"Círculo","NLS_redoLbl":"Refazer","NLS_selectionAddLbl":"Adicionar à seleção"}},"attachmentEditor":{"NLS_error":"Há um erro.","NLS_attachments":"Anexos:","NLS_none":"Nenhum","NLS_add":"Adicionar","NLS_fileNotSupported":"Este tipo de serviço não tem suporte."},"overviewMap":{"NLS_invalidSR":"a referência espacial da camada não é compatível com o mapa principal","NLS_invalidType":"tipo de camada não suportado. Os tipos de camada válidos são 'TiledMapServiceLayer' e 'DynamicMapServiceLayer'","NLS_noMap":"'map' não encontrado nos parâmetros de entrada","NLS_hide":"Ocultar Visão Geral do Mapa","NLS_drag":"Arraste para Alterar a Extensão do Mapa","NLS_maximize":"Maximizar","NLS_noLayer":"o mapa principal não possui uma camada base","NLS_restore":"Restaurar","NLS_show":"Exibir Visão Geral do Mapa"},"measurement":{"NLS_length_kilometers":"Quilômetros","NLS_area_sq_miles":"Milhas Quadradas","NLS_length_yards":"Jardas","NLS_distance":"Distância","NLS_area_acres":"Acres","NLS_resultLabel":"Resultado da Medida","NLS_length_miles":"Milhas","NLS_area_hectares":"Hectares","NLS_deg_min_sec":"DMS","NLS_area":"Área","NLS_area_sq_meters":"Metros Quadrados","NLS_latitude":"Latitude","NLS_area_sq_kilometers":"Quilômetros Quadrados","NLS_area_sq_feet":"Pés Quadrados","NLS_longitude":"Longitude","NLS_location":"Localização","NLS_decimal_degrees":"Graus","NLS_length_feet":"Pés","NLS_area_sq_yards":"Jardas Quadradas","NLS_length_meters":"Metros","NLS_map_coordinate":"Coordenadas do Mapa"},"bookmarks":{"NLS_add_bookmark":"Adicionar Marcações","NLS_new_bookmark":"Sem título","NLS_bookmark_edit":"Editar","NLS_bookmark_remove":"Remover"},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Alterar Geocodificador","untitledGeocoder":"Geocodificador sem título","clearButtonTitle":"Limpar Pesquisa","searchButtonTitle":"Pesquisar","geocoderMenuCloseTitle":"Fechar Menu","geocoderMenuHeader":"Selecionar geocodificador"},"esriGeocoderName":"Esri World Geocoder"},"popup":{"NLS_attach":"Anexos","NLS_nextFeature":"Próxima feição","NLS_moreInfo":"Mais info","NLS_searching":"Pesquisando","NLS_maximize":"Maximizar","NLS_noAttach":"Nenhum anexo encontrado","NLS_noInfo":"Nenhuma informação disponível","NLS_pagingInfo":"(${index} de ${total})","NLS_restore":"Restaurar","NLS_prevFeature":"Feição anterior","NLS_nextMedia":"Próxima mídia","NLS_close":"Fechar","NLS_zoomTo":"Aplicar zoom a","NLS_prevMedia":"Mídia anterior"},"HistogramTimeSlider":{"NLS_play":"Reproduzir/Pausar","NLS_range":"intervalo inteiro","NLS_invalidTimeExtent":"TimeExtent não especificado ou em formato incorreto.","NLS_overview":"VISÃO GERAL","NLS_cumulative":"Cumulativo"},"print":{"NLS_printing":"Imprimindo","NLS_printout":"Impressão","NLS_print":"Imprimir"}},"toolbars":{"draw":{"addShape":"Clique para adicionar um shape, ou pressione para iniciar e finalizar","finish":"Clique duas vezes para finalizar","invalidType":"Tipo de geometria não suportado","resume":"Clique para continuar desenhando","addPoint":"Clique para adicionar um ponto","freehand":"Pressione para começar e solte para finalizar","complete":"Clique duas vezes para concluir","start":"Clique para começar a desenhar","addMultipoint":"Clique para começar a adicionar pontos","convertAntiClockwisePolygon":"Os polígonos desenhados no sentido anti-horário serão invertidos para o sentido horário."},"edit":{"invalidType":"Não foi possível ativar a ferramenta. Verifique se a ferramenta é válida para o tipo de geometria.","deleteLabel":"Excluir"}},"tasks":{"gp":{"gpDataTypeNotHandled":"O tipo de Dados GP não foi alterado."},"query":{"invalid":"Não foi possível realizar a solicitação. Verifique os seus parâmetros."},"na":{"route":{"routeNameNotSpecified":"'RouteName' não especificado para pelo menos 1 parada em paradas do FeatureSet."}}},"driveTimes":{"measureLabel":"Medida:","toolDefine":"Criar áreas ao redor de <b>${layername}</b>","itemTags":"Tempos de Percurso, ${layername}","itemSnippet":"Analisar Serviço da Feição gerado de Criar Tempos de Percurso","measureHelp":"Para múltiplas áreas de saída para cada ponto, digite os tamanhos separados por espaços (2 3.5 5)","itemDescription":"Serviço da Feição gerado ao executar a solução Criar Tempos de Percurso.","areaLabel":"Áreas de diferentes pontos:","trafficLabel":"Utilizar condições do tráfego (opcional)","resultLabel":"Nome da camada resultante","outputLayerName":"Percurso a partir de ${layername}: ---"},"analysisTools":{"aggregateTool":"Agregar Pontos","createDensitySurface":"Criar superfície de densiadade","sumnearby":"Resumir Próximo","attributeCalculator":"Calculadora de Atributos","createBuffers":"Criar Buffers","extractData":"Extrair Dados","dataEnrichment":"Data Enrichment","dissolveBoundaries":"Dissolver Limites","analyzePatterns":"Analisar Modelos","findClosestFacility":"Localizar Mais Próximo","mergeLayers":"Juntar Camadas","summarizeWithin":"Resumir Dentro","pubRoleMsg":"Sua conta online não foi atribuída ao papel de Publicador.","findLocations":"Encontrar Locais","findExistingLocations":"Encontrar Locais Existentes","bufferTool":"Buffer dos Dados","emptyResultInfoMsg":"The result of your analysis did not return any features. No layer will be created.","summarizeData":"Resumir Dados","generateFleetPlan":"Gerar plano de rota da frota","servNameExists":"Você ja tem um resultado com este nome. Renomeie seu resultado e reenvie sua análise","findHotSpots":"Localizar Pontos de Incidência","performAnalysis":"Executar Análise","createInterpolatedSurface":"Criar Superfície","driveTimes":"Criar Polígono do Tempo de Direção","overlayLayers":"Sobrepor Camadas","outputLayerLabel":"Nome da camada resultante","bufferToolName":"Criar Buffers","correlationReporter":"Explorar Correlações","geoenrichLayer":"Enriquecer Feições","findRoute":"Localizar Rota","findNewLocations":"Derivar Novos Locais","useProximity":"Utilizar Proximidade","manageData":"Gerenciar Dados","orgUsrMsg":"Você deve ser membro de uma organização para executar este serviço.","aggregateToolName":"Agregar Pontos","outputFileName":"Nome do arquivo de saída"},"common":{"feet":"Pés","nautMiles":"Milhas Náuticas","apply":"Aplicar","errorTitle":"Erro","statistic":"Estatística","titleLabel":"Título:","fourLabel":"4.","newLabel":"Novo","close":"Fechar","kilometers":"Quilômetros","previous":"Anterior","share":"Compartilhar","runAnalysis":"Executar Análise","yards":"Jardas","yesLabel":"Sim","oneLabel":"1.","ok":"OK","maximum":"Máximo","miles":"Milhas","attribute":"Atributo","help":"Ajuda","comingSoonLabel":"Em Breve!","deleteLabel":"Excluir","outputnameMissingMsg":"O nome de saída é exigido","minimum":"Mínimo","remove":"Remover","inches":"Polegadas","upload":"Carregar","open":"Abrir","submit":"Enviar","save":"Salvar","edit":"Editar","average":"Média","selectAttribute":"Selecionar atributo","sum":"Soma","standardDev":"Desvio Padrão","threeLabel":"3.","done":"Concluído","twoLabel":"2.","create":"Criar","warning":"Aviso","cancel":"Cancelar","noLabel":"Não","meters":"Metros","arcgis":"ArcGIS","pointsUnit":"Pontos","next":"Próximo","degree":"Graus Decimais"},"extractDataTool":{"selectFtrs":"Selecionar feições","outputfileName":"NomeSaída.zip","itemTags":"Análise, Extrair Dados","itemSnippet":"Analisar Item do Arquivo gerado de Extrair Dados","clipFtrs":"Recortar feições","sameAsLayer":"Mesmo que ${layername}","itemDescription":"Arquivo gerado ao executar a solução Extrair Dados.","lyrpkg":"Pacote de camada","outputDataFormat":"Formato dos dados de saída","sameAsDisplay":"Mesmo que Exibir","layersToExtract":"Camadas para extrair","studyArea":"Área de estudo","filegdb":"Arquivo geodatabase","shpFile":"Shapefile"},"aggregatePointsTool":{"removeAttrStats":"Remover Estatística do Atributo","itemTags":"Análise, Pontos de Agregação, ${pointlayername}, ${polygonlayername}","groupByLabel":"Escolher atributo para agrupar por (opcional)","itemSnippet":"Analisar Serviço da Feição gerado ao Agregar Pontos","chooseAreaLabel":"Escolher área","aggregateDefine":"Contagem de <b>${layername}</b> dentro","itemDescription":"Serviço da Feição gerado ao executar a solução Agregar Pontos. Os pontos do arquivo CSV ${pointlayername} foram agregados em ${polygonlayername}","keepPolygonLabel":"Manter polígonos sem pontos","outputLayerName":"Agregação de ${pointlayername} para ${polygonlayername}","addStatsLabel":"Adicionar estatística (opcional)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl não está definido."},"layers":{"FeatureLayer":{"createUserHours":"Criado por ${userId} ${hours} horas atrás","editUserMinutes":"Editado por ${userId} ${minutes} minutos atrás","editHour":"Editado uma hora atrás","editMinute":"Editado um minuto atrás","editUserMinute":"Editado por ${userId} um minuto atrás","editSeconds":"Editado segundos atrás","createUserFull":"Criado por ${userId} em ${formattedDate} às ${formattedTime}","editWeekDay":"Editado no ${weekDay} às ${formattedTime}","createUserMinutes":"Criado por ${userId} ${minutes} minutos atrás","createUserHour":"Criado por ${userId} uma hora atrás","editUserSeconds":"Editado por ${userId} segundos atrás","editUserWeekDay":"Editado por ${userId} no ${weekDay} às ${formattedTime}","editUserFull":"Editado por ${userId} em ${formattedDate} às ${formattedTime}","createFull":"Criado em ${formattedDate} às ${formattedTime}","editUser":"Editado por ${userId}","noOIDField":"objectIdField não definido [url: ${url}]","editUserHour":"Editado por ${userId} uma hora atrás","createHour":"Criado uma hora atrás","updateError":"ocorreu um erro ao atualizar a camada","createUserWeekDay":"Criado por ${userId} no ${weekDay} às ${formattedTime}","invalidParams":"a solicitação contém um ou mais parâmetros suportados","editHours":"Editado ${hours} horas atrás","noGeometryField":"não foi possível encontrar um campo do tipo 'esriFieldTypeGeometry' nas informações da camada 'fields'. Se estiver usando uma camada de serviços de mapa, as feições não terão geometria [url: ${url}]","createUserMinute":"Criado por ${userId} um minuto atrás","createUser":"Criado por ${userId}","createMinute":"Criado um minuto atrás","createMinutes":"Criado ${minutes} minutos atrás","fieldNotFound":"não foi possível encontrar o campo '${field}' nas informações da camada 'fields' [url: ${url}]","createHours":"Criado ${hours} horas atrás","editUserHours":"Editado por ${userId} ${hours} horas atrás","editMinutes":"Editado ${minutes} minutos atrás","createSeconds":"Criado segundos atrás","createUserSeconds":"Criado por ${userId} segundos atrás","createWeekDay":"Criado no ${weekDay} às ${formattedTime}","editFull":"Editado em ${formattedDate} às ${formattedTime}"},"dynamic":{"imageError":"Não foi possível carregar a imagem"},"tiled":{"tileError":"Não foi possível carregar o mosaico"},"imageParameters":{"deprecateBBox":"A propriedade 'bbox' está obsoleta. Use a propriedade 'extent'."},"agstiled":{"deprecateRoundrobin":"A opção de construtor 'roundrobin' está obsoleta. Use a opção 'tileServers'."},"graphics":{"drawingError":"Não foi possível desenhar o gráfico "}},"findHotSpotsTool":{"hotspotsPointDefine":"Analisar <b>${layername}</b>  para localizar estatisticamente pontos incidentes frios e quentes significativos ","itemTags":"Análise, Pontos de Incidência, ${layername}, ${fieldname}","itemSnippet":"Analisar Serviço da Feição gerado ao Localizar Pontos de Incidência","defineBoundingLabel":"Definir onde os incidentes são possíveis","blayerName":"Desenhar Limites","Options":"Opções","hotspots":"Pontos de Incidência","defaultAggregationOption":"Selecionar áreas de agregação","itemDescription":"Serviço da Feição gerado ao executar a solução Localizar Pontos de Incidência.","chooseAttributeLabel":"Escolha um campo de análise","provideAggLabel":"Fornecer áreas de agregação para somar incidentes","hotspotsPolyDefine":"Analisar <b>${layername}</b>  para localizar estatisticamente pontos incidentes frios e quentes significativos de ","defaultBoundingOption":"Selecionar áreas delimitadoras","fieldLabel":"como ou sem um campo de análise","noAnalysisField":"Nenhum Campo de Análise","outputLayerName":"Pontos de Incidência de ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint está obsoleto. Use esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint está obsoleto. Use esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Análise, Sobrepor Camadas, ${layername}","unionOutputLyrName":"união de ${layername} e ${overlayname}","itemSnippet":"Analisar Serviço da Feição gerado de Sobrepor Camadas","eraseOutputLyrName":"apagar ${layername} com ${overlayname}","chooseOverlayMethod":"Escolher método de sobreposição","itemDescription":"Serviço da Feição gerado ao executar a solução Sobrepor Camadas.","union":"Unir","overlayDefine":"Sobrepor <b>${layername}</b> com","intersectOutputLyrName":"intersecção de ${layername} e ${overlayname}","overlayLayerPolyMsg":"A camada de Sobreposição deve ser uma Camada de Polígono para Unir sobreposição","notSupportedEraseOverlayMsg":"A camada de Sobreposição não tem suporte para Apagar a sobreposição. Padronize para Interseccionar sobreposição.","intersect":"Interseccionar","erase":"Apagar","chooseOverlayLayer":"Escolher camada de sobreposição"},"arcgis":{"utils":{"geometryServiceError":"Forneça um serviço de geometria para abrir o Mapa da Web.","baseLayerError":"Não foi possível carregar a camada base do mapa"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["dom","seg","ter","qua","qui","sex","sáb"],"months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"Dia da semana","dateFormatItem-yQQQ":"y QQQ","dateFormatItem-yyMMMEd":"E, d 'de' MMM 'de' yy","dateFormatItem-yMEd":"E, dd/MM/yyyy","dateFormatItem-MMMEd":"E, d 'de' MMM","eraNarrow":["a.C.","d.C."],"dayPeriods-format-wide-morning":"manhã","days-format-short":["dom","seg","ter","qua","qui","sex","sáb"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d 'de' MMMM 'de' y","months-format-wide":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"PM","dateFormat-full":"EEEE, d 'de' MMMM 'de' y","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"dd/MM/yyyy","dayPeriods-format-wide-noon":"meio-dia","field-era":"Era","dateFormatItem-yM":"MM/yyyy","months-standAlone-wide":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"timeFormat-short":"HH:mm","quarters-format-wide":["1º trimestre","2º trimestre","3º trimestre","4º trimestre"],"timeFormat-long":"HH:mm:ss z","field-year":"Ano","dateFormatItem-yMMM":"MMM 'de' y","dateFormatItem-yQ":"yyyy Q","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"Hora","dateFormatItem-MMdd":"dd/MM","months-format-abbr":["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"dateFormatItem-yyQ":"Q yy","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"Hoje","field-day-relative+1":"Amanhã","field-day-relative+2":"Depois de amanhã","dateFormatItem-H":"HH","months-standAlone-abbr":["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"quarters-format-abbr":["T1","T2","T3","T4"],"quarters-standAlone-wide":["1º trimestre","2º trimestre","3º trimestre","4º trimestre"],"dateFormatItem-HHmmss":"HH:mm:ss","dateFormatItem-M":"L","days-standAlone-wide":["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],"dateFormatItem-yyyyMMM":"MMM 'de' y","dateFormatItem-yyMMM":"MMM 'de' yy","timeFormat-medium":"HH:mm:ss","dateFormatItem-Hm":"HH:mm","quarters-standAlone-abbr":["T1","T2","T3","T4"],"eraAbbr":["a.C.","d.C."],"field-minute":"Minuto","field-dayperiod":"Período do dia","days-standAlone-abbr":["dom","seg","ter","qua","qui","sex","sáb"],"dayPeriods-format-wide-night":"noite","dateFormatItem-yyMMMd":"d 'de' MMM 'de' yy","dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"Ontem","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a","field-day-relative+-2":"Anteontem","dateFormatItem-MMMd":"d 'de' MMM","dateFormatItem-MEd":"E, dd/MM","dateTimeFormat-full":"{1} {0}","field-day":"Dia","days-format-wide":["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],"field-zone":"Fuso","dateFormatItem-yyyyMM":"MM/yyyy","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-year-relative+-1":"Ano passado","field-month-relative+-1":"Mês passado","dateFormatItem-yyMM":"MM/yy","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["dom","seg","ter","qua","qui","sex","sáb"],"dateFormatItem-yMMMd":"d 'de' MMM 'de' y","eraNames":["Antes de Cristo","Ano do Senhor"],"days-format-narrow":["D","S","T","Q","Q","S","S"],"days-standAlone-narrow":["D","S","T","Q","Q","S","S"],"dateFormatItem-MMM":"LLL","field-month":"Mês","dateFormatItem-HHmm":"HH:mm","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"AM","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-short":"dd/MM/yy","dayPeriods-format-wide-afternoon":"tarde","field-second":"Segundo","dateFormatItem-yMMMEd":"E, d 'de' MMM 'de' y","field-month-relative+0":"Este mês","field-month-relative+1":"Próximo mês","dateFormatItem-Ed":"E, d","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"Semana","dateFormat-medium":"dd/MM/yyyy","field-year-relative+0":"Este ano","field-week-relative+-1":"Semana passada","field-year-relative+1":"Próximo ano","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","field-week-relative+0":"Esta semana","field-week-relative+1":"Próxima semana"},"dijit/nls/loading":{"loadingState":"Carregando...","errorState":"Desculpe, ocorreu um erro"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 tri","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"¤#,##0.00;(¤#,##0.00)","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":".","percentFormat":"#,##0%","decimalFormat-long":"000 trilhões","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Cancelar","buttonSave":"Salvar","itemClose":"Fechar"}});