module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 10 versions', 'Firefox >= 1', 'Android >= 4.0', 'iOS >= 8']
        })
    ]
};