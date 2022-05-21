module.exports = { 
    name: 'ready',
    once: true,
    async execute(client, msg) {
        msg.channels.cache.get('976363865577250846').send(`Ici ${client.user.username}, je suis en ligne.`);
        //console.log(`Ici ${client.user.username}`)

        //const SSGuild = await client.guilds.cache.get('976361138142986250');
        //SSGuild.commands.set(client.commands.map(cmd => cmd)); //Upload de Slash commands instantané.

        client.application.commands.set(client.commands.map(cmd => cmd)); //1h de upload pour les Slash Commands
    }
}