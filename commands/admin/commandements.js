const { MessageEmbed } = require('discord.js')

module.exports = { 
    name: 'commandements',
    permissions: ['ADMINISTRATOR'],
    description: 'Envoyez les commandements',
    run(client, msg, args) {
        const Commandements = client.channels.cache.get('977137826460221440');
        const rules = new MessageEmbed()
        .setTitle('Les Commandements de la maison des secrets')
        .setThumbnail('')
        .addFields(
            {

            })
        .setFooter('La Voix');
        
        Commandements.send({content: "", embed: [rules]})
    }
}