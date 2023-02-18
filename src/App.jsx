import './App.css';
import Header from "./Components/Header";
import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import { ToDoProvider } from './Context/ToDoContext';


function App() {
    return (<div>
    <ToDoProvider>
        <section className="todoapp">
            <Header/>
            <Contents/>

            <Footer/>

            </section></ToDoProvider>

        </div>
            );
            }

            export default App;
