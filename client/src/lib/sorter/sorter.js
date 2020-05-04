import React, { Component } from "react";

class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextSorted: false,
      isCreationDateSorted: false,
    };
  }

  sortByText(dataPath, keyPath) {
    dataPath.sort((a, b) => {
      const itemA = a[keyPath].toUpperCase();
      const itemB = b[keyPath].toUpperCase();

      if (!this.state.isTextSorted) {
        this.setState({
          isTextSorted: true,
        });
        if (itemA < itemB) return -1;
        else if (itemA > itemB) return 1;
      }

      if (this.state.isTextSorted) {
        this.setState({
          isTextSorted: false,
        });
        if (itemA < itemB) return 1;
        else if (itemA > itemB) return -1;
      }

      return 0;
    });
  }
}

export default Sorter;
