import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { layout, color, space } from 'styled-system';
import { get } from 'lodash';
import { getLoginDetails } from '../selectors/login';
import { getProducts } from '../selectors/products';
import { FETCH_PRODUCTS, fetchProducts } from '../actions/products';
import { isLoadingSelector, getErrorSelector } from '../selectors/network';
import { useRequestIsDone } from '../hooks/network';
import Loading from './Loading';
import Logout from './Logout';
import Box from './Box';

import AppLayout from './AppLayout';

const Dashboard = ({
  login,
  history,
  dispatch,
  products,
  productsLoading,
  productsError
}) => {
  const { loading } = login;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useRequestIsDone(FETCH_PRODUCTS, () => {
    if (Boolean(productsError)) {
      console.log('Products loaded with the error:', productsError);
    } else {
      console.log('Products loaded without an error');
    }
  });

  return (
    <AppLayout history={history}>
      <Heading p="5px" color="persianGreen" isHeading={true}>
        Hello World
      </Heading>
      <Heading m="10px" color="lightBlue" bg="persianGreen">
        By the power of styled-components!
      </Heading>

      <Box display="flex" flexDirection="column" alignItems="center">
        {productsLoading && <StyledLoading />}

        {Boolean(products.length) &&
          products.map(({ id, name }) => <div key={id}>{name}</div>)}

        {productsError && (
          <Box
            bg="red"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="powderWhite">
            {get(productsError, 'message')}
          </Box>
        )}
      </Box>

      <Logout history={history} loading={loading} />
    </AppLayout>
  );
};

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  ${layout}
  ${color}
  ${space}
`;

const StyledLoading = styled(Loading)`
  &&& {
    position: static;
  }
`;

const mapStateToProps = (state) => ({
  login: getLoginDetails(state),
  products: getProducts(state),
  productsLoading: isLoadingSelector(state, FETCH_PRODUCTS),
  productsError: getErrorSelector(state, FETCH_PRODUCTS)
});

export default withRouter(connect(mapStateToProps, null)(Dashboard));
