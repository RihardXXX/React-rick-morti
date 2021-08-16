import React, { useState, useEffect } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';
import PropTypes from 'prop-types';

import './item-details.css';

const ItemDetails = ({ idItem, getData, children }) => {
  const [loading, setLoading] = useState(true);
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);

  const setItem = (itemDetail) => {
    setLoading(false);
    setItemDetail(itemDetail);
  };

  const onError = (err) => {
    setError(err);
  };

  const onLoadedItemDetail = () => {
    if (!idItem) return;
    setLoading(true);
    getData(idItem).then(setItem).catch(onError);
  };

  useEffect(() => {
    onLoadedItemDetail();
  }, [idItem]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  let result;

  if (itemDetail) {
    result = (
      <React.Fragment>
        <ErrorButton />
        <div className="wrapper-person-details">
          <div className="person-detail-img">
            <Image src={itemDetail.image} alt="img" />
          </div>
          <div className="random-planet-text">
            <h3>{itemDetail.name}</h3>
            <ul className="list-group">
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { item: itemDetail });
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="person-details">
      <div className="card border-primary mb-3">
        <div className="card-body">{result}</div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  idItem: PropTypes.number,
  getData: PropTypes.func,
};

const Image = ({ src }) => {
  if (!src) return null;

  return <img src={src} alt="img" />;
};

export default ItemDetails;
