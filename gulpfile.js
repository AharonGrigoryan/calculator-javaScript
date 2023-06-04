import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { deleteSync } from 'del';

const sass = gulpSass(dartSass);

gulp.task('scss', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass', () => {
    return gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', (done) => {
    deleteSync([
        'css/scss.css',
        'css/sass.css',
    ]);
    return done();
});

gulp.task('watch', () => {
    return gulp.watch([
        'sass/**/*.scss',
        'sass/**/*.sass'
    ], (done) => {
        return gulp.series(['clean', 'scss', 'sass'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'scss', 'sass']));