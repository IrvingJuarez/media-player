const video = document.querySelector("video")
const button = document.querySelector("button")
const player = new MediaPlayer({ el: video})

function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function(){
    if(this.media.paused){
        this.media.play()
    }else{
        this.media.pause()
    }
}

button.onclick = () => player.play()