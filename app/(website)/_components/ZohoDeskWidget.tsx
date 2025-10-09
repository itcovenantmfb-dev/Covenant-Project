"use client";
import { useEffect } from "react";

export default function ZohoDeskWidget() {
  useEffect(() => {
  
    if (!document.getElementById("zohodeskasap")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "zohodeskasap";
      script.defer = true;
      script.nonce = "{place_your_nonce_value_here}";
      script.innerHTML = `
        var d=document;
        s=d.createElement("script"),
        s.type="text/javascript",
        s.id="zohodeskasapscript",
        s.defer=!0,
        s.nonce="{place_your_nonce_value_here}",
        s.src="https://desk.zoho.com/portal/api/web/asapApp/978735000000883001?orgId=852042235",
        t=d.getElementsByTagName("script")[0];
        
        // Add onload handler to script
        s.onload = function() {
          setTimeout(function() {
            if (window.ZohoDeskAsap && window.ZohoDeskAsap.Widget && typeof window.ZohoDeskAsap.Widget.setPosition === 'function') {
              try {
                window.ZohoDeskAsap.Widget.setPosition("right");
              } catch (e) {
                console.log("Zoho Desk position setting failed:", e);
              }
            }
          }, 1000);
        };
        
        t.parentNode.insertBefore(s,t),
        window.ZohoDeskAsapReady=function(s){
          var e=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];
          window.ZohoDeskAsapReadyStatus?(s&&e.push(s),e.forEach(s=>s&&s()),window.ZohoDeskAsap__asyncalls=null):s&&e.push(s)
        };
        window.ZohoDeskAsapReady(function() {
          if (window.ZohoDeskAsap && window.ZohoDeskAsap.Widget && typeof window.ZohoDeskAsap.Widget.setPosition === 'function') {
            try {
              window.ZohoDeskAsap.Widget.setPosition("right");
            } catch (e) {
              console.log("Zoho Desk ready callback position setting failed:", e);
            }
          }
        });
        
        // Fallback position setting with longer delay
        setTimeout(function() {
          if (window.ZohoDeskAsap && window.ZohoDeskAsap.Widget && typeof window.ZohoDeskAsap.Widget.setPosition === 'function') {
            try {
              window.ZohoDeskAsap.Widget.setPosition("right");
            } catch (e) {
              console.log("Zoho Desk fallback position setting failed:", e);
            }
          }
        }, 3000);
      `;
      document.body.appendChild(script);
    }

    return () => {
      const zohoDeskScript = document.getElementById("zohodeskasap");
      if (zohoDeskScript) zohoDeskScript.remove();
    };
  }, []);

  return null;
}
