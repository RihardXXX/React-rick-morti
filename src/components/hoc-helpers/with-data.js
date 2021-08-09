import React, { Component } from 'react';
import Loader from '../loader';
import Error from '../error';

const WithData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    onLoadedItems = (data) => {
      this.setState((state) => ({
        data: data,
        loading: false,
        error: false,
      }));
    };

    onError = (error) => {
      this.setState((state) => ({ error: error }));
    };

    componentDidMount() {
      getData().then(this.onLoadedItems).catch(this.onError);
    }
    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Loader />;
      }

      if (error) {
        return <Error />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
