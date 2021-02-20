import * as React from 'react';

import { connect } from 'react-redux';
import TYPES from '../../store/types';

import Logo from './logo/logo';

export interface Props {
  btnOnWorkArea?: any;
  isWorkArea?: boolean;
  setAuthentication?: any;
}

const { SET_AUTHENTICATION } = TYPES;

const mapStateToProps = (state: object) => {
  return {
    store: state,
  };
};

const mapDispatchToProps: any = (dispatch: (type: object) => object) => {
  return {
    setAuthentication: () => dispatch({ type: SET_AUTHENTICATION }),
  };
};

class TopNavigation extends React.Component<Props, {}> {
  render() {
    const { btnOnWorkArea, isWorkArea = true } = this.props;

    return (
      <header className="fixed-top vw-100 bg-white">
        <div className="top-navigation d-flex justify-content-between pt-2 pb-2 shadow-sm">
          <div>
            <Logo />
          </div>

          <div className="mr-3">
            {btnOnWorkArea}
            {isWorkArea ? (
              <button
                className="on-work-table mr-lg-4 btn btn-secondary"
                onClick={this.props.setAuthentication}
              >
                Выйти
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
