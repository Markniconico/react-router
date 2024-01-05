import { BrowserRouter, Route } from './react-router-dom';

function PageA() {
    return <h1>pageA</h1>;
}
function PageB(props) {
    console.log(props);
    return <h1>PageB</h1>;
}
function Change(props) {
    const { history, location } = props;
    return (
        <>
            <button onClick={() => history.push('/a')}>pageA</button>
            <button onClick={() => history.push('/b')}>pageB</button>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Route path="/a" component={PageA}></Route>
            <Route path="/b" component={PageB} />
            <Route component={Change} />
        </BrowserRouter>
    );
}

export default App;
