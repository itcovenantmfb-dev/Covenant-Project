"use client";
import { useEffect } from "react";

export default function ZohoIMWidget() {
  useEffect(() => {
    // Add Zoho IM script
    if (!document.getElementById("zohoimscript")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "zohoimscript";
      script.defer = true;
      script.nonce = "{place_your_nonce_value_here}";
      script.innerHTML = `
        window.ZOHOIM=window.ZOHOIM||function(a,b){ZOHOIM[a]=b;};
        window.ZOHOIM.prefilledMessage="";
        
        (function(){
          var d=document;
          var s=d.createElement('script');
          s.type='text/javascript';
          s.nonce='{place_your_nonce_value_here}';
          s.defer=true;
          s.src="https://im.zoho.com/api/v1/public/channel/39e632f4fb0c5a7993b5ea3fdd3aca68/widget";
          
          // Set position after script loads
          s.onload = function() {
            setTimeout(function() {
              if (window.ZOHOIM && typeof window.ZOHOIM === 'function') {
                try {
                  window.ZOHOIM("setPosition", "left");
                } catch (e) {
                  console.log("Zoho IM position setting failed:", e);
                }
              }
            }, 1000);
          };
          
          d.getElementsByTagName('head')[0].appendChild(s);
        })();
        
        // Fallback position setting with longer delay
        setTimeout(function() {
          if (window.ZOHOIM && typeof window.ZOHOIM === 'function') {
            try {
              window.ZOHOIM("setPosition", "left");
            } catch (e) {
              console.log("Zoho IM fallback position setting failed:", e);
            }
          }
        }, 3000);
      `;
      document.body.appendChild(script);
    }

    return () => {
      const zohoIMScript = document.getElementById("zohoimscript");
      if (zohoIMScript) zohoIMScript.remove();
    };
  }, []);

  return null;
}