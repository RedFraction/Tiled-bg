function init_bg(){
    var scheduler = setInterval(() => generate(), 500);
}

function generate() {
    var c = $('#tiled-bg');
    var w = c.width();
    var h = c.height();

    cc = c[0].getContext('2d');
    cc.canvas.width = w;
    cc.canvas.height = h;

    var size = 2;

    for (var y = 0; y < h; y+=size){
        for (var x = 0; x < w; x+=size){
            cc.fillStyle = getRandColor();
            cc.fillRect(x,y,size,size);
        }
    }
}

function getRandColor() {
    var a = [
        '#000',
        '#222',
        '#444',
        '#666',
        '#777',
        '#999',
        '#BBB',
        '#FFF'
    ];

    return a[Math.floor(Math.random() * Math.floor(a.length))];
}