var gradients=["moonlit-asteroid", "cool-sky", "harvey", "amin", "orange-coral"];

function getGradient(){
    random = Math.random() * gradients.length;
    gradient = gradients[Math.floor(random)];
    return gradient;
}

var grad = getGradient();
var color = grad+'-color';

$('#par-bg-1').addClass(grad);
$('.socials a').addClass(color);
$('.footer a').addClass(color);
