import './App.css';
import {NestedChild} from "./incApp/IncApp";
import Users from "./users/Users";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from "./posts/Posts";
import Comments from "./comment/Comments";





function App() {
    return (
            <Router>
                <div className="menu">
                    <Link to={'/'}>Home page</Link>
                    <Link to={'/incpage'}>inc page</Link>
                    <Link to={'/userspage'}>users page</Link>
                    <Link to={'/postspage'}>posts page</Link>
                    <Link to={'/commentspage'}>comments page</Link>
                </div>

                <div className='content'>
                    <Switch>
                        <Route path={'/incpage'} component={NestedChild}/>>
                        <Route path={'/userspage'} component={Users}/>>
                        <Route path={'/postspage'} component={Posts}/>>
                        <Route path={'/commentspage'} component={Comments}/>>
                        <Route path={'/'}/>>
                    </Switch>
                </div>
            </Router>



    );
}

export default App;
