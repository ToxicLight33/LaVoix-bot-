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
        .setDescription(`\n1. Il est interdit de divulguer son secret ou une mission secrète.\n2. Les spectateurs ne peuvent communiquer avec les candidats.\n 3. Les candidats doivent effectuer leur recherche dans les salons prévus à cet effet.\n 4. Les échanges à propos du jeu doivent se faire sur le serveur.\n5. La divulgation de son secret entraîne l'élimination du jeu.\n6. Le non-respect d'un commandements entraîne l'élimination du jeu.\n7. Il est obligatoire d'agir de manire respectueuse au sein de la Maison des Secrets.\n8. Il est conseillé de solliciter les Présentateurs dans vos confessionals si le doute vous gagne.\n9. Les buzzs se passent en secret et dans votre confessionnal.\n10. Les règles qui coulent de source mais ne sont pas notées ne tarderont pas à être rappelé.`)
        .setColor('#ea4e98')
        .setFooter({text: 'La Voix', iconURL: client.user.displayAvatarURL()});
        
        Commandements.send({content: "Ici la Voix,", embeds: [rules]})
    }
}