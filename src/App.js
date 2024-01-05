import { BrowserRouter, Route } from './react-router-dom';

function PageA() {
    return <h1>pageA</h1>;
}
function PageB() {
    return <h1>PageB</h1>;
}
function Change(props) {
    console.log(props);
    return (
        <>
            <button>pageA</button>
            <button>pageB</button>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
            <Route path="/" component={Change} />
        </BrowserRouter>
    );
}

export default App;
