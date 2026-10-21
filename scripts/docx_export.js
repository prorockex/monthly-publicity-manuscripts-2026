(function(root,factory){
  const api=factory(root);
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.ReviewDocx=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(root){
  const encoder=new TextEncoder();
  const EMU_PER_INCH=914400;
  const MAX_IMAGE_WIDTH=Math.round(6.6*EMU_PER_INCH);
  const MAX_IMAGE_HEIGHT=Math.round(5.6*EMU_PER_INCH);
  const crcTable=new Uint32Array(256);
  for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?(0xedb88320^(c>>>1)):(c>>>1);crcTable[n]=c>>>0}
  const crc32=bytes=>{let c=0xffffffff;for(const b of bytes)c=crcTable[(c^b)&0xff]^(c>>>8);return(c^0xffffffff)>>>0};
  const xml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
  const textRuns=value=>String(value??'').split(/\r?\n/).map((line,i)=>(i?'<w:r><w:br/></w:r>':'')+`<w:r><w:t xml:space="preserve">${xml(line)}</w:t></w:r>`).join('');
  const paragraph=(value,props='')=>`<w:p>${props?`<w:pPr>${props}</w:pPr>`:''}${textRuns(value)}</w:p>`;
  function join(parts){let size=0;for(const p of parts)size+=p.length;const out=new Uint8Array(size);let pos=0;for(const p of parts){out.set(p,pos);pos+=p.length}return out}
  function word16(v){const b=new Uint8Array(2);new DataView(b.buffer).setUint16(0,v,true);return b}
  function word32(v){const b=new Uint8Array(4);new DataView(b.buffer).setUint32(0,v>>>0,true);return b}
  function zipStore(files){
    const local=[],central=[];let offset=0;const now=new Date();
    const dosTime=(now.getHours()<<11)|(now.getMinutes()<<5)|(Math.floor(now.getSeconds()/2));
    const dosDate=((Math.max(1980,now.getFullYear())-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate();
    for(const file of files){
      const name=encoder.encode(file.name),data=typeof file.data==='string'?encoder.encode(file.data):file.data;
      const crc=crc32(data),localHeader=join([word32(0x04034b50),word16(20),word16(0x0800),word16(0),word16(dosTime),word16(dosDate),word32(crc),word32(data.length),word32(data.length),word16(name.length),word16(0),name]);
      local.push(localHeader,data);
      const centralHeader=join([word32(0x02014b50),word16(0x0314),word16(20),word16(0x0800),word16(0),word16(dosTime),word16(dosDate),word32(crc),word32(data.length),word32(data.length),word16(name.length),word16(0),word16(0),word16(0),word16(0),word32(0),word32(offset),name]);
      central.push(centralHeader);offset+=localHeader.length+data.length;
    }
    const centralData=join(central),localData=join(local),end=join([word32(0x06054b50),word16(0),word16(0),word16(files.length),word16(files.length),word32(centralData.length),word32(localData.length),word16(0)]);
    return join([localData,centralData,end]);
  }
  function imageSize(bytes,mime){
    if(mime==='image/png'&&bytes.length>=24)return{width:new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength).getUint32(16,false),height:new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength).getUint32(20,false)};
    if(mime==='image/gif'&&bytes.length>=10)return{width:bytes[6]|(bytes[7]<<8),height:bytes[8]|(bytes[9]<<8)};
    if(mime==='image/jpeg'||mime==='image/jpg'){
      let i=2;while(i+9<bytes.length){if(bytes[i++]!==0xff)continue;let marker=bytes[i++];while(marker===0xff)marker=bytes[i++];if(marker===0xd8||marker===0xd9||marker===0x01||(marker>=0xd0&&marker<=0xd7))continue;if(i+2>bytes.length)break;const length=(bytes[i]<<8)|bytes[i+1];if(length<2||i+length>bytes.length)break;if([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker))return{height:(bytes[i+3]<<8)|bytes[i+4],width:(bytes[i+5]<<8)|bytes[i+6]};i+=length}
    }
    throw new Error('無法辨識附圖尺寸，請確認附圖為 PNG、JPEG 或 GIF。');
  }
  function extFor(mime){if(mime==='image/jpeg'||mime==='image/jpg')return'jpeg';if(mime==='image/png')return'png';if(mime==='image/gif')return'gif';throw new Error(`Word 不支援此附圖格式：${mime||'未知'}`)}
  async function localImageBytes(url,source){
    const img=new root.Image();
    await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error(`無法讀取本機附圖：${source}`));img.src=url});
    const canvas=root.document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;canvas.getContext('2d').drawImage(img,0,0);
    const normalized=source.toLowerCase().split(/[?#]/)[0],wanted=normalized.endsWith('.jpg')||normalized.endsWith('.jpeg')?'image/jpeg':'image/png';
    let dataUrl;try{dataUrl=canvas.toDataURL(wanted,.92)}catch{throw new Error('瀏覽器限制讀取本機附圖；請使用公開網站網址匯出 Word。')}
    const marker=';base64,',cut=dataUrl.indexOf(marker),mime=dataUrl.slice(5,dataUrl.indexOf(';'));if(cut<0)throw new Error(`無法轉換本機附圖：${source}`);const binary=root.atob(dataUrl.slice(cut+marker.length)),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    return{bytes,mime};
  }
  const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Aptos" w:hAnsi="Aptos" w:eastAsia="Microsoft JhengHei"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="160" w:line="320" w:lineRule="auto"/><w:widowControl/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:jc w:val="center"/><w:spacing w:after="320"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/><w:szCs w:val="36"/><w:color w:val="183E35"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="240" w:after="140"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="30"/><w:szCs w:val="30"/><w:color w:val="183E35"/></w:rPr></w:style></w:styles>`;
  function heading(value,breakBefore){return`<w:p><w:pPr><w:pStyle w:val="Heading1"/>${breakBefore?'<w:pageBreakBefore/>':''}<w:keepNext/><w:keepLines/></w:pPr>${textRuns(value)}</w:p>`}
  function imageParagraph(image,relId,docPrId){
    const size=imageSize(image.bytes,image.mime),factor=Math.min(MAX_IMAGE_WIDTH/size.width,MAX_IMAGE_HEIGHT/size.height),cx=Math.max(1,Math.round(size.width*factor)),cy=Math.max(1,Math.round(size.height*factor)),name=xml(image.caption||`附圖 ${docPrId}`),alt=xml(image.caption||image.filename||`附圖 ${docPrId}`);
    return`<w:p><w:pPr><w:jc w:val="center"/><w:keepLines/><w:spacing w:before="80" w:after="80"/></w:pPr><w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${docPrId}" name="${name}" descr="${alt}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${docPrId}" name="${name}" descr="${alt}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${relId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>${image.caption?paragraph(image.caption,'<w:jc w:val="center"/><w:spacing w:after="160"/>'):''}`;
  }
  async function build(entries){
    if(!Array.isArray(entries)||!entries.length)throw new Error('請先勾選要匯出的作品。');
    const files=[],relationships=[],mediaTypes=new Set(),mediaCache=new Map();let rel=1,docPr=1,body=[];
    body.push('<w:p><w:pPr><w:pStyle w:val="Title"/></w:pPr>'+textRuns('入選作品審查紀錄')+'</w:p>');
    body.push(paragraph(`共 ${entries.length} 篇｜圖文均嵌入文件並限制於版心範圍`,'<w:jc w:val="center"/><w:spacing w:after="360"/>'));
    for(let index=0;index<entries.length;index++){
      const item=entries[index],e=item.e||item,monthLabel=item.monthLabel||item.m?.label||'',status=item.reviewStatus||'待審查',note=item.reviewComment||'';
      body.push(heading(`${monthLabel} · 第${e.group}組 · ${e.category||''}${e.categoryNo||''}｜${e.title||''}`,index>0));
      body.push(paragraph(`審查結果：${status}`,'<w:spacing w:after="100"/>'));
      body.push(paragraph(`審查意見：${note.trim()||'未填寫'}`,'<w:spacing w:after="180"/>'));
      for(const para of (e.paragraphs||[]))body.push(paragraph(para));
      for(const image of (e.images||[])){
        const url=new URL(image.src,root.location?.href||'http://localhost/').href;
        let media=mediaCache.get(url);
        if(!media){let bytes,mime;if(root.location?.protocol==='file:')({bytes,mime}=await localImageBytes(url,image.src));else{const response=await root.fetch(url);if(!response.ok)throw new Error(`附圖下載失敗（HTTP ${response.status}）：${image.src}`);const blob=await response.blob();mime=blob.type||(/\.png(?:$|\?)/i.test(url)?'image/png':/\.gif(?:$|\?)/i.test(url)?'image/gif':'image/jpeg');bytes=new Uint8Array(await blob.arrayBuffer())}const extension=extFor(mime),name=`word/media/image${mediaCache.size+1}.${extension}`,rid=`rId${rel++}`;media={name,rid,mime,bytes};mediaCache.set(url,media);files.push({name,data:bytes});relationships.push(`<Relationship Id="${rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image${mediaCache.size}.${extension}"/>`);mediaTypes.add(extension)}
        body.push(imageParagraph({...media,caption:image.caption||''},media.rid,docPr++));
      }
    }
    const documentXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>${body.join('')}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="900" w:right="1080" w:bottom="900" w:left="1080" w:header="420" w:footer="420" w:gutter="0"/></w:sectPr></w:body></w:document>`;
    const documentRels=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>${relationships.join('')}</Relationships>`;
    const types=[...mediaTypes].map(ext=>`<Default Extension="${ext}" ContentType="image/${ext==='jpeg'?'jpeg':ext}"/>`).join('');
    const contentTypes=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${types}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`;
    files.push({name:'[Content_Types].xml',data:contentTypes});
    files.push({name:'_rels/.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'});
    files.push({name:'word/document.xml',data:documentXml});
    files.push({name:'word/styles.xml',data:styles});
    files.push({name:'word/_rels/document.xml.rels',data:documentRels});
    return zipStore(files);
  }
  return{build,zipStore,imageSize};
});
