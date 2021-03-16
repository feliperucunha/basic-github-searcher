import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Card, Image, Icon } from 'semantic-ui-react';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBio, setBio] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);

  const setData = ({ name, login, followers, following, public_repos, avatar_url, email, bio, html_url}) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setUserEmail(email)
    setGithubLink(html_url)
    setBio(bio)
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data);
          setError(null);
        }
      })
  }

  const handleRepos = () => {
    fetch(`https://api.github.com/users/${userInput}/repos`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }

  return (
    <div className="App">
      <div className="navbar">
        <img src="https://prismic-io.s3.amazonaws.com/cosmobots-website/a06ad421-5c55-4396-8bed-566463eeb8bc_logocosmonew-svg.svg?auto=format%2Ccompress&fit=max&q=50" />
      </div>

      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Usuário' name='github user' onChange={handleSearch}/>
            <Form.Button content='Procurar' />
          </Form.Group>
        </Form>
      </div>

      { error ? (
        <div className="error">
          <span>Usuário não encontrado</span>
          <img src="http://pngimg.com/uploads/dog/dog_PNG50348.png" />
        </div>   
      ) : (
        <div className="card">
          <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header className="username">{userName}</Card.Header>

              <Card.Description>
                {userBio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {followers} Seguidores
              </a>
              <a className="following">
                <Icon name='user' />
                {following} Seguindo
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href={githubLink}>
                <Icon name='github' />
                Visitar Github
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='mail' />
                {userEmail}
              </a>
            </Card.Content>
            <Card.Content extra>
              <a className="pulse" onClick={handleRepos}>
                <Icon name='fork' />
                {repos} Repositórios
              </a>
            </Card.Content>
          </Card>
        </div>
      )}

    </div>

  );
}

export default App;
