import gulp from 'gulp'
import name from 'vinyl-named'
import stream from 'webpack-stream'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import concat from 'gulp-concat'
import server from 'gulp-develop-server'
import pug from 'gulp-pug'
import autoprefixer from 'gulp-autoprefixer'

const options = {
    devtool: 'eval-source-map',
    watch: true,
    output: {
        publicPath: '/js/',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'img': path.resolve('./src/assets/img/')
        }
    },
    plugins: [
        new stream.webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.pug?$/,
            exclude: /(node_modules)/,
            loader: 'pug-html'
        }, {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }]

    }
}

/* @gulp: default */
gulp.task('default', ['dist', 'watch'], function() {
    server.listen({ path: './server.js', execArgv: ['--harmony'] })
})


/* @gulp: dist */
gulp.task('dist', ['vue', 'assets', 'stylus'], function() {
    return gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
})

/* @gulp: vue */
gulp.task('vue', function(done) {
    gulp.src('src/vue/bootstrap.js')
        .pipe(name())
        .pipe(plumber())
        .pipe(stream(options))
        .pipe(gulp.dest('dist/js'))
        .on('data', function() {
            if (!done.called) {
                done.called = true
                done()
            }
        })
})

/* @gulp: assets */
gulp.task('assets', function() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/'))
})

/* @gulp: stylus */
gulp.task('stylus', function() {
    return gulp.src('src/stylus/main.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
})

/* @gulp: watch */
gulp.task('watch', function() {
    gulp.watch('src/index.pug', ['dist'])
    gulp.watch('src/assets/**/*', ['assets'])
    gulp.watch('src/**/*.styl', ['stylus'])
})
