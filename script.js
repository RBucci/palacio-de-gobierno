(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_0713390E_1815_180F_41A6_890421608876, this.audio_079793FE_1815_280F_41B7_F61CCCBAE04E]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_0C434D49_0334_FED6_417F_78ADD8B2D4F6",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": [
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "buttonToggleMute": [
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "class": "Player",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.32,
    "yawSpeed": 72.93,
    "easing": "cubic_in_out",
    "pitchSpeed": 36.8
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -35.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -62.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 62.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -65.19,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 66.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.95,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2BF45D81_1E84_B167_41A8_7340C0997057"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.25,
  "pitch": 18.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 93.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 173.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.82,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -93.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 35.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.4,
    "yawSpeed": 149.39,
    "easing": "cubic_in_out",
    "pitchSpeed": 74.85
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 81.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -6.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.38,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -94.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.46,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -134.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -33.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_28125DD9_1E84_B0E6_4192_709B11E0B347"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -135.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1,
    "yawSpeed": 76.96,
    "easing": "cubic_in_out",
    "pitchSpeed": 38.8
   },
   {
    "targetYaw": -30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 42.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.44,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B5C0D2C_1E84_B1BD_41B7_24D2545E70B3"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DAEB529_182B_2835_41AE_8B9E7A15E4E8",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 40.45
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 32.41
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B422D5B_182B_1815_419C_D884371317AA_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.63,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 35.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.4,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 81.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -6.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.38,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -94.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.46,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -134.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -33.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_291C4EDC_1E84_B09E_41AE_385601525421"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 149.91,
    "easing": "cubic_in_out",
    "pitchSpeed": 75.11
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2849CE12_1E84_B36A_41BA_C0AA98BF8C18"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.39,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 13.87,
    "easing": "cubic_in_out",
    "pitchSpeed": 7.41
   },
   {
    "targetYaw": -97.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.7,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -96.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.94,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -21.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.48,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.74,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_28E6BE69_1E84_B3A6_41A3_79D5BC3682AA"
},
{
 "class": "Window",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window48099"
 },
 "bodyPaddingRight": 5,
 "id": "window_30CD75EF_1E8C_70BB_4194_796F13F3930A",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 1,
 "width": 800,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_30CA6605_1E8C_736F_4190_8818D3C46945"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "class": "Window",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window48099"
 },
 "bodyPaddingRight": 5,
 "id": "window_2E690AF2_1E84_90AA_41A6_8ADC76B44CD9",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 1,
 "width": 800,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_2E916B1A_1E84_919A_41B6_1FCCAA7D540C"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 145.61,
   "backwardYaw": 6.3,
   "distance": 1,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 175.43,
   "backwardYaw": 11.77,
   "distance": 1,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -126.65,
   "backwardYaw": 67,
   "distance": 1,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 121.84,
   "backwardYaw": 0.56,
   "distance": 1,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0D80DFDA_182A_F817_4193_ED578BE923E1"
 ],
 "id": "panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
 "thumbnailUrl": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_t.jpg",
 "label": "11",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0DEEEDBE_182D_180F_41A6_83B490319FAA",
  "this.overlay_3DFB5E27_1D7C_F3AB_41AE_4FF1BC863F22",
  "this.overlay_3D4EC290_1D7F_9366_41B8_DA846932963E",
  "this.overlay_3C3D08AF_1D7C_90BA_41A2_6BA5748D7E75",
  "this.overlay_3E91D09F_1D7C_909B_41BA_C7F51604C066"
 ]
},
{
 "label": "Photo Album 0006884413",
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
 "thumbnailUrl": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_AlbumPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.46,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 35.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.4,
    "yawSpeed": 89.14,
    "easing": "cubic_in_out",
    "pitchSpeed": 44.86
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 81.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -6.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.38,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -94.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.46,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -134.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -33.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D465AA4_1E84_B0AD_41B6_808F1F53213A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 7.4,
    "easing": "cubic_in_out",
    "pitchSpeed": 4.18
   },
   {
    "targetYaw": -97.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.7,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -96.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.94,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -21.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.48,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.74,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D100A2F_1E84_B3BB_41BA_490655E2152F"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0E8290D2_1835_6817_41AE_7D46079D77F0",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.26,
  "pitch": 22.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 15.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -19.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 83.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 175.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7",
 "easing": "quad_in",
 "to": "left"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -82.54,
   "backwardYaw": 53.45,
   "distance": 1,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 10.37,
   "backwardYaw": -52.12,
   "distance": 1,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -94.77,
   "backwardYaw": 30.6,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.59,
   "backwardYaw": 37.04,
   "distance": 1,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DFA89E4_182D_1832_419B_6E66DDB77152"
 ],
 "id": "panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
 "thumbnailUrl": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_t.jpg",
 "label": "03",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_01F6F6B0_181B_6813_41A8_BAB9B4247FC8",
  "this.overlay_0A14ACAC_1D84_70BE_41B2_F41CEE69DA14",
  "this.overlay_05BB25C7_1D87_F0EA_419D_5CBB1A0A215E",
  "this.overlay_04BA866A_1D84_B3BA_41BD_A4A1068068DA",
  "this.overlay_04BABEE0_1D84_90A5_419A_537F375DE0EB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.15,
   "backwardYaw": -179.99,
   "distance": 1,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -30.01,
   "backwardYaw": 86.82,
   "distance": 1,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 30.6,
   "backwardYaw": -94.77,
   "distance": 1,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.11,
   "backwardYaw": -36.43,
   "distance": 1,
   "panorama": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.02,
   "backwardYaw": -0.57,
   "distance": 1,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -76.62,
   "backwardYaw": 45.66,
   "distance": 1,
   "panorama": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0E8290D2_1835_6817_41AE_7D46079D77F0"
 ],
 "id": "panorama_018DADFC_181B_1813_41A2_9897199B4176",
 "thumbnailUrl": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_t.jpg",
 "label": "01",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_018D9DFC_181B_1813_41A8_E0DA760091E2",
  "this.overlay_0B9B9AE0_1D84_90A6_41B7_4833365A76E7",
  "this.overlay_0BCA1DAF_1D84_90BA_41B9_338823154E9F",
  "this.overlay_0AC08947_1D9B_91EA_4197_FE3436D08247",
  "this.overlay_0826EA87_1D9B_936A_4195_EDACDBFD6556",
  "this.overlay_0B25D58F_1D9C_B17A_417D_518E7D26FF3F",
  "this.overlay_0BE55359_1D9C_91E6_41A3_F87F54B9C216"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 127.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 177.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.38,
    "yawSpeed": 28.12,
    "easing": "cubic_in_out",
    "pitchSpeed": 14.5
   },
   {
    "targetYaw": 110.66,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -115.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 177.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 75.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -47.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 143.07,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2DAC9AFC_1E84_B09D_41B7_7D2D5599DBCA"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -66.34,
   "backwardYaw": 92.96,
   "distance": 1,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.3,
   "backwardYaw": 147.65,
   "distance": 1,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 6.3,
   "backwardYaw": 145.61,
   "distance": 1,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 26.57,
   "backwardYaw": -138.93,
   "distance": 1,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DA1C5B4_182B_2812_41AD_E4FBAF5A7B84"
 ],
 "id": "panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
 "thumbnailUrl": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_t.jpg",
 "label": "08",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D9D005B_182D_E815_41B0_B6FACD102922",
  "this.overlay_00C32930_1D84_B1A5_41B9_AE194AA0357E",
  "this.overlay_02C9C0DE_1D87_B09A_4194_05E711E7D8CE",
  "this.overlay_3EB4B3C1_1D84_70E6_41B5_BC174D881DD4",
  "this.overlay_3D763D46_1D7C_91EA_41A1_6CA70A9F91EC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 177.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.38,
    "yawSpeed": 14.11,
    "easing": "cubic_in_out",
    "pitchSpeed": 7.52
   },
   {
    "targetYaw": 110.66,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -115.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 177.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 75.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -47.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 143.07,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D6A3A69_1E84_B3A7_41B5_A6C55C6A5732"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_018DADFC_181B_1813_41A2_9897199B4176_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1500,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 94.21,
    "easing": "cubic_in_out",
    "pitchSpeed": 47.39
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_28DDEEA2_1E84_B0AA_41B0_73CAF2A7E7B3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.51,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.41,
    "yawSpeed": 82.12,
    "easing": "cubic_in_out",
    "pitchSpeed": 41.37
   },
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D1FDA4C_1E84_B3FD_4180_A32E24EDBF8A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.41,
    "yawSpeed": 48.88,
    "easing": "cubic_in_out",
    "pitchSpeed": 24.83
   },
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_28C0EE85_1E84_B36E_41B6_6FA2758E1491"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.61,
    "yawSpeed": 167.61,
    "easing": "cubic_in_out",
    "pitchSpeed": 83.92
   },
   {
    "targetYaw": 15.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -19.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 83.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 175.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D0239F6_1E84_B0AD_41B4_4A6B6D644085"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.61,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 15.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -19.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 83.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 175.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2DCC4B96_1E84_B16D_41A3_E1B9FBCC9C2E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 143.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 21.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 17.33,
    "yawSpeed": 188.31,
    "easing": "cubic_in_out",
    "pitchSpeed": 94.22
   },
   {
    "targetYaw": 5.15,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 91.57,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 147.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.4,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.49,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A8D2C60_1E84_B7A5_41BD_DE741026687E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.85,
    "yawSpeed": 110.5,
    "easing": "cubic_in_out",
    "pitchSpeed": 55.5
   },
   {
    "targetYaw": 36.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -22.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 121.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.04,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 78.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2DA32ADF_1E84_B09B_41BE_033FD003D0E8"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DA569DD_182B_780D_4179_47CFB02B9B1E",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.04,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 116.38,
    "easing": "cubic_in_out",
    "pitchSpeed": 58.42
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 93.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 173.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.82,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -93.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_28AB8E30_1E84_B3A6_41AF_E9B5C90AAF0B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.47,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.41,
    "yawSpeed": 146.33,
    "easing": "cubic_in_out",
    "pitchSpeed": 73.33
   },
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A1FBBEC_1E84_B0BD_41BC_6E8116867542"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 149.32,
    "easing": "cubic_in_out",
    "pitchSpeed": 74.81
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2DBC3B1C_1E84_B19D_41A1_386503DDD0E9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 93.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 173.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.82,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -93.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A2BFBB3_1E84_B0AB_41A0_66D2CAC3B778"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0D88B243_182A_E875_41A9_CA34DF7F4DC6",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 243.94
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.16,
  "pitch": -1
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 42.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.44,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 176.74,
    "easing": "cubic_in_out",
    "pitchSpeed": 88.46
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 93.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 173.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.82,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -93.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B07ACD9_1E84_B0E7_4186_5FA328436F8B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -50.5,
  "pitch": 18.09
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -4.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -99.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -46.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -123.98,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 122.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -48.86,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 59.99,
   "backwardYaw": -15.42,
   "distance": 1,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -52.12,
   "backwardYaw": 10.37,
   "distance": 1,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.57,
   "backwardYaw": -0.02,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.57,
   "backwardYaw": 0.01,
   "distance": 1,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DE726A0_182D_6833_41B3_DE346714B05A"
 ],
 "id": "panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
 "thumbnailUrl": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_t.jpg",
 "label": "05",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_01FC59CD_1815_380D_41A9_B3DB97A7D233",
  "this.overlay_041DFB26_1D8D_B1AA_4180_BDAB0843E666",
  "this.overlay_07A2BAC7_1D8C_90EA_41B0_3E2CC6F949AF",
  "this.overlay_02BB39A5_1D8F_90AE_41AF_EB3B280D50B5",
  "this.overlay_03EC6051_1D8C_AFE7_41A3_3B9E8DC09015",
  "this.overlay_31BC36E0_1E9D_90A6_419A_D517219B79A3",
  "this.overlay_30536F4C_1E85_91FE_41B7_F77BFC1F5BE1",
  "this.overlay_2EB61B98_1E84_9166_41B6_A81C383E2D07",
  "this.overlay_30E4163C_1E8C_739D_419A_46656F2B1B82"
 ]
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_079793FE_1815_280F_41B7_F61CCCBAE04E.mp3",
  "oggUrl": "media/audio_079793FE_1815_280F_41B7_F61CCCBAE04E.ogg"
 },
 "autoplay": true,
 "id": "audio_079793FE_1815_280F_41B7_F61CCCBAE04E",
 "data": {
  "label": "Polca Tujami-EdjyYpgvpB8"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.96,
   "backwardYaw": -66.34,
   "distance": 1,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.46,
   "backwardYaw": 179.94,
   "distance": 1,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.77,
   "backwardYaw": 175.43,
   "distance": 1,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 45.79,
   "backwardYaw": -97.49,
   "distance": 1,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DAEB529_182B_2835_41AE_8B9E7A15E4E8"
 ],
 "id": "panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
 "thumbnailUrl": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_t.jpg",
 "label": "09",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0DFE8520_182D_E832_41AF_270035A1D102",
  "this.overlay_038C1207_1D84_B36A_419E_B22C34A058D9",
  "this.overlay_3DF535B9_1D85_B0A6_41A5_7C74D12B585A",
  "this.overlay_03502A44_1D85_93EE_41B9_C38376F62340",
  "this.overlay_3D955EA9_1D7D_90A6_4191_2AEB4D40F748"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 177.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.38,
    "yawSpeed": 14.11,
    "easing": "cubic_in_out",
    "pitchSpeed": 7.52
   },
   {
    "targetYaw": 110.66,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -115.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 177.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 75.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -47.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 143.07,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2AEF5C7D_1E84_B79F_41B4_69FE46A3E332"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.85,
    "yawSpeed": 18.84,
    "easing": "cubic_in_out",
    "pitchSpeed": 9.88
   },
   {
    "targetYaw": 36.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -22.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 121.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.04,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 78.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A7B8C09_1E84_B767_41B1_94C726153B8E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.85,
    "yawSpeed": 113.11,
    "easing": "cubic_in_out",
    "pitchSpeed": 56.8
   },
   {
    "targetYaw": 36.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -22.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 121.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.04,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 78.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2833EDBC_1E84_B09D_41A9_50A926034449"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 179.68,
    "easing": "cubic_in_out",
    "pitchSpeed": 89.92
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_297CEEFA_1E84_B09A_41B4_2F592473AE27"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.06,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.32,
    "yawSpeed": 10.77,
    "easing": "cubic_in_out",
    "pitchSpeed": 5.86
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -35.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -62.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 62.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -65.19,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 66.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.95,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D0B6A13_1E84_B36B_41BA_838D3E0A4663"
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_0713390E_1815_180F_41A6_890421608876.mp3",
  "oggUrl": "media/audio_0713390E_1815_180F_41A6_890421608876.ogg"
 },
 "autoplay": true,
 "id": "audio_0713390E_1815_180F_41A6_890421608876",
 "data": {
  "label": "Cerro Cor\u00e1, de F\u00e9lix Fern\u00e1ndez y H. Gim\u00e9nez. Guerra de la Triple Alianza-9bEh37rWQFg"
 }
},
{
 "class": "Window",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window48099"
 },
 "bodyPaddingRight": 5,
 "id": "window_2F29DE42_1E9D_93EA_41BD_AFC6166069C6",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 1,
 "width": 800,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_2F2A0E43_1E9D_93EA_41BD_886E1D587446"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -102.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -50.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.09,
    "yawSpeed": 38.97,
    "easing": "cubic_in_out",
    "pitchSpeed": 19.9
   },
   {
    "targetYaw": -4.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -99.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -46.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -123.98,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 122.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -48.86,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D773A86_1E84_B36D_41AF_E5D2EA539CA2"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.01,
   "backwardYaw": -0.57,
   "distance": 1,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.86,
   "backwardYaw": 77.93,
   "distance": 1,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.45,
   "backwardYaw": -82.54,
   "distance": 1,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.99,
   "backwardYaw": 0.15,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DF5EC89_182D_38F5_41AC_908D6038CCC0"
 ],
 "id": "panorama_030750AD_181D_680D_41B3_D2F407301D1E",
 "thumbnailUrl": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_t.jpg",
 "label": "02",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_030740AE_181D_680F_41B2_87C98DC92E26",
  "this.overlay_0B0A83B9_1D9B_90A6_41A6_59812089EE2B",
  "this.overlay_0A8ADC8C_1D84_977E_41B2_F8BA5528B0EB",
  "this.overlay_0A36D9B8_1D85_90A6_41B7_76F4979188CD",
  "this.overlay_0A2951EA_1D84_90BA_419F_FA3E70BDBD94"
 ]
},
{
 "class": "Window",
 "closeButtonPressedIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window48099"
 },
 "bodyPaddingRight": 5,
 "id": "window_30235F0F_1E85_917A_41B2_5B7B0CD00BDD",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 1,
 "width": 800,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "height": 600,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "minWidth": 20,
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadow": true,
 "footerHeight": 5,
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "layout": "vertical",
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_3027DF14_1E85_916E_41AB_CFCE70F86A38"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderRadius": 11,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBorderColor": "#000000",
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -135.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1,
    "yawSpeed": 1.39,
    "easing": "cubic_in_out",
    "pitchSpeed": 1.19
   },
   {
    "targetYaw": -30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 42.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.44,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2AC89C9C_1E84_B09D_41A0_FD099B167637"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 21.14,
    "easing": "cubic_in_out",
    "pitchSpeed": 11.02
   },
   {
    "targetYaw": -97.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.7,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -96.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.94,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -21.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.48,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.74,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B42DD10_1E84_B165_4174_A9D31AADC6BE"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.35,
  "pitch": 17.33
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 5.15,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 91.57,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 147.59,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.4,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -112.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.49,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DA1C5B4_182B_2812_41AD_E4FBAF5A7B84",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 360
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DFA89E4_182D_1832_419B_6E66DDB77152",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0D8D2BF6_182D_181F_41A7_C17971D8AE4A",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.92,
  "pitch": 30.4
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 81.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -6.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.38,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -94.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.46,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -134.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -33.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera"
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": [
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": [
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.5,
  "pitch": 18.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -97.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.7,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -96.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.94,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -21.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.48,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.74,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.61,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 15.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -19.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 83.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 175.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2BB89D48_1E84_B1E5_41B5_1D24A4FE01DC"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0D80DFDA_182A_F817_4193_ED578BE923E1",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "easing": "quad_in",
 "to": "left"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DD62663_182D_6835_4178_012AF5E5E7D6",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DF5EC89_182D_38F5_41AC_908D6038CCC0",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.61,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 15.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -19.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 83.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 175.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -80.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B252CBD_1E84_B09F_41AA_FB4B89872699"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.85,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 179.55,
    "easing": "cubic_in_out",
    "pitchSpeed": 89.86
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D539AC1_1E84_B0E7_41AF_298ED29911BD"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.32,
    "yawSpeed": 23.2,
    "easing": "cubic_in_out",
    "pitchSpeed": 12.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -35.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -62.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 62.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -65.19,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 66.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.95,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2884FE4D_1E84_B3FE_41B8_8F7AF63627CF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 19.94,
    "easing": "cubic_in_out",
    "pitchSpeed": 10.43
   },
   {
    "targetYaw": -97.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.7,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -96.34,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.94,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -21.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.48,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 30.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 35.74,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A012BCF_1E84_B0FB_41BA_E75448BB26FA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.18,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -50.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.09,
    "yawSpeed": 33.21,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.03
   },
   {
    "targetYaw": -4.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -99.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -46.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -123.98,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 122.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -48.86,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2A576C26_1E84_B7AA_41AB_284CCD6DE471"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.25,
  "pitch": 20.85
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 36.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -22.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 121.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.04,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 78.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.84,
    "yawSpeed": 216,
    "easing": "cubic_in_out",
    "pitchSpeed": 108
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 93.58,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 173.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.82,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.35,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -93.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B9B0D64_1E84_B1AD_41B9_DD7D7E3E8A8B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.85,
    "yawSpeed": 155.78,
    "easing": "cubic_in_out",
    "pitchSpeed": 78.03
   },
   {
    "targetYaw": 36.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -39.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 24.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -22.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -6.97,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -120.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -25.31,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 121.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -22.04,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 78.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.73,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.86,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_295C9F17_1E84_B16A_41B4_37ACE93566A3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.58,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -50.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.09,
    "yawSpeed": 150.94,
    "easing": "cubic_in_out",
    "pitchSpeed": 75.62
   },
   {
    "targetYaw": -4.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -99.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -46.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -123.98,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 122.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -48.86,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_293D8EBE_1E84_B09A_41B2_F77E51060A60"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.96,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -50.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.09,
    "yawSpeed": 66.45,
    "easing": "cubic_in_out",
    "pitchSpeed": 33.57
   },
   {
    "targetYaw": -4.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.62,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -99.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -46.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -123.98,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.33,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 36.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -7.98,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 67.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 122.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -48.86,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D8E2B3A_1E84_B1A5_4186_516D567C9EF6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -120.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 177.61,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 27.38,
    "yawSpeed": 143.76,
    "easing": "cubic_in_out",
    "pitchSpeed": 72.05
   },
   {
    "targetYaw": 110.66,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -115.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 177.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 75.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -47.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 143.07,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_286C8DF5_1E84_B0AE_4189_1D958B9E7085"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 45.66,
   "backwardYaw": -76.62,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -62.51,
   "backwardYaw": 42.78,
   "distance": 1,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DA48027_182B_283D_41B0_75E46AF3CFFB"
 ],
 "id": "panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
 "thumbnailUrl": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_t.jpg",
 "label": "06",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_00E8C182_1815_E8F7_41B6_9BCBCE476881",
  "this.overlay_00BA66A7_1D8D_90AA_41A4_F902E6035765",
  "this.overlay_007B36EF_1D8C_F0BA_4195_3E5FC0BA1C51"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.12,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.32,
    "yawSpeed": 42.95,
    "easing": "cubic_in_out",
    "pitchSpeed": 21.88
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -35.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -62.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 62.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -65.19,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 66.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.95,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2B60ECF5_1E84_B0AF_41AD_DB53B829A661"
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DA48027_182B_283D_41B0_75E46AF3CFFB",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 360
},
{
 "class": "DirectionalPanoramaAudio",
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "autoplay": true,
 "id": "audio_0DE726A0_182D_6833_41B3_DE346714B05A",
 "data": {
  "label": "Birds stereo 01"
 },
 "maximumAngle": 358.49
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A",
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.41,
    "yawSpeed": 130.03,
    "easing": "cubic_in_out",
    "pitchSpeed": 65.21
   },
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2DF63B78_1E84_B1A5_41B2_452BADBA9804"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "yawSpeed": 103.64,
    "easing": "cubic_in_out",
    "pitchSpeed": 52.08
   },
   {
    "targetYaw": 30.52,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.12,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -50.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -156.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 133.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.84,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 70.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.68,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -76.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2D9CEB58_1E84_B1E5_41B7_DB7AF067B11A"
},
{
 "duration": 5000,
 "label": "0006884413",
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0",
 "thumbnailUrl": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0_t.jpg",
 "width": 730,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 487
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 77.93,
   "backwardYaw": -50.86,
   "distance": 1,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 37.04,
   "backwardYaw": -32.59,
   "distance": 1,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.42,
   "backwardYaw": 59.99,
   "distance": 1,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.82,
   "backwardYaw": -30.01,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DD62663_182D_6835_4178_012AF5E5E7D6"
 ],
 "id": "panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
 "thumbnailUrl": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_t.jpg",
 "label": "04",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_03DA3CBB_1815_3815_41AA_0B0D57DEBC5E",
  "this.overlay_052A0368_1D84_B1A5_419D_979C44929C6B",
  "this.overlay_0409ED8B_1D84_717A_41BB_D0A353732856",
  "this.overlay_07F87030_1D8B_AFA5_4198_0DE942A38D96",
  "this.overlay_07F3F72A_1D8D_91A5_41B5_36BD55EEB336"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.61,
  "pitch": 27.38
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 110.66,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -115.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 177.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.06,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 75.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -30.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -47.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.07,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -149.6,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 143.07,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.35,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -36.43,
   "backwardYaw": 86.11,
   "distance": 1,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0D8D2BF6_182D_181F_41A7_C17971D8AE4A"
 ],
 "id": "panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
 "thumbnailUrl": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_t.jpg",
 "label": "12",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3BC3609A_1E8C_6F65_41BD_4C759084181E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.44,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.41,
    "yawSpeed": 167.87,
    "easing": "cubic_in_out",
    "pitchSpeed": 84.05
   },
   {
    "targetYaw": 23.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.59,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -7.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -173.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 118.7,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.57,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 57.4,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.89,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2BD64D9C_1E84_B09E_4163_A3A641960957"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1,
  "pitch": 15.32
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -35.36,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -62.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.32,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 61.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.58,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 62.18,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -65.19,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 26.19,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -1.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 66.95,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -1.95,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 35.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.4,
    "yawSpeed": 75.39,
    "easing": "cubic_in_out",
    "pitchSpeed": 38.02
   },
   {
    "targetYaw": 34.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.34,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 81.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -6.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.38,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -94.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -4.46,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -134.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 163.42,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -33.85,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": -31.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -8.23,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   },
   {
    "targetYaw": 35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.64,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_2AB17C43_1E84_B7EB_41B1_99B3E07DAD11"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 147.65,
   "backwardYaw": -9.3,
   "distance": 1,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.94,
   "backwardYaw": -0.46,
   "distance": 1,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 67,
   "backwardYaw": -126.65,
   "distance": 1,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 114.88,
   "backwardYaw": -24.53,
   "distance": 1,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0D88B243_182A_E875_41A9_CA34DF7F4DC6"
 ],
 "id": "panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
 "thumbnailUrl": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_t.jpg",
 "label": "10",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E07D6FF_182D_280D_41AC_D1AEF847D4D8",
  "this.overlay_3D69FBFA_1D7B_909A_41AD_0475632790DB",
  "this.overlay_38CB7BB6_1D7C_B0AA_41B3_05A821831AC2",
  "this.overlay_3DB06927_1D7D_91AA_41BA_9E8F79A2C0C5",
  "this.overlay_3F61C1C9_1D7C_70E6_4181_FBCEC0421D9A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -138.93,
   "backwardYaw": 26.57,
   "distance": 1,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.49,
   "backwardYaw": 45.79,
   "distance": 1,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -24.53,
   "backwardYaw": 114.88,
   "distance": 1,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.56,
   "backwardYaw": 121.84,
   "distance": 1,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.78,
   "backwardYaw": -62.51,
   "distance": 1,
   "panorama": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400"
  }
 ],
 "hfov": 360,
 "partial": false,
 "audios": [
  "this.audio_0DA569DD_182B_780D_4179_47CFB02B9B1E"
 ],
 "id": "panorama_0B422D5B_182B_1815_419C_D884371317AA",
 "thumbnailUrl": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_t.jpg",
 "label": "07",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D84A878_182D_1813_41A1_9457CEFA19BA",
  "this.overlay_017E45BC_1D8B_F09E_41AA_72234B35D647",
  "this.overlay_3C7F59C1_1D84_B0E6_41A7_746ACC4766BA",
  "this.overlay_00B06018_1D84_AF67_41A6_4B364A7C7199",
  "this.overlay_3D3262D9_1D85_F0E6_41A6_12538CF0302B",
  "this.overlay_3D3858B8_1D7C_90A6_41A8_1DAF5728AD91"
 ]
},
{
 "class": "ViewerArea",
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "18px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": true,
 "data": {
  "name": "--STICKER"
 },
 "scrollBarWidth": 10,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 58,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.Image_D11D2773_C206_7714_41E3_7BBA45F51C47"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 413,
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": 3,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 116,
 "gap": 5,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "layout": "horizontal"
},
{
 "propagateClick": false,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "scrollBarWidth": 10,
 "id": "Container_0C434D49_0334_FED6_417F_78ADD8B2D4F6",
 "left": "0.06%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
  "this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 330,
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 115.05,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "data": {
  "name": "--INFO"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "data": {
  "name": "--CONTACT"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 30,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton Fullscreen"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 30,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton Sound"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "class": "AudioResource",
 "mp3Url": "media/audio_0E8290D2_1835_6817_41AE_7D46079D77F0.mp3",
 "id": "audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "oggUrl": "media/audio_0E8290D2_1835_6817_41AE_7D46079D77F0.ogg"
},
{
 "propagateClick": false,
 "id": "htmlText_30CA6605_1E8C_736F_4190_8818D3C46945",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText48100"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "propagateClick": false,
 "id": "htmlText_2E916B1A_1E84_919A_41B6_1FCCAA7D540C",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText48100"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 74.17,
 "id": "overlay_0DEEEDBE_182D_180F_41A6_83B490319FAA",
 "yaw": -166.43,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_2BF45D81_1E84_B167_41A8_7340C0997057); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.47,
   "image": "this.AnimatedImageResource_3D15E514_1E85_916E_4183_27001B3230D2",
   "pitch": -1.98,
   "yaw": -126.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DFB5E27_1D7C_F3AB_41AE_4FF1BC863F22",
 "maps": [
  {
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_2B9B0D64_1E84_B1AD_41B9_DD7D7E3E8A8B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.47,
   "image": "this.AnimatedImageResource_3D15B514_1E85_916E_419B_97565ACFAAC5",
   "pitch": -2.19,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D4EC290_1D7F_9366_41B8_DA846932963E",
 "maps": [
  {
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_2BB89D48_1E84_B1E5_41B5_1D24A4FE01DC); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.47,
   "image": "this.AnimatedImageResource_3D159514_1E85_916E_418C_5910E62C6F56",
   "pitch": -2.38,
   "yaw": 145.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C3D08AF_1D7C_90BA_41A2_6BA5748D7E75",
 "maps": [
  {
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_2BD64D9C_1E84_B09E_4163_A3A641960957); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.42,
   "image": "this.AnimatedImageResource_3D156514_1E85_916E_41BB_AF9B1262B5B5",
   "pitch": -6.26,
   "yaw": 121.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E91D09F_1D7C_909B_41BA_C7F51604C066",
 "maps": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0"
  }
 ],
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_AlbumPlayList"
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 60.36,
 "id": "overlay_01F6F6B0_181B_6813_41A8_BAB9B4247FC8",
 "yaw": 67.96,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_2DA32ADF_1E84_B09B_41BE_033FD003D0E8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.95,
   "image": "this.AnimatedImageResource_3D0CB50A_1E85_917A_4139_1872F028C154",
   "pitch": -6.42,
   "yaw": -82.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A14ACAC_1D84_70BE_41B2_F41CEE69DA14",
 "maps": [
  {
   "hfov": 16.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -6.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_2DAC9AFC_1E84_B09D_41B7_7D2D5599DBCA); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.84,
   "image": "this.AnimatedImageResource_2D2CDD1C_1E85_919E_41BC_466CA1E8F5AA",
   "pitch": -3.12,
   "yaw": 10.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05BB25C7_1D87_F0EA_419D_5CBB1A0A215E",
 "maps": [
  {
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -3.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_2D8E2B3A_1E84_B1A5_4186_516D567C9EF6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.21,
   "image": "this.AnimatedImageResource_3D0C750A_1E85_917A_4180_D97C47061AB9",
   "pitch": -1.32,
   "yaw": -32.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04BA866A_1D84_B3BA_41BD_A4A1068068DA",
 "maps": [
  {
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_2DBC3B1C_1E84_B19D_41A1_386503DDD0E9); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_3D0C450B_1E85_917A_416D_F07E3108F77F",
   "pitch": -2.51,
   "yaw": -94.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04BABEE0_1D84_90A5_419A_537F375DE0EB",
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.51
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 66.39,
 "id": "overlay_018D9DFC_181B_1813_41A8_E0DA760091E2",
 "yaw": 43.59,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_2A7B8C09_1E84_B767_41B1_94C726153B8E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.71,
   "image": "this.AnimatedImageResource_3D08A506_1E85_916A_41A3_D1FE4BA98DF6",
   "pitch": -8.04,
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B9B9AE0_1D84_90A6_41B7_4833365A76E7",
 "maps": [
  {
   "hfov": 20.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -8.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_2A576C26_1E84_B7AA_41AB_284CCD6DE471); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.78,
   "image": "this.AnimatedImageResource_3D086507_1E85_916A_414C_A69AD27E15CC",
   "pitch": -3.13,
   "yaw": -30.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BCA1DAF_1D84_90BA_41B9_338823154E9F",
 "maps": [
  {
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -3.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_2AB17C43_1E84_B7EB_41B1_99B3E07DAD11); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.78,
   "image": "this.AnimatedImageResource_3D084507_1E85_916A_41B0_A41B019C9A15",
   "pitch": -3.43,
   "yaw": 30.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AC08947_1D9B_91EA_4197_FE3436D08247",
 "maps": [
  {
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -3.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_2AEF5C7D_1E84_B79F_41B4_69FE46A3E332); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.8,
   "image": "this.AnimatedImageResource_3D082507_1E85_916A_41B9_B7B89082C034",
   "pitch": 1.74,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0826EA87_1D9B_936A_4195_EDACDBFD6556",
 "maps": [
  {
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400, this.camera_2AC89C9C_1E84_B09D_41A0_FD099B167637); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.53,
   "image": "this.AnimatedImageResource_3D09F508_1E85_9166_41A6_86D88FE3CFAF",
   "pitch": -2.37,
   "yaw": -76.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B25D58F_1D9C_B17A_417D_518E7D26FF3F",
 "maps": [
  {
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F, this.camera_2A8D2C60_1E84_B7A5_41BD_DE741026687E); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_3D09D508_1E85_9166_4179_4D369EE5A0EA",
   "pitch": 4.68,
   "yaw": 86.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BE55359_1D9C_91E6_41A3_F87F54B9C216",
 "maps": [
  {
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.68
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 71.66,
 "id": "overlay_0D9D005B_182D_E815_41B0_B6FACD102922",
 "yaw": -103.38,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_28C0EE85_1E84_B36E_41B6_6FA2758E1491); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.32,
   "image": "this.AnimatedImageResource_3D11C510_1E85_9166_41B0_85A4AB2B955F",
   "pitch": -2.97,
   "yaw": 26.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_00C32930_1D84_B1A5_41B9_AE194AA0357E",
 "maps": [
  {
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_28AB8E30_1E84_B3A6_41AF_E9B5C90AAF0B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.33,
   "image": "this.AnimatedImageResource_3D11A510_1E85_9166_4152_DCF1348165E8",
   "pitch": -2.03,
   "yaw": -66.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02C9C0DE_1D87_B09A_4194_05E711E7D8CE",
 "maps": [
  {
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_2884FE4D_1E84_B3FE_41B8_8F7AF63627CF); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.87,
   "image": "this.AnimatedImageResource_3D118511_1E85_9166_419E_BBDD5AA23726",
   "pitch": 0.99,
   "yaw": -9.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3EB4B3C1_1D84_70E6_41B5_BC174D881DD4",
 "maps": [
  {
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_28E6BE69_1E84_B3A6_41A3_79D5BC3682AA); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.86,
   "image": "this.AnimatedImageResource_3D115511_1E85_9166_41B0_30FFDE04C13B",
   "pitch": 1.22,
   "yaw": 6.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D763D46_1D7C_91EA_41A1_6CA70A9F91EC",
 "maps": [
  {
   "hfov": 6.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.22
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 79.7,
 "id": "overlay_01FC59CD_1815_380D_41A9_B3DB97A7D233",
 "yaw": -41.07,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_293D8EBE_1E84_B09A_41B2_F77E51060A60); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.61,
   "image": "this.AnimatedImageResource_3D0FE50C_1E85_917E_41A8_01EB9FDFB8B6",
   "pitch": -7.91,
   "yaw": 59.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_041DFB26_1D8D_B1AA_4180_BDAB0843E666",
 "maps": [
  {
   "hfov": 12.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -7.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_291C4EDC_1E84_B09E_41AE_385601525421); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.66,
   "image": "this.AnimatedImageResource_3D0D450D_1E85_917E_41BB_B27207BAAA1F",
   "pitch": -5.91,
   "yaw": -52.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07A2BAC7_1D8C_90EA_41B0_3E2CC6F949AF",
 "maps": [
  {
   "hfov": 12.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -5.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_295C9F17_1E84_B16A_41B4_37ACE93566A3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.4,
   "image": "this.AnimatedImageResource_3D0D250D_1E85_917E_41B5_4FAE24FB386D",
   "pitch": -4.63,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02BB39A5_1D8F_90AE_41AF_EB3B280D50B5",
 "maps": [
  {
   "hfov": 7.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -4.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_297CEEFA_1E84_B09A_41B4_2F592473AE27); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_3D0EF50D_1E85_917E_41A6_2FA2B9BDFBD9",
   "pitch": 1.57,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_03EC6051_1D8C_AFE7_41A3_3B9E8DC09015",
 "maps": [
  {
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.57
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_2F29DE42_1E9D_93EA_41BD_AFC6166069C6, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.67,
   "image": "this.AnimatedImageResource_225EBF43_1E84_F1EB_41B8_32C25D7E6EA1",
   "pitch": 27.67,
   "yaw": 112.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31BC36E0_1E9D_90A6_419A_D517219B79A3",
 "maps": [
  {
   "hfov": 6.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.67
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_30235F0F_1E85_917A_41B2_5B7B0CD00BDD, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.7,
   "image": "this.AnimatedImageResource_22A1FF43_1E84_F1EB_41B4_0AF29E262018",
   "pitch": 27.28,
   "yaw": -116.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30536F4C_1E85_91FE_41B7_F77BFC1F5BE1",
 "maps": [
  {
   "hfov": 6.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.28
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_2E690AF2_1E84_90AA_41A6_8ADC76B44CD9, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.9,
   "image": "this.AnimatedImageResource_22A06F43_1E84_F1EB_41B5_E46A21DEAA3C",
   "pitch": 23.79,
   "yaw": -168.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2EB61B98_1E84_9166_41B6_A81C383E2D07",
 "maps": [
  {
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 23.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_30CD75EF_1E8C_70BB_4194_796F13F3930A, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.9,
   "image": "this.AnimatedImageResource_22A08F44_1E84_F1ED_41BD_C27CF6F80C48",
   "pitch": 23.79,
   "yaw": 164.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30E4163C_1E8C_739D_419A_46656F2B1B82",
 "maps": [
  {
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 23.79
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 74.42,
 "id": "overlay_0DFE8520_182D_E832_41AF_270035A1D102",
 "yaw": -136.29,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_2D0B6A13_1E84_B36B_41BA_838D3E0A4663); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.36,
   "image": "this.AnimatedImageResource_3D126511_1E85_9166_41B1_76332B15E6E7",
   "pitch": 1.16,
   "yaw": -0.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_038C1207_1D84_B36A_419E_B22C34A058D9",
 "maps": [
  {
   "hfov": 6.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_2D1FDA4C_1E84_B3FD_4180_A32E24EDBF8A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.36,
   "image": "this.AnimatedImageResource_3D124512_1E85_916A_4195_D9FA68320464",
   "pitch": -0.56,
   "yaw": 45.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DF535B9_1D85_B0A6_41A5_7C74D12B585A",
 "maps": [
  {
   "hfov": 6.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_2D0239F6_1E84_B0AD_41B4_4A6B6D644085); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.29,
   "image": "this.AnimatedImageResource_3D121512_1E85_916A_41B6_44B65F1FF2EA",
   "pitch": -2.99,
   "yaw": 92.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_03502A44_1D85_93EE_41B9_C38376F62340",
 "maps": [
  {
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_2D100A2F_1E84_B3BB_41BA_490655E2152F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.35,
   "image": "this.AnimatedImageResource_3D13E512_1E85_916A_41BA_C85B780C6BCA",
   "pitch": 1.78,
   "yaw": 11.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D955EA9_1D7D_90A6_4191_2AEB4D40F748",
 "maps": [
  {
   "hfov": 6.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.78
  }
 ]
},
{
 "propagateClick": false,
 "id": "htmlText_2F2A0E43_1E9D_93EA_41BD_886E1D587446",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText48100"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 45.03,
 "id": "overlay_030740AE_181D_680F_41B2_87C98DC92E26",
 "yaw": 6.41,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_2D539AC1_1E84_B0E7_41AF_298ED29911BD); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.21,
   "image": "this.AnimatedImageResource_3D0A2509_1E85_9166_41AC_D9370189C44A",
   "pitch": -9.1,
   "yaw": -179.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B0A83B9_1D9B_90A6_41A6_59812089EE2B",
 "maps": [
  {
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -9.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_2D773A86_1E84_B36D_41AF_E5D2EA539CA2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.23,
   "image": "this.AnimatedImageResource_2F70DCB6_1E84_90AA_41B9_4E8C8E655396",
   "pitch": -6.25,
   "yaw": -50.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A8ADC8C_1D84_977E_41B2_F8BA5528B0EB",
 "maps": [
  {
   "hfov": 19.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -6.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_2D465AA4_1E84_B0AD_41B6_808F1F53213A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.22,
   "image": "this.AnimatedImageResource_2F708CB6_1E84_90AA_41B5_64003374BCCA",
   "pitch": -6.45,
   "yaw": 53.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A36D9B8_1D85_90A6_41B7_76F4979188CD",
 "maps": [
  {
   "hfov": 19.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -6.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_2D6A3A69_1E84_B3A7_41B5_A6C55C6A5732); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_3D0BA509_1E85_9166_41B8_A39C8D11E45B",
   "pitch": -1.03,
   "yaw": 0.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A2951EA_1D84_90BA_419F_FA3E70BDBD94",
 "maps": [
  {
   "hfov": 7.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ]
},
{
 "propagateClick": false,
 "id": "htmlText_3027DF14_1E85_916E_41AB_CFCE70F86A38",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "width": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText48100"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 30,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C43FD49_0334_FED6_417C_95AF1425050C.png",
 "minWidth": 1,
 "mode": "push",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "visible": false,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 30,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton Hs visibility"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 34,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 34,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton Gyroscopic"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 67.64,
 "id": "overlay_00E8C182_1815_E8F7_41B6_9BCBCE476881",
 "yaw": -17.46,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_2D9CEB58_1E84_B1E5_41B7_DB7AF067B11A); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_3D0E450E_1E85_917A_41B2_7430264C029B",
   "pitch": -2.67,
   "yaw": 45.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_00BA66A7_1D8D_90AA_41A4_F902E6035765",
 "maps": [
  {
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_2DF63B78_1E84_B1A5_41B2_452BADBA9804); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.72,
   "image": "this.AnimatedImageResource_3D0E250E_1E85_917A_4181_018583E37354",
   "pitch": 0.15,
   "yaw": -62.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_007B36EF_1D8C_F0BA_4195_3E5FC0BA1C51",
 "maps": [
  {
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.15
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 76.69,
 "id": "overlay_03DA3CBB_1815_3815_41AA_0B0D57DEBC5E",
 "yaw": -43.59,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_28125DD9_1E84_B0E6_4192_709B11E0B347); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.27,
   "image": "this.AnimatedImageResource_3D0D450B_1E85_917A_4198_B439B5562CCB",
   "pitch": -0.72,
   "yaw": 37.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_052A0368_1D84_B1A5_419D_979C44929C6B",
 "maps": [
  {
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_2833EDBC_1E84_B09D_41A9_50A926034449); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.68,
   "image": "this.AnimatedImageResource_3D0D250B_1E85_917A_41BD_EE9201093B4B",
   "pitch": -5.23,
   "yaw": 77.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0409ED8B_1D84_717A_41BB_D0A353732856",
 "maps": [
  {
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -5.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_286C8DF5_1E84_B0AE_4189_1D958B9E7085); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.78,
   "image": "this.AnimatedImageResource_3D0D050C_1E85_917E_41A0_EEAB04A64471",
   "pitch": -4.93,
   "yaw": -15.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07F87030_1D8B_AFA5_4198_0DE942A38D96",
 "maps": [
  {
   "hfov": 12.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -4.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_2849CE12_1E84_B36A_41BA_C0AA98BF8C18); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.45,
   "image": "this.AnimatedImageResource_3D0ED50C_1E85_917E_41A6_B56B2DFB117B",
   "pitch": -2.7,
   "yaw": 86.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07F3F72A_1D8D_91A5_41B5_36BD55EEB336",
 "maps": [
  {
   "hfov": 5.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_28DDEEA2_1E84_B0AA_41B0_73CAF2A7E7B3); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.03,
   "image": "this.AnimatedImageResource_2D3CBD38_1E85_91A6_41AF_19F8C3EE9584",
   "pitch": 0.61,
   "yaw": -36.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BC3609A_1E8C_6F65_41BD_4C759084181E",
 "maps": [
  {
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.61
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 71.16,
 "id": "overlay_0E07D6FF_182D_280D_41AC_D1AEF847D4D8",
 "yaw": -150.86,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_2A2BFBB3_1E84_B0AB_41A0_66D2CAC3B778); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.77,
   "image": "this.AnimatedImageResource_3D130513_1E85_916A_41AD_9174740C0A76",
   "pitch": -3.63,
   "yaw": 179.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D69FBFA_1D7B_909A_41AD_0475632790DB",
 "maps": [
  {
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -3.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_2DCC4B96_1E84_B16D_41A3_E1B9FBCC9C2E); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.51,
   "image": "this.AnimatedImageResource_3D14E513_1E85_916A_4176_F34A4716E326",
   "pitch": -2.82,
   "yaw": 147.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38CB7BB6_1D7C_B0AA_41B3_05A821831AC2",
 "maps": [
  {
   "hfov": 5.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_2A1FBBEC_1E84_B0BD_41BC_6E8116867542); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.47,
   "image": "this.AnimatedImageResource_3D14C513_1E85_916A_41A8_F1D275854D39",
   "pitch": -1.69,
   "yaw": 114.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DB06927_1D7D_91AA_41BA_9E8F79A2C0C5",
 "maps": [
  {
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_2A012BCF_1E84_B0FB_41BA_E75448BB26FA); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.47,
   "image": "this.AnimatedImageResource_3D14A513_1E85_916A_41B7_C6E0BBF92346",
   "pitch": -2.38,
   "yaw": 67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F61C1C9_1D7C_70E6_4181_FBCEC0421D9A",
 "maps": [
  {
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.38
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 71.66,
 "id": "overlay_0D84A878_182D_1813_41A1_9457CEFA19BA",
 "yaw": -97.6,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400, this.camera_2B5C0D2C_1E84_B1BD_41B7_24D2545E70B3); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.46,
   "image": "this.AnimatedImageResource_3D0F550E_1E85_917A_41B5_B81AF6288E13",
   "pitch": 3.88,
   "yaw": 42.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_017E45BC_1D8B_F09E_41AA_72234B35D647",
 "maps": [
  {
   "hfov": 6.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_2B252CBD_1E84_B09F_41AA_FB4B89872699); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_3D0F350E_1E85_917B_41AA_29B2C3C2B0B8",
   "pitch": -2.07,
   "yaw": -138.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C7F59C1_1D84_B0E6_41A7_746ACC4766BA",
 "maps": [
  {
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_2B07ACD9_1E84_B0E7_4186_5FA328436F8B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.8,
   "image": "this.AnimatedImageResource_3D0F150F_1E85_917A_41B7_C43EA11FEFAA",
   "pitch": -0.73,
   "yaw": -97.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_00B06018_1D84_AF67_41A6_4B364A7C7199",
 "maps": [
  {
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 16
     }
    ]
   },
   "pitch": -0.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_2B60ECF5_1E84_B0AF_41AD_DB53B829A661); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.46,
   "image": "this.AnimatedImageResource_3D10F50F_1E85_917A_41B3_96F61EAD23E3",
   "pitch": 2.68,
   "yaw": -24.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D3262D9_1D85_F0E6_41A6_12538CF0302B",
 "maps": [
  {
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_2B42DD10_1E84_B165_4174_A9D31AADC6BE); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.46,
   "image": "this.AnimatedImageResource_3D10C50F_1E85_917A_4198_32C9FF51E74D",
   "pitch": 3.27,
   "yaw": 0.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D3858B8_1D7C_90A6_41A8_1DAF5728AD91",
 "maps": [
  {
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.27
  }
 ]
},
{
 "maxHeight": 74,
 "propagateClick": false,
 "id": "Image_D11D2773_C206_7714_41E3_7BBA45F51C47",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_D11D2773_C206_7714_41E3_7BBA45F51C47.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "93.22%",
 "minWidth": 120,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image6538"
 },
 "class": "Image",
 "maxWidth": 350
},
{
 "propagateClick": true,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarWidth": 10,
 "id": "Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "80%",
 "paddingLeft": 0,
 "children": [
  "this.Container_0C43BD48_0334_FED6_4184_569A6090129C",
  "this.IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 66,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "visible": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_0C43CD48_0334_FED6_4173_3A6EA8849449",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
  "this.IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 110,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "layout": "horizontal"
},
{
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "width": "91.304%",
 "gap": 3,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "10%",
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "5%",
 "scrollBarOpacity": 0.5,
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal",
 "propagateClick": true
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "84.02%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "5%",
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "2%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "2%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "top": "5%",
 "scrollBarOpacity": 0.5,
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "2%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "2%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "2%",
 "scrollBarOpacity": 0.5,
 "bottom": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal",
 "propagateClick": true
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "2%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "2%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "93%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "2%",
 "gap": 0,
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "2%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "right": "2%",
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "2%",
 "scrollBarOpacity": 0.5,
 "bottom": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal",
 "propagateClick": true
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "2%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "2%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "87%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "2%",
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D15E514_1E85_916E_4183_27001B3230D2",
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D15B514_1E85_916E_419B_97565ACFAAC5",
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D159514_1E85_916E_418C_5910E62C6F56",
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D156514_1E85_916E_41BB_AF9B1262B5B5",
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0CB50A_1E85_917A_4139_1872F028C154",
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2D2CDD1C_1E85_919E_41BC_466CA1E8F5AA",
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0C750A_1E85_917A_4180_D97C47061AB9",
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0C450B_1E85_917A_416D_F07E3108F77F",
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D08A506_1E85_916A_41A3_D1FE4BA98DF6",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D086507_1E85_916A_414C_A69AD27E15CC",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D084507_1E85_916A_41B0_A41B019C9A15",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D082507_1E85_916A_41B9_B7B89082C034",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D09F508_1E85_9166_41A6_86D88FE3CFAF",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D09D508_1E85_9166_4179_4D369EE5A0EA",
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D11C510_1E85_9166_41B0_85A4AB2B955F",
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D11A510_1E85_9166_4152_DCF1348165E8",
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D118511_1E85_9166_419E_BBDD5AA23726",
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D115511_1E85_9166_41B0_30FFDE04C13B",
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0FE50C_1E85_917E_41A8_01EB9FDFB8B6",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0D450D_1E85_917E_41BB_B27207BAAA1F",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0D250D_1E85_917E_41B5_4FAE24FB386D",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0EF50D_1E85_917E_41A6_2FA2B9BDFBD9",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_225EBF43_1E84_F1EB_41B8_32C25D7E6EA1",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_22A1FF43_1E84_F1EB_41B4_0AF29E262018",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_22A06F43_1E84_F1EB_41B5_E46A21DEAA3C",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_22A08F44_1E84_F1ED_41BD_C27CF6F80C48",
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D126511_1E85_9166_41B1_76332B15E6E7",
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D124512_1E85_916A_4195_D9FA68320464",
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D121512_1E85_916A_41B6_44B65F1FF2EA",
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D13E512_1E85_916A_41BA_C85B780C6BCA",
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0A2509_1E85_9166_41AC_D9370189C44A",
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2F70DCB6_1E84_90AA_41B9_4E8C8E655396",
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2F708CB6_1E84_90AA_41B5_64003374BCCA",
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0BA509_1E85_9166_41B8_A39C8D11E45B",
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0E450E_1E85_917A_41B2_7430264C029B",
 "levels": [
  {
   "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0E250E_1E85_917A_4181_018583E37354",
 "levels": [
  {
   "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0D450B_1E85_917A_4198_B439B5562CCB",
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0D250B_1E85_917A_41BD_EE9201093B4B",
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0D050C_1E85_917E_41A0_EEAB04A64471",
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0ED50C_1E85_917E_41A6_B56B2DFB117B",
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2D3CBD38_1E85_91A6_41AF_19F8C3EE9584",
 "levels": [
  {
   "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D130513_1E85_916A_41AD_9174740C0A76",
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D14E513_1E85_916A_4176_F34A4716E326",
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D14C513_1E85_916A_41A8_F1D275854D39",
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D14A513_1E85_916A_41B7_C6E0BBF92346",
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0F550E_1E85_917A_41B5_B81AF6288E13",
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0F350E_1E85_917B_41AA_29B2C3C2B0B8",
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D0F150F_1E85_917A_41B7_C43EA11FEFAA",
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D10F50F_1E85_917A_41B3_96F61EAD23E3",
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3D10C50F_1E85_917A_4198_32C9FF51E74D",
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 600
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C43BD48_0334_FED6_4184_569A6090129C",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 36,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "maxHeight": 50,
 "propagateClick": true,
 "id": "IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48",
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 44,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48.png",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C, false, 0, this.effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7, 'hideEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, false, 0, this.effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7, 'hideEffect', false)",
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 50
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "width": 300,
 "children": [
  "this.Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
  "this.Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
  "this.Container_0C421D49_0334_FED6_4186_D39A3DF00320"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 40,
 "shadow": false,
 "paddingBottom": 40,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "data": {
  "name": "Container"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "maxHeight": 50,
 "propagateClick": true,
 "id": "IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F",
 "paddingRight": 0,
 "right": 9,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 44,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F.png",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C, true, 0, this.effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A, 'showEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, true, 0, this.effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A, 'showEffect', false)",
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 50
},
{
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 60,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter('https://pdg.visitapy.com')",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook('https://pdg.visitapy.com')",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "propagateClick": true,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "children": [
  "this.Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "width": "50%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "propagateClick": true,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 450,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "50%",
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 50,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "data": {
  "name": "X"
 },
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 50,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "absolute"
},
{
 "scrollBarWidth": 10,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "scrollBarColor": "#987B55",
 "horizontalAlign": "center",
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#987B55",
 "scrollBarOpacity": 0.5,
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Times New Roman",
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#987B55",
 "itemLabelPosition": "bottom",
 "height": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 10,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "propagateClick": true,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#987B55",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemThumbnailShadow": false,
 "paddingBottom": 70,
 "borderRadius": 5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailWidth": 220
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "propagateClick": true,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "width": "99.97%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "maxHeight": 40,
 "propagateClick": true,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "mode": "push",
 "minWidth": 20,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "height": "79.681%",
 "width": "3.062%",
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "data": {
  "name": "X"
 },
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 40
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "propagateClick": true,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "children": [
  "this.Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "width": "85%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "propagateClick": true,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "50%",
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 60,
 "minHeight": 50,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "height": 60,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_0C43ED48_0334_FED6_4187_625DBBCE5D00.png",
 "minHeight": 30,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 40,
 "height": "25.061%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "Image Company"
 },
 "class": "Image",
 "maxWidth": 1095
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_0C430D48_0334_FED6_4145_1E211728F658",
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Container_0C435D48_0334_FED6_4180_31E986AED01E",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Container_0C437D48_0334_FED6_4186_D484F3BB9D32",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Container_0C42CD48_0334_FED7_4183_C8B09627F4AA",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
  "this.Container_0C42ED49_0334_FED6_4187_F035BAC1122B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "width": "100%",
 "top": "25%",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "-Container buttons"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "vertical"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0C421D49_0334_FED6_4186_D39A3DF00320",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
  "this.Container_0C43CD49_0334_FED6_417D_336039055769",
  "this.HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "bottom",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 120,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "-Container footer"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "vertical"
},
{
 "maxHeight": 897,
 "propagateClick": false,
 "id": "Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image72337"
 },
 "class": "Image",
 "maxWidth": 1337
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "right",
 "width": "100%",
 "gap": 0,
 "height": 40,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 300,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "gap": 0,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarWidth": 10,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "77.115%",
 "paddingTop": 36,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "class": "HTMLText"
},
{
 "maxHeight": 40,
 "propagateClick": true,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "width": 40,
 "minHeight": 40,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "minWidth": 40,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": 40,
 "top": 10,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "maxWidth": 40,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2145.221055247256!2d-57.638218351351945!3d-25.276727636763248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98f8ed14fc209ad4!2sPalacio%20de%20Gobierno!5e0!3m2!1ses-419!2spy!4v1581049463988!5m2!1ses-419!2spy",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "bottom": "0%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame5113"
 },
 "class": "WebFrame"
},
{
 "maxHeight": 897,
 "propagateClick": false,
 "id": "Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image71348"
 },
 "class": "Image",
 "maxWidth": 1337
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "right",
 "width": "100%",
 "gap": 0,
 "height": 40,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 300,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "vertical"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "scrollBarWidth": 10,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "height": "2.54%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C430D48_0334_FED6_4145_1E211728F658",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button house info"
 },
 "paddingRight": 0,
 "fontFamily": "Cinzel Bold",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 220,
 "iconHeight": 0,
 "minHeight": 1,
 "rollOverFontColor": "#DB9B4D",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 14,
 "label": "Info",
 "height": 40,
 "shadowBlurRadius": 15,
 "gap": 5,
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "fontStyle": "normal",
 "pressedFontColor": "#000000",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 0,
 "class": "Button",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C435D48_0334_FED6_4180_31E986AED01E",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button panorama list"
 },
 "paddingRight": 0,
 "fontFamily": "Cinzel Bold",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 220,
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverFontColor": "#DB9B4D",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 14,
 "label": "Vistas y Fotos",
 "height": 40,
 "shadowBlurRadius": 15,
 "gap": 5,
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "pressedFontColor": "#000000",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "class": "Button",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C437D48_0334_FED6_4186_D484F3BB9D32",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button location"
 },
 "paddingRight": 0,
 "fontFamily": "Cinzel Bold",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 220,
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverFontColor": "#DB9B4D",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 14,
 "label": "Ubicaci\u00f3n",
 "height": 40,
 "shadowBlurRadius": 15,
 "gap": 5,
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "fontStyle": "normal",
 "pressedFontColor": "#000000",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "class": "Button",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C42CD48_0334_FED7_4183_C8B09627F4AA",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button contact"
 },
 "paddingRight": 0,
 "fontFamily": "Cinzel Bold",
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 220,
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverFontColor": "#DB9B4D",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 14,
 "label": "Contacto",
 "height": 40,
 "shadowBlurRadius": 15,
 "gap": 5,
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "fontStyle": "normal",
 "pressedFontColor": "#000000",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "iconWidth": 32,
 "class": "Button",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0C42ED49_0334_FED6_4187_F035BAC1122B",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "scrollBarWidth": 10,
 "id": "Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 40,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "layout": "horizontal"
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B"
 ],
 "id": "Container_0C43CD49_0334_FED6_417D_336039055769",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 40,
 "width": "100%",
 "gap": 16,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "-Container settings"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container",
 "layout": "horizontal"
},
{
 "visible": false,
 "propagateClick": true,
 "id": "HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "gap": 10,
 "height": "30%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container header"
 },
 "overflow": "visible",
 "class": "Container",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "borderSize": 0,
 "scrollBarVisible": "always",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "gap": 20,
 "height": "75%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "horizontal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "gap": 10,
 "height": "20.027%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container header contact"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "height": 7,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "Container25772"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>\u00a1Espero que hayan disfrutado!</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Nuestros mas sinceros agradecimientos al Teniente Coronel Luis Belotto por su amabilidad y cortes\u00eda durante nuestras tomas.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Vamos a estar actualizando el Paseo a medida que vayamos pudiendo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">\u00a1Gracias por visitarnos!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACTO:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:rholand@rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>rholand@rbucci.com</U></SPAN></A></SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>www.rbucci.com</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://api.whatsapp.com/send?phone=595981408400&amp;text=Hola, me gustÃ³ el Paseo Digital del PanteÃ³n!\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>+595 981 408 400</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "propagateClick": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Antonio",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 30,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3.26vh",
 "label": "WhatsApp",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#25D366"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": "12%",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Pante%C3%B3n!', '_blank')",
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 10,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "iconWidth": 32,
 "class": "Button",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "35%",
 "fontWeight": "bold"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "scrollBarColor": "#996633",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "bottom": "18.88%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "61.735%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Cinzel Bold';\"><B>PALACIO DE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.26vh;font-family:'Cinzel Bold';\"><B>Gobierno</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "class": "HTMLText"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "left": "0.19%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0.19%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "bottom": "14.08%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "gap": 10,
 "height": 7,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "class": "Container",
 "layout": "absolute"
},
{
 "propagateClick": true,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "50%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.8vh;font-family:'Antonio';\"><B>Informaci\u00f3n General</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText12940"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "propagateClick": true,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "50%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.57vh;font-family:'Open Sans Semibold';\"><I>Por Carlos Dar\u00edo Torres </I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "class": "HTMLText"
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "scrollBarColor": "#BBD149",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": 0,
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "98.095%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:3.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Cinzel Bold';\"><B>CONTACTO</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText23803"
 },
 "class": "HTMLText"
}],
 "width": "100%",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
