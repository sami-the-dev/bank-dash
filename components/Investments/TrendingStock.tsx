interface TrendingStock {
  slNo: string;
  name: string;
  price: string;
  return: string;
  isPositive: boolean;
}

const trendingStocks: TrendingStock[] = [
  {
    slNo: "01",
    name: "Trivago",
    price: "$520",
    return: "+5%",
    isPositive: true,
  },
  {
    slNo: "02",
    name: "Canon",
    price: "$480",
    return: "+10%",
    isPositive: true,
  },
  {
    slNo: "03",
    name: "Uber Food",
    price: "$350",
    return: "-3%",
    isPositive: false,
  },
  { slNo: "04", name: "Nokia", price: "$940", return: "+2%", isPositive: true },
  {
    slNo: "05",
    name: "Tiktok",
    return: "-12%",
    isPositive: false,
    price: "$670",
  },
];

export default function TrendingStock() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">Trending Stock</h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-sm font-semibold text-primary-4">
                SL No
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-primary-4">
                Name
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-primary-4">
                Price
              </th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-primary-4">
                Return
              </th>
            </tr>
          </thead>
          <tbody>
            {trendingStocks.map((stock) => (
              <tr
                key={stock.slNo}
                className="border-b border-border last:border-b-0"
              >
                <td className="py-4 px-2 text-sm text-dark-gray">
                  {stock.slNo}
                </td>
                <td className="py-4 px-2 text-sm font-medium text-dark-gray">
                  {stock.name}
                </td>
                <td className="py-4 px-2 text-sm text-dark-gray">
                  {stock.price}
                </td>
                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      stock.isPositive ? " text-green-600" : " text-red-600"
                    }`}
                  >
                    {stock.return}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
