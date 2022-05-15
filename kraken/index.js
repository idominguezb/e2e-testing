const fs = require('fs');
const path = require('path');

const changeFileExtension = (feature = '') => {
    const dir_name = './features/';
    const main_extension = 'feature';
    const alternative_extension = 'featur';

    const featureFilename = {
        "3.42": 'ghost3_42',
        "4.47": 'ghost4_47',
    }[feature];

    fs.readdir(dir_name, (err, files) => {
        if (err) return err;

        files.forEach((file) => {
            const fileName = file.toString().split('.').slice(0, -1).join('.');

            if(! path.extname(file).includes('feat')) return;

            const extension =
                featureFilename === undefined || fileName === featureFilename
                    ? main_extension
                    : alternative_extension;

            const newFile = `${dir_name}${fileName}.${extension}`;

            fs.rename(`${dir_name}${file}`, newFile, (err) => {
                if (err) return err;
            });
        });
    });
};

((version) => {
    if(version === undefined) {
        return changeFileExtension();
    } 
    
    if (version === "v3") {
        return changeFileExtension('3.42')
    }

    return changeFileExtension('4.47')
})(process.argv[2])