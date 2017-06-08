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
});;
