class Sorter {
  sortByText(dataArray, dataKey, booleanName = false) {
    this.setState({
      stateToChange: dataArray.sort((a, b) => {
        const itemA = a[`${dataKey}`].toUpperCase();
        const itemB = b[`${dataKey}`].toUpperCase();

        if (!booleanName) {
          this.setState({
            [`${booleanName}`]: true,
          });
          if (itemA < itemB) return -1;
          else if (itemA > itemB) return 1;
        }

        if (booleanName) {
          this.setState({
            [`${booleanName}`]: false,
          });
          if (itemA < itemB) return 1;
          else if (itemA > itemB) return -1;
        }

        return 0;
      }),
    });
  }
}

export default Sorter;
