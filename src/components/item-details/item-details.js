import React, { Component } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';
import PropTypes from 'prop-types';

import './item-details.css';
export default class ItemDetails extends Component {
  state = {
    loading: true,
    itemDetail: null,
    error: false,
  };

  componentDidMount() {
    this.onLoadedItemDetail();
  }

  componentDidUpdate(prevProps) {
    if (this.props.idItem !== prevProps.idItem) {
      this.onLoadedItemDetail();
    }
  }

  setItemDetail = (itemDetail) => {
    this.setState((state) => ({ loading: false, itemDetail: itemDetail }));
  };

  onError = (err) => {
    this.setState((state) => ({ error: true }));
  };

  onLoadedItemDetail() {
    const { idItem, getData } = this.props;
    if (!idItem) return;

    this.setState((state) => ({ loading: true }));
    getData(idItem).then(this.setItemDetail).catch(this.onError);
  }

  render() {
    const { loading, itemDetail, error } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return (
      <div className="person-details">
        <div className="card border-primary mb-3">
          <div className="card-body">
            <ErrorButton />
            <div className="wrapper-person-details">
              <div className="person-detail-img">
                <Image src={itemDetail.image} alt="img" />
              </div>
              <div className="random-planet-text">
                <h3>{itemDetail.name}</h3>
                <ul className="list-group">
                  {React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item: itemDetail });
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  idItem: PropTypes.number,
  getData: PropTypes.func,
};

const Image = ({ src }) => {
  if (!src) return null;

  return <img src={src} alt="img" />;
};
