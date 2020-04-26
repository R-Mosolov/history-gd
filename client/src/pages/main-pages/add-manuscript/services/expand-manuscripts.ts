import manuscriptsBase from "../../../../states/manuscripts-data/manuscripts-base";
import manuscriptsDetails from "../../../../states/manuscripts-data/manuscripts-details";

function expandManuscripts(): void {
  // Initializing variables
  const manuscriptType: string = (<HTMLInputElement>(
    document.getElementById("manuscript-type")
  )).value;
  const manuscriptTitle: string = (<HTMLInputElement>(
    document.getElementById("manuscript-title")
  )).value;
  const manuscriptAuthor: string = (<HTMLInputElement>(
    document.getElementById("manuscript-author")
  )).value;
  const manuscriptContent: string = (<HTMLInputElement>(
    document.getElementById("manuscript-content")
  )).value;

  // Adding new data to project's general data
  if (manuscriptType && manuscriptTitle && manuscriptAuthor) {
    manuscriptsBase.push({
      title: manuscriptTitle,
      type: manuscriptType,
      author: manuscriptAuthor,
      creationDate: new Date().getFullYear(),
    });
  }
  if (manuscriptContent) {
    manuscriptsDetails.push({
      content: manuscriptContent,
    });
  }

  alert("Рукопись успешно создана!");
}

export default expandManuscripts;
