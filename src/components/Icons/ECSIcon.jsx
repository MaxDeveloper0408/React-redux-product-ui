import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '@material-ui/core/SvgIcon';

const ECSIcon = ({ size, ...rest }) => (
  <SVGIcon viewBox="0 0 100 100" style={{ fontSize: `${size}px` }} {...rest}>
    <polygon fill="#9d5025" points="19.64 22.51 16 24.32 16 75.68 19.64 77.49 33.98 51.07 19.64 22.51" />
    <polygon fill="#9d5025" points="30.72 31.78 36.08 24.19 60.1 34.87 54.5 35.76 30.72 31.78" />
    <polygon fill="#9d5025" points="26.56 68.77 32.46 76.88 60.1 64.95 54.76 64.12 26.56 68.77" />
    <polygon fill="#f58536" points="28.12 75.5 19.64 77.49 19.64 22.51 28.12 24.44 28.12 75.5" />
    <polygon fill="#9d5025" points="23.66 20.5 28.12 18.27 36.52 53.56 28.12 81.73 23.66 79.5 23.66 20.5" />
    <polygon fill="#9d5025" points="54.46 64.08 60.1 64.95 65.26 50.58 60.1 34.87 54.46 35.76 54.46 64.08" />
    <polygon fill="#f58536" points="36.8 79.28 28.12 81.73 28.12 18.27 36.8 20.73 36.8 79.28" />
    <polygon fill="#f58536" points="66.01 63.84 28.12 70.88 28.12 81.73 66.01 71.03 66.01 63.84" />
    <polygon fill="#f58536" points="66.08 36 28.12 28.79 28.12 18.27 66.08 29.04 66.08 36" />
    <polygon fill="#f58536" points="60.1 27.34 66.19 29.02 66.19 71.03 60.1 72.7 60.1 27.34" />
    <polygon fill="#6b3a19" points="84 44.45 67.7 45.22 61.94 44.83 78.42 31.55 84 44.45" />
    <polygon fill="#9d5025" points="61.94 44.83 78.42 43.9 78.42 31.55 61.94 34.22 61.94 44.83" />
    <polygon fill="#6b3a19" points="46.43 43.79 63.13 26.96 71.62 43.22 54.31 44.32 46.43 43.79" />
    <polygon fill="#9d5025" points="46.43 43.79 63.13 42.37 63.13 26.96 46.43 30.87 46.43 43.79" />
    <polygon fill="#9d5025" points="61.94 55.39 84 55.77 78.42 68.67 61.94 66 61.94 55.39" />
    <polygon fill="#9d5025" points="46.43 56.43 71.62 57.01 63.13 73.26 46.43 69.36 46.43 56.43" />
    <polygon fill="#fbbf93" points="46.43 56.43 63.13 57.86 71.62 57.01 54.31 55.9 46.43 56.43" />
    <polygon fill="#fbbf93" points="84 55.77 67.7 55.01 61.94 55.39 78.42 56.33 84 55.77" />
    <polygon fill="#f58536" points="78.42 43.9 84 44.45 84 33.22 78.42 31.55 78.42 43.9" />
    <polygon fill="#f58536" points="71.62 43.22 63.13 42.37 63.13 26.96 71.62 29.51 71.62 43.22" />
    <polygon fill="#f58536" points="78.42 56.33 84 55.77 84 67 78.42 68.67 78.42 56.33" />
    <polygon fill="#f58536" points="71.62 57.01 63.13 57.86 63.13 73.26 71.62 70.72 71.62 57.01" />
  </SVGIcon>
);

ECSIcon.propTypes = {
  size: PropTypes.number
};

ECSIcon.defaultProps = {
  size: 24,
};

export default ECSIcon;
