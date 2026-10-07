// October 2026 research update. Keep IDs stable so existing browser preferences survive.
const GROUP_LABELS={considerable:'Current options',historical:'Historical / out of stock',catalog:'Wider catalog'};
const GROUP_ORDER=['considerable','historical','catalog'];
const datedPrice=(source,description)=>({source,description,checked:'2026-10-07'});
const byId=id=>LAPTOPS.find(l=>l.id===id);

Object.assign(byId('zeni'),{
  name:'Zenbook 14 OLED · Ultra 9',model:'UX3405CAP060W · Jarir 648717',price:5299,
  priceSource:'https://www.jarir.com/sa-en/asus-zenbook-14-laptops-648717.html',
  priceEvidence:datedPrice('https://www.jarir.com/sa-en/asus-zenbook-14-laptops-648717.html','Jarir listed SAR 5,299; delivery stock depends on location.'),
  source:'https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-14-oled-ux3405/techspec/',
  displaySource:'https://b2b.jarir.com/jarirstore/yjarirb2b/en/SAR/Categories/Computers-%26-Tablets/Asus-Zenbook-Laptop%2C-AI%2C-14%22%2C-Intel-Core-Ultra-9%2C-32-GB-RAM%2C-1-TB-M-2-NVMe-PCIe-4-0-SSD%2C-Windows-11-Home%2C-Intel-Arc-Graphics/p/648717',
  w:312.4,d:220.1,h:14.9,weight:1.28,screen:14,res:[2880,1800],hz:120,panel:'OLED touch',nits:400,battery:75,
  tp:null,tpEstimate:[130,75],touchpad:'ASUS NumberPad clickpad; surface dimensions estimated from family imagery',
  note:'Jarir SAR 5,299 · checked 7 Oct 2026; regional stock unconfirmed',
  bench:[2789,15433],benchSource:'https://www.ultrabookreview.com/71699-asus-zenbook-14-2025-intel-review/',
  benchNote:'Geekbench 6.2.2, Ultra 9 285H / 32GB / 1TB UX3405CA review; exact Jarir suffix untested. Performance profile.',
  runtime:8,runtimeNote:'Ultrabookreview Edge browsing, 7–9h range; ~120 nits, 120Hz, Best Power Efficiency, BIOS 307. Midpoint used for scoring; exact Jarir suffix untested.',
  runtimeSource:'https://www.ultrabookreview.com/71699-asus-zenbook-14-2025-intel-review/',
  runtimeRange:'7–9h Edge browsing · ~120 nits, 120Hz, efficiency mode',
  group:'considerable',status:'Exact retail SKU verified; deck photo-derived',
  good:'32GB / 1TB, 120Hz OLED and useful Windows ports at SAR 5,299.',
  bad:'Soldered RAM; active fan and warm/noisy performance mode; no matched SKU battery test.',
  physicalNote:'Published UX3405CA chassis dimensions. Key and touchpad geometry follows family photography, not calipers. Port centers are estimated from ASUS UX3405 side photographs; the exact Jarir keyboard remains unverified.'
});
Object.assign(byId('mac5'),{
  name:'MacBook Air 13 M5 · 16GB',model:'2026 · 16GB / 512GB · 8-core GPU',
  price:5499,priceSource:'https://www.apple.com/sa-en-edu/shop/buy-mac/macbook-air',
  priceEvidence:datedPrice('https://www.apple.com/sa-en-edu/shop/buy-mac/macbook-air','Apple Saudi Education base price SAR 5,499; eligibility and checkout stock apply.'),
  note:'Apple Saudi Education SAR 5,499 · checked 7 Oct 2026',
  runtimeCaution:true,
  group:'considerable',status:'Platform confirmed; keyboard trace generation unverified',
  physicalNote:'Apple publishes the chassis dimensions. English and Arabic keyboard drawings trace supplied photos; those photos do not identify the M5 generation. Touchpad size and port centers are photo-derived from the shared Air enclosure.'
});
variant('mac5',{
  id:'mac24',name:'MacBook Air 13 M5 · 24GB',model:'2026 · 24GB / 512GB · 10-core GPU',
  cpu:'Apple M5 · 10-core GPU',gpu:'Apple 10-core GPU',ram:24,ssd:512,price:6499,
  priceSource:'https://www.apple.com/sa-en-edu/shop/buy-mac/macbook-air/13-inch-sky-blue-m5-chip-10-core-cpu-10-core-gpu-24gb-memory-512gb-storage',
  priceEvidence:datedPrice('https://www.apple.com/sa-en-edu/shop/buy-mac/macbook-air/13-inch-sky-blue-m5-chip-10-core-cpu-10-core-gpu-24gb-memory-512gb-storage','SAR 6,499 user-observed education configuration; Apple confirms 24GB selects the 10-core GPU. Checkout price varies by choices.'),
  note:'Apple Saudi Education SAR 6,499 · user observed; checkout recheck needed',
  benchNote:'Geekbench 6 review unit: M5 16GB / 1TB / 10-core GPU, not this 24GB configuration. CPU comparison reference only.',
  runtimeNote:'Tom’s Hardware mixed web/video/OpenGL, 150 nits, M5 16GB / 1TB / 10-core GPU review unit; not a measured 24GB/512GB result.',
  runtimeCaution:true,
  group:'considerable',status:'Platform confirmed; exact battery test differs',
  physicalNote:'Same 13-inch M5 chassis as the 16GB option; Apple offers both memory configurations in the same enclosure. Keyboard photos remain generation-unconfirmed; port centers are photo-derived from the shared Air enclosure.'
});
LAPTOPS.push({
  id:'honor',brand:'HONOR',name:'MagicBook Art 14 2025',model:'Core Ultra 7 255H · 32GB / 1TB',
  cpu:'Core Ultra 7 255H',gpu:'Intel Arc 140T',ram:32,ssd:1024,price:5999,
  w:316.77,d:223.63,h:11.5,weight:1.03,screen:14.6,res:[3120,2080],hz:120,panel:'OLED touch',nits:503,
  battery:60,tp:[129,94.5],touchpad:'Pressure-sensitive haptic clickpad; full-surface click',
  keyboard:'Backlit; 1.5mm travel; half-height up/down arrows. Exact key pitch unverified.',
  material:'Metal chassis; finish varies by market',finger:'Fingerprint power key',face:'No built-in camera; removable magnetic camera',
  charging:'65W USB-C charger',portsL:['Camera dock','USB-C','TB4'],portsR:['Audio','HDMI','USB-A'],
  portsText:'Left: magnetic camera dock, USB-C 3.2 Gen 2, Thunderbolt 4. Right: audio, HDMI 2.1, USB-A 3.2 Gen 1. Approximate positions from 2025 side photographs.',
  upgrades:'32GB soldered; SSD replaceability requires service confirmation',speakers:'Six-speaker system',
  os:'Windows 11',arch:'x86-64',color:'#8b9e93',
  note:'STC SAR 5,999 · user observed; exact listing and stock need recheck',priceSource:'#private-source',
  priceEvidence:datedPrice('#private-source','User-observed STC price; live listing not independently confirmed.'),
  source:'https://www.honor.com/global/laptops/honor-magicbook-art-14-2025/spec/',
  photo:'https://media.extra.com/i/aurora/100472488_100_11?fmt=auto&w=721',
  bench:[2797,14454],benchSource:'https://www.notebookcheck.net/1-kg-Ultrabook-with-Arrow-Lake-and-excellent-input-devices-Honor-MagicBook-Art-14-2025-Review.1098985.0.html',
  benchNote:'Notebookcheck Geekbench 6.7 on same 255H / 32GB / 1TB chassis; regional SSD/display supplier may vary.',
  runtime:9+19/60,runtimeNote:'Notebookcheck Wi-Fi web test, 150 nits, 60Hz: 9h 19m; same CPU/RAM/storage chassis. Maximum brightness: 6h 32m.',
  runtimeSource:'https://www.notebookcheck.net/1-kg-Ultrabook-with-Arrow-Lake-and-excellent-input-devices-Honor-MagicBook-Art-14-2025-Review.1098985.0.html',
  runtimeRange:'9h 19m Wi-Fi · 150 nits / 60Hz; 6h 32m at max brightness',
  good:'Very light for a 14.6-inch screen; large published haptic pad; x86 and varied ports.',
  bad:'60Wh battery; soldered RAM; detachable camera may not suit every workflow.',
  group:'considerable',status:'Platform measured; STC stock unverified',
  physicalNote:'HONOR publishes 316.77 × 223.63 × 11.5mm and 129 × 94.5mm touchpad. A near top-down product photo and user-supplied review frames support the pictured keyboard rows, side speaker grilles, half-height arrows, and deck placement; estimated key pitch is about 19mm and front pad margin about 8mm. Perforation dots are illustrative. Port centers are estimated from the 2025 review side photographs, within roughly 8mm. Regional legends remain unverified. Notebookcheck measured 503 nits SDR.'
});
LAPTOPS.push({
  id:'tecno',brand:'TECNO',name:'MegaBook S14',model:'71005000111 · Jarir 674503',
  cpu:'Core Ultra 7 155H',gpu:'Intel Arc integrated',ram:32,ssd:1024,price:4999,
  // Jagat measured a 16GB Intel unit at 313 × 214mm; do not assign it as an exact 32GB outline.
  weight:.899,screen:14,res:[2880,1800],hz:120,panel:'OLED',nits:440,displaySource:'https://www.tecno-mobile.com/sa-en/laptops/product-detail/product/megabook-s14/',battery:50,batteryText:'50Wh in related 155H / 16GB review; Saudi 32GB pack unverified',
  tpEstimate:[111,74],touchpad:'Precision clickpad; mechanical/haptic mechanism unverified',
  keyboard:'Backlit chiclet; half-height up/down arrows in related Intel review. Saudi key layout unverified.',
  material:'Magnesium alloy advertised by TECNO; review unit material described as aluminium alloy',
  finger:'Fingerprint reader',face:'Not verified',charging:'65W USB-C PD',
  portsL:['USB4','USB4'],portsR:['USB-C'],portsText:'Related 155H review: 2× USB4 left; USB-C data right. Exact Saudi SKU port photo pending; no USB-A/HDMI reported.',
  upgrades:'RAM soldered; one M.2 slot in related 16GB review',speakers:'Two downward-facing speakers in related 155H review',
  os:'Windows 11 Home',arch:'x86-64',color:'#a49a8c',
  note:'Jarir SAR 4,999 · checked 7 Oct 2026; location-specific stock unconfirmed',
  priceSource:'https://www.jarir.com/sa-en/tecno-megabook-laptops-674503.html',
  priceEvidence:datedPrice('https://www.jarir.com/sa-en/tecno-megabook-laptops-674503.html','Jarir lists manufacturer number 71005000111, Ultra 7 155H, 32GB/1TB and SAR 4,999.'),
  source:'https://www.tecno-mobile.com/sa-en/laptops/product-detail/product/megabook-s14/',
  photo:'https://www.jagatreview.com/2025/12/review-tecno-megabook-s14/2/',
  bench:[2041,10447],benchSource:'https://browser.geekbench.com/v6/cpu/11846048',benchNote:'One public Geekbench 6.4.0 Windows Balanced submission identifies MEGABOOK S14, Core Ultra 7 155H and 31.58GB RAM: 2,041 single / 10,447 multi. SSD and Saudi retail suffix are not shown. The 2,164 / 9,434 AnTuTu review result is for a different Ultra 5 125H / 16GB S14 and is not substituted.',
  runtime:null,runtimeNote:'Independent runtime for exact 32GB Jarir SKU not verified. TECNO 10h claim is manufacturer marketing, not scored.',
  good:'32GB/1TB at SAR 4,999; very low advertised mass; sharp 120Hz OLED.',
  bad:'Battery runtime for the 32GB offer is unverified; three USB-C ports require adapters for USB-A or HDMI.',
  group:'considerable',status:'Retail configuration confirmed; same-family outline estimated',provisional:false,
  physicalNote:'The displayed 313 × 214mm body and 111 × 74mm pad come from a related 155H/16GB S14 review. Another retailer lists 312.6 × 226.8mm for the Saudi 32GB offer, so the exact body dimensions and pad remain unverified.'
});

// Keep former offers visible as references, never as current purchase rankings.
Object.assign(byId('zen'),{group:'historical',status:'Out of stock historical deal',note:'eXtra SAR 5,299 less 10% ≈ SAR 4,769 · historical, out of stock'});
Object.assign(byId('pro'),{group:'considerable',price:6799,note:'Jarir SAR 6,799 · checked 7 Oct 2026; location-specific stock unconfirmed',priceSource:'https://www.jarir.com/sa-en/lenovo-yoga-pro-7-laptops-653541.html',priceEvidence:datedPrice('https://www.jarir.com/sa-en/lenovo-yoga-pro-7-laptops-653541.html','Jarir lists 83KF0016AD / 255H / 32GB / 1TB at SAR 6,799.')});
const currentOptions=[
  ['slimamd','83JY00ATAD','Yoga Slim 7 · Ryzen AI 7 350','Lenovo','Ryzen AI 7 350',32,1024,6899],
  ['yoga7amd','83TD008MAD','Yoga · Ryzen AI 7 445','Lenovo','Ryzen AI 7 445',24,1024,6099]
];
for(const [id,sku,name,brand,cpu,ram,ssd,price] of currentOptions){const l=byId(id);Object.assign(l,{name,model:sku,cpu,ram,ssd,price,group:'considerable',status:'Configuration listed; physical details vary',provisional:true,note:`SAR ${price.toLocaleString('en-SA')} user-observed; current stock and physical details unverified`});}
LAPTOPS.push({id:'hpx',brand:'HP',name:'HP · Ryzen AI 9 HX 375',model:'B58THEAA2N',cpu:'Ryzen AI 9 HX 375',ram:32,ssd:1024,price:6599,os:'Windows',arch:'x86-64',group:'considerable',provisional:true,status:'Retail configuration confirmed; exact chassis traced below',note:'Jarir SAR 6,599 · checked 7 Oct 2026; location-specific stock unconfirmed',source:'#private-source',priceSource:'https://www.jarir.com/sa-en/hp-omnibook-ultra-laptops-646595.html',priceEvidence:datedPrice('https://www.jarir.com/sa-en/hp-omnibook-ultra-laptops-646595.html','Jarir lists B58THEAA2N / HX 375 / 32GB / 1TB at SAR 6,599.'),good:'32GB and strong CPU on paper.',bad:'Independent battery and matched CPU benchmark still pending.'});
LAPTOPS.push({id:'stc-zen',brand:'ASUS',name:'Zenbook 14 · STC historical listing',model:'Exact SKU unknown; AMD/Intel listing conflict',cpu:'Unverified',ram:32,ssd:512,price:4099,os:'Windows',arch:'x86-64',group:'historical',provisional:true,status:'Historical and unverified',note:'STC SAR 4,099 listing disappeared; CPU/SKU conflicted',source:'#private-source',priceSource:'#private-source',good:'Historical price reference only.',bad:'Never verified or currently purchasable.'});
for(const l of LAPTOPS){
  l.group ||= ['msi'].includes(l.id)?'catalog':['mac4','zen16'].includes(l.id)?'historical':['slim','slim5','idea'].includes(l.id)?'catalog':'catalog';
  if(l.arch==='x86-64'&&l.ram===16&&l.price>=4000&&!l.owned&&l.group==='considerable')l.group='catalog';
}
byId('zeni').runtimeMethodGroup='Edge browsing · 120 nits / 120Hz';
byId('honor').runtimeMethodGroup='Notebookcheck Wi-Fi · 150 nits / 60Hz';
byId('mac5').runtimeMethodGroup='Tom’s mixed web/video/OpenGL · 150 nits';
byId('mac24').runtimeMethodGroup='Tom’s mixed web/video/OpenGL · 150 nits';

// Port centers are estimated from near side-on photographs, using the published
// chassis depth as the scale. Coordinates are millimetres from REAR to FRONT.
// The uncertainty covers endpoint selection, perspective and port-center reading.
const PORT_TRACES={
  msi:{uncertainty:12,source:'#private-source',basis:'Owner-supplied photographs of this Modern 14 B5M, 7 October 2026; angled views',
    L:[['DC',33],['HDMI',51],['USB-C',73],['microSD',88]],R:[['USB-A',36],['USB-A',55],['Audio',76]]},
  zeni:{uncertainty:5,source:'https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-14-oled-ux3405/',basis:'ASUS UX3405 gallery, same chassis family',
    L:[['USB-A',203]],R:[['HDMI',17],['Audio',37],['TB4',54],['TB4',69]]},
  mac5:{uncertainty:10,source:'https://www.trikart.com/media/catalog/product/m/a/macbook-air-m2-space-grey_5.jpg?auto=webp&quality=90&width=2500',basis:'Full side photo of 2022 Air enclosure; M5 uses the same 13-inch enclosure',
    L:[['MagSafe',24],['TB4',42],['TB4',57]],R:[['Audio',23]]},
  honor:{uncertainty:8,source:'https://www.notebookcheck.net/1-kg-Ultrabook-with-Arrow-Lake-and-excellent-input-devices-Honor-MagicBook-Art-14-2025-Review.1098985.0.html',basis:'Notebookcheck 2025 review left/right side photos',
    L:[['Camera dock',42],['USB-C',79],['TB4',94]],R:[['Audio',71],['HDMI',50],['USB-A',26]]}
};
for(const [id,trace] of Object.entries(PORT_TRACES))byId(id).portTrace=trace;
byId('mac24').portTrace=PORT_TRACES.mac5;
byId('msi').physicalNote='Your Modern 14 B5M deck follows your supplied photograph. Left and right side port centers are estimated from additional owner photos, within roughly 12mm due to perspective; those personal photos are not published.';

function portGlyph(name,x,y){
  const audio=name==='Audio'||name==='DC';
  const width=name==='HDMI'||name==='Camera dock'?11:name==='MagSafe'?10:name==='USB-A'?9:7;
  const height=name==='Camera dock'?2.3:name==='MagSafe'?4:3.5;
  return audio?`<circle cx="${x}" cy="${y}" r="2" fill="#f8fbf8" stroke="#40574f" stroke-width=".6"/>`:
    `<rect x="${(x-width/2).toFixed(1)}" y="${(y-height/2).toFixed(1)}" width="${width}" height="${height}" rx="${name==='USB-C'||name==='TB4'?1.6:.6}" fill="#f8fbf8" stroke="#40574f" stroke-width=".6"/>`;
}
function portSequence(l,side){return l.portTrace?.[side]?.slice().sort((a,b)=>a[1]-b[1])||[];}

function specialDeck(l){
  if(l.id!=='honor')return null;
  const padX=(l.w-129)/2,padY=l.d-94.5-8,keyX=22,keyW=l.w-44,gap=1.8;
  const key=(x,y,w,h,label)=>`<rect x="${x.toFixed(2)}" y="${y}" width="${w.toFixed(2)}" height="${h}" rx="1.5" fill="#f6f9f7" stroke="${l.color}" stroke-width=".55"/><text x="${(x+w/2).toFixed(2)}" y="${y+h*.66}" text-anchor="middle" fill="#516259" font-size="${label.length>5?3.2:label.length>2?4.1:5}">${esc(label)}</text>`;
  const row=(y,h,labels,weights)=>{const unit=(keyW-gap*(labels.length-1))/weights.reduce((a,b)=>a+b,0);let x=keyX;return labels.map((label,i)=>{const w=unit*weights[i],svg=key(x,y,w,h,label);x+=w+gap;return svg;}).join('');};
  let keys='';
  keys+=row(15.5,10.2,['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Del'],[1.05,1,1,1,1,1,1,1,1,1,1,1,1,1.05]);
  keys+=row(27,15,['~','1','2','3','4','5','6','7','8','9','0','-','=','⌫'],[1,1,1,1,1,1,1,1,1,1,1,1,1,1.9]);
  keys+=row(44,15,['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\'],[1.5,1,1,1,1,1,1,1,1,1,1,1,1,1.4]);
  keys+=row(62,15,['Caps','A','S','D','F','G','H','J','K','L',';','\'','Enter'],[1.75,1,1,1,1,1,1,1,1,1,1,1,2]);
  keys+=row(80,15,['Shift','Z','X','C','V','B','N','M',',','.','/','Shift'],[2.2,1,1,1,1,1,1,1,1,1,1,2.4]);
  const bottom=['Ctrl','Fn','⊞','Alt','','Alt','Copilot','←','↕','→'],weights=[1.05,.9,.9,.9,5.6,.9,1.1,.9,.9,.9];
  const unit=(keyW-gap*(bottom.length-1))/weights.reduce((a,b)=>a+b,0);let bx=keyX;
  bottom.forEach((label,i)=>{const w=unit*weights[i];if(label==='↕'){keys+=key(bx,98,w,7.1,'↑')+key(bx,106.5,w,7.1,'↓');}else keys+=key(bx,98,w,16,label);bx+=w+gap;});
  // The grille zones are photo-derived; dot density is illustrative.
  const grilleDots=[6,9].flatMap(gx=>Array.from({length:30},(_,i)=>`<circle cx="${gx}" cy="${15+i*3.2}" r=".43" fill="${l.color}"/>`)).join('');
  const grilles=`<g opacity=".6"><rect x="4" y="12" width="10" height="102" rx="1" fill="${l.color}12"/>${grilleDots}<rect x="${l.w-14}" y="12" width="10" height="102" rx="1" fill="${l.color}12"/><g transform="translate(${l.w-18} 0)">${grilleDots}</g></g>`;
  const frontNotch=`M4 0H${l.w-4}Q${l.w} 0 ${l.w} 4V${l.d-4}Q${l.w} ${l.d} ${l.w-4} ${l.d}H193Q189 ${l.d} 187 ${l.d-2.5}H130Q128 ${l.d} 124 ${l.d}H4Q0 ${l.d} 0 ${l.d-4}V4Q0 0 4 0Z`;
  return `<g><path d="${frontNotch}" fill="${l.color}14" stroke="${l.color}" stroke-width="1.2"/><path d="M18 10H${l.w-18}" stroke="${l.color}" stroke-width=".5"/>${grilles}${keys}<rect x="${padX}" y="${padY}" width="129" height="94.5" rx="2" fill="${l.color}18" stroke="${l.color}" stroke-width="1.2"/><text x="${l.w/2}" y="${padY+48}" text-anchor="middle" font-size="7" fill="#526858">129 × 94.5 mm · haptic</text></g>`;
}
function portDiagram(l){
  const sides=[['L','LEFT'],['R','RIGHT']];
  const measured=Boolean(l.portTrace);
  return `<div class="port-order"><svg viewBox="0 0 350 145" role="img" aria-label="${esc(l.name)} side lengths${measured?', with approximate port centers measured from rear':' with port positions unmeasured'}">${sides.map(([s,label],i)=>{const y=32+i*65,cy=y+Math.max(5,l.h)/2,seq=portSequence(l,s);return `<text x="12" y="${y-9}" font-size="9" fill="#637268">${label} · REAR → FRONT</text><rect x="12" y="${y}" width="${l.d}" height="${Math.max(5,l.h)}" rx="2" fill="${l.color}12" stroke="${l.color}" ${seq.length?'':'stroke-dasharray="3 2"'}/>${seq.map(([name,mm])=>`<g><title>${esc(name)} · approximately ${mm} mm from rear ±${l.portTrace.uncertainty} mm</title>${portGlyph(name,12+mm,cy)}</g>`).join('')}<path d="M12 ${y-3}v-4m${l.d} 0v4" stroke="${l.color}" stroke-width=".6"/>`;}).join('')}</svg><div class="port-lists">${sides.map(([s,label])=>{const seq=portSequence(l,s);return `<p><b>${label}:</b> ${seq.length?seq.map(([name,mm])=>`${esc(name)} ~${mm} mm`).join(' · '):esc((l['ports'+s]||[]).join(' · ')||'Not verified')}</p>`;}).join('')}</div><small>${measured?`Photo-derived centers from rear, approximately ±${l.portTrace.uncertainty} mm. Side lengths share a scale. ${l.portTrace.source==='#private-source'?'Owner-supplied side photographs; not published':link(l.portTrace.source,'Side photo source')}.`:'Side lengths share a scale. Port positions need a usable side-on source; shown inventory is unpositioned.'}</small></div>`;
}
function sideProfile(l,face){
  const seq=portSequence(l,face==='left'?'L':'R'),cy=l.h/2;
  return `<g stroke="${l.color||'#536b64'}" stroke-width=".5" fill="${l.color||'#536b64'}12"><rect width="${l.d}" height="${l.h}" rx="1" ${seq.length?'':'stroke-dasharray="2 2"'}/>${seq.map(([name,mm])=>`<g><title>${esc(name)} · ~${mm} mm from rear ±${l.portTrace.uncertainty} mm</title>${portGlyph(name,mm,cy)}</g>`).join('')}</g>`;
}
