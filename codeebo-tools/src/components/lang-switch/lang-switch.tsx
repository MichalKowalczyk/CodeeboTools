/*
  MIT License
  Copyright (c) 2021 MichalKowalczyk
  
  Source: https://github.com/MichalKowalczyk/CodeeboTools

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

import { useAppDispatch, useAppSelector } from "../../app/store";
import { selectLang, set } from "./langSlice";
import "./lang-switch.scss";
// import { Helmet } from "react-helmet-async";

interface Props {
  className?: string;
}

const LangSwitch: React.FC<Props> = (props: Props) => {
  const lang = useAppSelector(selectLang);
  const dispatch = useAppDispatch();

  return (
    <>
      {/* <Helmet htmlAttributes={{ lang: lang }} /> */}
       <div className="lang-switch">
         <button className={`${lang === "pl" ? "active" : ""}`} onClick={() => dispatch(set("pl"))}>
           PL
         </button>
         <button className={`${lang === "en" ? "active" : ""}`} onClick={() => dispatch(set("en"))}>
           EN
         </button>
       </div>
    </>
  );
};

export default LangSwitch;
