const prefix = '!'

module.exports = { 
    name: 'messageCreate',
    once: false,
    execute(client, msg) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);

        if (!msg.member.permissions.has([cmd.permissions])) return msg.reply(`Ici la voix, tu n'es pas autorisé à utiliser cette commande.`)

        if (cmd) cmd.run(client, msg, args);
    },
};