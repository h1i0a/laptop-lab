// Separate source-pixel traces of the user's English ANSI and bilingual Arabic ISO photos.
// Photo identity is user-supplied; generation and measured millimetres are unconfirmed.
const MAC_PHOTOS={en:{size:[567,383],body:[74,51,414,295],pad:[193,228,175,109]},ar:{size:[457,321],body:[11,3,435,306],pad:[137,190,183,112]}};
function macKeys(ar){const keys=[],add=(y,h,xs,ws,labels)=>xs.forEach((x,i)=>keys.push({x,y,w:ws[i],h,label:labels[i]})),seq=(x,n,step)=>Array.from({length:n},(_,i)=>x+i*step),same=(n,w)=>Array(n).fill(w);
if(ar){
add(24,24,[32,...seq(75,13,27)],[40,...same(13,24)],['Esc',...seq(1,12,1).map(i=>'F'+i),'Touch ID']);
add(51,23,[...seq(32,13,27),385],[...same(13,24),39],['§','1','2','3','4','5','6','7','8','9','0','−','=','⌫']);
add(77,24,[32,...seq(75,12,27)],[40,...same(12,24)],['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']']);
add(103,24,[32,...seq(81,12,27)],[46,...same(12,24)],['Caps','A','S','D','F','G','H','J','K','L',';','’','\\']);
add(130,24,[32,66,...seq(93,10,27),365],[31,24,...same(10,24),59],['Shift','`','Z','X','C','V','B','N','M',',','.','/','Shift']);
add(157,23,[32,59,86,113,148,284,318],[24,24,24,32,133,32,24],['fn','control','option','command','Space','command','option']);
add(168,12,[345,372,399],[24,24,25],['←','↓','→']);add(157,10,[372],[24],['↑']);
}else{
add(72,23,[94,...seq(134,13,26)],[36,...same(13,23)],['Esc',...seq(1,12,1).map(i=>'F'+i),'Touch ID']);
add(98,22,[...seq(94,13,26),432],[23,...same(12,23),35],['`','1','2','3','4','5','6','7','8','9','0','−','=','⌫']);
add(123,22,[94,...seq(134,12,26),446],[36,...same(12,23),21],['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\']);
add(148,22,[94,...seq(140,11,26),426],[43,...same(11,23),41],['Caps','A','S','D','F','G','H','J','K','L',';','’','Return']);
add(174,22,[94,...seq(153,10,26),413],[56,...same(10,23),54],['Shift','Z','X','C','V','B','N','M',',','.','/','Shift']);
add(199,22,[94,120,146,172,204,335,366],[23,23,23,29,128,29,23],['fn','control','option','command','Space','command','option']);
add(210,11,[392,418,444],[23,23,23],['←','↓','→']);add(199,10,[418],[23],['↑']);
}return keys;}
function macTrace(ar=false,outline=false){const p=MAC_PHOTOS[ar?'ar':'en'],[x,y,w,h]=p.body,[px,py,pw,ph]=p.pad,stroke=outline?'#ed284b':'#75828d',fill=outline?'none':'#e2e6e8';let s=`<g data-mac-layout="${ar?'ar-iso':'en-ansi'}" stroke="${stroke}" stroke-width="${outline?.8:.7}" fill="${fill}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${ar?16:19}"/><rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="5" fill="${outline?'none':'#cbd4d9'}"/>`;
for(const k of macKeys(ar)){s+=`<rect x="${k.x}" y="${k.y}" width="${k.w}" height="${k.h}" rx="2.5" fill="${outline?'none':'#f6f8f8'}"/>`;if(!outline){const dual=ar&&ARABIC[k.label],label=k.label==='Space'?'':k.label==='Touch ID'?'◉':k.label;const xx=k.x+k.w/2;s+=`<text x="${xx}" y="${k.y+k.h*(dual?.4:.62)}" text-anchor="middle" fill="#53606a" stroke="none" font-size="${label.length>3?3.4:5.5}">${esc(label)}</text>`;if(dual)s+=`<text x="${xx}" y="${k.y+k.h*.84}" text-anchor="middle" fill="#53606a" stroke="none" font-size="7">${dual}</text>`;}}
if(ar){s+=`<path data-iso-enter="true" d="M402 77H420Q424 77 424 81V123Q424 127 420 127H410Q406 127 406 123V101H402Q398 101 398 97V81Q398 77 402 77Z" fill="${outline?'none':'#f6f8f8'}"/>`;if(!outline)s+='<text x="414" y="94" text-anchor="middle" fill="#53606a" stroke="none" font-size="8">↵</text>';}
return s+'</g>';}
function macDeck(l){const p=MAC_PHOTOS[state.arabic?'ar':'en'];return `<g transform="scale(${l.w/p.body[2]} ${l.d/p.body[3]}) translate(${-p.body[0]} ${-p.body[1]})">${macTrace(state.arabic)}</g>`;}
function openMacTrace(ar=state.arabic){let dlg=$('#traceDialog');if(!dlg){dlg=document.createElement('dialog');dlg.id='traceDialog';document.body.append(dlg);}const p=MAC_PHOTOS[ar?'ar':'en'];dlg.innerHTML=`<div class="dialog-head"><div><div class="eyebrow">MACBOOK AIR · YOUR REFERENCE</div><h2>Two layouts. Two outlines.</h2></div><button id="closeTrace" aria-label="Close trace">✕</button></div><p>English ANSI has a horizontal Return key. Arabic ISO has a tall Enter key, an extra key beside left Shift, and bilingual legends.</p><label class="field">Reference layout<select id="macTraceLayout"><option value="en" ${ar?'':'selected'}>English · ANSI</option><option value="ar" ${ar?'selected':''}>English + Arabic · ISO</option></select></label><label class="check"><input id="referenceToggle" type="checkbox" checked> Show your reference image</label><div class="trace-stage"><svg viewBox="0 0 ${p.size.join(' ')}" role="img" aria-label="${ar?'Arabic ISO':'English ANSI'} MacBook Air source image and traced outline"><image id="referenceImage" href="assets/mac-${ar?'ar':'en'}-reference.png" width="${p.size[0]}" height="${p.size[1]}" opacity=".7"/>${macTrace(ar,true)}</svg></div><p class="note">Image-coordinate tracing, not measured physical dimensions. Photos identify layout differences, but do not confirm the exact Air generation. Touchpad size is approximately 128 × 79 mm when scaled to the catalog chassis.</p>`;if(!dlg.open)dlg.showModal();}
