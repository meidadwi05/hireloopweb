(()=>{
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(preference.matches||!('IntersectionObserver' in window))return;
 const selector='main>section:not(.hero) .section-top,main>section:not(.hero) .center,main>section:not(.hero) .eyebrow, .bento article,.industry-grid .industry,.jobs .job,.steps article,.about-grid>div,.app-grid>div,.cta,.pain-card,.flow-layout>div,.feature,.proof>div,.lead-layout>div,.faq-layout>div,#petunjuk-pwa h2';
 const elements=[...document.querySelectorAll(selector)].filter(e=>!e.parentElement.closest('.bento article,.about-grid>div,.app-grid>div,.flow-layout>div,.proof>div,.lead-layout>div,.faq-layout>div,.feature,.pain-card'));
 const reveal=e=>{e.classList.add('hl-visible');observer.unobserve(e)};
 const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)reveal(entry.target)},{threshold:.06,rootMargin:'0px 0px -20px 0px'});
 elements.forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*.95)return;const siblings=[...e.parentElement.children];const index=siblings.indexOf(e);e.style.setProperty('--hl-delay',Math.min(index%4*75,225)+'ms');e.classList.add('hl-reveal');observer.observe(e)});
 const showAll=()=>{observer.disconnect();elements.forEach(e=>e.classList.add('hl-visible'))};
 preference.addEventListener?.('change',e=>{if(e.matches)showAll()});
 window.addEventListener('beforeprint',showAll);
 // Anchor jumps and keyboard focus must never land on an invisible element.
 document.addEventListener('focusin',event=>{const e=event.target.closest('.hl-reveal');if(e)reveal(e)});
 window.addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));const section=document.getElementById(id);if(section)section.querySelectorAll('.hl-reveal').forEach(reveal)});
})();
