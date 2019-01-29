var img = document.querySelector("#displacementFilter feTurbulence");
var frames = 0;
var rad = Math.PI / 180;

function AnimateBaseFrequency() {
    var bf = "0.01 .1";
    bfx = Number(bf.split(" ")[0]);
    bfy = Number(bf.split(" ")[1]);
    frames += .5
    bfx += 0.001 * Math.cos(frames * rad);
    bfy += 0.005 * Math.sin(frames * rad);

    bf = bfx.toString() + ' ' + bfy.toString();
    img.setAttributeNS(null, 'baseFrequency', bf);
    window.requestAnimationFrame(AnimateBaseFrequency);
}

window.requestAnimationFrame(AnimateBaseFrequency);
