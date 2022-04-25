import React, { useState, useEffect, useRef } from 'react'
import { CoffeeType } from '../../constants'

import _ from 'lodash'

import styles from './StockAndMenuPage.module.css'
import css from 'classnames'

import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import {
  Drawer,
  Radio,
  Select,
  Input,
  Button,
  Table,
  Typography,
  InputNumber,
  Form,
  Row,
  Col,
  Divider,
  notification,
  message,
  Modal,
} from 'antd'

import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Menu } from '../../components/Menu/Menu'

const typeOption = [
  { label: 'Coffee', value: 'COFFEE' },
  { label: 'Soda', value: 'SODA' },
  { label: 'Milk', value: 'MILK' },
]
export function StockAndMenuPage() {
  const [menuList, setMenuList] = useState([])
  const [stockList, setStockList] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [addForm] = Form.useForm()
  const [reStockForm] = Form.useForm()
  const [stockOption, setstockOption] = useState([])
  const [imgUrl, setImgUrl] = useState([])
  const fileRef = useRef()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleUpload = (files) => {
    if (!files.length) {
      notification.error({ message: 'Upload file Error!' })
      return
    }
    _.forEach(files, (f) => {
      const reader = new FileReader()
      reader.onloadend = function () {
        setImgUrl((old) => [...old, reader.result])
      }
      reader.readAsDataURL(f)
    })
  }

  const fetchMenuList = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BACKEND + `/menus`)
      console.log(data)

      setMenuList(
        data.map((d) => ({
          ...d,
          ingredients: d.ingredients.map((i) => ({
            ...i,
            quantity: i.use_quantity,
          })),
        }))
      )
    } catch (error) {
      console.log(error)
    }
  }
  const submitForm = async (formValue) => {
    if (!imgUrl.length) {
      notification.warning({ message: 'Please upload Image!' })
      return
    }
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND + `/menus`,
        {
          ...formValue,
          image: imgUrl,
        }
      )
      setIsDrawerOpen(false)
      notification.success({ message: 'Add menu Success!' })
      addForm.resetFields()
      fileRef.current.value = ''
      fetchMenuList()
    } catch (error) {
      console.log(error)
    }
  }

  // Stock ----------------------------------------
  const fetchStocks = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/stocks`
      )
      setStockList(data)
      setstockOption(
        data.map((s) => ({
          value: s.id,
          label: s.ingredient_name,
        }))
      )
    } catch (error) {
      console.log(error)
    }
  }
  const reStocks = async (formValue) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND + `/stocks`
      )
      setStockList(data)
      setstockOption(
        data.map((s) => ({
          value: s.id,
          label: s.ingredient_name,
        }))
      )
      fetchStocks()
    } catch (error) {
      console.log(error)
    }
  }

  const titleIngredients = [
    {
      title: 'Ingredient Name',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
    },
  ]
  const ingredients = [
    {
      key: '1',
      name: 'milk(steam)',
      quantity: <InputNumber min={100} max={1000} defaultValue={100} />,
      unit: 'Oz.',
    },
    {
      key: '2',
      name: 'milk(cold)',
      quantity: <InputNumber min={145} max={1000} defaultValue={145} />,
      unit: 'Oz.',
    },
    {
      key: '3',
      name: 'milk(foam)',
      quantity: <InputNumber min={245} max={1000} defaultValue={245} />,
      unit: 'Oz.',
    },
    {
      key: '4',
      name: 'chocolate(decor)',
      quantity: <InputNumber min={146} max={1000} defaultValue={146} />,
      unit: 'Oz.',
    },
    {
      key: '5',
      name: 'expresso(shot)',
      quantity: <InputNumber min={434} max={1000} defaultValue={434} />,
      unit: 'Oz.',
    },
    {
      key: '6',
      name: 'chocolate(sauce)',
      quantity: <InputNumber min={159} max={1000} defaultValue={159} />,
      unit: 'Oz.',
    },
    {
      key: '7',
      name: 'caramel(decor)',
      quantity: <InputNumber min={136} max={1000} defaultValue={136} />,
      unit: 'Oz.',
    },
    {
      key: '8',
      name: 'vanila(syrup)',
      quantity: <InputNumber min={234} max={1000} defaultValue={234} />,
      unit: 'Oz.',
    },
    {
      key: '9',
      name: 'syrup',
      quantity: <InputNumber min={345} max={1000} defaultValue={345} />,
      unit: 'Oz.',
    },
    {
      key: '10',
      name: 'water(cold)',
      quantity: <InputNumber min={1000} max={1000} defaultValue={1000} />,
      unit: 'Oz.',
    },
    {
      key: '11',
      name: 'ice',
      quantity: <InputNumber min={800} max={1000} defaultValue={800} />,
      unit: 'cup',
    },
  ]

  useEffect(() => {
    fetchMenuList()
    fetchStocks()
  }, [])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Stock & Menu</h4>
      </div>
      <div style={{ padding: '2rem 6rem 4rem 6rem' }}>
        <Row justify="space-between">
          <Col className={styles.title}>
            <h1>Menu</h1>
          </Col>
          <Col>
            <Button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                // color: '#f6f5ef',
                // background: '#c6a07d',
                width: '200px',
                height: '40px',
                fontSize: '16px',
                borderRadius: '4px',
              }}
            >
              + Add Menu
            </Button>
          </Col>
        </Row>
        <div className={styles.coverContainer}>
          {menuList.map((data) => (
            <Menu
              data={data}
              stocks={stockList}
              onEditSuccess={fetchMenuList}
            />
          ))}
        </div>
        <Divider />
        <div className={styles.coverTable}>
          <Form form={reStockForm}>
            <Row justify="space-between">
              <Col className={styles.title}>
                <h1>Stock</h1>
              </Col>
              <Col>
                <Button
                  // className={styles.buttonAddIngredient}
                  style={{
                    // color: '#f6f5ef',
                    // background: '#c6a07d',
                    width: '200px',
                    height: '40px',
                    fontSize: '16px',
                    borderRadius: '4px',
                  }}
                  type="primary"
                  size="large"
                  // onClick={showModal}
                >
                  {/* <BsPlusLg /> Add Ingredient */}
                  {'+   '} Add Ingredient
                </Button>
              </Col>
            </Row>
            <Table
              className={styles.table}
              columns={titleIngredients}
              dataSource={ingredients}
              pagination={false}
              bordered
              summary={(pageData) => {
                let totalBorrow = 0
                let totalRepayment = 0

                pageData.forEach(({ borrow, repayment }) => {
                  totalBorrow += borrow
                  totalRepayment += repayment
                })

                return (
                  <>
                    <Table.Summary.Row></Table.Summary.Row>
                  </>
                )
              }}
            />
            <div className={styles.coverButton}>
              <Button
                className={styles.buttonReStock}
                type="primary"
                size="large"
              >
                ReStock
              </Button>
            </div>
          </Form>
        </div>

        {/* Modal ---------------------------------*/}
        {/* <Modal
          // title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          okText='Save'
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}

        {/* Drawer ---------------------------------*/}
        <Drawer
          title={
            <Row justify="space-between" align="middle">
              <Col>Add new menu</Col>
              <Col>
                <Button type="primary" onClick={addForm.submit}>
                  Add
                </Button>
              </Col>
            </Row>
          }
          visible={isDrawerOpen}
          className={styles.drawerSweet}
          maskClosable={false}
          keyboard={false}
          onClose={() => {
            fileRef.current.value = ''
            setIsDrawerOpen(false)
          }}
        >
          <Form
            requiredMark={false}
            layout="vertical"
            form={addForm}
            onFinish={(value) => {
              submitForm(value)
            }}
          >
            <input
              ref={fileRef}
              multiple
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleUpload(e.target.files)
              }}
            />
            <br />
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[{ required: true, message: '' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    type="number"
                    min={0}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Sale Price"
                  name="sale_to"
                  rules={[{ required: true, message: '' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    type="number"
                    min={0}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Type"
                  name="type"
                  rules={[{ required: true, message: '' }]}
                >
                  <Select options={typeOption} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: '' }]}
                >
                  <Input.TextArea maxLength={200} showCount rows={6} />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Form.List name="ingredients" initialValue={[{ quantity: 1 }]}>
              {(fields, ingredientsList) => (
                <>
                  <Row>
                    <Col span={24}>
                      {fields.map(({ name, ...rest }) => (
                        <>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                rules={[{ required: true, message: '' }]}
                                label="Ingredient"
                                {...rest}
                                name={[name, 'stock_id']}
                              >
                                <Select options={stockOption} />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                rules={[{ required: true, message: '' }]}
                                label="Quantity"
                                {...rest}
                                name={[name, 'quantity']}
                              >
                                <InputNumber
                                  min={1}
                                  style={{ width: '100%' }}
                                />
                              </Form.Item>
                            </Col>
                          </Row>

                          {fields.length > 1 && (
                            <Button
                              onClick={() => ingredientsList.remove(name)}
                              block
                              danger
                              type="text"
                            >
                              <FiTrash2
                                style={{
                                  margin: '0 0.5rem -2px 0',
                                  fontSize: '16px',
                                }}
                              />
                              Remove Ingredient
                            </Button>
                          )}
                          <Divider />
                        </>
                      ))}
                    </Col>
                  </Row>

                  <Button
                    block
                    type="dashed"
                    onClick={() => ingredientsList.add({ quantity: 1 })}
                  >
                    + Add Ingredient
                  </Button>
                </>
              )}
            </Form.List>
          </Form>
        </Drawer>
      </div>
    </div>
  )
}
