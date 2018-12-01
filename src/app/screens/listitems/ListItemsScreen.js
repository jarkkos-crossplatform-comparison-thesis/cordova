import React from 'react';


export default class ListItemsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    this.props.loadData()
      .then(
        (data) => {
          this.setState({
            listItems: data,
            error: undefined
          });
        },
        (error) => {
          this.setState({
            listItems: undefined,
            error: error
          });
        });
  }

  render() {
    const { listItems, error } = this.state;
    if (listItems) {
      return this._renderLoadedListItems(listItems);
    }
    else if (error) {
      return this._renderError(error);
    }
    else {
      return this._renderLoading();
    }
  }

  _renderLoadedListItems(listItems) {
    return (
      <div>
        {listItems.map(this._renderListItem)}
      </div>
    );
  }

  _renderListItem(item, idx) {
    return (
      <div key={idx.toString()} className="listitem-container">
        <img src={item.imageSrc} className="listitem-image" width={100} height={100} />
        <span className="listitem-description">{item.description}</span>
      </div>
    );
  }

  _renderLoading() {
    return <progress></progress>;
  }

  _renderError(error) {
    return <span>{error.toString()}</span>
  }
}