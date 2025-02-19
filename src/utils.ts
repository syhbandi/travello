export const formatCurrency = (value: string | number)=>{
  return new Intl.NumberFormat('US',{style:'currency',currency:'usd'}).format(Number(value))
}