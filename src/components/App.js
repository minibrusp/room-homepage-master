import Header from './Header'
import Logo from './Logo'
import style from '../scss/module/App.module.scss'
import Article from './Article'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <div className={style.App}>
      <Header>
        <Logo />
      </Header>
      <Article>
        <About />
      </Article>
      <Footer />
    </div>
  )
}

export default App