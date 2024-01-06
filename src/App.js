import { BrowserRouter, Route } from './react-router-dom';

import SwitchTest from './pages/switch';

function PageA() {
    return <h1>PageA</h1>;
}
function PageB(props) {
    return <h1>PageB</h1>;
}
function PageC(props) {
    return <h1>PageC</h1>;
}

function Change(props) {
    const { history } = props;
    return (
        <>
            <button onClick={() => history.push('/a')}>pageA</button>
            <button onClick={() => history.push('/b')}>pageB</button>
            <button onClick={() => history.push('/c')}>pageC</button>
            <button onClick={() => history.push('/switch')}>to switch</button>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
            <Route path="/c" render={() => <PageC />} />
            <Route path="/d">
                <h1>无论是否匹配都会显示</h1>
            </Route>
            <Route path="/switch" component={SwitchTest} />
            <Route path="/" component={Change} />
        </BrowserRouter>
    );
}

export default App;
