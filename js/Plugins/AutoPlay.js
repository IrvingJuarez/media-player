function AutoPlay(config){
    this.media = config.media
}

AutoPlay.prototype.mute = function(){
    if(this.media.muted){
        this.media.muted = false
    }else{
        this.media.muted = true
    }
}

AutoPlay.prototype.run = function(){
    this.media.muted = true
    this.media.play()
}

export default AutoPlay