const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        
        const logjoin = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL()})
            .setColor('#dc143c')
            .setDescription(`◊ Nom d'utilisateur: ${member.displayName}
            ◊ Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            ◊ Rejoint le: <t:${parseInt(member.user.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.user.joinedTimestamp / 1000)}:R>)
            ◊ Quitté le: <t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)`)
            .setTimestamp()
            .setFooter({ text: `L'utilisateur a quitté!`});

        const logChannel = client.channels.cache.get('976494140957294622');
        logChannel.send({embeds: [logjoin]});

        member.guild.channels.create(`spam-${member.user.username}`,{
        topic: 'Ton channel de recherche privé',
        permissionOverwrites: [
            {id: member.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']},
            {id: member.guild.roles.everyone,
            deny: ['VIEW_CHANNEL']}],
        parent: '976371128257876028'
        });

        member.guild.channels.create(`confess-${member.user.username}`,{
            topic: 'Ton confessionnal',
            permissionOverwrites: [
                {id: member.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']},
                {id: member.guild.roles.everyone,
                deny: ['VIEW_CHANNEL']}],
            parent: '976365565197303868'
        });
    
        logChannel.send(`Salons spam et confess créés pour ${member}`)
    }
}