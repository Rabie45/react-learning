
import './App.css'
import Header from './component/Header'
import Entry from './component/Entry'
import data from './data'
function App() {
const entryElements =data.map((entry)=>{
  return (
    <Entry key={entry.id}
    {...entry}/>

  )
})
  return (
    <dev>
    <Header/>
    <main className='container'>
{entryElements}
    </main>
    </dev>
  )
}

export default App
