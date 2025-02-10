const path = require('path');

module.exports = {
	publicPath: "",
	outputDir: path.resolve(__dirname, './docs'),
	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].title = "Roozbeh Eslami";
			return args;
		});
	}
};