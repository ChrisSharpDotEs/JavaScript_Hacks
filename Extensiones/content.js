const obs=new MutationObserver(m=>{if(m.some(m=>m.type==="childList")){document.querySelectorAll("iframe").forEach(i=>i.remove())}});obs.observe(document.body,{childList:true,subtree:true});
