import React from 'react'
import '../Styles/Dashboard.css'
import SearchBar from '../Dashboard/SearchBar'
import Mychart from '../Dashboard/Mychart'
import CircleChart from '../Dashboard/CircleChart'
import Table from '../Dashboard/Table'
import Box from '../Dashboard/Box'

function Dashboard() {
  const data = [
    {
      Title: 'Earnings',
      Price: '$198K',
      Percentage: '37.8% this month',
      Logo:
        'https://as2.ftcdn.net/v2/jpg/01/78/55/03/1000_F_178550310_NCshdofkGtnBFMx32A9M8QRwnaXsle9y.jpg',
    },
    {
      Title: 'Orders',
      Price: '$2.4K',
      Percentage: '2% this month',
      Logo: '',
    },
    {
      Title: 'Balance',
      Price: '$2.4K',
      Percentage: '2% this month',
      Logo: '',
    },
    {
      Title: 'Total Sales',
      Price: '$89K',
      Percentage: '11% this week',
      Logo:
        'https://as2.ftcdn.net/v2/jpg/01/78/55/03/1000_F_178550310_NCshdofkGtnBFMx32A9M8QRwnaXsle9y.jpg',
    },
  ]
  return (
    <div className="container-2">
      <div className="header-2">
        <div className="name">Hello Prabha👋,</div>
        <div className="search">
          <SearchBar />
        </div>
      </div>
      <div className="boxes">
        {data.map((item, index) => (
          <Box
            Title={item.Title}
            Price={item.Price}
            Percentage={item.Percentage}
          />
        ))}
      </div>
      <div className="chart">
        <div className="barchart">
          <Mychart />
        </div>
        <div className="circlechart">
          <CircleChart />
        </div>
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard
