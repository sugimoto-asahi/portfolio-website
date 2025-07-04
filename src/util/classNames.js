/**
 * Constructs a className string from all the args, disregardign falsely values
 * like undefined, null, etc.
 * @param args
 * @returns {string}
 */
function classNames(...args) {
    return args.filter(Boolean).join(' ');
}

export default classNames;