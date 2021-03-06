img1 ="";
status = "";
objects = [];
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}



function preload()
{
    img1 = loadImage('BED.png');
}

function draw()
{
    image(img1, 0, 0, 640, 420);

    if(status != "")
    {
        for (i =0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            objectDetector.detect(img1, gotResult);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y+20);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
    objects = results;
}

function back(){
    window.location = index.html
}