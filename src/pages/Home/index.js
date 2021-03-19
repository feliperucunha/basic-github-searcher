import React, { useState, useEffect } from 'react';
import './styles.css';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
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
    fetch('https://api.github.com/users/feliperucunha')
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

  return (
    <div className="search-and-card-container">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Usuário' name='github user' onChange={handleSearch}/>
            <Form.Button color="purple" content='Procurar' />
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
          <Card fluid>
            <Image src={avatar} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header className="username">
                <a href={githubLink}>
                  {userName} 
                </a>
              </Card.Header>

              <Card.Description>
                {userBio}
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <NavLink to={{ pathname: '/repos', state: { userInput } }} >
                <a className="pulse">
                  <Icon name='fork' />
                  {repos} Repositório(s)
                </a>
              </NavLink>
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
              <a>
                <Icon name='mail' />
                {userEmail}
              </a>
            </Card.Content>
          </Card>
        </div>
      )}

    </div>

  );
}
