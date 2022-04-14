import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

/*import { HomePage } from './pages/HomePage/HomePage'*/
import { MenuPage } from './pages/MenuPage/MenuPage'
import { MenuDetailPage } from './pages/MenuDetailPage/MenuDetailPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { GalleryPage } from './pages/GalleryPage/GalleryPage'
import { CartPage } from './pages/CartPage/CartPage'
import { StockPage } from './pages/StockPage/StockPage'
import { UpdateStockPage } from './pages/UpdateStockPage/UpdateStockPage'
import { RestockPage } from './pages/RestockPage/RestockPage'
import { EmployeePage } from './pages/EmployeePage/EmployeePage'
import { MemberPage } from './pages/MemberPage/MemberPage'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
/*import { StockDetailPage } from './pages/StockDetailPage/StockDetailPage'*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={StockPage} />
        <Route exact path="/updatestock" component={UpdateStockPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/employee" component={EmployeePage} />
        <Route exact path="/member" component={MemberPage} />
        <Route exact path="/restock" component={RestockPage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/menu/:id" component={MenuDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

function App2() {
  return (
    <BrowserRouter>
      <StockPage />
      <Switch>
        <Route exact path="/" component={StockPage} />
        <Route exact path="/updatestock" component={UpdateStockPage} />
        <Route exact ="/dashboard" component={DashboardPage} />
        <Route exact ="/restock" component={RestockPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}


export default App
