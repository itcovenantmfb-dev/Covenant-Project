"use client";
import { useEffect } from "react";

export default function ZohoDeskWidget() {
  useEffect(() => {
    if (document.getElementById("zohodeskasap")) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zohodeskasap";
    script.defer = true;
    script.nonce = "your_nonce_value";
    script.innerHTML = `
      var d=document;
      s=d.createElement("script");
      s.type="text/javascript";
      s.id="zohodeskasapscript";
      s.defer=!0;
      s.src="https://desk.zoho.com/portal/api/web/asapApp/1186061000000383007?orgId=899800767";
      t=d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s,t);
      window.ZohoDeskAsapReady=function(cb){
        var e=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];
        if(window.ZohoDeskAsapReadyStatus){
          cb && e.push(cb);
          e.forEach(fn => fn && fn());
          window.ZohoDeskAsap__asyncalls=null;
        } else {
          cb && e.push(cb);
        }
      };
    `;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("zohodeskasap");
      if (existing) existing.remove();
    };
  }, []);

  return null;
}
