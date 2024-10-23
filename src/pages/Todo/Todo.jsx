import { useEffect, useRef, useState } from "react";
import { fetchTodos } from "../../data/todos";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./Todo.css";

const initItemPerPage = 10;
const initOnlyWating = false;

function Todo() {
  // todosRaw -> filter -> todos -> display
  //todosRaw
  const [todosRaw, setTodosRaw] = useState([]);
  //filter
  const [onlywaiting, setOnlywaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  //todos
  const [todos, setTodos] = useState([]);

  //display
  const [numPage, setNumPage] = useState(1);
  const [curPage, setCurPage] = useState(1);

  const itemPerPageRef = useRef();
  const onlywaitingRef = useRef();

  useEffect(() => {
    // curPage > numPage ? setCurPage(numPage) : null
    //  setCurPage((p) => (p > numPage ? numPage : p));
    setCurPage(1);
  }, [numPage]);

  useEffect(() => {
    console.log(`itemsPerPage : ${itemsPerPage}`);
    setNumPage(Math.ceil(todosRaw.length / itemsPerPage));
  }, [itemsPerPage, todosRaw]);

  useEffect(() => {
    console.log(`onlywaiting : ${onlywaiting}`);
  }, [onlywaiting]);

  //lode
  useEffect(() => {
    setTodosRaw(fetchTodos());
    setOnlywaiting(initOnlyWating);
    onlywaitingRef.current.checked = initOnlyWating;
    setItemsPerPage(initItemPerPage);
    itemPerPageRef.current.value = initItemPerPage;
  }, []);

  //bypass filter
  useEffect(() => {
    if (onlywaiting) {
      setTodos(
        todosRaw.filter((todo) => {
          return todo.completed === false;
        })
      );
    } else {
      setTodos(todosRaw);
    }
  }, [todosRaw, onlywaiting, itemsPerPage]);

  //event handler
  function deleteClick(id) {
    //todoRaw => todos
    setTodosRaw(todosRaw.filter((todo) => todo.id !== id));
  }

  function waintingClick(id) {
    const todoSelected = todosRaw.find((todo) => {
      return todo.id === id;
    });
    todoSelected.completed = true;
    setTodosRaw([...todosRaw]);
  }

  function addClick(id, title) {
    const newItem = {
      id,
      title,
      completed: false,
      userId: 1,
    };
    setTodosRaw([...todosRaw, newItem]); //work
  }

  //modal handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newIdRef = useRef();
  const newTitleRef = useRef();

  return (
    <div className="todo-container">
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="bi bi-plus-lg">&nbsp;Add Todo</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                disabled
                value={
                  Number(
                    todosRaw.reduce((prev, todo) => {
                      return todo.id > prev ? todo.id : prev;
                    }, 0)
                  ) + 1
                }
                ref={newIdRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Title :</Form.Label>
              <Form.Control type="text" autoFocus ref={newTitleRef} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <span className="bi bi-x-lg">&nbsp;Cancel</span>
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const id = newIdRef.current.value;
              const title = newTitleRef.current.value.trim();
              if (title === "") {
                alert("Title cannot be empty");
                newTitleRef.current.value = "";
                newTitleRef.current.focus();
              }else{
                addClick(id, title);
                handleClose();
              }
            }}
          >
            <span className="bi bi-plus-lg">&nbsp;Add</span>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* filter */}
      <div className="todo-filter-container">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            //checked
            onClick={(e) => {
              setOnlywaiting(e.target.checked);
            }}
            ref={onlywaitingRef}
            style={{ marginTop: "0.6rem" }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show only&nbsp;
            <button className="btn btn-warning">
              waiting &nbsp;
              <span className="bi bi-clock"></span>
            </button>
          </label>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={5}
          style={{ width: "200px" }}
          onChange={(e) => {
            setItemsPerPage(e.target.value);
          }}
          ref={itemPerPageRef}
        >
          <option value={5} selected>
            5 item per page
          </option>
          <option value={10}>10 item per page</option>
          <option value={50}>50 item per page</option>
          <option value={100}>100 item per page</option>
        </select>
      </div>

      {/* table */}
      <table className="table table-striped todo-table" style={{marginTop: "0.5rem"}} >
        <thead className="table-dark">
          <tr>
            <th style={{ textAlign: "center", width: "5%" }} valign="middle">ID</th>
            <th style={{ textAlign: "center" }} valign="middle">TITEL</th>
            <th style={{ textAlign: "right", width: "20%" }}>
              Compeleted&nbsp;
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleShow();
                }}
              >
                <span className="bi bi-plus-lg"></span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            //itemPerPage = 5
            //curPage = 1
            //items(human) = [1,2,3,4,5]
            //items(js) = [0,1,2,3,4]
            //items(js) = [min...max]
            //min = (curPage - 1) * itemPerPage //0
            //max = curPage * itemPerPage - 1 //4

            todos
              .filter((todo, index) => {
                const min = (curPage - 1) * itemsPerPage;
                const max = curPage * itemsPerPage - 1;
                return index >= min && index <= max;
              })

              .map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td style={{ textAlign: "center" }} valign="middle">
                      <span
                        className="badge bg-secondary"
                        style={{ width: "3rem" }}
                      >
                        {todo.id}
                      </span>
                    </td>
                    <td style={{ textAlign: "left" }} valign="middle">{todo.title}</td>
                    <td style={{ textAlign: "right" }} valign="middle">
                      {todo.completed ? (
                        <span className="badge bg-success">
                          done&nbsp;
                          <span className="bi bi-check"></span>
                        </span>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            waintingClick(todo.id);
                          }}
                        >
                          waiting&nbsp;
                          <span className="bi bi-clock"></span>
                        </button>
                      )}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteClick(todo.id);
                        }}
                      >
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>

      {/* page */}
      <div className="todo-page-container">
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => {
            setCurPage(1);
          }}
          disabled={curPage === 1}
        >
          First
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => curPage > 1 && setCurPage(curPage - 1)}
          disabled={curPage === 1}
        >
          Previous
        </button>
        <span className="todo-space">
          {curPage}&nbsp;/&nbsp;{numPage}
        </span>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => curPage < numPage && setCurPage(curPage + 1)}
          disabled={curPage === numPage}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => {
            setCurPage(numPage);
          }}
          disabled={curPage === numPage}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
