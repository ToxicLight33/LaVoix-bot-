module.exports = { 
    name: 'say',
    permissions: ['ADMINISTRATOR'],
    description: 'Envoyez un message en tant que La Voix',
    run(client, msg, args) {
        const ChannelLaVoix = client.channels.cache.get('976367014056714300');
        ChannelLaVoix.send(`Ici La Voix,\n` + args.slice(0).join(' '));
        },
}