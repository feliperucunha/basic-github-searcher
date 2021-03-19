import React, { useState, useEffect } from 'react';
import './styles.css';
import { Icon, Menu, Table } from 'semantic-ui-react'

function Repos() {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [stars, setStars] = useState('');
  const [githubLink, setGithubLink] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/feliperucunha/repos')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);

  const setData = ({ name, language, stargazers_count, html_url}) => {
    setName(name)
    setLanguage(language)
    setStars(stargazers_count)
    setGithubLink(html_url)
  }

  const handleRepos = () => {
    fetch(`https://api.github.com/users/feliperucunha/repos`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }

    return (
      <Table className="table" celled>
        {handleRepos}
        <Table.Header>
          <button onClick={handleRepos}>oi</button>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Linguagem</Table.HeaderCell>
            <Table.HeaderCell>Estrelas</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            {setData.filter(items => items.name.map(items => {
              return (
                <Table.Cell>{items.name}</Table.Cell>
              )
            }))}
            {setData.filter(items => items.language.map(items => {
              return (
                <Table.Cell>{items.language}</Table.Cell>
              )
            }))}
            {setData.filter(items => items.stars.map(items => {
              return (
                <Table.Cell>{items.stars}</Table.Cell>
              )
            }))}
            {setData.filter(items => items.githubLink.map(items => {
              return (
                <Table.Cell>{items.githubLink}</Table.Cell>
              )
            }))}
          </Table.Row>
        </Table.Body>
    
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
}

export default Repos
