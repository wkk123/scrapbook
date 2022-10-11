export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month].map(formatNumber).join('-')
  )
}

export const formatDate = (str:string)=>{
  const arr = str.split('-');
  return `${arr[0]}年${arr[1]}月`;
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
