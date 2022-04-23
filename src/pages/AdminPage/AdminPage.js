import styles from './AdminPage.module.css'

import { Tabs } from 'antd'

export function AdminPage() {
  const { TabPane } = Tabs

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Admin</h4>
      </div>
      <div className={styles.cover}>
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
