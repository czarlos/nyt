

var removeArgs = function (argsToStrip, args) {
    for(var key in argsToStrip) {
        delete args[argsToStrip[key]];
    }
    return args;
}

exports.removeArgs = removeArgs;
