import React from "react"
import SEO from "../components/seo"
import styled from "styled-components";
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components";

const IndexPage = () => (
  <PageLayout>
    <SEO title="README.md" />

    <GlobalStyles />
    <PageBorder />

    <NavList>
      <li>
        <div className="meta">// release notes v1.2T.ST</div>
        <Link to="/about/">#0XY00Z</Link>
      </li>
      <li>
        <div className="meta">// last updated on 1970-01-01T00:00:00Z</div>
        <Link to="/journal/">Journal</Link>
      </li>
    </NavList>

    <MainContent>
      <section>
        <h1>AX YX <span className="symbol">=&gt;</span></h1>
        <p>
          realistically viable <a href="#">full-stack</a><sup>*</sup> software engineer
          <span className="symbol">;</span>
        </p>
      </section>
    </MainContent>
  </PageLayout>
)

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
`;

const PageBorder = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4px;
  z-index: 1;
  background-color: rgba(255, 0, 0, 1);
  border-top: 2px dotted transparent;
  transform: translateY(50%);
  transition: all 0.2s ease;

  :hover {
    transform: translateY(0);
    border-color: white;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 60px;
  list-style-type: none;

  @media (min-width: 576px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  li {
    margin: 0 0 30px 0;
    font-size: 1rem;
    text-align: right;

    :last-child {
      margin-bottom: 0;
    }

    .meta {
      margin: 0;
      font-style: italic;
      font-size: 0.8rem;
      color: rgba(200, 200, 200, 1);
      transition: all 0.2s ease;
      transition-delay: 0.4s;
    }

    a {
      color: rgba(0, 0, 0, 1);
      text-decoration: none;
      text-transform: uppercase;
      outline: none;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;

      :hover, :focus {
        border-color: rgba(255, 0, 0, 1);
      }

      :active {
        background-color: rgba(255, 255, 0, 1);
      }
    }

    :hover {
      .meta {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const MainContent = styled.main`
  position: relative;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  overflow auto;

  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      margin: 0 0 10px 0;
      font-family: 'Roboto Mono', monospace;
      font-size: 2.4rem;
      font-weight: normal;
    }

    p {
      margin: 0;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: rgba(255, 0, 0, 1);

      .symbol, sup {
        color: rgba(0, 0, 0, 1);
      }

      a {
        color: rgba(255, 0, 0, 1);
        text-decoration: none;
        outline: none;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;

        :hover, :focus {
          border-color: rgba(0, 0, 0, 1);
        }

        :active {
          background-color: rgba(255, 255, 0, 1);
        }
      }
    }
  }
`;

export default IndexPage
