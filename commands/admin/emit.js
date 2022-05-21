module.exports = {
    name: 'emit',
    permissions: ['ADMINISTRATOR'],
    description: 'Emettre un event',
    run: (client, msg, args) => {
       if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove)$/)) return msg.reply(`Merci d'entrer un événement valide`)

       
       if (args[0] == 'guildMemberAdd') {
        client.emit('guildMemberAdd', msg.member);
        msg.reply({content: 'Event guildMemberAdd émit!'});
    } else {
        client.emit('guildMemberRemove', msg.member);
        msg.reply({content: 'Event guildMemberRemove émit!'});
    }
    },
    options: [
        {
            name: 'event',
            description: 'Choisir un event à émettre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                }
            ]
        }
    ],
    runInteraction: (client, interaction) => {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({content: 'Event guildMemberAdd émit!', ephemeral: true});
        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({content: 'Event guildMemberRemove émit!', epehemeral: true});
        }
    }
}