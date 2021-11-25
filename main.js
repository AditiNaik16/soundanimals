

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults); 
}

function gotResults(error, results)
{
    if (error){
console.error(error);
    }  else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
 
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +r+"," +g+ ","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +r+"," +g+ ","+b+")";


        img = document.getElementById('animal_image');
        if (results[0].label=="Barking"){
            img.src="https://media4.giphy.com/media/YPNSva1pEGFFu/giphy.gif";

        
        }
        else if (results[0].label=="Meowing"){
            img.src="https://media1.giphy.com/media/eNGXySJCvz7OXMGtWb/giphy.gif"
        }
        else {
            img.src="https://i.gifer.com/origin/87/87632c3c8763b305f56f49ad45e9990e.gif";
        }
    }

}