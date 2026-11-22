(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"class":"Player","propagateClick":false,"scrollBarMargin":2,"hash": "0052d3078d09f48dd5a9cb36593e652c380891b8273bbf23d9c9559fc108ed80", "definitions": [{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBBD1C4_E7A1_0C16_41E0_D0776AF3EDDD"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBB91C4_E7A1_0C16_41D5_0A2D7CB01C3E"},{"class":"Panorama","id":"panorama_ED502596_E7A1_1433_41CE_2B61B7E73331","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":6,"height":3072,"url":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":36,"width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_t.jpg"}],"data":{"label":"pano-4"},"hfovMax":130,"hfov":360,"hfovMin":"120%","vfov":180,"label":trans('panorama_ED502596_E7A1_1433_41CE_2B61B7E73331.label'),"thumbnailUrl":"media/panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_t.jpg"},{"class":"Panorama","id":"panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":2,"height":1024,"url":"media/panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_t.jpg"}],"data":{"label":"Aipano3"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F.label'),"thumbnailUrl":"media/panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_t.jpg"},{"class":"Panorama","id":"panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":4,"height":2048,"url":"media/panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_t.jpg"}],"data":{"label":"pano-3"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0.label'),"thumbnailUrl":"media/panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_t.jpg"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECB831C1_E7A1_0C0E_41D6_CDE8CAA69430"},{"class":"Panorama","id":"panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":4,"height":2048,"url":"media/panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_t.jpg"}],"data":{"label":"pano-2"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687.label'),"thumbnailUrl":"media/panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_t.jpg"},{"class":"Panorama","id":"panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":2,"height":1024,"url":"media/panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_t.jpg"}],"data":{"label":"Aipano"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84.label'),"thumbnailUrl":"media/panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_t.jpg"},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_camera","media":"this.panorama_ED502596_E7A1_1433_41CE_2B61B7E73331","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_camera","media":"this.panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84_camera","media":"this.panorama_ECE8B118_E7AF_0C3F_41D5_D191B7886D84","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0_camera","media":"this.panorama_ED5EF7B0_E7AF_340E_41C8_525DDABF80E0","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_camera","media":"this.panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"camera":"this.panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687_camera","media":"this.panorama_ED50586C_E7AF_1C16_41CE_BA4A6EEBB687","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)"},{"camera":"this.panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_camera","media":"this.panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 0)"}]},{"class":"Panorama","id":"panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":4,"height":2048,"url":"media/panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_t.jpg"}],"data":{"label":"pano"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2.label'),"thumbnailUrl":"media/panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_t.jpg"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED502596_E7A1_1433_41CE_2B61B7E73331_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBC71C4_E7A1_0C16_41E1_13A85127B335"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED501A05_E7AE_FC16_41D5_EA76A210B2F2_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBC11C4_E7A1_0C16_41D6_A71AC42BB1CA"},{"class":"Panorama","id":"panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58","frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":2,"height":1024,"url":"media/panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_t.jpg"}],"data":{"label":"Aipano2"},"hfovMax":130,"hfov":360,"hfovMin":"150%","vfov":180,"label":trans('panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58.label'),"thumbnailUrl":"media/panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_t.jpg"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED5FD3F5_E7AE_F3F6_41EB_6C7FFF8DAC58_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBC31C4_E7A1_0C16_41E8_F18933E3D15E"},{"progressBorderRadius":2,"propagateClick":false,"progressLeft":"33%","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipPaddingRight":6,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingBottom":4,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowColor":"#333138","subtitlesTextShadowOpacity":1,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","progressBackgroundColorRatios":[0],"progressOpacity":0.7,"progressRight":"33%","class":"ViewerArea","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"id":"MainViewer","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"subtitlesBottom":50,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15,"minHeight":50,"playbackBarHeadShadowColor":"#000000","minWidth":100,"playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","progressBottom":10,"progressHeight":2,"progressBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","playbackBarHeadShadow":true,"playbackBarHeadShadowVerticalLength":0,"height":"100%","progressBarBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBottom":5,"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_ED501329_E7AF_0C1E_41E1_0A97F821E08F_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_ECBBF1C4_E7A1_0C16_41EB_CCB1A16DCBD8"},{"keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBBD1C4_E7A1_0C16_41E0_D0776AF3EDDD","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBB91C4_E7A1_0C16_41D5_0A2D7CB01C3E","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECB831C1_E7A1_0C0E_41D6_CDE8CAA69430","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBC71C4_E7A1_0C16_41E1_13A85127B335","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBC11C4_E7A1_0C16_41D6_A71AC42BB1CA","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBC31C4_E7A1_0C16_41E8_F18933E3D15E","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_ECBBF1C4_E7A1_0C16_41EB_CCB1A16DCBD8","class":"PanoramaCameraSequence"}],"id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"locales":{"en":"locale/en.txt"},"name":"Player592","defaultLocale":"en"},"backgroundColor":["#FFFFFF"],"layout":"absolute","start":"this.init()","gap":10,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","watermark":false,"minHeight":0,"minWidth":0,"scripts":{"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"clone":TDV.Tour.Script.clone,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setValue":TDV.Tour.Script.setValue,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPixels":TDV.Tour.Script.getPixels,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMainViewer":TDV.Tour.Script.getMainViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"init":TDV.Tour.Script.init,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"toggleVR":TDV.Tour.Script.toggleVR,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"enableVR":TDV.Tour.Script.enableVR,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"createTween":TDV.Tour.Script.createTween,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"shareSocial":TDV.Tour.Script.shareSocial,"executeJS":TDV.Tour.Script.executeJS,"mixObject":TDV.Tour.Script.mixObject,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showWindowBase":TDV.Tour.Script.showWindowBase,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"disableVR":TDV.Tour.Script.disableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"translate":TDV.Tour.Script.translate,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initAnalytics":TDV.Tour.Script.initAnalytics,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getKey":TDV.Tour.Script.getKey,"quizStart":TDV.Tour.Script.quizStart,"unloadViewer":TDV.Tour.Script.unloadViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"height":"100%","backgroundColorRatios":[0],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Sat Nov 21 2026