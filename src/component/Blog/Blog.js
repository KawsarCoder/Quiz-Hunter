import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <div className="m-5 container m-auto">
        <h3 className="my-5">Some Important Questions!!!</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              No-01: What is the purpose of react router?
            </Accordion.Header>
            <Accordion.Body>
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application. When a user types a specific URL into the
              browser, and if this URL path matches any 'route' inside the
              router file, the user will be redirected to that particular route.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              No-02: How does context API work?
            </Accordion.Header>
            <Accordion.Body>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              No-03: Write about useRef hook in React!
            </Accordion.Header>
            <Accordion.Body>
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
