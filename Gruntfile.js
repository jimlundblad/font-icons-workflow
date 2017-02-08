module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            exportIcons: {
                command: 'sketchtool export slices assets/incharge.sketch --output=assets/icons/'
            }
        },
        webfont: {
            icons: {

                src: 'assets/icons/*.svg',
                dest: '../assets/fonts/',
                destScss: '../assets/scss/foundation/components/',
                options: {
                    baseClass: 'iconography',
                    font: 'incharge-icons',
                    fontHeight: 96,
                    normalize: false,
                    ascent: 84,
                    descent: 12,
                    destHtml: 'assets/',
                    stylesheets: ['scss'],
                    relativeFontPath: '/assets/fonts',
                    templateOptions: {
                        classPrefix: 'incharge-icons-'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', [ 'shell:exportIcons', 'webfont:icons' ]);

};
