import PropTypes from 'prop-types';

import clsx from 'clsx';
import isNumber from 'lodash/isNumber';

const MODIFIERS = { both: '', top: '--top', bottom: '--bottom', left: '--left', right: '--right' };
const getMarginModifier = (type) => MODIFIERS[type];

function Margin({ className, xs, sm, md, lg, auto, side, children }) {
  const modifier = getMarginModifier(side);
  const getMarginSize = (size) => (isNumber(size) ? `-${size}` : '');

  return (
    <div
      className={clsx(
        {
          [`margin${modifier}`]: auto,
          [`margin-xs${getMarginSize(xs)}${modifier}`]: xs,
          [`margin-sm${getMarginSize(sm)}${modifier}`]: sm,
          [`margin-md${getMarginSize(md)}${modifier}`]: md,
          [`margin-lg${getMarginSize(lg)}${modifier}`]: lg,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

const margins = [true, 8, 16, 24, 32, 40, 48, 56, 64, 72];

Margin.propTypes = {
  ...Margin.propTypes,
  auto: PropTypes.bool,
  xs: PropTypes.oneOf(margins),
  sm: PropTypes.oneOf(margins),
  md: PropTypes.oneOf(margins),
  lg: PropTypes.oneOf(margins),
  side: PropTypes.oneOf(['both', 'top', 'bottom', 'left', 'right']),
};

Margin.defaultProps = {
  ...Margin.defaultProps,
  auto: false,
  side: 'both',
  xs: null,
  sm: null,
  md: null,
  lg: null,
};

export default Margin;
