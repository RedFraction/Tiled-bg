function init_bg(){
    var scheduler = setInterval(() => generate(), 1200);
}

function generate() {
    var c = $('#tiled-bg');
    var w = c.width();
    var h = c.height();

    cc = c[0].getContext('2d');
    cc.canvas.width = w;
    cc.canvas.height = h;

    var size = 50;

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
        '#111',
        '#222',
        '#333',
        '#444',
        '#555',
        '#666',
        '#777',
        '#888',
        '#999',
        '#AAA',
        '#BBB',
        '#CCC',
        '#DDD',
        '#EEE',
        '#FFF',
    ];

    return a[Math.floor(Math.random() * Math.floor(a.length))];
}