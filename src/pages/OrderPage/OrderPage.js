import { useEffect, useState } from 'react'

import styles from './OrderPage.module.css'

import { Col, Row, Divider, Select } from 'antd'

import axios from 'axios'

const statusOption = [
  {
    label: 'Order Placed',
    value: 1,
  },
  {
    label: 'Processing',
    value: 2,
  },
  {
    label: 'Shipping',
    value: 3,
  },
  {
    label: 'Delivered',
    value: 4,
  },
]

export function OrderPage() {
  const [orderList, setOrderList] = useState([])

  const fetchOrderList = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/orders`
      )
      setOrderList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOrderList()
  }, [])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Order</h4>
      </div>

      <div className={styles.coverContainerOrder}>
        {orderList.map((order, index) => (
          <div className={styles.coverOrder}>
            <h2>order# {order.id}</h2>
            <div>
              date:{' '}
              {new Date(order.order_timestamptz).toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </div>
            <div>
              time:{' '}
              {new Date(order.order_timestamptz).toLocaleTimeString('th-TH', {
                timeStyle: 'short',
              })}
            </div>
            <div>address: {order.address}</div>
            <br />

            <Row>
              <Col span={8}>Product</Col>
              <Col span={8}>
                <Row justify="center">Quantity</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">Subtotal</Row>
              </Col>
            </Row>
            {order.menu_array.map((menu) => (
              <Row>
                <Col span={8}>{menu.name}</Col>
                <Col span={8}>
                  <Row justify="center">{menu.quantity}</Row>
                </Col>
                <Col span={8}>
                  <Row justify="end">{menu.sale_to}</Row>
                </Col>
              </Row>
            ))}
            <br />
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Subtotal</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.subtotal}</Row>
              </Col>
            </Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Discount</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.discount}</Row>
              </Col>
            </Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Shipping</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">20.00</Row>
              </Col>
            </Row>
            <Divider style={{ margin: '1rem 0' }} />
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Total</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.total}</Row>
              </Col>
            </Row>
            <Divider style={{ margin: '1rem 0' }} />
            <Row>
              <Col span={24}>
                <Select style={{ width: '100%' }} options={statusOption} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  )
}
