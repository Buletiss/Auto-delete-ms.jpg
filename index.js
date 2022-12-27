const fs = require('fs');
const dir = 'D:/MapleStory/maplestory/appdata/';

fs.readdir(dir, function (error, files) {
  files.map(function (imagem) {
    if (imagem.slice(0, 6) == 'Maple_') {
      fs.unlinkSync(dir + imagem, error => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
  if (error) {
    console.log('erro: ', error);
  } else {
    console.log('imagens deletadas com sucesso');
  }
});
