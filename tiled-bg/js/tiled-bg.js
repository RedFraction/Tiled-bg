function init_bg(){
    var tbg = TiledBg.constructor(200, 1200);
}

function TiledBg(){

    function getRandColor(){

        return Math.floor(Math.random() * Math.floor(999));
    }

    function generate(){
        for (var y = 0; y < this.h; y+=this.size){
            for (var x = 0; x < this.w; x+=this.size){
                this.arr[x][y] = this.getRandColor();
            }
        }
    }

    function draw() {
        for (var y = 0; y < this.h; y+=this.size){
            for (var x = 0; x < this.w; x+=this.size){
                this.cc.fillStyle = '#' + ( this.arr[x][y] === 0 ? '000' : this.arr[x][y]) + '7';
                this.cc.fillRect(x,y,this.size,this.size);
            }
        }
    }

    function updt(){
        for (var y = 0; y < this.h; y+=this.size){
            for (var x = 0; x < this.w; x+=this.size){
                if(this.arr[x][y] <= 999) {
                    this.arr[x][y] += 111;
                }else{
                    this.arr[x][y] = 0;
                }
            }
        }
        draw();
    }

    function constructor(size, scheduleRate){
        this.arr;
        this.a = [ 111, 222, 333, 444, 555, 666, 777, 888, 999/*, AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'*/];
        this.size = size;
        this.arr = this.generate();
        this.scheduler;

        this.c = $('#tiled-bg');
        this.w = this.c.width();
        this.h = this.c.height();

        this.cc = this.c[0].getContext('2d');
        this.cc.canvas.width = this.w;
        this.cc.canvas.height = this.h;
        this.draw();

        this.scheduler = setInterval(() => updt(), scheduleRate);

        return this;
    }

}

