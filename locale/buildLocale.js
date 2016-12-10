import fs from 'fs'
import { sync as globSync } from 'glob'
import { sync as mkdirpSync } from 'mkdirp'
import { replace, pipe, keys, map, reduce } from 'ramda'

const LANG_DIR = './src/lang/'

const getMessagesPattern = locale => `./locale/**/${locale}.json`

const getPrefixIdFromPath = locale => pipe(
  replace('./locale/', ''),
  replace(`/${locale}.json`, ''),
  replace('/', '.'),
)

const getLocaleMessages = locale => pipe(
  map(filename => {
    const prefixId = getPrefixIdFromPath(locale)(filename)
    return [prefixId, fs.readFileSync(filename, 'utf8')]
  }),
  map(([prefixId, file]) => [prefixId, JSON.parse(file)]),
  reduce((collection, [prefixId, messages]) => {
    const keysFromMessages = keys(messages)
    const collectionFromMessages = reduce((prev, key) => ({
      ...prev,
      [`${prefixId}.${key}`]: messages[key],
    }), {}, keysFromMessages)

    return {
      ...collectionFromMessages,
      ...collection,
    }
  }, {})
)(globSync(getMessagesPattern(locale)))

const outputMessagesJSON = {
  en: getLocaleMessages('en'),
  'zh-tw': getLocaleMessages('zh-tw'),
}

mkdirpSync(LANG_DIR)
fs.writeFileSync(`${LANG_DIR}lang.json`, JSON.stringify(outputMessagesJSON, null, 2))
