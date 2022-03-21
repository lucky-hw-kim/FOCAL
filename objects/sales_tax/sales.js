const calculateSalesTax = function (salesData, taxRates) {
  const result = {}
  // find total sales of each company
  for (const data of salesData) {
    const province = data.province

    // each object in array = data
    if (!result[data.name]) {
      result[data.name] = {
        totalSales: calculateTotalSales(data.sales),
        totalTaxes: calculateTotalSales(data.sales) * taxRates[province]
      }
    } else {
      result[data.name].totalSales = result[data.name].totalSales + calculateTotalSales(data.sales)
      result[data.name].totalTaxes = result[data.name].totalTaxes + calculateTotalSales(data.sales) * taxRates[province]
    }
  }
  return result
}

const calculateTotalSales = function (arr) {
  let total = 0
  for (const value of arr) {
    total += Number(value)
  }
  return total
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
}

const companySalesData = [
  {
    name: 'Telus',
    province: 'BC',
    sales: [100, 200, 400]
  },
  {
    name: 'Bombardier',
    province: 'AB',
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: 'Telus',
    province: 'SK',
    sales: [500, 100]
  }
]

console.log(calculateSalesTax(companySalesData, salesTaxRates))
