exports.__esModule = true;
const manuscripts_base_1 = require('../../../../data/manuscripts/manuscripts-base');
const manuscripts_details_1 = require('../../../../data/manuscripts/manuscripts-details');

function expandManuscripts() {
  // Initializing variables
  const manuscriptType = document.getElementById('manuscript-type').value;
  const manuscriptTitle = document.getElementById('manuscript-title').value;
  const manuscriptAuthor = document.getElementById('manuscript-author').value;
  const manuscriptContent = document.getElementById('manuscript-content').value;
  // Adding new data to project's general data
  if (manuscriptType && manuscriptTitle && manuscriptAuthor) {
    manuscripts_base_1.default.push({
      title: manuscriptTitle,
      type: manuscriptType,
      author: manuscriptAuthor,
      creationDate: new Date().getFullYear(),
    });
  }
  if (manuscriptContent) {
    manuscripts_details_1.default.push({
      content: manuscriptContent,
    });
  }
  alert('Рукопись успешно создана!');
}
exports.default = expandManuscripts;
