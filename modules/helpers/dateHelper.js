exports.convertToLocaleDateString = (
  _date,
  _locale = 'de-DE',
  _options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
) => {
  const date = new Date(_date)
  return date.toLocaleDateString(_locale, _options)
}

exports.convertToStandardDate = (_date, _locale = 'en-EN', _options = { year: 'numeric', month: 'numeric', day: 'numeric' }) => {
  const date = new Date(_date)
  return date.toLocaleDateString(_locale, _options)
}
