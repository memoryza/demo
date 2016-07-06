var path = require('path');
function abs(dir) {
	return path.join(__dirname, '../', dir);
}

module.exports = {
	abs: abs,
	srcPath: abs('htdocs'),
	buildPath: abs('build')
}