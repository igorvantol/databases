(function(_0xd2a276,_0x547c80){var _0x2f56ec=_0x1284,_0x493af1=_0xd2a276();while(!![]){try{var _0x52c4f8=parseInt(_0x2f56ec(0x158))/0x1+-parseInt(_0x2f56ec(0x154))/0x2*(-parseInt(_0x2f56ec(0x15c))/0x3)+-parseInt(_0x2f56ec(0x156))/0x4+parseInt(_0x2f56ec(0x155))/0x5+-parseInt(_0x2f56ec(0x15d))/0x6*(parseInt(_0x2f56ec(0x15a))/0x7)+-parseInt(_0x2f56ec(0x15e))/0x8+-parseInt(_0x2f56ec(0x159))/0x9*(parseInt(_0x2f56ec(0x15b))/0xa);if(_0x52c4f8===_0x547c80)break;else _0x493af1['push'](_0x493af1['shift']());}catch(_0x5221c4){_0x493af1['push'](_0x493af1['shift']());}}}(_0x3d08,0x24e5a));function _0x3d08(){var _0x32b130=['394252EBWCZW','lightslategray','199687SCYYyn','68184fnUWyc','7jDYeru','60iocxuu','3okpDsK','509676hJBLSm','1993416CevCki','silver','507358ThrVhD','879530aExWfR'];_0x3d08=function(){return _0x32b130;};return _0x3d08();}var aantalLagen=0xa,breedte=0x5a,hoogte;function _0x1284(_0x48ba41,_0x5549b4){var _0x3d08bc=_0x3d08();return _0x1284=function(_0x1284dd,_0x35afd2){_0x1284dd=_0x1284dd-0x154;var _0x222329=_0x3d08bc[_0x1284dd];return _0x222329;},_0x1284(_0x48ba41,_0x5549b4);}function setup(){var _0x39aacc=_0x1284;hoogte=breedte/0x2,canvas=createCanvas(aantalLagen*breedte+0x1,aantalLagen*hoogte+0x1),noLoop(),background(_0x39aacc(0x15f)),fill(_0x39aacc(0x157)),stroke('darkslategray');}function draw(){for(laag=0x1;laag<=aantalLagen;laag++){tekenRij(laag),translate(0x0,hoogte);}}function tekenRij(_0x49e8a6){inspringen=breedte/0x2*(aantalLagen-_0x49e8a6),push(),translate(inspringen,0x0);for(var _0x4fc920=0x0;_0x4fc920<_0x49e8a6;_0x4fc920++){rect(breedte*_0x4fc920,0x0,breedte,hoogte);}pop();}