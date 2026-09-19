// Deck proportions digitized from official Lenovo / ASUS family images.
// Published chassis size establishes a shared scale; keycap geometry is image-derived.
function familyTrace(l){const pro=l.id==='pro';if(!pro&&!['zen','zen16','zeni'].includes(l.id))return null;
const box=pro?[285,562,1030,713]:[123,247,554,390],color=l.color;
let s=`<g transform="scale(${l.w/box[2]} ${l.d/box[3]}) translate(${-box[0]} ${-box[1]})"><rect x="${box[0]}" y="${box[1]}" width="${box[2]}" height="${box[3]}" rx="${pro?23:7}" fill="${color}16" stroke="${color}" stroke-width="${pro?4:2}"/>`;
const rows=pro?[
[638,34,361,878,['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Ins','PrtSc','Del'],[1.2,...Array(15).fill(1)]],
[680,50,361,878,['~','1','2','3','4','5','6','7','8','9','0','−','+','⌫'],[1,...Array(12).fill(1),1.6]],
[739,50,361,878,['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],[1.6,...Array(13).fill(1)]],
[798,50,361,878,['Caps','A','S','D','F','G','H','J','K','L',';','’','Enter'],[1.8,...Array(11).fill(1),1.8]],
[856,50,361,878,['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],[2.4,...Array(10).fill(1),2.4]],
[915,55,361,878,['Ctrl','Fn','⊞','Alt','Space','Alt','Copilot','←','↕','→'],[1.35,1,1,1,5.5,1,1,1.1,1.1,1.1]]
]:[
[293,13,152,496,['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','PrtSc','⏻','Del'],Array(16).fill(1)],
[311,28,152,496,['~','1','2','3','4','5','6','7','8','9','0','−','+','⌫'],[1,...Array(12).fill(1),1.6]],
[343,28,152,496,['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],[1.6,...Array(13).fill(1)]],
[375,29,152,496,['Caps','A','S','D','F','G','H','J','K','L',';','’','Enter'],[1.8,...Array(11).fill(1),1.8]],
[409,28,152,496,['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],[2.4,...Array(10).fill(1),2.4]],
[442,28,152,496,['Ctrl','Fn','⊞','Alt','Space','Alt','Copilot','←','↕','→'],[1.35,1,1,1,5.5,1,1,1.1,1.1,1.1]]];
for(const [y,h,x,w,labels,weights] of rows){const gap=pro?7:4,unit=(w-gap*(labels.length-1))/weights.reduce((a,b)=>a+b,0);let xx=x;labels.forEach((label,i)=>{const ww=unit*weights[i];const fill='#fbfcfa',rh=label==='↕'?h/2-2:h;for(let j=0;j<(label==='↕'?2:1);j++){const yy=y+j*(h/2+1);s+=`<rect x="${xx}" y="${yy}" width="${ww}" height="${rh}" rx="${pro?6:2}" fill="${fill}" stroke="${color}" stroke-width="${pro?2.2:1}"/><text x="${xx+ww/2}" y="${yy+rh*.65}" text-anchor="middle" fill="#57665a" font-size="${pro?(label.length>3?10:17):(label.length>3?5:9)}">${label==='Space'?'':label==='↕'?(j?'↓':'↑'):esc(state.arabic&&ARABIC[label]?ARABIC[label]:label)}</text>`;}xx+=ww+gap;});}
if(pro){for(const gx of [299,1260])for(let yy=643;yy<970;yy+=8)s+=`<path d="M${gx} ${yy}h41" stroke="${color}" stroke-width="2" opacity=".55"/>`;s+='<rect x="555" y="999" width="429" height="255" rx="7"';}else s+='<rect x="285" y="490" width="231" height="133" rx="3"';s+=` fill="${color}14" stroke="${color}" stroke-width="${pro?3:1.5}" ${pro?'':'stroke-dasharray="4 3"'}/></g>`;return s;}
