import * as React from "react"
import sad from "../images/sad-emoji.png"
import Layout from "../components/Layout/layout"

const NotFoundPage = () => (
  <Layout notFound="The sadness...">
    <div className="text-center h-screen place-items-center flex">
      <div>
        <div className="flex flex-col md:flex-row gap-5 place-content-center place-items-center">
          <h1>404: Not Found</h1>
          <img src={sad} alt="404" height="80px" width="80px" />
        </div>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
          Try going back{" "}
          <a href="/" className="text-blue-400 hover:text-blue-500">
            home
          </a>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
