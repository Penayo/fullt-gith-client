import React from 'react'

function Welcome () {
  return (
    <div>
      <h5 className="mb-4 text-2xl font-bold">Hi, I Am Gustavo Penayo, a great Node.js Developer ;)</h5>
      <h5 className="mb-4 text-2xl font-bold">Welcome to my Fulltimeforce technical test.</h5>
      <div className="font-bold">This project have two github repositories:</div>
      <ul className="list-disc">
        <li><a href="https://github.com/Penayo/fullt-gith-client" className="text-blue-600" target="_blank" rel="noopener noreferrer">fullt-gith-client</a>, for front-end</li>
        <li><a href="https://github.com/Penayo/fullt-repo-admin" className="text-blue-600" target="_blank" rel="noopener noreferrer">fullt-repo-admin</a>, for back-end</li>
      </ul>
      <br />
      <div className="font-bold">fullt-repo-admin</div>
      <p>Is a <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Nest.js Framework</a></p>
      <p>To make posible the test requirement, I implemented <a href="https://github.com/octokit/octokit.js" target="_blank" rel="noopener noreferrer" className="text-blue-600">Octokit.js</a></p>
      <p>The project implement a <a target="_blank" rel="noopener noreferrer" className="text-blue-600" href="https://swagger.io/">Swagger OpenAPI</a> documentation to make front-ent developers life easiest. This openapidoc is fully funtional, so you can test
      the responses of the API quickly a easily. Enjoy this part.</p>
      <p>The project also implements an automatic documentation for development using compodoc that is an amazing technology, then you can see the whole project without cloning the repository and, if you
      want to extend the project you have a great guide.</p>

      <br />
      <div className="font-bold">fullt-gith-client</div>
      <p>Is a react.js SPA project, that implement <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">tailwindcss</a> and <a href="https://flowbite-react.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">flowbite-react</a> to make fantastic UI</p>
      <p>This project connect with backend making ajax request using <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer" className="text-blue-600">axios.js</a></p>

      <br />
      <p>To see the requirement functionality, check branckes item at left, and try change the repository with the top dropdown botton.</p>
    </div>
  )
}

export default Welcome
