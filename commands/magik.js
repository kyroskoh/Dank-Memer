exports.run = function (client, msg, args) {
    let avatarurl = msg.mentions.users.size > 0 ? msg.mentions.users.first().displayAvatarURL.replace("gif", "png") : msg.author.displayAvatarURL.replace("gif", "png")
    const needle = require('needle')

    let options = {
        headers: {
            "Api-Key": "192aa6cf36a84f69ac3f0435b8676ddf"
        }
    }
    needle.get(`https://martmists.com/api/v1/magik?url=${avatarurl}`, (err, res) => {

        if (err) return console.log(Date() + err)
        msg.channel.startTyping().then(() => {
            msg.channel.sendFile(res.body, "magik.png").then(() => {
                msg.channel.stopTyping(true)
            })
        })
    })
}