/** This module (reusable component) sorts data in a table */

import React, { Component } from 'react';

class Sorter extends Component {
  /**
   * @constructor
   * @param {object} props - A base class construction in React.js
   */
  constructor(props) {
    super(props);
    this.state = {
      isTextSorted: false,
      isCreationDateSorted: false,
    };
  }

  /**
   * @param {array} dataPath - The name of data for sorting
   * @param {string} keyPath - The path to data from array for sorting
   * @return {array} - The array of sorted values
   */
  sortByText(dataPath, keyPath) {
    dataPath.sort((a, b) => {
      const itemA = a[keyPath].toUpperCase();
      const itemB = b[keyPath].toUpperCase();

      if (!this.state.isTextSorted) {
        this.setState({
          isTextSorted: true,
        });
        if (itemA < itemB) return -1;
        if (itemA > itemB) return 1;
      }

      if (this.state.isTextSorted) {
        this.setState({
          isTextSorted: false,
        });
        if (itemA < itemB) return 1;
        if (itemA > itemB) return -1;
      }

      return 0;
    });
  }
}

export default Sorter;
