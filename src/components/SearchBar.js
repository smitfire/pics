import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="imgsearch">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              name="imgsearch"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
