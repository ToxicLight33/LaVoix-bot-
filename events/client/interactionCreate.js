module.exports = { 
    name: 'interactionCreate',
    once: false,
    execute(client, interaction) {
       if (interaction.isCommand() || interaction.isContextMenu()) {
           const cmd = client.commands.get(interaction.commandName);
           if (!cmd) return interaction.reply(`Cette commande n'existe pas`);

           if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: `Ici la voix, tu n'es pas autorisé à utiliser cette commande.`, ephemeral: true})

           cmd.runInteraction(client, interaction);
       }
    }
}