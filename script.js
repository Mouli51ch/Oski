document.addEventListener('DOMContentLoaded', (event) => {
    // Get video element
    const videoElement = document.getElementById('webcam-video');
    const ran = document.getElementById('convert_text');
  
    // Speech to text code
    function convertSpeechToText() {
      var speech = true;
      window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResult = true;
  
      recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
  
        ran.innerHTML = transcript;
      });
  
      if (speech) {
        recognition.start();
      }
    }
  
    // Get access to the camera
    
  
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
  
    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // Configure ScrollTrigger scrollerProxy
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    // Refresh ScrollTrigger and update LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  });