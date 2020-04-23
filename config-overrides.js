// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#FE4101',
      '@link-color': '#000000',
      '@success-color': '#0FAC19',
      '@warning-color': '#FCA800',
      '@error-color': '#EB0000',
      '@font-size-base': '14px',
      '@heading-color': '#FE4101',
      '@text-color': '#000000',
      '@text-color-secondary': '#FE4101',
      '@disabled-color': 'rgba(0, 0, 0, 0.4)',
      '@border-radius-base': '5px',
      '@border-color-base': '#FE4101',
      '@box-shadow-base': '0 3px 0 rgba(0, 0, 0, 0.2)',
    },
  }),
);
