(function(_0x4a868c,_0x5be642){var _0x21643e=_0x1576,_0x34754e=_0x4a868c();while(!![]){try{var _0x11c420=-parseInt(_0x21643e(0x192))/0x1*(parseInt(_0x21643e(0x18e))/0x2)+parseInt(_0x21643e(0x194))/0x3*(parseInt(_0x21643e(0x191))/0x4)+parseInt(_0x21643e(0x18f))/0x5+parseInt(_0x21643e(0x19b))/0x6+parseInt(_0x21643e(0x19d))/0x7+parseInt(_0x21643e(0x195))/0x8+-parseInt(_0x21643e(0x199))/0x9*(parseInt(_0x21643e(0x19a))/0xa);if(_0x11c420===_0x5be642)break;else _0x34754e['push'](_0x34754e['shift']());}catch(_0x2a4b9a){_0x34754e['push'](_0x34754e['shift']());}}}(_0x1474,0xaf4b8));function _0x1474(){var _0x14d13c=['height','18319MrjPrg','white','black','5884Zzdfeb','1750975NxezUU','rij=','38096QoUbmq','2jfwKez','frameCount=','366WCLeJU','7850816sQVigq','width','Georgia','images/sprites/Alice460px/Alice_LR_460x460_2x9.png','633096OcnBcy','370ZVVDGH','4983168aeFtxU'];_0x1474=function(){return _0x14d13c;};return _0x1474();}var spriteSheet,rij=0x0,aantalSpriteRijen=0x2,aantalSpriteKolommen=0x9,schaal=0.33,breedte,hoogte,sBr,sHo,br,ho,x=0x64,y=0x1e;function preload(){var _0x4e6a29=_0x1576;spriteSheet=loadImage(_0x4e6a29(0x198));}function _0x1576(_0x3125d8,_0x151f39){var _0x147445=_0x1474();return _0x1576=function(_0x15760d,_0x5d7368){_0x15760d=_0x15760d-0x18e;var _0x56a6=_0x147445[_0x15760d];return _0x56a6;},_0x1576(_0x3125d8,_0x151f39);}function setup(){var _0x56568e=_0x1576;canvas=createCanvas(0x1cc,0x12c),textFont(_0x56568e(0x197)),textSize(0x12),noStroke(),frameRate(0x1e),breedte=spriteSheet[_0x56568e(0x196)],hoogte=spriteSheet[_0x56568e(0x19c)],sBr=breedte/aantalSpriteKolommen,sHo=hoogte/aantalSpriteRijen,br=sBr*schaal,ho=sBr*schaal;}function draw(){var _0x15cdee=_0x1576;background('wheat'),image(spriteSheet,x,y,br,ho,frameCount%aantalSpriteKolommen*sBr,rij*sHo,sBr,sHo),image(spriteSheet,x+0xaf,y,0x73,0x73,0x1cc*0x2,0x1cc,0x1cc,0x1cc),kolom=frameCount%aantalSpriteKolommen,kolom==0x0&&(rij==0x0?rij=0x1:rij=0x0),fill(_0x15cdee(0x19f)),text(_0x15cdee(0x193)+frameCount,0x5,0x14),text('kolom='+kolom,0x5,0x28),text(_0x15cdee(0x190)+rij,0x5,0x3c),fill(_0x15cdee(0x19e)),rect(0x0,0xb4,width,0x78),image(spriteSheet,0x0,0xb4,width,width*aantalSpriteRijen/aantalSpriteKolommen);}