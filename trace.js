// MSI geometry digitized from the user's 1021 × 717 reference image.
// Coordinates remain in source pixels; no guessed key grid is substituted.
const MSI_ROWS=[
{y:200,h:20,x:210,widths:[34,36,36,36,36,36,36,36,36,36,36,36,36,36,35],labels:['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','PrtSc','⏻'],gap:4},
{y:224,h:35,x:210,widths:[22,34,34,34,34,34,34,34,34,34,34,34,75,35],labels:['~','1','2','3','4','5','6','7','8','9','0','−','+','Backspace'],gap:4,custom:true},
{y:263,h:34,x:210,widths:[41,34,34,34,34,34,34,34,34,34,34,34,55,35],labels:['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],gap:4,custom:true},
{y:302,h:33,x:210,widths:[53,34,34,34,34,34,34,34,34,34,34,34,83,35],labels:['Caps','A','S','D','F','G','H','J','K','L',';','’','Enter','PgUp'],gap:4},
{y:340,h:33,x:210,widths:[71,34,34,34,34,34,34,34,34,34,34,62,34,35],labels:['Shift','Z','X','C','V','B','N','M',',','.','/','Shift','↑','PgDn'],gap:4},
{y:378,h:34,x:210,widths:[70,34,34,197,34,34,25,25,34,34,35],labels:['Ctrl','⊞','Alt','Space','AltGr','\\','Fn','Ctrl','←','↓','→'],gap:4}
];
// The number and tab rows include the narrow navigation column at x=776.
MSI_ROWS[1]={y:224,h:35,x:210,widths:[22,34,34,34,34,34,34,34,34,34,34,34,34,75,35],labels:['~','1','2','3','4','5','6','7','8','9','0','−','+','Backspace','Delete'],gap:4};
MSI_ROWS[2]={y:263,h:34,x:210,widths:[41,34,34,34,34,34,34,34,34,34,34,34,34,55,35],labels:['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','Insert'],gap:4};
const exactX=[[210,249,289,330,370,410,450,490,531,571,612,653,694,734,776],[210,237,275,314,352,390,429,467,506,545,584,622,660,697,776],[210,255,294,332,371,409,448,486,525,563,602,641,679,718,776],[210,267,305,344,382,421,459,498,537,575,614,653,691,776],[210,284,323,361,400,438,477,515,554,592,631,670,737,776],[210,285,324,362,563,602,641,670,699,737,776]];
const exactW=[[34,36,36,36,36,36,36,36,36,36,36,36,36,36,34],[22,34,34,34,34,34,34,34,34,34,34,34,34,74,34],[41,34,34,34,34,34,34,34,34,34,34,34,34,53,34],[53,34,34,34,34,34,34,34,34,34,34,34,80,34],[70,34,34,34,34,34,34,34,34,34,34,62,34,34],[70,34,34,197,34,34,25,25,34,34,34]];
MSI_ROWS.forEach((row,i)=>{row.positions=exactX[i];row.widths=exactW[i]});
const ARABIC={Q:'ض',W:'ص',E:'ث',R:'ق',T:'ف',Y:'غ',U:'ع',I:'ه',O:'خ',P:'ح','[':'ج',']':'د',A:'ش',S:'س',D:'ي',F:'ب',G:'ل',H:'ا',J:'ت',K:'ن',L:'م',';':'ك','’':'ط',Z:'ئ',X:'ء',C:'ؤ',V:'ر',B:'لا',N:'ى',M:'ة',',':'و','.':'ز','/':'ظ'};
function msiTrace(arabic=false,outline=false){let s=`<g stroke="${outline?'#e02d3e':'#606c78'}" fill="${outline?'none':'#e2e6e8'}" stroke-width="${outline?1.8:1.4}"><path d="M203 169 H815 Q828 169 828 184 V576 Q828 590 814 590 H650 L640 587 H377 L367 590 H204 Q190 590 190 576 V184 Q190 169 203 169Z"/><rect x="399" y="432" width="218" height="136" rx="8" fill="${outline?'none':'#cbd4d9'}"/></g>`;
for(const row of MSI_ROWS){row.widths.forEach((width,i)=>{const x=row.positions[i],label=row.labels[i];s+=`<rect x="${x}" y="${row.y}" width="${width}" height="${row.h}" rx="3" fill="${outline?'none':'#f6f8f8'}" stroke="${outline?'#e02d3e':'#677481'}" stroke-width="${outline?1.3:1}"/>`;if(!outline)s+=`<text x="${x+width/2}" y="${row.y+row.h*.6}" font-size="${label.length>4?7:10}" fill="#53606a" text-anchor="middle">${arabic&&ARABIC[label]?ARABIC[label]:label==='Space'?'':label==='&'?'&amp;':label}</text>`;});}return s;}
