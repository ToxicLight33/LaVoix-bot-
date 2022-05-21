const { MessageEmbed } = require('discord.js')

module.exports = { 
    name: 'commandements',
    permissions: ['ADMINISTRATOR'],
    description: 'Envoyez les commandements',
    run(client, msg, args) {
        const Commandements = client.channels.cache.get('977137826460221440');
        const rules = new MessageEmbed()
        .setTitle('Les Commandements de la maison des secrets')
        .setThumbnail('https://www.kindpng.com/picc/m/108-1084057_rules-discord-clipart-png-download-rules-clipart-transparent.png')
        .setDescription('')
        .setFooter({text: 'La Voix', iconURL: client.user.displayAvatarURL()});
        
        Commandements.send({content: "", embed: [rules]})
    }
}