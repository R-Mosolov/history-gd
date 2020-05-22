import React, { Component } from "react";

import manuscriptsBase from "../../states/manuscripts-data/manuscripts-base";

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBank: manuscriptsBase,
    };
  }

  searchData() {
    const queryToSearch = document.getElementById("query-to-search").value;

    this.setState({
      dataBank: this.state.dataBank.filter((item) => {
        for (let currentItem of this.state.dataBank.title)
          if (item === currentItem) {
            return alert(item);
          }

        return alert("Not found");
      }),
    });
  }

  render() {
    return (
      <input
        id="query-to-search"
        className="input"
        placeholder="Поисковый запрос..."
        onChange={
          () => this.searchData()
          //   () => {
          //   const queryToSearch = document.getElementById("query-to-search").value;
          //
          //   if (queryToSearch === "1") {
          //     this.setState({
          //       dataBank: this.state.dataBank.pop(),
          //     });
          //     return alert(JSON.stringify(this.state.dataBank));
          //   }
          //   // if (queryToSearch === "2") return alert(this.state.dataBank[1].title);
          //   // if (queryToSearch === "3") return alert(this.state.dataBank[2].title);
          //
          //   // return alert("Not found");
          // }
        }
      />
    );
  }
}

export default Searcher;
