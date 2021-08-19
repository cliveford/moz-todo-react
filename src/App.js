// import components
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  // transform data
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.todoid}
      name={task.name}
      completed={task.completed}
      key={task.todoid}
    />
  ));
  return (
    <div className='todoapp stack-large'>
      <h1>You-To-Do</h1>
      <Form />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id='list-heading'>3 tasks remaining</h2>
      <ul
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
