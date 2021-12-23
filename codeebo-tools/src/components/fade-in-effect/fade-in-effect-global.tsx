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

import React, { useEffect } from "react";
import "./fade-in-effect-global.scss";

interface Props {
  activatorClass: string;
}

const FadeInEffectGlobal: React.FC<Props> = (props: Props) => {
  const createWrappers = () => {
    const images = document.querySelectorAll("." + props.activatorClass + " img");
    images.forEach((original: Element) => {
      if (!original.parentElement?.classList.contains("fade-in-codeebo")) {
        const wrapper = document.createElement("div");
        if (original!.className !== "") {
          wrapper.classList.add(original!.className);
          original.classList.remove(original.className);
        }
        wrapper.classList.add("fade-in-codeebo");
        var clone = original!.cloneNode(true);

        wrapper.appendChild(clone);
        original!.replaceWith(wrapper);
      }
    });
  };
  const createObservers = () => {
    var observer = new IntersectionObserver(onIntersection, {
      root: null, 
      threshold: 0.25,
    });

    function onIntersection(entries: any, opts: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }

    var selector = document.querySelectorAll(".fade-in-codeebo");
    if (selector) {
      selector.forEach((element) => {
        observer.observe(element);
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      createWrappers();
      createObservers();
    }, 10);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default FadeInEffectGlobal;
