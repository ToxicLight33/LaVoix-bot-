const { MessageEmbed } = require('discord.js');

module.exports = { 
    name: 'ping',
    permissions: ['SEND_MESSAGES'],
    description: 'Commande Ping',
    run(client, msg, args) {
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true},
                {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true},
            )
            .setTimestamp()
            .setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL()});

            msg.channel.send({embeds: [embed]});
    },
    async runInteraction(client, interaction) {
        const tryPong = await interaction.reply({content: 'Calcul en cours...', fetchReply:true})
        
        const embed = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            {name: 'Latence BOT', value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true},
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
        )
        .setTimestamp()
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
        
        interaction.editReply({content: ' ', embeds : [embed]});
    },
}