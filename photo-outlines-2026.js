// The supplied archive is visual evidence only. Its screenshots are not shipped.
// Port centers below use the published/reviewed chassis depth and are estimates
// from the pictured side, measured rear to front, never CAD dimensions.
const PHOTO_JARIR_PRO='https://www.jarir.com/sa-en/lenovo-yoga-pro-7-laptops-653541.html';
const PHOTO_JARIR_HP='https://www.jarir.com/sa-en/hp-omnibook-ultra-laptops-646595.html';
const PHOTO_HP_SPEC='https://support.hp.com/gb-en/document/ish_11036507-11036551-16';
const PHOTO_TECNO_REVIEW='https://www.jagatreview.com/2025/12/review-tecno-megabook-s14/2/';
const PHOTO_SLIM5_SPEC='https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_14ILL11/Yoga_Slim_7_14ILL11_Spec.pdf';
const PHOTO_SLIM_AMD_SPEC='https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_14AKP10/Yoga_Slim_7_14AKP10_Spec.pdf';

Object.assign(byId('pro'),{
  photo:PHOTO_JARIR_PRO,priceSource:PHOTO_JARIR_PRO,
  physicalNote:'Lenovo publishes the 325.3 × 228.1 × 16.9mm chassis and 135 × 80mm glass pad. The owner-supplied Jarir gallery for exact model 83KF0016AD shows its side speaker strips, central camera lip, keyboard and both port sides. Port centers are photo estimates within about 8mm; controls are also shown. Regional key legends remain unverified.',
  portTrace:{uncertainty:8,source:PHOTO_JARIR_PRO,basis:'Exact 83KF0016AD Jarir side views supplied by owner',
    L:[['HDMI',29],['TB4',52],['TB4',73],['SD',111]],
    R:[['USB-A',28],['USB-A',49],['Audio',68],['Power',91],['Camera switch',111]]}
});

Object.assign(byId('hpx'),{
  name:'OmniBook Ultra 14',model:'14-fd0000nx · B58THEAA2N · Jarir 646595',
  w:315.1,d:227.6,h:16.49,weight:1.57,screen:14,res:[2240,1400],hz:60,
  panel:'IPS touch',nits:400,battery:68,tpEstimate:[125,80],
  touchpad:'Precision clickpad; 125 × 80mm independent photo-review estimate',
  keyboard:'Backlit six-row keyboard; function row and key spacing photo-derived',
  material:'Metal deck and lid; individual panel materials unverified',
  face:'9MP IR camera',charging:'65W USB-C PD',finger:'Not verified',
  portsL:['USB-A','Audio'],portsR:['TB4','TB4'],
  portsText:'Left: USB-A, 3.5mm audio. Right: 2× Thunderbolt 4 USB-C. Centers estimated from exact Jarir gallery.',
  speakers:'Poly Studio quad speakers; side grille zones visible in product photos',
  upgrades:'32GB onboard RAM; M.2 SSD replacement requires service confirmation',
  color:'#8e9699',source:PHOTO_HP_SPEC,photo:PHOTO_JARIR_HP,priceSource:PHOTO_JARIR_HP,
  status:'Exact retail chassis identified; deck and port positions photo-derived',
  provisional:false,
  physicalNote:'Jarir model B58THEAA2N is HP OmniBook Ultra 14-fd0000nx. HP publishes 315.1 × 227.6 × 16.49mm. An independent 14-fd photo review measured the pad near 125 × 80mm; Jarir front and side gallery supports the pictured deck, speaker strips and port order. Side port centers are estimated within about 10mm. The screenshots supplied by the owner are not published.',
  portTrace:{uncertainty:10,source:PHOTO_JARIR_HP,basis:'Exact Jarir 14-fd0000nx left/right product images supplied by owner',
    L:[['USB-A',202],['Audio',180]],R:[['TB4',9],['TB4',31]]}
});

Object.assign(byId('tecno'),{
  // Same 155H S14 body is pictured in the supplied review frames. The Saudi
  // memory configuration has not been independently dimensioned.
  w:313,d:214,h:14.2,provisional:false,
  status:'155H chassis reference; Saudi 32GB footprint needs confirmation',
  tpEstimate:[111,74],
  physicalNote:'A measured 155H/16GB MegaBook S14 review reports a 313 × 214mm footprint, 111 × 74mm pad and 7–16.5mm tapered body; the manufacturer quotes 14.2mm thickness. Owner-supplied 155H review frames show this keyboard, fingerprint power key, pad and three USB-C ports. The Saudi 32GB unit has matching advertised S14/155H platform, but its footprint and surface materials have not been measured independently. The outline is a same-platform reference, with approximate ±12mm side port centers.',
  portTrace:{uncertainty:12,source:PHOTO_TECNO_REVIEW,basis:'155H review body; owner-supplied side frames',
    L:[['USB4',46],['USB4',67]],R:[['USB-C',49]]}
});

Object.assign(byId('slim5'),{
  source:PHOTO_SLIM5_SPEC,provisional:false,
  status:'14ILL11 chassis verified; retail CPU/SKU still provisional',
  physicalNote:'Lenovo publishes the 14ILL11 body at 312 × 221 × 13.9mm and glass pad at 135 × 80mm. The supplied teal review frames show the matching three-USB-C side arrangement, key layout, camera bump and broad pad. Photos alone do not prove the exact 83R00066AD processor or regional keyboard. Approximate USB-C positions have ±18mm uncertainty because the views are oblique.',
  portTrace:{uncertainty:18,source:PHOTO_SLIM5_SPEC,basis:'Owner-supplied three-USB-C chassis frames; 14ILL11 PSREF confirms arrangement',
    L:[['USB-C',35],['USB-C',69]],R:[['USB-C',59],['Power',91],['Camera switch',116]]}
});

Object.assign(byId('slimamd'),{
  w:312,d:219.3,h:13.9,weight:1.19,screen:14,res:[2880,1800],hz:120,provisional:false,
  panel:'OLED',battery:70,tp:[135,80],color:'#61817f',
  source:PHOTO_SLIM_AMD_SPEC,photo:'https://www.lenovo.com/lt/lt/p/laptops/yoga/yoga-slim-series/lenovo-yoga-slim-7-gen-10-14-inch-amd/len101y0060',
  status:'83JY reference chassis; exact display/retail details provisional',
  physicalNote:'The 83JY type maps to Yoga Slim 7 14AKP10. Lenovo publishes a 312 × 219.3 × 13.9mm body (221.3mm including camera bump) and 135 × 80mm glass pad. The supplied three-USB-C video frames are a different chassis and are not used for this AMD model. Its keyboard geometry and port offsets remain unmeasured; the manufacturer port inventory is used.',
  portsL:['HDMI','USB4','USB4'],portsR:['Camera switch','Power','Audio','USB-A'],
  portsText:'14AKP10 platform: left HDMI + 2× USB4; right e-shutter, power, audio and USB-A. Physical offsets unmeasured.',
  keyboard:'Lenovo 6-row backlit; exact Saudi key geometry unverified',
  touchpad:'135 × 80mm buttonless glass Precision touchpad',
  material:'Aluminium top and bottom',charging:'65W USB-C PD',
  bad:'SAR 6,899; exact Saudi display and key legends unverified.'
});

// The archive mixes older and current Zenbook frames. The UX3405-style black
// body corroborates the existing family trace; older blue frames do not set it.
byId('zeni').physicalNote += ' Supplied Zenbook frames include another generation; only the matching UX3405-style deck corroborates this trace.';

function photoDeck(l){
  if(!['hpx','tecno','slim5'].includes(l.id))return null;
  const hp=l.id==='hpx',tc=l.id==='tecno';
  const pad=l.tp||l.tpEstimate,padX=(l.w-pad[0])/2,padY=l.d-pad[1]-(hp?11:tc?12:10);
  const keyX=hp?25:tc?18:19,keyW=l.w-keyX*2,gap=1.7;
  const key=(x,y,w,h,label)=>`<rect x="${x.toFixed(2)}" y="${y}" width="${w.toFixed(2)}" height="${h}" rx="1.8" fill="#f5f8f7" stroke="${l.color}" stroke-width=".55"/><text x="${(x+w/2).toFixed(2)}" y="${y+h*.66}" text-anchor="middle" fill="#52645e" font-size="${label.length>5?3.2:label.length>2?4:5}">${esc(state.arabic&&ARABIC[label]?ARABIC[label]:label)}</text>`;
  const row=(y,h,labels,weights)=>{const unit=(keyW-gap*(labels.length-1))/weights.reduce((a,b)=>a+b,0);let x=keyX;return labels.map((label,i)=>{const w=unit*weights[i],s=key(x,y,w,h,label);x+=w+gap;return s;}).join('');};
  let keys='';
  keys+=row(18,10,['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Del'],Array(14).fill(1));
  keys+=row(31,15,['~','1','2','3','4','5','6','7','8','9','0','-','=','⌫'],[1,...Array(12).fill(1),1.8]);
  keys+=row(49,15,['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],[1.5,...Array(13).fill(1)]);
  keys+=row(67,15,['Caps','A','S','D','F','G','H','J','K','L',';','\'','Enter'],[1.7,...Array(11).fill(1),1.8]);
  keys+=row(85,15,['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],[2.1,...Array(10).fill(1),2.2]);
  const bottom=['Ctrl','Fn','⊞','Alt','','Alt','Copilot','←','↕','→'],weights=[1,1,1,1,5.4,1,1,1,1,1];
  const unit=(keyW-gap*(bottom.length-1))/weights.reduce((a,b)=>a+b,0);let x=keyX;
  bottom.forEach((label,i)=>{const w=unit*weights[i];keys+=label==='↕'?key(x,103,w,7,'↑')+key(x,111,w,7,'↓'):key(x,103,w,15,label);x+=w+gap;});
  const dots=Array.from({length:32},(_,i)=>`<circle cx="0" cy="${18+i*2.8}" r=".45" fill="${l.color}"/>`).join('');
  const grilles=(hp||!tc)?`<g opacity=".65"><rect x="5" y="16" width="13" height="98" rx="2" fill="${l.color}18"/><g transform="translate(9 0)">${dots}</g><g transform="translate(13 0)">${dots}</g><rect x="${l.w-18}" y="16" width="13" height="98" rx="2" fill="${l.color}18"/><g transform="translate(${l.w-13} 0)">${dots}</g><g transform="translate(${l.w-9} 0)">${dots}</g></g>`:'';
  const power=tc?`<circle cx="${l.w-9}" cy="15" r="5.5" fill="${l.color}20" stroke="${l.color}" stroke-width=".8"><title>Fingerprint power key · position photo-derived</title></circle>`:'';
  return `<g><rect width="${l.w}" height="${l.d}" rx="${tc?7:8}" fill="${l.color}14" stroke="${l.color}" stroke-width="1.2"/><path d="M18 8H${l.w-18}" stroke="${l.color}" stroke-width=".55"/>${grilles}${keys}${power}<rect x="${padX}" y="${padY}" width="${pad[0]}" height="${pad[1]}" rx="3" fill="${l.color}18" stroke="${l.color}" stroke-width="1.1" ${l.tp?'':'stroke-dasharray="3 2"'}/><text x="${l.w/2}" y="${padY+pad[1]/2}" text-anchor="middle" font-size="6" fill="#526858">${pad[0]} × ${pad[1]} mm · ${l.tp?'published':'photo estimate'}</text></g>`;
}
