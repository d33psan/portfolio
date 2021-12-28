
const lang = navigator.language ? navigator.language : 'en';
  fetch('_footer?lang=' + encodeURIComponent(lang)).then(response => {
    response.text().then(footerStr => {
      const div = document.createElement('div');
      div.innerHTML = footerStr;
      for (const child of [...div.children]) {
        if (child.tagName.toLowerCase() !== 'script') {
          document.body.append(child);
        }
      }

      (() => { !function(){"use strict";const e=document.getElementById("modal_backdrop"),t=document.getElementById("report_form"),o=document.getElementById("report_button"),n=document.getElementById("form_report"),c=document.getElementById("form_cancel"),s=document.getElementById("form_submit_reason"),a=document.getElementById("form_go_back"),l=document.getElementById("form_submit_captcha"),d=document.getElementById("form_close"),m=document.getElementById("report_reason_0"),r=document.getElementById("error_message"),i=document.getElementById("error_message_captcha"),u=[document.getElementById("form_step_terms"),document.getElementById("form_step_report_reason"),document.getElementById("form_step_captcha"),document.getElementById("form_step_success")];function p(){e.classList.remove("active"),t.classList.remove("active"),o.classList.remove("active"),o.focus()}function y(e){u.forEach(((t,o)=>{t.style.display=o===e?"block":"none"}))}let f=!1;e.onclick=p,c.onclick=p,d.onclick=p,o.onclick=function(){u.forEach(((e,t)=>{e.style.display=0===t?"block":"none"})),e.classList.add("active"),t.classList.add("active"),o.classList.add("active"),m.checked=!0,setTimeout((()=>{m.focus()}),350)},n.onclick=()=>y(1),s.onclick=()=>{y(2),function(){if(f)return;const e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js",e.async=!0,e.defer=!0,document.head.appendChild(e),f=!0}()},a.onclick=()=>y(1),t.addEventListener("submit",(function(e){e.preventDefault(),r.style.display="none",i.style.display="none";const o=function(){let e="";const t=document.getElementsByName("report_reason");for(let o=0;o<t.length;o++){const n=t[o];!0===n.checked&&(e=n.value)}return e}();let n;const c=t.elements.namedItem("g-recaptcha-response");if(c&&(n=c.value),!n)return void(i.style.display="block");const s={reason:o,challenge:n},a=window.location.origin+window.location.pathname+"/_api/report";l.classList.add("loading"),fetch(a,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((e=>{l.classList.remove("loading"),e.ok?y(3):r.style.display="block"}))}))}(); })();
    });
  });