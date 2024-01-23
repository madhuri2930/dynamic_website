function SwitchOn(){
    document.getElementById('bulbImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById('catImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switch-heading').textContent = 'Switched On';
    document.getElementById('OnBtn').style.backgroundColor = 'green';
    document.getElementById('OffBtn').style.backgroundColor = 'grey';
    document.getElementById('OnBtn').style.border = "none";
    document.getElementById('OnBtn').style.outline = "none";
}

function SwitchOff(){
    document.getElementById('bulbImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('catImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switch-heading').textContent = 'Switched Off';
    document.getElementById('OnBtn').style.backgroundColor = 'grey';
    document.getElementById('OffBtn').style.backgroundColor = 'red';
    document.getElementById('OffBtn').style.border = "none";
    document.getElementById('OffBtn').style.outline = "none";
}