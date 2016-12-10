import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import getRoutes from '../routes'
import lang from '../../lang/lang'
import en from 'react-intl/locale-data/en'

const getLocaleFromUrl = () => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === 'locale') return pair[1]
  }
  return 'zh-tw'
}

addLocaleData(en)
addLocaleData({
  locale: 'zh-tw',
  parentLocale: 'en',
})

const Root = ({ store }) => (
  <Provider store={store}>
    <IntlProvider locale={getLocaleFromUrl()} messages={lang[getLocaleFromUrl()]}>
      <Router history={browserHistory}>
        {getRoutes()}
      </Router>
    </IntlProvider>
  </Provider>
)

export default Root
