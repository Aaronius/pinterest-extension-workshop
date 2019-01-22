'use strict';

module.exports = function(settings) {
  if (window.pintrk) {
    window.pintrk('track', 'checkout', settings);
  } else {
    turbine.logger.error('The Pinterest library must be loaded before tracking a checkout.');
  }
};
