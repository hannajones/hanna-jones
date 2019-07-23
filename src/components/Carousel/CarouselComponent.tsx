import * as React from 'react';
import * as cx from 'classnames';

// components
import ChevronLeft from '../../assets/icons/ChevronLeft';
import ChevronRight from '../../assets/icons/ChevronRight';
import Circle from '../../assets/icons/Circle';

// types
import { ReducerAction } from '../../sharedTypes';

// styles
import './CarouselComponentStyles.scss';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImageComponent';

// TODO: split the logic from the render
interface CarouselComponentProps {
  images: string[];
}

interface CarouselState {
  index: number;
}

enum CarouselReducerActions {
  NEXT = 'next',
  PREVIOUS = 'previous',
  JUMP_TO_INDEX = 'jumpToIndex'
}

type CarouselReducerAction = ReducerAction<CarouselReducerActions>;

interface CarouselActions {
    navigateForward: () => void;
    navigateBack: () => void;
    navigateTo: (index: number) => void;
}

const defaultState: CarouselState = {
  index: 0
};

const useCarouselReducer = (length: number) => (
  function(state: CarouselState, action: CarouselReducerAction): CarouselState {
    switch (action.type) {
      case CarouselReducerActions.NEXT:
        return {
          ...state,
          index: (state.index + 1) % length
        };

      case CarouselReducerActions.PREVIOUS:
        return {
          ...state,
          index: ((state.index - 1) + length) % length
        };

      case CarouselReducerActions.JUMP_TO_INDEX:
        return {
          ...state,
          index: action.index
        };

      default:
        return state;
    }
  }
);

function createCarouselActions(dispatch: React.Dispatch<CarouselReducerAction>): CarouselActions {
  return {
    navigateForward: () => {
      dispatch({ type: CarouselReducerActions.NEXT });
    },
    navigateBack: () => {
      dispatch({ type: CarouselReducerActions.PREVIOUS });
    },
    navigateTo: (index: number) => {
      dispatch({ type: CarouselReducerActions.JUMP_TO_INDEX, index });
    }
  };
}

const CarouselComponent: React.FunctionComponent<CarouselComponentProps> = ({ images }) => {
  const carouselReducer = useCarouselReducer(images.length);
  const [state, dispatch] = React.useReducer(carouselReducer, defaultState);
  const carouselActions = createCarouselActions(dispatch);
  const hasMultipleImages = images.length > 1;

  return (
    <div className="carousel">
      <div className="carousel__imageContainer">
        {/* <img className="carousel__image" src={images[state.index]} /> */}
        <ProgressiveImage className="carousel__image" main={{ src: images[state.index] }} />
        {
          hasMultipleImages &&
          <>
            <a className="carousel__nav carousel__nav--back" onClick={carouselActions.navigateBack}>{ChevronLeft}</a>
            <a className="carousel__nav carousel__nav--forward" onClick={carouselActions.navigateForward}>{ChevronRight}</a>
          </>
        }
        {
          hasMultipleImages &&
          <div className="carousel__nav carousel__nav--jump">
            {
              images.map((_, index) => (
                <a
                  key={index}
                  className={cx('carousel__nav__item', { 'carousel__nav__item--active': index === state.index })}
                  onClick={() => carouselActions.navigateTo(index)}
                >
                    {Circle}
                </a>
              ))
            }
          </div>
        }
      </div>
    </div>
  );
};

export default CarouselComponent;
