function identifySound(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_r5YtEynT/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
  
var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

ear_gif = document.getElementById('ear.gif')
background = document.getElementById('background_noise.png');
human = document.getElementById('image-removebg-preview.png');
cat = document.getElementById('cat-removebg-preview.png');
dog = document.getElementById('dog-removebg-preview.png');
cow = document.getElementById('cow-removebg-preview.png');
lion = document.getElementById('lion-removebg-preview.png');

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = 'Detected Dog - '+dog+' Detected Cat - '+cat+' Detected Cow - '+cow+' Detected Lion - '+lion;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_label").innerHTML = 'Detected the sound of - '+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById("animal_image");
        if (results[0].label == "Meowing"){
            img.src = 'cat-removebg-preview.png';
            cat = cat + 1;
        }

        else if (results[0].label == "Barking"){
            img.src = 'dog-removebg-preview.png';
            dog = dog + 1;
        }

        else if (results[0].label == "Mooing"){
            img.src = 'cow-removebg-preview.png';
            cow = cow + 1;
        }

        else if (results[0].label == "Roar"){
            img.src = 'lion-removebg-preview.png';
            lion = lion + 1;
        }

        else if (results[0].label == "Background Noise"){
            img.src = 'background_noise.png';
        }
        
        else {
            img.src = 'image-removebg-preview.png';
        }
        
    }
}