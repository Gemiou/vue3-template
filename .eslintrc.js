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
    'no-undef': 'off', //неиспользуемая переменная
    'vue/require-default-prop': 'off', //требовать для props дефолтных значений, кроме Boolean значений
    // 'vue/no-v-html': 'off', //предупреждения о возможной уязвимости посредством XSS атаки
  },
}
