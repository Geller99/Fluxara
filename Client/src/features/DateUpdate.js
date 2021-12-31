

const DateUpdate = () => {
    const getDay = new Date();
    const setDay = getDay.getDate()
    const setMonth = getDay.getMonth()
    const setYear = getDay.getFullYear()
  
    return `${setYear}-${setMonth}-${setDay}`
  }
  

export default DateUpdate