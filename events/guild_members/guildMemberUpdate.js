const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guildMemberUpdate',
    once: false,
    async execute(client, member, oldMember, newMember) {
        const logChannel = client.channels.cache.get('976494140957294622');
        if (!oldMember.roles.cache.has('976361308440129566') && newMember.roles.cache.has('976361308440129566')) return 

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