

const dateUpdate = () => {
    const getDay = new Date();
    const setDay = getDay.getDate()
    const setMonth = getDay.getMonth()
    const setYear = getDay.getFullYear()
  
    return `${setYear}-${setMonth}-${setDay}`
  }
  
  console.log(dateUpdate())

module.exports = {
    dateUpdate
}