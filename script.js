(function(){
    var script = {
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
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
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_0713390E_1815_180F_41A6_890421608876, this.audio_079793FE_1815_280F_41B7_F61CCCBAE04E]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": [
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_018DADFC_181B_1813_41A2_9897199B4176_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 1500,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "initialPosition": {
  "yaw": -169.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 35.92,
    "path": "shortest",
    "targetPitch": 30.4,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 81.02,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.91,
    "path": "shortest",
    "targetPitch": 14.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -94.08,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.53,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 163.42,
    "path": "shortest",
    "targetPitch": -33.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.03,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.05,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C3845E0_1E55_0CD5_4188_35BD74CD5212",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_2F29DE42_1E9D_93EA_41BD_AFC6166069C6",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_2F2A0E43_1E9D_93EA_41BD_886E1D587446"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -134.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.16,
    "path": "shortest",
    "targetPitch": -1,
    "pitchSpeed": 1.19,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.39
   },
   {
    "targetYaw": -30.77,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.27,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 42.58,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -61.42,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F0D54A3_1E55_035A_419E_18D672139E5A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -4.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.5,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 4.18,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 7.4
   },
   {
    "targetYaw": -97.6,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "path": "shortest",
    "targetPitch": 27.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -96.34,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": 35.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.77,
    "path": "shortest",
    "targetPitch": 35.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D7E569E_1E55_0F6D_4192_A17D640EAF1E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -113,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1,
    "path": "shortest",
    "targetPitch": 15.32,
    "pitchSpeed": 36.8,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 72.93
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": -35.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -62.93,
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.42,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 62.18,
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -65.19,
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.95,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F4FB444_1E55_03DE_41A0_3DDC855C7402",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "09",
 "id": "panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
 "overlays": [
  "this.overlay_0DFE8520_182D_E832_41AF_270035A1D102",
  "this.overlay_038C1207_1D84_B36A_419E_B22C34A058D9",
  "this.overlay_3DF535B9_1D85_B0A6_41A5_7C74D12B585A",
  "this.overlay_03502A44_1D85_93EE_41B9_C38376F62340",
  "this.overlay_3D955EA9_1D7D_90A6_4191_2AEB4D40F748"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 45.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -97.49,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "distance": 1
  },
  {
   "yaw": 92.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -66.34,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "distance": 1
  },
  {
   "yaw": -0.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.94,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "distance": 1
  },
  {
   "yaw": 11.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 175.43,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DAEB529_182B_2835_41AE_8B9E7A15E4E8"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "06",
 "id": "panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
 "overlays": [
  "this.overlay_00E8C182_1815_E8F7_41B6_9BCBCE476881",
  "this.overlay_00BA66A7_1D8D_90AA_41A4_F902E6035765",
  "this.overlay_007B36EF_1D8C_F0BA_4195_3E5FC0BA1C51"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -62.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.78,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "distance": 1
  },
  {
   "yaw": 45.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -76.62,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DA48027_182B_283D_41B0_75E46AF3CFFB"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -179.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 20.85,
    "pitchSpeed": 78.03,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 155.78
   },
   {
    "targetYaw": 36.3,
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -39.06,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.24,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -22.23,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -75.99,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "path": "shortest",
    "targetPitch": -25.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 121.47,
    "path": "shortest",
    "targetPitch": -22.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 78.26,
    "path": "shortest",
    "targetPitch": -7.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 9.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C16A5BF_1E55_0CAB_4193_FDA1666BB1E0",
 "class": "PanoramaCamera"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_079793FE_1815_280F_41B7_F61CCCBAE04E.ogg",
  "mp3Url": "media/audio_079793FE_1815_280F_41B7_F61CCCBAE04E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_079793FE_1815_280F_41B7_F61CCCBAE04E",
 "data": {
  "label": "Polca Tujami-EdjyYpgvpB8"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_0DA48027_182B_283D_41B0_75E46AF3CFFB",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "items": [
  {
   "media": "this.video_1078EF62_1E55_7DD5_41BD_5082260E8578",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_08C30290_1E55_0775_41A3_196102E8C247, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_08C30290_1E55_0775_41A3_196102E8C247, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_08C30290_1E55_0775_41A3_196102E8C247",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 82.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 32.41,
    "pitchSpeed": 41.37,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.12
   },
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C9CD63E_1E55_0FAA_41A8_2FE7AD2A6D58",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0DFA89E4_182D_1832_419B_6E66DDB77152",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_0DA1C5B4_182B_2812_41AD_E4FBAF5A7B84",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -0.25,
  "class": "PanoramaCameraPosition",
  "pitch": 18.84
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 22.99,
    "path": "shortest",
    "targetPitch": 10.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.13,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.58,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 173.22,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.35,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -93.33,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0E9C0A05_1E57_075E_41B8_C6B79C12DF73",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EE30A04_1E57_075E_41B3_4D3C835A8508"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 97.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 35.92,
    "path": "shortest",
    "targetPitch": 30.4,
    "pitchSpeed": 44.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 89.14
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 81.02,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.91,
    "path": "shortest",
    "targetPitch": 14.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -94.08,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.53,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 163.42,
    "path": "shortest",
    "targetPitch": -33.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.03,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.05,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D3E9726_1E55_0D5D_41B4_0EFB6CDD86F3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 89.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 179.55
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D206765_1E55_0DDF_4193_B53AEC2AE70C",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_0E8290D2_1835_6817_41AE_7D46079D77F0",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -93.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 47.39,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 94.21
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C74559F_1E55_0D6B_4169_C5B5AE73728C",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_2E690AF2_1E84_90AA_41A6_8ADC76B44CD9",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_2E916B1A_1E84_919A_41B6_1FCCAA7D540C"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 35.92,
  "class": "PanoramaCameraPosition",
  "pitch": 30.4
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 81.02,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.91,
    "path": "shortest",
    "targetPitch": 14.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -94.08,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.53,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 163.42,
    "path": "shortest",
    "targetPitch": -33.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.03,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.05,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera",
 "class": "PanoramaCamera"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": [
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": [
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_11B07C97_1E57_037B_41A2_0DB2FDFFF89A",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_11B05C97_1E57_037B_4196_3DCB57D75E74"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 243.94,
 "id": "audio_0D88B243_182A_E875_41A9_CA34DF7F4DC6",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EF465BD_1E57_0CAE_41A8_BCB5093FD4BC",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EF735BC_1E57_0CAE_41A3_2B5B2FA0663F"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0E885A3D_1E57_07AE_418D_1CB858BB154F",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0E8B9A3D_1E57_07AE_41B5_020DE6A767BD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0DE726A0_182D_6833_41B3_DE346714B05A",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EBFAA59_1E57_07F6_41AF_ED0B08B71CA5",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0E810A58_1E57_07F6_419E_1CE6539A11C6"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0D80DFDA_182A_F817_4193_ED578BE923E1",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -126.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 20.85,
    "pitchSpeed": 55.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 110.5
   },
   {
    "targetYaw": 36.3,
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -39.06,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.24,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -22.23,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -75.99,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "path": "shortest",
    "targetPitch": -25.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 121.47,
    "path": "shortest",
    "targetPitch": -22.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 78.26,
    "path": "shortest",
    "targetPitch": -7.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 9.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B7DC937_1E55_05BB_41B9_93F80EBA0233",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -168.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 22.99,
    "path": "shortest",
    "targetPitch": 10.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.13,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.58,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 173.22,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.35,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -93.33,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F5E2420_1E55_0356_41AB_4211A7A41FDA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.5,
  "class": "PanoramaCameraPosition",
  "pitch": 18.84
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -97.6,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "path": "shortest",
    "targetPitch": 27.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -96.34,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": 35.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.77,
    "path": "shortest",
    "targetPitch": 35.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 32.41
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B422D5B_182B_1815_419C_D884371317AA_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0DD62663_182D_6835_4178_012AF5E5E7D6",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -142.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.5,
    "path": "shortest",
    "targetPitch": 18.09,
    "pitchSpeed": 33.57,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 66.45
   },
   {
    "targetYaw": -4.4,
    "path": "shortest",
    "targetPitch": 12.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.6,
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -123.98,
    "path": "shortest",
    "targetPitch": -30.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.55,
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 67.96,
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 16.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -48.86,
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B1C1957_1E55_05FB_41B2_E446D3EF4BFD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 113.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1.26,
    "path": "shortest",
    "targetPitch": 22.61,
    "pitchSpeed": 83.92,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 167.61
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.22,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 83.53,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 119.46,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.23,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -163.42,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -80.27,
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CBE665E_1E55_0FED_4185_AB7B60CA423B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10",
 "id": "panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
 "overlays": [
  "this.overlay_0E07D6FF_182D_280D_41AC_D1AEF847D4D8",
  "this.overlay_3D69FBFA_1D7B_909A_41AD_0475632790DB",
  "this.overlay_38CB7BB6_1D7C_B0AA_41B3_05A821831AC2",
  "this.overlay_3DB06927_1D7D_91AA_41BA_9E8F79A2C0C5",
  "this.overlay_3F61C1C9_1D7C_70E6_4181_FBCEC0421D9A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 114.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -24.53,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "distance": 1
  },
  {
   "yaw": 147.65,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.3,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "distance": 1
  },
  {
   "yaw": 179.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.46,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "distance": 1
  },
  {
   "yaw": 67,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.65,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0D88B243_182A_E875_41A9_CA34DF7F4DC6"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 177.61,
  "class": "PanoramaCameraPosition",
  "pitch": 27.38
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 110.66,
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -115.94,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.99,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.13,
    "path": "shortest",
    "targetPitch": -30.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -47.36,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.6,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 143.07,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 89.92,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 179.68
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CFC261F_1E55_0F6B_41B6_62E8D632A3AC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 155.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 32.41,
    "pitchSpeed": 73.33,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 146.33
   },
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0ADFD890_1E55_0375_41BB_5CA8199895A8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -87.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 58.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 116.38
   },
   {
    "targetYaw": 22.99,
    "path": "shortest",
    "targetPitch": 10.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.13,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.58,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 173.22,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.35,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -93.33,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F8D6542_1E55_0DDA_4177_FF3811085BFB",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EE625CE_1E57_0CEA_41AC_59B71F1BB66B",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EE965CE_1E57_0CEA_41B4_7F2576277F38"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0_t.jpg",
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0",
 "width": 730,
 "label": "0006884413",
 "image": {
  "levels": [
   {
    "url": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 487
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "02",
 "id": "panorama_030750AD_181D_680D_41B3_D2F407301D1E",
 "overlays": [
  "this.overlay_030740AE_181D_680F_41B2_87C98DC92E26",
  "this.overlay_0B0A83B9_1D9B_90A6_41A6_59812089EE2B",
  "this.overlay_0A8ADC8C_1D84_977E_41B2_F8BA5528B0EB",
  "this.overlay_0A36D9B8_1D85_90A6_41B7_76F4979188CD",
  "this.overlay_0A2951EA_1D84_90BA_419F_FA3E70BDBD94",
  "this.overlay_0EBC5615_1E57_0F7E_41A1_2C27FF5D4EB6",
  "this.overlay_0EBC6615_1E57_0F7E_41BC_1E87BC28310B",
  "this.overlay_0EBDB615_1E57_0F7E_4182_96FA35E379A8",
  "this.overlay_0EBDA615_1E57_0F7E_41B4_9E51A288612F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.57,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "distance": 1
  },
  {
   "yaw": 53.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -82.54,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "distance": 1
  },
  {
   "yaw": -179.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.15,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  },
  {
   "yaw": -50.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.93,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DF5EC89_182D_38F5_41AC_908D6038CCC0"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0E92EA20_1E57_0756_41BD_FA2B6F108F08",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0E942A20_1E57_0756_41B5_9408590605BA"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -153.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1.26,
    "path": "shortest",
    "targetPitch": 22.61,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.22,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 83.53,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 119.46,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.23,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -163.42,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -80.27,
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0EE1D360_1E55_05D5_41A0_A0BB1E4BF732",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -102.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.5,
    "path": "shortest",
    "targetPitch": 18.09,
    "pitchSpeed": 19.9,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 38.97
   },
   {
    "targetYaw": -4.4,
    "path": "shortest",
    "targetPitch": 12.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.6,
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -123.98,
    "path": "shortest",
    "targetPitch": -30.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.55,
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 67.96,
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 16.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -48.86,
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0DFF07A5_1E55_0D5F_41B2_DF581E88AC52",
 "class": "PanoramaCamera"
},
{
 "duration": 400,
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_30CD75EF_1E8C_70BB_4194_796F13F3930A",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_30CA6605_1E8C_736F_4190_8818D3C46945"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01",
 "id": "panorama_018DADFC_181B_1813_41A2_9897199B4176",
 "overlays": [
  "this.overlay_018D9DFC_181B_1813_41A8_E0DA760091E2",
  "this.overlay_0B9B9AE0_1D84_90A6_41B7_4833365A76E7",
  "this.overlay_0BCA1DAF_1D84_90BA_41B9_338823154E9F",
  "this.overlay_0AC08947_1D9B_91EA_4197_FE3436D08247",
  "this.overlay_0826EA87_1D9B_936A_4195_EDACDBFD6556",
  "this.overlay_0B25D58F_1D9C_B17A_417D_518E7D26FF3F",
  "this.overlay_0BE55359_1D9C_91E6_41A3_F87F54B9C216",
  "this.overlay_0F52DAAA_1E57_04AA_41B9_55A2C110CCA9",
  "this.overlay_0F52CAAA_1E57_04AA_4192_C4B65A969399",
  "this.overlay_0F52AAAA_1E57_04AA_4183_1DFBF1996B72",
  "this.overlay_0F528AAA_1E57_04AA_41A0_7217ED115EA9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.99,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "distance": 1
  },
  {
   "yaw": -30.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.82,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "distance": 1
  },
  {
   "yaw": -76.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 45.66,
   "panorama": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "distance": 1
  },
  {
   "yaw": 30.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.77,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "distance": 1
  },
  {
   "yaw": 86.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -36.43,
   "panorama": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
   "distance": 1
  },
  {
   "yaw": -0.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.57,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0E8290D2_1835_6817_41AE_7D46079D77F0"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0DF5EC89_182D_38F5_41AC_908D6038CCC0",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -173.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1.26,
    "path": "shortest",
    "targetPitch": 22.61,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.22,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 83.53,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 119.46,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.23,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -163.42,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -80.27,
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0EAB03FE_1E55_04AA_41B7_2CC45C0CF0EC",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EF5BB96_1E55_057D_41AE_DC5F4667D73A",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EFB4B96_1E55_057D_419B_6A62F00781F6"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_11BD5C43_1E57_03DB_41B1_CC0C8721070A",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_1181FC42_1E57_03D5_41AF_92F309186F04"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EFAB5B5_1E57_0CBE_41B9_6E819B606342",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EC1C5B4_1E57_0CBF_418C_4B0267EAC9DB"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_0713390E_1815_180F_41A6_890421608876.ogg",
  "mp3Url": "media/audio_0713390E_1815_180F_41A6_890421608876.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0713390E_1815_180F_41A6_890421608876",
 "data": {
  "label": "Cerro Cor\u00e1, de F\u00e9lix Fern\u00e1ndez y H. Gim\u00e9nez. Guerra de la Triple Alianza-9bEh37rWQFg"
 }
},
{
 "items": [
  {
   "media": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176_camera"
  },
  {
   "media": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera"
  },
  {
   "media": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera"
  },
  {
   "media": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera"
  },
  {
   "media": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera"
  },
  {
   "media": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera"
  },
  {
   "media": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA_camera"
  },
  {
   "media": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera"
  },
  {
   "media": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera"
  },
  {
   "media": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera"
  },
  {
   "media": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera"
  },
  {
   "media": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)",
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 143.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 21.35,
    "path": "shortest",
    "targetPitch": 17.33,
    "pitchSpeed": 94.22,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 188.31
   },
   {
    "targetYaw": 5.15,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 91.57,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 147.59,
    "path": "shortest",
    "targetPitch": 18.4,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -112.17,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.49,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0FDFA4E3_1E55_0CDA_4198_DF4D0EBE4216",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "07",
 "id": "panorama_0B422D5B_182B_1815_419C_D884371317AA",
 "overlays": [
  "this.overlay_0D84A878_182D_1813_41A1_9457CEFA19BA",
  "this.overlay_017E45BC_1D8B_F09E_41AA_72234B35D647",
  "this.overlay_3C7F59C1_1D84_B0E6_41A7_746ACC4766BA",
  "this.overlay_00B06018_1D84_AF67_41A6_4B364A7C7199",
  "this.overlay_3D3262D9_1D85_F0E6_41A6_12538CF0302B",
  "this.overlay_3D3858B8_1D7C_90A6_41A8_1DAF5728AD91"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 42.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.51,
   "panorama": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "distance": 1
  },
  {
   "yaw": -138.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.57,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "distance": 1
  },
  {
   "yaw": -97.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 45.79,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "distance": 1
  },
  {
   "yaw": -24.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 114.88,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "distance": 1
  },
  {
   "yaw": 0.56,
   "class": "AdjacentPanorama",
   "backwardYaw": 121.84,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DA569DD_182B_780D_4179_47CFB02B9B1E"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 170.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1.26,
    "path": "shortest",
    "targetPitch": 22.61,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.22,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 83.53,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 119.46,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.23,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -163.42,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -80.27,
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0AFDD8B0_1E55_04B5_41B7_A1C6105B0ECE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -1,
  "class": "PanoramaCameraPosition",
  "pitch": 15.32
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": -35.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -62.93,
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.42,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 62.18,
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -65.19,
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.95,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 147.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 35.92,
    "path": "shortest",
    "targetPitch": 30.4,
    "pitchSpeed": 74.85,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 149.39
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 81.02,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.91,
    "path": "shortest",
    "targetPitch": 14.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -94.08,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.53,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 163.42,
    "path": "shortest",
    "targetPitch": -33.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.03,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.05,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0DBEA7ED_1E55_0CAF_419F_7762FA9C8E67",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 41.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 32.41,
    "pitchSpeed": 24.83,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 48.88
   },
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0FEB2523_1E55_0D5A_41B9_9558CDD59C32",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "08",
 "id": "panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
 "overlays": [
  "this.overlay_0D9D005B_182D_E815_41B0_B6FACD102922",
  "this.overlay_00C32930_1D84_B1A5_41B9_AE194AA0357E",
  "this.overlay_02C9C0DE_1D87_B09A_4194_05E711E7D8CE",
  "this.overlay_3EB4B3C1_1D84_70E6_41B5_BC174D881DD4",
  "this.overlay_3D763D46_1D7C_91EA_41A1_6CA70A9F91EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 26.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -138.93,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "distance": 1
  },
  {
   "yaw": -66.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.96,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "distance": 1
  },
  {
   "yaw": -9.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.65,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "distance": 1
  },
  {
   "yaw": 6.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 145.61,
   "panorama": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DA1C5B4_182B_2812_41AD_E4FBAF5A7B84"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_0DA569DD_182B_780D_4179_47CFB02B9B1E",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -34.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.5,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 7.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.87
   },
   {
    "targetYaw": -97.6,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "path": "shortest",
    "targetPitch": 27.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -96.34,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": 35.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.77,
    "path": "shortest",
    "targetPitch": 35.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C523581_1E55_0D57_41B2_D3A97539A01B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "id": "panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
 "overlays": [
  "this.overlay_0DEEEDBE_182D_180F_41A6_83B490319FAA",
  "this.overlay_3DFB5E27_1D7C_F3AB_41AE_4FF1BC863F22",
  "this.overlay_3D4EC290_1D7F_9366_41B8_DA846932963E",
  "this.overlay_3C3D08AF_1D7C_90BA_41A2_6BA5748D7E75",
  "this.overlay_3E91D09F_1D7C_909B_41BA_C7F51604C066"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 121.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.56,
   "panorama": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "distance": 1
  },
  {
   "yaw": 145.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.3,
   "panorama": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "distance": 1
  },
  {
   "yaw": 175.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.77,
   "panorama": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "distance": 1
  },
  {
   "yaw": -126.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 67,
   "panorama": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0D80DFDA_182A_F817_4193_ED578BE923E1"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 127.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 177.61,
    "path": "shortest",
    "targetPitch": 27.38,
    "pitchSpeed": 14.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 28.12
   },
   {
    "targetYaw": 110.66,
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -115.94,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.99,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.13,
    "path": "shortest",
    "targetPitch": -30.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -47.36,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.6,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 143.07,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F5CD9D9_1E55_04F7_41A9_33F132977E00",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 21.35,
  "class": "PanoramaCameraPosition",
  "pitch": 17.33
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 5.15,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 91.57,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 147.59,
    "path": "shortest",
    "targetPitch": 18.4,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -112.17,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.49,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 20.85,
    "pitchSpeed": 56.8,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 113.11
   },
   {
    "targetYaw": 36.3,
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -39.06,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.24,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -22.23,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -75.99,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "path": "shortest",
    "targetPitch": -25.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 121.47,
    "path": "shortest",
    "targetPitch": -22.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 78.26,
    "path": "shortest",
    "targetPitch": -7.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 9.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D9FD7CC_1E55_0CED_41B9_E02AD6AB003E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 177.61,
    "path": "shortest",
    "targetPitch": 27.38,
    "pitchSpeed": 7.52,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 14.11
   },
   {
    "targetYaw": 110.66,
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -115.94,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.99,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.13,
    "path": "shortest",
    "targetPitch": -30.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -47.36,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.6,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 143.07,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0FC5B503_1E55_0D5A_4192_3AA6961EFF1D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 32.41,
    "pitchSpeed": 84.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 167.87
   },
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0EB6F3DC_1E55_04EE_41A2_FA07435DEA71",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_AlbumPlayList",
 "thumbnailUrl": "media/album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_t.png",
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
 "label": "Photo Album 0006884413",
 "class": "PhotoAlbum"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "04",
 "id": "panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
 "overlays": [
  "this.overlay_03DA3CBB_1815_3815_41AA_0B0D57DEBC5E",
  "this.overlay_052A0368_1D84_B1A5_419D_979C44929C6B",
  "this.overlay_0409ED8B_1D84_717A_41BB_D0A353732856",
  "this.overlay_07F87030_1D8B_AFA5_4198_0DE942A38D96",
  "this.overlay_07F3F72A_1D8D_91A5_41B5_36BD55EEB336",
  "this.overlay_0EBD4C14_1E55_037E_41B8_486FCA2C1659",
  "this.overlay_0EBB5C1A_1E55_036A_41B3_6C36DFCC119E",
  "this.overlay_0EBB7C1A_1E55_036A_41B2_52C6B1A29A61",
  "this.overlay_0EBA9C1A_1E55_036A_4196_952F1ECD24B9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 77.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.86,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "distance": 1
  },
  {
   "yaw": 37.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -32.59,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "distance": 1
  },
  {
   "yaw": 86.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -30.01,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  },
  {
   "yaw": -15.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.99,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DD62663_182D_6835_4178_012AF5E5E7D6"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 103.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 52.08,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 103.64
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A3F8870_1E55_03B5_41B6_7EB8D3283EEE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 164.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.5,
    "path": "shortest",
    "targetPitch": 18.09,
    "pitchSpeed": 75.62,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 150.94
   },
   {
    "targetYaw": -4.4,
    "path": "shortest",
    "targetPitch": 12.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.6,
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -123.98,
    "path": "shortest",
    "targetPitch": -30.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.55,
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 67.96,
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 16.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -48.86,
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CD9D5FF_1E55_0CAB_418D_7AC1FF27BE4A",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_30235F0F_1E85_917A_41B2_5B7B0CD00BDD",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_3027DF14_1E85_916E_41AB_CFCE70F86A38"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -134.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 88.46,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 176.74
   },
   {
    "targetYaw": 22.99,
    "path": "shortest",
    "targetPitch": 10.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.13,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.58,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 173.22,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.35,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -93.33,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0E99037F_1E55_05AB_41AA_0855F0D97C93",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -149.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 74.81,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 149.32
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B5F3916_1E55_057D_41B8_AEDFC6EC34F1",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_11B52C7A_1E57_03B5_41BA_47B7D848FF84",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_11B56C79_1E57_03B7_41B6_629EBC11EC79"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 358.49,
 "id": "audio_0D8D2BF6_182D_181F_41A7_C17971D8AE4A",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -0.25,
  "class": "PanoramaCameraPosition",
  "pitch": 20.85
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 36.3,
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -39.06,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.24,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -22.23,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -75.99,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "path": "shortest",
    "targetPitch": -25.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 121.47,
    "path": "shortest",
    "targetPitch": -22.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 78.26,
    "path": "shortest",
    "targetPitch": -7.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 9.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "media": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176_camera"
  },
  {
   "media": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E_camera"
  },
  {
   "media": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_camera"
  },
  {
   "media": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera"
  },
  {
   "media": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_camera"
  },
  {
   "media": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera"
  },
  {
   "media": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B422D5B_182B_1815_419C_D884371317AA_camera"
  },
  {
   "media": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera"
  },
  {
   "media": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5_camera"
  },
  {
   "media": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9_camera"
  },
  {
   "media": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_camera"
  },
  {
   "media": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_camera"
  },
  {
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01",
 "pitch": 0,
 "maximumAngle": 40.45,
 "id": "audio_0DAEB529_182B_2835_41AE_8B9E7A15E4E8",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "05",
 "id": "panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
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
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.01,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "distance": 1
  },
  {
   "yaw": -52.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.37,
   "panorama": "this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
   "distance": 1
  },
  {
   "yaw": 59.99,
   "class": "AdjacentPanorama",
   "backwardYaw": -15.42,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "distance": 1
  },
  {
   "yaw": -0.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.02,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DE726A0_182D_6833_41B3_DE346714B05A"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "03",
 "id": "panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8",
 "overlays": [
  "this.overlay_01F6F6B0_181B_6813_41A8_BAB9B4247FC8",
  "this.overlay_0A14ACAC_1D84_70BE_41B2_F41CEE69DA14",
  "this.overlay_05BB25C7_1D87_F0EA_419D_5CBB1A0A215E",
  "this.overlay_04BA866A_1D84_B3BA_41BD_A4A1068068DA",
  "this.overlay_04BABEE0_1D84_90A5_419A_537F375DE0EB",
  "this.overlay_0E58CCEA_1E57_1CD5_41B3_7232F1989C03",
  "this.overlay_0E592CEA_1E57_1CD5_41A1_F5B7FFF91D65",
  "this.overlay_0E593CEA_1E57_1CD5_41AF_4B0A162345D1",
  "this.overlay_0E590CEA_1E57_1CD5_41B3_C819858EF4A3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -94.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 30.6,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  },
  {
   "yaw": -82.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.45,
   "panorama": "this.panorama_030750AD_181D_680D_41B3_D2F407301D1E",
   "distance": 1
  },
  {
   "yaw": -32.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.04,
   "panorama": "this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4",
   "distance": 1
  },
  {
   "yaw": 10.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.12,
   "panorama": "this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0DFA89E4_182D_1832_419B_6E66DDB77152"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 85.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 35.92,
    "path": "shortest",
    "targetPitch": 30.4,
    "pitchSpeed": 38.02,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 75.39
   },
   {
    "targetYaw": 34.29,
    "path": "shortest",
    "targetPitch": 5.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 81.02,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.91,
    "path": "shortest",
    "targetPitch": 14.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -94.08,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.53,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 163.42,
    "path": "shortest",
    "targetPitch": -33.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.03,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.05,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F3674C3_1E55_0CDA_41AE_2768E13898FC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -137.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 32.41,
    "pitchSpeed": 65.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 130.03
   },
   {
    "targetYaw": 23.99,
    "path": "shortest",
    "targetPitch": 6.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -7.41,
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.47,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 118.7,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.4,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "path": "shortest",
    "targetPitch": 15.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A1ED84E_1E55_03ED_41B7_42647984707D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -32.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1,
    "path": "shortest",
    "targetPitch": 15.32,
    "pitchSpeed": 12.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 23.2
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": -35.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -62.93,
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.42,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 62.18,
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -65.19,
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.95,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0FAEA562_1E55_0DD5_41BC_90ACFBE92062",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1,
    "path": "shortest",
    "targetPitch": 15.32,
    "pitchSpeed": 21.88,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 42.95
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": -35.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -62.93,
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.42,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 62.18,
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -65.19,
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.95,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0E8F039F_1E55_056B_41B8_7F1FBB756F35",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_1078EF62_1E55_7DD5_41BD_5082260E8578_t.jpg",
 "id": "video_1078EF62_1E55_7DD5_41BD_5082260E8578",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "INTRO PASEO DIGITAL",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_1078EF62_1E55_7DD5_41BD_5082260E8578.mp4",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 117.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.16,
    "path": "shortest",
    "targetPitch": -1,
    "pitchSpeed": 38.8,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 76.96
   },
   {
    "targetYaw": -30.77,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.27,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 42.58,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -61.42,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0897D2B9_1E55_04B7_41AE_D641C939258D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 53.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.5,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 10.43,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 19.94
   },
   {
    "targetYaw": -97.6,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "path": "shortest",
    "targetPitch": 27.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -96.34,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": 35.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.77,
    "path": "shortest",
    "targetPitch": 35.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0ABE48F4_1E55_04BD_41B3_93497FFF4408",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 149.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 75.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 149.91
   },
   {
    "targetYaw": 30.52,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.53,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.62,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.27,
    "path": "shortest",
    "targetPitch": 5.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.72,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -76.5,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A5E580E_1E55_036D_4186_445591ECEBA6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -1,
    "path": "shortest",
    "targetPitch": 15.32,
    "pitchSpeed": 5.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 10.77
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": -35.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -62.93,
    "path": "shortest",
    "targetPitch": 2.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.42,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 62.18,
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -65.19,
    "path": "shortest",
    "targetPitch": 26.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.95,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D5E667F_1E55_0FAB_41B5_3D0A99549791",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EFC7B8D_1E55_056E_41B4_1F3813A6ADC3",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EC35B8C_1E55_056E_41AE_91C798FF309B"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EEF75C7_1E57_0CDA_41B7_24330B316548",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EEFA5C6_1E57_0CDA_41A2_6ABD77849B81"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -50.5,
  "class": "PanoramaCameraPosition",
  "pitch": 18.09
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -4.4,
    "path": "shortest",
    "targetPitch": 12.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.6,
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -123.98,
    "path": "shortest",
    "targetPitch": -30.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.55,
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 67.96,
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 16.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -48.86,
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -58.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.5,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 11.02,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 21.14
   },
   {
    "targetYaw": -97.6,
    "path": "shortest",
    "targetPitch": 15.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "path": "shortest",
    "targetPitch": 27.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -96.34,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": 35.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.77,
    "path": "shortest",
    "targetPitch": 35.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0E8333BE_1E55_04AA_41B9_46474826D599",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EE88BA6_1E55_055A_41BD_09886AEE368F",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EE87BA6_1E55_055A_418F_E10E450BFB89"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 179.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 177.61,
    "path": "shortest",
    "targetPitch": 27.38,
    "pitchSpeed": 7.52,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 14.11
   },
   {
    "targetYaw": 110.66,
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -115.94,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.99,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.13,
    "path": "shortest",
    "targetPitch": -30.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -47.36,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.6,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 143.07,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D1FF6E0_1E55_0CD5_41B4_4C1CFB301536",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_11B97C5D_1E57_03EF_4191_703B2F0B829C",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_11B91C5C_1E57_03ED_41AA_2FD04440C94C"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_0EF28B9D_1E55_056E_4174_23FE696C50B6",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "shadowHorizontalLength": 3,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontSize": "1.29vmin",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.htmlText_0EF3EB9D_1E55_056E_419E_5E2E2C9D4ACC"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColor": [],
 "bodyPaddingRight": 5,
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "data": {
  "name": "Window48099"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 20.85,
    "pitchSpeed": 9.88,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.84
   },
   {
    "targetYaw": 36.3,
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -39.06,
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.24,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -22.23,
    "path": "shortest",
    "targetPitch": -8.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -75.99,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.21,
    "path": "shortest",
    "targetPitch": -25.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 121.47,
    "path": "shortest",
    "targetPitch": -22.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 78.26,
    "path": "shortest",
    "targetPitch": -7.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "path": "shortest",
    "targetPitch": 9.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F799465_1E55_03DE_41B9_9B3288C47DE1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.25,
    "path": "shortest",
    "targetPitch": 18.84,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": 22.99,
    "path": "shortest",
    "targetPitch": 10.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.13,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.58,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 173.22,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.35,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -93.33,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A9EF8D2_1E55_04F5_419A_1E59325808A6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -135.16,
  "class": "PanoramaCameraPosition",
  "pitch": -1
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -30.77,
    "path": "shortest",
    "targetPitch": 23.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.27,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 42.58,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -61.42,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.5,
    "path": "shortest",
    "targetPitch": 18.09,
    "pitchSpeed": 17.03,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.21
   },
   {
    "targetYaw": -4.4,
    "path": "shortest",
    "targetPitch": 12.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -46.6,
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -123.98,
    "path": "shortest",
    "targetPitch": -30.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.55,
    "path": "shortest",
    "targetPitch": -7.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 67.96,
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 16.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -48.86,
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0F642485_1E55_035E_41A8_3F0C18D0BE03",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -1.26,
  "class": "PanoramaCameraPosition",
  "pitch": 22.61
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -19.22,
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 83.53,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 119.46,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.23,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -163.42,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -80.27,
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.13,
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "id": "panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F",
 "overlays": [
  "this.overlay_3BC3609A_1E8C_6F65_41BD_4C759084181E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -36.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.11,
   "panorama": "this.panorama_018DADFC_181B_1813_41A2_9897199B4176",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_0D8D2BF6_182D_181F_41A7_C17971D8AE4A"
 ],
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 400,
 "id": "effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -120.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 177.61,
    "path": "shortest",
    "targetPitch": 27.38,
    "pitchSpeed": 72.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 143.76
   },
   {
    "targetYaw": 110.66,
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -115.94,
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.99,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.13,
    "path": "shortest",
    "targetPitch": -30.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -47.36,
    "path": "shortest",
    "targetPitch": 1.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -149.6,
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 143.07,
    "path": "shortest",
    "targetPitch": 7.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A7F682E_1E55_03AD_41AB_27D16AEC111C",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "18px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 58,
 "width": 413,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_D11D2773_C206_7714_41E3_7BBA45F51C47"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 3,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 116,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C434D49_0334_FED6_417F_78ADD8B2D4F6",
 "left": "0.06%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
  "this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8.png",
 "data": {
  "name": "IconButton Sound"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B.png",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2F2A0E43_1E9D_93EA_41BD_886E1D587446",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 74.42,
 "bleaching": 0.7,
 "id": "overlay_0DFE8520_182D_E832_41AF_270035A1D102",
 "yaw": -136.29
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.36,
   "yaw": -0.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_0D5E667F_1E55_0FAB_41B5_3D0A99549791); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D126511_1E85_9166_41B1_76332B15E6E7",
   "pitch": 1.16,
   "hfov": 6.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.46
  }
 ],
 "id": "overlay_038C1207_1D84_B36A_419E_B22C34A058D9",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.36,
   "yaw": 45.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_0C9CD63E_1E55_0FAA_41A8_2FE7AD2A6D58); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D124512_1E85_916A_4195_D9FA68320464",
   "pitch": -0.56,
   "hfov": 6.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 45.79
  }
 ],
 "id": "overlay_3DF535B9_1D85_B0A6_41A5_7C74D12B585A",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 92.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_2_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_0CBE665E_1E55_0FED_4185_AB7B60CA423B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D121512_1E85_916A_41B6_44B65F1FF2EA",
   "pitch": -2.99,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.96
  }
 ],
 "id": "overlay_03502A44_1D85_93EE_41B9_C38376F62340",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.35,
   "yaw": 11.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_0D7E569E_1E55_0F6D_4192_A17D640EAF1E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D13E512_1E85_916A_41BA_C85B780C6BCA",
   "pitch": 1.78,
   "hfov": 6.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 11.77
  }
 ],
 "id": "overlay_3D955EA9_1D7D_90A6_4191_2AEB4D40F748",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 67.64,
 "bleaching": 0.7,
 "id": "overlay_00E8C182_1815_E8F7_41B6_9BCBCE476881",
 "yaw": -17.46
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": 45.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0A3F8870_1E55_03B5_41B6_7EB8D3283EEE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0E450E_1E85_917A_41B2_7430264C029B",
   "pitch": -2.67,
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 45.66
  }
 ],
 "id": "overlay_00BA66A7_1D8D_90AA_41A4_F902E6035765",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.72,
   "yaw": -62.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_0A1ED84E_1E55_03ED_41B7_42647984707D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0E250E_1E85_917A_4181_018583E37354",
   "pitch": 0.15,
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.51
  }
 ],
 "id": "overlay_007B36EF_1D8C_F0BA_4195_3E5FC0BA1C51",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_0E8290D2_1835_6817_41AE_7D46079D77F0.ogg",
 "mp3Url": "media/audio_0E8290D2_1835_6817_41AE_7D46079D77F0.mp3",
 "id": "audioresource_0DA4F027_182B_283D_418F_DB4848F6AB01"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EE30A04_1E57_075E_41B3_4D3C835A8508",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_2E916B1A_1E84_919A_41B6_1FCCAA7D540C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527.png",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43FD49_0334_FED6_417C_95AF1425050C.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
 "backgroundOpacity": 0,
 "width": 34,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 34,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B.png",
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_11B05C97_1E57_037B_4196_3DCB57D75E74",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EF735BC_1E57_0CAE_41A3_2B5B2FA0663F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0E8B9A3D_1E57_07AE_41B5_020DE6A767BD",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0E810A58_1E57_07F6_419E_1CE6539A11C6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 71.16,
 "bleaching": 0.7,
 "id": "overlay_0E07D6FF_182D_280D_41AC_D1AEF847D4D8",
 "yaw": -150.86
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.77,
   "yaw": 179.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_0A9EF8D2_1E55_04F5_419A_1E59325808A6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D130513_1E85_916A_41AD_9174740C0A76",
   "pitch": -3.63,
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.94
  }
 ],
 "id": "overlay_3D69FBFA_1D7B_909A_41AD_0475632790DB",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.51,
   "yaw": 147.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_0AFDD8B0_1E55_04B5_41B7_A1C6105B0ECE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D14E513_1E85_916A_4176_F34A4716E326",
   "pitch": -2.82,
   "hfov": 5.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 147.65
  }
 ],
 "id": "overlay_38CB7BB6_1D7C_B0AA_41B3_05A821831AC2",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": 114.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_0ADFD890_1E55_0375_41BB_5CA8199895A8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D14C513_1E85_916A_41A8_F1D275854D39",
   "pitch": -1.69,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 114.88
  }
 ],
 "id": "overlay_3DB06927_1D7D_91AA_41BA_9E8F79A2C0C5",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": 67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_0ABE48F4_1E55_04BD_41B3_93497FFF4408); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D14A513_1E85_916A_41B7_C6E0BBF92346",
   "pitch": -2.38,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 67
  }
 ],
 "id": "overlay_3F61C1C9_1D7C_70E6_4181_FBCEC0421D9A",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EE965CE_1E57_0CEA_41B4_7F2576277F38",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 45.03,
 "bleaching": 0.7,
 "id": "overlay_030740AE_181D_680F_41B2_87C98DC92E26",
 "yaw": 6.41
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.21,
   "yaw": -179.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0D206765_1E55_0DDF_4193_B53AEC2AE70C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0A2509_1E85_9166_41AC_D9370189C44A",
   "pitch": -9.1,
   "hfov": 21.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -179.99
  }
 ],
 "id": "overlay_0B0A83B9_1D9B_90A6_41A6_59812089EE2B",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.23,
   "yaw": -50.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_0DFF07A5_1E55_0D5F_41B2_DF581E88AC52); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F70DCB6_1E84_90AA_41B9_4E8C8E655396",
   "pitch": -6.25,
   "hfov": 19.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -50.86
  }
 ],
 "id": "overlay_0A8ADC8C_1D84_977E_41B2_F8BA5528B0EB",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.22,
   "yaw": 53.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_2_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_0D3E9726_1E55_0D5D_41B4_0EFB6CDD86F3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F708CB6_1E84_90AA_41B5_64003374BCCA",
   "pitch": -6.45,
   "hfov": 19.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 53.45
  }
 ],
 "id": "overlay_0A36D9B8_1D85_90A6_41B7_76F4979188CD",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.24,
   "yaw": 0.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_0D1FF6E0_1E55_0CD5_41B4_4C1CFB301536); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0BA509_1E85_9166_41B8_A39C8D11E45B",
   "pitch": -1.03,
   "hfov": 7.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.01
  }
 ],
 "id": "overlay_0A2951EA_1D84_90BA_419F_FA3E70BDBD94",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": -35.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EFAB5B5_1E57_0CBE_41B9_6E819B606342, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DCC27D_1E55_07AF_41B3_9E5EDC64B8B6",
   "pitch": 19.9,
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -35.59
  }
 ],
 "id": "overlay_0EBC5615_1E57_0F7E_41A1_2C27FF5D4EB6",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.12,
   "yaw": 34.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EF465BD_1E57_0CAE_41A8_BCB5093FD4BC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DC627E_1E55_07AD_41B3_FECB5C2E7EA8",
   "pitch": 19.24,
   "hfov": 7.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 34.05
  }
 ],
 "id": "overlay_0EBC6615_1E57_0F7E_41BC_1E87BC28310B",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.23,
   "yaw": 9.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EEF75C7_1E57_0CDA_41B7_24330B316548, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DBE27E_1E55_07AD_41B5_FD58AE460329",
   "pitch": 16.51,
   "hfov": 7.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 9.33
  }
 ],
 "id": "overlay_0EBDB615_1E57_0F7E_4182_96FA35E379A8",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.25,
   "yaw": -10.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EE625CE_1E57_0CEA_41AC_59B71F1BB66B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DA827E_1E55_07AD_419B_E43CD38AAD41",
   "pitch": 15.75,
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -10.01
  }
 ],
 "id": "overlay_0EBDA615_1E57_0F7E_41B4_9E51A288612F",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0E942A20_1E57_0756_41B5_9408590605BA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_30CA6605_1E8C_736F_4190_8818D3C46945",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 66.39,
 "bleaching": 0.7,
 "id": "overlay_018D9DFC_181B_1813_41A8_E0DA760091E2",
 "yaw": 43.59
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_0F799465_1E55_03DE_41B9_9B3288C47DE1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D08A506_1E85_916A_41A3_D1FE4BA98DF6",
   "pitch": -8.04,
   "hfov": 20.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.15
  }
 ],
 "id": "overlay_0B9B9AE0_1D84_90A6_41B7_4833365A76E7",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": -30.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_0F642485_1E55_035E_41A8_3F0C18D0BE03); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D086507_1E85_916A_414C_A69AD27E15CC",
   "pitch": -3.13,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -30.01
  }
 ],
 "id": "overlay_0BCA1DAF_1D84_90BA_41B9_338823154E9F",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": 30.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_2_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_0F3674C3_1E55_0CDA_41AE_2768E13898FC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D084507_1E85_916A_41B0_A41B019C9A15",
   "pitch": -3.43,
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 30.6
  }
 ],
 "id": "overlay_0AC08947_1D9B_91EA_4197_FE3436D08247",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.8,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_0FC5B503_1E55_0D5A_4192_3AA6961EFF1D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D082507_1E85_916A_41B9_B7B89082C034",
   "pitch": 1.74,
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.02
  }
 ],
 "id": "overlay_0826EA87_1D9B_936A_4195_EDACDBFD6556",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -76.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_4_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400, this.camera_0F0D54A3_1E55_035A_419E_18D672139E5A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D09F508_1E85_9166_41A6_86D88FE3CFAF",
   "pitch": -2.37,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -76.62
  }
 ],
 "id": "overlay_0B25D58F_1D9C_B17A_417D_518E7D26FF3F",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.93,
   "yaw": 86.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F, this.camera_0FDFA4E3_1E55_0CDA_4198_DF4D0EBE4216); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D09D508_1E85_9166_4179_4D369EE5A0EA",
   "pitch": 4.68,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 86.11
  }
 ],
 "id": "overlay_0BE55359_1D9C_91E6_41A3_F87F54B9C216",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -29.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0E9C0A05_1E57_075E_41B8_C6B79C12DF73, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_0821327A_1E55_07B5_4194_B9BBD3CACF4C",
   "pitch": 17.19,
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -29.49
  }
 ],
 "id": "overlay_0F52DAAA_1E57_04AA_41B9_55A2C110CCA9",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 28.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0E92EA20_1E57_0756_41BD_FA2B6F108F08, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_0820027B_1E55_07AB_41B1_E3B271649FED",
   "pitch": 17.46,
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 28.8
  }
 ],
 "id": "overlay_0F52CAAA_1E57_04AA_4192_C4B65A969399",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.3,
   "yaw": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0E885A3D_1E57_07AE_418D_1CB858BB154F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DF927B_1E55_07AB_41B6_07EF42D57603",
   "pitch": 14.39,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.23
  }
 ],
 "id": "overlay_0F52AAAA_1E57_04AA_4183_1DFBF1996B72",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.3,
   "yaw": -8.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EBFAA59_1E57_07F6_41AF_ED0B08B71CA5, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08DF327C_1E55_07AD_41AD_2DB8DD3F6537",
   "pitch": 14.4,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -8.15
  }
 ],
 "id": "overlay_0F528AAA_1E57_04AA_41A0_7217ED115EA9",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EFB4B96_1E55_057D_419B_6A62F00781F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1181FC42_1E57_03D5_41AF_92F309186F04",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EC1C5B4_1E57_0CBF_418C_4B0267EAC9DB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 71.66,
 "bleaching": 0.7,
 "id": "overlay_0D84A878_182D_1813_41A1_9457CEFA19BA",
 "yaw": -97.6
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.46,
   "yaw": 42.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400, this.camera_0897D2B9_1E55_04B7_41AE_D641C939258D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0F550E_1E85_917A_41B5_B81AF6288E13",
   "pitch": 3.88,
   "hfov": 6.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 42.78
  }
 ],
 "id": "overlay_017E45BC_1D8B_F09E_41AA_72234B35D647",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -138.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_0EE1D360_1E55_05D5_41A0_A0BB1E4BF732); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0F350E_1E85_917B_41AA_29B2C3C2B0B8",
   "pitch": -2.07,
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -138.93
  }
 ],
 "id": "overlay_3C7F59C1_1D84_B0E6_41A7_746ACC4766BA",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.8,
   "yaw": -97.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_2_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_0E99037F_1E55_05AB_41AA_0855F0D97C93); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0F150F_1E85_917A_41B7_C43EA11FEFAA",
   "pitch": -0.73,
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -97.49
  }
 ],
 "id": "overlay_00B06018_1D84_AF67_41A6_4B364A7C7199",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.46,
   "yaw": -24.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_0E8F039F_1E55_056B_41B8_7F1FBB756F35); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D10F50F_1E85_917A_41B3_96F61EAD23E3",
   "pitch": 2.68,
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -24.53
  }
 ],
 "id": "overlay_3D3262D9_1D85_F0E6_41A6_12538CF0302B",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.46,
   "yaw": 0.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_0E8333BE_1E55_04AA_41B9_46474826D599); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D10C50F_1E85_917A_4198_32C9FF51E74D",
   "pitch": 3.27,
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.56
  }
 ],
 "id": "overlay_3D3858B8_1D7C_90A6_41A8_1DAF5728AD91",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 71.66,
 "bleaching": 0.7,
 "id": "overlay_0D9D005B_182D_E815_41B0_B6FACD102922",
 "yaw": -103.38
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.32,
   "yaw": 26.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_0FEB2523_1E55_0D5A_41B9_9558CDD59C32); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D11C510_1E85_9166_41B0_85A4AB2B955F",
   "pitch": -2.97,
   "hfov": 13.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 26.57
  }
 ],
 "id": "overlay_00C32930_1D84_B1A5_41B9_AE194AA0357E",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.33,
   "yaw": -66.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_0F8D6542_1E55_0DDA_4177_FF3811085BFB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D11A510_1E85_9166_4152_DCF1348165E8",
   "pitch": -2.03,
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -66.34
  }
 ],
 "id": "overlay_02C9C0DE_1D87_B09A_4194_05E711E7D8CE",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.87,
   "yaw": -9.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_0FAEA562_1E55_0DD5_41BC_90ACFBE92062); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D118511_1E85_9166_419E_BBDD5AA23726",
   "pitch": 0.99,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -9.3
  }
 ],
 "id": "overlay_3EB4B3C1_1D84_70E6_41B5_BC174D881DD4",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 6.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309, this.camera_0C523581_1E55_0D57_41B2_D3A97539A01B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D115511_1E85_9166_41B0_30FFDE04C13B",
   "pitch": 1.22,
   "hfov": 6.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 6.3
  }
 ],
 "id": "overlay_3D763D46_1D7C_91EA_41A1_6CA70A9F91EC",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 74.17,
 "bleaching": 0.7,
 "id": "overlay_0DEEEDBE_182D_180F_41A6_83B490319FAA",
 "yaw": -166.43
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": -126.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B778866_182B_383F_4191_B9AA64EA41E9, this.camera_0F4FB444_1E55_03DE_41A0_3DDC855C7402); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D15E514_1E85_916E_4183_27001B3230D2",
   "pitch": -1.98,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -126.65
  }
 ],
 "id": "overlay_3DFB5E27_1D7C_F3AB_41AE_4FF1BC863F22",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B512A9F_182B_180D_416C_B6910FC250B5, this.camera_0F5E2420_1E55_0356_41AB_4211A7A41FDA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D15B514_1E85_916E_419B_97565ACFAAC5",
   "pitch": -2.19,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 175.43
  }
 ],
 "id": "overlay_3D4EC290_1D7F_9366_41B8_DA846932963E",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": 145.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643, this.camera_0EAB03FE_1E55_04AA_41B7_2CC45C0CF0EC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D159514_1E85_916E_418C_5910E62C6F56",
   "pitch": -2.38,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 145.61
  }
 ],
 "id": "overlay_3C3D08AF_1D7C_90BA_41A2_6BA5748D7E75",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.42,
   "yaw": 121.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B422D5B_182B_1815_419C_D884371317AA, this.camera_0EB6F3DC_1E55_04EE_41A2_FA07435DEA71); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D156514_1E85_916E_41BB_AF9B1262B5B5",
   "pitch": -6.26,
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 121.84
  }
 ],
 "id": "overlay_3E91D09F_1D7C_909B_41BA_C7F51604C066",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "items": [
  {
   "media": "this.album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_2E8540AE_1EBC_F0BD_4169_6E0BF422209E_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 76.69,
 "bleaching": 0.7,
 "id": "overlay_03DA3CBB_1815_3815_41AA_0B0D57DEBC5E",
 "yaw": -43.59
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.27,
   "yaw": 37.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_0DBEA7ED_1E55_0CAF_419F_7762FA9C8E67); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0D450B_1E85_917A_4198_B439B5562CCB",
   "pitch": -0.72,
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 37.04
  }
 ],
 "id": "overlay_052A0368_1D84_B1A5_419D_979C44929C6B",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.68,
   "yaw": 77.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_0D9FD7CC_1E55_0CED_41B9_E02AD6AB003E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0D250B_1E85_917A_41BD_EE9201093B4B",
   "pitch": -5.23,
   "hfov": 12.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 77.93
  }
 ],
 "id": "overlay_0409ED8B_1D84_717A_41BB_D0A353732856",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.78,
   "yaw": -15.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_2_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_0A7F682E_1E55_03AD_41AB_27D16AEC111C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0D050C_1E85_917E_41A0_EEAB04A64471",
   "pitch": -4.93,
   "hfov": 12.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -15.42
  }
 ],
 "id": "overlay_07F87030_1D8B_AFA5_4198_0DE942A38D96",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.45,
   "yaw": 86.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0A5E580E_1E55_036D_4186_445591ECEBA6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0ED50C_1E85_917E_41A6_B56B2DFB117B",
   "pitch": -2.7,
   "hfov": 5.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 86.82
  }
 ],
 "id": "overlay_07F3F72A_1D8D_91A5_41B5_36BD55EEB336",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -94.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 29.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EFC7B8D_1E55_056E_41B4_1F3813A6ADC3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D42283_1E55_075B_41A7_7C31616A12BD",
   "pitch": 29.69,
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -94.62
  }
 ],
 "id": "overlay_0EBD4C14_1E55_037E_41B8_486FCA2C1659",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -4.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EF5BB96_1E55_057D_41AE_DC5F4667D73A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D55283_1E55_075B_419D_98436E247D8C",
   "pitch": 21,
   "hfov": 7.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -4.38
  }
 ],
 "id": "overlay_0EBB5C1A_1E55_036A_41B3_6C36DFCC119E",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": -39.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EF28B9D_1E55_056E_4174_23FE696C50B6, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D4E284_1E55_075D_41A1_B0CCC3634B00",
   "pitch": 19.77,
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -39.4
  }
 ],
 "id": "overlay_0EBB7C1A_1E55_036A_41B2_52C6B1A29A61",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -62.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_0EE88BA6_1E55_055A_41BD_09886AEE368F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D38284_1E55_075D_41A7_032725833113",
   "pitch": 20.02,
   "hfov": 7.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.52
  }
 ],
 "id": "overlay_0EBA9C1A_1E55_036A_4196_952F1ECD24B9",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_3027DF14_1E85_916E_41AB_CFCE70F86A38",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_11B56C79_1E57_03B7_41B6_629EBC11EC79",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 79.7,
 "bleaching": 0.7,
 "id": "overlay_01FC59CD_1815_380D_41A9_B3DB97A7D233",
 "yaw": -41.07
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.61,
   "yaw": 59.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_0CD9D5FF_1E55_0CAB_418D_7AC1FF27BE4A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0FE50C_1E85_917E_41A8_01EB9FDFB8B6",
   "pitch": -7.91,
   "hfov": 12.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 59.99
  }
 ],
 "id": "overlay_041DFB26_1D8D_B1AA_4180_BDAB0843E666",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.66,
   "yaw": -52.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8, this.camera_0C3845E0_1E55_0CD5_4188_35BD74CD5212); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0D450D_1E85_917E_41BB_B27207BAAA1F",
   "pitch": -5.91,
   "hfov": 12.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -52.12
  }
 ],
 "id": "overlay_07A2BAC7_1D8C_90EA_41B0_3E2CC6F949AF",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.4,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_0C16A5BF_1E55_0CAB_4193_FDA1666BB1E0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0D250D_1E85_917E_41B5_4FAE24FB386D",
   "pitch": -4.63,
   "hfov": 7.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.57
  }
 ],
 "id": "overlay_02BB39A5_1D8F_90AE_41AF_EB3B280D50B5",
 "data": {
  "label": "Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0CFC261F_1E55_0F6B_41B6_62E8D632A3AC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0EF50D_1E85_917E_41A6_2FA2B9BDFBD9",
   "pitch": 1.57,
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.57
  }
 ],
 "id": "overlay_03EC6051_1D8C_AFE7_41A3_3B9E8DC09015",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.67,
   "yaw": 112.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_2F29DE42_1E9D_93EA_41BD_AFC6166069C6, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_225EBF43_1E84_F1EB_41B8_32C25D7E6EA1",
   "pitch": 27.67,
   "hfov": 6.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 112.64
  }
 ],
 "id": "overlay_31BC36E0_1E9D_90A6_419A_D517219B79A3",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.7,
   "yaw": -116.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_30235F0F_1E85_917A_41B2_5B7B0CD00BDD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A1FF43_1E84_F1EB_41B4_0AF29E262018",
   "pitch": 27.28,
   "hfov": 6.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -116.67
  }
 ],
 "id": "overlay_30536F4C_1E85_91FE_41B7_F77BFC1F5BE1",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.9,
   "yaw": -168.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_2E690AF2_1E84_90AA_41A6_8ADC76B44CD9, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A06F43_1E84_F1EB_41B5_E46A21DEAA3C",
   "pitch": 23.79,
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -168.77
  }
 ],
 "id": "overlay_2EB61B98_1E84_9166_41B6_A81C383E2D07",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.9,
   "yaw": 164.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_30CD75EF_1E8C_70BB_4194_796F13F3930A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A08F44_1E84_F1ED_41BD_C27CF6F80C48",
   "pitch": 23.79,
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 164.59
  }
 ],
 "id": "overlay_30E4163C_1E8C_739D_419A_46656F2B1B82",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.36,
 "bleaching": 0.7,
 "id": "overlay_01F6F6B0_181B_6813_41A8_BAB9B4247FC8",
 "yaw": 67.96
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.95,
   "yaw": -82.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_0_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_030750AD_181D_680D_41B3_D2F407301D1E, this.camera_0B7DC937_1E55_05BB_41B9_93F80EBA0233); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0CB50A_1E85_917A_4139_1872F028C154",
   "pitch": -6.42,
   "hfov": 16.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -82.54
  }
 ],
 "id": "overlay_0A14ACAC_1D84_70BE_41B2_F41CEE69DA14",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.84,
   "yaw": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_1_0_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90, this.camera_0F5CD9D9_1E55_04F7_41A9_33F132977E00); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2D2CDD1C_1E85_919E_41BC_466CA1E8F5AA",
   "pitch": -3.12,
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 10.37
  }
 ],
 "id": "overlay_05BB25C7_1D87_F0EA_419D_5CBB1A0A215E",
 "data": {
  "label": "Circle Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.21,
   "yaw": -32.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4, this.camera_0B1C1957_1E55_05FB_41B2_E446D3EF4BFD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0C750A_1E85_917A_4180_D97C47061AB9",
   "pitch": -1.32,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -32.59
  }
 ],
 "id": "overlay_04BA866A_1D84_B3BA_41BD_A4A1068068DA",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.16,
   "yaw": -94.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0B5F3916_1E55_057D_41B8_AEDFC6EC34F1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3D0C450B_1E85_917A_416D_F07E3108F77F",
   "pitch": -2.51,
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -94.77
  }
 ],
 "id": "overlay_04BABEE0_1D84_90A5_419A_537F375DE0EB",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_11BD5C43_1E57_03DB_41B1_CC0C8721070A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D81280_1E55_0755_4186_ADB4BBC91028",
   "pitch": 20.9,
   "hfov": 7.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -5.69
  }
 ],
 "id": "overlay_0E58CCEA_1E57_1CD5_41B3_7232F1989C03",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.73,
   "yaw": 75.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_11B97C5D_1E57_03EF_4191_703B2F0B829C, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D7B281_1E55_0757_41B8_6D72C1FD2883",
   "pitch": 26.78,
   "hfov": 6.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 75.25
  }
 ],
 "id": "overlay_0E592CEA_1E57_1CD5_41A1_F5B7FFF91D65",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.11,
   "yaw": 46.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_11B52C7A_1E57_03B5_41BA_47B7D848FF84, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D73281_1E55_0757_41B5_D5AF0FCFEF88",
   "pitch": 19.27,
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 46.51
  }
 ],
 "id": "overlay_0E593CEA_1E57_1CD5_41AF_4B0A162345D1",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.11,
   "yaw": 25.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_11B07C97_1E57_037B_41A2_0DB2FDFFF89A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_08D6B281_1E55_0757_41B0_E5ECB3F6DDA0",
   "pitch": 19.27,
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 25.91
  }
 ],
 "id": "overlay_0E590CEA_1E57_1CD5_41B3_C819858EF4A3",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EC35B8C_1E55_056E_41AE_91C798FF309B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Otro punto a favor de la afirmaci\u00f3n que sostiene que la fachada principal es la que mira al centro de Asunci\u00f3n es que el Palacio contiene muchos elementos de la arquitectura acad\u00e9mica y uno de ellos es que encima del front\u00f3n principal hab\u00eda un conjunto escult\u00f3rico que determinaba que ese es el punto central del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EEFA5C6_1E57_0CDA_41A2_6ABD77849B81",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EE87BA6_1E55_055A_418F_E10E450BFB89",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Lo conocimos blanco o gris, pero hace cinco a\u00f1os los trabajos de los restauradores dejaron al descubierto sus verdaderos colores. \u201cAnteriormente era gris, pues en la \u00e9poca de Stroessner todos los edificios se pintaban de ese color porque era m\u00e1s f\u00e1cil mantenerlos; pero as\u00ed se perd\u00edan los valores de la construcci\u00f3n, el simbolismo que tiene\u201d, afirma Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El exterior del edificio era un revoque a la piedra, al que se le daba color gracias a la utilizaci\u00f3n de las arenas que tenemos en Paraguay. Los colores originales son los que hoy d\u00eda luce, un tono que se acerca al rosado y un matiz amarillo. La intervenci\u00f3n comenzada en 2013 permiti\u00f3 descubrir la identidad crom\u00e1tica de la construcci\u00f3n, que ya hab\u00eda sido develada inicialmente en 2011, cuando se trabaj\u00f3 en el torre\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">\u201cObviamente, la recuperaci\u00f3n de estos tonos crom\u00e1ticos permiten entender el edificio en su figura fondo, porque cuando era todo blanco, los detalles ornamentales de la fachada quedaban totalmente ocultos y olvidados\u201d, se\u00f1ala el arquitecto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A falta de documentos que lo certifiquen, Calvo sostiene que los tonos del Palacio fueron decididos por los colores de la tierra. \u201cCuando se hizo el edificio, no exist\u00eda el cemento en Paraguay, todos eran revoques de arena y cal. Y las diferentes arenas con sus granulometr\u00edas permit\u00edan tonificar los revoques. La Asunci\u00f3n de 1800 e inicios del 1900 tiene muchos de estos colores\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Era lo que se ten\u00eda. La arena de arroyo y el disgregado de la piedra de Emboscada poseen un tono ros\u00e1ceo, colores propios de nuestra tierra, y eran los utilizados para las terminaciones de los edificios, que consist\u00edan en un revoque que parece piedra y est\u00e1n tonificados con los \u00e1ridos propios que componen su mezcla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En cuanto a las persianas, cuando se hicieron las diferentes estratificaciones apareci\u00f3 el verde ingl\u00e9s como primera capa de pintura. La decisi\u00f3n, en aquel momento, fue mantener ese color porque le da magnificencia a lo que es figura y fondo del edificio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_11B91C5C_1E57_03ED_41AA_2FD04440C94C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Las preguntas sobre el palacio son muchas, pero las posibles respuestas son aun m\u00e1s. Las dudas acerca de si la construcci\u00f3n hab\u00eda sido finiquitada no fueron develadas hasta 2013, cuando comenz\u00f3 la \u00faltima refacci\u00f3n, bajo la direcci\u00f3n del arquitecto Carlos Cataldi.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Fue una restauraci\u00f3n precedida por estudios que se deben hacer en este tipo de trabajos y permiti\u00f3 disipar muchas dudas que hab\u00eda sobre la historia del Palacio.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Los trabajos realizados permitieron ver que el edificio estaba finamente ornamentado y decorado, lo que da a entender que ya estaba terminado al inicio de la Guerra Grande, aunque se sabe que nunca fue ocupado como residencia oficial por Solano L\u00f3pez, finalidad para la que fue proyectado.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">La historia aceptada es que L\u00e1zaro Rojas, padrino del Mariscal, le regal\u00f3 a su ahijado de bautismo el predio en el que se construir\u00eda el Palacio. Una versi\u00f3n apunta a que la edificaci\u00f3n comenz\u00f3 en 1857, y otra, en 1862, todav\u00eda en vida de Don Carlos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Sobre los planos tampoco hay certeza. Algunos estudiosos le otorgan la autor\u00eda al h\u00fangaro Francisco Wisner, pero lo cierto es que no existe prueba documental que avale esta versi\u00f3n. Lo que no se discute es que el brit\u00e1nico Alonzo Taylor se encarg\u00f3 de la estructura, y el italiano Alejandro Ravizza, de la parte ornamental.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Hacia 1867 la edificaci\u00f3n ya estaba casi concluida pero no pudo ser ocupada por L\u00f3pez, quien se encontraba al frente de las tropas comandando la defensa frente a los aliados. Despu\u00e9s, la escuadra brasile\u00f1a bombarde\u00f3 y ocup\u00f3 la capital y los proyectiles da\u00f1aron uno de los pin\u00e1culos.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">No fueron los \u00fanicos perjuicios perpetrados por los brasile\u00f1os, quienes se encargaron de saquear el lugar, llev\u00e1ndose los m\u00e1rmoles, las aberturas, las ornamentaciones y todo lo que pudieron rapi\u00f1ar, menos los muebles, porque de eso se encargaron los argentinos, quienes los retuvieron en Buenos Aires cuando pasaron por ese puerto a su venida de Europa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_0EF3EB9D_1E55_056E_419E_5E2E2C9D4ACC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">En 2013, la entonces presidenta argentina Cristina Fern\u00e1ndez de Kirchner fue quien devolvi\u00f3 a nuestro pa\u00eds lo que quedaba del mobiliario original. Las ara\u00f1as, los muebles y parte de los elementos que en la actualidad adornan el edificio no son los que originalmente iban a completar la residencia, pero s\u00ed son de \u00e9poca.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El historiador H\u00e9rib Caballero cuenta que el Palacio fue usado por los brasile\u00f1os, primero como cuartel y despu\u00e9s como caballeriza. \u201cQued\u00f3 abandonado y la prensa de los primeros a\u00f1os de la d\u00e9cada del 70 del siglo XIX dec\u00eda que ah\u00ed la gente se reun\u00eda para tomar, para jugar\u201d, apunta.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando el Colegio Nacional de la Capital fue creado en 1877, el lugar fue destinado a sede de la instituci\u00f3n, pero debido a los gastos que demandaba su refacci\u00f3n, ese proyecto no se pudo concretar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El Palacio qued\u00f3 sin uso durante mucho tiempo, hasta que durante el Gobierno de Patricio Escobar (1886-1890), este orden\u00f3 las reformas, que fueron bastante lentas. En 1892 fue inaugurado como nuevo Palacio con la primera exposici\u00f3n de productos nacionales. Fue la primera Expo Feria del pa\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Juan Gualberto Gonz\u00e1lez (1890-1894) deb\u00eda haber sido el primero en ocupar la que ser\u00eda residencia y despacho del presidente de la Rep\u00fablica, pero fue depuesto antes de la conclusi\u00f3n de los trabajos de reacondicionamiento. El uso del edificio como sede gubernativa se concret\u00f3 reci\u00e9n en 1894, y le toc\u00f3 al general Juan Bautista Egusquiza ser el primer inquilino.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">A partir de entonces, a la construcci\u00f3n le agregaron elementos y sufri\u00f3 intervenciones que la modificaron tanto en el exterior como en el interior, a pedido del presidente de turno.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Cuando fue inaugurado como edificio oficial, el Palacio no contaba con rejas. \u00c9stas fueron instaladas a comienzos del siglo XX. \u201cHay una foto del presidente (Juan Antonio) Escurra, quien asume en 1902, y todav\u00eda no aparecen las rejas. Las de Mburuvicha R\u00f3ga \u2013de la familia Aceval\u2013 son otras. Despu\u00e9s, el edificio pas\u00f3 a la familia Pozzi y de ah\u00ed a manos del Estado\u201d, destaca Caballero.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">El despacho del presidente de la Rep\u00fablica se hallaba ubicado en la planta alta del edificio hasta 1949, a\u00f1o en que el presidente Felipe Molas L\u00f3pez lo hizo trasladar al piso inferior, en el ala este. \u00bfLa raz\u00f3n? Molas L\u00f3pez ten\u00eda un problema en la pierna y no pod\u00eda subir las escaleras.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:16px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:13px;\"><I>Art\u00edculo del Diario Ultima Hora - Carlos Dar\u00edo Torres</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48100"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.03,
   "yaw": -36.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_018DADFC_181B_1813_41A2_9897199B4176, this.camera_0C74559F_1E55_0D6B_4169_C5B5AE73728C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2D3CBD38_1E85_91A6_41AF_19F8C3EE9584",
   "pitch": 0.61,
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -36.43
  }
 ],
 "id": "overlay_3BC3609A_1E8C_6F65_41BD_4C759084181E",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 74,
 "maxWidth": 350,
 "id": "Image_D11D2773_C206_7714_41E3_7BBA45F51C47",
 "backgroundOpacity": 0,
 "width": "93.22%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_D11D2773_C206_7714_41E3_7BBA45F51C47.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 120,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6538"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarVisible": "rollOver",
 "right": "80%",
 "children": [
  "this.Container_0C43BD48_0334_FED6_4184_569A6090129C",
  "this.IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43CD48_0334_FED6_4173_3A6EA8849449",
 "left": "0%",
 "children": [
  "this.Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
  "this.IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": true,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.02%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "2%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "2%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "2%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "93%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "2%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "2%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "87%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D126511_1E85_9166_41B1_76332B15E6E7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D124512_1E85_916A_4195_D9FA68320464",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D121512_1E85_916A_41B6_44B65F1FF2EA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B512A9F_182B_180D_416C_B6910FC250B5_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D13E512_1E85_916A_41BA_C85B780C6BCA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0E450E_1E85_917A_41B2_7430264C029B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_00E8D182_1815_E8F7_41AD_6CCA23FDB400_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0E250E_1E85_917A_4181_018583E37354",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D130513_1E85_916A_41AD_9174740C0A76",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D14E513_1E85_916A_4176_F34A4716E326",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D14C513_1E85_916A_41A8_F1D275854D39",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B778866_182B_383F_4191_B9AA64EA41E9_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D14A513_1E85_916A_41B7_C6E0BBF92346",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0A2509_1E85_9166_41AC_D9370189C44A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_2F70DCB6_1E84_90AA_41B9_4E8C8E655396",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_2F708CB6_1E84_90AA_41B5_64003374BCCA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0BA509_1E85_9166_41B8_A39C8D11E45B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DCC27D_1E55_07AF_41B3_9E5EDC64B8B6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DC627E_1E55_07AD_41B3_FECB5C2E7EA8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DBE27E_1E55_07AD_41B5_FD58AE460329",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_030750AD_181D_680D_41B3_D2F407301D1E_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DA827E_1E55_07AD_419B_E43CD38AAD41",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D08A506_1E85_916A_41A3_D1FE4BA98DF6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D086507_1E85_916A_414C_A69AD27E15CC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D084507_1E85_916A_41B0_A41B019C9A15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D082507_1E85_916A_41B9_B7B89082C034",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D09F508_1E85_9166_41A6_86D88FE3CFAF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D09D508_1E85_9166_4179_4D369EE5A0EA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_0821327A_1E55_07B5_4194_B9BBD3CACF4C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_0820027B_1E55_07AB_41B1_E3B271649FED",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_8_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DF927B_1E55_07AB_41B6_07EF42D57603",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_018DADFC_181B_1813_41A2_9897199B4176_0_HS_9_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08DF327C_1E55_07AD_41AD_2DB8DD3F6537",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0F550E_1E85_917A_41B5_B81AF6288E13",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0F350E_1E85_917B_41AA_29B2C3C2B0B8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0F150F_1E85_917A_41B7_C43EA11FEFAA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D10F50F_1E85_917A_41B3_96F61EAD23E3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B422D5B_182B_1815_419C_D884371317AA_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D10C50F_1E85_917A_4198_32C9FF51E74D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D11C510_1E85_9166_41B0_85A4AB2B955F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D11A510_1E85_9166_4152_DCF1348165E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D118511_1E85_9166_419E_BBDD5AA23726",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B4E9C0C_182B_FFF3_41A4_C9F51F543643_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D115511_1E85_9166_41B0_30FFDE04C13B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D15E514_1E85_916E_4183_27001B3230D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D15B514_1E85_916E_419B_97565ACFAAC5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D159514_1E85_916E_418C_5910E62C6F56",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B43F68B_182B_28F5_41B6_BF94DD00D309_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D156514_1E85_916E_41BB_AF9B1262B5B5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0D450B_1E85_917A_4198_B439B5562CCB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0D250B_1E85_917A_41BD_EE9201093B4B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0D050C_1E85_917E_41A0_EEAB04A64471",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0ED50C_1E85_917E_41A6_B56B2DFB117B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D42283_1E55_075B_41A7_7C31616A12BD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D55283_1E55_075B_419D_98436E247D8C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D4E284_1E55_075D_41A1_B0CCC3634B00",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_03DA2CBB_1815_3815_4199_C3A4B0B476D4_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D38284_1E55_075D_41A7_032725833113",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0FE50C_1E85_917E_41A8_01EB9FDFB8B6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0D450D_1E85_917E_41BB_B27207BAAA1F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3D0D250D_1E85_917E_41B5_4FAE24FB386D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0EF50D_1E85_917E_41A6_2FA2B9BDFBD9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_225EBF43_1E84_F1EB_41B8_32C25D7E6EA1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_22A1FF43_1E84_F1EB_41B4_0AF29E262018",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_22A06F43_1E84_F1EB_41B5_E46A21DEAA3C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01FC49CD_1815_380D_41A9_8EE1BC7C5B90_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_22A08F44_1E84_F1ED_41BD_C27CF6F80C48",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_3D0CB50A_1E85_917A_4139_1872F028C154",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_2D2CDD1C_1E85_919E_41BC_466CA1E8F5AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0C750A_1E85_917A_4180_D97C47061AB9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3D0C450B_1E85_917A_416D_F07E3108F77F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D81280_1E55_0755_4186_ADB4BBC91028",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D7B281_1E55_0757_41B8_6D72C1FD2883",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D73281_1E55_0757_41B5_D5AF0FCFEF88",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01F6D6B0_181B_6813_41B4_D5D73F66CBA8_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_08D6B281_1E55_0757_41B0_E5ECB3F6DDA0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B52E4E1_182B_6835_417F_EFB9E8EE9A6F_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_2D3CBD38_1E85_91A6_41AF_19F8C3EE9584",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43BD48_0334_FED6_4184_569A6090129C",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48",
 "left": 10,
 "maxHeight": 50,
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C, false, 0, this.effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7, 'hideEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, false, 0, this.effect_12A222D0_1DBF_90E6_41A9_58F5AEA972E7, 'hideEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
  "this.Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
  "this.Container_0C421D49_0334_FED6_4186_D39A3DF00320"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 9,
 "width": 44,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C, true, 0, this.effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A, 'showEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, true, 0, this.effect_1266C6E5_1DBC_90AE_41A9_4F1C5CC3706A, 'showEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('https://pdg.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('https://pdg.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 450,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "propagateClick": true,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "data": {
  "name": "X"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#987B55",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#987B55",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#987B55",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "bold",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "data": {
  "name": "ThumbnailList5161"
 },
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailBorderRadius": 10,
 "rollOverItemThumbnailShadowColor": "#987B55",
 "itemLabelFontFamily": "Times New Roman"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "99.97%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "3.062%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "propagateClick": true,
 "height": "79.681%",
 "verticalAlign": "middle",
 "minWidth": 20,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "data": {
  "name": "X"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "data": {
  "name": "X"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_0C43ED48_0334_FED6_4187_625DBBCE5D00.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "25.061%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
 "backgroundOpacity": 0,
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
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C421D49_0334_FED6_4186_D39A3DF00320",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
  "this.Container_0C43CD49_0334_FED6_417D_336039055769",
  "this.HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 120,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image72337"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": true,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": 40,
 "right": 10,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "propagateClick": true,
 "top": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2145.221055247256!2d-57.638218351351945!3d-25.276727636763248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98f8ed14fc209ad4!2sPalacio%20de%20Gobierno!5e0!3m2!1ses-419!2spy!4v1581049463988!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image71348"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": "2.54%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C430D48_0334_FED6_4145_1E211728F658",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "iconHeight": 0,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Info",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C435D48_0334_FED6_4180_31E986AED01E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Vistas y Fotos",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C437D48_0334_FED6_4186_D484F3BB9D32",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Ubicaci\u00f3n",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C42CD48_0334_FED7_4183_C8B09627F4AA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contacto",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button contact"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C42ED49_0334_FED6_4187_F035BAC1122B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43CD49_0334_FED6_417D_336039055769",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 40,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "30%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "scrollBarVisible": "always",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "20.027%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header contact"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container25772"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>\u00a1Espero que hayan disfrutado!</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Nuestros mas sinceros agradecimientos al Teniente Coronel Luis Belotto por su amabilidad y cortes\u00eda durante nuestras tomas.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Vamos a estar actualizando el Paseo a medida que vayamos pudiendo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">\u00a1Gracias por visitarnos!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACTO:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:rholand@rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>rholand@rbucci.com</U></SPAN></A></SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>www.rbucci.com</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://api.whatsapp.com/send?phone=595981408400&amp;text=Hola, me gustÃ³ el Paseo Digital del PanteÃ³n!\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>+595 981 408 400</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "horizontalAlign": "center",
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "backgroundOpacity": 1,
 "width": "35%",
 "shadowColor": "#000000",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Pante%C3%B3n!', '_blank')",
 "iconHeight": 32,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 30,
 "layout": "horizontal",
 "backgroundColor": [
  "#25D366"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "12%",
 "fontSize": "3.26vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "WhatsApp",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "18.88%",
 "height": "61.735%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Cinzel Bold';\"><B>PALACIO DE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.26vh;font-family:'Cinzel Bold';\"><B>Gobierno</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#996633",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "left": "0.19%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "0.19%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "bottom": "14.08%",
 "scrollBarWidth": 10,
 "height": 7,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.8vh;font-family:'Antonio';\"><B>Informaci\u00f3n General</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Proyectado para servir de residencia y despacho presidencial al mariscal Francisco Solano L\u00f3pez, el palacio que lleva su nombre \u2013tambi\u00e9n conocido como Palacio de los L\u00f3pez, Palacio de Gobierno y Palacio Presidencial\u2013 est\u00e1 lleno de simbolismos y misterios que lo convierten en una construcci\u00f3n monumental \u00fanica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Quiz\u00e1s el rasgo que pasa m\u00e1s desapercibido es el hecho de que fue pensado como un edificio que pueda abrazar a Asunci\u00f3n. El arquitecto Jos\u00e9 Mar\u00eda Calvo, consultor especializado en patrimonio monumental, destaca que \u2013seg\u00fan lo analizado para confeccionar el protocolo de intervenci\u00f3n de 2013\u2013, el edificio abre sus brazos para envolver a la capital.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">\u201cLa discusi\u00f3n era cu\u00e1l ser\u00eda la fachada principal. Por la morfolog\u00eda y la tipolog\u00eda propia del edificio en U, se concluy\u00f3 que el espacio principal exterior es el que da a la ciudad y que fue pensado como para que sea un abrazo a Asunci\u00f3n. Claro, por la escala y la forma en que se llegaba aqu\u00ed, tambi\u00e9n se le dio importancia a la fachada del r\u00edo\u201d, a\u00f1ade Calvo.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Este aspecto estuvo en entredicho durante mucho tiempo. \u201cPara saber cu\u00e1l es la verdadera fachada, lo m\u00e1s f\u00e1cil es analizar hacia d\u00f3nde mira la escalera principal; lo hace hacia el centro de Asunci\u00f3n\u201d, explica.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.57vh;font-family:'Open Sans Semibold';\"><I>Por Carlos Dar\u00edo Torres </I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "height": "98.095%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:3.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Cinzel Bold';\"><B>CONTACTO</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; }
 },
 "buttonToggleFullscreen": [
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false
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
