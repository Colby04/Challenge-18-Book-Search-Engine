"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var SignupForm_1 = require("./SignupForm");
var LoginForm_1 = require("./LoginForm");
var auth_1 = require("../utils/auth");
var AppNavbar = function () {
    // set modal display state
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    return (<>
      <react_bootstrap_1.Navbar bg='dark' variant='dark' expand='lg'>
        <react_bootstrap_1.Container fluid>
          <react_bootstrap_1.Navbar.Brand as={react_router_dom_1.Link} to='/'>
            Google Books Search
          </react_bootstrap_1.Navbar.Brand>
          <react_bootstrap_1.Navbar.Toggle aria-controls='navbar'/>
          <react_bootstrap_1.Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <react_bootstrap_1.Nav className='ml-auto d-flex'>
              <react_bootstrap_1.Nav.Link as={react_router_dom_1.Link} to='/'>
                Search For Books
              </react_bootstrap_1.Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {auth_1.default.loggedIn() ? (<>
                  <react_bootstrap_1.Nav.Link as={react_router_dom_1.Link} to='/saved'>
                    See Your Books
                  </react_bootstrap_1.Nav.Link>
                  <react_bootstrap_1.Nav.Link onClick={auth_1.default.logout}>Logout</react_bootstrap_1.Nav.Link>
                </>) : (<react_bootstrap_1.Nav.Link onClick={function () { return setShowModal(true); }}>Login/Sign Up</react_bootstrap_1.Nav.Link>)}
            </react_bootstrap_1.Nav>
          </react_bootstrap_1.Navbar.Collapse>
        </react_bootstrap_1.Container>
      </react_bootstrap_1.Navbar>
      {/* set modal data up */}
      <react_bootstrap_1.Modal size='lg' show={showModal} onHide={function () { return setShowModal(false); }} aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <react_bootstrap_1.Tab.Container defaultActiveKey='login'>
          <react_bootstrap_1.Modal.Header closeButton>
            <react_bootstrap_1.Modal.Title id='signup-modal'>
              <react_bootstrap_1.Nav variant='pills'>
                <react_bootstrap_1.Nav.Item>
                  <react_bootstrap_1.Nav.Link eventKey='login'>Login</react_bootstrap_1.Nav.Link>
                </react_bootstrap_1.Nav.Item>
                <react_bootstrap_1.Nav.Item>
                  <react_bootstrap_1.Nav.Link eventKey='signup'>Sign Up</react_bootstrap_1.Nav.Link>
                </react_bootstrap_1.Nav.Item>
              </react_bootstrap_1.Nav>
            </react_bootstrap_1.Modal.Title>
          </react_bootstrap_1.Modal.Header>
          <react_bootstrap_1.Modal.Body>
            <react_bootstrap_1.Tab.Content>
              <react_bootstrap_1.Tab.Pane eventKey='login'>
                <LoginForm_1.default handleModalClose={function () { return setShowModal(false); }}/>
              </react_bootstrap_1.Tab.Pane>
              <react_bootstrap_1.Tab.Pane eventKey='signup'>
                <SignupForm_1.default handleModalClose={function () { return setShowModal(false); }}/>
              </react_bootstrap_1.Tab.Pane>
            </react_bootstrap_1.Tab.Content>
          </react_bootstrap_1.Modal.Body>
        </react_bootstrap_1.Tab.Container>
      </react_bootstrap_1.Modal>
    </>);
};
exports.default = AppNavbar;
