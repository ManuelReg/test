gsap.set(".img", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.img:not(:last-child)');

images.forEach((image, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".affix",
      scroller: "body",
      start: () => "top -" + (window.innerHeight*(i+0.7)),
      end: () => "+=" + window.innerHeight,
      scrub: 1,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
      //markers: true,
      //markers: { startColor: "cyan", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20 }, 
    }
    
  })
  
  tl.to(image, { height: 0});
  
});



gsap.set("article h2", { zIndex: (i, target, targets) => targets.length - i });

var hs = gsap.utils.toArray('article h2');

hs.forEach((h, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".affix",
      scroller: "body",
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: 2,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,    
       //markers: true,
       //markers: { startColor: "cyan", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20 }, 
    }
    
  })
  
  tl.to(h, { duration: 0.33, opacity: 1, y:"15%" })
  .to(h, { duration: 0.33, opacity: 0, y:"0" }, 0.66);
  
});

gsap.set(".texts", { zIndex: (i, target, targets) => targets.length - i });

var texts = gsap.utils.toArray('.texts');

texts.forEach((text, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".affix",
      scroller: "body",
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: 3,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,    
                //markers: true,
             //markers: { startColor: "cyan", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20 }, 
    }
    
  })
  
  tl.to(text, { duration: 0.33, opacity: 1, y:"15%" })
  .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66);
  
});

ScrollTrigger.create({

    trigger: ".affix",
    scroller: "body",
    scrub: false,
    //markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,

});