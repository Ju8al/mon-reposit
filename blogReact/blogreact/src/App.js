import React, { useState } from 'react';
import './App.css';
import PagePseudo from './Components/PagePseudo';
import PagePost from './Components/PagePost';
import PageComm from './Components/PageComm';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  return (

    < Router >
      <div className="App">

        <Route exact path={`/`}>
          <PagePseudo
            handlerUser={user}
            handlerSetUser={setUser}
          />
        </Route>

        {user.map((item) => {
          return (
            <Route key={item.id} exact path={`/users/${item.id}`}>
              <PagePost
                handlerPost={post}
                handlerSetPost={setPost}
                handlerId={item.id}
              />
            </Route>
          )
        })}

        {post.map((item) => {
          return (
            <Route key={item.id} exact path={`/posts/${item.id}`}>
              <PageComm
                handlerPostId={item.id}
              />
            </Route>
          )
        })}

      </div>
    </Router >
  );
}

export default App;
