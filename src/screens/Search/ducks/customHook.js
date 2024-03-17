import {useEffect} from 'react';
import {APIRequest} from '../../../lib/libapi/service';
import {useDispatch} from 'react-redux';
import {fetchData} from '../../Home/ducks/data/Home.reducer';

const apiRequest = new APIRequest();

const useFetchFlightList = () => {
  const dispatch = useDispatch();

  const getFlightData = async () => {
    const res = await apiRequest.get(
      'https://api.npoint.io/378e02e8e732bb1ac55b',
    );
    if (res.response) {
      dispatch(
        fetchData({
          response: res.response,
          loading: false,
          err: false,
        }),
      );
    } else if (res.error) {
      dispatch(fetchData({error: res.error, loading: false, response: []}));
    }
  };

  useEffect(() => {
    getFlightData();
  }, []);
};

export default useFetchFlightList;
