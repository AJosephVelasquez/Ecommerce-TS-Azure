module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['tsx/cjs'],
    require: [
      'step-definitions/**/*.ts',
      'features/support/**/*.ts',
    ],
    format: ['progress'],
  },
};