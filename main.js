import MediaPlayer from "./js/MediaPlayer.js"
import AutoPlay from "./js/Plugins/AutoPlay.js"

const video = document.querySelector("video")
const button = document.querySelector("button")
const muteButton = document.querySelector(".muteBtn")


const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay({
            media: video
        })
    ]
})

button.onclick = () => player.play()
muteButton.onclick = () => player.plugins[0].mute()