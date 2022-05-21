const chalk = require('chalk');
const dayjs = require("dayjs");

const format = '{tstamp} {tag} {txt}\n';

function error(content) {
    write(content, 'black', 'bgRed', 'ERROR', true)
}

function write(content, tagColor, bgTagColor, tag, error = false) {
    const timestamp = `[${dayjs().format('DD/MM - HH:mm:ss')}]`;
    const logTag = `[${tag}]`;
    const stream = error ? process.stderr : process.stdout;

    const item = format
        .replace('{tstamp}', chalk.gray(timestamp))
        .replace(`{tag}`, chalk[bgTagColor][tagColor](logTag))
        .replace(`{txt}`, chalk.white(content));

    stream.write(item);
}

module.exports = { error };