function MediaPlayer(config){
    this.media = config.el,
    this.plugins = config.plugins

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.map(plugin => {
        plugin.run()
    })
}

MediaPlayer.prototype.play = function(){
    if(this.media.paused){
        this.media.play()
    }else{
        this.media.pause()
    }
}

export default MediaPlayer