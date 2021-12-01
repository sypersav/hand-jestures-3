Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90

});
camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'

    });

}
console.log("ml5 ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z9KxivTB9/model.json", modelloaded)

function modelloaded() {
    console.log(modelloaded)
}
var prediction_1 = "";


function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}

function check() {
    var img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak()
        if (prediction_1 == "awesome") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (prediction_1 == "victory") {
            document.getElementById("update_emoji").innerHTML = "&#128406;";
        }
        if (prediction_1 == "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";

        }



    }

}