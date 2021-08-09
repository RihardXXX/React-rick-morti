import React, { Component } from 'react';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {label}: {item[field]}
    </li>
  );
};

export { Record };

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
                <img src={itemDetail.image} alt="img" />
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

// const ItemDetailShow = ({ itemDetail }) => {
//   const { name, gender, image, species, type } = itemDetail;
//   return (
//     <React.Fragment>
//       <div className="person-detail-img">
//         <img src={image} alt="img" />
//       </div>
//       <div className="random-planet-text">
//         <h3>{name}</h3>
//         <ul className="list-group">
//           <li className="list-group-item d-flex justify-content-between align-items-center">
//             gender: {gender}
//           </li>
//           <li className="list-group-item d-flex justify-content-between align-items-center">
//             species: {species}
//           </li>
//           <li className="list-group-item d-flex justify-content-between align-items-center">
//             type: {type}
//           </li>
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// };
