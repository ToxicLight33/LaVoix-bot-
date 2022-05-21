const { MessageEmbed } = require('discord.js');

module.exports = { 
    name: 'Profil',
    permissions: ['SEND_MESSAGES'],
    type: 'USER',
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new MessageEmbed()
        .setAuthor({name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://cdn-icons-png.flaticon.com/512/36/36411.png?w=360' : 'https://fotomelia.com/wp-content/uploads/edd/2015/03/humain-homme-femme-logo.png'})
        .setColor('WHITE')
        .setImage(member.user.displayAvatarURL())
        .addFields(
            {name: 'Nom', value: `${member.displayName}`, inline: true},
            {name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true},
            {name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true},
            {name: 'Roles', value: `${member.roles.cache.map(role => role).join(' | ').replace('| @everyone', ' ')}`},
            {name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`},
            {name: 'Objet manquant', value: 'objet', inline: true}
        )
        
        interaction.reply({embeds : [embed], ephemeral: true});
    },
}