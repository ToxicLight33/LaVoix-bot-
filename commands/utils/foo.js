const { MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('primary-button')
            .setLabel('Primary')
            .setStyle('PRIMARY'),

        new MessageButton()
            .setCustomId('secondary-button')
            .setLabel('Secondary')
            .setStyle('SECONDARY'),
        
        new MessageButton()
            .setCustomId('success-button')
            .setLabel('Success')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('danger-button')
            .setLabel('Danger')
            .setStyle('DANGER'),

        new MessageButton()
            .setURL('http://stevenpapier.space')
            .setLabel('Lien')
            .setStyle('LINK'),
    )

module.exports = { 
    name: 'foo',
    permissions: ['SEND_MESSAGES'],
    description: 'Foo',
    async run(client, msg, args) {     
        await msg.channel.reply({content: 'Cliquer les boutons', components: [buttons]})
    },
    async runInteraction(client, interaction) {    
        await interaction.reply({content: 'Cliquer les boutons', components: [buttons]})
    },
}