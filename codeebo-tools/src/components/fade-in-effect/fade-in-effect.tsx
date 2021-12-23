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

import React, { useEffect, useRef } from "react";
import "./fade-in-effect.scss";

interface Props {
  img?: string;
  alt?: string;
  className?: string;
  children: React.ReactNode;
}

const FadeInEffect: React.FC<Props> = (props: Props) => {
  const { img, alt = "", className, children } = props;
  const ref = useRef<any>();

  useEffect(() => {
    // define an observer instance
    var observer = new IntersectionObserver(onIntersection, {
      root: null, // default is the viewport
      threshold: 0.25, // percentage of taregt's visible area. Triggers "onIntersection"
    });

    // callback is called on intersection change
    function onIntersection(entries: any, opts: any) {
      console.log(entries);
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }

    // Use the bserver to observe an element
    observer.observe(ref.current!);
  }, []);

  return (
    <div ref={ref} className={`fade-in-effect-wrapper ${className ?? ""}`}>
      <div className="fade-in-effect">{children}</div>
      {/* <img src={img} alt={alt} className="fade-in-effect-img" /> */}
    </div>
  );
};

export default FadeInEffect;
