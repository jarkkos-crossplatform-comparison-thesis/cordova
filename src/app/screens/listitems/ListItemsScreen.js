import React from 'react';

import "app/App.css";
import AppBody from "app/components/appBody";

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
    
    let screenStateComponent;
    if (listItems) {
      screenStateComponent = this._renderLoadedListItems(listItems);
    }
    else if (error) {
      screenStateComponent = this._renderError(error);
    }
    else {
      screenStateComponent = this._renderLoading();
    }

    return (
      <AppBody>{screenStateComponent}</AppBody>
    );
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
        <img src={item.imageSrc} className="listitem-image" width={80} height={80} />
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