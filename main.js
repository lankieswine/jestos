prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XVUOm6Zqt/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "La primera prediccion es " + prediction_1;
    speak_data2 = "La segunda prediccion es " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
      }else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        //Resultados pasra prediccion 1
        if(results[0].label == "feliz"){
            document.getElementById(update_imoji).innerHTML = "&#128522"
        }
        if(results[0].label == "triste"){
            document.getElementById(update_imoji).innerHTML = "&#128532"
        }
        if(results[0].label == "enojado"){
            document.getElementById(update_imoji).innerHTML = "&#128548"
        }
       
         //Resultados pasra prediccion 2
        if(results[1].label == "feliz"){
            document.getElementById(update_imoji).innerHTML = "&#128522"
        }
        if(results[1].label == "triste"){
            document.getElementById(update_imoji).innerHTML = "&#128532"
        }
        if(results[1].label == "enojado"){
            document.getElementById(update_imoji).innerHTML = "&#128548"
        }


    }
}