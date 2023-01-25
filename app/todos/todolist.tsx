import Link from 'next/link';
import React from 'react'

const fetchtodolist =async () => {
    const url = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos:Todo[] = await url.json();
    return todos
}

const Todolist = async () => {

const data = await fetchtodolist();

  return (
    <div>
        {data.map((todo) => (
            <p key={todo.id} >
                <Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>
            </p>
        ))}
    </div>
  )
}

export default Todolist