var expect= require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('setTodos', () =>{
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });
    it('should set Todos', () =>{
      var todos = [{
        id: 23,
        test: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(todos).toEqual(actualTodos);
    });
    it('should not set invalid Todos', () =>{
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () =>{
    it('should return empty array', () =>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should get todo',() =>{
      var todos = [{
        id: 23,
        test: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
  describe('filterTodos', () =>{
    var todos = [{
      id: 1,
      text: 'test1',
      completed: true
    },{
      id: 2,
      text: 'test2',
      completed: false
    },{
      id: 3,
      text: 'test3',
      completed: true
    }];

    it('should return all todos if showCompleted is true', () =>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return non-completed todos if showCompleted is false',() =>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
  });

});;
