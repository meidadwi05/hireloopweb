(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const title=document.querySelector('.hero h1');if(title){title.innerHTML=title.innerHTML.split(/<br\s*\/?\s*>/i).map((line,i)=>`<span class="hero-line"><span class="hero-line-inner" style="--line-index:${i}">${line}</span></span>`).join('');}
 const header=document.querySelector('header'),photo=document.querySelector('.hero-photo');
 let frame=0,currentY=scrollY;
 function update(){frame=0;header.classList.toggle('is-scrolled',scrollY>100);if(photo&&!reduced.matches){currentY+=(scrollY-currentY)*.12;photo.style.setProperty('--photo-y',`${Math.min(currentY*.07,65)}px`);if(Math.abs(scrollY-currentY)>.5&&scrollY<1100)frame=requestAnimationFrame(update);}}
 addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});update();
 const menu=document.querySelector('.menu'),nav=document.getElementById('nav');menu.setAttribute('aria-controls','nav');menu.setAttribute('aria-expanded','false');new MutationObserver(()=>menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))).observe(nav,{attributes:true,attributeFilter:['class']});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.focus();}});
 window.toggleIndustries=button=>{const expanded=button.getAttribute('aria-expanded')==='true';document.querySelectorAll('.extra-industry').forEach(el=>el.hidden=expanded);button.setAttribute('aria-expanded',String(!expanded));button.innerHTML=expanded?'Lihat Semua Industri <span>＋</span>':'Tampilkan Lebih Sedikit <span>−</span>';};
 if(reduced.matches||!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.05,rootMargin:'0px 0px -20px 0px'});
 function prepare(e,i=0){if(e.dataset.revealPrepared)return;e.dataset.revealPrepared='true';if(e.getBoundingClientRect().top<innerHeight*.97)return;e.style.setProperty('--reveal-delay',`${Math.min(i%3*65,130)}ms`);e.classList.add('reveal-ready');observer.observe(e);}
 document.querySelectorAll('.journey-banner .benefits-heading,.bento article,.industry-intro,.industry:not([hidden]),.section-top,.job,.about-grid>div,.app-grid>div,#petunjuk-pwa h2,#petunjuk-pwa .steps article,.business,.faq-heading,.faq details,.footgrid>div,.footer-wordmark,.purpose-detail,.purpose-solutions>div').forEach(prepare);
 const jobs=document.getElementById('jobs');new MutationObserver(()=>jobs.querySelectorAll('.job').forEach(prepare)).observe(jobs,{childList:true});
 const revealAll=()=>{observer.disconnect();document.querySelectorAll('.reveal-ready').forEach(e=>e.classList.add('is-visible'));};reduced.addEventListener?.('change',e=>{if(e.matches)revealAll();});addEventListener('beforeprint',revealAll);
 document.addEventListener('focusin',e=>{const parent=e.target.closest('.reveal-ready');if(parent){parent.classList.add('is-visible');observer.unobserve(parent);}});
 addEventListener('hashchange',()=>{const section=document.getElementById(decodeURIComponent(location.hash.slice(1)));section?.querySelectorAll('.reveal-ready').forEach(e=>e.classList.add('is-visible'));});
})();

// A feathered ink sweep follows scroll with frame-independent damping.
(()=>{
 const heading=document.querySelector('.scroll-statement');if(!heading)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fragment=document.createDocumentFragment();heading.textContent.split(/(\s+)/).forEach(part=>{if(!part.trim()){fragment.append(document.createTextNode(part));return;}const word=document.createElement('span');word.className='scroll-word';word.textContent=part;fragment.append(word);});heading.replaceChildren(fragment);
 const words=[...heading.querySelectorAll('.scroll-word')];let width=1,target=0,current=0,frame=0,last=0;
 const clamp=v=>Math.max(0,Math.min(1,v));
 function measure(){let offset=0;words.forEach(word=>{word.style.setProperty('--word-start',`${offset}px`);offset+=word.getBoundingClientRect().width+parseFloat(getComputedStyle(heading).fontSize)*.24;});width=offset;aim();}
 function progress(){const r=heading.getBoundingClientRect(),view=innerHeight;return reduced.matches?1:clamp((view*.84-r.top)/(view*.65+Math.min(r.height*.25,120)));}
 function aim(){target=progress();if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}}
 function tick(now){frame=0;const dt=Math.min(now-last,50);last=now;current+=(target-current)*(1-Math.exp(-dt/105));if(Math.abs(target-current)<.00008)current=target;heading.style.setProperty('--highlight-px',`${current*(width+96)-48}px`);if(current!==target)frame=requestAnimationFrame(tick);}
 addEventListener('scroll',aim,{passive:true});addEventListener('resize',measure);reduced.addEventListener?.('change',()=>{current=target=progress();measure();});
 measure();current=target;heading.style.setProperty('--highlight-px',`${current*(width+96)-48}px`);document.fonts?.ready.then(measure);
 addEventListener('beforeprint',()=>heading.classList.add('print-solid'));addEventListener('afterprint',()=>heading.classList.remove('print-solid'));
})();

// Native sticky cards consume a finite scroll range, then release the next section.
(()=>{
 const section=document.getElementById('cara');if(!section)return;
 const pin=section.querySelector('.process-pin'),deck=section.querySelector('.steps'),cards=[...deck.children],counter=section.querySelector('.process-counter b'),track=section.querySelector('.process-track');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),tall=matchMedia('(min-height: 720px)');let raf=0,enabled=false,currentCursor=0,lastFrame=0;
 const clamp=v=>Math.max(0,Math.min(1,v));
 function configure(){enabled=!reduced.matches&&tall.matches&&CSS.supports('position','sticky');section.classList.toggle('process-pinned',enabled);if(!enabled){cards.forEach(c=>{c.style.removeProperty('transform');c.style.removeProperty('z-index');c.removeAttribute('aria-current');});return;}schedule();}
 function paint(now){raf=0;if(!enabled)return;const delta=lastFrame?Math.min(now-lastFrame,50):16;lastFrame=now;const stickyTop=parseFloat(getComputedStyle(pin).top)||0;const top=section.getBoundingClientRect().top;const distance=Math.max(1,section.offsetHeight-pin.offsetHeight);const progress=clamp((stickyTop-top)/distance);const targetCursor=Math.max(0,Math.min(3,progress*3.5-.15));currentCursor+=(targetCursor-currentCursor)*(1-Math.exp(-delta/85));if(Math.abs(targetCursor-currentCursor)<.0001)currentCursor=targetCursor;const cursor=currentCursor;const deckHeight=deck.clientHeight;cards.forEach((card,i)=>{const enter=i===0?1:clamp(cursor-(i-1));const smooth=enter*enter*(3-2*enter);const depth=Math.max(0,cursor-i);const scale=1-Math.min(depth*.045,.135);const y=(1-smooth)*(deckHeight+90)-Math.min(depth,3)*18;card.style.transform=`translate3d(0,${y.toFixed(3)}px,0) scale(${scale.toFixed(5)})`;card.style.zIndex=String(i+1);});const active=Math.min(3,Math.floor(cursor+.55));counter.textContent=String(active+1).padStart(2,'0');track.style.setProperty('--step-progress',String((cursor+1)/4));cards.forEach((card,i)=>{if(i===active)card.setAttribute('aria-current','step');else card.removeAttribute('aria-current');});if(currentCursor!==targetCursor)schedule();}
 function schedule(){if(!raf)raf=requestAnimationFrame(paint);}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',configure);reduced.addEventListener?.('change',configure);tall.addEventListener?.('change',configure);
 // A focused step must remain readable when tabbing or using assistive navigation.
 deck.addEventListener('focusin',e=>{const card=e.target.closest('article');if(!card||!enabled)return;const i=cards.indexOf(card);if(i>0){const stickyTop=parseFloat(getComputedStyle(pin).top)||0;const top=scrollY+section.getBoundingClientRect().top-stickyTop;const distance=section.offsetHeight-pin.offsetHeight;scrollTo({top:top+distance*((i+.15)/3.5),behavior:'instant'});}});
 configure();
})();

// Full-width footer: gentle scroll parallax and a masked title entrance.
(()=>{
 const banner=document.querySelector('.footer-banner'),photo=banner?.querySelector('.footer-photo');if(!banner||!photo)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,target=0,current=0,last=0;
 if(!reduced.matches&&'IntersectionObserver' in window){banner.classList.add('has-closing-motion');const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){banner.classList.add('is-inview');reveal.disconnect();}}),{threshold:.16});reveal.observe(banner);}
 function aim(){const r=banner.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;target=reduced.matches?0:((innerHeight-r.top)/(innerHeight+r.height)-.5)*85;if(!frame){last=performance.now();frame=requestAnimationFrame(paint);}}
 function paint(now){frame=0;const dt=Math.min(now-last,50);last=now;current+=(target-current)*(1-Math.exp(-dt/105));if(Math.abs(target-current)<.02)current=target;photo.style.setProperty('--footer-y',`${current.toFixed(3)}px`);if(current!==target)frame=requestAnimationFrame(paint);}
 addEventListener('scroll',aim,{passive:true});addEventListener('resize',aim);reduced.addEventListener?.('change',()=>{if(reduced.matches){banner.classList.remove('has-closing-motion');banner.classList.add('is-inview');}aim();});
 banner.addEventListener('focusin',()=>banner.classList.add('is-inview'));addEventListener('beforeprint',()=>banner.classList.add('is-inview'));aim();
})();

// Small damped offset keeps the career banner moving gently with native scroll.
(()=>{
 const banner=document.querySelector('.journey-banner'),photo=banner?.querySelector('.journey-photo');if(!photo)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,target=0,current=0,last=0;
 function aim(){const r=banner.getBoundingClientRect();if(reduced.matches){target=current=0;photo.style.setProperty('--journey-y','0px');return;}if(r.bottom<0||r.top>innerHeight)return;target=((innerHeight-r.top)/(innerHeight+r.height)-.5)*110;if(!frame){last=performance.now();frame=requestAnimationFrame(paint);}}
 function paint(now){frame=0;if(reduced.matches){aim();return;}const dt=Math.min(now-last,50);last=now;current+=(target-current)*(1-Math.exp(-dt/100));if(Math.abs(target-current)<.02)current=target;photo.style.setProperty('--journey-y',`${current.toFixed(3)}px`);if(current!==target)frame=requestAnimationFrame(paint);}
 addEventListener('scroll',aim,{passive:true});addEventListener('resize',aim);reduced.addEventListener?.('change',aim);aim();
})();
