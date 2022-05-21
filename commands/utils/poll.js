const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    permissions: ['SEND_MESSAGES'],
    description: 'Poster un sondage',
    async run(client, msg, args) {
       if (!args[0]) return msg.reply(`Merci d'entrer une question pour votre sondage`)

       const sondage = new MessageEmbed()
           .setTitle('Sondage')
           .setColor('#2451b9')
           .setDescription(args.slice(0).join(' '))
           .setTimestamp()
           .setFooter({ text: `Nouveau sondage généré par ${msg.author.tag}.`});

       const poll = await msg.reply({ embeds: [sondage], fetchReply: true});
       poll.react('✔️');
       poll.react('❌');

    },
    options: [
        {
            name: 'title',
            description: 'Tapez le titre de votre sondage',
            type: 'STRING',
            required: true,
        },
        {
            name: 'content',
            description: 'Tapez la question de votre sondage',
            type: 'STRING',
            required: true,
        }
    ],
    async runInteraction(client, interaction) {
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');

        const sondage = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('#2451b9')
            .setDescription(pollContent)
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}.`});

        const poll = await interaction.reply({ embeds: [sondage], fetchReply: true});
        poll.react('✔️');
        poll.react('❌');
    }
}