import React, { useState, useEffect } from 'react';
import './styles.css';
import { Icon, Menu, Table } from 'semantic-ui-react'

function Repos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/feliperucunha/repos')
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, []);

    return (
      <Table celled size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Linguagem</Table.HeaderCell>
            <Table.HeaderCell>Estrelas</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {data.map(({ name, language, stargazers_count, html_url }) => (
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {name}
              </Table.Cell> 
              <Table.Cell>
                {language}
              </Table.Cell> 
              <Table.Cell>
                {stargazers_count}
              </Table.Cell> 
              <Table.Cell>
                <a href={html_url}>
                  <Icon name='github' />
                  Visitar Github
                </a>
              </Table.Cell> 
            </Table.Row>
          </Table.Body>
          )
        )}
    
    {/* PAGINAÇÃO NÃO IMPLEMENTADA */}
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
