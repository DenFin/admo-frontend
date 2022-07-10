exports.isInvoiceDue = (_dueDate, _nowDate) => {
  const dueDate = new Date(_dueDate)
  const nowDate = Date.now()
  console.log('nowDate', nowDate)
  console.log('dueDate', dueDate)
  return nowDate > dueDate
}
