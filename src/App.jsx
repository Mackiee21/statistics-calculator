import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <div className="flex flex-col h-dvh">
      <header>
        <Header />
      </header>
      <main className="overflow-y-auto">
        <Main />
      </main>
    </div>
  )
}

export default App
