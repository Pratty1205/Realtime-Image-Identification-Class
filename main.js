function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", model_loaded);
}

function model_loaded() {
    console.log("Model is loaded");
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, got_Result);
}

function got_Result(error, result) {
    if (result) {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(3);
    } else {
        console.error(error);
    }
}