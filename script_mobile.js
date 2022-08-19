(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"backgroundOpacity":1,"borderSize":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"pitch":1,"speechOnTooltip":false},"defaultLocale":"es","name":"Player32772","locales":{"es":"locale/es.txt"}},"backgroundColorDirection":"vertical","gap":10,"backgroundColorRatios":[0],"width":"100%","overflow":"hidden","borderRadius":0,"scrollBarMargin":2,"paddingLeft":0,"paddingTop":0,"toolTipHorizontalAlign":"center","mouseWheelEnabled":true,"paddingBottom":0,"backgroundPreloadEnabled":true,"paddingRight":0,"propagateClick":false,"horizontalAlign":"left","id":"rootPlayer","vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","mediaActivationMode":"window","scrollBarOpacity":0.5,"downloadEnabled":false,"scripts":{"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"translate":TDV.Tour.Script.translate,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"downloadFile":TDV.Tour.Script.downloadFile,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clone":TDV.Tour.Script.clone,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openLink":TDV.Tour.Script.openLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showWindow":TDV.Tour.Script.showWindow,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentByName":TDV.Tour.Script.getComponentByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlays":TDV.Tour.Script.getOverlays,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoBack":TDV.Tour.Script.historyGoBack,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"mixObject":TDV.Tour.Script.mixObject,"isPanorama":TDV.Tour.Script.isPanorama,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setLocale":TDV.Tour.Script.setLocale,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios},"mobileMipmappingEnabled":false,"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"creationPolicy":"inAdvance","layout":"absolute","scrollBarWidth":10,"lockedOrientation":"landscape","definitions": [{"easing":"linear","duration":500,"class":"FadeInEffect","id":"effect_9F2D2BC2_B37D_E03B_41E0_15592CDFAE54"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_9248F911_B54C_2056_41E1_EC8739A991E5_camera","media":"this.panorama_9248F911_B54C_2056_41E1_EC8739A991E5","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_94679131_B54C_6056_41DA_974CE544F64B","automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_9248F911_B54C_2056_41E1_EC8739A991E5_camera"},{"toolTipBackgroundColor":"#F6F6F6","subtitlesTextDecoration":"none","borderSize":0,"toolTipPaddingRight":3,"subtitlesTextShadowBlurRadius":0,"toolTipFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","shadow":false,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarBackgroundOpacity":1,"width":"100%","toolTipDisplayTime":600,"data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"toolTipPaddingLeft":3,"paddingLeft":0,"toolTipShadowBlurRadius":1,"paddingRight":0,"propagateClick":true,"subtitlesShadow":false,"playbackBarHeadOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"id":"MainViewer_mobile","toolTipShadowSpread":0,"playbackBarRight":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowOpacity":0,"subtitlesOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","toolTipBorderRadius":1,"translationTransitionDuration":1000,"playbackBarBackgroundColor":["#FFFFFF"],"transitionMode":"blending","playbackBarHeadShadowBlurRadius":1.5,"toolTipShadowOpacity":1,"height":"100%","subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","surfaceReticleColor":"#FFFFFF","toolTipShadowColor":"#333138","surfaceReticleOpacity":0.6,"subtitlesGap":0,"progressBackgroundOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontWeight":"normal","playbackBarHeadBorderSize":0,"playbackBarHeight":10,"class":"ViewerArea","surfaceReticleSelectionOpacity":1,"minHeight":25,"playbackBarHeadShadowVerticalLength":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesEnabled":true,"playbackBarOpacity":1,"minWidth":50,"playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingLeft":5,"progressLeft":0,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontStyle":"normal","progressOpacity":1,"progressRight":0,"toolTipBorderSize":1,"playbackBarHeadBorderRadius":0,"toolTipPaddingBottom":2,"firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","paddingTop":0,"toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"playbackBarHeadWidth":6,"toolTipOpacity":1,"progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"paddingBottom":0,"vrPointerSelectionTime":2000,"progressBorderColor":"#000000","playbackBarBottom":5,"toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"toolTipShadowHorizontalLength":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadHeight":15,"toolTipBorderColor":"#767676","transitionDuration":500,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"progressBarOpacity":1,"toolTipShadowVerticalLength":0,"displayTooltipInTouchScreens":true,"progressBottom":0,"toolTipTextShadowBlurRadius":1,"vrPointerSelectionColor":"#FF6600","progressHeight":10,"subtitlesTop":0,"progressBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarProgressOpacity":1,"progressBarBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","playbackBarProgressBorderSize":0,"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","subtitlesPaddingBottom":5,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"toolTipPaddingTop":2,"borderRadius":0,"toolTipFontWeight":"normal","playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical"},{"borderSize":0,"backgroundOpacity":0,"scaleMode":"fill","data":{"name":"Image33225"},"visible":false,"url":trans('Image_92A5DBC7_B5CC_E03A_41E3_82EAC39064D3_mobile.url'),"width":"99.444%","paddingTop":0,"toolTipHorizontalAlign":"center","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","propagateClick":true,"top":"0%","id":"Image_92A5DBC7_B5CC_E03A_41E3_82EAC39064D3_mobile","height":"100%","verticalAlign":"middle","interactionEnabled":false,"class":"Image","left":"0%","minHeight":1,"borderRadius":0,"minWidth":1,"shadow":false},{"gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer"},{"hfovMax":130,"thumbnailUrl":"media/panorama_9248F911_B54C_2056_41E1_EC8739A991E5_t.jpg","vfov":180,"hfovMin":"150%","frames":[{"cube":{"levels":[{"width":3072,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_9248F911_B54C_2056_41E1_EC8739A991E5_0/{face}/0/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9248F911_B54C_2056_41E1_EC8739A991E5_t.jpg"}],"id":"panorama_9248F911_B54C_2056_41E1_EC8739A991E5","pitch":0,"label":trans('panorama_9248F911_B54C_2056_41E1_EC8739A991E5.label'),"class":"Panorama","data":{"label":"panorama_CB9D1D78_D2FF_0723_41C4_6017CB8E9A82_hd_t"},"hfov":360,"partial":false,"overlays":["this.overlay_917716B4_B2FC_205E_41CB_67A489D3AC9B"]},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_94679131_B54C_6056_41DA_974CE544F64B"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"pngegg (1)"},"useHandCursor":true,"items":[{"image":"this.res_912B8385_B2FC_203E_41D5_48B4E00CDC57","distance":50,"yaw":102.69,"vfov":16.9,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"data":{"label":"pngegg (1)"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-3.92,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_90471908_B2FC_2036_41B2_6116D9E8F801"],"id":"overlay_917716B4_B2FC_205E_41CB_67A489D3AC9B"},{"class":"ImageResource","levels":[{"height":103,"width":63,"class":"ImageResourceLevel","url":"media/res_912B8385_B2FC_203E_41D5_48B4E00CDC57_0.png"}],"id":"res_912B8385_B2FC_203E_41D5_48B4E00CDC57"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9F2D2BC2_B37D_E03B_41E0_15592CDFAE54, 'showEffect', false)}.bind(this); visibleFunc(this.Image_92A5DBC7_B5CC_E03A_41E3_82EAC39064D3_mobile); this.setOverlaysVisibility([this.overlay_917716B4_B2FC_205E_41CB_67A489D3AC9B], false, 0)","id":"HotspotPanoramaOverlayArea_90471908_B2FC_2036_41B2_6116D9E8F801"}],"defaultVRPointer":"laser","scrollBarColor":"#000000","children":["this.MainViewer_mobile","this.Image_92A5DBC7_B5CC_E03A_41E3_82EAC39064D3_mobile"],"class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":20,"contentOpaque":false,"left":546.2,"minWidth":20,"shadow":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.26.js.map
})();
//Generated with v2022.0.26, Fri Aug 19 2022