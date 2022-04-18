import React, { useState, useEffect } from 'react'
import { CoffeeType } from '../../constants'

import styles from './StockPage.module.css'
import css from 'classnames'
import { Stock } from '../../components/Stock/Stock'

import { CgSearch } from 'react-icons/cg'

import { Radio, Select, Input, Button, Table, Typography, InputNumber } from 'antd'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

import axios from 'axios'

const { Option } = Select
const { Text } = Typography;

export function StockPage() {
  const [stockList, setStockList] = useState([])
  const [filterStockList, setFilterStockList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('recommend')

  const columns = [
    
  ];

  const data = [
    
  ];

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Stock</h4>
      </div>
      <div className={styles.bgColor}>
        <div className={styles.container}>
        <div style={{ marginLeft: '200px', marginRight: '200px'}}>
        <>
        <Button type="updatestock" block>
          Update Stock
        </Button>
        <Button type="dashboard" block>
          Dashboard
        </Button>
        <Button type="restock" block>
          Restock
        </Button>
        <Button type="order" block>
          Order
        </Button>
        </>,
        </div>
        </div>
      </div>
    </div >
  )
}
