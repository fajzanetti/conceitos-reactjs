import React, { useState, useEffect } from "react";

import api from './services/api'
import "./styles.css";

function App() {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    api.get('repositories').then(res => {
      const response = res.data
      setRepo(response)
    })
  }, [])

  async function handleAddRepository() {
    const res = await api.post('repositories', {
      title: `Conceitos Reactjs - ${Date.now()}`,
      techs: ['Teste', `${Date.now()}`, 'Outro teste'],
      url: 'https://github.com/fajzanetti/conceitos-reactjs'
    })

    const response = res.data
    setRepo([...repo, response])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)
    const newRepo = repo.filter(R => R.id !== id)
    setRepo(newRepo)
  }


  return (
    <div>
      <ul data-testid="repository-list">
        {repo.map(R => (
          <li key={R.id}>
            {R.title}
            <button onClick={() => handleRemoveRepository(R.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
