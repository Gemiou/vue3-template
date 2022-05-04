module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 'off', //требовать для props дефолтных значений, кроме Boolean значений
    'vue/no-v-html': 'off', //предупреждать о возможной уязвимости посредством XSS атаки
    'no-undef': 'off', //ошибка объявления переменной
  },
}
