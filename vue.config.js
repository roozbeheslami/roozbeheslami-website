module.exports = {
	terser: {
        minify: 'uglifyJs',
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
	publicPath: "",
	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].title = "Roozbeh Eslami";
			return args;
		});
	}
};