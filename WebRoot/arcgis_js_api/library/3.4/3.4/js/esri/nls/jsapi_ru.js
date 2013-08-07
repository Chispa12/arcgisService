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
define("esri/nls/jsapi_ru",{"dijit/form/nls/validate":{"rangeMessage":"Это значение вне диапазона.","invalidMessage":"Указано недопустимое значение.","missingMessage":"Это обязательное значение."},"esri/nls/jsapi":{"identity":{"noAuthService":"Не удается получить доступ к службе аутентификации пользователей.","lblCancel":"Отмена","lblUser":"Имя пользователя:","title":"Подключиться","forbidden":"Данные учетной записи введены верно, но у вас нет доступа к данному ресурсу.","errorMsg":"Неверные имя пользователя/пароль.  Попробуйте ещё раз.","lblItem":"элемент","lblOk":"OK","info":"Пожалуйста, зарегистрируйтесь для доступа к данным на ${server} ${resource}","lblSigning":"Авторизация...","invalidUser":"Введено неправильное имя пользователя или пароль.","lblPwd":"Пароль:"},"map":{"deprecateShiftDblClickZoom":"Параметр Map.(enable/disable)ShiftDoubleClickZoom устарел. Изменение масштаба при одновременном нажатии клавиши Shift и двойном щелчке мышью не поддерживается.","deprecateReorderLayerString":"Параметр Map.reorderLayer(/*String*/ id, /*Number*/ index) устарел. Используйте Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"Необходимо задать параметр BingMapsKey."},"vegeocode":{"bingMapsKeyNotSpecified":"Необходимо задать параметр BingMapsKey.","requestQueued":"Токен сервера не получен. Запрос будет выполнен после получения токена сервера."}},"bufferTool":{"sizeHelp":"Для создания буфера с несколькими значениями введите растояния, разделенные пробелами (2 3 5.5).","typeLabel":"Тип буфера","disks":"Диски","round":"Круговые","right":"Справа","distanceMsg":"Можно вводить только цифровые значения","itemDescription":"Сервис объектов, созданный из запущенного решения ''Буфер объектов''. Входные данные ${layername} помещены в буфер по ${distance_field} ${units}","resultLabel":"Имя слоя результата","around":"Вокруг","sideType":"Тип боковой стороны","flat":"Ровные","multipleDistance":"Буферы с несколькими расстояниями должны быть","outputLayerName":"Буферные зоны для слоя ${layername}","rings":"Кольца","sizeLabel":"Ввести размер буфера","itemTags":"Буфер, ${layername}","areaofInputPoly":"Область входных данных полигонов в буфере полигонов","left":"Слева","bufferDefine":"Создание буферных зон для слоя <b>${layername}</b>","distance":"Расстояние","itemSnippet":"Аналитический Сервис объектов, созданный решением ''Создание времени в пути'', созданного из буфера","endType":"Тип торцевой стороны","field":"Поле","optionsLabel":"Параметры","include":"Включить","exclude":"Исключить","dissolve":"Слияние по атрибуту","overlap":"Наложить"},"widgets":{"attributeInspector":{"NLS_title":"Изменить атрибуты","NLS_validationFlt":"Значение должно быть числом с плавающей точкой.","NLS_noFeaturesSelected":"Объекты не выбраны","NLS_validationInt":"Значение должно быть целым числом.","NLS_next":"Далее","NLS_errorInvalid":"Недопустимо","NLS_previous":"Назад","NLS_first":"Первый","NLS_deleteFeature":"Удалить","NLS_of":"из","NLS_last":"Последний"},"legend":{"NLS_polygons":"Полигоны","NLS_lines":"Линии","NLS_noLegend":"Без легенды","NLS_points":"Точки","NLS_creatingLegend":"Создание легенды"},"directions":{"getDirections":"Получить направления движения","findOptimalOrder":"Найти оптимальный порядок","showOptions":"Показать параметры","reverseDirections":"Обратные направления движения","addDestination":"Добавить местонахождение","returnToStart":"Возврат в начало","error":{"maximumStops":"Достигнуто максимальное количество остановок","notEnoughStops":"Ввести начальную точку и место назначения.","invalidStopType":"Недопустимый тип остановки","locator":"Невозможно найти местоположение.","noAddresses":"Адреса не получены.","unknownStop":"Невозможно найти местоположение '<name>'.","noStops":"Остановки для добавления не представлены.","routeTask":"Невозможно проложить маршрут к этим адресам.","locatorUndefined":"Не удалось выполнить обратное геокодирование. Не определен URL-адрес локатора."},"hideOptions":"Скрыть опции","units":{"KILOMETERS":{"name":"километры","abbr":"км"},"MILES":{"name":"мили","abbr":"миля"},"METERS":{"name":"метры","abbr":"м"},"NAUTICAL_MILES":{"name":"морские мили","abbr":"мор. м."}},"time":{"minute":"минута","minutes":"минуты","hour":"Час","hours":"часы"},"printNotes":"Для заметок","viewFullRoute":"Масштабировать до отображения всего маршрута","printDisclaimer":"Направления предоставлены только в целях планирования, и на них распространяются <a href='http://www.esri.com/legal/software-license' target='_blank'>Условия использования Esri</a>. Дорожная обстановка может быстро меняться, что может приводить к неточностям в выборе направлений движения, и это нужно учитывать наряду с дорожными знаками и ограничениями правил дорожного движения. Пользователь принимает на себя все риски, связанные с использованием.","print":"Печать"},"timeSlider":{"NLS_previous":"Назад","NLS_play":"Воспроизведение/пауза","NLS_next":"Далее","NLS_invalidTimeExtent":"Параметр TimeExtent не задан или имеет неверный формат.","NLS_first":"Первый"},"templatePicker":{"loading":"Загрузка..","creationDisabled":"Возможность создания объектов отключена для всех слоев."},"editor":{"tools":{"NLS_pointLbl":"Точка","NLS_reshapeLbl":"Изменить форму","NLS_arrowLeftLbl":"Стрелка влево","NLS_triangleLbl":"Треугольник","NLS_autoCompleteLbl":"Автозавершение","NLS_arrowDownLbl":"Стрелка вниз","NLS_selectionRemoveLbl":"Убрать из выборки","NLS_unionLbl":"Объединение","NLS_freehandPolylineLbl":"Линия произвольной формы","NLS_rectangleLbl":"Прямоугольник","NLS_ellipseLbl":"Эллипс","NLS_attributesLbl":"Атрибуты","NLS_arrowUpLbl":"Стрелка вверх","NLS_arrowRightLbl":"Стрелка вправо","NLS_undoLbl":"Отменить","NLS_arrowLbl":"Стрелка","NLS_cutLbl":"Вырезать","NLS_polylineLbl":"Линия","NLS_selectionClearLbl":"Очистить выборку","NLS_polygonLbl":"Полигон","NLS_selectionUnionLbl":"Объединение","NLS_freehandPolygonLbl":"Полигон произвольной формы","NLS_deleteLbl":"Удалить","NLS_extentLbl":"Экстент","NLS_selectionNewLbl":"Новая выборка","NLS_circleLbl":"Круг","NLS_redoLbl":"Повторить","NLS_selectionAddLbl":"Добавить к выборке"}},"attachmentEditor":{"NLS_error":"Произошла ошибка.","NLS_attachments":"Вложения:","NLS_none":"Нет","NLS_add":"Добавить","NLS_fileNotSupported":"Этот тип файлов не поддерживается."},"overviewMap":{"NLS_invalidSR":"пространственная привязка выбранного слоя не совместима с главной картой","NLS_invalidType":"неподдерживаемый тип слоя. Допустимые типы: 'TiledMapServiceLayer' и 'DynamicMapServiceLayer'","NLS_noMap":"Параметр 'map' не найден во входных параметрах","NLS_hide":"Скрыть Обзорную карту","NLS_drag":"Перетащите, чтобы изменить экстент карты","NLS_maximize":"Развернуть","NLS_noLayer":"в главной карте нет базового слоя","NLS_restore":"Восстановить","NLS_show":"Показать Обзорную карту"},"measurement":{"NLS_length_kilometers":"Километры","NLS_area_sq_miles":"Кв. мили","NLS_length_yards":"Ярды","NLS_distance":"Расстояние","NLS_area_acres":"Акры","NLS_resultLabel":"Результат измерения","NLS_length_miles":"Мили","NLS_area_hectares":"гектары","NLS_deg_min_sec":"DMS","NLS_area":"Площадь","NLS_area_sq_meters":"Кв. метры","NLS_latitude":"Широта","NLS_area_sq_kilometers":"Кв. километры","NLS_area_sq_feet":"Кв. футы","NLS_longitude":"Долгота","NLS_location":"Местоположение","NLS_decimal_degrees":"Градусы","NLS_length_feet":"Футы","NLS_area_sq_yards":"Кв. ярды","NLS_length_meters":"Метры","NLS_map_coordinate":"Координата на карте"},"bookmarks":{"NLS_add_bookmark":"Добавить закладку","NLS_new_bookmark":"Без имени","NLS_bookmark_edit":"Правка","NLS_bookmark_remove":"У&далить"},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Изменить геокодер","untitledGeocoder":"Геокодер Без названия","clearButtonTitle":"Очистить поиск","searchButtonTitle":"Поиск","geocoderMenuCloseTitle":"Закрыть меню","geocoderMenuHeader":"Выбрать геокодер"},"esriGeocoderName":"Геокодирование Esri для всего мира"},"popup":{"NLS_attach":"Вложения","NLS_nextFeature":"Следующий объект","NLS_moreInfo":"Подробнее","NLS_searching":"Выполняется поиск","NLS_maximize":"Развернуть","NLS_noAttach":"Вложения не найдены","NLS_noInfo":"Информация недоступна","NLS_pagingInfo":"(${index} из ${total})","NLS_restore":"Восстановить","NLS_prevFeature":"Предыдущий объект","NLS_nextMedia":"Следующий носитель","NLS_close":"Закрыть","NLS_zoomTo":"Приблизить к","NLS_prevMedia":"Предыдущий носитель"},"HistogramTimeSlider":{"NLS_play":"Воспроизведение/пауза","NLS_range":"полный диапазон","NLS_invalidTimeExtent":"Параметр TimeExtent не задан или имеет неверный формат.","NLS_overview":"ОБЗОР","NLS_cumulative":"С накоплением"},"print":{"NLS_printing":"Печать","NLS_printout":"Распечатать","NLS_print":"Печать"}},"toolbars":{"draw":{"addShape":"Щёлкните чтобы добавить форму или нажмите стрелку вниз чтобы начать и дойти до конца.","finish":"Дважды щелкните для завершения","invalidType":"Неподдерживаемый тип геометрии","resume":"Щелкните, чтобы продолжить рисовать","addPoint":"Щелкните, чтобы добавить точку","freehand":"Нажмите кнопку, чтобы начать, и отпустите ее, чтобы завершить","complete":"Дважды щелкните для завершения","start":"Щелкните, чтобы начать рисовать","addMultipoint":"Щелкните, чтобы начать добавление точек","convertAntiClockwisePolygon":"Полигоны, оцифрованные против часовой стрелки, будут сохранены с порядком вершин по часовой стрелке."},"edit":{"invalidType":"Невозможно активировать инструмент. Убедитесь в том, что данный тип геометрии поддерживается этим инструментом.","deleteLabel":"Удалить"}},"tasks":{"gp":{"gpDataTypeNotHandled":"Тип данных GP не обработан."},"query":{"invalid":"Невозможно выполнить запрос. Проверьте параметры."},"na":{"route":{"routeNameNotSpecified":"'RouteName' не указано хотя бы для 1 остановки в FeatureSet остановок."}}},"driveTimes":{"measureLabel":"Измерение:","toolDefine":"Создание областей вокруг <b>${layername}</b>","itemTags":"Время в пути ${layername}","itemSnippet":"Аналитический Сервис объектов, созданный решением ''Создание времени в пути''","measureHelp":"Для вывода нескольких областей для каждой точки введите размеры, разделенные пробелами (2 3.5 5)","itemDescription":"Сервис объектов, созданный из запущенного решения ''Создание времени в пути''.","areaLabel":"Области из разных точек:","trafficLabel":"Использовать данные о пробках (дополнительно)","resultLabel":"Имя слоя результата","outputLayerName":"Движение из ${layername}: ---"},"analysisTools":{"aggregateTool":"Сбор точек","createDensitySurface":"Создать поверхность плотности","sumnearby":"Суммировать близлежащие","attributeCalculator":"Калькулятор атрибутов","createBuffers":"Создать буферы","extractData":"Извлечь данные","dataEnrichment":"Data Enrichment","dissolveBoundaries":"Размыть границы","analyzePatterns":"Анализ закономерностей","findClosestFacility":"Найти ближайшие","mergeLayers":"Слияние слоев","summarizeWithin":"Суммировать в пределах","pubRoleMsg":"Вашей учетной записи не присвоена роль ''Издатель''.","findLocations":"Найти местоположения","findExistingLocations":"Найти существующие местоположения","bufferTool":"Данные буфера","emptyResultInfoMsg":"The result of your analysis did not return any features. No layer will be created.","summarizeData":"Суммировать данные","generateFleetPlan":"Создать план транспортных маршрутов","servNameExists":"Результат с этим именем уже существует. Переименуйте результат и отправьте анализ повторно.","findHotSpots":"Найти горячие точки","performAnalysis":"Выполнить анализ","createInterpolatedSurface":"Создать поверхность","driveTimes":"Создать полигоны времени нахождения в пути","overlayLayers":"Наложение слоев","outputLayerLabel":"Имя слоя результата","bufferToolName":"Создать буферы","correlationReporter":"Изучить корреляции","geoenrichLayer":"Дополнить объекты","findRoute":"Найти маршрут","findNewLocations":"Получить новые местоположения","useProximity":"По Близости","manageData":"Управление данными","orgUsrMsg":"Эту службу может запустить только сотрудник организации.","aggregateToolName":"Агрегировать точки","outputFileName":"Имя выходного файла"},"common":{"feet":"Фут(ы)","nautMiles":"Морская(-ие) миля(-и)","apply":"Применить","errorTitle":"Ошибка","statistic":"Статистика","titleLabel":"Заголовок:","fourLabel":"4.","newLabel":"Новый","close":"Закрыть","kilometers":"Километр(ы)","previous":"Назад","share":"Опубликовать","runAnalysis":"Запустить анализ","yards":"Ярд(ы)","yesLabel":"Да","oneLabel":"1.","ok":"OK","maximum":"Максимум","miles":"Миля(-и)","attribute":"Атрибут","help":"Справка","comingSoonLabel":"Скоро!","deleteLabel":"Удалить","outputnameMissingMsg":"Требуется имя выходного файла","minimum":"Минимум","remove":"У&далить","inches":"Дюйм(ы)","upload":"Загрузить","open":"Открыть","submit":"Отправить","save":"Сохранить","edit":"Правка","average":"Среднее","selectAttribute":"Выбрать атрибут","sum":"Сумма","standardDev":"Стандартное отклонение","threeLabel":"3.","done":"Готово","twoLabel":"2.","create":"Создать","warning":"Предупреждение","cancel":"Отмена","noLabel":"Нет","meters":"Метр(ы)","arcgis":"ArcGIS","pointsUnit":"Точка(-и)","next":"Далее","degree":"Десятичный(-е) градус(ы)"},"extractDataTool":{"selectFtrs":"Выбрать объекты","outputfileName":"OutputName.zip","itemTags":"Анализ, Извлечение данных","itemSnippet":"Анализ элемента файла, созданного из решения ''Извлечение данных''","clipFtrs":"Прикрепить объекты","sameAsLayer":"Так же, как ${layername}","itemDescription":"Файл, созданный из запущенного решения ''Извлечение данных''.","lyrpkg":"Пакет слоя","outputDataFormat":"Формат выходных данных","sameAsDisplay":"Так же, как отображается","layersToExtract":"Слои для извлечения","studyArea":"Область изучения","filegdb":"Файловая база геоданных","shpFile":"Шейп-файл"},"aggregatePointsTool":{"removeAttrStats":"Удалить статистику атрибута","itemTags":"Анализ, Сбор точек, ${pointlayername}, ${polygonlayername}","groupByLabel":"Выбор атрибута для группировки по (дополнительно)","itemSnippet":"Сервис анализа объекта создается из сбора точек","chooseAreaLabel":"Выбрать область","aggregateDefine":"Подсчитать <b>${layername}</b> в пределах","itemDescription":"Сервис объекта создается из запущенных решений сбора точек. Точки из csv-файла ${pointlayername} собираются в ${polygonlayername}","keepPolygonLabel":"Сохранять полигоны без точек","outputLayerName":"Сбор ${pointlayername} в ${polygonlayername}","addStatsLabel":"Добавить статистику (дополнительно)"},"io":{"proxyNotSet":"Не задан параметр esri.config.defaults.io.proxyUrl."},"layers":{"FeatureLayer":{"createUserHours":"Создано ${userId} ${hours} ч. назад","editUserMinutes":"Изменено ${userId} ${minutes} мин. назад","editHour":"Изменено 1 час назад","editMinute":"Отредактировано 1 мин. назад","editUserMinute":"Отредактировано ${userId} 1 мин. назад","editSeconds":"Отредактировано сек. назад","createUserFull":"Создано ${userId} ${formattedDate} в ${formattedTime}","editWeekDay":"Изменено в ${weekDay} в ${formattedTime}","createUserMinutes":"Создано ${userId} ${minutes}мин. назад","createUserHour":"Создано ${userId} 1 час назад","editUserSeconds":"Отредактировано ${userId} сек. назад","editUserWeekDay":"Изменено ${userId} в ${weekDay} в ${formattedTime}","editUserFull":"Изменено ${userId} ${formattedDate} в ${formattedTime}","createFull":"Создано ${formattedDate} в ${formattedTime}","editUser":"Изменено ${userId}","noOIDField":"Параметр objectIdField не задан [url: ${url}]","editUserHour":"Изменено ${userId} 1 час назад","createHour":"Создано 1 час назад","updateError":"при обновлении слоя произошла ошибка","createUserWeekDay":"Создано ${userId} в ${weekDay} в ${formattedTime}","invalidParams":"в запросе содержится один или несколько неподдерживаемых параметров","editHours":"Изменено ${hours} ч. назад","noGeometryField":"невозможно найти поле типа 'esriFieldTypeGeometry' в данных 'fields' слоя. Если используется слой картографического сервиса, то объекты не будут иметь геометрию [url: ${url}]","createUserMinute":"Создано ${userId} 1 мин. назад","createUser":"Создано ${userId}","createMinute":"Создано 1 мин. назад","createMinutes":"Создано ${minutes} мин. назад","fieldNotFound":"невозможно найти поле '${field}' в данных 'fields' слоя [url: ${url}]","createHours":"Создано ${hours} ч. назад","editUserHours":"Изменено ${userId} ${hours} ч. назад","editMinutes":"Изменено ${minutes} мин. назад","createSeconds":"Создано сек. назад","createUserSeconds":"Создано ${userId} сек. назад","createWeekDay":"Создано в ${weekDay} в ${formattedTime}","editFull":"Изменено ${formattedDate} в ${formattedTime}"},"dynamic":{"imageError":"Невозможно загрузить изображение"},"tiled":{"tileError":"Невозможно загрузить мозаику"},"imageParameters":{"deprecateBBox":"Свойство 'bbox' устарело. Используйте свойство 'extent'."},"agstiled":{"deprecateRoundrobin":"Параметр конструктора 'roundrobin' устарел. Используйте параметр 'tileServers'."},"graphics":{"drawingError":"Невозможно создать рисунок "}},"findHotSpotsTool":{"hotspotsPointDefine":"Анализировать <b>${layername}</b>  для поиска статистически важных горячих и холодных точек ","itemTags":"Анализ, Горячие точки, ${layername}, ${fieldname}","itemSnippet":"Сервис анализа объекта создается из поиска горячих точек","defineBoundingLabel":"Определите места возможных происшествий","blayerName":"Отобразить границы","Options":"Параметры","hotspots":"Горячие точки","defaultAggregationOption":"Выбор областей сбора","itemDescription":"Сервис объекта создается из запущенного решения поиска горячих точек.","chooseAttributeLabel":"Выбрать поле анализа","provideAggLabel":"Предоставьте области сбора для суммирования происшествий","hotspotsPolyDefine":"Анализировать <b>${layername}</b>  для поиска статистически важных горячих и холодных точек ","defaultBoundingOption":"Выбор ограничивающих областей","fieldLabel":"с полем анализа или без него","noAnalysisField":"Поле анализа отсутствует","outputLayerName":"Горячие точки ${layername}"},"geometry":{"deprecateToMapPoint":"Параметр esri.geometry.toMapPoint устарел. Используйте параметр esri.geometry.toMapGeometry.","deprecateToScreenPoint":"Параметр esri.geometry.toScreenPoint устарел. Используйте параметр esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Анализ, Наложение слоев, ${layername}","unionOutputLyrName":"объединение ${layername} и ${overlayname}","itemSnippet":"Аналитический Сервис объектов, созданный из решения ''Наложение слоев''","eraseOutputLyrName":"стереть ${layername} с ${overlayname}","chooseOverlayMethod":"Выбрать способ наложения","itemDescription":"Сервис объектов, созданный из запущенного решения ''Наложение слоев''.","union":"Объединение","overlayDefine":"Наложение <b>${layername}</b> с","intersectOutputLyrName":"пересечение ${layername} и ${overlayname}","overlayLayerPolyMsg":"Слой для наложения должен быть слоем полигона для объединения наложения","notSupportedEraseOverlayMsg":"Этот слой для наложения не поддерживается функцией ''Стереть наложенный слой''. Значения по умолчанию для ''Пересекающегося наложенного слоя''.","intersect":"Пересечение","erase":"Стереть","chooseOverlayLayer":"Выбрать слой для наложения"},"arcgis":{"utils":{"geometryServiceError":"Чтобы открыть веб-карту, обеспечьте доступ к сервису геометрии.","baseLayerError":"Невозможно загрузить базовый слой карты"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["вс","пн","вт","ср","чт","пт","сб"],"months-format-narrow":["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"День недели","dateFormatItem-yQQQ":"y QQQ","dateFormatItem-yyMMMEd":"E, d MMM yy","dateFormatItem-yMEd":"ccc, d.MM.y 'г'.","dateFormatItem-yyyyLLLL":"LLLL y","dateFormatItem-MMMEd":"ccc, d MMM","eraNarrow":["до н.э.","н.э."],"days-format-short":["вс","пн","вт","ср","чт","пт","сб"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y 'г'.","months-format-wide":["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],"dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"после полудня","dateFormat-full":"EEEE, d MMMM y 'г'.","dateFormatItem-Md":"dd.MM","dayPeriods-format-abbr-am":"до полудня","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"dd.MM.y","field-era":"Эра","dateFormatItem-yM":"MM.y","months-standAlone-wide":["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],"timeFormat-short":"H:mm","quarters-format-wide":["1-й квартал","2-й квартал","3-й квартал","4-й квартал"],"timeFormat-long":"H:mm:ss z","field-year":"Год","dateFormatItem-yMMM":"LLL y","dateFormatItem-yQ":"QQQ y 'г'.","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"Час","dateFormatItem-yyyyMMMM":"LLLL y","dateFormatItem-MMdd":"dd.MM","months-format-abbr":["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],"dateFormatItem-yyQ":"Q yy","timeFormat-full":"H:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"Сегодня","dateFormatItem-E":"ccc","field-day-relative+1":"Завтра","field-day-relative+2":"Послезавтра","dateFormatItem-H":"H","months-standAlone-abbr":["Янв.","Февр.","Март","Апр.","Май","Июнь","Июль","Авг.","Сент.","Окт.","Нояб.","Дек."],"quarters-format-abbr":["1-й кв.","2-й кв.","3-й кв.","4-й кв."],"quarters-standAlone-wide":["1-й квартал","2-й квартал","3-й квартал","4-й квартал"],"dateFormatItem-M":"L","days-standAlone-wide":["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],"dateFormatItem-yyMMM":"LLL yy","timeFormat-medium":"H:mm:ss","dateFormatItem-Hm":"H:mm","quarters-standAlone-abbr":["1-й кв.","2-й кв.","3-й кв.","4-й кв."],"eraAbbr":["до н.э.","н.э."],"field-minute":"Минута","field-dayperiod":"ДП/ПП","days-standAlone-abbr":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"Вчера","dateFormatItem-h":"h a","dateTimeFormat-long":"{1}, {0}","dayPeriods-format-narrow-am":"дп","field-day-relative+-2":"Позавчера","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E, dd.MM","dateTimeFormat-full":"{1}, {0}","field-day":"День","days-format-wide":["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],"field-zone":"Часовой пояс","dateFormatItem-yyyyMM":"MM.yyyy","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],"field-year-relative+-1":"В прошлом году","field-month-relative+-1":"В прошлом месяце","dateFormatItem-yyMM":"MM.yy","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"после полудня","days-format-abbr":["вс","пн","вт","ср","чт","пт","сб"],"dateFormatItem-yMMMd":"d MMM y 'г'.","eraNames":["до н.э.","н.э."],"days-format-narrow":["вс","пн","вт","ср","чт","пт","сб"],"days-standAlone-narrow":["В","П","В","С","Ч","П","С"],"dateFormatItem-MMM":"LLL","field-month":"Месяц","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"до полудня","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-short":"dd.MM.yy","field-second":"Секунда","dateFormatItem-yMMMEd":"E, d MMM y","field-month-relative+0":"В этом месяце","field-month-relative+1":"В следующем месяце","dateFormatItem-Ed":"ccc, d","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"Неделя","dateFormat-medium":"dd MMM y 'г'.","field-year-relative+0":"В этом году","field-week-relative+-1":"На прошлой неделе","field-year-relative+1":"В следующем году","dayPeriods-format-narrow-pm":"пп","dateFormatItem-yyyyQQQQ":"QQQQ y 'г'.","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-yyyy":"y","field-week-relative+0":"На этой неделе","field-week-relative+1":"На следующей неделе"},"dijit/nls/loading":{"loadingState":"Загрузка...","errorState":"Извините, возникла ошибка"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 трлн","currencySpacing-afterCurrency-insertBetween":" ","nan":"не число","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"#,##0.00 ¤","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":" ","percentFormat":"#,##0 %","decimalFormat-long":"000 триллиона","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Отмена","buttonSave":"Сохранить","itemClose":"Закрыть"}});