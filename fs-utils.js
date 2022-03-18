const fs = require('fs/promises');

const getSimpsons = async () => {
  const readfile = await fs.readFile('./simpsons.json', 'utf-8');
  const fileContent =  await JSON.parse(readfile);

  return fileContent;
}

module.exports = { getSimpsons };
