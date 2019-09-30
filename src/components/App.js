import React from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const App = () => {
  const todoData = [
    { label: 'Drink coffee', important: false },
    { label: 'Crete React App', important: true },
    { label: 'Make a lunch', important: false }
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
}

export default App;