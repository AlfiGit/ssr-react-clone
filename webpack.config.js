module.exports = {
	mode: "development",
	entry: './src/index.js',
	module: {
		rules: [
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
		]
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/public/',
		libraryTarget: 'umd'
	}
}