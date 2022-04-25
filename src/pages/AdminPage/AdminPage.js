import styles from './AdminPage.module.css'

import { NavLink } from 'react-router-dom'

import { Tabs, Table, Button, Col, Row, Form } from 'antd'

export function AdminPage() {
  const { TabPane } = Tabs

  const titleEmployee = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      //   render: (record) => {
      //     return <img src={record.employeeImge} />
      //   },
    },
    {
      title: 'First name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Phone',
      dataIndex: 'phone_no',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const employee = [
    {
      key: '1',
      //   employeeImge: 'https://joeschmoe.io/api/v1/random',
      firstname: 'Ptolemy',
      lastname: 'Collier',
      age: '25',
      phone_no: '0942049992',
      email: 'PtolemyCollier@gmail.com',
      address: '444 Tokyu Department Mbk Center Phayathai',
    },
    {
      key: '2',
      //   employeeImge: 'https://joeschmoe.io/api/v1/random',
      firstname: 'Mercy',
      lastname: 'Hirst',
      age: '32',
      phone_no: '0919304487',
      email: 'MercyHirst@gmail.com',
      address: '80/100 Soi Ram Town House Ramkhamhaeng',
    },
    {
      key: '3',
      //   employeeImge: 'https://joeschmoe.io/api/v1/random',
      firstname: 'Arnold',
      lastname: 'Davis',
      age: '22',
      phone_no: '0820498839',
      email: 'ArnoldDavis@gmail.com',
      address: '85/3 Soi Prachumporn Chaengwatana Road',
    },
  ]

  const titleMember = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      //   render: () => {
      //     return <img src="https://joeschmoe.io/api/v1/random" />
      //   },
    },
    {
      title: 'First name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last name',
      dataIndex: 'lastname',
    },
    {
      title: 'Phone',
      dataIndex: 'phone_no',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    // },
  ]

  const member = [
    {
      key: '1',
      firstname: 'John',
      lastname: 'Cena',
      phone_no: '0916460003',
      email: 'JohnCena@gmail.com',
      address: '232/5 Gp 4 Phetasem Orm Noi Krathum Baen',
    },
    {
      key: '1',
      firstname: 'Nazifa',
      lastname: 'Walker',
      phone_no: '0817390028',
      email: 'NazifaWalker@gmail.com',
      address: '241-3 Santipharp Road Pomprab',
    },
    {
      key: '1',
      firstname: 'Konrad',
      lastname: 'Hawkins',
      phone_no: '0810294483',
      email: 'KonradHawkins@gmail.com',
      address: '600/1221 Soi Sivalee Village Phaholyothin',
    },
    {
      key: '1',
      firstname: 'Shah',
      lastname: 'Hollis',
      phone_no: '0960491920',
      email: 'ShahHollis@gmail.com',
      address: '232/5 Gp 4 Phetasem Orm Noi Krathum Baen',
    },
    {
      key: '1',
      firstname: 'Conah',
      lastname: 'Rush',
      phone_no: '0915934930',
      email: 'Conah Rush@gmail.com',
      address: '232/5 Gp 4 Phetasem Orm Noi Krathum Baen',
    },
  ]

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Employee & Member</h4>
      </div>
      <div className={styles.cover}>
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="Employee" key="1">
            <div className={styles.coverTable}>
              <Form>
                <Table
                  className={styles.table}
                  columns={titleEmployee}
                  dataSource={employee}
                  pagination={false}
                  bordered
                />
                <div className={styles.coverButton}>
                  <Button
                    className={styles.buttonReStock}
                    type="primary"
                    size="large"
                  >
                    + Add Employee
                  </Button>
                </div>
              </Form>
            </div>
          </TabPane>
          <TabPane tab="Member" key="2">
            <div className={styles.coverTable}>
              <Form>
                <Table
                  className={styles.table}
                  columns={titleMember}
                  dataSource={member}
                  pagination={false}
                  bordered
                />
                {/* <div className={styles.coverButton}>
                  <Button
                    className={styles.buttonReStock}
                    type="primary"
                    size="large"
                  >
                    ReStock
                  </Button>
                </div> */}
              </Form>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
