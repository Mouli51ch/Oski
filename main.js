const webCamElement = document.getElementById("webCam");
        const canvasElement = document.getElementById("canvas");
        const webcam = new Webcam(webCamElement, "user", canvasElement);
        webcam.start();

        const button = document.getElementById('click_to_convert');
        const ran = document.getElementById('convert_text');
        button.addEventListener('click', function() {
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
        });
        
        
       /* const button = document.getElementById('click_to_convert');
        const ran = document.getElementById('convert_text')
        button.addEventListener('click', function() {
          var speech = true;
          window.SpeechRecognition= window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.interimResult = true;

          recognition.addEventListener('result', e=>{
                const transcript = Array.from(e.results)
                .map(result=>result[0])
                .map(result=>result.transcript)

                ran.innerHTML = transcript;
          })

          if(speech == true){
                recognition.start();
          }
        });*/
