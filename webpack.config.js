var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js' // входная точка - исходный файл
    ],
    output: {
        path: path.join(__dirname, 'public'), // путь к каталогу выходных файлов - папка public
        filename: 'bundle.js', // название создаваемого файла
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js/, // определяем тип файлов
                loaders: ['babel-loader'], // определяем загрузчик
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
            }
        ]
    }
}