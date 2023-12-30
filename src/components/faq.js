import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {Header, Content, Form, Footer } from "./newapp";

import bl from './Images/querylogo.jpg'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header/>
    <Content source={bl} heading="Feedback and Questions" desc="<br>
                &nbsp;&nbsp;Leave any feedback and questions you have here."/>
    <Form/>
    <Footer/>
  </StrictMode>
);
